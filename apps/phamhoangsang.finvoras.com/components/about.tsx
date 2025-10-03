"use client";

import { Card } from "@repo/ui";
import { MapPin, Coffee, Code, Heart } from "lucide-react";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import type { Statistic } from "@/lib/types/resume";

const About = () => {
  const { ui, resumeData } = useLanguage();

  if (!resumeData) {
    return <div className="py-20 px-6 bg-muted/30">Loading...</div>;
  }

  const { personalInfo, statistics } = resumeData;

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin className="h-5 w-5" />
              <span>{personalInfo.location}</span>
            </div>

            <div className="space-y-4">
              {personalInfo.bio.split('. ').map((sentence: string, index: number) => {
                if (!sentence.trim()) return null;
                return (
                  <p key={index} className="text-lg leading-relaxed">
                    {sentence}{sentence.endsWith('.') ? '' : '.'}
                  </p>
                );
              })}
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-3">
                <Coffee className="h-5 w-5 text-brand-primary" />
                <span className="font-medium">Coffee Enthusiast</span>
              </div>
              <div className="flex items-center gap-3">
                <Code className="h-5 w-5 text-brand-primary" />
                <span className="font-medium">Open Source Contributor</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-brand-primary" />
                <span className="font-medium">Problem Solver</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-primary font-bold">📚</span>
                <span className="font-medium">Continuous Learner</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
                              {statistics.map((stat: Statistic, index: number) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-3xl font-bold text-brand-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                {stat.description && (
                  <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;