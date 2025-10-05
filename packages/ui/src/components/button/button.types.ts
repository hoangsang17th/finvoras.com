import { ReactNode } from "react";

/**
 * Button variant types
 */
export type ButtonVariant = "primary" | "secondary" | "default" | "link";

/**
 * Button size types  
 */
export type ButtonSize = "sm" | "md" | "lg" | "icon";

/**
 * Button component props
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button content - can be text, icon, or both
   */
  children?: ReactNode;

  /**
   * Button visual variant
   * - primary: Nút hành động chính với nền màu cam Finvoras #FFA500, chữ trắng, border tròn
   * - outline: Nền trong suốt, viền xám nhạt #E2E8F0, chữ tối, hover có nền xám nhạt
   * - default: Nền xám nhạt #f5f5f5, chữ tối #333, hover có viền và hiệu ứng nổi bật
   * - link: Không nền, không viền, chữ xanh Finvoras #1677FF có gạch dưới, hover đổi màu đậm hơn
   */
  variant?: ButtonVariant;

  /**
   * Button size variant
   */
  size?: ButtonSize;

  /**
   * Whether the button is disabled
   */
  disabled?: boolean;

  /**
   * Whether to render as child (for composition with other components)
   */
  asChild?: boolean;

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
   * Whether button should take full width of container
   */
  fullWidth?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Title attribute for the button (tooltip text)
   */
  title?: string;

  /**
   * URL to navigate to (will render as Link if provided)
   */
  href?: string;

  /**
   * Context where the button is used - affects layout behavior
   * - default: Standard button with potential text truncation
   * - navbar: Optimized for navbar with no text truncation and flex layout
   */
  context?: "default" | "navbar";
}