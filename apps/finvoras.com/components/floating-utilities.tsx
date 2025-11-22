"use client";

import { ThemeToggle, cn } from "@repo/ui";
import LanguageSwitcher from "./language-switcher";
import { useEffect, useState } from "react";

export const FloatingUtilities = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show after a small delay or scroll to avoid initial clutter
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={cn(
                "fixed bottom-24 md:bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-500 ease-in-out",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
        >
            <div className="p-1.5 bg-background/80 backdrop-blur-md border rounded-full shadow-lg flex flex-col gap-2">
                <ThemeToggle variant="secondary" size="icon" className="rounded-full hover:bg-primary/10" />
                <div className="h-px w-full bg-border/50" />
                <LanguageSwitcher orientation="vertical" />
            </div>
        </div>
    );
};

export default FloatingUtilities;
