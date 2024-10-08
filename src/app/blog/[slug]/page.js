import hljsPlugin from "@notion-render/hljs-plugin";
import { fetchBySlug, fetchPageBlocks, notion } from '../../../lib/notion';
import { NotionRenderer } from '@notion-render/client';
import { bookmarkPlugin } from '@notion-render/bookmark-plugin';
import { fetchPages } from '@/lib/notion';

export default async function Page({ params }) {
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

    return (
        <div>
            {/* <div>{page.properties.title.title[0].plain_text}</div> */}
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
    );
}

export async function generateStaticParams() {
    const pages = await fetchPages();
    return pages.results.map((page) => ({
        slug: page.properties.slug.rich_text[0].plain_text,
    }));
}

