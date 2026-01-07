import { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal • Finvoras",
  description: "Access Finvoras' Privacy Policy, Terms of Service, and other legal agreements.",
};

const LEGAL_LINKS = [
  {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal data.",
    href: "/privacy",
    icon: Lock,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Terms of Service",
    description: "The rules and guidelines for using our platform.",
    href: "/terms",
    icon: Shield,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export default function LegalIndexPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 sm:py-32">
      <header className="text-center space-y-4 mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          Trust & Legal
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We want to be transparent about how we work. Here you can find all the legal documents
          that govern your use of Finvoras.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-6">
        {LEGAL_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group relative p-8 rounded-3xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <div className={`w-12 h-12 rounded-2xl ${link.bg} flex items-center justify-center mb-6`}>
              <link.icon className={`w-6 h-6 ${link.color}`} />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                {link.title}
                <ChevronRight className="w-5 h-5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-muted-foreground" />
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {link.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <footer className="mt-20 text-center">
        <p className="text-sm text-muted-foreground">
          Looking for something else? <Link href="/contact" className="text-primary hover:underline">Contact our legal team</Link>
        </p>
      </footer>
    </div>
  );
}
