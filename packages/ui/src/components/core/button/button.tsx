import React, { forwardRef } from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../utils";
import { buttonVariants } from "./button.styles";
import { ButtonProps } from "./button.types";

/**
 * Enhanced Button component với 3 trạng thái: Enabled, Disabled, Hover
 * Hỗ trợ icon và text theo yêu cầu
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			className,
			variant = "default",
			size = "md",
			disabled = false,
			type = "button",
			onClick,
			icon,
			iconPosition = "left",
			fullWidth = false,
			asChild = false,
			title,
			href,
			context = "default",
			target,
			...props
		},
		ref,
	) => {
		// Determine button content with icon support and responsive handling
		const buttonContent = () => {
			// For navbar context, ensure text never wraps
			// For default context, also prevent wrapping but allow overflow handling
			const textWrapperClass = "whitespace-nowrap";

			if (!icon) {
				return <span className={textWrapperClass}>{children}</span>;
			}

			if (!children) {
				// Icon only
				return <span className="flex-shrink-0">{icon}</span>;
			}

			// Icon with text - prevent text wrapping for both contexts
			const textElement = (
				<span className={cn(textWrapperClass, "min-w-0")}>{children}</span>
			);

			const iconElement = <span className="flex-shrink-0">{icon}</span>;

			if (iconPosition === "right") {
				return (
					<>
						{textElement}
						{iconElement}
					</>
				);
			}

			return (
				<>
					{iconElement}
					{textElement}
				</>
			);
		};

		// Compute button variants with context-specific overrides
		const computedButtonVariants = cn(
			buttonVariants({
				variant,
				size,
				fullWidth,
				disabled,
			}),
			// Context-specific overrides
			context === "navbar" && [
				"flex items-center justify-center", // flex instead of inline-flex for navbar
				"min-w-fit", // ensure button can expand with content
				"max-w-none", // remove max-width constraints for navbar
			],
			// Overflow handling
			variant !== "link" && "overflow-hidden",
			className,
		);

		// If href is provided, render as Link with button styling
		if (href && !asChild) {
			return (
				<Link
					href={href}
					className={cn(
						computedButtonVariants,
						"no-underline", // Remove default link underline
						disabled && "pointer-events-none", // Handle disabled state
					)}
					title={title}
					role="button" // Improve accessibility
					tabIndex={disabled ? -1 : 0}
					aria-disabled={disabled}
					target={target}
				>
					{buttonContent()}
				</Link>
			);
		}

		const Comp = asChild ? Slot : "button";

		return (
			<Comp
				ref={ref}
				type={type}
				disabled={disabled}
				onClick={onClick}
				title={title}
				className={computedButtonVariants}
				style={{
					outline: "none",
					border: "none",
					WebkitTapHighlightColor: "transparent", // Remove mobile tap highlight
					...props.style,
				}}
				{...props}
			>
				{buttonContent()}
			</Comp>
		);
	},
);

Button.displayName = "Button";
export { buttonVariants } from "./button.styles";
export type { ButtonProps } from "./button.types";
