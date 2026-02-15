"use client";

import { Card, CardContent } from "@repo/ui";
import { useI18n } from "@repo/i18n";
import type { Translations } from "@/lib/types/translations";
import { ShieldCheck, Lightbulb, Heart, Sparkles } from "lucide-react";

export default function Values({
	showEducationOnly = false,
}: { showEducationOnly?: boolean }) {
	const { t } = useI18n<Translations>();
	const { about } = t;

	const values = [
		{
			key: "transparency",
			icon: Lightbulb,
			title: about.values.transparency.title,
			description: about.values.transparency.description,
		},
		{
			key: "security",
			icon: ShieldCheck,
			title: about.values.security.title,
			description: about.values.security.description,
		},
		{
			key: "simplicity",
			icon: Sparkles,
			title: about.values.simplicity.title,
			description: about.values.simplicity.description,
		},
		{
			key: "education",
			icon: Heart,
			title: about.values.education.title,
			description: about.values.education.description,
		},
	];

	return (
		<div className="w-full py-16 xs:py-24 px-6 bg-background">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{showEducationOnly ? about.education.title : about.values.title}
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						{showEducationOnly
							? about.education.subtitle
							: about.vision.description}
					</p>
					{showEducationOnly && (
						<p className="mt-4 text-muted-foreground">
							{about.education.description}
						</p>
					)}
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{values.map((value) => (
						<Card
							key={value.key}
							className="border-none shadow-lg bg-muted/30 hover:-translate-y-1 transition-transform duration-300"
						>
							<CardContent className="pt-6 text-center">
								<div className="h-12 w-12 mx-auto bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4 text-brand-primary">
									<value.icon className="h-6 w-6" />
								</div>
								<h3 className="text-xl font-bold mb-3">{value.title}</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">
									{value.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
