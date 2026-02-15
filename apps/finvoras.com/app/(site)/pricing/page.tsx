import Pricing from "@/components/pricing";
import PricingBundles from "@/components/pricing-bundles";
import FeatureComparison from "@/components/feature-comparison";
import PricingValueBento from "@/components/pricing-value-bento";
import FAQ from "@/components/faq";
import PageLayout from "@/components/layout/page-layout";

export default function PricingPage() {
	return (
		<PageLayout>
			<div className="py-16">
				{/* Main Pricing Cards */}
				<Pricing />

				{/* Special Bundles - Bento Style */}
				<PricingBundles />

				{/* Feature Comparison Table */}
				<FeatureComparison />

				{/* Value Propositions Bento Grid */}
				<PricingValueBento />

				{/* FAQ Section */}
				<div className="mt-20 px-6">
					<FAQ />
				</div>
			</div>
		</PageLayout>
	);
}
