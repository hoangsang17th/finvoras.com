"use client";

import { useState } from "react";
import { Card, Button, Input, Label } from "@repo/ui";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { submitToGoogleForm, createGoogleFormConfig } from "@repo/google-forms";

// See: packages/google-forms/example-config.ts for detailed instructions
const createContactFormConfig = () => {
  return createGoogleFormConfig({
    fields: {
      name: "entry.1162529122",
      email: "entry.318983509",
      message: "entry.1167308503",
    }
  });
};

const Contact = () => {
  const { resumeData } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>
              <p className="text-muted-foreground mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello,
                I&apos;d love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <Link
                    href={`mailto:${personalInfo.email}`}
                    className="text-muted-foreground hover:text-brand-primary transition-colors"
                  >
                    {personalInfo.email}
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <Link
                    href={`tel:${personalInfo.phone}`}
                    className="text-muted-foreground hover:text-brand-primary transition-colors"
                  >
                    {personalInfo.phone}
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <div className="font-medium">Location</div>
                  <span className="text-muted-foreground">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks?.github && (
                  <Button variant="secondary" size="icon" className="rounded-full" asChild>
                    <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                )}
                {socialLinks?.linkedin && (
                  <Button variant="secondary" size="icon" className="rounded-full" asChild>
                    <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                )}
                {socialLinks?.twitter && (
                  <Button variant="secondary" size="icon" className="rounded-full" asChild>
                    <Link href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Availability */}
            <Card className="p-6 bg-brand-primary/5 border-brand-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-brand-success rounded-full animate-pulse" />
                <span className="font-medium text-brand-primary">Available for Work</span>
              </div>
              <p className="text-sm text-muted-foreground">
                I&apos;m currently open to full-time opportunities and interesting freelance projects.
                Let&apos;s discuss how we can work together!
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>

            {submitStatus === "success" ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-brand-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-brand-success" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSubmitStatus("idle");
                    setFormData({ name: "", email: "", message: "" });
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <form
                  className="space-y-6"
                  onSubmit={async (e) => {
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
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <textarea
                      id="message"
                      className="w-full min-h-[120px] px-3 py-2 border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md resize-none"
                      placeholder="Tell me about your project or just say hello!"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      disabled={isSubmitting}
                    />
                  </div>



                  {submitStatus === "error" && (
                    <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md">
                      <p className="text-sm text-destructive">
                        There was an issue sending your message. Please try again or contact me directly via email.
                      </p>
                    </div>
                  )}

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
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

                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-muted-foreground text-center">
                    I typically respond within 24 hours. Looking forward to hearing from you!
                  </p>
                </div>
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;