"use client";

import { Navbar, Button, Logo, type NavbarCTAAction } from "@repo/ui";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { Download } from "lucide-react";
import { useNavigation } from "@/lib/hooks/use-navigation";

// Portfolio Logo Component using shared Logo component
const PortfolioLogo = ({
	name,
	homePath,
}: { name: string; homePath: string }) => {
	const router = useRouter();
	const pathname = usePathname();

	const handleLogoClick = (e: React.MouseEvent) => {
		e.preventDefault();

		// Nếu đang ở homepage, scroll lên top
		if (pathname === homePath) {
			// Sử dụng requestAnimationFrame để đảm bảo scroll mượt mà hơn
			const scrollToTop = () => {
				const currentScroll =
					window.pageYOffset || document.documentElement.scrollTop;
				if (currentScroll > 0) {
					window.requestAnimationFrame(scrollToTop);
					// Giảm tốc độ scroll để có hiệu ứng mượt mà hơn
					window.scrollTo(0, currentScroll - currentScroll / 8);
				}
			};

			// Fallback cho trình duyệt hỗ trợ smooth behavior
			if ("scrollBehavior" in document.documentElement.style) {
				window.scrollTo({
					top: 0,
					behavior: "smooth",
				});
			} else {
				// Sử dụng custom animation cho trình duyệt cũ
				scrollToTop();
			}
		} else {
			// Nếu ở page khác, navigate về home
			router.push(homePath);
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
	const { ui, resumeData, locale } = useI18n();
	const homePath = `/${locale}`;
	const { menuItems } = useNavigation();

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

	// Define CTA actions
	const ctaActions: NavbarCTAAction[] = [
		...(resumeData.personalInfo.resumeUrl
			? [
					{
						id: "download-cv",
						component: (
							<Button
								variant="primary"
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
								variant="primary"
								size="icon"
								href={resumeData.personalInfo.resumeUrl}
								icon={<Download className="h-4 w-4" />}
								context="navbar"
								aria-label="Download CV"
								className="bg-primary text-primary-foreground hover:bg-primary/90"
							/>
						),
						showOnMobile: true,
						showOnDesktop: true,
						showOnTablet: true,
					},
				]
			: []),
	];

	return (
		<Navbar
			logo={
				<PortfolioLogo
					name={resumeData.personalInfo.name}
					homePath={homePath}
				/>
			}
			menuItems={menuItems}
			ctaActions={ctaActions}
			homePath={homePath}
		/>
	);
};

export default PortfolioNavbar;
