import { Navbar, type NavMenuItem, type NavbarCTAAction } from "@repo/ui";
import Link from "next/link";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import ThemeToggle from "./theme-toggle";
import LanguageSwitcher from "./language-switcher";
import { User, Briefcase, Award, FolderOpen, Mail } from "lucide-react";

// Portfolio Logo Component
const PortfolioLogo = ({ name }: { name: string }) => (
  <Link href="/" className="font-bold text-xl hover:text-brand-primary transition-colors">
    {name}
  </Link>
);

const PortfolioNavbar = () => {
  const { ui, resumeData } = useLanguage();

  // Return loading state if data is not ready
  if (!resumeData) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <span className="font-bold text-xl">Loading...</span>
          </div>
        </div>
      </nav>
    );
  }

  // Define menu items using language context
  const menuItems: NavMenuItem[] = [
    { label: ui.nav.about, href: "/", fragmentId: "about", icon: <User size={16} /> },
    { label: ui.nav.experience, href: "/", fragmentId: "experience", icon: <Briefcase size={16} /> },
    { label: ui.nav.skills, href: "/", fragmentId: "skills", icon: <Award size={16} /> },
    { label: ui.nav.projects, href: "/", fragmentId: "projects", icon: <FolderOpen size={16} /> },
    { label: ui.nav.contact, href: "/", fragmentId: "contact", icon: <Mail size={16} /> },
  ];

  // Define CTA actions
  const ctaActions: NavbarCTAAction[] = [
    {
      id: "language-switcher",
      component: <LanguageSwitcher />,
      showOnMobile: true,
      showOnDesktop: true,
    },
    {
      id: "theme-toggle",
      component: <ThemeToggle />,
      showOnMobile: true,
      showOnDesktop: true,
    },
  ];

  return (
    <Navbar
      logo={<PortfolioLogo name={resumeData.personalInfo.name} />}
      menuItems={menuItems}
      ctaActions={ctaActions}
      homePath="/"
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b max-w-none rounded-none h-16"
      containerClassName="max-w-6xl mx-auto px-6"
    />
  );
};

export default PortfolioNavbar;