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
  ],
}

module.exports = nextConfig
