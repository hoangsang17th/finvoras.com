"use client";

import { Card, Badge } from "@repo/ui";
import { useI18n } from "@/lib/i18n";
import type { SkillCategory, Skill } from "@/lib/types/resume";

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-brand-primary text-white hover:bg-brand-primary/90";
    case "Proficient":
      return "bg-brand-blue text-white hover:bg-brand-blue/90";
    case "Familiar":
      return "bg-muted text-muted-foreground hover:bg-muted/80";
    default:
      return "bg-muted text-muted-foreground";
  }
};

import { Skeleton } from "./ui/skeleton";

const Skills = () => {
  const { ui, resumeData } = useI18n();

  if (!resumeData?.skillCategories.length) {
    return (
      <div className="py-20 px-6 bg-muted/30">
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
    <div className="py-20 px-6 bg-muted/30">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category: SkillCategory, index: number) => (
            <Card key={index} className="p-6 h-full">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill: Skill, skillIndex: number) => (
                  <Badge
                    key={skillIndex}
                    className={`px-3 py-1 text-sm font-medium border-none ${getLevelColor(skill.level)}`}
                  >
                    {skill.name}
                    <span className="ml-2 text-xs opacity-70 border-l pl-2 border-white/30">
                      {skill.level}
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
            <h3 className="text-xl font-bold text-center mb-8">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalSkills.map((skill: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-card border rounded-full text-sm font-medium hover:bg-accent transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;