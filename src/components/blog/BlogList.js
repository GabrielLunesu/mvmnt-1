import BlogCard from './BlogCard';
import { fetchPages } from "@/lib/notion";

export default async function BlogList(){
  const pages = await fetchPages();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pages.results.map((page) => (
          <BlogCard key={page.id} page={page} />
        ))}
      </div>
    </div>
  );
}

