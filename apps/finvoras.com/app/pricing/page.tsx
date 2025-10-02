import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import PageLayout from "@/components/layout/page-layout";

export default function PricingPage() {
  return (
    <PageLayout>
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that&apos;s right for your financial goals. All plans include our core features.
          </p>
        </div>
        <Pricing />
        
        {/* Include FAQ section for pricing questions */}
        <div className="mt-20">
          <div className="max-w-6xl mx-auto px-6 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Got questions about our pricing? We&apos;ve got answers.
            </p>
          </div>
          <FAQ />
        </div>
      </div>
    </PageLayout>
  );
}