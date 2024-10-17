'use client';

import React from "react";
import BlogList from "@/components/blog/BlogList";
import { Hero } from "@/components/blog/Hero";

export const revalidate = 0; // This disables caching for this page

export default function BlogPage() {
    return (
        <div className="">
            <Hero />
            <BlogList />
        </div>
    );
}
