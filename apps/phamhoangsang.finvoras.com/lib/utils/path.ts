import { Locale, PageKey } from "../types/locale";

const pagePaths: Record<PageKey, string> = {
	root: "/",
	about: "/about",
	projects: "/projects",
	experience: "/experience",
	skills: "/skills",
	contact: "/contact",
};

export const getLocalizedPath = (locale: Locale, page: PageKey) =>
	`/${locale}${pagePaths[page] === "/" ? "" : pagePaths[page]}`;
