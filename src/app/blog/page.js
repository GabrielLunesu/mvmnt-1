'use client';

import React from "react";
import BlogList from "@/components/blog/BlogList";

import { fetchPages } from "@/lib/notion";



export default async function BlogPage() {
    const pages = await fetchPages();


    return (
        <BlogList pages={pages} />
    );


}

