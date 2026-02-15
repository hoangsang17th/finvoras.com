import { MetadataRoute } from 'next'

// Google được phép crawl ở đâu
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    "/api/",
                    "/_next/",
                    "/private/",
                    "/404",
                ],
            },

        ],
        sitemap: 'https://phamhoangsang.finvoras.com/sitemap.xml',
    }
}
