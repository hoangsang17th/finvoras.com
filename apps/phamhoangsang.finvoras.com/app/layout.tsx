import { TooltipProvider, FloatingUtilities } from "@repo/ui";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Be_Vietnam_Pro } from "next/font/google";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";
import { LanguageSwitcher } from "@repo/i18n";

import { cookies } from "next/headers";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Phạm Hoàng Sang - Software Engineer",
  description: "Phạm Hoàng Sang&apos;s professional resume.",
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
      <body className={beVietnamPro.className}>
        <I18nProvider>
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
