import { privacyPolicyFallback } from "../data/legal/privacy-policy";
import { termsOfServiceFallback } from "../data/legal/terms-of-service";

const FALLBACK_API_BASE_URL = "http://localhost:3000/api";

const resolveApiBaseUrl = () => {
  const configured = process.env.NEXT_PUBLIC_API_URL?.trim();
  if (configured) {
    return configured.replace(/\/$/, "");
  }

  if (process.env.NODE_ENV !== "production") {
    console.warn(
      "NEXT_PUBLIC_API_URL is not defined. Falling back to",
      FALLBACK_API_BASE_URL
    );
    return FALLBACK_API_BASE_URL;
  }

  throw new Error(
    "NEXT_PUBLIC_API_URL is required in production to load legal content."
  );
};

export type LegalDocumentType = "PRIVACY_POLICY" | "TERMS_OF_SERVICE";

export interface LegalDocumentContext {
  region: string;
  regionSource: string;
  language: string;
  languageCode: string;
  languageSource: string;
  supportedLanguages: string[];
}

export interface LegalDocumentResponse {
  id: string;
  type: LegalDocumentType;
  title: string;
  version: string;
  language: string;
  region: string;
  summary?: string;
  content: string;
  status: string;
  requiresReAcceptance: boolean;
  effectiveDate: string | null;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  context: LegalDocumentContext;
  isFallback?: boolean;
}

export async function fetchActiveLegalDocument(
  type: LegalDocumentType,
  language: string,
  region?: string
): Promise<LegalDocumentResponse> {
  const baseUrl = resolveApiBaseUrl();
  let url = `${baseUrl}/legal-documents/active/${type}?language=${language}`;
  if (region) {
    url += `&region=${region}`;
  }

  try {
    const response = await fetch(url, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      next: { revalidate: 3600 } // Add some revalidation
    });

    if (!response.ok) {
      console.warn(`API returned ${response.status} for ${type}. Falling back to static content.`);
      return getFallback(type);
    }

    return await response.json();
  } catch (error) {
    console.error(`Fetch failed for ${type}. Falling back to static content:`, error);
    return getFallback(type);
  }
}

function getFallback(type: LegalDocumentType): LegalDocumentResponse {
  const fallback = type === "PRIVACY_POLICY" ? privacyPolicyFallback : termsOfServiceFallback;
  return { ...fallback, isFallback: true };
}
