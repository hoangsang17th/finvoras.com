import { TooltipProvider } from "@repo/ui";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hoang Sang - Software Engineer & Full-Stack Developer",
  description:
    "Hoang Sang's professional resume. Experienced Software Engineer specializing in full-stack development, React, Node.js, and modern web technologies.",
  keywords: [
    "Hoang Sang",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Node.js",
    "TypeScript",
    "Web Development",
    "Resume",
    "Portfolio",
    "JavaScript",
    "Frontend",
    "Backend",
  ],
  openGraph: {
    type: "website",
    siteName: "Hoang Sang - Software Engineer",
    locale: "en_US",
    url: "https://author.finvoras.com",
    title: "Hoang Sang - Software Engineer & Full-Stack Developer",
    description:
      "Hoang Sang's professional resume. Experienced Software Engineer specializing in full-stack development, React, Node.js, and modern web technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hoang Sang - Software Engineer Resume",
      },
    ],
  },
  authors: [
    {
      name: "Hoang Sang",
      url: "https://author.finvoras.com",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
