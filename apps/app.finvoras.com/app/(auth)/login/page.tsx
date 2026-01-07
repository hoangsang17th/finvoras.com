"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginForm } from "@/components/auth/login-form";
import { authApi } from "@/lib/api/auth";
import { LoginRequest } from "@/lib/types";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (credentials: LoginRequest) => {
    setIsLoading(true);
    try {
      await authApi.login(credentials);
      // Redirect to dashboard or home page after successful login
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      // Error is handled in the form component
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-primary/5 via-background to-brand-success/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
      </div>
    </div>
  );
}