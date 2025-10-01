"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginRequest } from "@/lib/types";
import { Eye, EyeOff, Loader2 } from "lucide-react";

interface LoginFormProps {
  onSubmit: (data: LoginRequest) => Promise<void>;
  isLoading?: boolean;
}

export function LoginForm({ onSubmit, isLoading = false }: LoginFormProps) {
  const [formData, setFormData] = useState<LoginRequest>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Basic validation
    const newErrors: Record<string, string> = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await onSubmit(formData);
    } catch {
      setErrors({ general: "Login failed. Please check your credentials and try again." });
    }
  };

  const handleChange = (field: keyof LoginRequest) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <Card className="w-full shadow-xl border-0 bg-white dark:bg-card">
      <CardHeader className="space-y-1 text-center pb-8">
        <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold text-white">F</span>
        </div>
        <CardTitle className="text-2xl font-bold text-foreground">Welcome back</CardTitle>
        <CardDescription className="text-brand-neutral-600 dark:text-brand-grey-350">
          Sign in to your Finvoras account to continue managing your finances
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {errors.general && (
          <div className="p-3 rounded-lg bg-brand-red/10 border border-brand-red/20 text-brand-red text-sm">
            {errors.general}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange("email")}
              className={`h-11 ${errors.email ? 'border-brand-red focus:border-brand-red' : 'focus:border-brand-primary'}`}
              disabled={isLoading}
            />
            {errors.email && <p className="text-sm text-brand-red">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-foreground">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange("password")}
                className={`h-11 pr-10 ${errors.password ? 'border-brand-red focus:border-brand-red' : 'focus:border-brand-primary'}`}
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brand-neutral-500 hover:text-brand-neutral-700 dark:text-brand-grey-400 dark:hover:text-brand-grey-300"
                disabled={isLoading}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.password && <p className="text-sm text-brand-red">{errors.password}</p>}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-brand-neutral-300 rounded"
              />
              <Label htmlFor="remember" className="text-sm text-brand-neutral-600 dark:text-brand-grey-350">
                Remember me
              </Label>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-brand-primary hover:text-brand-primary-700 transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            variant="brand"
            size="lg"
            className="w-full h-11 text-base font-medium"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </Button>
        </form>

        <div className="text-center pt-4 border-t border-brand-neutral-200 dark:border-brand-grey-700">
          <p className="text-sm text-brand-neutral-600 dark:text-brand-grey-350">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-brand-primary hover:text-brand-primary-700 transition-colors"
            >
              Sign up for free
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}