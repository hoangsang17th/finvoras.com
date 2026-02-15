"use client";

import { useI18n } from "@repo/i18n";
import { Check, X } from "lucide-react";
import type { Translations } from "@/lib/types/translations";

const FeatureComparison = () => {
	const { t } = useI18n<Translations>();
	const { featureComparison } = t.pricing;

	const renderFeatureValue = (value: boolean | string) => {
		if (value === true) {
			return <Check className="h-5 w-5 text-brand-success mx-auto" />;
		}
		if (value === false) {
			return <X className="h-5 w-5 text-muted-foreground/30 mx-auto" />;
		}
		return (
			<span className="text-sm font-medium text-center block">{value}</span>
		);
	};

	// Group features by category
	const featuresByCategory = Object.entries(featureComparison.categories).map(
		([key, categoryName]) => ({
			key,
			name: categoryName,
			features: featureComparison.features.filter((f) => f.category === key),
		}),
	);

	return (
		<div className="py-16 px-6 bg-muted/30">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{featureComparison.title}
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						{featureComparison.subtitle}
					</p>
				</div>

				{/* Comparison Table */}
				<div className="bg-background rounded-2xl border shadow-sm overflow-hidden">
					{/* Header Row */}
					<div className="grid grid-cols-4 gap-4 p-6 border-b bg-muted/50">
						<div className="font-bold text-sm">Features</div>
						<div className="font-bold text-sm text-center">Free</div>
						<div className="font-bold text-sm text-center">Pro</div>
						<div className="font-bold text-sm text-center">Family</div>
					</div>

					{/* Feature Rows by Category */}
					{featuresByCategory.map((category) => (
						<div key={category.key} className="border-b last:border-b-0">
							{/* Category Header */}
							<div className="px-6 py-3 bg-muted/30">
								<h3 className="font-semibold text-sm text-brand-primary">
									{category.name}
								</h3>
							</div>

							{/* Features in Category */}
							{category.features.map((feature, idx) => (
								<div
									key={idx}
									className="grid grid-cols-4 gap-4 p-6 hover:bg-muted/20 transition-colors items-center"
								>
									<div className="text-sm">{feature.name}</div>
									<div className="flex justify-center">
										{renderFeatureValue(feature.free)}
									</div>
									<div className="flex justify-center">
										{renderFeatureValue(feature.pro)}
									</div>
									<div className="flex justify-center">
										{renderFeatureValue(feature.family)}
									</div>
								</div>
							))}
						</div>
					))}
				</div>

				{/* Mobile-friendly version */}
				<div className="lg:hidden mt-8 space-y-6">
					{featureComparison.features.map((feature, idx) => (
						<div key={idx} className="bg-background rounded-xl border p-4">
							<h4 className="font-semibold mb-3">{feature.name}</h4>
							<div className="grid grid-cols-3 gap-3 text-center">
								<div>
									<div className="text-xs text-muted-foreground mb-2">Free</div>
									{renderFeatureValue(feature.free)}
								</div>
								<div>
									<div className="text-xs text-muted-foreground mb-2">Pro</div>
									{renderFeatureValue(feature.pro)}
								</div>
								<div>
									<div className="text-xs text-muted-foreground mb-2">
										Family
									</div>
									{renderFeatureValue(feature.family)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FeatureComparison;
