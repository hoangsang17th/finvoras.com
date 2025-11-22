"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import { useI18n } from "@repo/i18n";
import type { Translations } from "@/lib/types/translations";

const HowItWorks = () => {
    const { t } = useI18n<Translations>();
    const steps = (t.howItWorks.steps as Array<{ title: string; description: string; cta?: string; href?: string }>);
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.howItWorks.title}</h2>
                <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">{t.howItWorks.description}</p>
                <div className="grid md:grid-cols-3 gap-6">
                    {steps.map((step, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-brand-primary/10 text-brand-primary">
                                <CheckCircle className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                            {step.cta && (
                                <a href={step.href} className="inline-flex items-center text-brand-primary hover:underline">
                                    {step.cta} <ArrowRight className="ml-1 h-4 w-4" />
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
