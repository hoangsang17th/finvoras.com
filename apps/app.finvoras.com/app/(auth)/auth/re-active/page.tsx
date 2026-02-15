"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button, Input, Label } from "@repo/ui";
import { authApi } from "@/lib/api/auth";
import { useI18n } from "@repo/i18n";
import type { Translations } from "@/lib/types/translations";

type Status = "idle" | "loading" | "success" | "error";

function ReActiveAccountContent() {
	const { t } = useI18n<Translations>();
	const searchParams = useSearchParams();
	const token = searchParams.get("token") ?? "";
	const [status, setStatus] = useState<Status>("idle");
	const [message, setMessage] = useState("");
	const [requestEmail, setRequestEmail] = useState("");
	const [requestStatus, setRequestStatus] = useState<Status>("idle");
	const [requestMessage, setRequestMessage] = useState("");

	const isRestoring = status === "loading";
	const isRequesting = requestStatus === "loading";

	const handleRestore = async () => {
		if (!token) return;
		setStatus("loading");
		setMessage("");
		try {
			await authApi.reactivateAccount(token);
			setStatus("success");
			setMessage(t.auth.reactivateAccount.successMessage);
		} catch (error) {
			setStatus("error");
			setMessage(
				error instanceof Error
					? error.message
					: t.auth.reactivateAccount.errorMessage,
			);
		}
	};

	const handleRequestLink = async (event: React.FormEvent) => {
		event.preventDefault();
		if (!requestEmail) return;
		setRequestStatus("loading");
		setRequestMessage("");
		try {
			await authApi.requestAccountReactivation(requestEmail);
			setRequestStatus("success");
			setRequestMessage(t.auth.reactivateAccount.requestSuccess);
		} catch (error) {
			setRequestStatus("error");
			setRequestMessage(
				error instanceof Error
					? error.message
					: t.auth.reactivateAccount.requestError,
			);
		}
	};

	return (
		<main className="mx-auto flex min-h-[70vh] w-full max-w-2xl flex-col justify-center gap-8 px-4">
			<section className="text-center space-y-4">
				<h1 className="text-3xl font-semibold">
					{t.auth.reactivateAccount.title}
				</h1>
				<p className="text-base text-muted-foreground">
					{t.auth.reactivateAccount.subtitle}
				</p>
				{token ? (
					<p className="rounded-md border border-dashed border-foreground/30 bg-foreground/[0.03] px-4 py-2 text-sm">
						{t.auth.reactivateAccount.confirmingToken}{" "}
						<span className="font-mono break-all">{token}</span>
					</p>
				) : (
					<p className="rounded-md border border-destructive/40 bg-destructive/10 px-4 py-2 text-sm text-destructive">
						{t.auth.reactivateAccount.tokenMissing}
					</p>
				)}

				{message && (
					<p
						className={`text-sm ${
							status === "success" ? "text-brand-success" : "text-brand-red"
						}`}
					>
						{message}
					</p>
				)}

				<Button
					type="button"
					onClick={handleRestore}
					disabled={!token || isRestoring}
					className="mx-auto w-full max-w-xs"
				>
					{isRestoring
						? t.auth.reactivateAccount.restoring
						: t.auth.reactivateAccount.restoreAccount}
				</Button>

				{status === "success" && (
					<p className="text-sm text-muted-foreground">
						{t.auth.reactivateAccount.headTo}{" "}
						<Link href="/login" className="text-brand-primary hover:underline">
							{t.auth.reactivateAccount.loginPage}
						</Link>{" "}
						{t.auth.reactivateAccount.toAccess}
					</p>
				)}
			</section>

			<section className="rounded-xl border border-foreground/10 p-6">
				<h2 className="text-xl font-semibold text-center mb-2">
					{t.auth.reactivateAccount.needNewLink}
				</h2>
				<p className="text-sm text-muted-foreground text-center mb-4">
					{t.auth.reactivateAccount.needNewLinkDescription}
				</p>

				{requestMessage && (
					<p
						className={`text-sm mb-4 ${
							requestStatus === "success"
								? "text-brand-success"
								: "text-brand-red"
						}`}
					>
						{requestMessage}
					</p>
				)}

				<form className="flex flex-col gap-4" onSubmit={handleRequestLink}>
					<Label className="text-sm flex flex-col gap-2">
						{t.auth.reactivateAccount.email}
						<Input
							type="email"
							value={requestEmail}
							onChange={(event) => setRequestEmail(event.target.value)}
							placeholder={t.auth.reactivateAccount.emailPlaceholder}
							disabled={isRequesting}
							required
						/>
					</Label>

					<Button type="submit" disabled={isRequesting}>
						{isRequesting
							? t.auth.reactivateAccount.sending
							: t.auth.reactivateAccount.sendReactivationEmail}
					</Button>
				</form>
			</section>
		</main>
	);
}

export default function ReActiveAccountPage() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ReActiveAccountContent />
		</Suspense>
	);
}
