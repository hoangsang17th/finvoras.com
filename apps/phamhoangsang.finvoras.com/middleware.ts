import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "vi"];
const defaultLocale = "vi";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip public files (e.g. /logo.png, /avatar.jpg, /resume.pdf)
  if (/\.[^/]+$/.test(pathname)) {
    return NextResponse.next();
  }

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml")
  ) {
    return NextResponse.next();
  }

  const isLocalePath = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (!isLocalePath) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)"],
};
