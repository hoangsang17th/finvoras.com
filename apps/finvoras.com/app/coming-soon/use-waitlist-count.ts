"use client";

import { useState, useEffect } from "react";

// Cache structure to prevent redundant fetches
interface Cache {
	count: number;
	timestamp: number;
}

let countCache: Cache | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

export function useWaitlistCount(sheetCsvUrl?: string) {
	const [count, setCount] = useState<number>(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		if (!sheetCsvUrl) {
			setLoading(false);
			return;
		}

		// Use cached value if it's still fresh
		if (countCache && Date.now() - countCache.timestamp < CACHE_DURATION) {
			setCount(countCache.count);
			setLoading(false);
		}

		const fetchCount = async () => {
			try {
				const response = await fetch(sheetCsvUrl);

				if (!response.ok) {
					throw new Error("Failed to fetch waitlist data");
				}
				const text = await response.text();
				const trimmedText = text.trim();

				// If the response is a single numeric value (e.g., from a summary sheet)
				if (/^\d+$/.test(trimmedText)) {
					const finalCount = parseInt(trimmedText, 10);
					setCount(finalCount);
					countCache = { count: finalCount, timestamp: Date.now() };
				} else {
					// Estimate count by number of lines, subtracting header if present.
					// Assuming standard CSV with header.
					const lines = trimmedText.split("\n");
					const estimatedCount = Math.max(0, lines.length - 1);
					setCount(estimatedCount);
					countCache = { count: estimatedCount, timestamp: Date.now() };
				}
			} catch (err) {
				console.error("Error fetching waitlist count:", err);
				setError(err instanceof Error ? err : new Error("Unknown error"));
			} finally {
				setLoading(false);
			}
		};

		fetchCount();

		// Refresh every 5 minutes
		const interval = setInterval(fetchCount, 5 * 60 * 1000);
		return () => clearInterval(interval);
	}, [sheetCsvUrl]);

	return { count, loading, error };
}
