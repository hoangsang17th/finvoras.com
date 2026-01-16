import { AuthSession, LoginRequest, RefreshTokenResponse, RegisterRequest } from "@/lib/types";
import { HttpClient, TokenInterceptor } from "@repo/http-client";

import { createHttpClient } from "@repo/http-client";
import { API_ENDPOINTS } from "./endpoints";

class ApiClient {
  private httpClient: HttpClient;
  private token: string | null = null;
  private tokenInterceptor: TokenInterceptor;

  constructor() {
    // Initialize HTTP client
    this.httpClient = createHttpClient();

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
        API_ENDPOINTS.AUTH.LOGIN,
        API_ENDPOINTS.AUTH.REGISTER,
        API_ENDPOINTS.AUTH.FORGOT_PASSWORD,
        API_ENDPOINTS.AUTH.RESET_PASSWORD,
        API_ENDPOINTS.AUTH.VERIFY_EMAIL,
        API_ENDPOINTS.AUTH.RESEND_EMAIL_VERIFY,
        API_ENDPOINTS.AUTH.RE_ACTIVE,
      ],
    });

    // Add interceptors
    this.httpClient.addRequestInterceptor(this.tokenInterceptor);
    this.httpClient.addResponseInterceptor(this.tokenInterceptor);
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
      API_ENDPOINTS.AUTH.LOGIN,
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
      API_ENDPOINTS.AUTH.REGISTER,
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
        API_ENDPOINTS.AUTH.LOGOUT,
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
      API_ENDPOINTS.AUTH.REFRESH_TOKEN,
      null,
      { params: { token: refreshToken } }
    );

    this.setAccessToken(response.data.accessToken);
    this.setRefreshToken(response.data.refreshToken);
    return response.data.accessToken;
  }

  async verifyEmail(token: string): Promise<void> {
    await this.httpClient.put<void>(
      API_ENDPOINTS.AUTH.VERIFY_EMAIL,
      null,
      { params: { token } }
    );
  }

  async resendVerificationEmail(email: string): Promise<void> {
    await this.httpClient.post<void>(
      API_ENDPOINTS.AUTH.RESEND_EMAIL_VERIFY,
      { email }
    );
  }

  async forgotPassword(email: string): Promise<void> {
    await this.httpClient.post<void>(
      API_ENDPOINTS.AUTH.FORGOT_PASSWORD,
      { email }
    );
  }

  async resetPassword(token: string, password: string): Promise<void> {
    await this.httpClient.put<void>(
      API_ENDPOINTS.AUTH.RESET_PASSWORD,
      { password },
      { params: { token } }
    );
  }

  async requestAccountReactivation(email: string): Promise<void> {
    await this.httpClient.post<void>(
      API_ENDPOINTS.AUTH.RE_ACTIVE,
      { email }
    );
  }

  async reactivateAccount(token: string): Promise<void> {
    await this.httpClient.put<void>(
      API_ENDPOINTS.AUTH.RE_ACTIVE,
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
export const apiClient = new ApiClient();

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
