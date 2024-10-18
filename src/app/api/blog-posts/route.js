import { fetchPages } from "@/lib/notion";
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const pages = await fetchPages();
    return NextResponse.json(pages);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json({ error: "Error fetching blog posts" }, { status: 500 });
  }
}
