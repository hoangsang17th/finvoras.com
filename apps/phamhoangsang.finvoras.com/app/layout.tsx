import { TooltipProvider } from "@repo/ui";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import { LanguageProvider } from "@/lib/contexts/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hoang Sang - Software Engineer & Full-Stack Developer",
  description: "Hoang Sang&apos;s professional resume.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geistSans.className}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange={false}
            storageKey="portfolio.finvoras.com-theme"
          >
            <TooltipProvider>
              {children}
            </TooltipProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
