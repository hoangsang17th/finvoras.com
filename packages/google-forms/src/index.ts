/**
 * Google Forms Integration Utility
 *
 * This utility helps you submit data to Google Forms with a custom UI.
 *
 * ## Setup Instructions:
 *
 * 1. Create a Google Form at https://docs.google.com/forms
 * 2. Add your form fields (Name, Email, Message) - all required
 * 3. Get the form URL from "Send" button -> Link
 * 4. Extract the form ID from the URL (the long string after /d/)
 * 5. Get field entry IDs by:
 *    - Open your form in preview mode
 *    - Right-click -> Inspect
 *    - Look for input names like "entry.123456789"
 *    - Map these entry IDs to your field names below
 *
 * ## Example URL structure:
 * https://docs.google.com/forms/d/e/FORM_ID_HERE/viewform
 *
 * ## Example entry mapping:
 * If you see: <input name="entry.123456789">
 * Then: nameEntry: "entry.123456789"
 */

export interface GoogleFormConfig {
	formId: string;
	fields: {
		[key: string]: string; // key: your field name, value: Google Form entry ID
	};
	recaptchaSiteKey?: string; // Optional reCAPTCHA site key
}

export interface FormData {
	[key: string]: string;
}

export interface TrackingData {
	source?: string;
	medium?: string;
	campaign?: string;
	referrer?: string;
	userAgent?: string;
	timestamp?: string;
}

export interface SubmitOptions {
	includeTracking?: boolean;
	recaptchaToken?: string;
}

export interface SubmitResult {
	success: boolean;
	error?: string;
}

/**
 * Get reCAPTCHA token
 * @param siteKey - reCAPTCHA site key
 * @returns Promise<string> - reCAPTCHA token
 */
export async function getRecaptchaToken(
	siteKey: string,
): Promise<string | null> {
	if (typeof window === "undefined" || !window.grecaptcha) {
		console.warn("reCAPTCHA not loaded");
		return null;
	}

	try {
		return await window.grecaptcha.execute(siteKey, { action: "submit" });
	} catch (error) {
		console.error("Error getting reCAPTCHA token:", error);
		return null;
	}
}

/**
 * Get tracking data from browser
 */
export function getTrackingData(): TrackingData {
	if (typeof window === "undefined") return {};

	const urlParams = new URLSearchParams(window.location.search);

	return {
		source: urlParams.get("utm_source") || undefined,
		medium: urlParams.get("utm_medium") || undefined,
		campaign: urlParams.get("utm_campaign") || undefined,
		referrer: document.referrer || undefined,
		userAgent: navigator.userAgent,
		timestamp: new Date().toISOString(),
	};
}

/**
 * Submit data to Google Form
 *
 * @param config - Google Form configuration
 * @param data - Form data to submit
 * @param options - Additional options (tracking, recaptcha)
 * @returns Promise<SubmitResult> - Success status and optional error
 */
export async function submitToGoogleForm(
	config: GoogleFormConfig,
	data: FormData,
	options?: SubmitOptions,
): Promise<SubmitResult> {
	try {
		// Get reCAPTCHA token if configured
		let recaptchaToken = options?.recaptchaToken;
		if (!recaptchaToken && config.recaptchaSiteKey) {
			recaptchaToken =
				(await getRecaptchaToken(config.recaptchaSiteKey)) || undefined;
		}

		// Build the submission URL
		const formUrl = `https://docs.google.com/forms/d/e/${config.formId}/formResponse`;

		// Create form data with Google Form entry IDs
		const formData = new globalThis.FormData();

		// Add form fields
		Object.entries(data).forEach(([key, value]) => {
			const entryId = config.fields[key];
			if (entryId && value && typeof value === "string") {
				formData.append(entryId, value);
			}
		});

		// Add tracking data if enabled
		if (options?.includeTracking) {
			const tracking = getTrackingData();
			Object.entries(tracking).forEach(([key, value]) => {
				const trackingKey = `tracking_${key}`;
				const entryId = config.fields[trackingKey];
				if (entryId && value) {
					formData.append(entryId, value);
				}
			});
		}

		// Add reCAPTCHA token if available
		if (recaptchaToken && config.fields.recaptcha) {
			formData.append(config.fields.recaptcha, recaptchaToken);
		}

		// Submit using fetch with no-cors mode
		// Note: We won't get response details due to CORS, but the submission will work
		await fetch(formUrl, {
			method: "POST",
			body: formData,
			mode: "no-cors", // This is required for Google Forms
		});

		// Since we use no-cors, we can't read the response
		// We assume success if no error is thrown
		return { success: true };
	} catch (error) {
		console.error("Error submitting to Google Form:", error);
		return {
			success: false,
			error: error instanceof Error ? error.message : "Unknown error",
		};
	}
}

/**
 * Alternative method: Submit using hidden iframe
 * This is more reliable but requires an iframe in the DOM
 */
export function submitToGoogleFormViaIframe(
	config: GoogleFormConfig,
	data: FormData,
): Promise<SubmitResult> {
	return new Promise((resolve) => {
		try {
			// Create a hidden iframe
			const iframe = document.createElement("iframe");
			iframe.name = "google-form-iframe";
			iframe.style.display = "none";
			document.body.appendChild(iframe);

			// Create a form
			const form = document.createElement("form");
			form.action = `https://docs.google.com/forms/d/e/${config.formId}/formResponse`;
			form.method = "POST";
			form.target = "google-form-iframe";

			// Add form fields
			Object.entries(data).forEach(([key, value]) => {
				const entryId = config.fields[key];
				if (entryId && value && typeof value === "string") {
					const input = document.createElement("input");
					input.type = "hidden";
					input.name = entryId;
					input.value = value;
					form.appendChild(input);
				}
			});

			// Submit form
			document.body.appendChild(form);
			form.submit();

			// Clean up after a delay
			setTimeout(() => {
				document.body.removeChild(form);
				document.body.removeChild(iframe);
				resolve({ success: true });
			}, 1000);
		} catch (error) {
			console.error("Error submitting to Google Form:", error);
			resolve({
				success: false,
				error: error instanceof Error ? error.message : "Unknown error",
			});
		}
	});
}

/**
 * Create a Google Form configuration with environment variables
 * This is a helper function to create config using env variables
 *
 * ⚠️ IMPORTANT: You MUST update the entry IDs in the fields object!
 * The default values are placeholders and will NOT work with your form.
 *
 * To get your entry IDs:
 * 1. Open your Google Form in preview mode
 * 2. Right-click → Inspect Element (F12)
 * 3. Find input names like "entry.123456789" for each field
 * 4. Replace the default values below with your actual entry IDs
 */
export function createGoogleFormConfig(
	config: GoogleFormConfig,
): GoogleFormConfig {
	return {
		...config,
		fields: {
			...config.fields,
		},
	};
}

/**
 * Declare grecaptcha on window for TypeScript
 */
declare global {
	interface Window {
		grecaptcha: {
			execute: (
				siteKey: string,
				options: { action: string },
			) => Promise<string>;
			ready: (callback: () => void) => void;
		};
	}
}
