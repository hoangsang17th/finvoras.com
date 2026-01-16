"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button, Input, Label } from "@repo/ui";
import { authApi } from "@/lib/api/auth";
import { useI18n } from "@repo/i18n";
import type { Translations } from "@/lib/types/translations";

type Status = "idle" | "loading" | "success" | "error";

function ResetPasswordContent() {
  const { t } = useI18n<Translations>();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const isDisabled =
    !token || !password || password !== confirmPassword || status === "loading";

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isDisabled) return;

    setStatus("loading");
    setMessage("");
    try {
      await authApi.resetPassword(token, password);
      setStatus("success");
      setPassword("");
      setConfirmPassword("");
      setMessage(t.auth.resetPassword.successMessage);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : t.auth.resetPassword.errorMessage
      );
    }
  };

  return (
    <main className="w-full flex flex-col justify-center gap-6">
      <header className="text-center">
        <p className="text-sm text-muted-foreground">{t.auth.resetPassword.title}</p>
        <h1 className="text-3xl font-semibold">{t.auth.resetPassword.subtitle}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t.auth.resetPassword.description}
        </p>
      </header>

      {!token && (
        <p className="rounded-md border border-destructive/40 bg-destructive/10 px-4 py-2 text-sm text-destructive">
          {t.auth.resetPassword.tokenMissing}
        </p>
      )}

      {message && (
        <p
          className={`text-sm ${status === "success" ? "text-brand-success" : "text-brand-red"
            }`}
        >
          {message}
        </p>
      )}

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Label className="flex flex-col gap-2 text-left text-sm">
          {t.auth.resetPassword.newPassword}
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder={t.auth.resetPassword.passwordPlaceholder}
            disabled={status === "loading"}
          />
        </Label>

        <Label className="flex flex-col gap-2 text-left text-sm">
          {t.auth.resetPassword.confirmPassword}
          <Input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder={t.auth.resetPassword.passwordPlaceholder}
            disabled={status === "loading"}
          />
        </Label>

        <Button type="submit" className="mt-2" disabled={isDisabled}>
          {status === "loading" ? t.auth.resetPassword.updating : t.auth.resetPassword.updatePassword}
        </Button>

        {token && (
          <p className="text-center text-xs text-muted-foreground">
            {t.auth.resetPassword.resetToken} <span className="font-mono break-all">{token}</span>
          </p>
        )}
      </form>

      {status === "success" && (
        <p className="text-center text-sm">
          {t.auth.resetPassword.backToLogin}{" "}
          <Link href="/login" className="text-brand-primary hover:underline">
            {t.auth.resetPassword.loginPage}
          </Link>{" "}
          {t.auth.resetPassword.toAccessAccount}
        </p>
      )}
    </main>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
