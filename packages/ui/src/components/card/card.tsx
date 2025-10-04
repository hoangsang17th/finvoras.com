import React from "react";
import { cn } from "../../../utils";
import type { 
  CardProps, 
  CardHeaderProps, 
  CardTitleProps, 
  CardContentProps, 
  CardFooterProps 
} from "./card.types";
import {
  cardVariants,
  cardHeaderVariants,
  cardTitleVariants,
  cardContentVariants,
  cardFooterVariants
} from "./card.styles";

/**
 * Card component with enhanced styling
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    as = "div",
    className,
    variant = "default",
    size = "md",
    interactive = false,
    bordered = false,
    shadow = "none",
    padding = "md",
    disabled = false,
    loading = false,
    children,
    onClick,
    ...rest
  }, ref) => {
    const Component = as as React.ElementType;
    
    const cardClasses = cn(
      cardVariants({
        variant,
        size,
        shadow,
        padding
      }),
      {
        "cursor-pointer": interactive && !disabled,
        "cursor-not-allowed opacity-50": disabled,
        "animate-pulse": loading,
        "border": bordered || variant === "default" || variant === "outlined"
      },
      className
    );

    const handleClick = (event: React.MouseEvent) => {
      if (disabled || loading) return;
      onClick?.(event);
    };

    return (
      <Component
        ref={ref}
        className={cardClasses}
        onClick={interactive ? handleClick : onClick}
        role={interactive ? "button" : undefined}
        tabIndex={interactive && !disabled ? 0 : undefined}
        aria-disabled={disabled}
        aria-busy={loading}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = "Card";

/**
 * Card Header component
 */
export const CardHeader = React.forwardRef<
  HTMLDivElement,
  CardHeaderProps
>(({ className, size = "md", children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardHeaderVariants({ size }), className)}
    {...props}
  >
    {children}
  </div>
));

CardHeader.displayName = "CardHeader";

/**
 * Card Title component
 */
export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  CardTitleProps
>(({ className, size = "md", level = 3, children, ...props }, ref) => {
  const HeadingComponent = `h${level}` as const;
  
  return React.createElement(
    HeadingComponent,
    {
      ref,
      className: cn(cardTitleVariants({ size }), className),
      ...props
    },
    children
  );
});

CardTitle.displayName = "CardTitle";

/**
 * Card Description component
 */
export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));

CardDescription.displayName = "CardDescription";

/**
 * Card Content component
 */
export const CardContent = React.forwardRef<
  HTMLDivElement,
  CardContentProps
>(({ className, padding = "md", children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardContentVariants({ padding }), className)}
    {...props}
  >
    {children}
  </div>
));

CardContent.displayName = "CardContent";

/**
 * Card Footer component
 */
export const CardFooter = React.forwardRef<
  HTMLDivElement,
  CardFooterProps
>(({ className, separated = false, align = "left", children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      cardFooterVariants({ separated, align }),
      "p-4 pt-0",
      className
    )}
    {...props}
  >
    {children}
  </div>
));

CardFooter.displayName = "CardFooter";