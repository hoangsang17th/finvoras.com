import { Button, NavbarCTAButton, Navbar, Logo, type NavMenuItem, type NavbarCTAAction } from "@repo/ui";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { FinvorasLogo } from "./finvoras-logo";
import { Home, DollarSign, BookOpen, User, LogIn, UserPlus, Edit, Edit2 } from "lucide-react";

// Logo component from the original navbar using shared component
const FinvorasLogoWithLink = () => (
  <Logo>
    <FinvorasLogo />
  </Logo>
);

// Define menu items for finvoras.com
const menuItems: NavMenuItem[] = [
  { label: "Home", href: "/", fragmentId: "features", icon: <Home size={16} /> },
  { label: "Pricing", href: "/pricing", fragmentId: "pricing", icon: <DollarSign size={16} /> },
  { label: "Blog", href: "/blog", icon: <BookOpen size={16} /> },
  { label: "About", href: "/about", icon: <User size={16} /> },
];

// Define CTA actions for finvoras.com
const ctaActions: NavbarCTAAction[] = [
  {
    id: "theme-toggle",
    component: <ThemeToggle />,
    compactComponent: <ThemeToggle />, // Same for all sizes
    showOnMobile: true,
    showOnDesktop: true,
    showOnTablet: true,
  },
  {
    id: "get-started",
    component: (
      <NavbarCTAButton variant="primary" href="/login">
        Get Started
      </NavbarCTAButton>
    ),
    compactComponent: (
      <NavbarCTAButton variant="primary" size="icon" href="/login">
        <LogIn size={16} />
      </NavbarCTAButton>
    ),
    showOnMobile: true,
    showOnDesktop: true,
    showOnTablet: true,
  },
];

const FinvorasNavbar = () => {
  return (
    <Navbar
      logo={<FinvorasLogoWithLink />}
      menuItems={menuItems}
      ctaActions={ctaActions}
      homePath="/"
    />
  );
};

export default FinvorasNavbar;