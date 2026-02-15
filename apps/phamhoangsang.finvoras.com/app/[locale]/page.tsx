import type { Metadata } from "next";
import HomeContent from "@/components/home-content";
import HashRedirect from "@/components/hash-redirect";
import { getPageMetadata } from "@/lib/seo/metadata";

export type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata("root", locale === "vi" ? "vi" : "en");
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  return (
    <>
      <HashRedirect locale={locale === "vi" ? "vi" : "en"} />
      <HomeContent />
    </>
  );
}
