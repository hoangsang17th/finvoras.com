"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "../core/button";
import { cn } from "../../index";

interface FloatingUtilitiesProps {
    languageSwitcher?: ReactNode;
    className?: string;
}

export const FloatingUtilities = ({
    languageSwitcher,
    className
}: FloatingUtilitiesProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show after a short delay for entry animation
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={cn(
                "fixed bottom-24 md:bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-500 ease-in-out",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                className
            )}
        >
            <div className="p-1.5 bg-background/80 backdrop-blur-md border rounded-full shadow-lg flex flex-col gap-2">
                <ThemeToggle
                    variant="secondary"
                    size="icon"
                    className="rounded-full hover:bg-primary/10"
                />
                {languageSwitcher && (
                    <>
                        <div className="h-px w-full bg-border/50" />
                        {languageSwitcher}
                    </>
                )}
            </div>
        </div>
    );
};
