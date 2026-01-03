// Token Interceptor - Handles authentication tokens
import type { RequestInterceptor, ResponseInterceptor, TokenConfig, HttpError } from '../types';

export class TokenInterceptor implements RequestInterceptor, ResponseInterceptor {
    private config: TokenConfig;
    private isRefreshing = false;
    private refreshSubscribers: Array<(token: string) => void> = [];

    constructor(config: TokenConfig) {
        this.config = {
            pathsWithoutAuth: [],
            ...config,
        };
    }

    /**
     * Check if path requires authentication
     */
    private shouldAttachToken(url?: string): boolean {
        if (!url) return true;

        const pathsWithoutAuth = this.config.pathsWithoutAuth || [];
        return !pathsWithoutAuth.some(path => url.includes(path));
    }

    /**
     * Add authorization header to request
     */
    onRequest = async (config: any) => {
        const shouldAttach = this.shouldAttachToken(config.url);

        if (shouldAttach && this.config.getToken) {
            const token = await this.config.getToken();
            if (token) {
                config.headers = config.headers || {};
                config.headers['Authorization'] = `Bearer ${token}`;
            }
        }

        return config;
    };

    /**
     * Handle token expiration errors
     */
    onResponseError = async (error: HttpError) => {
        // Check if error is 401 Unauthorized
        if (error.status === 401) {
            const originalConfig = error.config;

            // Don't retry if we're already on a refresh token endpoint
            if (originalConfig && this.shouldAttachToken(originalConfig.params?.url)) {
                // Try to refresh token
                if (this.config.refreshTokenFn && !this.isRefreshing) {
                    this.isRefreshing = true;

                    try {
                        const newToken = await this.config.refreshTokenFn();

                        if (this.config.setToken) {
                            this.config.setToken(newToken);
                        }

                        // Notify all waiting requests
                        this.refreshSubscribers.forEach(callback => callback(newToken));
                        this.refreshSubscribers = [];

                        this.isRefreshing = false;

                        // Note: The original request won't be retried automatically
                        // The calling code should handle retry logic
                    } catch (refreshError) {
                        this.isRefreshing = false;
                        this.refreshSubscribers = [];

                        // Token refresh failed, call onTokenExpired
                        if (this.config.onTokenExpired) {
                            await this.config.onTokenExpired();
                        }

                        throw error;
                    }
                } else if (this.config.onTokenExpired) {
                    // If no refresh function or already refreshing, just call onTokenExpired
                    await this.config.onTokenExpired();
                }
            }
        }

        throw error;
    };

    /**
     * Subscribe to token refresh
     */
    private subscribeTokenRefresh(callback: (token: string) => void): void {
        this.refreshSubscribers.push(callback);
    }
}
