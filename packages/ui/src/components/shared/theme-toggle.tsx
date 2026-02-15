"use client";

import { Button } from "../core/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ButtonProps } from "../core/button/button.types";

interface ThemeToggleProps
	extends Pick<ButtonProps, "variant" | "size" | "className" | "context"> {
	/**
	 * Title text for accessibility
	 */
	title?: string;
}

/**
 * Shared ThemeToggle component that works across all apps
 * Supports all Button variants and contexts (default, navbar)
 */
export const ThemeToggle = ({
	variant = "secondary",
	size = "icon",
	className = "",
	context = "default",
	title,
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
				context={context}
				disabled
				title="Loading theme..."
				icon={<Sun className="h-5 w-5" />}
			/>
		);
	}

	const currentTitle =
		title || `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`;

	return (
		<Button
			variant={variant}
			size={size}
			onClick={toggleTheme}
			className={`${className} transition-transform hover:scale-105`}
			context={context}
			title={currentTitle}
			icon={
				resolvedTheme === "dark" ? (
					<Sun className="h-5 w-5 rotate-0 scale-100 transition-all" />
				) : (
					<Moon className="h-5 w-5 rotate-0 scale-100 transition-all" />
				)
			}
		>
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
};

export default ThemeToggle;
