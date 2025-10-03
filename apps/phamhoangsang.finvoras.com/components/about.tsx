"use client";

import { Card } from "@repo/ui";
import { MapPin, Coffee, Code, Heart } from "lucide-react";
import { usePersonalInfo, useStatistics } from "@/lib/hooks/useResumeData";

const About = () => {
  const personalInfo = usePersonalInfo();
  const statistics = useStatistics();

  if (!personalInfo) {
    return <div className="py-20 px-6 bg-muted/30">Loading...</div>;
  }

  return (
    <div className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, interests, and what drives me as a developer.
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
              {personalInfo.bio.split('. ').map((sentence, index) => {
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
            {statistics.map((stat, index) => (
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