"use client";

import { useI18n } from "@repo/i18n";
import { Badge, Button } from "@repo/ui";
import { CircleCheck, GraduationCap, Heart } from "lucide-react";
import type { Translations } from "@/lib/types/translations";

const PricingBundles = () => {
	const { t } = useI18n<Translations>();
	const { bundles, coaching } = t.pricing;

	return (
		<div className="py-16 px-6">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{bundles.title}
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						{bundles.subtitle}
					</p>
				</div>

				{/* Bundles Bento Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* Student Bundle */}
					<div className="relative border rounded-xl p-6 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 hover:shadow-lg transition-shadow">
						<Badge className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white border-none">
							{bundles.student.badge}
						</Badge>
						<div className="flex items-center gap-3 mb-4">
							<div className="p-3 rounded-full bg-blue-500/10">
								<GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
							</div>
							<div>
								<h3 className="text-xl font-bold">{bundles.student.name}</h3>
								<p className="text-sm text-muted-foreground">
									{bundles.student.duration}
								</p>
							</div>
						</div>
						<p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
							{bundles.student.price}
						</p>
						<p className="text-sm text-muted-foreground mb-6">
							{bundles.student.description}
						</p>
						<Button
							variant="secondary"
							className="w-full mb-6 bg-blue-500/10 hover:bg-blue-500/20 text-blue-700 dark:text-blue-300"
						>
							{bundles.student.cta}
						</Button>
						<ul className="space-y-2">
							{bundles.student.features.map((feature, idx) => (
								<li key={idx} className="flex items-start gap-2 text-sm">
									<CircleCheck className="h-4 w-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
									<span>{feature}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Couple Bundle */}
					<div className="relative border rounded-xl p-6 bg-gradient-to-br from-pink-50/50 to-rose-50/50 dark:from-pink-950/20 dark:to-rose-950/20 hover:shadow-lg transition-shadow">
						<Badge className="absolute top-4 right-4 bg-pink-500 hover:bg-pink-600 text-white border-none">
							{bundles.couple.badge}
						</Badge>
						<div className="flex items-center gap-3 mb-4">
							<div className="p-3 rounded-full bg-pink-500/10">
								<Heart className="h-6 w-6 text-pink-600 dark:text-pink-400" />
							</div>
							<div>
								<h3 className="text-xl font-bold">{bundles.couple.name}</h3>
								<p className="text-sm text-muted-foreground">
									{bundles.couple.duration}
								</p>
							</div>
						</div>
						<p className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">
							{bundles.couple.price}
						</p>
						<p className="text-sm text-muted-foreground mb-6">
							{bundles.couple.description}
						</p>
						<Button
							variant="secondary"
							className="w-full mb-6 bg-pink-500/10 hover:bg-pink-500/20 text-pink-700 dark:text-pink-300"
						>
							{bundles.couple.cta}
						</Button>
						<ul className="space-y-2">
							{bundles.couple.features.map((feature, idx) => (
								<li key={idx} className="flex items-start gap-2 text-sm">
									<CircleCheck className="h-4 w-4 mt-0.5 text-pink-600 dark:text-pink-400 flex-shrink-0" />
									<span>{feature}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Coaching 1:1 */}
					<div className="relative border-2 border-brand-primary rounded-xl p-6 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/20 dark:to-amber-950/20 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
						<div className="flex items-center gap-3 mb-4">
							<div className="p-3 rounded-full bg-brand-primary/10">
								<svg
									className="h-6 w-6 text-brand-primary"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</div>
							<div>
								<h3 className="text-xl font-bold">{coaching.name}</h3>
								<p className="text-sm text-muted-foreground">{coaching.note}</p>
							</div>
						</div>
						<p className="text-3xl font-bold text-brand-primary mb-2">
							{coaching.price}
							<span className="text-sm font-normal text-muted-foreground">
								{coaching.pricePerSession}
							</span>
						</p>
						<p className="text-sm text-muted-foreground mb-6">
							{coaching.description}
						</p>
						<Button variant="primary" className="w-full mb-6">
							{coaching.cta}
						</Button>
						<ul className="space-y-2">
							{coaching.features.map((feature, idx) => (
								<li key={idx} className="flex items-start gap-2 text-sm">
									<CircleCheck className="h-4 w-4 mt-0.5 text-brand-primary flex-shrink-0" />
									<span>{feature}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PricingBundles;
