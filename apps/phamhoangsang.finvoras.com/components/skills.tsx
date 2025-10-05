"use client";

import { Card } from "@repo/ui";
import { useI18n } from "@/lib/i18n";
import type { SkillCategory, Skill } from "@/lib/types/resume";

const Skills = () => {
  const { ui, resumeData } = useI18n();

  if (!resumeData?.skillCategories.length) {
    return <div className="py-20 px-6 bg-muted/30">Loading...</div>;
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
            <Card key={index} className="p-6">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill: Skill, skillIndex: number) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-brand-primary to-brand-blue h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
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