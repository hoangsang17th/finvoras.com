export const SUPPORTED_LEGAL_LANGUAGES = [
	"En",
	"Vi",
	"Id",
	"Th",
	"De",
	"Fr",
] as const;
export type LegalLanguage = (typeof SUPPORTED_LEGAL_LANGUAGES)[number];

export const DEFAULT_LEGAL_LANGUAGE: LegalLanguage = "En";

/**
 * Extracts and matches the best language from Accept-Language header
 */
export function getLanguageFromHeader(
	header: string | null | undefined,
): LegalLanguage {
	if (!header) return DEFAULT_LEGAL_LANGUAGE;

	try {
		const parsed = header
			.split(",")
			.map((part) => {
				const [rawLang, q] = part.split(";");
				const lang = rawLang?.trim().split("-")[0]?.toLowerCase();
				const weight = q ? parseFloat(q.split("=")[1] || "1.0") : 1.0;
				return { lang, weight };
			})
			.filter((item) => item.lang)
			.sort((a, b) => (b.weight || 0) - (a.weight || 0));

		for (const item of parsed) {
			if (item.lang && SUPPORTED_LEGAL_LANGUAGES.includes(item.lang as any)) {
				return item.lang as LegalLanguage;
			}
		}
	} catch (e) {
		console.error("Error parsing Accept-Language header:", e);
	}

	return DEFAULT_LEGAL_LANGUAGE;
}

/**
 * Gets language from cookie
 */
export function getLanguageFromCookie(
	cookieValue: string | null | undefined,
): LegalLanguage {
	if (cookieValue && SUPPORTED_LEGAL_LANGUAGES.includes(cookieValue as any)) {
		return cookieValue as LegalLanguage;
	}
	return DEFAULT_LEGAL_LANGUAGE;
}

/**
 * Resolves the best language for legal documents based on header and cookie
 */
export function resolveLegalLanguage(
	acceptLanguage: string | null | undefined,
	cookieLocale: string | null | undefined,
): LegalLanguage {
	// 1. Priority: Accept-Language header
	const headerLang = getLanguageFromHeader(acceptLanguage);
	if (headerLang !== DEFAULT_LEGAL_LANGUAGE) {
		return headerLang;
	}

	// 2. Fallback: Cookie
	return getLanguageFromCookie(cookieLocale);
}

/**
 * Formats language code for Backend (Title Case: vi -> Vi)
 */
export function formatLanguageForBackend(lang: string): string {
	if (!lang) return lang;
	return lang.charAt(0).toUpperCase() + lang.slice(1).toLowerCase();
}
