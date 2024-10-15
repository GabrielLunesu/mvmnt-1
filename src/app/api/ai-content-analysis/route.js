import { NextResponse } from 'next/server';
import axios from 'axios';
import OpenAI from 'openai';
import { JSDOM } from 'jsdom';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const body = await req.json();
  const { url, business, audience, keywords } = body;

  if (!url) {
    return NextResponse.json({ error: 'URL is vereist' }, { status: 400 });
  }

  try {
    // Fetch website content
    const startTime = Date.now();
    const response = await axios.get(url);
    const loadTime = Date.now() - startTime;

    const html = response.data;
    const dom = new JSDOM(html);
    const { document } = dom.window;
    const bodyText = document.body.textContent || '';
    const h1 = document.querySelector('h1')?.textContent || '';
    const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';

    // Word count
    const wordCount = bodyText.trim().split(/\s+/).length;

    // Alt text analysis
    const images = Array.from(document.querySelectorAll('img'));
    const totalImages = images.length;
    const imagesWithAlt = images.filter(img => img.hasAttribute('alt') && img.getAttribute('alt').trim() !== '').length;
    const altTextCoverage = totalImages > 0 ? ((imagesWithAlt / totalImages) * 100).toFixed(2) + '%' : 'N/A';

    // Keyword usage
    const keywordArray = keywords.split(',').map(k => k.trim());
    const keywordOccurrences = keywordArray.reduce((acc, keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      const count = (bodyText.match(regex) || []).length;
      acc[keyword] = count;
      return acc;
    }, {});
    const keywordDensity = Object.fromEntries(
      Object.entries(keywordOccurrences).map(([k, v]) => [k, ((v / wordCount) * 100).toFixed(2) + '%'])
    );

    // Return initial data
    return NextResponse.json({
      initialData: {
        loadTime,
        wordCount,
        altTextData: { totalImages, imagesWithAlt, altTextCoverage },
        h1,
        metaDescription,
        keywordData: { keywordOccurrences, keywordDensity },
        contentPreview: bodyText.substring(0, 1000),
        business,
        audience
      }
    });

  } catch (error) {
    console.error('Gedetailleerde fout:', error);
    return NextResponse.json({ error: 'Fout bij het ophalen van website-inhoud' }, { status: 500 });
  }
}
