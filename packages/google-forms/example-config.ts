/**
 * Example Google Forms Configuration
 *
 * This file shows how to properly configure Google Forms integration
 * Copy this pattern and update with your actual values
 */

import { createGoogleFormConfig, submitToGoogleForm } from "@repo/google-forms";

// Example 1: Custom configuration per form (RECOMMENDED)
export const createContactFormConfig = () => {
	return createGoogleFormConfig({
		// Optional: Override form ID if different from env variable
		// formId: "1FAIpQLSc_YOUR_SPECIFIC_FORM_ID",

		// REQUIRED: Update these with your actual entry IDs from Google Form
		fields: {
			name: "entry.123456789", // TODO: Replace with your name field entry ID
			email: "entry.987654321", // TODO: Replace with your email field entry ID
			message: "entry.555666777", // TODO: Replace with your message field entry ID

			// Optional: Add tracking fields if you created them in Google Form
			// tracking_source: "entry.111111111",
			// tracking_medium: "entry.222222222",
			// tracking_campaign: "entry.333333333",
		},
	});
};

// Example 2: Partial override - only update specific fields
export const createNewsletterFormConfig = () => {
	return createGoogleFormConfig({
		formId: "1FAIpQLSc_NEWSLETTER_FORM_ID", // Different form
		fields: {
			// Only override the fields that are different
			// The rest (name, message) will use defaults from the base config
			email: "entry.NEWSLETTER_EMAIL_ENTRY", // Different email field for newsletter form
		},
	});
};

// Example 3: Complete custom config
export const createCustomFormConfig = () => {
	return createGoogleFormConfig({
		formId: "1FAIpQLSc_CUSTOM_FORM_ID",
		recaptchaSiteKey: "6Lc_CUSTOM_RECAPTCHA_KEY", // Override reCAPTCHA key
		fields: {
			// Completely different form structure
			firstName: "entry.111111111",
			lastName: "entry.222222222",
			company: "entry.333333333",
			phone: "entry.444444444",
			inquiry: "entry.555555555",
		},
	});
};

// Example 2: How to use in a React component
export const ContactFormExample = () => {
	const handleSubmit = async (formData: {
		name: string;
		email: string;
		message: string;
	}) => {
		try {
			const config = createContactFormConfig();

			const result = await submitToGoogleForm(config, formData, {
				includeTracking: true, // Include UTM parameters and analytics
			});

			if (result.success) {
				console.log("Form submitted successfully!");
				// Handle success (show success message, reset form, etc.)
			} else {
				console.error("Form submission failed:", result.error);
				// Handle error (show error message, retry, etc.)
			}
		} catch (error) {
			console.error("Unexpected error:", error);
		}
	};

	// ... rest of component
};

/**
 * How to get your Entry IDs:
 *
 * 1. Open your Google Form: https://docs.google.com/forms/d/YOUR_FORM_ID/edit
 * 2. Click "Preview" (eye icon)
 * 3. Right-click on the preview page → "Inspect Element" (F12)
 * 4. Look for input elements and find their "name" attributes:
 *
 *    <input name="entry.123456789" type="text" ...>  ← Name field
 *    <input name="entry.987654321" type="email" ...> ← Email field
 *    <textarea name="entry.555666777" ...>           ← Message field
 *
 * 5. Replace the placeholder values above with these actual entry IDs
 *
 * Environment Variables (.env.local):
 *
 *    # Required
 *    NEXT_PUBLIC_GOOGLE_FORM_ID=1FAIpQLSc_YOUR_FORM_ID_HERE
 *
 *    # Optional (for reCAPTCHA)
 *    NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lc_YOUR_RECAPTCHA_SITE_KEY
 */
