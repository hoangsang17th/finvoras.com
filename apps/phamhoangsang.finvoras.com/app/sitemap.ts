import { locales } from "@/lib/types/locale";
import { MetadataRoute } from "next";

// Google biết URL nào quan trọng
export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://phamhoangsang.finvoras.com";
	const pages = [
		{ path: "", priority: 1 },
		{ path: "/about", priority: 0.6 },
		{ path: "/projects", priority: 0.9 },
		{ path: "/experience", priority: 0.8 },
		{ path: "/skills", priority: 0.7 },
		{ path: "/contact", priority: 0.4 },
	];
	const lastModified = new Date("2025-02-15");

	return locales.flatMap((locale) =>
		pages.map((page) => ({
			url: `${baseUrl}/${locale}${page.path}`,
			lastModified,
			changeFrequency: "yearly",
			priority: page.priority,
		})),
	);
}
