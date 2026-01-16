"use client";

import { useState } from "react";
import { Button, Input } from "@repo/ui";
import { Send, CheckCircle2 } from "lucide-react";
import { submitToGoogleForm, createGoogleFormConfig } from "@repo/google-forms";
import { env } from "@/lib/env";

// TODO: Update these entry IDs with your actual Google Form entry IDs
// See: packages/google-forms/example-config.ts for detailed instructions
const createContactFormConfig = () => {
  return createGoogleFormConfig({
    formId: env.NEXT_PUBLIC_GOOGLE_FORM_ID!,
    fields: {
      name: "entry.123456789",    // TODO: Replace with your actual name field entry ID
      email: "entry.987654321",   // TODO: Replace with your actual email field entry ID
      message: "entry.222222222",  // TODO: Replace with your actual message field entry ID
    }
  });
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Prepare form data
      const submitData = {
        ...formData,
      };

      const result = await submitToGoogleForm(
        createContactFormConfig(),
        submitData,
        { includeTracking: true } // Enable tracking
      );

      if (result.success) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        });

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
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg text-muted-foreground">
          Have questions about Finvoras? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
        </p>
      </div>

      {submitStatus === "success" ? (
        <div className="py-12 text-center bg-muted/30 rounded-lg">
          <div className="w-16 h-16 bg-brand-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="h-8 w-8 text-brand-success" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            We&apos;ve received your message and will get back to you as soon as possible.
          </p>
          <Button
            variant="secondary"
            onClick={() => setSubmitStatus("idle")}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name <span className="text-destructive">*</span>
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="h-12"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email <span className="text-destructive">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="h-12"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message <span className="text-destructive">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your question or feedback..."
              rows={6}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            />
          </div>



          {submitStatus === "error" && (
            <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md">
              <p className="text-sm text-destructive">
                There was an issue sending your message. Please try again or contact us directly via email at support@finvoras.com.
              </p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 text-base"
          >
            {isSubmitting ? (
              <>
                <span className="h-4 w-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      )}

      <div className="mt-8 p-6 bg-muted/50 rounded-lg">
        <h3 className="font-semibold mb-2">Other ways to reach us:</h3>
        <div className="space-y-1 text-sm text-muted-foreground">
          <p>Email: support@finvoras.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Business hours: Monday - Friday, 9 AM - 6 PM EST</p>
        </div>
      </div>
    </div>
  );
}