import { Locale, locales } from "../types/locale";

export const getLocale = (locale: string): Locale => {
	return locales.includes(locale as Locale) ? (locale as Locale) : "en";
};
