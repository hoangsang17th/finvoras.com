"use client";

import { Badge, Button } from "@repo/ui";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";
import { useI18n } from "@repo/i18n";
import type { Translations } from "@/lib/types/translations";
import LogoCloud from "./logo-cloud";

const Hero = () => {
  const { t } = useI18n<Translations>();


  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center py-20 px-6">
      <div className="md:mt-6 flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <Badge className="bg-brand-primary hover:bg-brand-primary-600 text-white rounded-full py-1 border-none">
            {t.hero.subtitle} 💰
          </Badge>
          <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg text-brand-neutral-600 dark:text-brand-grey-350">
            {t.hero.description}
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              icon={<ArrowUpRight className="h-5 w-5" />}
              iconPosition="right"
              href="/register"
            >
              {t.hero.primaryCta}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
              icon={<CirclePlay className="h-5 w-5" />}
              href="/features"
              style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
            >
              {t.hero.secondaryCta}
            </Button>
          </div>
        </div>
      </div>
      <LogoCloud className="mt-24 max-w-3xl mx-auto" trustedByText={t.hero.trustedBy} />
    </div>
  );
};

export default Hero;
