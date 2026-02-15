"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
	Button,
	Input,
	Label,
	Card,
	CardHeader,
	CardTitle,
	CardContent,
} from "@repo/ui";
import { authApi } from "@/lib/api/auth";
import { useI18n } from "@repo/i18n";
import type { Translations } from "@/lib/types/translations";
import {
	CheckCircle2,
	XCircle,
	Loader2,
	Mail,
	RefreshCw,
	Send,
} from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

function VerifyEmailContent() {
	const { t } = useI18n<Translations>();
	const searchParams = useSearchParams();
	const token = searchParams.get("token") ?? "";
	const [status, setStatus] = useState<Status>(token ? "loading" : "idle");
	const [errorMessage, setErrorMessage] = useState("");

	// Resend logic
	const [showResend, setShowResend] = useState(false);
	const [resendEmail, setResendEmail] = useState("");
	const [resendStatus, setResendStatus] = useState<Status>("idle");
	const [resendMessage, setResendMessage] = useState("");

	const verify = useCallback(async () => {
		if (!token) {
			setStatus("idle");
			return;
		}
		setStatus("loading");
		setErrorMessage("");
		try {
			await authApi.verifyEmail(token);
			setStatus("success");
		} catch (error) {
			setStatus("error");
			setErrorMessage(
				error instanceof Error ? error.message : "Verification failed",
			);
		}
	}, [token]);

	useEffect(() => {
		verify();
	}, [verify]);

	const handleResend = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!resendEmail) return;

		setResendStatus("loading");
		setResendMessage("");
		try {
			await authApi.resendVerificationEmail(resendEmail);
			setResendStatus("success");
			setResendMessage(content.resendSuccess);
		} catch (error) {
			setResendStatus("error");
			setResendMessage(
				error instanceof Error ? error.message : content.resendFailed,
			);
		}
	};

	if (!t || !t.auth?.verifyEmail) return null;

	const content = t.auth.verifyEmail;

	// Render Resend Form
	if (showResend) {
		return (
			<Card className="w-full shadow-2xl border-0 bg-white dark:bg-card/50 backdrop-blur-xl animate-in fade-in zoom-in duration-300">
				<CardHeader className="text-center pb-2">
					<div className="mx-auto w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4">
						<Send className="w-6 h-6 text-brand-primary" />
					</div>
					<CardTitle className="text-xl font-bold">{content.resend}</CardTitle>
					<p className="text-sm text-muted-foreground mt-2">
						{content.resendSubtitle}
					</p>
				</CardHeader>
				<CardContent className="space-y-4">
					{resendMessage && (
						<div
							className={`p-3 rounded-lg text-sm text-center ${resendStatus === "success" ? "bg-green-50 text-green-600 dark:bg-green-900/20" : "bg-red-50 text-red-600 dark:bg-red-900/20"}`}
						>
							{resendMessage}
						</div>
					)}

					<form onSubmit={handleResend} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="email" className="sr-only">
								Email
							</Label>
							<Input
								id="email"
								type="email"
								placeholder={content.emailPlaceholder}
								value={resendEmail}
								onChange={(e) => setResendEmail(e.target.value)}
								disabled={
									resendStatus === "loading" || resendStatus === "success"
								}
								className="bg-muted/50"
							/>
						</div>
						<Button
							type="submit"
							className="w-full"
							disabled={
								resendStatus === "loading" || resendStatus === "success"
							}
						>
							{resendStatus === "loading" ? (
								<Loader2 className="w-4 h-4 animate-spin mr-2" />
							) : null}
							{resendStatus === "success" ? content.sent : content.sendLink}
						</Button>
					</form>

					<Button
						variant="link"
						className="w-full text-sm text-muted-foreground"
						onClick={() => setShowResend(false)}
					>
						{content.back}
					</Button>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card className="w-full shadow-2xl border-0 bg-white dark:bg-card/50 backdrop-blur-xl animate-in fade-in zoom-in duration-500 overflow-hidden">
			<div
				className={`h-2 w-full ${
					status === "success"
						? "bg-green-500"
						: status === "error"
							? "bg-red-500"
							: status === "loading"
								? "bg-brand-primary animate-pulse"
								: "bg-muted"
				}`}
			/>

			<CardContent className="pt-10 pb-8 px-8 flex flex-col items-center text-center gap-6">
				{/* State Icon */}
				<div className="relative">
					<div
						className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 ${
							status === "success"
								? "bg-green-100 text-green-600 dark:bg-green-900/20"
								: status === "error"
									? "bg-red-100 text-red-600 dark:bg-red-900/20"
									: "bg-blue-50 text-brand-primary dark:bg-blue-900/20"
						}`}
					>
						{status === "loading" && (
							<Loader2 className="w-10 h-10 animate-spin" />
						)}
						{status === "success" && <CheckCircle2 className="w-12 h-12" />}
						{status === "error" && <XCircle className="w-12 h-12" />}
						{status === "idle" && <Mail className="w-10 h-10" />}
					</div>
					{status === "success" && (
						<div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-green-500" />
					)}
				</div>

				<div className="space-y-3 max-w-xs">
					<h1 className="text-2xl font-bold tracking-tight">
						{status === "loading"
							? content.verifying
							: status === "success"
								? content.successTitle
								: status === "error"
									? content.errorTitle
									: content.title}
					</h1>

					<p className="text-muted-foreground leading-relaxed text-sm">
						{status === "success"
							? content.successMessage
							: status === "error"
								? errorMessage || content.noToken
								: // Show backend error message
									status === "idle"
									? content.subtitle
									: content.verifyingMessage}
					</p>
				</div>

				{/* Action Buttons */}
				<div className="w-full flex flex-col gap-3 mt-4">
					{status === "success" ? (
						<Button
							className="w-full h-11 text-base shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-all"
							size="lg"
							href="/login"
							variant="primary"
						>
							{content.backToLogin}
						</Button>
					) : (
						<div className="flex flex-col gap-3 w-full">
							{(status === "error" || (status === "idle" && !token)) && (
								<Button
									variant="primary"
									onClick={() => setShowResend(true)}
									className="w-full h-11"
									icon={<RefreshCw className="w-4 h-4 mr-2" />}
								>
									{content.resend}
								</Button>
							)}

							{status === "loading" ? null : (
								<Button
									variant="secondary"
									className="w-full text-muted-foreground hover:text-foreground"
									href="/login"
								>
									{content.backToLogin}
								</Button>
							)}
						</div>
					)}
				</div>
			</CardContent>
		</Card>
	);
}

export default function VerifyEmailPage() {
	return (
		<Suspense
			fallback={
				<div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
					<Loader2 className="w-10 h-10 animate-spin text-brand-primary/50" />
				</div>
			}
		>
			<VerifyEmailContent />
		</Suspense>
	);
}
