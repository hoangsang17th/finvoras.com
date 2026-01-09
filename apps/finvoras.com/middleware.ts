import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Check if Coming Soon mode is enabled
    const isComingSoon = process.env.NEXT_PUBLIC_IS_COMING_SOON === 'true'

    // If not coming soon, allow all requests
    if (!isComingSoon) {
        return NextResponse.next()
    }

    // Paths to always allow
    const allowedPaths = [
        '/coming-soon',
        '/_next',
        '/api',
        '/favicon.ico',
        '/robots.txt',
        '/sitemap.xml',
        '/images', // Assuming static images are here or in public
    ]

    const { pathname } = request.nextUrl

    // Check if path is allowed
    const isAllowed = allowedPaths.some(path => pathname.startsWith(path))

    // If coming soon is enabled and path is not allowed, redirect to coming soon
    if (isComingSoon && !isAllowed) {
        return NextResponse.redirect(new URL('/coming-soon', request.url))
    }

    // If we are on coming-soon page but mode is disabled, redirect to home
    // This part is optional but good for user experience if they cached the url
    if (!isComingSoon && pathname === '/coming-soon') {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
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
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
