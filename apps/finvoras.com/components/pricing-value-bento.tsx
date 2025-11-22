"use client";

import { useI18n } from "@repo/i18n";
import { Button } from "@repo/ui";
import { TrendingUp, Gift, Award, Sparkles, ArrowRight } from "lucide-react";
import type { Translations } from "@/lib/types/translations";
import { BentoGrid, BentoCard } from "./bento-grid";

const PricingValueBento = () => {
    const { t } = useI18n<Translations>();
    const { valueProps } = t.pricing;

    return (
        <div className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Bento Grid Layout */}
                <BentoGrid className="grid-cols-1 md:grid-cols-6 gap-6 auto-rows-auto">
                    {/* ROI Card - Large */}
                    <div className="md:col-span-4 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-8 bg-gradient-to-br from-brand-primary/5 to-brand-success/5 border border-brand-primary/20 flex flex-col justify-between">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-4 rounded-full bg-brand-primary/10">
                                <TrendingUp className="h-8 w-8 text-brand-primary" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{valueProps.roi.title}</h3>
                                <p className="text-muted-foreground">{valueProps.roi.subtitle}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Pro ROI */}
                            <div className="p-6 rounded-lg bg-background/50 border">
                                <p className="text-sm font-medium text-muted-foreground mb-2">Pro Plan</p>
                                <p className="text-lg font-semibold mb-1">{valueProps.roi.proSavings}</p>
                                <p className="text-sm text-brand-success">{valueProps.roi.proRoi}</p>
                            </div>

                            {/* Family ROI */}
                            <div className="p-6 rounded-lg bg-background/50 border">
                                <p className="text-sm font-medium text-muted-foreground mb-2">Family Plan</p>
                                <p className="text-lg font-semibold mb-1">{valueProps.roi.familySavings}</p>
                                <p className="text-sm text-brand-success">{valueProps.roi.familyRoi}</p>
                            </div>
                        </div>
                    </div>

                    {/* Pilot Program Card */}
                    <div className="md:col-span-2 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-6 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20 border border-blue-200/50 dark:border-blue-800/50 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Gift className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                <h3 className="text-xl font-bold">{valueProps.pilot.title}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">{valueProps.pilot.subtitle}</p>
                            <ul className="space-y-2 mb-4">
                                {valueProps.pilot.features.slice(0, 3).map((feature, idx) => (
                                    <li key={idx} className="text-sm flex items-start gap-2">
                                        <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button variant="secondary" className="w-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-700 dark:text-blue-300">
                            {valueProps.pilot.cta} <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    {/* Loyalty Tiers */}
                    <div className="md:col-span-6 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-8 bg-background/50 border flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <Award className="h-7 w-7 text-amber-600" />
                            <div>
                                <h3 className="text-2xl font-bold">{valueProps.loyalty.title}</h3>
                                <p className="text-muted-foreground">{valueProps.loyalty.subtitle}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Silver Tier */}
                            <div className="p-6 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="h-3 w-3 rounded-full bg-slate-400"></div>
                                    <h4 className="font-bold text-lg">{valueProps.loyalty.tiers.silver.name}</h4>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">{valueProps.loyalty.tiers.silver.requirement}</p>
                                <p className="text-sm font-medium">{valueProps.loyalty.tiers.silver.benefit}</p>
                            </div>

                            {/* Gold Tier */}
                            <div className="p-6 rounded-lg bg-gradient-to-br from-amber-100 to-yellow-200 dark:from-amber-900 dark:to-yellow-900 border-2 border-amber-400">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                                    <h4 className="font-bold text-lg">{valueProps.loyalty.tiers.gold.name}</h4>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">{valueProps.loyalty.tiers.gold.requirement}</p>
                                <p className="text-sm font-medium">{valueProps.loyalty.tiers.gold.benefit}</p>
                            </div>

                            {/* Ambassador Tier */}
                            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-100 to-pink-200 dark:from-purple-900 dark:to-pink-900 border-2 border-purple-400">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                                    <h4 className="font-bold text-lg">{valueProps.loyalty.tiers.ambassador.name}</h4>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">{valueProps.loyalty.tiers.ambassador.requirement}</p>
                                <p className="text-sm font-medium">{valueProps.loyalty.tiers.ambassador.benefit}</p>
                            </div>
                        </div>
                    </div>
                </BentoGrid>
            </div>
        </div>
    );
};

export default PricingValueBento;
