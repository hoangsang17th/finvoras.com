import { Navbar } from "@/components/navbar";
import { FloatingUtilities } from "@repo/ui";
import { LanguageSwitcher } from "@repo/i18n";

export default function SiteLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navbar />
			{children}
			<FloatingUtilities
				languageSwitcher={
					<LanguageSwitcher
						languages={[
							{ code: "en", name: "English", flag: "🇺🇸" },
							{ code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
						]}
						showName={false}
						variant="switcher"
						orientation="vertical"
					/>
				}
			/>
		</>
	);
}
