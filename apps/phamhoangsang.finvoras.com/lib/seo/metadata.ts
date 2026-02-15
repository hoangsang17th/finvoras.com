import type { Metadata } from "next";
import { getLocalizedResumeData } from "@/lib/data/resume";
import { uiTranslations } from "@/lib/data/ui-translations";

// Google hiểu nội dung là gì
type Locale = "en" | "vi";
type PageKey = "root" | "about" | "projects" | "experience" | "skills" | "contact";
const locales: Locale[] = ["en", "vi"];

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

const pagePaths: Record<PageKey, string> = {
  root: "/",
  about: "/about",
  projects: "/projects",
  experience: "/experience",
  skills: "/skills",
  contact: "/contact",
};

const getLocalizedPath = (locale: Locale, page: PageKey) =>
  `/${locale}${pagePaths[page] === "/" ? "" : pagePaths[page]}`;

const getAlternateLanguages = (siteUrl: string, page: PageKey) =>
  locales.reduce((acc, locale) => {
    acc[locale] = `${siteUrl}${getLocalizedPath(locale, page)}`;
    return acc;
  }, {} as Record<Locale, string>);

/**
 * Site-level metadata
 */
export function getSiteMetadata(locale: Locale = "en"): Metadata {
  const resume = getLocalizedResumeData(locale);
  const siteUrl = resume.personalInfo.website!;
  const canonical = `${siteUrl}${getLocalizedPath(locale, "root")}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${resume.personalInfo.name} — Flutter Engineer & Mobile App Developer`,
      template: `%s | ${resume.personalInfo.name}`,
    },
    description: pageDescriptions[locale].root,
    keywords,
    alternates: {
      canonical,
      languages: getAlternateLanguages(siteUrl, "root"),
    },
    openGraph: {
      title: pageTitles[locale].root,
      description: pageDescriptions[locale].root,
      url: canonical,
      siteName: `${resume.personalInfo.name} Portfolio`,
      locale: locale === "vi" ? "vi_VN" : "en_US",
      type: "website",
      images: ["/logo.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitles[locale].root,
      description: pageDescriptions[locale].root,
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
export function getPageMetadata(page: PageKey, locale: Locale = "en"): Metadata {
  const resume = getLocalizedResumeData(locale);

  const siteUrl = resume.personalInfo.website;

  const title = pageTitles[locale][page];
  const description = pageDescriptions[locale][page] || resume.personalInfo.summary;
  const fullUrl = `${siteUrl}${getLocalizedPath(locale, page)}`;
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
