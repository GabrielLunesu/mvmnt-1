import React from "react";
import BlogList from "@/components/blog/BlogList";
import { Hero } from "@/components/blog/Hero";

export const revalidate = 21600; // Revalidate this page every 6 hours

export default function BlogPage() {
    return (
        <div className="">
            <Hero />
            <BlogList />
        </div>
    );
}
