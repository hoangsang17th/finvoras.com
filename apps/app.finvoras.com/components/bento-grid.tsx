"use client";

import { ReactNode } from "react";
import { cn } from "@repo/ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@repo/ui";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoCard = ({
    className,
    title,
    description,
    header,
    icon,
    href,
    cta,
}: {
    className?: string;
    title?: string | ReactNode;
    description?: string | ReactNode;
    header?: ReactNode;
    icon?: ReactNode;
    href?: string;
    cta?: string;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {description}
                </div>
                {href && cta && (
                    <div className="mt-4 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-200">
                        <Button variant="link" className="p-0 h-auto text-brand-primary" asChild>
                            <Link href={href}>
                                {cta} <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
