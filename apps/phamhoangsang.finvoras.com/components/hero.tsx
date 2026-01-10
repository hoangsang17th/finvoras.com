"use client";

import { Badge, DotPattern, SocialButton, cn } from "@repo/ui";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

const Hero = () => {
  const { ui, resumeData } = useI18n();

  if (!resumeData) {
    return (
      <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center py-20 px-6">
        <div className="w-32 h-32 rounded-[2rem] bg-muted animate-pulse mb-8" />
        <div className="h-8 w-32 bg-muted animate-pulse rounded-full mb-6" />
        <div className="h-16 w-3/4 max-w-2xl bg-muted animate-pulse rounded-lg mb-6" />
        <div className="h-8 w-1/2 max-w-lg bg-muted animate-pulse rounded-lg mb-8" />
        <div className="h-24 w-full max-w-3xl bg-muted animate-pulse rounded-lg mb-12" />
        <div className="flex gap-4">
          <div className="h-12 w-40 bg-muted animate-pulse rounded-full" />
          <div className="h-12 w-40 bg-muted animate-pulse rounded-full" />
        </div>
      </div>
    );
  }

  const { personalInfo, socialLinks } = resumeData;

  // Extract initials from name
  const initials = personalInfo.name
    .split(' ')
    .map((word: string) => word[0])
    .join('')
    .toUpperCase();

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-24 pb-20 px-6">
      {/* Background Pattern */}
      <DotPattern
        className={cn(
          "mask-image:none"
        )}
      />

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">

          {/* Content Column */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

            {/* Status Badge */}
            <Badge
              className={cn(
                "text-white rounded-full py-1.5 px-4 border-none mb-6 font-medium transition-all duration-300",
                personalInfo.statusKey === 'open_to_work'
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_15px_rgba(5,150,105,0.4)]'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
              )}
            >
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className={cn(
                    "relative inline-flex rounded-full h-2 w-2 bg-white",
                    personalInfo.statusKey === 'open_to_work' && "shadow-[0_0_8px_white]"
                  )}></span>
                </span>
                {personalInfo.statusKey === 'open_to_work' ? ui.ui.status.openToWork : ui.ui.status.building}
              </span>
            </Badge>

            {/* Main Title */}
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.1] tracking-tight mb-6">
              {personalInfo.name}
            </h2>

            {/* Description */}
            <p className="text-base xs:text-lg text-muted-foreground max-w-2xl mb-10 text-pretty leading-relaxed">
              {personalInfo.summary}
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-5">
              {socialLinks.github && (
                <SocialButton
                  href={socialLinks.github}
                  icon={<Github className="h-6 w-6" />}
                  label="Github"
                />
              )}
              {socialLinks.linkedin && (
                <SocialButton
                  href={socialLinks.linkedin}
                  icon={<Linkedin className="h-6 w-6" />}
                  label="LinkedIn"
                />
              )}
              <SocialButton
                href={`mailto:${socialLinks.email}`}
                icon={<Mail className="h-6 w-6" />}
                label="Email"
              />
            </div>
          </div>

          {/* Avatar Column */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem] group">
              {/* Soft Ambient Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/30 to-brand-primary-600/30 blur-3xl rounded-[3rem] opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

              {/* Glassy Frame */}
              <div className="relative h-full w-full rounded-[2.5rem] border border-white/20 bg-white/10 backdrop-blur-sm shadow-2xl transition-transform duration-500 group-hover:scale-[1.01] overflow-hidden">
                {/* Subtle Gradient Border Effect */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-white/20 via-transparent to-black/10 pointer-events-none"></div>

                {/* Inner Image Container */}
                <div className="absolute inset-2 rounded-[2.2rem] overflow-hidden bg-muted/20">
                  {personalInfo.avatarUrl ? (
                    <Image
                      src={personalInfo.avatarUrl}
                      alt={personalInfo.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                      fetchPriority="high"
                      sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 416px"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted/30 backdrop-blur-md">
                      <span className="text-6xl font-bold text-muted-foreground/50">{initials}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mouse Scroll Animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2 pointer-events-none">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-muted-foreground/20 flex justify-center p-2 bg-background/50 backdrop-blur-[2px]">
          <div className="w-1 h-2.5 bg-brand-primary rounded-full animate-scroll" />
        </div>
      </div>
    </div>
  );
};

export default Hero;