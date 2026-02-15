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
  params: Promise<{ locale: string }>;
}>;

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  return getSiteMetadata(locale === "vi" ? "vi" : "en");
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  const resolvedLocale = locale === "vi" ? "vi" : "en";
  const structuredData = getStructuredData(resolvedLocale);

  return (
    <>
      <LocaleHtml lang={resolvedLocale} />
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
        defaultLocale={resolvedLocale}
        initialLocale={resolvedLocale}
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
