'use client';

import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

export default function BlogList() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPages() {
      try {
        const response = await fetch('/api/blog-posts');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setPages(data.results);
        setLoading(false);
      } catch (err) {
        console.error("Error in BlogList:", err);
        setError('Error loading blog posts.');
        setLoading(false);
      }
    }

    fetchPages();
  }, []);

  if (loading) {
    return <div className="text-white text-center py-16">Loading blog posts...</div>;
  }

  if (error) {
    return <div className="text-white text-center py-16">{error}</div>;
  }

  if (pages.length === 0) {
    return <div className="text-white text-center py-16">No blog posts found.</div>;
  }

  return (
    <div className="w-full mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pages.map((page) => (
          <BlogCard key={page.id} page={page} />
        ))}
      </div>
    </div>
  );
}

