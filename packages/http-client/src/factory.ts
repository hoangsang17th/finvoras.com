import { HttpClient } from "./http-client";
import { HttpClientConfig } from "./types";
import { LoggerInterceptor } from "./interceptors/logger";
import { ExceptionInterceptor } from "./interceptors/exception";
import { resolveApiBaseUrl } from "./config";
import { env } from "./env";

/**
 * Creates a pre-configured HttpClient with common settings.
 *
 * @param configOverride - Optional configuration overrides
 * @returns Pre-configured HttpClient instance
 */
export function createHttpClient(
	configOverride: Partial<HttpClientConfig> = {},
): HttpClient {
	const isDev = env.NODE_ENV === "development";

	// Default App Info from process.env if available (Next.js replaces these at build time)
	const defaultAppInfo = {
		name: env.NEXT_PUBLIC_APP_NAME || "Finvoras",
		version: env.NEXT_PUBLIC_APP_VERSION || "1.0.0",
		buildNumber: env.NEXT_PUBLIC_APP_BUILD_NUMBER || env.NEXT_PUBLIC_APP_BUILD,
	};

	const client = new HttpClient({
		baseURL: resolveApiBaseUrl(),
		timeout: 30000,
		debug: isDev,
		...configOverride,
		// Merging appInfo if provided in override
		appInfo: {
			...defaultAppInfo,
			...(configOverride.appInfo || {}),
		},
	});

	// Add standard interceptors
	// Note: Interceptors are executed in REVERSE order of addition for Requests
	// and IN ORDER for Responses.

	client.addRequestInterceptor(new LoggerInterceptor(isDev));
	client.addResponseInterceptor(new LoggerInterceptor(isDev));
	client.addResponseInterceptor(new ExceptionInterceptor());

	return client;
}
