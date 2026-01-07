import { TooltipProvider, FloatingUtilities } from "@repo/ui";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Be_Vietnam_Pro } from "next/font/google";
import { transformedTranslations } from "@/lib/i18n";
import "./globals.css";
import { I18nProvider, LanguageSwitcher } from "@repo/i18n";

import { cookies } from "next/headers";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Flutter Engineer | Software Engineer building scalable mobile products",
  description: "Phạm Hoàng Sang&apos;s professional resume.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("portfolio-locale")?.value || "en") as 'en' | 'vi';

  return (
    <html lang={locale} suppressHydrationWarning>
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
