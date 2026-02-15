"use client";

import { Button, Logo, Navbar } from "@repo/ui";
import { FinvorasLogo } from "@/components/finvoras-logo";
import { useI18n } from "@repo/i18n";
import type { Translations } from "@/lib/types/translations";
import { Send } from "lucide-react";

interface ComingSoonNavbarProps {
	onOpenWaitlist: () => void;
}

export function ComingSoonNavbar({ onOpenWaitlist }: ComingSoonNavbarProps) {
	const { t } = useI18n<Translations>();

	return (
		<Navbar
			logo={
				<Logo className="w-10 h-10">
					<FinvorasLogo />
				</Logo>
			}
			ctaActions={[
				{
					id: "waitlist",
					component: (
						<Button
							variant="primary"
							size="sm"
							className="rounded-full px-6 shadow-lg shadow-brand-primary/20"
							onClick={onOpenWaitlist}
							icon={<Send className="ml-2 h-4 w-4" />}
							iconPosition="right"
						>
							{t.comingSoon.waitlist.button}
						</Button>
					),
				},
			]}
		/>
	);
}
