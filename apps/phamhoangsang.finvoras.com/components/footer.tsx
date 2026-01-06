"use client";

import { SocialButton } from "@repo/ui";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { useNavigation } from "@/lib/hooks/use-navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { ui, resumeData } = useI18n();
  const { menuItems } = useNavigation();

  if (!resumeData) {
    return null;
  }

  const { personalInfo, socialLinks } = resumeData;

  return (
    <footer className="relative bg-background border-t">
      {/* Decorative gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-24">
          {/* Brand & Mission Section */}
          <div className="max-w-md space-y-6">
            <div className="space-y-3">
              <h3 className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
                {personalInfo.name}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks?.github && (
                <SocialButton
                  href={socialLinks.github}
                  icon={<Github className="h-5 w-5" />}
                  label="GitHub"
                />
              )}
              {socialLinks?.linkedin && (
                <SocialButton
                  href={socialLinks.linkedin}
                  icon={<Linkedin className="h-5 w-5" />}
                  label="LinkedIn"
                />
              )}
              <SocialButton
                href={`mailto:${personalInfo.email}`}
                icon={<Mail className="h-5 w-5" />}
                label="Email"
              />
            </div>
          </div>

          {/* Navigation Section */}
          <div className="space-y-6 md:min-w-[200px]">
            <h4 className="font-bold text-sm uppercase tracking-wider text-foreground/50">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.fragmentId ? `#${item.fragmentId}` : item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-3 h-[2px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-sm text-muted-foreground">
                © {currentYear} {personalInfo.name}. {ui.footer.allRightsReserved}
              </p>
              <p className="text-xs text-muted-foreground/60 flex items-center gap-1.5">
                {ui.footer.builtWith} <span className="text-primary font-medium">Next.js & Tailwind CSS</span> {ui.footer.by} {personalInfo.name}
              </p>
            </div>

            <div className="flex items-center text-[10px] text-muted-foreground/40 bg-muted/30 px-3 py-1.5 rounded-full border border-border/50">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500/50 mr-2 animate-pulse" />
              This site is protected by reCAPTCHA
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;