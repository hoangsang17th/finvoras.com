// HTTP Headers Builder
import { v4 as uuidv4 } from 'uuid';
import type { AppInfo } from './types';

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
    if (typeof navigator === 'undefined') {
        return { name: 'Unknown', version: 'Unknown' };
    }

    const ua = navigator.userAgent;
    let name = 'Unknown';
    let version = 'Unknown';

    // Chrome
    if (ua.includes('Chrome') && !ua.includes('Edg')) {
        name = 'Chrome';
        const match = ua.match(/Chrome\/([\d.]+)/);
        version = match && match[1] ? match[1] : 'Unknown';
    }
    // Edge
    else if (ua.includes('Edg')) {
        name = 'Edge';
        const match = ua.match(/Edg\/([\d.]+)/);
        version = match && match[1] ? match[1] : 'Unknown';
    }
    // Firefox
    else if (ua.includes('Firefox')) {
        name = 'Firefox';
        const match = ua.match(/Firefox\/([\d.]+)/);
        version = match && match[1] ? match[1] : 'Unknown';
    }
    // Safari
    else if (ua.includes('Safari') && !ua.includes('Chrome')) {
        name = 'Safari';
        const match = ua.match(/Version\/([\d.]+)/);
        version = match && match[1] ? match[1] : 'Unknown';
    }
    // Opera
    else if (ua.includes('OPR')) {
        name = 'Opera';
        const match = ua.match(/OPR\/([\d.]+)/);
        version = match && match[1] ? match[1] : 'Unknown';
    }

    return { name, version };
}

/**
 * Parse user agent to extract OS information
 */
function getOSInfo(): OSInfo {
    if (typeof navigator === 'undefined') {
        return { name: 'Unknown', version: 'Unknown' };
    }

    const ua = navigator.userAgent;
    let name = 'Unknown';
    let version = 'Unknown';

    // Windows
    if (ua.includes('Windows')) {
        name = 'Windows';
        if (ua.includes('Windows NT 10.0')) version = '10';
        else if (ua.includes('Windows NT 6.3')) version = '8.1';
        else if (ua.includes('Windows NT 6.2')) version = '8';
        else if (ua.includes('Windows NT 6.1')) version = '7';
    }
    // macOS
    else if (ua.includes('Mac OS X')) {
        name = 'macOS';
        const match = ua.match(/Mac OS X ([\d_]+)/);
        version = match && match[1] ? match[1].replace(/_/g, '.') : 'Unknown';
    }
    // Linux
    else if (ua.includes('Linux')) {
        name = 'Linux';
        version = 'Unknown';
    }
    // iOS
    else if (ua.includes('iPhone') || ua.includes('iPad')) {
        name = 'iOS';
        const match = ua.match(/OS ([\d_]+)/);
        version = match && match[1] ? match[1].replace(/_/g, '.') : 'Unknown';
    }
    // Android
    else if (ua.includes('Android')) {
        name = 'Android';
        const match = ua.match(/Android ([\d.]+)/);
        version = match && match[1] ? match[1] : 'Unknown';
    }

    return { name, version };
}

/**
 * Build a simple device agent string for audit logging
 */
function getDeviceAgent(): string {
    if (typeof navigator === 'undefined') {
        return 'web-ssr';
    }

    return navigator.userAgent || 'web';
}

function getHostname(): string | undefined {
    if (typeof window === 'undefined') {
        return undefined;
    }

    try {
        return window.location.hostname;
    } catch {
        return undefined;
    }
}

/**
 * Generate device fingerprint (simple hash)
 * This creates a consistent identifier for the browser/device
 */
function getDeviceId(): string {
    if (typeof window === 'undefined') {
        return 'server-side-rendering';
    }

    // Try to get existing device ID from localStorage
    const existingId = localStorage.getItem('device_id');
    if (existingId) {
        return existingId;
    }

    // Generate new device ID
    const newId = uuidv4();
    localStorage.setItem('device_id', newId);
    return newId;
}

/**
 * Build standardized HTTP headers for all requests
 */
export async function buildHeaders(appInfo?: AppInfo, locale?: string): Promise<Record<string, string>> {
    const headers: Record<string, string> = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-request-id': uuidv4(),
        'x-api-version': '1',
        'x-platform': 'web',
    };

    // Locale/Language
    if (locale) {
        headers['Accept-Language'] = locale;
    } else if (typeof navigator !== 'undefined') {
        headers['Accept-Language'] = navigator.language || 'en';
    }

    // App info
    if (appInfo) {
        headers['app-name'] = appInfo.name;
        headers['app-version'] = appInfo.version;
        if (appInfo.buildNumber) {
            headers['app-build-number'] = appInfo.buildNumber;
        }
    }

    // Browser info (device model for web)
    const browserInfo = getBrowserInfo();
    headers['device-model'] = `${browserInfo.name} ${browserInfo.version}`;

    // OS info
    const osInfo = getOSInfo();
    headers['os-version'] = `${osInfo.name} ${osInfo.version}`;

    // Device agent helps backend correlate sessions
    headers['device-agent'] = getDeviceAgent();

    // Device ID
    if (typeof window !== 'undefined') {
        headers['device-id'] = getDeviceId();
    }

    const hostname = getHostname();
    if (hostname) {
        headers['hostname'] = hostname;
    }

    return headers;
}

/**
 * Update locale in existing headers
 */
export function updateLocaleHeader(headers: Record<string, string>, locale: string): Record<string, string> {
    return {
        ...headers,
        'Accept-Language': locale,
    };
}
