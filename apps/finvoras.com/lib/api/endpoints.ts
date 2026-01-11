/**
 * Centralized API endpoints for the application.
 */
export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: "/auth/login",
        REGISTER: "/auth/register",
        LOGOUT: "/auth/logout",
        REFRESH_TOKEN: "/auth/refresh-token",
        FORGOT_PASSWORD: "/auth/forgot-password",
        RESET_PASSWORD: "/auth/reset-password",
        VERIFY_EMAIL: "/auth/verify-email",
        RESEND_EMAIL_VERIFY: "/auth/resend-email-verify",
        RE_ACTIVE: "/auth/re-active",
    },
    LEGAL: {
        ACTIVE_DOCUMENT: (type: string) => `/legal-documents/active/${type}`,
    },
} as const;
