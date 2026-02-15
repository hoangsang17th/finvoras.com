import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	// Check if Coming Soon mode is enabled
	const isComingSoon = process.env.NEXT_PUBLIC_IS_COMING_SOON === "true";

	// If we are on coming-soon page but mode is disabled, return 404
	if (!isComingSoon && pathname === "/coming-soon") {
		return NextResponse.rewrite(new URL("/404", request.url));
	}

	// If not coming soon, allow all requests
	if (!isComingSoon) {
		return NextResponse.next();
	}

	// Paths to always allow
	const allowedPaths = [
		"/coming-soon",
		"/privacy",
		"/terms",
		"/_next",
		"/api",
		"/favicon.ico",
		"/logo.png",
		"/robots.txt",
		"/sitemap.xml",
		"/images",
		"/preview.png",
		"/apple-touch-icon.png",
		"/site.webmanifest",
		"/.well-known",
	];

	// Check if path is allowed
	const isAllowed = allowedPaths.some((path) => pathname.startsWith(path));

	// If coming soon is enabled and path is not allowed, redirect to coming soon
	if (isComingSoon && !isAllowed) {
		return NextResponse.redirect(new URL("/coming-soon", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		"/((?!api|_next/static|_next/image|favicon.ico|logo.png|preview.png|apple-touch-icon.png|site.webmanifest|\\.well-known).*)",
	],
};
