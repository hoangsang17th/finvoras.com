import { createHttpClient } from "./client";
import { API_ENDPOINTS } from "./endpoints";
import { formatLanguageForBackend } from "../utils/language";

export type LegalDocumentType = "PRIVACY_POLICY" | "TERMS_OF_SERVICE";

export const LANGUAGE_LABELS: Record<string, string> = {
  en: "English",
  vi: "Tiếng Việt",
  id: "Bahasa Indonesia",
  th: "ไทย",
  de: "Deutsch",
  fr: "Français",
};

export type LegalLanguage = string;

export interface LegalDocumentContext {
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

// Create a shared HttpClient for legal documents
const legalHttpClient = createHttpClient();

export async function fetchActiveLegalDocument(
  type: LegalDocumentType,
  language: string
): Promise<LegalDocumentResponse | null> {
  const endpoint = API_ENDPOINTS.LEGAL.ACTIVE_DOCUMENT(type);

  try {
    const response = await legalHttpClient.get<LegalDocumentResponse>(endpoint, {
      params: {
        language: formatLanguageForBackend(language),
        region: "GLOBAL",
      },
    });

    return response.data;
  } catch (error) {
    console.error(`Fetch failed for ${type}:`, error);
    return null;
  }
}
