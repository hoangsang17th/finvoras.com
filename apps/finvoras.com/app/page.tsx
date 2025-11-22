import CTABanner from "@/components/cta-banner";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import TrustSignals from "@/components/trust-signals";
import PersonaHighlights from "@/components/persona-highlights";
import Values from "@/components/values";
import Team from "@/components/team";
import HowItWorks from "@/components/how-it-works";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <section id="features">
        <Features />
      </section>
      <HowItWorks />
      <PersonaHighlights />
      <section id="mission">
        <Values />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <Team />
      <CTABanner />
      <Footer />
    </>
  );
}
