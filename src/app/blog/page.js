'use client';

import React from "react";
import BlogList from "@/components/blog/BlogList";
import { Hero } from "@/components/blog/Hero";

export default function BlogPage() {
    return (
        <div className="">
            <Hero />
            <BlogList />
        </div>
    );
}

