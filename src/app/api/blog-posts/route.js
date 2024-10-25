import { fetchPages } from "@/lib/notion";
import { NextResponse } from 'next/server';

export const revalidate = 21600; // Revalidate every 6 hours (21600 seconds)

export async function GET() {
  try {
    const pages = await fetchPages();
    return NextResponse.json(pages);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json({ error: "Error fetching blog posts" }, { status: 500 });
  }
}
