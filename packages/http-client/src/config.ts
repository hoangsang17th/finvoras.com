/**
 * Shared API configuration and utilities.
 */

const FALLBACK_API_BASE_URL = "http://localhost:3000/api";
import { env } from "./env";

/**
 * Resolves the base URL for the API.
 * Uses NEXT_PUBLIC_API_URL if defined, otherwise falls back for non-production environments.
 *
 * @param envUrl - Optional URL override (e.g. from process.env.NEXT_PUBLIC_API_URL)
 * @returns {string} The resolved API base URL.
 * @throws {Error} if URL is missing in production.
 */
export const resolveApiBaseUrl = (envUrl?: string): string => {
	// Check provided URL or global process.env (runtime check depends on bundler replacement)
	const configured = (envUrl || env.NEXT_PUBLIC_API_URL)?.trim();

	if (configured) {
		return configured.endsWith("/") ? configured : `${configured}/`;
	}

	if (env.NODE_ENV !== "production") {
		console.warn(
			`NEXT_PUBLIC_API_URL is not defined. Falling back to ${FALLBACK_API_BASE_URL}`,
		);
		return FALLBACK_API_BASE_URL.endsWith("/")
			? FALLBACK_API_BASE_URL
			: `${FALLBACK_API_BASE_URL}/`;
	}

	throw new Error(
		"NEXT_PUBLIC_API_URL is required in production to communicate with the backend API.",
	);
};
