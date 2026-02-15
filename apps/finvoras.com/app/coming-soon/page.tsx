import { Metadata } from "next";
import { ComingSoonContent } from "./coming-soon-content";

export const metadata: Metadata = {
	title: "Coming Soon - Finvoras | Smart Personal Finance",
	description:
		"Something big is coming. Finvoras is building the future of personal finance management. Join the waitlist to be the first to know when we launch.",
	keywords: [
		"Finvoras",
		"Coming Soon",
		"Waitlist",
		"Personal Finance App",
		"Financial Freedom",
		"Smart Budgeting",
		"AI Finance Assistant",
	],
	openGraph: {
		title: "Finvoras - Coming Soon",
		description:
			"Join the waitlist for the most intuitive personal finance management app.",
		images: ["/preview.png"],
	},
};

export default function ComingSoonPage() {
	return <ComingSoonContent />;
}
