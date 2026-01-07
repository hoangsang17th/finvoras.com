"use client";

import { Button } from "@repo/ui";
import LogoCloud from "@/components/logo-cloud";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useI18n } from "@repo/i18n";
import type { Translations } from "@/lib/types/translations";
import { ShieldCheck, Globe, Lock } from "lucide-react";

const Hero = () => {
  const { t } = useI18n<Translations>();

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand-primary/20 opacity-20 blur-[100px]"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full border border-brand-primary/20 bg-brand-primary/5 px-3 py-1 text-sm font-medium text-brand-primary mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand-primary mr-2"></span>
            Made for Vietnam 🇻🇳
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
            {t.hero.title}
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base rounded-full" href="/register">
              {t.hero.primaryCta} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto h-12 px-8 text-base rounded-full" href="/demo">
              <PlayCircle className="mr-2 h-4 w-4" /> {t.hero.watchDemo}
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-brand-success" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="h-4 w-4 text-brand-primary" />
              <span>AES-256 Encryption</span>
            </div>
          </div>
        </div>

        {/* App Screenshot / Dashboard Preview */}
        <div className="relative max-w-5xl mx-auto mt-8">
          <div className="relative rounded-2xl border bg-background/50 backdrop-blur-sm shadow-2xl overflow-hidden aspect-[16/10]">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 via-transparent to-brand-success/5"></div>
            {/* Placeholder for actual dashboard screenshot */}
            <div className="flex items-center justify-center h-full text-muted-foreground">
              <div className="text-center">
                <p className="text-lg font-medium mb-2">Dashboard Preview</p>
                <p className="text-sm opacity-70">High-fidelity screenshot will be placed here</p>
              </div>
            </div>
          </div>

          {/* Decorative blurred elements behind screenshot */}
          <div className="absolute -top-12 -left-12 h-64 w-64 bg-brand-primary/30 rounded-full blur-3xl -z-10 opacity-50"></div>
          <div className="absolute -bottom-12 -right-12 h-64 w-64 bg-brand-success/30 rounded-full blur-3xl -z-10 opacity-50"></div>
        </div>

        <div className="mt-24 pt-10 border-t border-border/40">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">
            {t.hero.trustedBy}
          </p>
          <LogoCloud />
        </div>
      </div>
    </section>
  );
};

export default Hero;
