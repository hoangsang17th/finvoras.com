"use client";

import { Navbar, Button, Logo, type NavMenuItem, type NavbarCTAAction } from "@repo/ui";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import ThemeToggle from "./theme-toggle";
import LanguageSwitcher from "./language-switcher";
import { User, Briefcase, Award, FolderOpen, Mail, Download } from "lucide-react";

// Portfolio Logo Component using shared Logo component
const PortfolioLogo = ({ name }: { name: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Nếu đang ở homepage, scroll lên top
    if (pathname === '/') {
      // Sử dụng requestAnimationFrame để đảm bảo scroll mượt mà hơn
      const scrollToTop = () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > 0) {
          window.requestAnimationFrame(scrollToTop);
          // Giảm tốc độ scroll để có hiệu ứng mượt mà hơn
          window.scrollTo(0, currentScroll - (currentScroll / 8));
        }
      };

      // Fallback cho trình duyệt hỗ trợ smooth behavior
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // Sử dụng custom animation cho trình duyệt cũ
        scrollToTop();
      }
    } else {
      // Nếu ở page khác, navigate về home
      router.push('/');
    }
  };

  return (
    <div onClick={handleLogoClick} className="cursor-pointer">
      <Logo>
        <Image
          src="/logo.png"
          alt={name}
          width={56}
          height={56}
          className="object-contain"
        />
      </Logo>
    </div>
  );
};

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
      compactComponent: <LanguageSwitcher />,
      showOnMobile: true,
      showOnDesktop: true,
      showOnTablet: true,
    },
    {
      id: "theme-toggle",
      component: <ThemeToggle />,
      compactComponent: <ThemeToggle />,
      showOnMobile: true,
      showOnDesktop: true,
      showOnTablet: true,
    },
    ...(resumeData.personalInfo.resumeUrl ? [{
      id: "download-cv",
      component: (
        <Button
          variant="secondary"
          href={resumeData.personalInfo.resumeUrl}
          icon={<Download className="h-4 w-4" />}
          iconPosition="left"
          context="navbar"
        >
          {ui.nav.downloadCv}
        </Button>
      ),
      compactComponent: (
        <Button
          variant="secondary"
          size="icon"
          href={resumeData.personalInfo.resumeUrl}
          icon={<Download className="h-4 w-4" />}
          context="navbar"
        />
      ),
      showOnMobile: true,
      showOnDesktop: true,
      showOnTablet: true,
    }] : []),
  ];

  return (
    <Navbar
      logo={<PortfolioLogo name={resumeData.personalInfo.name} />}
      menuItems={menuItems}
      ctaActions={ctaActions}
      homePath="/"
    />
  );
};

export default PortfolioNavbar;