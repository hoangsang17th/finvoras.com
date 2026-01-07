"use client";

import { Button, Navbar, Logo, type NavMenuItem, type NavbarCTAAction } from "@repo/ui";
import { FinvorasLogo } from "./finvoras-logo";
import { useI18n } from "@repo/i18n";
import { Home, DollarSign, BookOpen, User, LogIn, UserPlus, Edit, Edit2 } from "lucide-react";
import type { Translations } from "@/lib/types/translations";

// Logo component from the original navbar using shared component
const FinvorasLogoWithLink = () => (
  <Logo>
    <FinvorasLogo />
  </Logo>
);

const FinvorasNavbar = () => {
  const { t } = useI18n<Translations>();

  // Defensive check to ensure translations are available
  if (!t || !t.nav) {
    return (
      <Navbar
        logo={<FinvorasLogoWithLink />}
        menuItems={[]}
        ctaActions={[]}
        homePath="/"
      />
    );
  }

  // Define menu items for finvoras.com with translations
  const menuItems: NavMenuItem[] = [
    { label: t.nav.home, href: "/", icon: <Home size={16} /> },
    { label: t.nav.pricing, href: "/pricing", icon: <DollarSign size={16} /> },
    { label: t.nav.blog, href: "/blog", icon: <BookOpen size={16} /> },
  ];

  // Define CTA actions for finvoras.com with translations
  const ctaActions: NavbarCTAAction[] = [


    {
      id: "get-started",
      component: (
        <Button variant="primary" href="/login" context="navbar">
          {t.nav.getStarted}
        </Button>
      ),
      compactComponent: (
        <Button variant="primary" size="icon" href="/login" context="navbar" icon={<LogIn size={16} />} />
      ),
      showOnMobile: true,
      showOnDesktop: true,
      showOnTablet: true,
    },
  ];

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