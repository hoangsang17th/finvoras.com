"use client";

import { useI18n } from "@repo/i18n";
import type { Translations } from "@/lib/types/translations";
import { Shield, Users, TrendingUp, Award, ShieldCheck, Globe } from "lucide-react";
import { Badge } from "@repo/ui";

export default function TrustSignals() {
    const { t } = useI18n<Translations>();
    const { trustSignals } = t;

    const stats = [
        {
            icon: Users,
            label: trustSignals.users.label,
            value: trustSignals.users.count,
            color: "text-blue-600 dark:text-blue-400",
        },
        {
            icon: TrendingUp,
            label: trustSignals.savings.label,
            value: trustSignals.savings.amount,
            color: "text-green-600 dark:text-green-400",
        },
        {
            icon: Award,
            label: trustSignals.retention.label,
            value: trustSignals.retention.rate,
            color: "text-purple-600 dark:text-purple-400",
        },
    ];

    const securityBadges = [
        {
            icon: ShieldCheck,
            label: trustSignals.badges.gdpr,
        },
        {
            icon: Shield,
            label: trustSignals.badges.encryption,
        },
        {
            icon: Globe,
            label: trustSignals.badges.madeForVietnam,
        },
    ];

    return (
        <div className="w-full py-12 xs:py-16 px-6 bg-muted/30">
            <div className="max-w-screen-lg mx-auto">
                {/* Security Statement */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 mb-3">
                        <Shield className="h-6 w-6 text-brand-primary" />
                        <h3 className="text-xl sm:text-2xl font-semibold">
                            {trustSignals.security.title}
                        </h3>
                    </div>
                    <p className="text-foreground/70 max-w-2xl mx-auto">
                        {trustSignals.security.description}
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-10">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 bg-background rounded-xl border"
                        >
                            <stat.icon className={`h-8 w-8 mb-3 ${stat.color}`} />
                            <div className="text-3xl sm:text-4xl font-bold mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-foreground/60">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Security Badges */}
                <div className="flex flex-wrap justify-center gap-4">
                    {securityBadges.map((badge, index) => (
                        <Badge
                            key={index}
                            className="px-4 py-2 bg-background text-foreground border hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors"
                        >
                            <badge.icon className="h-4 w-4 mr-2" />
                            {badge.label}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}
