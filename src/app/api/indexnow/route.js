import { NextResponse } from 'next/server';

const API_KEY = '3f7b8f9e1d2c5a6b4e0d8c7a9f1b3e5d';

export async function GET() {
  return NextResponse.text(API_KEY);
}

export async function POST(req) {
  const body = await req.json();
  const { url, key } = body;

  if (key !== API_KEY) {
    return NextResponse.json({ error: 'Invalid API key' }, { status: 403 });
  }

  // Here you would typically send the URL to IndexNow
  console.log(`Indexing URL: ${url}`);

  // For demonstration, we're just returning a success message
  return NextResponse.json({ message: 'URL submitted for indexing' });
}
