"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@repo/ui";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";

interface NavItem {
  label: string;
  href: string;
  fragmentId?: string; // For homepage sections
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", fragmentId: "features" },
  { label: "Pricing", href: "/pricing", fragmentId: "pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const SmartNavMenu = (props: NavigationMenuProps) => {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        {navItems.map((item) => {
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
};