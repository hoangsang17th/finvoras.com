/**
 * Creates a type-safe translations object
 */
export function createTranslations<T>(translations: Record<string, T>): Record<string, T> {
  return translations;
}

/**
 * Detects browser language preference
 */
export function detectBrowserLanguage(supportedLocales: string[]): string {
  const fallback = supportedLocales[0] || 'en';

  if (typeof navigator === 'undefined' || !supportedLocales.length) {
    return fallback;
  }

  const browserLang = navigator.language?.split('-')[0];
  if (browserLang && supportedLocales.includes(browserLang)) {
    return browserLang;
  }
  return fallback;
}

/**
 * Gets saved locale from storage
 */
export function getSavedLocale(storageKey: string): string | null {
  if (typeof localStorage === 'undefined') return null;

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
  if (typeof localStorage === 'undefined') return;

  try {
    localStorage.setItem(storageKey, locale);
  } catch {
    // Silently fail if localStorage is not available
  }
}