"use client";

import { Button } from "@repo/ui";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "./theme-toggle";
import LanguageSwitcher from "./language-switcher";
import { useLanguage } from "@/lib/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { ui, resumeData } = useLanguage();
  const navigationItems: Array<{ href: string; label: string }> = [
    { href: "#about", label: ui.nav.about },
    { href: "#experience", label: ui.nav.experience },
    { href: "#skills", label: ui.nav.skills },
    { href: "#projects", label: ui.nav.projects },
    { href: "#contact", label: ui.nav.contact },
  ];

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !resumeData) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-xl">
              Loading...
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl hover:text-brand-primary transition-colors">
            {resumeData.personalInfo.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item: { href: string; label: string }) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Theme Toggle */}
            <ThemeToggle className="rounded-full" />

            {/* Resume Button */}
            {resumeData.personalInfo.resumeUrl && (
              <Button
                variant="secondary"
                size="sm"
                className="hidden sm:inline-flex"
                asChild
              >
                <Link href={resumeData.personalInfo.resumeUrl} target="_blank">
                  {ui.nav.downloadCv}
                </Link>
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="default"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="py-4 space-y-2">
              {navigationItems.map((item: { href: string; label: string }) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {resumeData.personalInfo.resumeUrl && (
                <div className="px-4 py-2">
                  <Button variant="secondary" size="sm" className="w-full" asChild>
                    <Link href={resumeData.personalInfo.resumeUrl} target="_blank">
                      {ui.nav.downloadCv}
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;