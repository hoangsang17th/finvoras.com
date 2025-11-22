"use client";

import { useI18n } from "@repo/i18n";
import type { Translations } from "@/lib/types/translations";

export default function Team() {
    const { t } = useI18n<Translations>();
    const { about } = t;

    // Mock team data
    const team = [
        { name: "Sarah Nguyen", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80" },
        { name: "David Tran", role: "CTO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80" },
        { name: "Emily Le", role: "Head of Product", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=256&q=80" },
        { name: "Michael Pham", role: "Lead Engineer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80" },
    ];

    return (
        <div className="w-full py-16 xs:py-24 px-6 bg-muted/10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{about.team.title}</h2>
                    <p className="text-lg text-muted-foreground">{about.team.subtitle}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {team.map((member) => (
                        <div key={member.name} className="group text-center">
                            <div className="relative mb-4 mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background shadow-xl group-hover:scale-105 transition-transform duration-300">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                            <p className="text-sm text-brand-primary font-medium">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
