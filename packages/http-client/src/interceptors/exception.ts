// Exception Interceptor - Handles and transforms HTTP errors
import type { ResponseInterceptor, HttpError } from "../types";

import { ErrorMessages } from "../error-messages";

export class ExceptionInterceptor implements ResponseInterceptor {
	private locale: string;

	constructor(locale: string = "en") {
		this.locale = locale;
	}

	/**
	 * Update locale for error messages
	 */
	setLocale(locale: string): void {
		this.locale = locale;
	}

	/**
	 * Get message from ErrorCode
	 */
	private getErrorCodeMessage(code: string): string | null {
		const message = ErrorMessages[code];
		if (message) {
			return (this.locale === "vi" ? message.vi : message.en) || message.en;
		}
		return null;
	}

	/**
	 * Handle and transform errors
	 */
	onResponseError = async (error: HttpError) => {
		// Transform error message to be user-friendly
		const transformedError = this.transformError(error);
		throw transformedError;
	};

	/**
	 * Transform error to user-friendly message
	 */
	private transformError(error: HttpError): HttpError {
		// Priority 1: Check for backend ErrorCode
		const errorCode =
			error.response?.data?.errorCode || error.response?.data?.error_code;
		if (errorCode) {
			const mappedMessage = this.getErrorCodeMessage(errorCode);
			if (mappedMessage) {
				error.message = mappedMessage;
				return error;
			}
		}

		// Priority 2: If response has a custom message from backend, use it
		if (error.response?.message) {
			error.message = error.response.message;
			return error;
		}

		// Priority 3: Map status codes to user-friendly messages
		if (error.status) {
			error.message = this.getErrorMessage(error.status);
		} else {
			// Priority 4: Network error
			error.message = this.getNetworkErrorMessage();
		}

		return error;
	}

	/**
	 * Get user-friendly error message based on status code
	 */
	private getErrorMessage(status: number): string {
		const messages: Record<number, Record<string, string>> = {
			400: {
				en: "Bad request. Please check your input and try again.",
				vi: "Yêu cầu không hợp lệ. Vui lòng kiểm tra thông tin và thử lại.",
			},
			401: {
				en: "You are not authenticated. Please log in and try again.",
				vi: "Bạn chưa đăng nhập. Vui lòng đăng nhập và thử lại.",
			},
			403: {
				en: "You do not have permission to access this resource.",
				vi: "Bạn không có quyền truy cập tài nguyên này.",
			},
			404: {
				en: "The requested resource was not found.",
				vi: "Không tìm thấy tài nguyên được yêu cầu.",
			},
			408: {
				en: "Request timeout. Please try again.",
				vi: "Yêu cầu hết thời gian chờ. Vui lòng thử lại.",
			},
			409: {
				en: "Conflict. The resource already exists or there is a conflict with the current state.",
				vi: "Xung đột. Tài nguyên đã tồn tại hoặc có xung đột với trạng thái hiện tại.",
			},
			422: {
				en: "Validation error. Please check your input.",
				vi: "Lỗi xác thực. Vui lòng kiểm tra thông tin đầu vào.",
			},
			429: {
				en: "Too many requests. Please slow down and try again later.",
				vi: "Quá nhiều yêu cầu. Vui lòng thử lại sau.",
			},
			500: {
				en: "Internal server error. Please try again later.",
				vi: "Lỗi máy chủ nội bộ. Vui lòng thử lại sau.",
			},
			502: {
				en: "Bad gateway. The server is temporarily unavailable.",
				vi: "Lỗi cổng kết nối. Máy chủ tạm thời không khả dụng.",
			},
			503: {
				en: "Service unavailable. Please try again later.",
				vi: "Dịch vụ không khả dụng. Vui lòng thử lại sau.",
			},
			504: {
				en: "Gateway timeout. The server took too long to respond.",
				vi: "Hết thời gian chờ cổng kết nối. Máy chủ mất quá nhiều thời gian để phản hồi.",
			},
		};

		const messageMap = messages[status];
		if (messageMap) {
			return messageMap[this.locale] || messageMap["en"] || "An error occurred";
		}

		// Default message
		return this.locale === "vi"
			? "Đã xảy ra lỗi. Vui lòng thử lại."
			: "An error occurred. Please try again.";
	}

	/**
	 * Get network error message
	 */
	private getNetworkErrorMessage(): string {
		return this.locale === "vi"
			? "Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối mạng của bạn."
			: "Unable to connect to the server. Please check your network connection.";
	}
}
