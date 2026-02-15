import Features from "@/components/features";
import PageLayout from "@/components/layout/page-layout";

export default function FeaturesPage() {
	return (
		<PageLayout>
			<div className="py-16">
				<div className="max-w-6xl mx-auto px-6 text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">
						Powerful Features for Financial Success
					</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Discover all the tools and features that make Finvoras the perfect
						companion for your financial journey.
					</p>
				</div>
				<Features />
			</div>
		</PageLayout>
	);
}
