"use client";

import { useI18n } from "@repo/i18n";
import type { Translations } from "@/lib/types/translations";
import { Button } from "@repo/ui";
import { Briefcase, Heart, GraduationCap, ArrowRight } from "lucide-react";

export default function PersonaHighlights() {
    const { t } = useI18n<Translations>();
    const { personaHighlights } = t;

    const personas = [
        {
            key: "minh",
            icon: Briefcase,
            data: personaHighlights.minh,
            color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
            borderColor: "hover:border-blue-200 dark:hover:border-blue-800",
        },
        {
            key: "linhDuc",
            icon: Heart,
            data: personaHighlights.linhDuc,
            color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
            borderColor: "hover:border-pink-200 dark:hover:border-pink-800",
        },
        {
            key: "an",
            icon: GraduationCap,
            data: personaHighlights.an,
            color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
            borderColor: "hover:border-amber-200 dark:hover:border-amber-800",
        },
    ];

    return (
        <div className="w-full py-16 xs:py-24 px-6">
            <div className="max-w-screen-lg mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl xs:text-4xl font-bold tracking-tight mb-4">
                        {personaHighlights.title}
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        {personaHighlights.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {personas.map((persona) => (
                        <div
                            key={persona.key}
                            className={`flex flex-col h-full p-6 rounded-2xl border bg-card transition-all duration-300 ${persona.borderColor} hover:shadow-lg`}
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${persona.color}`}>
                                <persona.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-bold mb-2">{persona.data.name}</h3>
                            <p className="text-sm text-foreground/60 mb-4 italic">{persona.data.role}</p>

                            <div className="flex-grow space-y-4">
                                <div>
                                    <p className="text-sm font-semibold text-foreground/80 mb-1">Problem:</p>
                                    <p className="text-sm text-foreground/70">{persona.data.painPoint}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-foreground/80 mb-1">Solution:</p>
                                    <p className="text-sm text-foreground/70">{persona.data.solution}</p>
                                </div>
                                <div className="bg-muted/50 p-3 rounded-lg mt-2">
                                    <p className="text-sm font-medium text-brand-primary">
                                        ✨ {persona.data.outcome}
                                    </p>
                                </div>
                            </div>

                            <Button
                                variant="secondary"
                                className="w-full mt-6 group"
                                icon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                                iconPosition="right"
                            >
                                {persona.data.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
