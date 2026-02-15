// Retry Interceptor - Automatically retries failed requests
import type { ResponseInterceptor, HttpError, RetryConfig } from "../types";

export class RetryInterceptor implements ResponseInterceptor {
	private config: Required<RetryConfig>;
	private retryCount: Map<string, number> = new Map();

	constructor(config: RetryConfig = {}) {
		this.config = {
			maxRetries: config.maxRetries ?? 3,
			baseDelay: config.baseDelay ?? 1000, // 1 second
			delayMultiplier: config.delayMultiplier ?? 2,
			maxDelay: config.maxDelay ?? 30000, // 30 seconds
			retryStatusCodes: config.retryStatusCodes ?? [408, 500, 502, 503, 504],
			shouldRetry: config.shouldRetry ?? this.defaultShouldRetry,
			debug: config.debug ?? false,
		};
	}

	/**
	 * Default retry evaluation logic
	 */
	private defaultShouldRetry = (error: HttpError): boolean => {
		// Don't retry if no status (network error on unsafe methods)
		if (!error.status) {
			// Only retry GET, HEAD, OPTIONS (safe methods)
			const method = error.config?.body ? "POST" : "GET"; // Simplified check
			return ["GET", "HEAD", "OPTIONS"].includes(method);
		}

		// Retry based on status code
		return this.config.retryStatusCodes.includes(error.status);
	};

	/**
	 * Calculate delay for retry attempt
	 */
	private calculateDelay(attemptNumber: number): number {
		const delay =
			this.config.baseDelay *
			Math.pow(this.config.delayMultiplier, attemptNumber - 1);
		return Math.min(delay, this.config.maxDelay);
	}

	/**
	 * Sleep for specified duration
	 */
	private sleep(ms: number): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	/**
	 * Get request identifier for tracking retries
	 */
	private getRequestId(config?: any): string {
		if (!config) return "unknown";
		return `${config.method || "GET"}_${config.url || "unknown"}`;
	}

	/**
	 * Handle retry logic for failed responses
	 */
	onResponseError = async (error: HttpError) => {
		const requestId = this.getRequestId(error.config);
		const currentRetries = this.retryCount.get(requestId) || 0;

		// Check if we should retry
		const shouldRetry = this.config.shouldRetry(error);
		const canRetry = currentRetries < this.config.maxRetries;

		if (!shouldRetry || !canRetry) {
			// Clean up retry count
			this.retryCount.delete(requestId);
			throw error;
		}

		// Increment retry count
		const nextRetry = currentRetries + 1;
		this.retryCount.set(requestId, nextRetry);

		// Calculate and wait for delay
		const delay = this.calculateDelay(nextRetry);

		if (this.config.debug) {
			console.log(
				`🔄 Retrying request (${nextRetry}/${this.config.maxRetries}) after ${delay}ms:`,
				requestId,
			);
		}

		await this.sleep(delay);

		// Note: The actual retry execution needs to be handled by the HTTP client
		// This interceptor just manages the retry logic and delays
		// The error is thrown to signal that a retry should happen
		throw error;
	};

	/**
	 * Reset retry count for a specific request
	 */
	clearRetryCount(config: any): void {
		const requestId = this.getRequestId(config);
		this.retryCount.delete(requestId);
	}
}
