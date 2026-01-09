import { Metadata } from "next";
import { fetchActiveLegalDocument } from "@/lib/api/legal";
import { LegalDocument } from "@/components/legal/LegalDocument";

export const metadata: Metadata = {
    title: "Privacy Policy • Finvoras",
    description: "Learn how Finvoras handles your data and protects your privacy.",
};

export default async function PrivacyPage() {
    const initialDocument = await fetchActiveLegalDocument("PRIVACY_POLICY", "en", "GLOBAL");

    async function handleRegionChangeAction(region: string) {
        "use server";
        return fetchActiveLegalDocument("PRIVACY_POLICY", "en", region);
    }

    return (
        <LegalDocument
            initialDocument={initialDocument}
            type="PRIVACY_POLICY"
            onRegionChange={handleRegionChangeAction}
        />
    );
}
