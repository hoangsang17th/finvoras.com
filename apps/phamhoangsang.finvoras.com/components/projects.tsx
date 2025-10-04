"use client";

import { Card, Button } from "@repo/ui";
import { ExternalLink, Github, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import type { Project } from "@/lib/types/resume";

const Projects = () => {
  const { resumeData } = useLanguage();
  const projects = resumeData?.projects || [];
  const socialLinks = resumeData?.socialLinks || {};

  if (!projects.length) {
    return <div className="py-20 px-6">Loading...</div>;
  }

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I&apos;ve worked on, showcasing my skills and passion for creating meaningful solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project) => (
            <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-brand-primary/20 to-brand-blue/20 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-muted-foreground/20">
                    {project.title.split(' ')[0]}
                  </div>
                )}
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full font-medium ${project.status === "Live"
                        ? "bg-brand-success text-white"
                        : project.status === "In Development"
                          ? "bg-brand-warning text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                  >
                    {project.status}
                  </span>
                </div>
                {/* Year Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 text-xs bg-background/80 backdrop-blur-sm rounded-full font-medium flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 line-clamp-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-brand-primary mt-0.5 flex-shrink-0">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button variant="default" size="sm" className="flex-1" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="secondary" size="sm" className="flex-1" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="secondary" size="lg" asChild>
            <Link href={socialLinks.github || "#"} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;