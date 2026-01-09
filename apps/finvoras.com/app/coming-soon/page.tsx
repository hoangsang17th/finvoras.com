"use client";

import { useI18n, LanguageSwitcher } from "@repo/i18n";
import { useState } from "react";
import { cn, FloatingUtilities, InteractiveBackground, Button, Modal } from "@repo/ui";
import type { Translations } from "@/lib/types/translations";
import { WaitlistForm } from "./waitlist-form";
import { ComingSoonNavbar } from "./navbar";
import { Send } from "lucide-react";
import { useWaitlistCount } from "./use-waitlist-count";

const WAITLIST_COUNT_URL = process.env.NEXT_PUBLIC_WAITLIST_COUNT_URL || "";

export default function ComingSoonPage() {
    const { t } = useI18n<Translations>();
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
    const { count } = useWaitlistCount(WAITLIST_COUNT_URL);

    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 flex flex-col font-sans selection:bg-brand-primary/20 overflow-x-hidden">

            <ComingSoonNavbar onOpenWaitlist={() => setIsWaitlistOpen(true)} />

            <InteractiveBackground className="bg-white dark:bg-neutral-950 flex-1 flex flex-col">

                <main className="flex-1 flex flex-col items-center justify-center p-4 relative z-10 w-full max-w-7xl mx-auto pt-32 pb-20">
                    {/* Hero Content */}
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center rounded-full border border-brand-primary/20 bg-brand-primary/5 px-3 py-1 text-sm font-medium text-brand-primary-600 dark:text-brand-primary-400 mb-6 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-brand-primary mr-2 animate-pulse"></span>
                            {t.comingSoon.hero.badge}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 pb-2">
                            {t.comingSoon.hero.title}
                        </h1>

                        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                            {t.comingSoon.hero.subtitle}
                        </p>

                        <div className="flex justify-center">
                            <Button
                                variant="primary"
                                size="md"
                                className="rounded-full px-8 text-base shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/30 transition-all hover:scale-105"
                                onClick={() => setIsWaitlistOpen(true)}
                                icon={<Send className="ml-2 h-5 w-5" />}
                                iconPosition="right"
                            >
                                {t.comingSoon.waitlist.button}
                            </Button>
                        </div>
                    </div>

                </main>

                <Modal
                    isOpen={isWaitlistOpen}
                    onClose={() => setIsWaitlistOpen(false)}
                    className="max-w-md"
                >
                    <div className="p-6">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold mb-2">{t.comingSoon.waitlist.modalTitle}</h2>
                            <p className="text-muted-foreground">{t.comingSoon.waitlist.modalSubtitle}</p>
                        </div>
                        <WaitlistForm count={count} />
                    </div>
                </Modal>
            </InteractiveBackground>

            <FloatingUtilities
                languageSwitcher={
                    <LanguageSwitcher
                        languages={[
                            { code: 'en', name: 'English', flag: '🇺🇸' },
                            { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' }
                        ]}
                        showName={false}
                        variant="switcher"
                        orientation='vertical'
                    />}
            />
        </div>
    );
}
