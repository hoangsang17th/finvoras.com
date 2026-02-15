import React from "react";
import { cn } from "../../../utils";
import type {
	InputProps,
	InputLabelProps,
	InputHelperTextProps,
	InputWrapperProps,
} from "./input.types";
import {
	inputVariants,
	inputLabelVariants,
	inputHelperTextVariants,
	inputWrapperVariants,
} from "./input.styles";

/**
 * Input component with enhanced styling and validation states
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			variant = "default",
			size = "md",
			invalid = false,
			disabled = false,
			type = "text",
			...props
		},
		ref,
	) => {
		const inputState = invalid ? "invalid" : "default";

		return (
			<input
				ref={ref}
				type={type}
				disabled={disabled}
				aria-invalid={invalid}
				className={cn(
					inputVariants({
						variant,
						size,
						state: inputState,
					}),
					className,
				)}
				{...props}
			/>
		);
	},
);

Input.displayName = "Input";

/**
 * Input Label component
 */
export const InputLabel = React.forwardRef<HTMLLabelElement, InputLabelProps>(
	({ className, size = "md", required = false, children, ...props }, ref) => (
		<label
			ref={ref}
			className={cn(inputLabelVariants({ size }), className)}
			{...props}
		>
			{children}
			{required && (
				<span className="text-destructive ml-1" aria-label="required">
					*
				</span>
			)}
		</label>
	),
);

InputLabel.displayName = "InputLabel";

/**
 * Input Helper Text component
 */
export const InputHelperText = React.forwardRef<
	HTMLParagraphElement,
	InputHelperTextProps
>(({ className, error = false, size = "md", children, ...props }, ref) => (
	<p
		ref={ref}
		className={cn(inputHelperTextVariants({ error, size }), className)}
		{...props}
	>
		{children}
	</p>
));

InputHelperText.displayName = "InputHelperText";

/**
 * Input Wrapper component for compound layouts
 */
export const InputWrapper = React.forwardRef<HTMLDivElement, InputWrapperProps>(
	({ className, disabled = false, error = false, children, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(inputWrapperVariants({ disabled, error }), className)}
			{...props}
		>
			{children}
		</div>
	),
);

InputWrapper.displayName = "InputWrapper";
