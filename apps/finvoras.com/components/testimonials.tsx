"use client";

import { useI18n } from "@repo/i18n";
import type { Translations } from "@/lib/types/translations";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui";
import { Quote } from "lucide-react";

const Testimonials = () => {
	const { t } = useI18n<Translations>();
	const { testimonials } = t;

	// Fallback if items are not yet available in translations (during transition)
	const items = testimonials.items || [];

	return (
		<div id="testimonials" className="w-full py-20 px-6 bg-muted/20">
			<div className="max-w-screen-lg mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight mb-4">
						{testimonials.title}
					</h2>
					<p className="text-lg text-foreground/70 max-w-2xl mx-auto">
						{testimonials.subtitle}
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{items.map((item, index) => (
						<div
							key={index}
							className="flex flex-col bg-background rounded-2xl p-8 border shadow-sm relative"
						>
							<Quote className="absolute top-6 right-6 h-8 w-8 text-brand-primary/10" />

							<p className="text-foreground/80 mb-6 relative z-10 italic">
								"{item.content}"
							</p>

							<div className="mt-auto">
								<div className="flex items-center gap-4 mb-4">
									<Avatar className="h-10 w-10 border">
										<AvatarFallback className="bg-brand-primary/10 text-brand-primary font-medium">
											{item.name.charAt(0)}
										</AvatarFallback>
									</Avatar>
									<div>
										<p className="font-semibold text-sm">{item.name}</p>
										<p className="text-xs text-muted-foreground">{item.role}</p>
									</div>
								</div>

								<div className="pt-4 border-t">
									<p className="text-sm font-medium text-green-600 dark:text-green-400 flex items-center gap-2">
										<span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
										{item.outcome}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
