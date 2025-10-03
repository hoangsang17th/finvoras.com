import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

/**
 * Input variants using CVA for type-safe styling
 */
export const inputVariants = cva(
  // Base styles
  [
    "flex",
    "w-full",
    "rounded-md",
    "border",
    "bg-background",
    "px-3",
    "py-2",
    "text-sm",
    "transition-colors",
    "file:border-0",
    "file:bg-transparent",
    "file:text-sm",
    "file:font-medium",
    "placeholder:text-muted-foreground",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",
    "focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50"
  ],
  {
    variants: {
      variant: {
        default: [
          "border-input",
          "hover:border-input/80"
        ],
        filled: [
          "border-transparent",
          "bg-muted",
          "hover:bg-muted/80"
        ],
        ghost: [
          "border-transparent",
          "bg-transparent",
          "hover:bg-accent",
          "hover:text-accent-foreground"
        ]
      },
      size: {
        sm: [
          "h-8",
          "px-2",
          "text-xs"
        ],
        md: [
          "h-10",
          "px-3",
          "text-sm"
        ],
        lg: [
          "h-12",
          "px-4",
          "text-base"
        ]
      },
      state: {
        default: "",
        invalid: [
          "border-destructive",
          "focus-visible:ring-destructive"
        ],
        valid: [
          "border-green-500",
          "focus-visible:ring-green-500"
        ]
      }
    },
    compoundVariants: [
      // Invalid state overrides
      {
        state: "invalid",
        variant: "filled",
        className: [
          "border-destructive",
          "bg-destructive/10"
        ]
      },
      {
        state: "invalid",
        variant: "ghost",
        className: [
          "border-destructive"
        ]
      }
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      state: "default"
    }
  }
);

/**
 * Input label variants
 */
export const inputLabelVariants = cva(
  [
    "text-sm",
    "font-medium",
    "leading-none",
    "peer-disabled:cursor-not-allowed",
    "peer-disabled:opacity-70"
  ],
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);

/**
 * Input helper text variants
 */
export const inputHelperTextVariants = cva(
  [
    "text-sm",
    "text-muted-foreground"
  ],
  {
    variants: {
      error: {
        true: "text-destructive",
        false: "text-muted-foreground"
      },
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      }
    },
    defaultVariants: {
      error: false,
      size: "md"
    }
  }
);

/**
 * Input wrapper variants
 */
export const inputWrapperVariants = cva(
  [
    "space-y-2"
  ],
  {
    variants: {
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: ""
      },
      error: {
        true: "",
        false: ""
      }
    },
    defaultVariants: {
      disabled: false,
      error: false
    }
  }
);

/**
 * Export variant types for TypeScript
 */
export type InputVariantsType = VariantProps<typeof inputVariants>;
export type InputLabelVariantsType = VariantProps<typeof inputLabelVariants>;
export type InputHelperTextVariantsType = VariantProps<typeof inputHelperTextVariants>;
export type InputWrapperVariantsType = VariantProps<typeof inputWrapperVariants>;