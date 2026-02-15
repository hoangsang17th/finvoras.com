import type { Metadata } from "next";
import HomeContent from "@/components/home-content";
import ScrollToSection from "@/components/scroll-to-section";
import { getPageMetadata } from "@/lib/seo/metadata";
import { PageProps } from "../page";

export function generateMetadata({ params }: PageProps): Metadata {
  return getPageMetadata("experience", params.locale);
}

export default function ExperiencePage() {
  return (
    <>
      <ScrollToSection id="experience" />
      <HomeContent />
    </>
  );
}
