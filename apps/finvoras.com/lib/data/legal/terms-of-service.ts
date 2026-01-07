import { LegalDocumentResponse } from "../../api/legal";

export const termsOfServiceFallback: LegalDocumentResponse = {
    id: "terms-of-service-fallback",
    type: "TERMS_OF_SERVICE",
    title: "Terms of Service",
    version: "1.0.0-snapshot",
    language: "en",
    region: "GLOBAL",
    content: `
# Terms of Service

**Last Updated: January 7, 2026**

## 1. Agreement to Terms
By accessing or using our Services, you agree to be bound by these Terms. If you don't agree to be bound by these Terms, do not use the Services.

## 2. Changes to Terms or Services
We may update the Terms at any time, in our sole discretion. If we do so, we'll let you know either by posting the updated Terms on the Site or through other communications.

## 3. Account Security
To use certain features of the Services, you'll need to create an account. You're responsible for all activities that occur under your account and for keeping your password secure.

## 4. User Content
Our Services may allow you to store or share content such as text, files, images. You are solely responsible for the content that you provide.

## 5. Prohibited Conduct
You agree not to engage in any of the following prohibited activities: copying, distributing, or disclosing any part of the Services in any medium; using any automated system to access the Services; attempting to interfere with the servers.

## 6. Termination
We may terminate your access to and use of the Services, at our sole discretion, at any time and without notice to you.

## 7. Limitation of Liability
To the maximum extent permitted by law, Finvoras shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues.
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
