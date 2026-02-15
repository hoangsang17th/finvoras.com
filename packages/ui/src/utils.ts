import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ResponsiveValue } from "./types/common";

/**
 * Combines class names with intelligent merging of Tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Creates a variant function for component styling
 */
export function createVariants<T extends Record<string, any>>(config: T) {
	return function variants(
		props: Partial<keyof T extends string ? Record<keyof T, boolean> : never>,
	) {
		return Object.entries(props)
			.filter(([, value]) => value)
			.map(([key]) => config[key])
			.join(" ");
	};
}

/**
 * Resolves responsive values based on current breakpoint
 */
export function resolveResponsiveValue<T>(
	value: ResponsiveValue<T>,
	breakpoint: "mobile" | "tablet" | "desktop" = "desktop",
): T {
	if (
		typeof value === "object" &&
		value !== null &&
		!Array.isArray(value) &&
		"mobile" in value
	) {
		const responsiveObj = value as { mobile?: T; tablet?: T; desktop?: T };
		return (
			responsiveObj[breakpoint] ??
			responsiveObj.desktop ??
			responsiveObj.tablet ??
			responsiveObj.mobile ??
			(value as any)
		);
	}
	return value as T;
}

/**
 * Generates stable component IDs
 */
export function generateId(prefix?: string): string {
	const id = Math.random().toString(36).substring(2, 9);
	return prefix ? `${prefix}-${id}` : id;
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
	func: T,
	wait: number,
): (...args: Parameters<T>) => void {
	let timeout: NodeJS.Timeout;
	return (...args: Parameters<T>) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), wait);
	};
}

/**
 * Focus trap utility for modal components
 */
export function focusableElementsSelector(): string {
	return [
		'button:not([disabled]):not([aria-hidden="true"])',
		'input:not([disabled]):not([type="hidden"]):not([aria-hidden="true"])',
		'select:not([disabled]):not([aria-hidden="true"])',
		'textarea:not([disabled]):not([aria-hidden="true"])',
		'a[href]:not([aria-hidden="true"])',
		'[tabindex]:not([tabindex="-1"]):not([aria-hidden="true"])',
		'[contenteditable="true"]:not([aria-hidden="true"])',
	].join(", ");
}

/**
 * Safe focus function that checks if element is focusable
 */
export function safeFocus(element: HTMLElement | null): boolean {
	if (!element) return false;

	try {
		element.focus();
		return document.activeElement === element;
	} catch {
		return false;
	}
}

/**
 * Animation helpers
 */
export const animations = {
	fadeIn: "animate-in fade-in duration-200",
	fadeOut: "animate-out fade-out duration-200",
	slideIn: "animate-in slide-in-from-bottom-2 duration-300",
	slideOut: "animate-out slide-out-to-bottom-2 duration-300",
	scaleIn: "animate-in zoom-in-95 duration-200",
	scaleOut: "animate-out zoom-out-95 duration-200",
} as const;
