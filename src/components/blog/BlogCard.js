'use client';

import Link from 'next/link';
import { fetchPages } from "@/lib/notion";
import React from "react";



export default async function BlogCard() {
  const pages = await fetchPages();

  return (
     <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
            {pages.results.map((page) => {
                return(
                    <article key={page.id}>
                        <h2>{page.properties.Title.title[0].plain_text}</h2>
                    </article>
                )
            })}
        </div>
  );
}