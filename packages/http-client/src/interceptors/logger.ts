// Logger Interceptor - Logs HTTP requests and responses in development
import type { RequestInterceptor, ResponseInterceptor, HttpError } from '../types';

export class LoggerInterceptor implements RequestInterceptor, ResponseInterceptor {
    private enabled: boolean;

    constructor(enabled: boolean = process.env.NODE_ENV === 'development') {
        this.enabled = enabled;
    }

    /**
     * Log outgoing request
     */
    onRequest = async (config: any) => {
        if (!this.enabled) return config;

        const timestamp = new Date().toISOString();
        console.group(`🚀 HTTP Request [${timestamp}]`);
        console.log('Method:', config.method || 'GET');
        console.log('URL:', config.url);

        if (config.params && Object.keys(config.params).length > 0) {
            console.log('Query Params:', config.params);
        }

        if (config.headers) {
            const sanitizedHeaders = this.sanitizeHeaders(config.headers);
            console.log('Headers:', sanitizedHeaders);
        }

        if (config.body) {
            console.log('Body:', config.body);
        }

        console.groupEnd();

        return config;
    };

    /**
     * Log successful response
     */
    onResponse = async <T>(response: any) => {
        if (!this.enabled) return response;

        const timestamp = new Date().toISOString();
        console.group(`✅ HTTP Response [${timestamp}]`);
        console.log('Status:', response.status, response.statusText);
        console.log('URL:', response.config?.url);

        if (response.headers) {
            console.log('Headers:', response.headers);
        }

        if (response.data !== undefined) {
            console.log('Data:', response.data);
        }

        console.groupEnd();

        return response;
    };

    /**
     * Log error response
     */
    onResponseError = async (error: HttpError) => {
        if (!this.enabled) throw error;

        const timestamp = new Date().toISOString();
        console.group(`❌ HTTP Error [${timestamp}]`);
        console.error('Message:', error.message);

        if (error.status) {
            console.error('Status:', error.status, error.statusText);
        }

        if (error.config?.url) {
            console.error('URL:', error.config.url);
        }

        if (error.response) {
            console.error('Response:', error.response);
        }

        console.groupEnd();

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
}
