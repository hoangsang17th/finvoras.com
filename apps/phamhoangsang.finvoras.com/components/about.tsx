"use client";

import { Card, Timeline, TextLink } from "@repo/ui";
import { MapPin, GraduationCap, Award, Calendar } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { QuickInfo, Education } from "@/lib/types/resume";

const About = () => {
	const { ui, resumeData } = useI18n();

	if (!resumeData) {
		return <div className="py-20 px-6 bg-muted/30">Loading...</div>;
	}

	const { personalInfo, quickInfo } = resumeData;

	return (
		<div className="py-20 px-6 bg-muted/30">
			<div className="max-w-6xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
						{ui.sections.about.title}
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						{ui.sections.about.subtitle}
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
					{/* Text Content */}
					<div className="space-y-6">
						<div className="space-y-4">
							{personalInfo.bio
								.split("\n\n")
								.map((paragraph: string, index: number) => {
									if (!paragraph.trim()) return null;
									return (
										<p
											key={index}
											className="text-base text-muted-foreground/90 leading-relaxed"
										>
											{paragraph.trim()}
										</p>
									);
								})}
						</div>

						{/* Work Values */}
						{/* {resumeData.workValues && resumeData.workValues.length > 0 && (
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4">{ui.sections.workValues}</h3>
                <ul className="space-y-3">
                  {resumeData.workValues.map((value: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
					</div>

					<div className="space-y-8">
						{/* Quick Info Cards */}
						<div className="grid grid-cols-2 gap-6">
							{quickInfo.map((info: QuickInfo, index: number) => (
								<Card
									key={index}
									hoverable
									className="p-6 text-center shadow-sm"
								>
									<div
										className="text-3xl font-bold text-brand-primary mb-2 line-clamp-1"
										title={String(info.value)}
									>
										{info.value}
									</div>
									<div className="text-sm text-muted-foreground font-medium mb-1">
										{info.label}
									</div>
									{info.description && (
										<div className="text-xs text-muted-foreground/80 leading-snug">
											{info.description}
										</div>
									)}
								</Card>
							))}
						</div>

						{/* Education */}
						{resumeData.education && resumeData.education.length > 0 && (
							<div className="space-y-6">
								<div className="flex items-center gap-3">
									<div className="h-10 w-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
										<GraduationCap className="h-6 w-6 text-brand-primary" />
									</div>
									<h3 className="text-2xl font-bold">
										{ui.sections.education}
									</h3>
								</div>

								<Timeline
									layout="right"
									items={resumeData.education.map((edu: Education) => ({
										id: edu.id,
										content: (
											<Card
												hoverable
												className="p-6 border-none bg-gradient-to-br from-card to-muted/50 overflow-hidden relative"
											>
												{/* Subtle background icon */}
												<GraduationCap className="absolute -right-3 -bottom-3 h-24 w-24 text-brand-primary/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />

												<div className="relative z-20">
													<div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
														<div className="min-w-0 flex-1">
															<div className="flex items-center gap-2">
																<h4
																	className="text-lg font-bold truncate"
																	title={edu.institution}
																>
																	{edu.institutionUrl ? (
																		<TextLink
																			href={edu.institutionUrl}
																			external
																		>
																			{edu.institution}
																		</TextLink>
																	) : (
																		edu.institution
																	)}
																</h4>
															</div>
															<div className="inline-flex items-center px-2.5 py-0.5 mt-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold tracking-wide border border-brand-primary/20">
																{edu.degree}
															</div>
														</div>
														<div className="shrink-0 flex flex-col items-start md:items-end gap-1.5 text-[13px] text-muted-foreground/80">
															<span className="flex items-center gap-1.5 font-medium bg-muted/80 px-2.5 py-1 rounded-lg border border-border/50 shadow-sm">
																<Calendar className="h-3.5 w-3.5 text-brand-primary/70" />
																{edu.period}
															</span>
															<span className="flex items-center gap-1.5 px-2.5">
																<MapPin className="h-3.5 w-3.5 text-brand-primary/70" />
																{edu.locationUrl ? (
																	<TextLink href={edu.locationUrl} external>
																		{edu.location}
																	</TextLink>
																) : (
																	edu.location
																)}
															</span>
														</div>
													</div>

													{edu.gpa && (
														<div className="flex items-center gap-2 mb-4 text-[11px] font-medium">
															<div className="h-1 w-1 rounded-full bg-green-500"></div>
															<span className="text-muted-foreground uppercase tracking-widest opacity-70">
																GPA:
															</span>
															<span className="text-foreground/90 font-bold">
																{edu.gpa}
															</span>
														</div>
													)}

													{edu.achievements && edu.achievements.length > 0 && (
														<div className="space-y-3 border-t border-border/40 pt-5 mt-1">
															{edu.achievements.map(
																(achievement: string, idx: number) => (
																	<div
																		key={idx}
																		className="flex items-start gap-3 group/item"
																	>
																		<div className="mt-1 flex-shrink-0">
																			<div className="h-5 w-5 rounded bg-brand-primary/5 flex items-center justify-center group-hover/item:bg-brand-primary/20 transition-colors">
																				<Award className="h-3 w-3 text-brand-primary" />
																			</div>
																		</div>
																		<p className="text-muted-foreground leading-relaxed text-sm group-hover/item:text-foreground transition-colors italic">
																			&ldquo;{achievement}&rdquo;
																		</p>
																	</div>
																),
															)}
														</div>
													)}
												</div>
											</Card>
										),
									}))}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
