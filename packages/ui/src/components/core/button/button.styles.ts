import { cva, type VariantProps } from "class-variance-authority";
import { COMPONENT_SIZES, BORDER_RADIUS, A11Y } from "../../../constants/design-system";

/**
 * Button style variants using CVA (Class Variance Authority)
 */
export const buttonVariants = cva(
  [
    // Base styles
    "inline-flex items-center justify-center gap-2",
    "font-medium text-sm",
    "transition-all duration-200 ease-in-out",
    "disabled:pointer-events-none disabled:opacity-50",
    "relative overflow-hidden",
    // Focus styles
    A11Y.focusRing,
    // Hover and active states
    "hover:scale-[1.02] active:scale-[0.98]",
    "hover:shadow-md active:shadow-sm",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-primary text-primary-foreground",
          "hover:bg-primary/90",
          "active:bg-primary/80",
          "shadow-sm",
        ],
        primary: [
          "bg-primary text-primary-foreground",
          "hover:bg-primary/90",
          "active:bg-primary/80",
          "shadow-sm",
        ],
        destructive: [
          "bg-destructive text-destructive-foreground",
          "hover:bg-destructive/90",
          "active:bg-destructive/80",
          "shadow-sm",
        ],
        outline: [
          "border border-input bg-background",
          "hover:bg-accent hover:text-accent-foreground",
          "active:bg-accent/80",
        ],
        secondary: [
          "bg-secondary text-secondary-foreground",
          "hover:bg-secondary/80",
          "active:bg-secondary/70",
          "shadow-sm",
        ],
        ghost: [
          "bg-transparent",
          "hover:bg-accent hover:text-accent-foreground",
          "active:bg-accent/80",
        ],
        brand: [
          "bg-brand-primary text-white",
          "hover:bg-brand-primary/90",
          "active:bg-brand-primary/80",
          "shadow-lg hover:shadow-xl",
          "border border-brand-primary/20",
        ],
        "brand-outline": [
          "border-2 border-brand-primary text-brand-primary bg-transparent",
          "hover:bg-brand-primary hover:text-white",
          "active:bg-brand-primary/90 active:text-white",
          "transition-all duration-200",
        ],
      },
      size: {
        sm: [
          "h-8 px-3 text-xs",
          "min-w-[2rem]",
          `rounded-[${BORDER_RADIUS.sm}]`,
        ],
        md: [
          "h-10 px-4 py-2",
          "min-w-[2.5rem]",
          `rounded-[${BORDER_RADIUS.md}]`,
        ],
        lg: [
          "h-12 px-6 text-base",
          "min-w-[3rem]",
          `rounded-[${BORDER_RADIUS.lg}]`,
        ],
        xl: [
          "h-14 px-8 text-lg",
          "min-w-[3.5rem]",
          `rounded-[${BORDER_RADIUS.xl}]`,
        ],
        icon: [
          "h-10 w-10 p-0",
          `rounded-[${BORDER_RADIUS.md}]`,
        ],
        default: [
          "h-10 px-4 py-2",
          "min-w-[2.5rem]",
          `rounded-[${BORDER_RADIUS.md}]`,
        ],
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      iconOnly: {
        true: "!px-0 aspect-square",
        false: "",
      },
      rounded: {
        true: "!rounded-full",
        false: "",
      },
      loading: {
        true: "cursor-wait",
        false: "",
      },
    },
    compoundVariants: [
      // Icon-only size adjustments
      {
        iconOnly: true,
        size: "sm",
        className: "w-8 h-8",
      },
      {
        iconOnly: true,
        size: "md",
        className: "w-10 h-10",
      },
      {
        iconOnly: true,
        size: "lg",
        className: "w-12 h-12",
      },
      {
        iconOnly: true,
        size: "xl",
        className: "w-14 h-14",
      },
      // Brand variant with outline gets special hover
      {
        variant: "brand-outline",
        className: "hover:shadow-lg active:shadow-md",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      fullWidth: false,
      iconOnly: false,
      rounded: false,
      loading: false,
    },
  }
);

export type ButtonVariantsType = VariantProps<typeof buttonVariants>;