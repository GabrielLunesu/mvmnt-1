import { fetchBySlug, fetchPageBlocks, notion } from '@/lib/notion';
import { NotionRenderer } from '@notion-render/client';
import hljsPlugin from "@notion-render/hljs-plugin";
import { fetchPages } from '@/lib/notion';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import CTA from '@/components/blog/CTA';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { generateMetadata as baseGenerateMetadata } from '../../metadata';
import Script from 'next/script';

export async function generateMetadata({ params }) {
  const page = await fetchBySlug(params.slug);
  const title = page.properties.Title.title[0]?.plain_text || 'Untitled';
  const description = page.properties.Description?.rich_text[0]?.plain_text || '';
  const coverImage = page.cover?.external?.url || page.cover?.file?.url || null;

  return baseGenerateMetadata({
    title,
    description,
    image: coverImage,
    openGraph: {
      type: 'article',
      publishedTime: page.created_time,
      authors: [page.properties.Author?.rich_text[0]?.plain_text || 'Anonymous'],
    },
  });
}

export default async function BlogPost({ params }) {
    try {
        const page = await fetchBySlug(params.slug);
        
        console.log("Page data:", JSON.stringify(page, null, 2));
        console.log("Cover image:", page.cover);

        if (!page) {
            return <div className="text-center py-20">Page not found</div>;
        }

        const blocks = await fetchPageBlocks(page.id);

        const renderer = new NotionRenderer({
            client: notion,
        });

        renderer.use(hljsPlugin({}));

        const html = await renderer.render(...blocks);

        const title = page.properties.Title.title[0]?.plain_text || 'Untitled';
        const date = page.properties.Date?.date?.start || page.created_time || '';
        const author = page.properties.Author?.rich_text[0]?.plain_text || 'Anonymous';
        
        // Handle different cover image scenarios
        let coverImage = '/default-cover.jpg'; // Default image
        if (page.cover) {
            if (page.cover.type === 'external') {
                coverImage = page.cover.external.url;
            } else if (page.cover.type === 'file') {
                coverImage = page.cover.file.url;
            }
        }

        const jsonLd = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": title,
            "image": coverImage,
            "author": {
                "@type": "Person",
                "name": author
            },
            "datePublished": date,
            "description": page.properties.Description?.rich_text[0]?.plain_text || ''
        };

        return (
            <article className="bg-white min-h-screen">
                <Script
                    id="blog-post-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <header className="relative h-96 mb-16">
                    <Image 
                        src={coverImage}
                        alt={title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="brightness-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
                            {title}
                        </h1>
                    </div>
                </header>

                <TracingBeam className="px-4">
                    <div className="max-w-3xl mx-auto px-8 sm:px-6 lg:px-8">
                        <div className="mb-8 text-center">
                            <p className="text-gray-500">
                                {formatDate(date)} • By {author}
                            </p>
                        </div>

                        <div className="prose prose-xl w-full max-w-2xl mx-auto">
                            <div dangerouslySetInnerHTML={{ __html: html }}></div>
                        </div>

                        <div className="mt-16 mb-8 text-xl text-center">
                            <Link href="/blog" className="text-purple-600 hover:text-purple-500 transition-colors">
                                ← Terug naar alle blogs
                            </Link>
                        </div>
                    </div>
                </TracingBeam>
                <CTA />
            </article>
        );
    } catch (error) {
        console.error('Error rendering page:', error);
        return <div className="text-center py-20">An error occurred while loading the page</div>;
    }
}

export async function generateStaticParams() {
    try {
        const pages = await fetchPages();
        return pages.results.map((page) => ({
            slug: page.properties.slug.rich_text[0]?.plain_text || '',
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}
