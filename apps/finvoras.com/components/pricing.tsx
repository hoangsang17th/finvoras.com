"use client";
import { useState } from "react";
import { useI18n } from "@repo/i18n";
import { Badge, Button, Separator, Tabs, TabsList, TabsTrigger } from "@repo/ui";
import { CircleCheck } from "lucide-react";

import type { Translations } from "@/lib/types/translations";

type Plan = {
  name: string;
  price: string;
  priceYearly?: string;
  pricePerMonth?: string;
  description: string;
  features: string[];
  cta: string;
  popular?: string;
};

const Pricing = () => {
  const { t } = useI18n<Translations>();
  const { pricing } = t;
  const [billingPeriod, setBillingPeriod] = useState("monthly"); // "monthly" or "yearly"

  // Helper to get price based on billing period
  const getPrice = (plan: Plan) => {
    if (billingPeriod === "monthly") return plan.price;
    if (plan.priceYearly) return plan.priceYearly;
    return plan.price;
  };

  // Filter out undefined plans to prevent runtime errors if translations are not yet loaded
  const plans: Plan[] = [pricing.free, pricing.pro, pricing.family].filter((plan): plan is Plan => !!plan);

  return (
    <div id="pricing" className="flex flex-col items-center justify-center py-12 xs:py-20 px-6">
      <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold text-center tracking-tight">{pricing.title}</h1>
      <p className="mt-4 text-xl text-muted-foreground text-center max-w-2xl">{pricing.subtitle}</p>

      <Tabs value={billingPeriod} onValueChange={setBillingPeriod} className="mt-8">
        <TabsList className="h-11 px-1.5 rounded-full bg-brand-primary/10">
          <TabsTrigger value="monthly" className="py-1.5 rounded-full data-[state=active]:bg-brand-primary data-[state=active]:text-white">
            {pricing.monthly}
          </TabsTrigger>
          <TabsTrigger value="yearly" className="py-1.5 rounded-full data-[state=active]:bg-brand-primary data-[state=active]:text-white">
            {pricing.yearly} ({pricing.savePercent})
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mt-12 max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {plans.map((plan: Plan) => (
          <div
            key={plan.name}
            className={`relative border rounded-xl p-6 bg-background/50 flex flex-col ${plan.popular ? "border-[2px] border-brand-primary bg-background py-10 shadow-lg" : ""}`}
          >
            {plan.popular && (
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-brand-primary hover:bg-brand-primary-600 text-white border-none">
                {plan.popular}
              </Badge>
            )}
            <h3 className="text-lg font-medium text-center">{plan.name}</h3>
            <p className="mt-2 text-3xl sm:text-4xl font-bold text-center">
              {getPrice(plan)}
              {plan.price !== "Free" && plan.price !== "Miễn phí" && plan.pricePerMonth && (
                <span className="ml-1.5 text-sm text-muted-foreground font-normal">{plan.pricePerMonth}</span>
              )}
            </p>
            {billingPeriod === "yearly" && plan.priceYearly && plan.price !== "Free" && plan.price !== "Miễn phí" && (
              <p className="text-xs text-center text-brand-success mt-1">
                ✓ {pricing.savePercent}
              </p>
            )}
            <p className="mt-4 text-center font-medium text-muted-foreground">{plan.description}</p>
            <Button
              variant={plan.popular ? "primary" : "secondary"}
              size="lg"
              className="w-full mt-6 text-base"
            >
              {plan.cta}
            </Button>
            <Separator className="my-8" />
            <ul className="space-y-3 flex-grow">
              {plan.features.map((feat: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 mt-0.5 text-brand-success flex-shrink-0" />
                  <span className="text-sm">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
