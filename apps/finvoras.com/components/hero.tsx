import { Badge, Button } from "@repo/ui";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import React from "react";
import LogoCloud from "./logo-cloud";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center py-20 px-6">
      <div className="md:mt-6 flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <Badge className="bg-brand-primary hover:bg-brand-primary-600 text-white rounded-full py-1 border-none">
            Take Control of Your Finances 💰
          </Badge>
          <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
            Smart Finance Management for Everyone
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg text-brand-neutral-600 dark:text-brand-grey-350">
            Track expenses, manage budgets, and build wealth with Finvoras.
            Get personalized insights and financial education to achieve your money goals.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4">
            <Button
              variant="brand"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base"
              asChild
            >
              <Link href="/register">
                Get Started <ArrowUpRight className="!h-5 !w-5" />
              </Link>
            </Button>
            <Button
              variant="brand-outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base shadow-none"
              asChild
            >
              <Link href="/features">
                <CirclePlay className="!h-5 !w-5" /> Explore Features
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <LogoCloud className="mt-24 max-w-3xl mx-auto" />
    </div>
  );
};

export default Hero;
