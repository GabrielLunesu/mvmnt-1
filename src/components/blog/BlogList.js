import BlogCard from './BlogCard';
import { fetchPages } from "@/lib/notion";


export default async function BlogList(){
  const pages = await fetchPages();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pages.results.map((page) => (
        <BlogCard key={page.id} page={page} />
      ))}
    </div>
  );
}

