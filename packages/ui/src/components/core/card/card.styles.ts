import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

/**
 * Card variants using CVA for type-safe styling
 */
export const cardVariants = cva(
	// Base styles
	["rounded-lg", "transition-all", "duration-200", "ease-in-out"],
	{
		variants: {
			variant: {
				default: ["bg-card", "text-card-foreground", "border", "border-border"],
				outlined: ["bg-transparent", "border-2", "border-border"],
				filled: ["bg-muted", "border-0"],
				elevated: ["bg-card", "text-card-foreground", "border-0", "shadow-md"],
				ghost: ["bg-transparent", "border-0"],
			},
			size: {
				sm: "text-sm",
				md: "text-base",
				lg: "text-lg",
			},
			shadow: {
				none: "shadow-none",
				sm: "shadow-sm",
				md: "shadow-md",
				lg: "shadow-lg",
				xl: "shadow-xl",
			},
			padding: {
				none: "p-0",
				sm: "p-3",
				md: "p-4",
				lg: "p-6",
				xl: "p-8",
			},
		},
		compoundVariants: [
			// Interactive variants
			{
				variant: "default",
				className: [
					"hover:shadow-sm",
					"focus-visible:outline-none",
					"focus-visible:ring-2",
					"focus-visible:ring-ring",
					"focus-visible:ring-offset-2",
				],
			},
			{
				variant: "outlined",
				className: [
					"hover:border-border/80",
					"focus-visible:outline-none",
					"focus-visible:ring-2",
					"focus-visible:ring-ring",
				],
			},
			{
				variant: "elevated",
				className: [
					"hover:shadow-lg",
					"focus-visible:outline-none",
					"focus-visible:ring-2",
					"focus-visible:ring-ring",
				],
			},
		],
		defaultVariants: {
			variant: "default",
			size: "md",
			shadow: "none",
			padding: "md",
		},
	},
);

/**
 * Card header variants
 */
export const cardHeaderVariants = cva(["flex", "flex-col", "space-y-1.5"], {
	variants: {
		size: {
			sm: "p-3",
			md: "p-4",
			lg: "p-6",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

/**
 * Card title variants
 */
export const cardTitleVariants = cva(
	["font-semibold", "leading-none", "tracking-tight"],
	{
		variants: {
			size: {
				sm: "text-sm",
				md: "text-base",
				lg: "text-lg",
				xl: "text-xl",
			},
		},
		defaultVariants: {
			size: "md",
		},
	},
);

/**
 * Card content variants
 */
export const cardContentVariants = cva("", {
	variants: {
		padding: {
			none: "p-0",
			sm: "p-3 pt-0",
			md: "p-4 pt-0",
			lg: "p-6 pt-0",
		},
	},
	defaultVariants: {
		padding: "md",
	},
});

/**
 * Card footer variants
 */
export const cardFooterVariants = cva(["flex", "items-center"], {
	variants: {
		align: {
			left: "justify-start",
			center: "justify-center",
			right: "justify-end",
			between: "justify-between",
		},
		separated: {
			true: "border-t border-border pt-4",
			false: "",
		},
	},
	compoundVariants: [
		{
			separated: true,
			className: "mt-4",
		},
	],
	defaultVariants: {
		align: "left",
		separated: false,
	},
});

/**
 * Export variant types for TypeScript
 */
export type CardVariantsType = VariantProps<typeof cardVariants>;
export type CardHeaderVariantsType = VariantProps<typeof cardHeaderVariants>;
export type CardTitleVariantsType = VariantProps<typeof cardTitleVariants>;
export type CardContentVariantsType = VariantProps<typeof cardContentVariants>;
export type CardFooterVariantsType = VariantProps<typeof cardFooterVariants>;
