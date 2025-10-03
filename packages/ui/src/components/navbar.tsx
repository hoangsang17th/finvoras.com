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
  icon: ReactNode; // Required icon for menu item
  fragmentId?: string; // For homepage sections
  disabled?: boolean;
}

export interface NavbarCTAAction {
  id: string;
  component: ReactNode;
  compactComponent?: ReactNode; // Icon-only version for compact mode
  showOnMobile?: boolean;
  showOnDesktop?: boolean;
  showOnTablet?: boolean; // For medium screen sizes
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
  iconOnly?: boolean; // New prop for icon-only mode
}

const SmartNavMenu = forwardRef<HTMLElement, SmartNavMenuProps>(
  ({ menuItems, orientation = "horizontal", className, homePath = "/", iconOnly = false }, ref) => {
    const pathname = usePathname();
    const isHomepage = pathname === homePath;

    return (
      <NavigationMenu ref={ref} className={className} orientation={orientation}>
        <NavigationMenuList 
          className={cn(
            "gap-6 space-x-0",
            orientation === "vertical" && "flex-col items-start data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start",
            iconOnly && "gap-4"
          )}
        >
          {menuItems.map((item) => {
            if (item.disabled) return null;
            
            // Use fragment link if on homepage and item has fragmentId, otherwise use absolute link
            const href = isHomepage && item.fragmentId ? `#${item.fragmentId}` : item.href;

            return (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink asChild>
                  <Link 
                    href={href} 
                    className={cn(
                      "flex items-center transition-colors",
                      iconOnly ? "flex-col gap-1 text-xs p-2" : "flex-row gap-2 px-3 py-2"
                    )}
                    title={item.label}
                  >
                    <span className={cn("flex items-center", iconOnly && "text-base")}>
                      {item.icon}
                    </span>
                    {iconOnly ? (
                      <span className="text-xs leading-none text-center">{item.label}</span>
                    ) : (
                      <span className="text-sm font-medium">{item.label}</span>
                    )}
                  </Link>
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

// Bottom Navigation Component for Mobile
interface BottomNavigationProps {
  menuItems: NavMenuItem[];
  homePath?: string;
}

const BottomNavigation = ({ menuItems, homePath = "/" }: BottomNavigationProps) => {
  const pathname = usePathname();
  const isHomepage = pathname === homePath;

  return (
    <div 
      className="fixed w-full bg-background/95 backdrop-blur-sm border-t border-border md:hidden shadow-lg"
      style={{ 
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999
      }}
    >
      <div className="flex items-center justify-evenly px-4 py-3 min-h-[70px] w-full">
        {menuItems.map((item) => {
          if (item.disabled) return null;
          
          const href = isHomepage && item.fragmentId ? `#${item.fragmentId}` : item.href;
          const isActive = pathname === item.href || (isHomepage && item.fragmentId);

          return (
            <Link
              key={item.label}
              href={href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 flex-1 py-2 text-xs transition-colors min-w-0",
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="leading-none text-center truncate w-full">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

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
    const pathname = usePathname();
    const isHomepage = pathname === homePath;
    const desktopActions = ctaActions.filter(action => action.showOnDesktop !== false);
    const tabletActions = ctaActions.filter(action => action.showOnTablet !== false);
    const mobileActions = ctaActions.filter(action => action.showOnMobile !== false);

    return (
      <>
        {/* Top Navbar */}
        <nav 
          ref={ref}
          className={cn(
            "fixed z-[100] top-6 inset-x-4 h-14 xs:h-16 bg-background/50 backdrop-blur-sm border dark:border-brand-grey-700/70 max-w-screen-xl mx-auto rounded-full",
            className
          )}
        >
          <div className={cn(
            "h-full flex items-center justify-between mx-auto px-4",
            containerClassName
          )}>
            {/* Logo */}
            {logo && <div className="flex-shrink-0">{logo}</div>}

            {/* Desktop Menu (lg and up) */}
            {menuItems.length > 0 && (
              <div 
                className="items-center gap-4" 
                style={{ 
                  display: 'none' 
                }}
                data-desktop-menu="true"
              >
                <SmartNavMenu 
                  menuItems={menuItems}
                  homePath={homePath}
                />
              </div>
            )}

            {/* Tablet Menu (md to lg) - Icon only */}
            {menuItems.length > 0 && (
              <div 
                className="items-center gap-4" 
                style={{ 
                  display: 'none' 
                }}
                data-tablet-menu="true"
              >
                {menuItems.map((item) => {
                  if (item.disabled) return null;
                  
                  const href = isHomepage && item.fragmentId ? `#${item.fragmentId}` : item.href;
                  
                  return (
                    <Link 
                      key={item.label}
                      href={href} 
                      className="flex items-center justify-center p-2 rounded-md hover:bg-accent transition-colors"
                      title={item.label}
                    >
                      <span className="text-base">
                        {item.icon}
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}

            {/* CTA Actions */}
            <div className="flex items-center gap-3">
              {/* Desktop CTA Actions (lg and up) */}
              <div 
                className="items-center gap-3" 
                style={{ display: 'none' }}
                data-desktop-cta="true"
              >
                {desktopActions.map((action) => (
                  <div key={action.id}>
                    {action.component}
                  </div>
                ))}
              </div>

              {/* Tablet CTA Actions (md to lg) - Compact version */}
              <div 
                className="items-center gap-2" 
                style={{ display: 'none' }}
                data-tablet-cta="true"
              >
                {tabletActions.map((action) => (
                  <div key={action.id}>
                    {action.compactComponent || action.component}
                  </div>
                ))}
              </div>

              {/* Mobile CTA Actions (up to md) - Compact icons only */}
              <div className="flex md:hidden items-center gap-2">
                {mobileActions.map((action) => (
                  <div key={action.id}>
                    {action.compactComponent || action.component}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Bottom Navigation for Mobile */}
        {menuItems.length > 0 && (
          <BottomNavigation 
            menuItems={menuItems}
            homePath={homePath}
          />
        )}
      </>
    );
  }
);

Navbar.displayName = "Navbar";