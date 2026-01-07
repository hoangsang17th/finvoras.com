import type { BaseComponentProps } from "../../../types/common";
import type { BadgeVariantsType } from "./badge.styles";

/**
 * Base badge props
 */
export interface BadgeProps extends BaseComponentProps {
  /**
   * Child elements
   */
  children?: React.ReactNode;

  /**
   * Badge variant for styling
   */
  variant?: BadgeVariantsType["variant"];

  /**
   * Size variant
   */
  size?: BadgeVariantsType["size"];

  /**
   * Whether the badge is interactive (clickable)
   */
  interactive?: boolean;

  /**
   * Whether the badge is disabled
   */
  disabled?: boolean;

  /**
   * Click handler for interactive badges
   */
  onClick?: (event: React.MouseEvent) => void;

  /**
   * Icon to display before the text
   */
  icon?: React.ReactNode;

  /**
   * Icon to display after the text
   */
  iconAfter?: React.ReactNode;

  /**
   * Whether to show a dot indicator
   */
  dot?: boolean;

  /**
   * The component to render as
   */
  as?: React.ElementType;
}