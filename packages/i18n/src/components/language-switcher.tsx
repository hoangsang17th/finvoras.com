"use client";

import React, { useState } from "react";
import { useI18n } from "../context";
import type { LanguageSwitcherProps, LanguageOption } from "../types";

export function LanguageSwitcher({
	languages,
	className = "",
	variant = "dropdown",
	showFlag = true,
	showName = true,
	orientation = "horizontal",
}: LanguageSwitcherProps) {
	const { locale, setLocale } = useI18n();
	const [isOpen, setIsOpen] = useState(false);

	const currentLanguage = languages.find(
		(lang: LanguageOption) => lang.code === locale,
	);

	// Switcher button: Toggle switch style cho 2 ngôn ngữ
	if (variant === "switcher" && languages.length === 2) {
		const firstLang = languages[0];
		const secondLang = languages[1];

		if (!firstLang || !secondLang) return null;

		const isFirstActive = locale === firstLang.code;

		return (
			<div
				className={`relative inline-flex items-center rounded-full border bg-background p-1 transition-colors ${className}`}
			>
				{/* Background toggle track */}
				<div
					className={`flex items-center gap-1 ${orientation === "vertical" ? "flex-col" : ""}`}
				>
					{/* First language button */}
					<button
						onClick={() => setLocale(firstLang.code)}
						className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full text-lg transition-all duration-200 ${
							isFirstActive
								? "bg-primary text-primary-foreground shadow-sm"
								: "hover:bg-muted/50"
						}`}
						aria-label={`Switch to ${firstLang.name}`}
					>
						{firstLang.flag}
					</button>

					{/* Second language button */}
					<button
						onClick={() => setLocale(secondLang.code)}
						className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full text-lg transition-all duration-200 ${
							!isFirstActive
								? "bg-primary text-primary-foreground shadow-sm"
								: "hover:bg-muted/50"
						}`}
						aria-label={`Switch to ${secondLang.name}`}
					>
						{secondLang.flag}
					</button>
				</div>
			</div>
		);
	}

	// Backward compatibility with old button variant
	if (variant === "buttons") {
		return (
			<div className={`flex gap-1 ${className}`}>
				{languages.map((language: LanguageOption) => (
					<button
						key={language.code}
						onClick={() => setLocale(language.code)}
						className={`px-2 py-1 rounded text-sm transition-colors ${
							locale === language.code
								? "bg-primary text-primary-foreground"
								: "bg-muted hover:bg-muted/80"
						}`}
						aria-label={`Switch to ${language.name}`}
					>
						{showFlag && language.flag && (
							<span className="mr-1">{language.flag}</span>
						)}
						{showName && <span>{language.name}</span>}
					</button>
				))}
			</div>
		);
	}

	// Dropdown button: Có style giống button, chỉ có flag và arrow down icon
	return (
		<div className={`relative ${className}`}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center gap-2 px-3 py-2 text-lg rounded-md border bg-background hover:bg-muted transition-colors"
				aria-label="Change language"
				aria-expanded={isOpen}
			>
				{currentLanguage?.flag}
				<svg
					className="w-4 h-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>

			{isOpen && (
				<>
					<div
						className="fixed inset-0 z-40"
						onClick={() => setIsOpen(false)}
					/>
					<div className="absolute right-0 top-full mt-2 z-50 min-w-[160px] rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
						{languages.map((language: LanguageOption) => (
							<button
								key={language.code}
								onClick={() => {
									setLocale(language.code);
									setIsOpen(false);
								}}
								className="flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer"
							>
								<div className="flex items-center gap-2">
									{language.flag && (
										<span className="text-lg">{language.flag}</span>
									)}
									<span>{language.name}</span>
								</div>
								{locale === language.code && (
									<svg
										className="w-4 h-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
								)}
							</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
