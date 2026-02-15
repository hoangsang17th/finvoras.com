"use client";

import CTABanner from "@/components/cta-banner";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import TrustSignals from "@/components/trust-signals";
import Values from "@/components/values";
import HowItWorks from "@/components/how-it-works";
import { useI18n } from "@repo/i18n";
import type { Translations } from "@/lib/types/translations";
import { Card, CardContent } from "@repo/ui";
import {
	Database,
	Search,
	Calendar,
	LayoutDashboard,
	Zap,
	Target,
} from "lucide-react";

const iconMap = {
	Database,
	Search,
	Calendar,
	LayoutDashboard,
	Zap,
	Target,
};

export default function Home() {
	const { t } = useI18n<Translations>();

	return (
		<>
			<Hero />

			{/* Problems Section */}
			<section className="py-20 bg-muted/30">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							{t.problems.title}
						</h2>
						<p className="text-lg text-muted-foreground">
							{t.problems.subtitle}
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						{t.problems.items.map((item, i) => {
							const Icon = iconMap[item.icon as keyof typeof iconMap];
							return (
								<Card key={i} className="border-none shadow-md bg-background">
									<CardContent className="pt-8 text-center px-6 pb-8">
										<div className="h-12 w-12 mx-auto bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-6 text-red-600 dark:text-red-400">
											{Icon && <Icon className="h-6 w-6" />}
										</div>
										<h3 className="text-xl font-bold mb-3">{item.title}</h3>
										<p className="text-muted-foreground leading-relaxed italic">
											{item.description}
										</p>
									</CardContent>
								</Card>
							);
						})}
					</div>
				</div>
			</section>

			{/* Solutions Section */}
			<section className="py-20">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							{t.solutions.title}
						</h2>
						<p className="text-lg text-muted-foreground">
							{t.solutions.subtitle}
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						{t.solutions.items.map((item, i) => {
							const Icon = iconMap[item.icon as keyof typeof iconMap];
							return (
								<Card key={i} className="border-none shadow-md bg-muted/50">
									<CardContent className="pt-8 text-center px-6 pb-8">
										<div className="h-12 w-12 mx-auto bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 text-brand-primary">
											{Icon && <Icon className="h-6 w-6" />}
										</div>
										<h3 className="text-xl font-bold mb-3">{item.title}</h3>
										<p className="text-muted-foreground leading-relaxed">
											{item.description}
										</p>
									</CardContent>
								</Card>
							);
						})}
					</div>
				</div>
			</section>

			<section id="features">
				<Features />
			</section>

			<section id="education">
				<Values showEducationOnly />
			</section>

			<TrustSignals />

			<section id="testimonials">
				<Testimonials />
			</section>

			<CTABanner />
			<Footer />
		</>
	);
}
