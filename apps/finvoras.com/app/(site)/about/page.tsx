import PageLayout from "@/components/layout/page-layout";
import AboutHero from "@/components/about-hero";
import Values from "@/components/values";
import Team from "@/components/team";
import CTABanner from "@/components/cta-banner";
import Footer from "@/components/footer";

export default function AboutPage() {
    return (
        <PageLayout className="min-h-screen bg-background">
            <AboutHero />
            <Values />
            <Team />
            <CTABanner />
            <Footer />
        </PageLayout>
    );
}
