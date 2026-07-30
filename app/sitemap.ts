import type { MetadataRoute } from 'next'

const siteUrl = 'https://spidasystems.com'

const routes = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/portfolio', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/services/web-design-development', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services/custom-software', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services/api-integrations', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services/data-analytics', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services/web-hosting', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services/network-infrastructure', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/industries', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/industries/ngo', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/industries/finance', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/industries/education', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/industries/hospitality', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/industries/retail', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/industries/telecom', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/industries/public-sector', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/industries/healthcare', priority: 0.7, changeFrequency: 'monthly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
