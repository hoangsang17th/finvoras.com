// Logger Interceptor - Logs HTTP requests and responses in development
import type { RequestInterceptor, ResponseInterceptor, HttpError } from '../types';

export class LoggerInterceptor implements RequestInterceptor, ResponseInterceptor {
    private enabled: boolean;

    constructor(enabled: boolean = false) {
        this.enabled = enabled;
    }

    /**
     * Log outgoing request
     */
    onRequest = async (config: any) => {
        if (!this.enabled) return config;

        const timestamp = new Date().toLocaleTimeString();
        const method = (config.method || 'GET').toUpperCase();
        const url = config.url;

        console.log(`🚀 [${timestamp}] HTTP Request: ${method} ${url}`);

        // Detailed group (collapsed by default in many browsers)
        // this.safeGroupCollapsed(`👉 Details for ${method} ${url}`);

        // if (config.params && Object.keys(config.params).length > 0) {
        //     console.log('Query Params:', config.params);
        // }

        // if (config.headers) {
        //     const sanitizedHeaders = this.sanitizeHeaders(config.headers);
        //     console.log('Headers:', sanitizedHeaders);
        // }

        // if (config.body) {
        //     console.log('Body:', config.body);
        // }

        this.safeGroupEnd();

        return config;
    };

    /**
     * Log successful response
     */
    onResponse = async <T>(response: any) => {
        if (!this.enabled) return response;

        const timestamp = new Date().toLocaleTimeString();
        const status = response.status;
        const method = (response.config?.method || 'GET').toUpperCase();
        const url = response.config?.url;

        console.log(`✅ [${timestamp}] HTTP Response (${status}): ${method} ${url}`);

        // this.safeGroupCollapsed(`👉 Details for ${method} ${url}`);

        // if (response.headers) {
        //     console.log('Headers:', response.headers);
        // }

        // if (response.data !== undefined) {
        //     console.log('Data:', response.data);
        // }

        this.safeGroupEnd();

        return response;
    };

    /**
     * Log error response
     */
    onResponseError = async (error: HttpError) => {
        if (!this.enabled) throw error;

        const timestamp = new Date().toLocaleTimeString();
        const status = error.status || 'Network Error';
        const method = (error.config?.method || 'GET').toUpperCase();
        const url = error.config?.url || 'Unknown URL';

        console.error(`❌ [${timestamp}] HTTP Error (${status}): ${method} ${url}`);

        this.safeGroupCollapsed(`👉 Details for ${method} ${url}`);

        console.error('Message:', error.message);

        if (error.response) {
            console.error('Response:', error.response);
        }

        this.safeGroupEnd();

        throw error;
    };

    /**
     * Remove sensitive information from headers
     */
    private sanitizeHeaders(headers: Record<string, string>): Record<string, string> {
        const sensitiveKeys = ['authorization', 'cookie', 'x-api-key', 'x-auth-token'];
        const sanitized: Record<string, string> = {};

        Object.keys(headers).forEach(key => {
            const lowerKey = key.toLowerCase();
            if (sensitiveKeys.includes(lowerKey)) {
                sanitized[key] = '***REDACTED***';
            } else {
                sanitized[key] = headers[key] || '';
            }
        });

        return sanitized;
    }

    /**
     * Safe wrapper for console.groupCollapsed
     */
    private safeGroupCollapsed(label: string): void {
        if (typeof console.groupCollapsed === 'function') {
            console.groupCollapsed(label);
        } else if (typeof console.group === 'function') {
            console.group(label);
        } else {
            console.log(`[GROUP] ${label}`);
        }
    }

    /**
     * Safe wrapper for console.groupEnd
     */
    private safeGroupEnd(): void {
        if (typeof console.groupEnd === 'function') {
            console.groupEnd();
        }
    }
}
