import { Metadata } from "next";
import { fetchActiveLegalDocument } from "@/lib/api/legal";
import { LegalDocument } from "@/components/legal/LegalDocument";

export const metadata: Metadata = {
    title: "Terms of Service • Finvoras",
    description: "Read the terms and conditions for using the Finvoras platform.",
};

export default async function TermsPage() {
    const initialDocument = await fetchActiveLegalDocument("TERMS_OF_SERVICE", "en", "GLOBAL");

    async function handleRegionChangeAction(region: string) {
        "use server";
        return fetchActiveLegalDocument("TERMS_OF_SERVICE", "en", region);
    }

    return (
        <LegalDocument
            initialDocument={initialDocument}
            type="TERMS_OF_SERVICE"
            onRegionChange={handleRegionChangeAction}
        />
    );
}
