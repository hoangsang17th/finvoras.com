"use client";

import { Card } from "@repo/ui";
import { Calendar, MapPin, Building } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { Experience } from "@/lib/types/resume";

const Experience = () => {
  const { ui, resumeData } = useI18n();

  if (!resumeData?.experiences.length) {
    return <div className="py-20 px-6">Loading...</div>;
  }

  const experiences = resumeData.experiences;

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
            {ui.sections.experience.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {ui.sections.experience.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp: Experience, index: number) => (
              <div
                key={exp.id}
                className={`relative flex items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-brand-primary rounded-full border-4 border-background shadow-lg md:transform md:-translate-x-2" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <Card className="p-6 shadow-sm hover:shadow-md transition-shadow">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                        <span>•</span>
                        <span>{exp.type}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item: string, idx: number) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-brand-primary mt-1 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;