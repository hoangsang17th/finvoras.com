import type { Metadata } from "next";
import HomeContent from "@/components/home-content";
import ScrollToSection from "@/components/scroll-to-section";
import { getPageMetadata } from "@/lib/seo/metadata";
import { PageProps } from "../page";

export function generateMetadata({ params }: PageProps): Metadata {
  return getPageMetadata("contact", params.locale);
}

export default function ContactPage() {
  return (
    <>
      <ScrollToSection id="contact" />
      <HomeContent />
    </>
  );
}
