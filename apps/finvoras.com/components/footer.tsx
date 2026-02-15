import { Button, Input, Separator } from "@repo/ui";
import {
	DribbbleIcon,
	GithubIcon,
	TwitchIcon,
	TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const footerLinks = [
	{
		title: "Product",
		links: [
			{ label: "Features", href: "/features" },
			{ label: "Pricing", href: "/pricing" },
			{ label: "Blog", href: "/blog" },
		],
	},
	{
		title: "Company",
		links: [
			{ label: "About", href: "/about" },
			{ label: "Legal", href: "/legal" },
		],
	},
	{
		title: "Legal",
		links: [
			{ label: "Privacy Policy", href: "/privacy" },
			{ label: "Terms of Service", href: "/terms" },
		],
	},
];

import Image from "next/image";

const Footer = () => {
	return (
		<footer className="dark:border-t mt-40 dark bg-background text-foreground">
			<div className="max-w-screen-xl mx-auto">
				<div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 xl:px-0">
					{/* Brand */}
					<div className="flex flex-col gap-4">
						{/* Logo */}
						<Image
							src="/logo.png"
							alt="Finvoras Logo"
							width={48}
							height={48}
							className="h-12"
						/>

						<p className="text-muted-foreground text-sm">
							Empowering your financial journey with smart tools and insights.
						</p>
					</div>

					{/* Links */}
					{footerLinks.map((section) => (
						<div key={section.title} className="flex flex-col gap-4">
							<h6 className="font-semibold">{section.title}</h6>
							<ul className="flex flex-col gap-2">
								{section.links.map((link) => (
									<li key={link.label}>
										<Link
											href={link.href}
											className="text-muted-foreground hover:text-foreground text-sm"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}

					{/* Newsletter */}
					<div className="max-w-xs w-full">
						<h6 className="font-semibold">Stay up to date</h6>
						<form className="mt-4 flex flex-col gap-2">
							<Input type="email" placeholder="Enter your email" />
							<Button className="w-full">Subscribe</Button>
						</form>
					</div>
				</div>

				<Separator />

				<div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
					{/* Copyright */}
					<span className="text-muted-foreground text-sm text-center sm:text-start">
						&copy; {new Date().getFullYear()} Finvoras. All rights reserved.
					</span>

					{/* Socials */}
					<div className="flex items-center gap-5 text-muted-foreground">
						<Link href="#" target="_blank">
							<TwitterIcon className="h-5 w-5" />
						</Link>
						<Link href="#" target="_blank">
							<DribbbleIcon className="h-5 w-5" />
						</Link>
						<Link href="#" target="_blank">
							<TwitchIcon className="h-5 w-5" />
						</Link>
						<Link href="#" target="_blank">
							<GithubIcon className="h-5 w-5" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
