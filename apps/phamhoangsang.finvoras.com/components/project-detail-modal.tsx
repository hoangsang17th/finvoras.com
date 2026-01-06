"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, Calendar, CheckCircle2 } from "lucide-react";
import { Button, Badge } from "@repo/ui";
import type { Project } from "@/lib/types/resume";
import { createPortal } from "react-dom";

interface ProjectDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
    ui: any;
}

// Import getActionMetadata from projects component
import { getActionMetadata } from "./projects";

const ProjectDetailModal = ({ isOpen, onClose, project, ui }: ProjectDetailModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [imageError, setImageError] = useState(false);

    // Reset image error when modal opens with new project
    useEffect(() => {
        setImageError(false);
    }, [project]);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden"; // Prevent background scrolling
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    // Handle click outside
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    if (!isOpen || !project) return null;

    const statusColors = {
        live: "bg-brand-success text-white border-none",
        in_development: "bg-blue-500/10 text-blue-600 border-blue-200",
        concept: "bg-purple-500/10 text-purple-600 border-purple-200",
    };

    const statusLabel = project.status === "in_development" ? "In Development" :
        project.status === "live" ? "Live" : project.status;

    const modalContent = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={handleBackdropClick}>
            <div
                ref={modalRef}
                className="bg-card border shadow-2xl rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 slide-in-from-bottom-2"
                role="dialog"
                aria-modal="true"
            >
                {/* Header / Image Area */}
                <div className="relative h-48 sm:h-64 bg-muted flex-shrink-0">
                    {project.image && !imageError ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-muted-foreground/10 italic">
                            {project.title.split(' ')[0]}
                        </div>
                    )}

                    <Button
                        variant="secondary"
                        size="icon"
                        className="absolute top-4 right-4 rounded-full h-8 w-8 bg-background/80 backdrop-blur hover:bg-background shadow-sm"
                        onClick={onClose}
                    >
                        <X className="h-4 w-4" />
                    </Button>

                    {/* Badges overlay */}
                    <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                        <Badge className={statusColors[project.status as keyof typeof statusColors] || "bg-secondary"}>
                            {statusLabel}
                        </Badge>
                        {project.date && (
                            <Badge variant="outlined" className="bg-background/90 backdrop-blur text-foreground border-border">
                                <Calendar className="h-3 w-3 mr-1" />
                                {project.date.getFullYear()}
                            </Badge>
                        )}
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar">
                    <div className="space-y-8">
                        {/* Title & Description */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{project.title}</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                {project.description}
                            </p>
                        </div>

                        {/* Contributions */}
                        {project.contributions && project.contributions.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold mb-4 flex items-center">
                                    Key Contributions
                                </h3>
                                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                                    {project.contributions.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-muted/30 border border-transparent hover:border-border transition-colors">
                                            <CheckCircle2 className="text-brand-primary h-5 w-5 shrink-0 mt-0.5" />
                                            <span className="leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Technologies */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Technologies</h3>
                            <div className="flex flex-wrap gap-1.5 font-mono">
                                {project.technologies.map((tech) => (
                                    <Badge key={tech} variant="flat" size="sm" className="bg-muted/80">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="p-4 sm:p-6 border-t bg-muted/10 flex flex-wrap gap-3 justify-end shrink-0">
                    {project.urls.map((url, idx) => {
                        const action = getActionMetadata(url, ui);
                        return (
                            <Button key={idx} variant={action.variant} className="min-w-[120px]"
                                icon={action.icon}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {action.label}
                            </Button>
                        );
                    })}
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );

    // Use createPortal to render at document body level
    if (typeof document === "undefined") return null;
    return createPortal(modalContent, document.body);
};


export default ProjectDetailModal;
