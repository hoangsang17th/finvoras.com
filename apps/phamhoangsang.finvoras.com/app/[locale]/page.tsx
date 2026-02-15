import type { Metadata } from "next";
import HomeContent from "@/components/home-content";
import HashRedirect from "@/components/hash-redirect";
import { getPageMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/utils/parse-locale";

export type PageProps = {
	params: Promise<{ locale: string }>;
};

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { locale } = await params;
	return getPageMetadata("root", locale);
}

export default async function HomePage({ params }: PageProps) {
	const { locale } = await params;
	return (
		<>
			<HashRedirect locale={getLocale(locale)} />
			<HomeContent />
		</>
	);
}
