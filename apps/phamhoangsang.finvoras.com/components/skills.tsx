"use client";

import { Card, Badge } from "@repo/ui";
import { useI18n } from "@/lib/i18n";
import type { SkillCategory, Skill } from "@/lib/types/resume";
import { Skeleton } from "./ui/skeleton";

const getLevelColor = (levelKey: string) => {
	switch (levelKey) {
		case "Expert":
			return "bg-brand-primary text-white border-brand-primary";
		case "Proficient":
			return "bg-brand-blue text-white border-brand-blue";
		case "Familiar":
			return "bg-muted text-muted-foreground border-border";
		default:
			return "bg-muted text-muted-foreground border-border";
	}
};

const Skills = () => {
	const { ui, resumeData } = useI18n();

	if (!resumeData?.skillCategories.length) {
		return (
			<div className="py-20 px-6">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<Skeleton className="h-12 w-64 mx-auto mb-4" />
						<Skeleton className="h-6 w-96 mx-auto" />
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{[1, 2, 3, 4].map((i) => (
							<div key={i} className="p-6 border rounded-lg bg-card h-full">
								<div className="flex items-center gap-3 mb-6">
									<Skeleton className="h-8 w-8 rounded-full" />
									<Skeleton className="h-8 w-48" />
								</div>
								<div className="flex flex-wrap gap-2">
									{[1, 2, 3, 4, 5].map((j) => (
										<Skeleton key={j} className="h-8 w-24 rounded-full" />
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}

	const skillCategories = resumeData.skillCategories;
	const additionalSkills = resumeData.additionalSkills;

	return (
		<div className="py-20 px-6">
			<div className="max-w-6xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
						{ui.sections.skills.title}
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						{ui.sections.skills.subtitle}
					</p>
				</div>

				{/* Skills Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{skillCategories.map((category: SkillCategory, index: number) => (
						<Card
							key={index}
							hoverable
							className="p-8 border rounded-xl shadow-sm"
						>
							{/* Category Header */}
							<div className="flex items-center gap-4 mb-8">
								<div className="w-10 h-10 flex items-center justify-center bg-muted rounded-lg text-xl border">
									{category.icon}
								</div>
								<h3 className="text-xl font-bold tracking-tight">
									{category.title}
								</h3>
							</div>

							{/* Skills List */}
							<div className="flex flex-wrap gap-2">
								{category.skills.map((skill: Skill, skillIndex: number) => (
									<Badge
										key={skillIndex}
										className={`px-3 py-1 text-[10px] font-bold border rounded-full uppercase tracking-wider shadow-none ${getLevelColor(skill.level)}`}
									>
										{skill.name}
										<span className="ml-2 text-[10px] opacity-70 border-l pl-2 border-current/20">
											{
												ui.ui.skillLevels[
													skill.level.toLowerCase() as keyof typeof ui.ui.skillLevels
												]
											}
										</span>
									</Badge>
								))}
							</div>
						</Card>
					))}
				</div>

				{/* Additional Skills */}
				{additionalSkills.length > 0 && (
					<div className="mt-12">
						<h3 className="text-xl font-bold text-center mb-8">
							{ui.sections.additionalSkills}
						</h3>
						<div className="flex flex-wrap justify-center gap-3">
							{additionalSkills.map((skill: string, index: number) => (
								<Badge
									key={index}
									variant="outlined"
									size="md"
									className="px-4 py-2"
								>
									{skill}
								</Badge>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Skills;
