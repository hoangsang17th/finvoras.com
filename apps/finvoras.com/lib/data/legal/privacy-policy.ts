import { LegalDocumentResponse } from "../../api/legal";

export const privacyPolicyFallback: LegalDocumentResponse = {
    id: "privacy-policy-fallback",
    type: "PRIVACY_POLICY",
    title: "Privacy Policy",
    version: "1.0.0-snapshot",
    language: "en",
    region: "GLOBAL",
    content: `
# Privacy Policy

**Last Updated: January 7, 2026**

## 1. Introduction
Welcome to Finvoras. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.

## 2. Information We Collect
We collect personal information that you provide to us such as name, address, contact information, passwords and security data, and payment information.

## 3. How We Use Your Information
We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.

## 4. Sharing Your Information
We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.

## 5. Security of Your Information
We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any type of misuse or other violation.

## 6. Your Privacy Rights
In some regions, such as the European Economic Area (EEA), you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.

## 7. Updates to This Policy
We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
  `,
    status: "ACTIVE",
    requiresReAcceptance: false,
    effectiveDate: "2026-01-07",
    publishedAt: "2026-01-07",
    createdAt: "2026-01-07",
    updatedAt: "2026-01-07",
    context: {
        region: "GLOBAL",
        regionSource: "FALLBACK",
        language: "English",
        languageCode: "en",
        languageSource: "FALLBACK",
        supportedLanguages: ["en"]
    }
};
