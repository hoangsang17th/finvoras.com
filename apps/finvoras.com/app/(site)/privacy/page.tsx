import { Metadata } from "next";
import { headers, cookies } from "next/headers";
import { fetchActiveLegalDocument } from "@/lib/api/legal";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { resolveLegalLanguage } from "@/lib/utils/language";


export async function generateMetadata(): Promise<Metadata> {
    const headersList = await headers();
    const cookieStore = await cookies();
    const lang = resolveLegalLanguage(
        headersList.get("accept-language"),
        cookieStore.get("finvoras-locale")?.value
    );

    return {
        title: 'Privacy Policy • Finvoras',
        description: 'Learn how Finvoras handles your data and protects your privacy.',
    };
}

export const runtime = 'edge';

import PageLayout from "@/components/layout/page-layout";

export default async function PrivacyPage() {
    const headersList = await headers();
    const cookieStore = await cookies();
    const lang = resolveLegalLanguage(
        headersList.get("accept-language"),
        cookieStore.get("finvoras-locale")?.value
    );

    const initialDocument = await fetchActiveLegalDocument("PRIVACY_POLICY", lang);

    async function handleDocumentChangeAction(language: string) {
        "use server";
        return fetchActiveLegalDocument("PRIVACY_POLICY", language);
    }

    return (
        <PageLayout>
            <LegalDocument
                initialDocument={initialDocument}
                type="PRIVACY_POLICY"
                onDocumentChange={handleDocumentChangeAction}
                currentLanguage={lang}
            />
        </PageLayout>
    );
}
