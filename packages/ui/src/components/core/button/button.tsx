import React, { forwardRef, useMemo } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn, generateId } from "../../../utils";
import { buttonVariants } from "./button.styles";
import { ButtonProps } from "./button.types";

/**
 * Default loading spinner component
 */
const LoadingSpinner = ({ className }: { className?: string }) => (
  <svg
    className={cn("animate-spin h-4 w-4", className)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="m12 2a10 10 0 0 1 10 10h-4a6 6 0 0 0-6-6v-4z"
    />
  </svg>
);

/**
 * Enhanced Button component with improved accessibility and performance
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    children,
    className,
    variant = "default",
    size = "md", 
    disabled = false,
    type = "button",
    onClick,
    icon,
    iconPosition = "left",
    iconOnly = false,
    fullWidth = false,
    rounded = false,
    asChild = false,
    isLoading = false,
    loadingText,
    loadingSpinner,
    "data-testid": testId,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    ...props
  }, ref) => {
    // Generate stable ID for accessibility
    const buttonId = useMemo(() => generateId("button"), []);
    
    // Determine if button should be disabled (disabled prop or loading state)
    const isDisabled = disabled || isLoading;
    
    // Choose appropriate loading spinner
    const spinner = loadingSpinner || <LoadingSpinner />;
    
    // Determine button content based on loading state
    const buttonContent = useMemo(() => {
      if (isLoading) {
        return (
          <>
            {spinner}
            {loadingText && !iconOnly && (
              <span className="ml-2">{loadingText}</span>
            )}
          </>
        );
      }
      
      if (iconOnly) {
        return icon || children;
      }
      
      if (icon && iconPosition === "left") {
        return (
          <>
            {icon}
            {children && <span>{children}</span>}
          </>
        );
      }
      
      if (icon && iconPosition === "right") {
        return (
          <>
            {children && <span>{children}</span>}
            {icon}
          </>
        );
      }
      
      return children;
    }, [isLoading, spinner, loadingText, iconOnly, icon, iconPosition, children]);
    
    // Enhanced accessibility props
    const accessibilityProps = {
      id: buttonId,
      "aria-label": ariaLabel || (iconOnly ? String(children) : undefined),
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      "aria-disabled": isDisabled,
      "aria-busy": isLoading,
      "data-testid": testId || `button-${variant}-${size}`,
      role: "button",
      tabIndex: isDisabled ? -1 : 0,
    };
    
    const buttonProps = {
      ref,
      type: !asChild ? type : undefined,
      disabled: !asChild ? isDisabled : undefined,
      onClick,
      className: cn(
        buttonVariants({
          variant,
          size,
          fullWidth,
          iconOnly,
          rounded,
          loading: isLoading,
        }),
        className
      ),
      ...accessibilityProps,
      ...props,
    };
    
    if (asChild) {
      return (
        <Slot {...buttonProps}>
          {buttonContent}
        </Slot>
      );
    }
    
    return (
      <button {...buttonProps}>
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = "Button";

// Export variants for external use
export { buttonVariants } from "./button.styles";
export type { ButtonProps } from "./button.types";