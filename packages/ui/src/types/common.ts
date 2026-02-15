import React, { ReactNode, ComponentPropsWithoutRef, ElementRef } from "react";

/**
 * Base component props that all UI components should extend
 */
export interface BaseComponentProps {
	/**
	 * Additional CSS classes to apply to the component
	 */
	className?: string;

	/**
	 * Custom styles to apply to the component
	 */
	style?: React.CSSProperties;

	/**
	 * Test ID for automated testing
	 */
	"data-testid"?: string;
}

/**
 * Props for components that can have children
 */
export interface ComponentWithChildren extends BaseComponentProps {
	children?: ReactNode;
}

/**
 * Common size variants used across components
 */
export type SizeVariant = "sm" | "md" | "lg" | "xl" | "icon" | "default";

/**
 * Common color variants used across components
 */
export type ColorVariant =
	| "default"
	| "primary"
	| "secondary"
	| "destructive"
	| "ghost"
	| "outline"
	| "brand"
	| "brand-outline";

/**
 * Component state variants
 */
export type StateVariant =
	| "default"
	| "loading"
	| "disabled"
	| "error"
	| "success";

/**
 * Polymorphic component props helper
 */
export type PolymorphicComponentProps<T extends React.ElementType> = {
	as?: T;
} & ComponentPropsWithoutRef<T>;

/**
 * Forward ref component type that supports polymorphic components
 */
export type ForwardRefComponent<
	P extends object,
	DefaultElement extends React.ElementType,
> = React.ForwardRefExoticComponent<P & React.RefAttributes<DefaultElement>>;

// TODO: Fix polymorphic forwardRef implementation
// /**
//  * Forward ref wrapper that supports polymorphic components
//  */
// export function forwardRefWithAs<P extends object, DefaultElement extends React.ElementType>(
//   render: React.ForwardRefRenderFunction<DefaultElement, P & { as?: React.ElementType }>
// ) {
//   return React.forwardRef(render) as ForwardRefComponent<P, DefaultElement>;
// }

/**
 * Responsive value type - allows values to be responsive across breakpoints
 */
export type ResponsiveValue<T> =
	| T
	| {
			mobile?: T;
			tablet?: T;
			desktop?: T;
	  };

/**
 * Icon prop type - standardizes icon usage across components
 */
export interface IconProps {
	icon?: ReactNode;
	iconPosition?: "left" | "right";
	iconOnly?: boolean;
}

/**
 * Loading state props
 */
export interface LoadingProps {
	isLoading?: boolean;
	loadingText?: string;
	loadingIcon?: ReactNode;
}

/**
 * Accessibility props
 */
export interface AccessibilityProps {
	"aria-label"?: string;
	"aria-labelledby"?: string;
	"aria-describedby"?: string;
	"aria-expanded"?: boolean;
	"aria-disabled"?: boolean;
	role?: string;
}

/**
 * Event handler types
 */
export type ClickHandler = (event: React.MouseEvent) => void;
export type ChangeHandler<T = string> = (value: T) => void;
export type FocusHandler = (event: React.FocusEvent) => void;

/**
 * Component variant configuration
 */
export interface VariantConfig<T extends string> {
	variants: Record<T, string>;
	defaultVariant: T;
}

/**
 * Theme-aware props
 */
export interface ThemeProps {
	theme?: "light" | "dark" | "system";
}
