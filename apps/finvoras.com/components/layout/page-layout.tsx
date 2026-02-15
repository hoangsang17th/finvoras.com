import Footer from "@/components/footer";

interface PageLayoutProps {
	children: React.ReactNode;
	className?: string;
}

export default function PageLayout({
	children,
	className = "",
}: PageLayoutProps) {
	return (
		<>
			<div className={className}>{children}</div>
			<Footer />
		</>
	);
}
