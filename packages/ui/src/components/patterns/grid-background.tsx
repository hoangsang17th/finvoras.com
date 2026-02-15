"use client";

import { cn } from "../../utils";

interface GridBackgroundProps {
	className?: string;
	showGlow?: boolean;
	glowColor?: string;
}

export function GridBackground({
	className,
	showGlow = true,
	glowColor = "bg-brand-primary/20",
}: GridBackgroundProps) {
	return (
		<div
			className={cn(
				"absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]",
				className,
			)}
		>
			{showGlow && (
				<div
					className={cn(
						"absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full opacity-20 blur-[100px]",
						glowColor,
					)}
				></div>
			)}
		</div>
	);
}
