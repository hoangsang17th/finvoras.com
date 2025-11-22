"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button, Input, Label } from "@repo/ui";
import { authApi } from "@/lib/api/auth";

type Status = "idle" | "loading" | "success" | "error";

function ReActiveAccountContent() {
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
      setMessage("Your account has been re-activated successfully.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We couldn’t re-activate your account. Please try again."
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
      setRequestMessage(
        "If this email is eligible, a new reactivation link is on its way."
      );
    } catch (error) {
      setRequestStatus("error");
      setRequestMessage(
        error instanceof Error ? error.message : "Unable to send reactivation email."
      );
    }
  };

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-2xl flex-col justify-center gap-8 px-4">
      <section className="text-center space-y-4">
        <h1 className="text-3xl font-semibold">Restore your account</h1>
        <p className="text-base text-muted-foreground">
          Follow this step only if you requested the reactivation email.
        </p>
        {token ? (
          <p className="rounded-md border border-dashed border-foreground/30 bg-foreground/[0.03] px-4 py-2 text-sm">
            Confirming session token: <span className="font-mono break-all">{token}</span>
          </p>
        ) : (
          <p className="rounded-md border border-destructive/40 bg-destructive/10 px-4 py-2 text-sm text-destructive">
            Re-activation token missing. Please reopen the link from the latest email or
            request a new one below.
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

        <Button
          type="button"
          onClick={handleRestore}
          disabled={!token || isRestoring}
          className="mx-auto w-full max-w-xs"
        >
          {isRestoring ? "Restoring..." : "Restore account"}
        </Button>

        {status === "success" && (
          <p className="text-sm text-muted-foreground">
            Head to{" "}
            <Link href="/login" className="text-brand-primary hover:underline">
              the login page
            </Link>{" "}
            to access Finvoras.
          </p>
        )}
      </section>

      <section className="rounded-xl border border-foreground/10 p-6">
        <h2 className="text-xl font-semibold text-center mb-2">Need a new link?</h2>
        <p className="text-sm text-muted-foreground text-center mb-4">
          Enter your account email and we&apos;ll send instructions to start the reactivation
          process again.
        </p>

        {requestMessage && (
          <p
            className={`text-sm mb-4 ${requestStatus === "success" ? "text-brand-success" : "text-brand-red"
              }`}
          >
            {requestMessage}
          </p>
        )}

        <form className="flex flex-col gap-4" onSubmit={handleRequestLink}>
          <Label className="text-sm flex flex-col gap-2">
            Email
            <Input
              type="email"
              value={requestEmail}
              onChange={(event) => setRequestEmail(event.target.value)}
              placeholder="you@example.com"
              disabled={isRequesting}
              required
            />
          </Label>

          <Button type="submit" disabled={isRequesting}>
            {isRequesting ? "Sending..." : "Send reactivation email"}
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
