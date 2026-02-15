"use client";

import { GridPattern, cn } from "@repo/ui";
import { useI18n } from "@repo/i18n";
import type { Translations } from "@/lib/types/translations";

export default function AboutHero() {
	const { t } = useI18n<Translations>();

	return (
		<section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 border-b">
			{/* Background Pattern */}
			<GridPattern
				numSquares={30}
				maxOpacity={0.1}
				duration={3}
				className={cn(
					"[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
					"inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
				)}
			/>

			<div className="container relative z-10 mx-auto px-6 text-center">
				<h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
					{t.about.title}
				</h1>
				<p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
					{t.about.subtitle}
				</p>

				<div className="mt-12 max-w-4xl mx-auto">
					<div className="p-8 md:p-12 rounded-3xl bg-card border shadow-sm">
						<p className="text-lg md:text-xl text-foreground leading-relaxed italic">
							"{t.about.mission}"
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
