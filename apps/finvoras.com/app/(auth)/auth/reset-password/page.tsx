"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button, Input, Label } from "@repo/ui";
import { authApi } from "@/lib/api/auth";

type Status = "idle" | "loading" | "success" | "error";

function ResetPasswordContent() {
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
      setMessage("Password updated. You can now sign in with your new credentials.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Password reset failed. Please try again."
      );
    }
  };

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-lg flex-col justify-center gap-6 px-4">
      <header className="text-center">
        <p className="text-sm text-muted-foreground">Reset your password</p>
        <h1 className="text-3xl font-semibold">Choose a new password</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Your new password must be different from the previous one and include uppercase,
          lowercase, number, and special characters.
        </p>
      </header>

      {!token && (
        <p className="rounded-md border border-destructive/40 bg-destructive/10 px-4 py-2 text-sm text-destructive">
          Reset token missing. Please reopen the link from the password reset email.
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
          New password
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="••••••••"
            disabled={status === "loading"}
          />
        </Label>

        <Label className="flex flex-col gap-2 text-left text-sm">
          Confirm password
          <Input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="••••••••"
            disabled={status === "loading"}
          />
        </Label>

        <Button type="submit" className="mt-2" disabled={isDisabled}>
          {status === "loading" ? "Updating..." : "Update password"}
        </Button>

        {token && (
          <p className="text-center text-xs text-muted-foreground">
            Reset token: <span className="font-mono break-all">{token}</span>
          </p>
        )}
      </form>

      {status === "success" && (
        <p className="text-center text-sm">
          Head back to{" "}
          <Link href="/login" className="text-brand-primary hover:underline">
            the login page
          </Link>{" "}
          to access your account.
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
