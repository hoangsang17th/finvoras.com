import { Button, Input, Separator } from "@repo/ui";
import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  variant?: "full" | "minimal";
  className?: string;
}

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "https://finvoras.com/#features" },
      { label: "Pricing", href: "https://finvoras.com/#pricing" },
      { label: "Blog", href: "https://finvoras.com/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "https://finvoras.com/#mission" },
      { label: "Privacy", href: "https://finvoras.com/privacy" },
      { label: "Terms", href: "https://finvoras.com/terms" },
    ],
  },
];

const Footer = ({ variant = "full", className = "" }: FooterProps) => {
  if (variant === "minimal") {
    return (
      <footer className={`py-8 px-6 border-t bg-background/50 backdrop-blur-sm ${className}`}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-medium">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Finvoras</span>
            <Separator orientation="vertical" className="h-4 hidden sm:block" />
            <span className="hidden sm:inline">Built with heart for financial freedom</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="https://finvoras.com/privacy" className="hover:text-brand-primary transition-colors">
              Privacy
            </Link>
            <Link href="https://finvoras.com/terms" className="hover:text-brand-primary transition-colors">
              Terms
            </Link>
            <Link href="https://finvoras.com/contact" className="hover:text-brand-primary transition-colors">
              Support
            </Link>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={`dark:border-t mt-40 dark bg-background text-foreground ${className}`}>
      <div className="max-w-screen-xl mx-auto">
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 xl:px-0">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            {/* Logo */}
            <Image
              src="/logo.png"
              alt="Finvoras Logo"
              width={48}
              height={48}
              className="h-12 w-auto"
            />

            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering your financial journey with smart tools and insights.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h6 className="font-semibold">{section.title}</h6>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-brand-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="max-w-xs w-full">
            <h6 className="font-semibold">Stay up to date</h6>
            <form className="mt-4 flex flex-col gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-muted/50 border-none" />
              <Button variant="primary" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>

        <Separator className="opacity-10" />

        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground text-sm text-center sm:text-start">
            &copy; {new Date().getFullYear()} Finvoras. All rights reserved.
          </span>

          {/* Socials */}
          <div className="flex items-center gap-5 text-muted-foreground">
            <Link href="#" target="_blank" className="hover:text-brand-primary transition-colors">
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank" className="hover:text-brand-primary transition-colors">
              <LinkedinIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank" className="hover:text-brand-primary transition-colors">
              <GithubIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
