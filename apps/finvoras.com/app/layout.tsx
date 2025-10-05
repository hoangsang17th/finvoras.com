import { TooltipProvider } from "@repo/ui";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import { I18nProvider } from "@repo/i18n";
import { Navbar } from "@/components/navbar";
import { translations } from "@/lib/data/translations";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
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
    index: true,
    follow: true,
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
        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
          <script
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            async
            defer
          />
        )}
      </head>
      <body className={`${geistSans.className} antialiased`}>
        <I18nProvider
          translations={translations}
          defaultLocale="en"
          supportedLocales={["en", "vi"]}
          storageKey="finvoras-locale"
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <TooltipProvider>
              <Navbar />
              <main className="pt-16 xs:pt-20 sm:pt-24">
                {children}
              </main>
            </TooltipProvider>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
