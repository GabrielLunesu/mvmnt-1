'use client';

import React from 'react';
import useSWR from 'swr';
import BlogCard from './BlogCard';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function BlogList() {
  const { data: pages, error, isLoading } = useSWR('/api/blog-posts', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 21600000, // Refresh every 6 hours (21600000 milliseconds)
  });

  if (isLoading) {
    return <div className="text-white text-center py-16">Loading blog posts...</div>;
  }

  if (error) {
    return <div className="text-white text-center py-16">Error loading blog posts.</div>;
  }

  if (!pages || pages.results.length === 0) {
    return <div className="text-white text-center py-16">No blog posts found.</div>;
  }

  return (
    <div className="w-full mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pages.results.map((page) => (
          <BlogCard key={page.id} page={page} />
        ))}
      </div>
    </div>
  );
}
