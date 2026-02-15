import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../utils";

const badgeVariants = cva(
	"inline-flex items-center rounded-full border px-2.5 py-0.5 font-bold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	{
		variants: {
			variant: {
				default:
					"border-transparent bg-primary text-primary-foreground shadow ",
				secondary:
					"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
				destructive:
					"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
				outline: "text-foreground bg-transparent",
				flat: "border-transparent bg-muted text-muted-foreground",
				"high-contrast": "border-foreground bg-foreground text-background",
				outlined: "bg-background text-foreground border-border shadow-sm",
			},
			size: {
				sm: "text-[9px] px-2 py-0.5",
				md: "text-[11px] px-2.5 py-1",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	},
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
	return (
		<div
			className={cn(badgeVariants({ variant, size }), className)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };
