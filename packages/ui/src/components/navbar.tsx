"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode, forwardRef } from "react";
import { Menu } from "lucide-react";
import { cn } from "../utils";
import { Button } from "./button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./sheet";

// Types
export interface NavMenuItem {
  label: string;
  href: string;
  fragmentId?: string; // For homepage sections
  disabled?: boolean;
}

export interface NavbarCTAAction {
  id: string;
  component: ReactNode;
  showOnMobile?: boolean;
  showOnDesktop?: boolean;
}

export interface NavbarProps {
  logo?: ReactNode;
  menuItems?: NavMenuItem[];
  ctaActions?: NavbarCTAAction[];
  className?: string;
  containerClassName?: string;
  homePath?: string; // Path to determine if we're on homepage for fragment links
}

// Smart Navigation Menu Component
interface SmartNavMenuProps {
  menuItems: NavMenuItem[];
  orientation?: "horizontal" | "vertical";
  className?: string;
  homePath?: string;
}

const SmartNavMenu = forwardRef<HTMLElement, SmartNavMenuProps>(
  ({ menuItems, orientation = "horizontal", className, homePath = "/" }, ref) => {
    const pathname = usePathname();
    const isHomepage = pathname === homePath;

    return (
      <NavigationMenu ref={ref} className={className} orientation={orientation}>
        <NavigationMenuList 
          className={cn(
            "gap-6 space-x-0",
            orientation === "vertical" && "flex-col items-start data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start"
          )}
        >
          {menuItems.map((item) => {
            if (item.disabled) return null;
            
            // Use fragment link if on homepage and item has fragmentId, otherwise use absolute link
            const href = isHomepage && item.fragmentId ? `#${item.fragmentId}` : item.href;

            return (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink asChild>
                  <Link href={href}>{item.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    );
  }
);

SmartNavMenu.displayName = "SmartNavMenu";

// Mobile Navigation Sheet Component
interface NavigationSheetProps {
  logo?: ReactNode;
  menuItems: NavMenuItem[];
  ctaActions: NavbarCTAAction[];
  homePath?: string;
}

const NavigationSheet = ({ logo, menuItems, ctaActions, homePath }: NavigationSheetProps) => {
  const mobileActions = ctaActions.filter(action => action.showOnMobile !== false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        {logo && <div className="mb-8">{logo}</div>}
        
        <SmartNavMenu 
          menuItems={menuItems}
          orientation="vertical" 
          className="mt-12" 
          homePath={homePath}
        />

        {mobileActions.length > 0 && (
          <div className="mt-8 space-y-4">
            {mobileActions.map((action) => (
              <div key={action.id}>
                {action.component}
              </div>
            ))}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

// Main Navbar Component
export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ 
    logo, 
    menuItems = [], 
    ctaActions = [], 
    className,
    containerClassName,
    homePath = "/"
  }, ref) => {
    const desktopActions = ctaActions.filter(action => action.showOnDesktop !== false);
    const hasMobileMenu = menuItems.length > 0 || ctaActions.some(action => action.showOnMobile !== false);

    return (
      <nav 
        ref={ref}
        className={cn(
          "fixed z-10 top-6 inset-x-4 h-14 xs:h-16 bg-background/50 backdrop-blur-sm border dark:border-brand-grey-700/70 max-w-screen-xl mx-auto rounded-full",
          className
        )}
      >
        <div className={cn(
          "h-full flex items-center justify-between mx-auto px-4",
          containerClassName
        )}>
          {/* Logo */}
          {logo && <div className="flex-shrink-0">{logo}</div>}

          {/* Desktop Menu */}
          {menuItems.length > 0 && (
            <SmartNavMenu 
              menuItems={menuItems}
              className="hidden md:block" 
              homePath={homePath}
            />
          )}

          {/* CTA Actions */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA Actions */}
            {desktopActions.map((action) => (
              <div key={action.id}>
                {action.component}
              </div>
            ))}

            {/* Mobile Menu */}
            {hasMobileMenu && (
              <div className="md:hidden">
                <NavigationSheet 
                  logo={logo}
                  menuItems={menuItems}
                  ctaActions={ctaActions}
                  homePath={homePath}
                />
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }
);

Navbar.displayName = "Navbar";