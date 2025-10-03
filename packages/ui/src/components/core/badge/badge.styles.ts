import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

/**
 * Badge variants using CVA for type-safe styling
 */
export const badgeVariants = cva(
  // Base styles
  [
    "inline-flex",
    "items-center",
    "rounded-full",
    "border",
    "font-semibold",
    "transition-colors",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-ring",
    "focus:ring-offset-2"
  ],
  {
    variants: {
      variant: {
        default: [
          "border-transparent",
          "bg-primary",
          "text-primary-foreground",
          "hover:bg-primary/80"
        ],
        secondary: [
          "border-transparent",
          "bg-secondary",
          "text-secondary-foreground",
          "hover:bg-secondary/80"
        ],
        destructive: [
          "border-transparent",
          "bg-destructive",
          "text-destructive-foreground",
          "hover:bg-destructive/80"
        ],
        success: [
          "border-transparent",
          "bg-green-500",
          "text-white",
          "hover:bg-green-500/80"
        ],
        warning: [
          "border-transparent",
          "bg-yellow-500",
          "text-white",
          "hover:bg-yellow-500/80"
        ],
        info: [
          "border-transparent",
          "bg-blue-500",
          "text-white",
          "hover:bg-blue-500/80"
        ],
        outline: [
          "text-foreground",
          "border-border",
          "hover:bg-accent",
          "hover:text-accent-foreground"
        ],
        ghost: [
          "border-transparent",
          "text-foreground",
          "hover:bg-accent",
          "hover:text-accent-foreground"
        ]
      },
      size: {
        sm: [
          "h-5",
          "px-2",
          "text-xs",
          "gap-1"
        ],
        md: [
          "h-6",
          "px-2.5",
          "text-xs",
          "gap-1"
        ],
        lg: [
          "h-7",
          "px-3",
          "text-sm",
          "gap-1.5"
        ],
        xl: [
          "h-8",
          "px-4",
          "text-sm",
          "gap-2"
        ]
      }
    },
    compoundVariants: [
      // Interactive variants
      {
        variant: ["default", "secondary", "destructive", "success", "warning", "info"],
        className: [
          "cursor-pointer"
        ]
      },
      // Disabled state
      {
        className: [
          "disabled:pointer-events-none",
          "disabled:opacity-50"
        ]
      }
    ],
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);

/**
 * Badge dot indicator variants
 */
export const badgeDotVariants = cva(
  [
    "w-2",
    "h-2",
    "rounded-full",
    "flex-shrink-0"
  ],
  {
    variants: {
      variant: {
        default: "bg-primary-foreground",
        secondary: "bg-secondary-foreground",
        destructive: "bg-destructive-foreground",
        success: "bg-white",
        warning: "bg-white",
        info: "bg-white",
        outline: "bg-foreground",
        ghost: "bg-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

/**
 * Export variant types for TypeScript
 */
export type BadgeVariantsType = VariantProps<typeof badgeVariants>;
export type BadgeDotVariantsType = VariantProps<typeof badgeDotVariants>;