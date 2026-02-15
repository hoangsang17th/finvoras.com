import { ErrorCode } from "./error-codes";

type ErrorMessageMap = Record<string, { en: string; vi: string }>;

export const ErrorMessages: ErrorMessageMap = {
	[ErrorCode.UNKNOWN_ERROR]: {
		en: "An unknown error occurred.",
		vi: "Đã xảy ra lỗi không xác định.",
	},
	[ErrorCode.VALIDATION_ERROR]: {
		en: "Validation failed. Please check your data.",
		vi: "Dữ liệu không hợp lệ. Vui lòng kiểm tra lại.",
	},
	[ErrorCode.RATE_LIMIT_EXCEEDED]: {
		en: "Too many requests. Please try again later.",
		vi: "Quá nhiều yêu cầu. Vui lòng thử lại sau.",
	},
	[ErrorCode.TOKEN_INVALID_OR_EXPIRED]: {
		en: "Session expired. Please log in again.",
		vi: "Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.",
	},
	[ErrorCode.UNEXPECTED_ERROR]: {
		en: "An unexpected error occurred.",
		vi: "Đã xảy ra lỗi không mong muốn.",
	},
	[ErrorCode.RESOURCE_NOT_FOUND_OR_FORBIDDEN]: {
		en: "Resource not found or access denied.",
		vi: "Tài nguyên cập nhật không tồn tại hoặc bạn không có quyền truy cập.",
	},
	[ErrorCode.DO_NOT_JUST_MESS_WITH_ME]: {
		en: "Suspicious activity detected.",
		vi: "Phát hiện hành vi đáng ngờ.",
	},
	[ErrorCode.ACCOUNT_DELETED_OR_NOT_FOUND]: {
		en: "Account not found or has been deleted.",
		vi: "Tài khoản không tìm thấy hoặc đã bị xóa.",
	},
	[ErrorCode.ACCOUNT_ALREADY_EXISTS]: {
		en: "Account already exists.",
		vi: "Tài khoản đã tồn tại.",
	},
	[ErrorCode.ACCOUNT_ALREADY_VERIFIED]: {
		en: "Account is already verified.",
		vi: "Tài khoản đã được xác thực.",
	},
	[ErrorCode.ACCOUNT_BANNED]: {
		en: "Account has been banned.",
		vi: "Tài khoản đã bị khóa.",
	},
	[ErrorCode.ACCOUNT_NOT_VERIFIED]: {
		en: "Account is not verified.",
		vi: "Tài khoản chưa được xác thực.",
	},
	[ErrorCode.ACCOUNT_NOT_ACTIVE]: {
		en: "Account is not active.",
		vi: "Tài khoản chưa được kích hoạt.",
	},
	[ErrorCode.ACCOUNT_NOT_AUTHORIZED]: {
		en: "You are not authorized to perform this action.",
		vi: "Bạn không có quyền thực hiện hành động này.",
	},
	[ErrorCode.INVALID_CREDENTIALS]: {
		en: "Invalid email or password.",
		vi: "Email hoặc mật khẩu không đúng.",
	},
	[ErrorCode.PASSWORD_MISMATCH]: {
		en: "Passwords do not match.",
		vi: "Mật khẩu không khớp.",
	},
	[ErrorCode.PASSWORD_DUPLICATE]: {
		en: "New password cannot be the same as the old one.",
		vi: "Mật khẩu mới không được trùng với mật khẩu cũ.",
	},
	[ErrorCode.CURRENCY_ALREADY_EXISTS]: {
		en: "Currency already exists.",
		vi: "Đơn vị tiền tệ đã tồn tại.",
	},
	[ErrorCode.CURRENCY_NOT_FOUND]: {
		en: "Currency not found.",
		vi: "Không tìm thấy đơn vị tiền tệ.",
	},
	[ErrorCode.TRANSACTION_NOT_FOUND]: {
		en: "Transaction not found.",
		vi: "Không tìm thấy giao dịch.",
	},
	[ErrorCode.WALLET_NOT_ENOUGH_BALANCE]: {
		en: "Insufficient wallet balance.",
		vi: "Số dư ví không đủ.",
	},
	[ErrorCode.WALLET_NOT_FOUND_OR_FORBIDDEN]: {
		en: "Wallet not found or access denied.",
		vi: "Không tìm thấy ví hoặc không có quyền truy cập.",
	},
	[ErrorCode.WALLET_LOCKED]: {
		en: "Wallet is locked.",
		vi: "Ví đang bị khóa.",
	},
};
