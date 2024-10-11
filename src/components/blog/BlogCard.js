import React from 'react';
import Link from 'next/link';

export default function BlogCard({ page }) {
  const title = page.properties.Title.title[0]?.plain_text || 'Untitled';
  const slug = page.properties.slug?.rich_text[0]?.plain_text || page.id;

  return (
    <Link href={`/blog/${slug}`} className="block">
      <div className="bg-purple-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-purple-800 hover:text-purple-600 transition-colors duration-300">
            {title}
          </h2>
        </div>
        <div className="h-1 bg-gradient-to-r from-purple-400 to-pink-500"></div>
      </div>
    </Link>
  );
}