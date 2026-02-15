import { Translations } from "./types/translations";
import { ui } from "./data/translations/ui";
import { home } from "./data/translations/home";
import { production } from "./data/translations/production";
import { auth } from "./data/translations/auth";
import { contact } from "./data/translations/contact";

const mergeTranslations = (
	base: any,
	...parts: any[]
): Record<"en" | "vi", Translations> => {
	const result: any = { en: { ...base.en }, vi: { ...base.vi } };
	parts.forEach((part) => {
		Object.keys(part).forEach((lang) => {
			result[lang as "en" | "vi"] = {
				...result[lang as "en" | "vi"],
				...part[lang as "en" | "vi"],
			};
		});
	});
	return result;
};

export const finvorasTranslations: Record<"en" | "vi", Translations> =
	mergeTranslations(ui, home, production, auth, contact);

export type FinvorasTranslations = Translations;
export default finvorasTranslations;
