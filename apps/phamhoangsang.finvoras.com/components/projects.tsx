"use client";

import { Card, Button, Badge } from "@repo/ui";
import { ExternalLink, Github, Calendar, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import type { Project } from "@/lib/types/resume";
import { useState } from "react";
import ProjectDetailModal from "./project-detail-modal";


export const getActionMetadata = (url: string, ui: any) => {
  const isGithub = url.includes("github.com");

  if (isGithub) {
    return {
      icon: <Github className="h-3.5 w-3.5 mr-1" />,
      label: ui.ui.actions.viewCode, // "Source code"
      variant: "secondary" as const,
    };
  }

  // Check if URL has a path (indicating a specific page/article) vs just a domain (home/demo)
  let isDetail = false;
  try {
    const urlObj = new URL(url.startsWith("http") ? url : `https://${url}`);
    isDetail = urlObj.pathname.length > 1; // path "/" is length 1
  } catch (e) {
    isDetail = false;
  }

  if (isDetail) {
    return {
      icon: <BookOpen className="h-3.5 w-3.5 mr-1" />,
      label: ui.ui.actions.readBlog, // "Read Blog" / "Detail"
      variant: "secondary" as const,
    };
  }

  return {
    icon: <ExternalLink className="h-3.5 w-3.5 mr-1" />,
    label: ui.ui.actions.liveDemo, // "Live Demo"
    variant: "default" as const,
  };
};

const Projects = () => {
  const { ui, resumeData } = useI18n();
  const projects = resumeData?.projects || [];
  const socialLinks = resumeData?.socialLinks || {};

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  if (!projects.length) {
    return <div className="py-20 px-6">Loading...</div>;
  }

  const getStatusMetadata = (status: string) => {
    switch (status) {
      case "live":
        return { label: "Live", variant: "default" as const, className: "bg-brand-success text-white border-none" };
      case "in_development":
        return { label: "In Dev", variant: "secondary" as const, className: "bg-blue-500/10 text-blue-600 border-blue-200" };
      default:
        return { label: status, variant: "secondary" as const, className: "" };
    }
  };

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
            {ui.sections.projects.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {ui.sections.projects.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => {
            const statusMeta = getStatusMetadata(project.status);

            return (
              <Card
                key={index}
                hoverable
                className="overflow-hidden flex flex-col group/card h-full border rounded-xl cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-brand-primary/20"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-muted overflow-hidden">
                  {project.image && !imageErrors.has(index) ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                      onError={() => {
                        setImageErrors(prev => new Set(prev).add(index));
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-muted-foreground/20 italic">
                      {project.title.split(' ')[0]}
                    </div>
                  )}
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <Badge
                      variant={statusMeta.variant}
                      size="sm"
                      className={statusMeta.className}
                    >
                      {statusMeta.label}
                    </Badge>
                  </div>
                  {/* Year Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge variant="outlined" size="sm" className="bg-background/90 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {project.date ? project.date.getFullYear() : "N/A"}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-2 group-hover/card:text-brand-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Contributions / Features */}
                  <div className="mb-6 flex-1">
                    <ul className="text-xs text-muted-foreground space-y-2">
                      {project.contributions.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-brand-primary font-bold">•</span>
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1.5 font-mono">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="flat"
                          size="sm"
                          className="bg-muted/80"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="flat" size="sm" className="bg-muted/80">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2.5 mt-auto flex-wrap" onClick={(e) => e.stopPropagation()}>
                    {project.urls.map((url, idx) => {
                      const action = getActionMetadata(url, ui);
                      return (
                        <Button key={idx} variant={action.variant} size="sm" className="flex-1 whitespace-nowrap"
                          icon={action.icon}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {action.label}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <ProjectDetailModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
          ui={ui}
        />

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="secondary" size="lg"
            icon={<Github className="h-5 w-5 mr-2" />}
            href={socialLinks.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;