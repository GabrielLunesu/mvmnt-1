import { Client } from '@notionhq/client';

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

export async function fetchPages() {
    return notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
            property: 'Status',
            status: {
                equals: 'Live',
            }
        }
    });
}

export async function fetchBySlug(slug) {
    const res = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter:{
            property: 'slug',
            rich_text: {
                equals: slug,
            }
        }
    });
    return res.results[0] || undefined;
}

export async function fetchPageBlocks(pageId) {
    const res = await notion.blocks.children.list({ 
        block_id: pageId 
    });
    return res.results || [];
}

