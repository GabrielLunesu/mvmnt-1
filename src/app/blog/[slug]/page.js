import hljsPlugin from "@notion-render/hljs-plugin";
import { fetchBySlug, fetchPageBlocks, notion } from '@/lib/notion';
import { NotionRenderer } from '@notion-render/client';
import { bookmarkPlugin } from '@notion-render/bookmark-plugin';
import { fetchPages } from '@/lib/notion';
import { Heading } from '@/components/blog/Heading';
import Link from 'next/link';
import CTA from '@/components/blog/CTA';

export default async function Page({ params }) {
    try {
        const page = await fetchBySlug(params.slug);
        
        if (!page) {
            return <div>Page not found</div>;
        }

        const blocks = await fetchPageBlocks(page.id);

        const renderer = new NotionRenderer({
            client: notion,
        });

        renderer.use(hljsPlugin({}));
        // renderer.use(bookmarkPlugin());

        const html = await renderer.render(...blocks);

        const title = page.properties.Title.title[0]?.plain_text || 'Untitled';

        return (
            <>
            <div className="mx-auto px-4 mt-24 py-8 max-w-5xl">
                {/* Title */}
                <div className="p-8 mb-8">
                    <h1 className="text-6xl font-bold text-white text-center">
                        <Heading title={title} />
                    </h1>
                </div>

                {/* Top CTA Widget */}
                <div className="rounded-lg mb-10 bg-purple-100 w-2/3 mx-auto border-purple-500 text-center text-purple-700 p-4">
                    <p className="font-bold">Wil je weten hoe we je kunnen helpen?</p>
                    <p>Neem contact op met ons! Klik op de knop hieronder om naar onze contactpagina te gaan.</p>
                    <Link href="/contact" className="inline-block mt-2 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors">
                        Neem contact op
                    </Link>
                </div>

                {/* Main Content */}
                <div className="rounded-lg bg-white shadow-lg p-8">
                    <div className="text-black prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto" dangerouslySetInnerHTML={{ __html: html }}></div>
                </div>
            </div>
            <CTA />
            </>
        );
    } catch (error) {
        console.error('Error rendering page:', error);
        return <div>An error occurred while loading the page</div>;
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

