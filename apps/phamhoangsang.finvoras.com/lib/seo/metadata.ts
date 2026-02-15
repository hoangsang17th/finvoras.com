import type { Metadata } from "next";
import { getLocalizedResumeData } from "@/lib/data/resume";
import { uiTranslations } from "@/lib/data/ui-translations";
import { Locale, locales, PageKey } from "../types/locale";
import { getLocalizedPath } from "../utils/path";
import { getLocale } from "../utils/parse-locale";

// Google hiểu nội dung là gì

const keywords = [
	// Brand
	"Phạm Hoàng Sang",
	"Pham Hoang Sang",
	"Sang Pham Flutter",
	"Pham Hoang Sang Finvoras",

	// Role / intent
	"Flutter Engineer Vietnam",
	"Senior Flutter Developer",
	"Flutter Developer Portfolio",
	"Mobile App Developer Flutter",

	// Authority
	"Finvoras Founder",
	"Financial App Developer",
	"Scalable Flutter Architecture",
];

/**
 * Page titles: mỗi page = 1 search intent rõ ràng
 */
const pageTitles: Record<Locale, Record<PageKey, string>> = {
	en: {
		root: "Pham Hoang Sang - Flutter Engineer & Finvoras Founder",
		about: "About Pham Hoang Sang - Flutter Engineer",
		projects: "Projects - Flutter & Mobile Apps",
		experience: "Experience - Senior Flutter Engineer",
		skills: "Skills - Flutter & Mobile Architecture",
		contact: "Contact Pham Hoang Sang",
	},
	vi: {
		root: "Phạm Hoàng Sang - Flutter Engineer & Founder Finvoras",
		about: "Giới thiệu - Phạm Hoàng Sang (Flutter Engineer)",
		projects: "Dự án Flutter & Mobile App",
		experience: "Kinh nghiệm - Senior Flutter Engineer",
		skills: "Kỹ năng - Flutter & Kiến trúc Mobile",
		contact: "Liên hệ - Phạm Hoàng Sang",
	},
};

/**
 * Page descriptions
 * → Vẫn dùng UI data, nhưng compose lại cho SEO
 */
const pageDescriptions: Record<Locale, Record<PageKey, string>> = {
	en: {
		root: "Portfolio of Pham Hoang Sang, a Flutter-focused Software Engineer and Founder of Finvoras, specializing in scalable mobile and financial applications.",
		about:
			"Learn more about Pham Hoang Sang, a Flutter Engineer with experience building scalable mobile apps and financial products.",
		projects: uiTranslations.en.sections.projects.subtitle,
		experience: uiTranslations.en.sections.experience.subtitle,
		skills: uiTranslations.en.sections.skills.subtitle,
		contact: uiTranslations.en.sections.contact.subtitle,
	},
	vi: {
		root: "Portfolio của Phạm Hoàng Sang, Software Engineer tập trung Flutter và Founder Finvoras, chuyên xây dựng ứng dụng mobile và tài chính có khả năng mở rộng.",
		about:
			"Giới thiệu về Phạm Hoàng Sang, Flutter Engineer với kinh nghiệm xây dựng ứng dụng mobile và sản phẩm tài chính.",
		projects: uiTranslations.vi.sections.projects.subtitle,
		experience: uiTranslations.vi.sections.experience.subtitle,
		skills: uiTranslations.vi.sections.skills.subtitle,
		contact: uiTranslations.vi.sections.contact.subtitle,
	},
};

const getAlternateLanguages = (siteUrl: string, page: PageKey) =>
	locales.reduce(
		(acc, locale) => {
			acc[locale] = `${siteUrl}${getLocalizedPath(locale, page)}`;
			return acc;
		},
		{} as Record<Locale, string>,
	);

/**
 * Site-level metadata
 */
export function getSiteMetadata(locale: string = "en"): Metadata {
	const validLocale = locales.includes(locale as Locale)
		? (locale as Locale)
		: "en";
	const resume = getLocalizedResumeData(validLocale);
	const siteUrl = resume.personalInfo.website!;
	const canonical = `${siteUrl}${getLocalizedPath(validLocale, "root")}`;

	return {
		metadataBase: new URL(siteUrl),
		title: {
			default: `${resume.personalInfo.name} — Flutter Engineer & Mobile App Developer`,
			template: `%s | ${resume.personalInfo.name}`,
		},
		description: pageDescriptions[validLocale].root,
		keywords,
		alternates: {
			canonical,
			languages: getAlternateLanguages(siteUrl, "root"),
		},
		openGraph: {
			title: pageTitles[validLocale].root,
			description: pageDescriptions[validLocale].root,
			url: canonical,
			siteName: `${resume.personalInfo.name} Portfolio`,
			locale: validLocale === "vi" ? "vi_VN" : "en_US",
			type: "website",
			images: ["/logo.png"],
		},
		twitter: {
			card: "summary_large_image",
			title: pageTitles[validLocale].root,
			description: pageDescriptions[validLocale].root,
			images: ["/logo.png"],
		},
		icons: {
			icon: "/favicon.ico?v=4",
			shortcut: "/favicon.ico?v=4",
			apple: "/logo.png",
		},
		other: {
			"link:preload": "/logo.png",
		},
	};
}

/**
 * Page-level metadata
 */
export function getPageMetadata(
	page: PageKey,
	locale: string = "en",
): Metadata {
	const validLocale = getLocale(locale);
	const resume = getLocalizedResumeData(validLocale);

	const siteUrl = resume.personalInfo.website;

	const title = pageTitles[validLocale][page];
	const description =
		pageDescriptions[validLocale][page] || resume.personalInfo.summary;
	const fullUrl = `${siteUrl}${getLocalizedPath(validLocale, page)}`;
	return {
		title,
		description,
		alternates: {
			canonical: fullUrl,
			languages: getAlternateLanguages(siteUrl!, page),
		},
		openGraph: {
			title: `${title} | ${resume.personalInfo.name}`,
			description,
			url: fullUrl,
			images: ["/logo.png"],
		},
		twitter: {
			title: `${title} | ${resume.personalInfo.name}`,
			description,
			images: ["/logo.png"],
		},
	};
}
