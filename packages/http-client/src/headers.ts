// HTTP Headers Builder
import { v4 as uuidv4 } from "uuid";
import type { AppInfo } from "./types";

interface BrowserInfo {
	name: string;
	version: string;
}

interface OSInfo {
	name: string;
	version: string;
}

/**
 * Parse user agent to extract browser information
 */
function getBrowserInfo(): BrowserInfo {
	if (typeof navigator === "undefined") {
		return { name: "Unknown", version: "Unknown" };
	}

	const ua = navigator.userAgent;
	let name = "Unknown";
	let version = "Unknown";

	// Edge
	if (ua.includes("Edg/")) {
		name = "Edge";
		const match = ua.match(/Edg\/([\d.]+)/);
		version = match && match[1] ? match[1] : "Unknown";
	}
	// Opera
	else if (ua.includes("OPR/") || ua.includes("Opera/")) {
		name = "Opera";
		const match = ua.match(/(OPR|Opera)\/([\d.]+)/);
		version = match && match[2] ? match[2] : "Unknown";
	}
	// Chrome
	else if (ua.includes("Chrome/") && !ua.includes("Edg/")) {
		name = "Chrome";
		const match = ua.match(/Chrome\/([\d.]+)/);
		version = match && match[1] ? match[1] : "Unknown";
	}
	// Firefox
	else if (ua.includes("Firefox/")) {
		name = "Firefox";
		const match = ua.match(/Firefox\/([\d.]+)/);
		version = match && match[1] ? match[1] : "Unknown";
	}
	// Safari
	else if (ua.includes("Safari/") && !ua.includes("Chrome/")) {
		name = "Safari";
		const match = ua.match(/Version\/([\d.]+)/);
		version = match && match[1] ? match[1] : "Unknown";
	}

	return { name, version };
}

/**
 * Parse user agent to extract OS information
 */
function getOSInfo(): OSInfo {
	if (typeof navigator === "undefined") {
		return { name: "Unknown", version: "Unknown" };
	}

	const ua = navigator.userAgent;
	let name = "Unknown";
	let version = "Unknown";

	// iOS
	if (/iPhone|iPad|iPod/.test(ua)) {
		name = "iOS";
		const match = ua.match(/OS ([\d_]+)/);
		version = match && match[1] ? match[1].replace(/_/g, ".") : "Unknown";
	}
	// Android
	else if (ua.includes("Android")) {
		name = "Android";
		const match = ua.match(/Android ([\d.]+)/);
		version = match && match[1] ? match[1] : "Unknown";
	}
	// Windows
	else if (ua.includes("Windows")) {
		name = "Windows";
		const match = ua.match(/Windows NT ([\d.]+)/);
		if (match) {
			const ntVersion = match[1];
			if (ntVersion === "10.0") version = "10/11";
			else if (ntVersion === "6.3") version = "8.1";
			else if (ntVersion === "6.2") version = "8";
			else if (ntVersion === "6.1") version = "7";
			else version = ntVersion || "Unknown";
		}
	}
	// macOS
	else if (ua.includes("Mac OS X")) {
		name = "macOS";
		const match = ua.match(/Mac OS X ([\d_]+)/);
		version = match && match[1] ? match[1].replace(/_/g, ".") : "Unknown";
	}
	// Linux
	else if (ua.includes("Linux")) {
		name = "Linux";
	}

	return { name, version };
}

/**
 * Build a simple device agent string for audit logging
 * Format: AppName/Version (OS Name OS Version; DeviceModel)
 */
function formatDeviceAgent(appInfo?: AppInfo): string {
	if (typeof navigator === "undefined") {
		return "web-ssr";
	}

	const os = getOSInfo();
	const browser = getBrowserInfo();

	const appPart = appInfo ? `${appInfo.name}/${appInfo.version}` : "WebBrowser";
	const osPart = `${os.name} ${os.version}`;
	const browserPart = `${browser.name} ${browser.version}`;

	return `${appPart} (${osPart}; ${browserPart})`;
}

function getHostname(): string | undefined {
	if (typeof window !== "undefined") {
		try {
			return window.location.hostname;
		} catch {
			return undefined;
		}
	}
	return undefined;
}

/**
 * Generate device fingerprint (consistent identifier)
 */
function getDeviceId(): string {
	if (typeof window === "undefined") {
		return "server-side";
	}

	try {
		const id = localStorage.getItem("device_id");
		if (id) return id;

		const newId = uuidv4();
		localStorage.setItem("device_id", newId);
		return newId;
	} catch {
		return "non-persistent-browser";
	}
}

/**
 * Detect platform for x-platform header
 */
function getPlatform(): string {
	if (typeof navigator === "undefined") return "web";

	const ua = navigator.userAgent;
	if (/iPhone|iPad|iPod/.test(ua)) return "ios";
	if (/Android/.test(ua)) return "android";

	return "web";
}

/**
 * Build standardized HTTP headers for all requests
 */
export function buildHeaders(
	appInfo?: AppInfo,
	locale?: string,
): Record<string, string> {
	const headers: Record<string, string> = {
		Accept: "application/json",
		"Content-Type": "application/json",
		"x-request-id": uuidv4(),
		"x-api-version": "1",
		"x-platform": getPlatform(),
		"x-timezone": Intl.DateTimeFormat().resolvedOptions().timeZone,
	};

	// Locale/Language
	if (locale) {
		headers["Accept-Language"] = locale;
	} else if (typeof navigator !== "undefined") {
		headers["Accept-Language"] = navigator.language || "en";
	}

	// App info
	if (appInfo) {
		headers["app-name"] = appInfo.name;
		headers["app-version"] = appInfo.version;
		if (appInfo.buildNumber) {
			headers["app-build-number"] = appInfo.buildNumber;
		}
	}

	// OS & Browser info
	const os = getOSInfo();
	const browser = getBrowserInfo();

	headers["os-version"] = `${os.name} ${os.version}`;
	headers["device-model"] = `${browser.name} ${browser.version}`;

	// Device agent (Audit logging)
	headers["device-agent"] = formatDeviceAgent(appInfo);

	// Device ID
	headers["device-id"] = getDeviceId();

	const hostname = getHostname();
	if (hostname) {
		headers["hostname"] = hostname;
	}

	return headers;
}

/**
 * Update locale in existing headers
 */
export function updateLocaleHeader(
	headers: Record<string, string>,
	locale: string,
): Record<string, string> {
	return {
		...headers,
		"Accept-Language": locale,
	};
}
