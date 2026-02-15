import { Metadata } from "next";
import { headers, cookies } from "next/headers";
import { fetchActiveLegalDocument } from "@/lib/api/legal";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { resolveLegalLanguage } from "@/lib/utils/language";
import PageLayout from "@/components/layout/page-layout";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Terms of Service • Finvoras",
		description:
			"Read the terms and conditions for using the Finvoras platform.",
	};
}

export const runtime = "edge";

export default async function TermsPage() {
	const headersList = await headers();
	const cookieStore = await cookies();
	const lang = resolveLegalLanguage(
		headersList.get("accept-language"),
		cookieStore.get("finvoras-locale")?.value,
	);

	const initialDocument = await fetchActiveLegalDocument(
		"TERMS_OF_SERVICE",
		lang,
	);

	async function handleDocumentChangeAction(language: string) {
		"use server";
		return fetchActiveLegalDocument("TERMS_OF_SERVICE", language);
	}

	return (
		<PageLayout>
			<LegalDocument
				initialDocument={initialDocument}
				type="TERMS_OF_SERVICE"
				onDocumentChange={handleDocumentChangeAction}
				currentLanguage={lang}
			/>
		</PageLayout>
	);
}
