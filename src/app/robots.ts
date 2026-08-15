import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Just an example if there's any private route
    },
    sitemap: 'https://nawasenajaya.com/sitemap.xml', // Adjust to real domain
  }
}
