import { TooltipProvider, FloatingUtilities } from "@repo/ui";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Be_Vietnam_Pro } from "next/font/google";
import { transformedTranslations } from "@/lib/i18n";
import "./globals.css";
import { I18nProvider, LanguageSwitcher } from "@repo/i18n";
import Script from "next/script";

import { cookies } from "next/headers";

export const runtime = 'edge';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Phạm Hoàng Sang | Flutter Engineer & Founder of Finvoras",
  description: "Software Engineer specializing in Flutter and building scalable mobile products. Founder of Finvoras, empowering financial freedom for the next generation.",
  keywords: [
    "Phạm Hoàng Sang",
    "Flutter Engineer",
    "Mobile App Developer",
    "Software Engineer Portfolio",
    "Finvoras Founder",
    "Software Architecture",
    "Scalable Mobile Apps",
    "Vietnam Tech",
  ],
  openGraph: {
    title: "Phạm Hoàng Sang | Flutter Engineer",
    description: "Software Engineer specializing in Flutter and building scalable mobile products.",
    url: "https://phamhoangsang.finvoras.com",
    siteName: "Phạm Hoàng Sang Portfolio",
    locale: "en_US",
    type: "website",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phạm Hoàng Sang | Flutter Engineer",
    description: "Software Engineer specializing in Flutter and building scalable mobile products.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico?v=4",
    shortcut: "/favicon.ico?v=4",
    apple: "/logo.png",
  },
  other: {
    "link:preload": "/logo.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = "en";

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body className={beVietnamPro.className}>
        {/* reCAPTCHA v3 Script - Loaded with lazyOnload to prioritize LCP */}
        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            strategy="lazyOnload"
          />
        )}
        <I18nProvider
          translations={transformedTranslations}
          defaultLocale="en"
          supportedLocales={['en', 'vi']}
          storageKey="portfolio-locale"
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange={false}
            storageKey="portfolio.finvoras.com-theme"
          >
            <TooltipProvider>
              {children}
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
              />
            </TooltipProvider>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
