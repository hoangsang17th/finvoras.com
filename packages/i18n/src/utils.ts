/**
 * Creates a type-safe translations object
 */
export function createTranslations<T>(
	translations: Record<string, T>,
): Record<string, T> {
	return translations;
}

/**
 * Detects browser language preference
 */
export function detectBrowserLanguage(supportedLocales: string[]): string {
	const fallback = supportedLocales[0] || "en";

	if (typeof navigator === "undefined" || !supportedLocales.length) {
		return fallback;
	}

	const browserLang = navigator.language?.split("-")[0];
	if (browserLang && supportedLocales.includes(browserLang)) {
		return browserLang;
	}
	return fallback;
}

/**
 * Gets a cookie value
 */
export function getCookie(name: string): string | null {
	if (typeof document === "undefined") return null;
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
	return null;
}

/**
 * Sets a cookie value
 */
export function setCookie(name: string, value: string, days = 365): void {
	if (typeof document === "undefined") return;
	const date = new Date();
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	const expires = `; expires=${date.toUTCString()}`;
	document.cookie = `${name}=${value}${expires}; path=/`;
}

/**
 * Gets saved locale from storage (Cookie prioritized, then localStorage)
 */
export function getSavedLocale(storageKey: string): string | null {
	// Try cookie first (works for server-side initial hit if hydrated correctly)
	const cookieValue = getCookie(storageKey);
	if (cookieValue) return cookieValue;

	if (typeof localStorage === "undefined") return null;

	try {
		return localStorage.getItem(storageKey);
	} catch {
		return null;
	}
}

/**
 * Saves locale to storage
 */
export function saveLocale(locale: string, storageKey: string): void {
	// Save to cookie for server-side access
	setCookie(storageKey, locale);
	if (typeof localStorage === "undefined") return;

	try {
		localStorage.setItem(storageKey, locale);
	} catch {
		// Silently fail if localStorage is not available
	}
}
