"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Input, Label, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui";
import { RegisterRequest } from "@/lib/types";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useI18n } from "@repo/i18n";
import type { Translations } from "@/lib/types/translations";

interface RegisterFormProps {
  onSubmit: (data: RegisterRequest) => Promise<void>;
  isLoading?: boolean;
}

export function RegisterForm({ onSubmit, isLoading = false }: RegisterFormProps) {
  const { t } = useI18n<Translations>();
  const [formData, setFormData] = useState<RegisterRequest>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptLegalDocuments: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const newErrors: Record<string, string> = {};
    if (!formData.fullName) newErrors.fullName = t.auth.register.fullNameRequired;
    if (!formData.email) newErrors.email = t.auth.register.emailRequired;
    if (!formData.password) newErrors.password = t.auth.register.passwordRequired;
    if (!formData.confirmPassword) newErrors.confirmPassword = t.auth.register.confirmPasswordRequired;
    if (!formData.email.includes("@")) newErrors.email = t.auth.register.validEmailRequired;
    if (formData.password.length < 8) newErrors.password = t.auth.register.passwordMinLength;
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t.auth.register.passwordsDoNotMatch;
    }
    if (!agreeToTerms) newErrors.terms = t.auth.register.termsRequired;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await onSubmit({ ...formData, acceptLegalDocuments: agreeToTerms });
    } catch {
      setErrors({ general: t.auth.register.registrationFailed });
    }
  };

  const handleChange = (field: keyof RegisterRequest) => (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <CardTitle className="text-2xl font-bold text-foreground">{t.auth.register.cardTitle}</CardTitle>
        <CardDescription className="text-brand-neutral-600 dark:text-brand-grey-350">
          {t.auth.register.cardDescription}
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
            <Label htmlFor="name" className="text-sm font-medium text-foreground">
              {t.auth.register.fullName}
            </Label>
            <Input
              id="name"
              type="text"
              placeholder={t.auth.register.fullNamePlaceholder}
              value={formData.fullName}
              onChange={handleChange("fullName")}
              className="h-11"
              disabled={isLoading}
            />
            {errors.fullName && <p className="text-sm text-brand-red">{errors.fullName}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              {t.auth.register.email}
            </Label>
            <Input
              id="email"
              type="email"
              placeholder={t.auth.register.emailPlaceholder}
              value={formData.email}
              onChange={handleChange("email")}
              className="h-11"
              disabled={isLoading}
            />
            {errors.email && <p className="text-sm text-brand-red">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-foreground">
              {t.auth.register.password}
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder={t.auth.register.passwordPlaceholder}
                value={formData.password}
                onChange={handleChange("password")}
                className="h-11 pr-10"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brand-neutral-500"
                disabled={isLoading}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.password && <p className="text-sm text-brand-red">{errors.password}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
              {t.auth.register.confirmPassword}
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder={t.auth.register.confirmPasswordPlaceholder}
                value={formData.confirmPassword}
                onChange={handleChange("confirmPassword")}
                className="h-11 pr-10"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brand-neutral-500"
                disabled={isLoading}
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-sm text-brand-red">{errors.confirmPassword}</p>}
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <input
                id="terms"
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => {
                  setAgreeToTerms(e.target.checked);
                  setFormData(prev => ({ ...prev, acceptLegalDocuments: e.target.checked }));
                }}
                className="h-4 w-4 text-brand-primary rounded mt-0.5"
              />
              <Label htmlFor="terms" className="text-sm text-brand-neutral-600 leading-5">
                {t.auth.register.termsPrefix}{" "}
                <Link href="/terms" className="text-brand-primary font-medium">
                  {t.auth.register.termsLink}
                </Link>{" "}
                {t.auth.register.termsAnd}{" "}
                <Link href="/privacy" className="text-brand-primary font-medium">
                  {t.auth.register.privacyLink}
                </Link>
              </Label>
            </div>
            {errors.terms && <p className="text-sm text-brand-red">{errors.terms}</p>}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full h-11 text-base font-medium"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t.auth.register.creatingAccount}
              </>
            ) : (
              t.auth.register.createAccount
            )}
          </Button>
        </form>

        <div className="text-center pt-4 border-t">
          <p className="text-sm text-brand-neutral-600">
            {t.auth.register.alreadyHaveAccount}{" "}
            <Link href="/login" className="font-medium text-brand-primary">
              {t.auth.register.signIn}
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
