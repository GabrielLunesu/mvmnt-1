import React from 'react';
import Link from 'next/link';

export default function BlogCard({ page }) {
  if (!page || !page.properties) {
    console.error("Invalid page data:", page);
    return null;
  }

  const title = page.properties.Title?.title[0]?.plain_text || 'Untitled';
  const slug = page.properties.slug?.rich_text[0]?.plain_text || page.id;

  return (
    <Link href={`/blog/${slug}`} className="">
      <div className="bg-purple-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white hover:text-purple-300 transition-colors duration-300">
            {title}
          </h2>
        </div>
        <div className="h-1 bg-gradient-to-r from-purple-400 to-pink-500"></div>
      </div>
    </Link>
  );
}