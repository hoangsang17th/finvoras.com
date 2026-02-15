import type { Metadata } from "next";
import HomeContent from "@/components/home-content";
import HashRedirect from "@/components/hash-redirect";
import { getPageMetadata } from "@/lib/seo/metadata";

export type PageProps = {
  params: { locale: "en" | "vi" };
};

export function generateMetadata({ params }: PageProps): Metadata {
  return getPageMetadata("root", params.locale);
}

export default function HomePage({ params }: PageProps) {
  return (
    <>
      <HashRedirect locale={params.locale} />
      <HomeContent />
    </>
  );
}
