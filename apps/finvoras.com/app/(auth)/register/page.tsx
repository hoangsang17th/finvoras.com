"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RegisterForm } from "@/components/auth/register-form";
import { authApi } from "@/lib/api/auth";
import { RegisterRequest } from "@/lib/types";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (userData: RegisterRequest) => {
    setIsLoading(true);
    try {
      await authApi.register(userData);
      router.push("/login?registered=1");
    } catch (error) {
      console.error("Registration failed:", error);
      // Error is handled in the form component
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Join Finvoras</h1>
          <p className="mt-2 text-gray-600">Start your journey to financial freedom</p>
        </div>
        
        <RegisterForm onSubmit={handleRegister} isLoading={isLoading} />
      </div>
    </div>
  );
}
