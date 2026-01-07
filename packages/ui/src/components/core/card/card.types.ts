import type { PolymorphicComponentProps, BaseComponentProps } from "../../../types/common";
import type { CardVariantsType } from "./card.styles";

/**
 * Base card props without polymorphic support
 */
export interface BaseCardProps extends BaseComponentProps {
  /**
   * Child elements
   */
  children?: React.ReactNode;

  /**
   * Card variant for styling
   */
  variant?: CardVariantsType["variant"];

  /**
   * Size variant
   */
  size?: CardVariantsType["size"];

  /**
   * Whether the card is interactive (clickable/hoverable)
   */
  interactive?: boolean;

  /**
   * Whether the card should have a border
   */
  bordered?: boolean;

  /**
   * Whether the card should have a shadow
   */
  shadow?: CardVariantsType["shadow"];

  /**
   * Card padding variant
   */
  padding?: CardVariantsType["padding"];

  /**
   * Whether the card is in a disabled state
   */
  disabled?: boolean;

  /**
   * Whether the card is in a loading state
   */
  loading?: boolean;

  /**
   * Click handler for interactive cards
   */
  onClick?: (event: React.MouseEvent) => void;
}

/**
 * Card props with polymorphic component support - simplified to just use BaseCardProps for now
 */
export type CardProps = BaseCardProps & {
  /**
   * The component to render as
   */
  as?: React.ElementType;
};

/**
 * Card header props
 */
export interface CardHeaderProps extends BaseComponentProps {
  /**
   * Child elements
   */
  children?: React.ReactNode;

  /**
   * Size variant for the header
   */
  size?: "sm" | "md" | "lg";
}

/**
 * Card title props
 */
export interface CardTitleProps extends BaseComponentProps {
  /**
   * Child elements
   */
  children?: React.ReactNode;

  /**
   * Size variant for the title
   */
  size?: "sm" | "md" | "lg" | "xl";

  /**
   * Heading level for semantic HTML
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * Card content props
 */
export interface CardContentProps extends BaseComponentProps {
  /**
   * Child elements
   */
  children?: React.ReactNode;

  /**
   * Padding variant for content
   */
  padding?: "none" | "sm" | "md" | "lg";
}

/**
 * Card footer props
 */
export interface CardFooterProps extends BaseComponentProps {
  /**
   * Child elements
   */
  children?: React.ReactNode;

  /**
   * Whether the footer should be separated with a border
   */
  separated?: boolean;

  /**
   * Footer alignment
   */
  align?: "left" | "center" | "right" | "between";
}