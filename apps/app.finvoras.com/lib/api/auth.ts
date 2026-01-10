// Refactored Auth API using new HTTP Client
import { AuthSession, LoginRequest, RefreshTokenResponse, RegisterRequest } from "@/lib/types";
import { HttpClient, TokenInterceptor, LoggerInterceptor, ExceptionInterceptor } from "@repo/http-client";

const FALLBACK_API_BASE_URL = "http://localhost:3000/api";
const API_BASE_URL = (() => {
  const configuredUrl = process.env.NEXT_PUBLIC_API_URL?.trim();
  if (configuredUrl) {
    return configuredUrl.replace(/\/$/, "");
  }

  if (process.env.NODE_ENV !== "production") {
    console.warn(
      "NEXT_PUBLIC_API_URL is not defined. Falling back to",
      FALLBACK_API_BASE_URL
    );
    return FALLBACK_API_BASE_URL;
  }

  throw new Error(
    "NEXT_PUBLIC_API_URL is required in production to communicate with the backend API."
  );
})();

const AUTH_BASE_PATH = "/auth";

class ApiClient {
  private httpClient: HttpClient;
  private token: string | null = null;
  private tokenInterceptor: TokenInterceptor;

  constructor(baseURL: string) {
    // Initialize HTTP client
    const isDev = process.env.NODE_ENV === "development";
    this.httpClient = new HttpClient({
      baseURL,
      timeout: 30000,
      appInfo: {
        name: process.env.NEXT_PUBLIC_APP_NAME || "Finvoras",
        version: process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0",
        buildNumber: process.env.NEXT_PUBLIC_APP_BUILD_NUMBER || process.env.NEXT_PUBLIC_APP_BUILD,
      },
      debug: isDev,
    });

    // Load token from localStorage
    if (typeof window !== "undefined") {
      this.token = localStorage.getItem("auth_token");
    }

    // Setup token interceptor
    this.tokenInterceptor = new TokenInterceptor({
      getToken: () => this.getToken(),
      setToken: (token: string) => this.setAccessToken(token),
      getRefreshToken: () => this.getRefreshTokenFromStorage(),
      refreshTokenFn: () => this.refreshTokenInternal(),
      onTokenExpired: () => this.clearToken(),
      pathsWithoutAuth: [
        `${AUTH_BASE_PATH}/login`,
        `${AUTH_BASE_PATH}/register`,
        `${AUTH_BASE_PATH}/forgot-password`,
        `${AUTH_BASE_PATH}/reset-password`,
        `${AUTH_BASE_PATH}/verify-email`,
        `${AUTH_BASE_PATH}/resend-email-verify`,
        `${AUTH_BASE_PATH}/re-active`,
      ],
    });

    // Add interceptors
    this.httpClient.addRequestInterceptor(this.tokenInterceptor);
    this.httpClient.addResponseInterceptor(this.tokenInterceptor);
    this.httpClient.addRequestInterceptor(new LoggerInterceptor(isDev));
    this.httpClient.addResponseInterceptor(new LoggerInterceptor(isDev));
    this.httpClient.addResponseInterceptor(new ExceptionInterceptor());
  }

  getHttpClient(): HttpClient {
    return this.httpClient;
  }

  async login(credentials: LoginRequest): Promise<AuthSession> {
    const payload = {
      email: credentials.email,
      password: credentials.password,
      isRemember: credentials.isRemember ?? false,
      mfaMethod: credentials.mfaMethod,
      totpCode: credentials.totpCode,
      backupCode: credentials.backupCode,
    };

    const response = await this.httpClient.post<AuthSession>(
      `${AUTH_BASE_PATH}/login`,
      payload
    );

    this.persistSession(response.data);
    return response.data;
  }

  async register(userData: RegisterRequest): Promise<void> {
    const formData = new FormData();
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("fullName", userData.fullName || userData.email);
    formData.append("acceptLegalDocuments", String(userData.acceptLegalDocuments));

    await this.httpClient.post<void>(
      `${AUTH_BASE_PATH}/register`,
      formData
    );
  }

