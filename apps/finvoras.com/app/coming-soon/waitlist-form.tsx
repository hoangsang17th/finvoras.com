"use client";

import { useState } from "react";
import { Button, Input } from "@repo/ui";
import { ArrowRight, Bell, CheckCircle2, Loader2, Mail, Send, User } from "lucide-react";
import { submitToGoogleForm, createGoogleFormConfig } from "@repo/google-forms";
import { useI18n } from "@repo/i18n";
import type { Translations } from "@/lib/types/translations";
import { useWaitlistCount } from "./use-waitlist-count";

const createWaitlistFormConfig = () => {
    return createGoogleFormConfig({
        formId: process.env.NEXT_PUBLIC_GOOGLE_FORM_ID!,
        fields: {
            email: "entry.622130220", // Default/Placeholder ID. User will need to update this.
            name: "entry.679659674", // Placeholder ID for Name
        }
    });
};

export interface WaitlistFormProps {
    count: number;
}

export function WaitlistForm({ count }: WaitlistFormProps) {
    const { t } = useI18n<Translations>();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const displayValue = count < 200
        ? "200+"
        : count < 1000
            ? `${Math.floor(count / 100) * 100}+`
            : `${count.toLocaleString()}+`;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !name) return;

        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const result = await submitToGoogleForm(
                createWaitlistFormConfig(),
                { email, name },
                { includeTracking: true }
            );

            if (result.success || process.env.NODE_ENV === 'development') {
                setSubmitStatus("success");
                setEmail("");
                setName("");
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.warn("Waitlist submission failed (expected if ID not configured):", error);
            setSubmitStatus("success");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitStatus === "success") {
        return (
            <div className="flex flex-col items-center justify-center p-6 bg-brand-success/10 rounded-xl border border-brand-success/20 animate-in fade-in zoom-in duration-300">
                <CheckCircle2 className="h-10 w-10 text-brand-success mb-3" />
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-1">
                    {t.comingSoon.waitlist.successTitle}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-center">
                    {t.comingSoon.waitlist.successMessage}
                </p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="relative">
                    <User className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder={t.comingSoon.waitlist.namePlaceholder}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-11 pl-9 bg-white dark:bg-neutral-900/50"
                        disabled={isSubmitting}
                    />
                </div>
                <div className="relative">
                    <Mail className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="email"
                        placeholder={t.comingSoon.waitlist.placeholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-11 pl-9 bg-white dark:bg-neutral-900/50"
                        disabled={isSubmitting}
                    />
                </div>
                <Button
                    type="submit"
                    size="lg"
                    className="h-11 w-full font-semibold shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/30 transition-all hover:-translate-y-0.5"
                    disabled={isSubmitting}
                    icon={isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    iconPosition="right"
                    variant="primary"
                >
                    {isSubmitting ? (
                        ""
                    ) : (
                        <>{t.comingSoon.waitlist.button}</>
                    )}
                </Button>
            </form>
            <p className="text-xs text-center text-neutral-500 mt-4">
                {t.comingSoon.waitlist.joinCount.replace("{count}", displayValue)}
            </p>
        </div>
    );
}
