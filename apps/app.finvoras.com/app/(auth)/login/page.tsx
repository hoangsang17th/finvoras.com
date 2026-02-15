import { Metadata } from "next";
import { LoginContent } from "./login-content";

export const metadata: Metadata = {
	title: "Login - Finvoras App",
	description:
		"Log in to your Finvoras account to manage your finances, track expenses, and view your financial insights.",
	robots: {
		index: true,
		follow: true,
	},
};

export default function LoginPage() {
	return <LoginContent />;
}
