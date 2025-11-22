'use client';

import { BentoGrid, BentoCard } from "@/components/bento-grid";
import { useI18n } from "@repo/i18n";
import type { Translations } from "@/lib/types/translations";
import {
  PieChart,
  Wallet,
  TrendingUp,
  ShieldCheck,
  Smartphone,
  Globe,
  Zap
} from "lucide-react";
import { cn } from "@repo/ui";

export default function Features() {
  const { t } = useI18n<Translations>();
  const { features } = t;

  const items = [
    {
      title: features.expense.title,
      description: features.expense.description,
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
      icon: <PieChart className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2",
      href: "/features/expense-tracking",
      cta: "Learn more",
    },
    {
      title: features.budget.title,
      description: features.budget.description,
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
      icon: <Wallet className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
      href: "/features/budgeting",
      cta: "Learn more",
    },
    {
      title: features.insights.title,
      description: features.insights.description,
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
      icon: <TrendingUp className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
      href: "/features/insights",
      cta: "Learn more",
    },
    {
      title: "Bank Sync",
      description: "Connect with 50+ banks in Vietnam securely.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
      icon: <Zap className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2",
      href: "/features/bank-sync",
      cta: "Learn more",
    },
  ];

  return (
    <div className="py-20 bg-muted/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{features.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {features.subtitle}
          </p>
        </div>

        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoCard
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
              href={item.href}
              cta={item.cta}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};
