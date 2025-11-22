import { LoginRequest, RegisterRequest, AuthTokens } from "@/lib/types";

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
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;

    if (typeof window !== "undefined") {
      this.token = localStorage.getItem("auth_token");
    }
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const isFormData = typeof FormData !== "undefined" && options.body instanceof FormData;
    const config: RequestInit = {
      ...options,
      headers: {
        Accept: "application/json",
        ...(this.token && { Authorization: `Bearer ${this.token}` }),
        ...(!isFormData && { "Content-Type": "application/json" }),
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        let message = "An error occurred";
        try {
          const errorBody = await response.json();
          message = errorBody?.message ?? message;
        } catch (_) {
          // ignore parse errors
        }
        throw new Error(message);
      }

      if (response.status === 204) {
        return undefined as T;
      }

      const text = await response.text();
      if (!text) {
        return undefined as T;
      }

      const contentType = response.headers.get("content-type") ?? "";
      if (contentType.includes("application/json")) {
        return JSON.parse(text) as T;
      }

      return text as T;
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  async login(credentials: LoginRequest): Promise<AuthTokens> {
    const payload = {
      email: credentials.email,
      password: credentials.password,
      isRemember: credentials.isRemember ?? false,
    };
    const tokens = await this.request<AuthTokens>(`${AUTH_BASE_PATH}/login`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    this.persistSession(tokens);
    return tokens;
  }

  async register(userData: RegisterRequest): Promise<void> {
    const formData = new FormData();
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("fullName", userData.name || userData.email);

    await this.request<void>(`${AUTH_BASE_PATH}/register`, {
      method: "POST",
      body: formData,
    });
  }

  async logout(): Promise<void> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      this.clearToken();
      return;
    }

    try {
      await this.request<void>(`${AUTH_BASE_PATH}/logout?refreshToken=${refreshToken}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Logout request failed:", error);
    } finally {
      this.clearToken();
    }
  }

  async refreshToken(): Promise<string> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      throw new Error("No refresh token available");
    }

    const newAccessToken = await this.request<string>(`${AUTH_BASE_PATH}/refresh-token?token=${refreshToken}`, {
      method: "POST",
    });
    this.setAccessToken(newAccessToken);
    return newAccessToken;
  }

  async verifyEmail(token: string): Promise<void> {
    await this.request<void>(`${AUTH_BASE_PATH}/verify-email?token=${token}`, {
      method: "PUT",
    });
  }

  async resendVerificationEmail(email: string): Promise<void> {
    const payload = JSON.stringify({ email });
    await this.request<void>(`${AUTH_BASE_PATH}/resend-email-verify`, {
      method: "POST",
      body: payload,
    });
  }

  async forgotPassword(email: string): Promise<void> {
    const payload = JSON.stringify({ email });
    await this.request<void>(`${AUTH_BASE_PATH}/forgot-password`, {
      method: "POST",
      body: payload,
    });
  }

  async resetPassword(token: string, password: string): Promise<void> {
    const payload = JSON.stringify({ password });
    await this.request<void>(`${AUTH_BASE_PATH}/reset-password?token=${token}`, {
      method: "PUT",
      body: payload,
    });
  }

  async requestAccountReactivation(email: string): Promise<void> {
    const payload = JSON.stringify({ email });
    await this.request<void>(`${AUTH_BASE_PATH}/re-active`, {
      method: "POST",
      body: payload,
    });
  }

  async reactivateAccount(token: string): Promise<void> {
    await this.request<void>(`${AUTH_BASE_PATH}/re-active?token=${token}`, {
      method: "PUT",
    });
  }

  private persistSession(tokens: AuthTokens): void {
    this.token = tokens.accessToken;
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", tokens.accessToken);
      localStorage.setItem("refresh_token", tokens.refreshToken);
      localStorage.setItem("token_expired_at", tokens.expiredAt.toString());
    }
  }

  private setAccessToken(token: string): void {
    this.token = token;
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", token);
    }
  }

  clearToken(): void {
    this.token = null;
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("token_expired_at");
    }
  }

  getToken(): string | null {
    return this.token;
  }

  private getRefreshToken(): string | null {
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
  refreshToken: () => apiClient.refreshToken(),
  forgotPassword: (email: string) => apiClient.forgotPassword(email),
  resetPassword: (token: string, password: string) => apiClient.resetPassword(token, password),
  verifyEmail: (token: string) => apiClient.verifyEmail(token),
  resendVerificationEmail: (email: string) => apiClient.resendVerificationEmail(email),
  requestAccountReactivation: (email: string) => apiClient.requestAccountReactivation(email),
  reactivateAccount: (token: string) => apiClient.reactivateAccount(token),
  isAuthenticated: () => apiClient.isAuthenticated(),
};
