import { uiTranslations } from "./data/translations/ui";
import { homeTranslations } from "./data/translations/home";
import { productionTranslations } from "./data/translations/production";
import type { Translations } from "./types/translations";

// Helper to merge local translation parts
const mergeTranslations = (locale: "en" | "vi"): Translations => {
  return {
    ...uiTranslations[locale],
    ...homeTranslations[locale],
    ...productionTranslations[locale],
    blog: {
      title: locale === "en" ? "Financial Insights & Tips" : "Hiểu Biết & Mẹo Tài Chính",
      subtitle: locale === "en" ? "Stay informed with the latest in personal finance and wealth building" : "Cập nhật thông tin mới nhất về tài chính cá nhân và xây dựng tài sản",
      readMore: locale === "en" ? "Read More" : "Đọc Thêm",
      shareArticle: locale === "en" ? "Share Article" : "Chia Sẻ Bài Viết",
      relatedPosts: locale === "en" ? "Related Posts" : "Bài Viết Liên Quan",
      categories: locale === "en" ? "Categories" : "Danh Mục",
      tags: locale === "en" ? "Tags" : "Thẻ",
      author: locale === "en" ? "Author" : "Tác Giả",
      publishedOn: locale === "en" ? "Published on" : "Xuất bản vào",
      readTime: locale === "en" ? "min read" : "phút đọc",
      noResults: locale === "en" ? "No articles found" : "Không tìm thấy bài viết",
      searchPlaceholder: locale === "en" ? "Search articles..." : "Tìm kiếm bài viết...",
    }
  };
};

export const finvorasTranslations: Record<"en" | "vi", Translations> = {
  en: mergeTranslations("en"),
  vi: mergeTranslations("vi"),
};

export type FinvorasTranslations = Translations;