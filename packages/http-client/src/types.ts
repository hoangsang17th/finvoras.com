// HTTP Client Type Definitions

export interface HttpClientConfig {
    baseURL: string;
    timeout?: number;
    headers?: Record<string, string>;
    locale?: string;
    withCredentials?: boolean;
}

export interface HttpRequestConfig {
    url?: string;
    headers?: Record<string, string>;
    params?: Record<string, any>;
    body?: any;
    signal?: AbortSignal;
    timeout?: number;
}

export interface HttpResponse<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;
    config: HttpRequestConfig;
}

export interface RequestInterceptor {
    onRequest?: (config: HttpRequestConfig) => HttpRequestConfig | Promise<HttpRequestConfig>;
    onRequestError?: (error: Error) => any;
}

export interface ResponseInterceptor {
    onResponse?: <T>(response: HttpResponse<T>) => HttpResponse<T> | Promise<HttpResponse<T>>;
    onResponseError?: (error: HttpError) => any;
}

export class HttpError extends Error {
    constructor(
        message: string,
        public status?: number,
        public statusText?: string,
        public response?: any,
        public config?: HttpRequestConfig
    ) {
        super(message);
        this.name = 'HttpError';
        Object.setPrototypeOf(this, HttpError.prototype);
    }
}

export interface RetryConfig {
    maxRetries?: number;
    baseDelay?: number;
    delayMultiplier?: number;
    maxDelay?: number;
    retryStatusCodes?: number[];
    shouldRetry?: (error: HttpError) => boolean;
}

export interface TokenConfig {
    getToken?: () => string | null | Promise<string | null>;
    setToken?: (token: string) => void;
    getRefreshToken?: () => string | null | Promise<string | null>;
    refreshTokenFn?: () => Promise<string>;
    onTokenExpired?: () => void | Promise<void>;
    pathsWithoutAuth?: string[];
}
