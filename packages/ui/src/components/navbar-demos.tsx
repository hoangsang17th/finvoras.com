import { Navbar, Button, type NavMenuItem, type NavbarCTAAction } from "@repo/ui";
import Link from "next/link";
import { Globe, Moon, Sun, User, Settings } from "lucide-react";

// Demo Logo Components
const SimpleLogo = () => (
  <Link href="/" className="font-bold text-xl">
    Simple Brand
  </Link>
);

const IconLogo = () => (
  <Link href="/" className="flex items-center space-x-2">
    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-sm">B</span>
    </div>
    <span className="font-bold">Brand</span>
  </Link>
);

const SVGLogo = () => (
  <Link href="/" className="flex items-center space-x-2">
    <svg width="32" height="32" viewBox="0 0 32 32" className="text-blue-600">
      <circle cx="16" cy="16" r="14" fill="currentColor" />
      <circle cx="16" cy="16" r="8" fill="white" />
    </svg>
    <span className="font-bold">SVG Brand</span>
  </Link>
);

// Demo Theme Toggle
const DemoThemeToggle = () => (
  <Button variant="outline" size="icon">
    <Sun className="h-4 w-4" />
  </Button>
);

// Demo Language Switcher
const DemoLanguageSwitcher = () => (
  <Button variant="outline" size="sm">
    <Globe className="h-4 w-4 mr-2" />
    EN
  </Button>
);

// Demo User Menu
const DemoUserMenu = () => (
  <Button variant="outline" size="icon">
    <User className="h-4 w-4" />
  </Button>
);

// Demo Settings
const DemoSettings = () => (
  <Button variant="outline" size="icon">
    <Settings className="h-4 w-4" />
  </Button>
);

// Demo 1: Basic Navbar
export const BasicNavbar = () => {
  const menuItems: NavMenuItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <Navbar
      logo={<SimpleLogo />}
      menuItems={menuItems}
    />
  );
};

// Demo 2: Navbar with CTAs
export const NavbarWithCTAs = () => {
  const menuItems: NavMenuItem[] = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
  ];

  const ctaActions: NavbarCTAAction[] = [
    {
      id: "theme-toggle",
      component: <DemoThemeToggle />,
    },
    {
      id: "login",
      component: (
        <Button variant="outline" asChild>
          <Link href="/login">Login</Link>
        </Button>
      ),
    },
    {
      id: "signup",
      component: (
        <Button asChild>
          <Link href="/signup">Sign Up</Link>
        </Button>
      ),
    },
  ];

  return (
    <Navbar
      logo={<IconLogo />}
      menuItems={menuItems}
      ctaActions={ctaActions}
    />
  );
};

// Demo 3: Fragment Navigation (SPA)
export const SPANavbar = () => {
  const menuItems: NavMenuItem[] = [
    { label: "Hero", href: "/", fragmentId: "hero" },
    { label: "Features", href: "/", fragmentId: "features" },
    { label: "Testimonials", href: "/", fragmentId: "testimonials" },
    { label: "Pricing", href: "/", fragmentId: "pricing" },
    { label: "FAQ", href: "/", fragmentId: "faq" },
    { label: "Blog", href: "/blog" }, // Regular navigation
  ];

  const ctaActions: NavbarCTAAction[] = [
    {
      id: "cta",
      component: (
        <Button asChild>
          <Link href="/get-started">Get Started</Link>
        </Button>
      ),
    },
  ];

  return (
    <Navbar
      logo={<SVGLogo />}
      menuItems={menuItems}
      ctaActions={ctaActions}
      homePath="/" // Enable fragment navigation on homepage
    />
  );
};

// Demo 4: Advanced Navbar with Multiple CTAs
export const AdvancedNavbar = () => {
  const menuItems: NavMenuItem[] = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Projects", href: "/projects" },
    { label: "Team", href: "/team" },
    { label: "Analytics", href: "/analytics" },
  ];

  const ctaActions: NavbarCTAAction[] = [
    {
      id: "language",
      component: <DemoLanguageSwitcher />,
      showOnMobile: false, // Hide on mobile
      showOnDesktop: true,
    },
    {
      id: "theme",
      component: <DemoThemeToggle />,
      showOnMobile: true,
      showOnDesktop: true,
    },
    {
      id: "settings",
      component: <DemoSettings />,
      showOnMobile: false, // Hide on mobile
      showOnDesktop: true,
    },
    {
      id: "user",
      component: <DemoUserMenu />,
      showOnMobile: true,
      showOnDesktop: true,
    },
  ];

  return (
    <Navbar
      logo={<IconLogo />}
      menuItems={menuItems}
      ctaActions={ctaActions}
    />
  );
};

// Demo 5: Minimal Navbar (Logo + CTAs only)
export const MinimalNavbar = () => {
  const ctaActions: NavbarCTAAction[] = [
    {
      id: "theme",
      component: <DemoThemeToggle />,
    },
    {
      id: "user",
      component: <DemoUserMenu />,
    },
  ];

  return (
    <Navbar
      logo={<SimpleLogo />}
      ctaActions={ctaActions}
      // No menuItems - just logo and CTAs
    />
  );
};

// Demo 6: Mobile-Optimized Navbar
export const MobileOptimizedNavbar = () => {
  const menuItems: NavMenuItem[] = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const ctaActions: NavbarCTAAction[] = [
    {
      id: "search",
      component: (
        <Button variant="outline" size="icon">
          🔍
        </Button>
      ),
      showOnMobile: true,
      showOnDesktop: true,
    },
    {
      id: "cart",
      component: (
        <Button variant="outline" size="icon">
          🛒
        </Button>
      ),
      showOnMobile: true,
      showOnDesktop: true,
    },
    {
      id: "account",
      component: (
        <Button variant="outline" className="hidden sm:inline-flex" asChild>
          <Link href="/account">Account</Link>
        </Button>
      ),
      showOnMobile: false, // Hide on mobile
      showOnDesktop: true,
    },
  ];

  return (
    <Navbar
      logo={<IconLogo />}
      menuItems={menuItems}
      ctaActions={ctaActions}
    />
  );
};