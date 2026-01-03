// Core HTTP Client Implementation
import { buildHeaders, updateLocaleHeader } from './headers';
import {
    HttpClientConfig,
    HttpRequestConfig,
    HttpResponse,
    HttpError,
    RequestInterceptor,
    ResponseInterceptor,
} from './types';

/**
 * Main HTTP Client class
 * Provides standardized HTTP methods with interceptor support
 */
export class HttpClient {
    private config: HttpClientConfig;
    private defaultHeaders: Record<string, string> = {};
    private requestInterceptors: RequestInterceptor[] = [];
    private responseInterceptors: ResponseInterceptor[] = [];

    constructor(config: HttpClientConfig) {
        this.config = {
            timeout: 30000, // 30 seconds default
            withCredentials: false,
            ...config,
        };

        // Initialize default headers
        this.initializeHeaders();
    }

    private async initializeHeaders(): Promise<void> {
        this.defaultHeaders = await buildHeaders(this.config.locale);
        if (this.config.headers) {
            this.defaultHeaders = { ...this.defaultHeaders, ...this.config.headers };
        }
    }

    /**
     * Update locale and refresh headers
     */
    async updateLocale(locale: string): Promise<void> {
        this.config.locale = locale;
        this.defaultHeaders = updateLocaleHeader(this.defaultHeaders, locale);
    }

    /**
     * Add request interceptor
     */
    addRequestInterceptor(interceptor: RequestInterceptor): void {
        this.requestInterceptors.push(interceptor);
    }

    /**
     * Add response interceptor
     */
    addResponseInterceptor(interceptor: ResponseInterceptor): void {
        this.responseInterceptors.push(interceptor);
    }

    /**
     * Build full URL
     */
    private buildURL(endpoint: string, params?: Record<string, any>): string {
        const url = new URL(endpoint, this.config.baseURL);

        if (params) {
            Object.keys(params).forEach(key => {
                const value = params[key];
                if (value !== undefined && value !== null) {
                    url.searchParams.append(key, String(value));
                }
            });
        }

        return url.toString();
    }

    /**
     * Execute request with interceptors
     */
    private async executeRequest<T>(
        method: string,
        endpoint: string,
        requestConfig: HttpRequestConfig = {}
    ): Promise<HttpResponse<T>> {
        // Build request configuration
        let config: HttpRequestConfig = {
            ...requestConfig,
            url: this.buildURL(endpoint, requestConfig.params), // Set full URL
            headers: {
                ...this.defaultHeaders,
                ...requestConfig.headers,
            },
        };

        // Apply request interceptors
        for (const interceptor of this.requestInterceptors) {
            if (interceptor.onRequest) {
                try {
                    config = await interceptor.onRequest(config);
                } catch (error) {
                    if (interceptor.onRequestError) {
                        await interceptor.onRequestError(error as Error);
                    }
                    throw error;
                }
            }
        }

        const url = config.url || this.buildURL(endpoint, config.params);

        // Setup fetch options
        const fetchOptions: RequestInit = {
            method,
            headers: config.headers as HeadersInit,
            credentials: this.config.withCredentials ? 'include' : 'same-origin',
            signal: config.signal,
        };

        // Add body for non-GET requests
        if (config.body && method !== 'GET' && method !== 'HEAD') {
            // Handle FormData vs JSON
            if (config.body instanceof FormData) {
                fetchOptions.body = config.body;
                // Remove Content-Type header to let browser set it with boundary
                delete (fetchOptions.headers as Record<string, string>)['Content-Type'];
            } else if (typeof config.body === 'object') {
                fetchOptions.body = JSON.stringify(config.body);
            } else {
                fetchOptions.body = config.body;
            }
        }

        // Setup timeout
        const controller = new AbortController();
        const timeout = config.timeout || this.config.timeout || 30000;
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        if (!fetchOptions.signal) {
            fetchOptions.signal = controller.signal;
        }

        try {
            // Execute fetch
            const response = await fetch(url, fetchOptions);
            clearTimeout(timeoutId);

            // Parse response
            let data: T;
            const contentType = response.headers.get('content-type') || '';

            if (response.status === 204) {
                data = undefined as T;
            } else if (contentType.includes('application/json')) {
                const text = await response.text();
                data = text ? JSON.parse(text) : undefined;
            } else {
                data = await response.text() as T;
            }

            // Build response object
            const httpResponse: HttpResponse<T> = {
                data,
                status: response.status,
                statusText: response.statusText,
                headers: this.parseHeaders(response.headers),
                config,
            };

            // Check for HTTP errors
            if (!response.ok) {
                const error = new HttpError(
                    (data as any)?.message || response.statusText || 'Request failed',
                    response.status,
                    response.statusText,
                    data,
                    config
                );

                // Apply response error interceptors
                for (const interceptor of this.responseInterceptors) {
                    if (interceptor.onResponseError) {
                        await interceptor.onResponseError(error);
                    }
                }

                throw error;
            }

            // Apply response interceptors
            let finalResponse = httpResponse;
            for (const interceptor of this.responseInterceptors) {
                if (interceptor.onResponse) {
                    finalResponse = await interceptor.onResponse(finalResponse);
                }
            }

            return finalResponse;
        } catch (error) {
            clearTimeout(timeoutId);

            // Handle network errors
            if (error instanceof HttpError) {
                throw error;
            }

            const httpError = new HttpError(
                error instanceof Error ? error.message : 'Network request failed',
                undefined,
                undefined,
                undefined,
                config
            );

            // Apply response error interceptors
            for (const interceptor of this.responseInterceptors) {
                if (interceptor.onResponseError) {
                    await interceptor.onResponseError(httpError);
                }
            }

            throw httpError;
        }
    }

    /**
     * Parse headers from Response
     */
    private parseHeaders(headers: Headers): Record<string, string> {
        const result: Record<string, string> = {};
        headers.forEach((value, key) => {
            result[key] = value;
        });
        return result;
    }

    /**
     * GET request
     */
    async get<T = any>(
        endpoint: string,
        config?: HttpRequestConfig
    ): Promise<HttpResponse<T>> {
        return this.executeRequest<T>('GET', endpoint, config);
    }

    /**
     * POST request
     */
    async post<T = any>(
        endpoint: string,
        body?: any,
        config?: HttpRequestConfig
    ): Promise<HttpResponse<T>> {
        return this.executeRequest<T>('POST', endpoint, {
            ...config,
            body,
        });
    }

    /**
     * PUT request
     */
    async put<T = any>(
        endpoint: string,
        body?: any,
        config?: HttpRequestConfig
    ): Promise<HttpResponse<T>> {
        return this.executeRequest<T>('PUT', endpoint, {
            ...config,
            body,
        });
    }

    /**
     * PATCH request
     */
    async patch<T = any>(
        endpoint: string,
        body?: any,
        config?: HttpRequestConfig
    ): Promise<HttpResponse<T>> {
        return this.executeRequest<T>('PATCH', endpoint, {
            ...config,
            body,
        });
    }

    /**
     * DELETE request
     */
    async delete<T = any>(
        endpoint: string,
        config?: HttpRequestConfig
    ): Promise<HttpResponse<T>> {
        return this.executeRequest<T>('DELETE', endpoint, config);
    }
}
