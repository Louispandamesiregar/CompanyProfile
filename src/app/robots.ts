import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Just an example if there's any private route
    },
    sitemap: 'https://nawasenajayagroup.com/sitemap.xml', // Adjust to real domain
  }
}
