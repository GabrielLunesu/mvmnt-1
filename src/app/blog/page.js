

import { fetchPages } from "@/lib/notion";



export default async function BlogPage() {
    const pages = await fetchPages();


    return (
        <div>
            <h1>Blog</h1>
            {/* <ul>
                {pages.map((page) => (
                    <li key={page.id}>{page.title}</li>
                ))}
            </ul> */}
        </div>
    );


}

