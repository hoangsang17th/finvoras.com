import { ReactNode } from "react";
import { BaseComponentProps, SizeVariant, ColorVariant, LoadingProps, AccessibilityProps } from "../../../types/common";

/**
 * Button component props
 */
export interface ButtonProps extends
  BaseComponentProps,
  LoadingProps,
  AccessibilityProps {
  /**
   * Button content
   */
  children?: ReactNode;

  /**
   * Button visual variant
   */
  variant?: ColorVariant;

  /**
   * Button size variant
   */
  size?: SizeVariant;

  /**
   * Whether the button is disabled
   */
  disabled?: boolean;

  /**
   * Whether to render as child (for composition with other components)
   */
  asChild?: boolean;

  /**
   * Title attribute for the button (tooltip text)
   */
  title?: string;

  /**
   * Button type for form submission
   */
  type?: "button" | "submit" | "reset";

  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Icon to display in the button
   */
  icon?: ReactNode;

  /**
   * Position of the icon relative to text
   */
  iconPosition?: "left" | "right";

  /**
   * Whether this is an icon-only button
   */
  iconOnly?: boolean;

  /**
   * Whether the button should take full width
   */
  fullWidth?: boolean;

  /**
   * Whether the button should have a rounded appearance
   */
  rounded?: boolean;

  /**
   * Custom loading spinner
   */
  loadingSpinner?: ReactNode;
}

/**
 * Button variant configuration
 */
export interface ButtonVariants {
  variant: Record<ColorVariant, string>;
  size: Record<SizeVariant, string>;
  defaultVariants: {
    variant: ColorVariant;
    size: SizeVariant;
  };
}