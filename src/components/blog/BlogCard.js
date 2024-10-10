'use client';

import Link from 'next/link';
import React from "react";

export default function BlogCard({ page }) {
  const title = page.properties.Title.title[0]?.plain_text || 'Untitled';
  const slug = page.properties.slug?.rich_text[0]?.plain_text || page.id;

  return (
    <Link href={`/blog/${slug}`}>
      <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="bg-white dark:bg-gray-800 p-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h2>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
        </div>
      </div>
    </Link>
  );
}

