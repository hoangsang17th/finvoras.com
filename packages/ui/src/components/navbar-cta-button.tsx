import React, { forwardRef } from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../utils";
import { buttonVariants } from "./button/button.styles";
import { ButtonProps } from "./button/button.types";

/**
 * Navbar CTA Button - Tối ưu hóa cho việc hiển thị trong navbar
 * Khác với Button thông thường ở việc:
 * 1. Không sử dụng truncate để tránh ẩn text
 * 2. Sử dụng flex thay vì inline-flex
 * 3. Tối ưu max-width cho navbar context
 */
export const NavbarCTAButton = forwardRef<HTMLButtonElement, ButtonProps>(
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
        fullWidth = false,
        asChild = false,
        title,
        href,
        ...props
    }, ref) => {

        // Determine button content - NO TRUNCATE for navbar CTA
        const buttonContent = () => {
            if (!icon) {
                return (
                    <span className="whitespace-nowrap">
                        {children}
                    </span>
                );
            }

            if (!children) {
                // Icon only
                return (
                    <span className="flex-shrink-0">
                        {icon}
                    </span>
                );
            }

            // Icon with text - không truncate
            const textElement = (
                <span className="whitespace-nowrap min-w-0">
                    {children}
                </span>
            );

            const iconElement = (
                <span className="flex-shrink-0">
                    {icon}
                </span>
            );

            if (iconPosition === "right") {
                return (
                    <>
                        {textElement}
                        {iconElement}
                    </>
                );
            }

            return (
                <>
                    {iconElement}
                    {textElement}
                </>
            );
        };

        // Navbar-optimized button variants
        const navbarButtonVariants = cn(
            buttonVariants({
                variant,
                size,
                fullWidth,
                disabled
            }),
            // Override cho navbar context
            "flex items-center justify-center", // flex thay vì inline-flex
            "min-w-fit", // đảm bảo button có thể mở rộng theo content
            className
        );

        // If href is provided, render as Link with button styling
        if (href && !asChild) {
            return (
                <Link
                    href={href}
                    className={cn(
                        navbarButtonVariants,
                        "no-underline", // Remove default link underline
                        disabled && "pointer-events-none", // Handle disabled state
                    )}
                    title={title}
                    role="button" // Improve accessibility
                    tabIndex={disabled ? -1 : 0}
                    aria-disabled={disabled}
                >
                    {buttonContent()}
                </Link>
            );
        }

        const Comp = asChild ? Slot : "button";

        return (
            <Comp
                ref={ref}
                type={type}
                disabled={disabled}
                onClick={onClick}
                title={title}
                className={navbarButtonVariants}
                style={{
                    outline: 'none',
                    border: 'none',
                    WebkitTapHighlightColor: 'transparent',
                    ...props.style
                }}
                {...props}
            >
                {buttonContent()}
            </Comp>
        );
    }
);

NavbarCTAButton.displayName = "NavbarCTAButton";