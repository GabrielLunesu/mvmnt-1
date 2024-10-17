import { Client } from '@notionhq/client';

export const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

export async function fetchPages() {
    // Add a timestamp to force a new request each time
    const timestamp = new Date().getTime();
    return notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
            property: 'Status',
            status: {
                equals: 'Live',
            }
        },
        // Add a dummy parameter to bypass caching
        start_cursor: timestamp.toString()
    });
}

export async function fetchBySlug(slug) {
    try {
        const res = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID,
            filter:{
                property: 'slug',
                rich_text: {
                    equals: slug,
                }
            }
        });
        return res.results[0] || null;
    } catch (error) {
        console.error('Error fetching page by slug:', error);
        return null;
    }
}

export async function fetchPageBlocks(pageId) {
    const res = await notion.blocks.children.list({ 
        block_id: pageId 
    });
    return res.results || [];
}
