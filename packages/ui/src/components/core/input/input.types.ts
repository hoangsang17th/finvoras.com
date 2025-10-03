import type { BaseComponentProps } from "../../../types/common";
import type { InputVariantsType } from "./input.styles";

/**
 * Base input props
 */
export interface BaseInputProps extends BaseComponentProps {
  /**
   * Input variant for styling
   */
  variant?: InputVariantsType["variant"];

  /**
   * Size variant
   */
  size?: InputVariantsType["size"];

  /**
   * Whether the input is disabled
   */
  disabled?: boolean;

  /**
   * Whether the input is invalid
   */
  invalid?: boolean;

  /**
   * Whether the input is required
   */
  required?: boolean;

  /**
   * Whether the input is readonly
   */
  readOnly?: boolean;

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Input value
   */
  value?: string;

  /**
   * Default value for uncontrolled inputs
   */
  defaultValue?: string;

  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Focus handler
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * Input type
   */
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";

  /**
   * Input name attribute
   */
  name?: string;

  /**
   * Input id attribute
   */
  id?: string;

  /**
   * ARIA describedby attribute
   */
  "aria-describedby"?: string;

  /**
   * ARIA label
   */
  "aria-label"?: string;

  /**
   * ARIA labelledby attribute
   */
  "aria-labelledby"?: string;
}

/**
 * Input props
 */
export type InputProps = BaseInputProps;

/**
 * Input label props
 */
export interface InputLabelProps extends BaseComponentProps {
  /**
   * Child elements
   */
  children?: React.ReactNode;

  /**
   * Whether the field is required
   */
  required?: boolean;

  /**
   * Size variant
   */
  size?: "sm" | "md" | "lg";

  /**
   * For attribute linking to input
   */
  htmlFor?: string;
}

/**
 * Input helper text props
 */
export interface InputHelperTextProps extends BaseComponentProps {
  /**
   * Child elements
   */
  children?: React.ReactNode;

  /**
   * Whether this is error text
   */
  error?: boolean;

  /**
   * Size variant
   */
  size?: "sm" | "md" | "lg";
}

/**
 * Input wrapper props for compound component
 */
export interface InputWrapperProps extends BaseComponentProps {
  /**
   * Child elements
   */
  children?: React.ReactNode;

  /**
   * Whether the wrapper is disabled
   */
  disabled?: boolean;

  /**
   * Whether the wrapper indicates error state
   */
  error?: boolean;
}