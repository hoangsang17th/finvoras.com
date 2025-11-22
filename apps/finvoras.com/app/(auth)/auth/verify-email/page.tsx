"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@repo/ui";
import { authApi } from "@/lib/api/auth";

type Status = "idle" | "loading" | "success" | "error";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";
  const [status, setStatus] = useState<Status>(token ? "loading" : "idle");
  const [message, setMessage] = useState("");

  const verify = useCallback(async () => {
    if (!token) return;
    setStatus("loading");
    setMessage("");
    try {
      await authApi.verifyEmail(token);
      setStatus("success");
      setMessage("Your email has been verified. You can now sign in to Finvoras.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Verification failed. Please try again."
      );
    }
  }, [token]);

  useEffect(() => {
    if (!token) {
      setStatus("idle");
      setMessage("");
      return;
    }

    verify();
  }, [token, verify]);

  const isLoading = status === "loading";

  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-2xl flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-3xl font-semibold">Verify your email</h1>
      <p className="text-base text-muted-foreground">
        We use this page to confirm the verification link we sent to your inbox.
      </p>

      {token ? (
        <p className="rounded-md border border-dashed border-foreground/30 bg-foreground/[0.03] px-4 py-2 text-sm">
          Token detected: <span className="font-mono break-all">{token}</span>
        </p>
      ) : (
        <p className="rounded-md border border-destructive/40 bg-destructive/10 px-4 py-2 text-sm text-destructive">
          We couldn&apos;t find a verification token. Use the latest link we emailed you.
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

      <div className="flex flex-col items-center gap-3">
        <Button
          type="button"
          className="mt-2"
          onClick={verify}
          disabled={!token || isLoading}
        >
          {isLoading ? "Verifying..." : "Verify email"}
        </Button>
        {status === "success" && (
          <Link href="/login" className="text-sm text-brand-primary hover:underline">
            Continue to login
          </Link>
        )}
      </div>
    </main>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailContent />
    </Suspense>
  );
}
