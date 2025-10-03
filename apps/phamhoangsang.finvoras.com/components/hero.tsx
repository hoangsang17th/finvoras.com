"use client";

import { Badge, Button } from "@repo/ui";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { usePersonalInfo, useSocialLinks } from "@/lib/hooks/useResumeData";

const Hero = () => {
  const personalInfo = usePersonalInfo();
  const socialLinks = useSocialLinks();

  if (!personalInfo || !socialLinks) {
    return <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center">Loading...</div>;
  }

  // Extract initials from name
  const initials = personalInfo.name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center py-20 px-6">
      <div className="text-center max-w-4xl">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold">
              {personalInfo.avatar ? (
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                initials
              )}
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <Badge className={`${personalInfo.availability ? 'bg-brand-success hover:bg-brand-success' : 'bg-muted hover:bg-muted'} text-white rounded-full py-1 border-none mb-6`}>
          {personalInfo.status}
        </Badge>

        {/* Main Title */}
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold !leading-[1.1] tracking-tight mb-6">
          {personalInfo.name}
        </h1>

        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground mb-8">
          {personalInfo.title}
        </h2>

        {/* Description */}
        <p className="text-lg xs:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
          {personalInfo.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            variant="default"
            size="lg"
            className="w-full sm:w-auto rounded-full text-base"
            asChild
          >
            <Link href="#contact">
              Get In Touch <Mail className="!h-5 !w-5" />
            </Link>
          </Button>
          {socialLinks.resume && (
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base"
              asChild
            >
              <Link href={socialLinks.resume} target="_blank">
                Download Resume <Download className="!h-5 !w-5" />
              </Link>
            </Button>
          )}
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          {socialLinks.github && (
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </Link>
            </Button>
          )}
          {socialLinks.linkedin && (
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </Link>
            </Button>
          )}
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <Link href={`mailto:${socialLinks.email}`}>
              <Mail className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ArrowUpRight className="h-6 w-6 text-muted-foreground rotate-90" />
        </div>
      </div>
    </div>
  );
};

export default Hero;