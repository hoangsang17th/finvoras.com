"use client";

import {
	BadgeDollarSign,
	ShieldCheck,
	Languages,
	Building2,
	TrendingUp,
	Users,
} from "lucide-react";
import { useI18n } from "@repo/i18n";
import type { Translations } from "@/lib/types/translations";
import type { LucideIcon } from "lucide-react";

// Map icon names to icon components
const iconMap: Record<string, LucideIcon> = {
	BadgeDollarSign,
	ShieldCheck,
	Languages,
	Building2,
	TrendingUp,
	Users,
};

const FAQ = () => {
	const { t } = useI18n<Translations>();
	const { faq } = t;

	return (
		<div
			id="faq"
			className="min-h-screen flex items-center justify-center px-6 py-12 xs:py-20"
		>
			<div className="max-w-screen-lg">
				<h2 className="text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight text-center">
					{faq.title}
				</h2>
				<p className="mt-3 xs:text-lg text-center text-muted-foreground">
					{faq.subtitle}
				</p>

				<div className="mt-12 grid md:grid-cols-2 bg-background rounded-xl overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
					{faq.questions.map(({ question, answer, icon }) => {
						const Icon = iconMap[icon] || BadgeDollarSign;
						return (
							<div key={question} className="border p-6 -mt-px -ml-px">
								<div className="h-8 w-8 xs:h-10 xs:w-10 flex items-center justify-center rounded-full bg-accent">
									<Icon className="h-4 w-4 xs:h-6 xs:w-6" />
								</div>
								<div className="mt-3 mb-2 flex items-start gap-2 text-lg xs:text-[1.35rem] font-semibold tracking-tight">
									<span>{question}</span>
								</div>
								<p className="text-sm xs:text-base">{answer}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default FAQ;
