"use client";

import { useState, useMemo, useCallback } from "react";
import { Card, Button, Input, Label, TextLink } from "@repo/ui";
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { submitToGoogleForm, createGoogleFormConfig } from "@repo/google-forms";

// Types
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = "idle" | "success" | "error";

interface ContactInfoProps {
  personalInfo: {
    email: string;
    phone: string;
    location: string;
  };
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

// Constants
const FORM_CONFIG = createGoogleFormConfig({
  fields: {
    name: "entry.1162529122",
    email: "entry.318983509",
    message: "entry.1167308503",
  }
});

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

// Custom hook for form logic
const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const updateFormField = useCallback((field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
    setSubmitStatus("idle");
  }, []);

  const submitForm = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await submitToGoogleForm(
        FORM_CONFIG,
        formData as unknown as Record<string, string>,
        { includeTracking: true }
      );

      if (result.success) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
        console.error("Form submission error:", result.error);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  return {
    formData,
    isSubmitting,
    submitStatus,
    updateFormField,
    resetForm,
    submitForm,
  };
};

// Contact Info Component
const ContactInfo = ({ personalInfo, socialLinks, ui }: ContactInfoProps & { ui: any }) => {
  const contactItems = useMemo(() => [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: ui.ui.contact.phone,
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: ui.ui.contact.location,
      value: personalInfo.location,
    },
  ], [personalInfo, ui]);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-6">{ui.ui.contact.letsConnect}</h3>
        <p className="text-muted-foreground mb-8">
          {ui.ui.contact.connectDescription}
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-6">
        {contactItems.map(({ icon: Icon, label, value, href }) => (
          <div key={label} className="flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center">
              <Icon className="h-6 w-6 text-brand-primary" />
            </div>
            <div>
              <div className="font-medium">{label}</div>
              {href ? (
                <TextLink href={href} external>
                  {value}
                </TextLink>
              ) : (
                <span className="text-muted-foreground">{value}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Success Message Component
const SuccessMessage = ({ onReset, ui }: { onReset: () => void; ui: any }) => (
  <div className="py-12 text-center">
    <div className="w-16 h-16 bg-brand-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
      <CheckCircle2 className="h-8 w-8 text-brand-success" />
    </div>
    <h4 className="text-xl font-semibold mb-2">{ui.ui.contact.messageSent}</h4>
    <p className="text-muted-foreground mb-6">
      {ui.ui.contact.messageSentDescription}
    </p>
    <Button variant="secondary" onClick={onReset} fullWidth className="mb-4">
      {ui.ui.actions.sendAnotherMessage}
    </Button>
  </div>
);

// Contact Form Component
interface ContactFormProps {
  formData: ContactFormData;
  isSubmitting: boolean;
  submitStatus: SubmitStatus;
  onFieldChange: (field: keyof ContactFormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  ui: any;
}

const ContactForm = ({
  formData,
  isSubmitting,
  submitStatus,
  onFieldChange,
  onSubmit,
  ui
}: ContactFormProps) => (
  <form className="space-y-6" onSubmit={onSubmit}>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="name">
          {ui.ui.form.name} <span className="text-destructive">{ui.ui.form.contactRequired}</span>
        </Label>
        <Input
          id="name"
          placeholder={ui.ui.form.namePlaceholder}
          required
          value={formData.name}
          onChange={(e) => onFieldChange("name", e.target.value)}
          disabled={isSubmitting}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">
          {ui.ui.form.email} <span className="text-destructive">{ui.ui.form.contactRequired}</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder={ui.ui.form.emailPlaceholder}
          required
          value={formData.email}
          onChange={(e) => onFieldChange("email", e.target.value)}
          disabled={isSubmitting}
        />
      </div>
    </div>

    <div className="space-y-2">
      <Label htmlFor="message">
        {ui.ui.form.message} <span className="text-destructive">{ui.ui.form.contactRequired}</span>
      </Label>
      <textarea
        id="message"
        className="w-full min-h-[120px] px-3 py-2 border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md resize-none"
        placeholder={ui.ui.form.messagePlaceholderLong}
        required
        value={formData.message}
        onChange={(e) => onFieldChange("message", e.target.value)}
        disabled={isSubmitting}
      />
    </div>

    {submitStatus === "error" && (
      <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md">
        <p className="text-sm text-destructive">
          {ui.ui.actions.errorMessage}
        </p>
      </div>
    )}

    <Button
      type="submit"
      fullWidth
      disabled={isSubmitting}
      icon={
        isSubmitting ?
          <Loader2 className="h-4 w-4 animate-spin" /> :
          <Send className="h-4 w-4" />
      }
    >
      {isSubmitting ? ui.ui.actions.sending : ui.ui.actions.send}
    </Button>
  </form>
);

// Main Contact Component
const Contact = () => {
  const { resumeData, ui } = useI18n();
  const {
    formData,
    isSubmitting,
    submitStatus,
    updateFormField,
    resetForm,
    submitForm,
  } = useContactForm();

  const memoizedContent = useMemo(() => {
    if (!resumeData) {
      return <div className="py-20 px-6">Loading...</div>;
    }

    const { personalInfo, socialLinks } = resumeData;

    return (
      <div className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
              {ui.sections.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {ui.sections.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <ContactInfo personalInfo={personalInfo} socialLinks={socialLinks} ui={ui} />

            {/* Contact Form */}
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-6">{ui.ui.actions.send}</h3>

              {submitStatus === "success" ? (
                <SuccessMessage onReset={resetForm} ui={ui} />
              ) : (
                <>
                  <ContactForm
                    formData={formData}
                    isSubmitting={isSubmitting}
                    submitStatus={submitStatus}
                    onFieldChange={updateFormField}
                    onSubmit={submitForm}
                    ui={ui}
                  />

                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm text-muted-foreground text-center">
                      {ui.ui.contact.responseTime}
                    </p>
                  </div>
                </>
              )}
            </Card>
          </div>
        </div>
      </div>
    );
  }, [resumeData, formData, isSubmitting, submitStatus, updateFormField, resetForm, submitForm]);

  return memoizedContent;
};

export default Contact;