"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginForm } from "@/components/auth/login-form";
import { authApi } from "@/lib/api/auth";
import { LoginRequest } from "@/lib/types";

export function LoginContent() {
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

	return <LoginForm onSubmit={handleLogin} isLoading={isLoading} />;
}
