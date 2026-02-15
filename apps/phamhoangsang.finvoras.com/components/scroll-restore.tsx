"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRestore() {
	const pathname = usePathname();

	useEffect(() => {
		if (!pathname) return;
		try {
			const value = sessionStorage.getItem("scroll-restore");
			if (!value) return;
			sessionStorage.removeItem("scroll-restore");
			const y = Number(value);
			if (!Number.isNaN(y)) {
				window.scrollTo({ top: y, behavior: "auto" });
			}
		} catch {
			// ignore storage errors
		}
	}, [pathname]);

	return null;
}
