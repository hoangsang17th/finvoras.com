"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Button,
  Input,
  Label,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui";
import { authApi } from "@/lib/api/auth";
import { useI18n } from "@repo/i18n";
import type { Translations } from "@/lib/types/translations";

type Status = "idle" | "loading" | "success" | "error";

export default function ForgotPasswordPage() {
  const { t } = useI18n<Translations>();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");
    try {
      await authApi.forgotPassword(email);
      setStatus("success");
      setMessage(t.auth.forgotPassword.successMessage);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : t.auth.forgotPassword.errorMessage
      );
    }
  };

  const isLoading = status === "loading";

  return (
    <Card className="w-full shadow-xl border-0 bg-white dark:bg-card">
      <CardHeader className="space-y-1 text-center pb-8">
        <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold text-white">F</span>
        </div>
        <CardTitle className="text-2xl font-bold text-foreground">
          {t.auth.forgotPassword.title}
        </CardTitle>
        <CardDescription className="text-brand-neutral-600 dark:text-brand-grey-350">
          {t.auth.forgotPassword.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {message && (
          <div
            className={`p-3 rounded-lg border text-sm ${status === "success"
              ? "bg-brand-success/10 border-brand-success/30 text-brand-success"
              : "bg-brand-red/10 border-brand-red/20 text-brand-red"
              }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              {t.auth.forgotPassword.email}
            </Label>
            <Input
              id="email"
              type="email"
              placeholder={t.auth.forgotPassword.emailPlaceholder}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="h-11"
              disabled={isLoading}
              required
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full h-11 text-base font-medium"
            disabled={isLoading}
          >
            {isLoading ? t.auth.forgotPassword.sendingLink : t.auth.forgotPassword.sendResetLink}
          </Button>
        </form>

        <div className="text-center">
          <p className="text-sm text-brand-neutral-600 dark:text-brand-grey-350">
            {t.auth.forgotPassword.rememberedPassword}{" "}
            <Link
              href="/login"
              className="font-medium text-brand-primary hover:text-brand-primary-700 transition-colors"
            >
              {t.auth.forgotPassword.signIn}
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
