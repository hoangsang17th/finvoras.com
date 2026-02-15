import React from "react";
import { cn } from "../../../utils";
import type { BadgeProps } from "./badge.types";
import { badgeVariants, badgeDotVariants } from "./badge.styles";

/**
 * Badge component with enhanced styling and interactive capabilities
 */
export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
	(
		{
			as = "div",
			className,
			variant = "default",
			size = "md",
			interactive = false,
			disabled = false,
			onClick,
			icon,
			iconAfter,
			dot = false,
			children,
			...props
		},
		ref,
	) => {
		const Component = as as React.ElementType;

		const badgeClasses = cn(
			badgeVariants({ variant, size }),
			{
				"cursor-pointer": interactive && !disabled,
				"cursor-not-allowed opacity-50": disabled,
			},
			className,
		);

		const handleClick = (event: React.MouseEvent) => {
			if (disabled) return;
			onClick?.(event);
		};

		return (
			<Component
				ref={ref}
				className={badgeClasses}
				onClick={interactive ? handleClick : onClick}
				role={interactive ? "button" : undefined}
				tabIndex={interactive && !disabled ? 0 : undefined}
				aria-disabled={disabled}
				{...props}
			>
				{dot && (
					<span
						className={cn(badgeDotVariants({ variant }))}
						aria-hidden="true"
					/>
				)}

				{icon && (
					<span className="flex items-center" aria-hidden="true">
						{icon}
					</span>
				)}

				{children && <span>{children}</span>}

				{iconAfter && (
					<span className="flex items-center" aria-hidden="true">
						{iconAfter}
					</span>
				)}
			</Component>
		);
	},
);

Badge.displayName = "Badge";
