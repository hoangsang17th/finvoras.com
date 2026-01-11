import { HttpClient, HttpClientConfig, LoggerInterceptor, ExceptionInterceptor } from "@repo/http-client";
import { resolveApiBaseUrl } from "./config";

/**
 * Creates a pre-configured HttpClient with common settings.
 * 
 * @param configOverride - Optional configuration overrides
 * @returns Pre-configured HttpClient instance
 */
export function createHttpClient(configOverride: Partial<HttpClientConfig> = {}): HttpClient {
    const isDev = process.env.NODE_ENV === "development";

    const client = new HttpClient({
        baseURL: resolveApiBaseUrl(),
        timeout: 3000,
        appInfo: {
            name: process.env.NEXT_PUBLIC_APP_NAME || "Finvoras",
            version: process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0",
            buildNumber: process.env.NEXT_PUBLIC_APP_BUILD_NUMBER || process.env.NEXT_PUBLIC_APP_BUILD,
        },
        debug: isDev,
        ...configOverride,
    });

    // Add standard interceptors
    client.addRequestInterceptor(new LoggerInterceptor(isDev));
    client.addResponseInterceptor(new LoggerInterceptor(isDev));
    client.addResponseInterceptor(new ExceptionInterceptor());

    return client;
}
