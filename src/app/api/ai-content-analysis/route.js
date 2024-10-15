import { NextResponse } from 'next/server';
import axios from 'axios';
import OpenAI from 'openai';
import { JSDOM } from 'jsdom';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { url, business, audience, keywords } = body;

    if (!url) {
      return NextResponse.json({ error: 'URL is vereist' }, { status: 400 });
    }

    // Measure loading time
    const startTime = Date.now();

    // Fetch website content
    const response = await axios.get(url);
    const loadTime = Date.now() - startTime; // Loading time in milliseconds

    const html = response.data;
    const dom = new JSDOM(html);
    const { document } = dom.window;
    const bodyText = document.body.textContent || '';
    const h1 = document.querySelector('h1')?.textContent || '';
    const metaDescription = document
      .querySelector('meta[name="description"]')
      ?.getAttribute('content') || '';

    // Word count
    const wordCount = bodyText.trim().split(/\s+/).length;

    // Alt text analysis
    const images = Array.from(document.querySelectorAll('img'));
    const totalImages = images.length;
    const imagesWithAlt = images.filter(
      (img) => img.hasAttribute('alt') && img.getAttribute('alt').trim() !== ''
    ).length;
    const altTextCoverage =
      totalImages > 0
        ? ((imagesWithAlt / totalImages) * 100).toFixed(2) + '%'
        : 'N/A';

    // Keyword usage
    const keywordArray = keywords.split(',').map((k) => k.trim());
    const keywordOccurrences = keywordArray.reduce((acc, keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      const count = (bodyText.match(regex) || []).length;
      acc[keyword] = count;
      return acc;
    }, {});
    const keywordDensity = Object.fromEntries(
      Object.entries(keywordOccurrences).map(([k, v]) => [
        k,
        ((v / wordCount) * 100).toFixed(2) + '%',
      ])
    );

    // Prepare the prompt for OpenAI
    const prompt = `
Je bent een SEO-expert die persoonlijke en gedetailleerde analyses levert. Analyseer de volgende website-inhoud en geef uitgebreide aanbevelingen met specifieke voorbeelden uit de inhoud. Gebruik de verstrekte bedrijfsinformatie, doelgroep en belangrijkste zoekwoorden om de analyse te personaliseren. Geef alle output in het Nederlands.

Geef je analyse in het volgende JSON-formaat:

{
  "loadingTime": {
    "value": "${loadTime} ms",
    "analysis": "Analyse van laadtijd en impact op SEO",
    "improvement": "Suggesties om laadtijd te verbeteren indien nodig",
    "rating": "Een cijfer tussen 1 en 10, waarbij 1-3 slecht is, 4-7 gemiddeld, en 8-10 goed"
  },
  "wordCount": {
    "value": ${wordCount},
    "analysis": "Analyse van woordenaantal en inhoudslengte",
    "improvement": "Suggesties voor optimalisatie van inhoudslengte",
    "rating": "Een cijfer tussen 1 en 10, waarbij 1-3 slecht is, 4-7 gemiddeld, en 8-10 goed"
  },
  "altText": {
    "totalImages": ${totalImages},
    "imagesWithAlt": ${imagesWithAlt},
    "altTextCoverage": "${altTextCoverage}",
    "analysis": "Analyse van alt-tekstgebruik en impact op SEO",
    "improvement": "Suggesties voor verbetering van alt-tekstgebruik",
    "rating": "Een cijfer tussen 1 en 10, waarbij 1-3 slecht is, 4-7 gemiddeld, en 8-10 goed"
  },
  "h1": {
    "content": "${h1}",
    "analysis": "Gedetailleerde analyse van H1 met uitleg waarom het goed of slecht is",
    "improvement": "Concrete suggesties voor verbetering, inclusief voorbeelden",
    "rating": "Een cijfer tussen 1 en 10, waarbij 1-3 slecht is, 4-7 gemiddeld, en 8-10 goed"
  },
  "metaDescription": {
    "content": "${metaDescription}",
    "analysis": "Gedetailleerde analyse van meta beschrijving met uitleg",
    "improvement": "Concrete suggesties voor verbetering, inclusief voorbeelden",
    "rating": "Een cijfer tussen 1 en 10, waarbij 1-3 slecht is, 4-7 gemiddeld, en 8-10 goed"
  },
  "keywordUsage": {
    "occurrences": ${JSON.stringify(keywordOccurrences)},
    "density": ${JSON.stringify(keywordDensity)},
    "analysis": "Analyse van hoe de belangrijkste zoekwoorden worden gebruikt in de inhoud, met specifieke voorbeelden",
    "improvement": "Suggesties voor verbetering van zoekwoordgebruik, inclusief waar en hoe ze te integreren",
    "rating": "Een cijfer tussen 1 en 10, waarbij 1-3 slecht is, 4-7 gemiddeld, en 8-10 goed"
  },
  "contentQuality": {
    "analysis": "Analyse van inhoudskwaliteit en leesbaarheid, met verwijzing naar specifieke secties",
    "improvement": "Suggesties voor verbetering van inhoudskwaliteit, zoals het toevoegen van bepaalde informatie",
    "rating": "Een cijfer tussen 1 en 10, waarbij 1-3 slecht is, 4-7 gemiddeld, en 8-10 goed"
  },
  "businessAndAudience": {
    "analysis": "Analyse van hoe goed de inhoud aansluit bij het bedrijf (${business}) en de doelgroep (${audience}), met specifieke voorbeelden",
    "improvement": "Suggesties voor verbetering om beter aan te sluiten bij het bedrijf en de doelgroep",
    "rating": "Een cijfer tussen 1 en 10, waarbij 1-3 slecht is, 4-7 gemiddeld, en 8-10 goed"
  },
  "overallScore": "Een gemiddelde score van alle bovenstaande ratings",
  "additionalRecommendations": [
    "Lijst van aanvullende aanbevelingen, elk met een korte uitleg en hoe ze de SEO verbeteren"
  ]
}

Te analyseren gegevens:
URL: ${url}
Bedrijfsomschrijving: ${business}
Doelgroep: ${audience}
Belangrijkste Zoekwoorden: ${keywords}
Inhoud (eerste 1000 tekens): ${bodyText.substring(0, 1000)}...
    `;

    // Use OpenAI API for content analysis
    let aiResponse;
    try {
      aiResponse = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'Je bent een SEO-expert. Analyseer de gegeven inhoud en geef gedetailleerde SEO-aanbevelingen in het gevraagde JSON-formaat. Alle output moet in het Nederlands zijn. Geef alleen de JSON terug zonder extra opmaak of codeblokken.' },
          { role: 'user', content: prompt },
        ],
        max_tokens: 1500,
      });
    } catch (openAiError) {
      console.error('OpenAI API Error:', openAiError);
      return NextResponse.json({ error: `OpenAI API fout: ${openAiError.message}` }, { status: 500 });
    }

    if (!aiResponse.choices || aiResponse.choices.length === 0) {
      console.error('Unexpected OpenAI response:', aiResponse);
      return NextResponse.json({ error: 'Onverwachte respons van AI' }, { status: 500 });
    }

    let cleanedContent = aiResponse.choices[0].message.content.trim();
    
    // Remove any markdown formatting if present
    cleanedContent = cleanedContent.replace(/```json\n?/, '').replace(/```\n?$/, '');

    // Parse the response into a structured format
    let analysis;
    try {
      analysis = JSON.parse(cleanedContent);
    } catch (parseError) {
      console.error('Error parsing AI response:', parseError);
      console.log('Raw AI response:', cleanedContent);
      return NextResponse.json({ error: 'Kon de AI-analyse niet verwerken. Ruwe respons: ' + cleanedContent }, { status: 500 });
    }

    return NextResponse.json({ analysis });
  } catch (error) {
    console.error('Gedetailleerde fout:', error);
    let errorMessage = 'Fout bij het uitvoeren van AI-analyse';
    if (error.response) {
      errorMessage += `: ${error.response.status} ${error.response.statusText}`;
      console.error('Foutresponsgegevens:', error.response.data);
    } else if (error.request) {
      errorMessage += ': Geen antwoord ontvangen';
    } else {
      errorMessage += `: ${error.message}`;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
