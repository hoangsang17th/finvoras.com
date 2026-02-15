"use client";

import { Badge, Card, Timeline } from "@repo/ui";
import { Calendar, MapPin, Building, Users, UserCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { Experience } from "@/lib/types/resume";

const Experience = () => {
	const { ui, resumeData } = useI18n();

	if (!resumeData?.experiences.length) {
		return <div className="py-20 px-6">Loading...</div>;
	}

	const experiences = resumeData.experiences;

	return (
		<section className="py-24 px-6 bg-muted/30">
			<div className="max-w-6xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-20">
					<h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
						{ui.sections.experience.title}
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						{ui.sections.experience.subtitle}
					</p>
				</div>

				{/* Timeline container */}
				<div className="relative">
					<Timeline
						layout="both"
						items={experiences.map((exp: Experience) => ({
							id: exp.id,
							sideContent: (
								<Badge variant="outlined" size="md">
									{exp.period}
								</Badge>
							),
							content: (
								<Card
									hoverable
									className="p-8 bg-card border shadow-sm rounded-xl"
								>
									{/* Mobile Date Badge */}
									<div className="md:hidden flex items-center gap-1.5 text-muted-foreground text-xs font-semibold mb-6">
										<Calendar className="h-4 w-4 opacity-70" />
										<span>{exp.period}</span>
									</div>

									<div>
										{/* Header: Title & Company */}
										<div className="mb-4">
											<div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
												<h3 className="text-2xl font-bold tracking-tight">
													{exp.title}
												</h3>
												<Badge variant="flat" size="sm">
													{ui.ui.experience[exp.type]}
												</Badge>
											</div>

											<div className="flex flex-col sm:flex-row sm:items-center gap-6 text-sm text-muted-foreground mt-4">
												{exp.company && (
													<div className="flex items-center gap-2 font-medium text-foreground/80">
														<Building className="h-4 w-4 text-brand-primary" />
														<span>{exp.company}</span>
													</div>
												)}
												<div className="flex items-center gap-2">
													<MapPin className="h-4 w-4 opacity-60" />
													<span>{exp.location}</span>
												</div>
											</div>
										</div>

										{/* Role & Team Metadata */}
										{(exp.role || exp.teamSize) && (
											<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 py-5 border-y border-border/40">
												{exp.role && (
													<div className="flex items-center gap-4">
														<div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center">
															<UserCheck className="h-5 w-5 text-muted-foreground" />
														</div>
														<div className="flex flex-col">
															<span className="text-[10px] uppercase tracking-widest text-muted-foreground font-black">
																Position
															</span>
															<span className="text-sm font-bold text-foreground/90">
																{exp.role}
															</span>
														</div>
													</div>
												)}
												{exp.teamSize && (
													<div className="flex items-center gap-4">
														<div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center">
															<Users className="h-5 w-5 text-muted-foreground" />
														</div>
														<div className="flex flex-col">
															<span className="text-[10px] uppercase tracking-widest text-muted-foreground font-black">
																Team
															</span>
															<span className="text-sm font-bold text-foreground/90">
																{exp.teamSize}
															</span>
														</div>
													</div>
												)}
											</div>
										)}

										{/* Contributions / Accomplishments */}
										<div className="space-y-4 mb-10">
											{exp.contributions.map((item: string, idx: number) => (
												<div key={idx} className="flex items-start gap-4">
													<div className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary shrink-0" />
													<p className="text-[15px] leading-relaxed text-muted-foreground font-medium">
														{item}
													</p>
												</div>
											))}
										</div>

										{/* Tech Stack */}
										<div className="flex flex-wrap gap-2 pt-2 border-t border-border/20">
											{exp.technologies.map((tech: string) => (
												<Badge
													key={tech}
													variant="flat"
													size="sm"
													className="bg-muted/50"
												>
													{tech}
												</Badge>
											))}
										</div>
									</div>
								</Card>
							),
						}))}
					/>
				</div>
			</div>
		</section>
	);
};

export default Experience;
