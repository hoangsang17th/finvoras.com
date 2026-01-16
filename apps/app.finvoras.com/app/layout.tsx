import { TooltipProvider } from "@repo/ui";
import Script from "next/script";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Be_Vietnam_Pro } from "next/font/google";
import { I18nProvider, LanguageSwitcher } from "@repo/i18n";
import { FloatingUtilities } from "@repo/ui";
import translations from "@/lib/translations";
import { env } from "@/lib/env";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Finvoras - Smart Personal Finance Management",
  description:
    "Take control of your finances with Finvoras. Track expenses, manage budgets, and build wealth with personalized insights and financial education.",
  keywords: [
    "Finvoras",
    "Personal Finance",
    "Budget Management",
    "Expense Tracking",
    "Financial Planning",
    "Money Management App",
    "Financial Education",
    "Wealth Building",
    "Financial Health",
    "Budget App",
    "Expense App",
    "Finance Tracker",
  ],
  openGraph: {
    type: "website",
    siteName: "Finvoras",
    locale: "en_US",
    url: "https://finvoras.com",
    title: "Finvoras - Smart Personal Finance Management",
    description:
      "Take control of your finances with Finvoras. Track expenses, manage budgets, and build wealth with personalized insights and financial education.",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Finvoras - Personal Finance Management",
      },
    ],
  },
  authors: [
    {
      name: "Finvoras Team",
      url: "https://finvoras.com",
    },
  ],
  creator: "Finvoras Team",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
  robots: {
    index: false,
    follow: false,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* reCAPTCHA v3 Script */}
      </head>
      <body className={`${beVietnamPro.className} antialiased`}>
        {env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            strategy="lazyOnload"
          />
        )}
        <I18nProvider
          translations={translations}
          defaultLocale="en"
          supportedLocales={["en", "vi"]}
          storageKey="finvoras-locale"
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="app.finvoras.com-theme"
          >
            <TooltipProvider>
              <main>
                {children}
              </main>
              <FloatingUtilities
                languageSwitcher={
                  <LanguageSwitcher
                    languages={[
                      { code: 'en', name: 'English', flag: '🇺🇸' },
                      { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' }
                    ]}
                    showName={false}
                    variant="switcher"
                    orientation='vertical'
                  />}
              />   </TooltipProvider>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
