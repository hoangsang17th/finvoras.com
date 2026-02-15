import type { Metadata } from "next";
import HomeContent from "@/components/home-content";
import ScrollToSection from "@/components/scroll-to-section";
import { getPageMetadata } from "@/lib/seo/metadata";
import { PageProps } from "../page";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata("experience", locale);
}

export default function ExperiencePage() {
  return (
    <>
      <ScrollToSection id="experience" />
      <HomeContent />
    </>
  );
}
