"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@repo/ui";
import { useI18n } from "@/lib/i18n";

type LanguageOption = {
	code: "en" | "vi";
	name: string;
	flag?: string;
};

type LocaleLanguageMenuProps = {
	languages: LanguageOption[];
	className?: string;
	label?: string;
};

export default function LocaleLanguageMenu({
	languages,
	className = "",
	label = "Language",
}: LocaleLanguageMenuProps) {
	const { locale, setLocale } = useI18n();
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement | null>(null);

	const current = languages.find((lang) => lang.code === locale);
	const currentCode = (current?.code ?? "en").toUpperCase();

	useEffect(() => {
		if (!isOpen) return;

		const handlePointerDown = (event: PointerEvent) => {
			const target = event.target as Node | null;
			if (!target) return;
			if (containerRef.current?.contains(target)) return;
			setIsOpen(false);
		};

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsOpen(false);
			}
		};

		document.addEventListener("pointerdown", handlePointerDown);
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("pointerdown", handlePointerDown);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen]);

	return (
		<div ref={containerRef} className={`relative ${className}`}>
			<Button
				type="button"
				variant="default"
				size="sm"
				context="navbar"
				onClick={() => setIsOpen((prev) => !prev)}
				className="rounded-full px-3"
				aria-haspopup="menu"
				aria-expanded={isOpen}
				aria-label={label}
				icon={
					<svg
						className="h-4 w-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth={2}
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden
					>
						<path d="m6 9 6 6 6-6" />
					</svg>
				}
				iconPosition="right"
			>
				{currentCode}
			</Button>

			{isOpen && (
				<>
					<div
						role="menu"
						className="absolute right-0 top-full z-[100] mt-2 min-w-[180px] overflow-hidden rounded-xl border bg-popover text-popover-foreground shadow-lg"
					>
						<div className="border-b px-3 py-2 text-xs uppercase tracking-wide text-muted-foreground">
							{label}
						</div>
						<div className="p-1 pb-0">
							{languages.map((language) => (
								<button
									key={language.code}
									type="button"
									role="menuitem"
									onClick={() => {
										setLocale(language.code);
										setIsOpen(false);
									}}
									className={`flex w-full items-center justify-between rounded-lg px-3 py-2 mb-1 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
										locale === language.code
											? "bg-accent text-accent-foreground"
											: ""
									}`}
								>
									<span className="flex items-center gap-2">
										{language.flag && (
											<span className="text-base">{language.flag}</span>
										)}
										<span>{language.name}</span>
									</span>
									{locale === language.code && (
										<svg
											className="h-4 w-4"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											aria-hidden
										>
											<path d="M5 13l4 4L19 7" />
										</svg>
									)}
								</button>
							))}
						</div>
					</div>
				</>
			)}
		</div>
	);
}
