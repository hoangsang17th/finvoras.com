"use client";

import { Button } from "@repo/ui";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { ui, resumeData } = useLanguage();

  if (!resumeData) {
    return null;
  }

  const { personalInfo, socialLinks } = resumeData;
  
  const navigationItems = [
    { href: "#about", label: ui.nav.about },
    { href: "#experience", label: ui.nav.experience },
    { href: "#skills", label: ui.nav.skills },
    { href: "#projects", label: ui.nav.projects },
    { href: "#contact", label: ui.nav.contact },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl">{personalInfo.name}</h3>
            <p className="text-muted-foreground text-sm max-w-md">
              {personalInfo.bio}
            </p>
            <div className="flex space-x-3">
              {socialLinks?.github && (
                <Button variant="ghost" size="icon" className="rounded-full" asChild>
                  <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
              )}
              {socialLinks?.linkedin && (
                <Button variant="ghost" size="icon" className="rounded-full" asChild>
                  <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
              )}
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <Link href={`mailto:${personalInfo.email}`}>
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <div className="space-y-2">
              {personalInfo.resumeUrl && (
                <Link href={personalInfo.resumeUrl} target="_blank" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Download Resume
                </Link>
              )}
              {socialLinks?.github && (
                <Link href={socialLinks.github} target="_blank" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  GitHub Profile
                </Link>
              )}
              {socialLinks?.linkedin && (
                <Link href={socialLinks.linkedin} target="_blank" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn Profile
                </Link>
              )}
              <Link href={`mailto:${personalInfo.email}`} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Send Email
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;