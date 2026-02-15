import { TooltipProvider, FloatingUtilities } from "@repo/ui";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { transformedTranslations } from "@/lib/i18n";
import "../globals.css";
import { I18nProvider } from "@repo/i18n";
import Script from "next/script";
import { getSiteMetadata } from "@/lib/seo/metadata";
import { getStructuredData } from "@/lib/seo/structured-data";
import LocaleHtml from "@/components/locale-html";
import LocaleLanguageSwitcher from "@/components/locale-language-switcher";
import ScrollRestore from "@/components/scroll-restore";

export const runtime = "edge";

type LayoutProps = Readonly<{
  children: React.ReactNode;
  params: { locale: "en" | "vi" };
}>;

export function generateMetadata({ params }: LayoutProps): Metadata {
  return getSiteMetadata(params.locale);
}

export default function LocaleLayout({ children, params }: LayoutProps) {
  const locale = params.locale === "vi" ? "vi" : "en";
  const structuredData = getStructuredData(locale);

  return (
    <>
      <LocaleHtml lang={locale} />
      <ScrollRestore />
      {/* reCAPTCHA v3 Script - Loaded with lazyOnload to prioritize LCP */}
      {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="lazyOnload"
        />
      )}
      <I18nProvider
        translations={transformedTranslations}
        defaultLocale={locale}
        initialLocale={locale}
        supportedLocales={["en", "vi"]}
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
                <LocaleLanguageSwitcher
                  languages={[
                    { code: "en", name: "English", flag: "🇺🇸" },
                    { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
                  ]}
                  showName={false}
                  variant="switcher"
                  orientation="vertical"
                />
              }
            />
          </TooltipProvider>
        </ThemeProvider>
      </I18nProvider>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
