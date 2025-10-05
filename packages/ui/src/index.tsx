// Export utilities
export { cn } from "./utils";

// Export design system
export * from "./constants/design-system";
export * from "./types/common";

// Export standalone components
export { Code } from "./code";

// Export all components from components directory
export { AnimatedGridPattern } from "./components/animated-grid-pattern";
export type { AnimatedGridPatternProps } from "./components/animated-grid-pattern";

export { Avatar, AvatarImage, AvatarFallback } from "./components/avatar";

// Export enhanced core components (preferred)
export * from "./components/badge";
export * from "./components/button";
export { Logo } from "./components/logo";
export * from "./components/card";
export * from "./components/input";

// Export legacy components for backward compatibility
export { Badge as LegacyBadge, badgeVariants as legacyBadgeVariants } from "./components/badge";
export type { BadgeProps as LegacyBadgeProps } from "./components/badge";

export {
    Card as LegacyCard,
    CardHeader as LegacyCardHeader,
    CardFooter as LegacyCardFooter,
    CardTitle as LegacyCardTitle,
    CardDescription as LegacyCardDescription,
    CardContent as LegacyCardContent,
} from "./components/card";

export { Input as LegacyInput } from "./components/input";

export { Label } from "./components/label";

export { default as Marquee } from "./components/marquee";

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
} from "./components/navigation-menu";

export { Navbar } from "./components/navbar";
export type { NavbarProps, NavMenuItem, NavbarCTAAction } from "./components/navbar";

export { ThemeToggle } from "./components/theme-toggle";

export { Separator } from "./components/separator";

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
} from "./components/sheet";

export { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/tabs";

export {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
} from "./components/tooltip";