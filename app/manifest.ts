import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Spida | Software Development Company in South Sudan',
    short_name: 'Spida',
    description:
      'Spida delivers custom software, web development, network infrastructure, and data systems for businesses, NGOs, banks, and government agencies across South Sudan.',
    start_url: '/',
    display: 'standalone',
    background_color: '#070738',
    theme_color: '#070738',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
