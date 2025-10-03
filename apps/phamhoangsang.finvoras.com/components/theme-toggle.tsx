"use client";

import { Button } from "@repo/ui";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
    variant?: "default" | "ghost" | "outline";
    size?: "default" | "sm" | "lg" | "icon";
    className?: string;
}

export const ThemeToggle = ({
    variant = "ghost",
    size = "icon",
    className = ""
}: ThemeToggleProps) => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    // Wait until mounted on client
    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    // Show loading state until mounted
    if (!mounted) {
        return (
            <Button
                variant={variant}
                size={size}
                className={`${className} opacity-50`}
                disabled
                title="Loading theme..."
            >
                <Sun className="h-5 w-5" />
            </Button>
        );
    }

    return (
        <Button
            variant={variant}
            size={size}
            onClick={toggleTheme}
            className={`${className} transition-transform hover:scale-105`}
            title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
        >
            {resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all" />
            ) : (
                <Moon className="h-5 w-5 rotate-0 scale-100 transition-all" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
};

export default ThemeToggle;