/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ibb.co', 'placehold.co', 'i.pinimg.com', 'images.squarespace-cdn.com', 'aceternity.com', 'www.notion.so', 'images.unsplash.com'],
  },
  rewrites: async () => [
    {
      source: '/sitemap.xml',
      destination: '/api/sitemap',
    },
    {
      source: '/3f7b8f9e1d2c5a6b4e0d8c7a9f1b3e5d.txt',
      destination: '/api/indexnow',
    },
  ],
}

module.exports = nextConfig