  async logout(): Promise<void> {
    const refreshToken = this.getRefreshTokenFromStorage();
    if (!refreshToken) {
      this.clearToken();
      return;
    }

    try {
      await this.httpClient.delete<void>(
        `${AUTH_BASE_PATH}/logout`,
        { params: { refreshToken } }
      );
    } catch (error) {
      console.error("Logout request failed:", error);
    } finally {
      this.clearToken();
    }
  }

  private async refreshTokenInternal(): Promise<string> {
    const refreshToken = this.getRefreshTokenFromStorage();
    if (!refreshToken) {
      throw new Error("No refresh token available");
    }

    const response = await this.httpClient.post<RefreshTokenResponse>(
      `${AUTH_BASE_PATH}/refresh-token`,
      null,
      { params: { token: refreshToken } }
    );

    this.setAccessToken(response.data.accessToken);
    this.setRefreshToken(response.data.refreshToken);
    return response.data.accessToken;
  }

  async verifyEmail(token: string): Promise<void> {
    await this.httpClient.put<void>(
      `${AUTH_BASE_PATH}/verify-email`,
      null,
      { params: { token } }
    );
  }

  async resendVerificationEmail(email: string): Promise<void> {
    await this.httpClient.post<void>(
      `${AUTH_BASE_PATH}/resend-email-verify`,
      { email }
    );
  }

  async forgotPassword(email: string): Promise<void> {
    await this.httpClient.post<void>(
      `${AUTH_BASE_PATH}/forgot-password`,
      { email }
    );
  }

  async resetPassword(token: string, password: string): Promise<void> {
    await this.httpClient.put<void>(
      `${AUTH_BASE_PATH}/reset-password`,
      { password },
      { params: { token } }
    );
  }

  async requestAccountReactivation(email: string): Promise<void> {
    await this.httpClient.post<void>(
      `${AUTH_BASE_PATH}/re-active`,
      { email }
    );
  }

  async reactivateAccount(token: string): Promise<void> {
    await this.httpClient.put<void>(
      `${AUTH_BASE_PATH}/re-active`,
      null,
      { params: { token } }
    );
  }

  private persistSession(session: AuthSession): void {
    this.token = session.accessToken;
    if (typeof window !== "undefined") {
      this.setAccessToken(session.accessToken);
      this.setRefreshToken(session.refreshToken);
      if (session.expiredAt) {
        localStorage.setItem("token_expired_at", session.expiredAt.toString());
      }
      if (session.user) {
        localStorage.setItem("auth_user", JSON.stringify(session.user));
      }
    }
  }

  private setAccessToken(token: string): void {
    this.token = token;
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", token);
    }
  }

  private setRefreshToken(token: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem("refresh_token", token);
    }
  }

  clearToken(): void {
    this.token = null;
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("token_expired_at");
      localStorage.removeItem("auth_user");
    }
  }

  getToken(): string | null {
    return this.token;
  }

  private getRefreshTokenFromStorage(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem("refresh_token");
    }
    return null;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}

// Export singleton instance
export const apiClient = new ApiClient(API_BASE_URL);

// Convenience auth functions
export const authApi = {
  login: (credentials: LoginRequest) => apiClient.login(credentials),
  register: (userData: RegisterRequest) => apiClient.register(userData),
  logout: () => apiClient.logout(),
  forgotPassword: (email: string) => apiClient.forgotPassword(email),
  resetPassword: (token: string, password: string) => apiClient.resetPassword(token, password),
  verifyEmail: (token: string) => apiClient.verifyEmail(token),
  resendVerificationEmail: (email: string) => apiClient.resendVerificationEmail(email),
  requestAccountReactivation: (email: string) => apiClient.requestAccountReactivation(email),
  reactivateAccount: (token: string) => apiClient.reactivateAccount(token),
  isAuthenticated: () => apiClient.isAuthenticated(),
};
