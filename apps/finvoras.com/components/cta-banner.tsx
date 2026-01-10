"use client";

import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Button, GridPattern, cn } from "@repo/ui";
import { useI18n } from "@repo/i18n";
import type { Translations } from "@/lib/types/translations";

export default function CTABanner() {
  const { t } = useI18n<Translations>();

  return (
    <div className="px-6">
      <div className="dark:border relative overflow-hidden my-20 w-full dark bg-background text-foreground max-w-screen-lg mx-auto rounded-2xl py-10 md:py-16 px-6 md:px-14">
        <GridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_right,white,rgba(255,255,255,0.6),transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        <GridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_top_left,white,rgba(255,255,255,0.6),transparent)]",
            "inset-x-0 inset-y-0 h-[200%] skew-y-12"
          )}
        />
        <div className="relative z-10 flex flex-col gap-3 text-center items-center">
          {/* Urgency Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            {t.cta.urgency}
          </div>

          <h3 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            {t.cta.title}
          </h3>
          <p className="mt-2 text-base md:text-lg text-muted-foreground max-w-xl">
            {t.cta.subtitle}
          </p>
        </div>
        <div className="relative z-10 mt-10 flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              size="lg"
              href={`${process.env.NEXT_PUBLIC_APP_URL}/login`}
              icon={<ArrowUpRight className="!h-5 !w-5" />}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              {t.nav.login || "Login"}
            </Button>
            <Button
              size="lg"
              variant="secondary"
              href="/pricing"
              icon={<CalendarDays className="!h-5 !w-5" />}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              {t.cta.secondaryButton}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            {t.cta.riskReversal}
          </p>
        </div>
      </div>
    </div>
  );
}
