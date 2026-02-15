// Export utilities
export { cn } from "./utils";

// Export design system
export * from "./constants/design-system";
export * from "./types/common";

// Export standalone components
export { Code } from "./code";

// --- Components ---

// Core
export * from "./components/core/badge";
export * from "./components/core/button";
export * from "./components/core/card";
export * from "./components/core/modal";
export * from "./components/core/dropdown";
export { Logo } from "./components/core/logo";
export { Avatar, AvatarImage, AvatarFallback } from "./components/core/avatar";
export { Separator } from "./components/core/separator";
export * from "./components/core/text-link";
export {
	Tooltip,
	TooltipTrigger,
	TooltipContent,
	TooltipProvider,
} from "./components/core/tooltip";

// Forms
export * from "./components/forms/input";
export { Label } from "./components/forms/label";

// Layout
export { Navbar } from "./components/layout/navbar";
export type {
	NavbarProps,
	NavMenuItem,
	NavbarCTAAction,
} from "./components/layout/navbar";
export {
	navigationMenuTriggerStyle,
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuContent,
	NavigationMenuTrigger,
	NavigationMenuLink,
	NavigationMenuIndicator,
	NavigationMenuViewport,
} from "./components/layout/navigation-menu";
export {
	Sheet,
	SheetPortal,
	SheetOverlay,
	SheetTrigger,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetFooter,
	SheetTitle,
	SheetDescription,
} from "./components/layout/sheet";
export {
	Tabs,
	TabsList,
	TabsTrigger,
	TabsContent,
} from "./components/layout/tabs";

// Patterns
export { GridPattern as AnimatedGridPattern } from "./components/patterns/grid-pattern"; // Keep alias for compatibility
export { GridPattern } from "./components/patterns/grid-pattern";
export type { GridPatternProps as AnimatedGridPatternProps } from "./components/patterns/grid-pattern";
export type { GridPatternProps } from "./components/patterns/grid-pattern";
export { DotPattern } from "./components/patterns/dot-pattern";
export * from "./components/patterns/grid-background";

// Effects
export { default as Marquee } from "./components/effects/marquee";
export * from "./components/effects/interactive-background";
export * from "./components/effects/timeline";

// Shared
export * from "./components/shared/floating-utilities";
export * from "./components/shared/theme-toggle";
export * from "./components/shared/social-button";

// --- Legacy Exports (Compatibility) ---
export {
	Badge as LegacyBadge,
	badgeVariants as legacyBadgeVariants,
} from "./components/core/badge";
export type { BadgeProps as LegacyBadgeProps } from "./components/core/badge";

export {
	Card as LegacyCard,
	CardHeader as LegacyCardHeader,
	CardFooter as LegacyCardFooter,
	CardTitle as LegacyCardTitle,
	CardDescription as LegacyCardDescription,
	CardContent as LegacyCardContent,
} from "./components/core/card";

export { Input as LegacyInput } from "./components/forms/input";
