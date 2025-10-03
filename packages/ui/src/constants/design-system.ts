/**
 * Design System Constants
 * Centralized configuration for consistent design across components
 */

/**
 * Spacing scale based on Tailwind's spacing system
 */
export const SPACING = {
  xs: "0.25rem", // 1
  sm: "0.5rem",  // 2
  md: "0.75rem", // 3
  lg: "1rem",    // 4
  xl: "1.25rem", // 5
  "2xl": "1.5rem", // 6
  "3xl": "2rem",   // 8
  "4xl": "2.5rem", // 10
  "5xl": "3rem",   // 12
} as const;

/**
 * Typography scale
 */
export const TYPOGRAPHY = {
  fontSize: {
    xs: "0.75rem",   // 12px
    sm: "0.875rem",  // 14px
    base: "1rem",    // 16px
    lg: "1.125rem",  // 18px
    xl: "1.25rem",   // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
  },
  lineHeight: {
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.75",
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
} as const;

/**
 * Border radius scale
 */
export const BORDER_RADIUS = {
  none: "0",
  sm: "0.125rem",   // 2px
  md: "0.375rem",   // 6px
  lg: "0.5rem",     // 8px
  xl: "0.75rem",    // 12px
  "2xl": "1rem",    // 16px
  "3xl": "1.5rem",  // 24px
  full: "9999px",
} as const;

/**
 * Shadow scale
 */
export const SHADOWS = {
  none: "none",
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
} as const;

/**
 * Z-index scale
 */
export const Z_INDEX = {
  auto: "auto",
  base: "0",
  dropdown: "1000",
  sticky: "1020",
  overlay: "1030",
  modal: "1040",
  popover: "1050",
  tooltip: "1060",
  toast: "1070",
  navbar: "1080",
  max: "2147483647",
} as const;

/**
 * Breakpoints for responsive design
 */
export const BREAKPOINTS = {
  mobile: "0px",
  tablet: "768px",
  desktop: "1024px",
  wide: "1280px",
} as const;

/**
 * Animation duration scale
 */
export const ANIMATION = {
  duration: {
    fast: "150ms",
    normal: "250ms",
    slow: "500ms",
  },
  easing: {
    linear: "linear",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;

/**
 * Component size presets
 */
export const COMPONENT_SIZES = {
  button: {
    sm: {
      height: "2rem",      // 32px
      padding: "0 0.75rem", // 12px
      fontSize: TYPOGRAPHY.fontSize.sm,
    },
    md: {
      height: "2.5rem",    // 40px
      padding: "0 1rem",   // 16px
      fontSize: TYPOGRAPHY.fontSize.base,
    },
    lg: {
      height: "3rem",      // 48px
      padding: "0 1.5rem", // 24px
      fontSize: TYPOGRAPHY.fontSize.lg,
    },
  },
  input: {
    sm: {
      height: "2rem",
      padding: "0 0.75rem",
      fontSize: TYPOGRAPHY.fontSize.sm,
    },
    md: {
      height: "2.5rem",
      padding: "0 1rem",
      fontSize: TYPOGRAPHY.fontSize.base,
    },
    lg: {
      height: "3rem",
      padding: "0 1.25rem",
      fontSize: TYPOGRAPHY.fontSize.lg,
    },
  },
} as const;

/**
 * Color semantic mapping
 */
export const COLOR_SEMANTICS = {
  primary: "brand-primary",
  secondary: "brand-secondary",
  success: "green",
  warning: "yellow",
  error: "red",
  info: "blue",
} as const;

/**
 * Accessibility constants
 */
export const A11Y = {
  focusRing: "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary",
  screenReaderOnly: "sr-only",
  skipLink: "skip-link",
  minTouchTarget: "44px", // Minimum touch target size
} as const;

/**
 * Component defaults
 */
export const DEFAULTS = {
  button: {
    variant: "default" as const,
    size: "md" as const,
  },
  input: {
    variant: "default" as const,
    size: "md" as const,
  },
  navbar: {
    height: "4rem", // 64px
    mobileHeight: "3.5rem", // 56px
  },
} as const;