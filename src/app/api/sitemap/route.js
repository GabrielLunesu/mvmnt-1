import { fetchPages } from '@/lib/notion';
import { caseStudies } from '@/data/caseStudies';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mvmnt.nl';

  // Fetch blog posts
  const blogPosts = await fetchPages();

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${baseUrl}/about</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${baseUrl}/blog</loc>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${baseUrl}/cases</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${baseUrl}/contact</loc>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
      ${blogPosts.results.map((post) => `
        <url>
          <loc>${baseUrl}/blog/${post.properties.slug.rich_text[0]?.plain_text || post.id}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
      `).join('')}
      ${caseStudies.map((caseStudy) => `
        <url>
          <loc>${baseUrl}/cases/${caseStudy.slug}</loc>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
        </url>
      `).join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
