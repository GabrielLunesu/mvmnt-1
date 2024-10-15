import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { section, prompt } = await req.json();

  try {
    const aiResponse = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Je bent een SEO-expert. Analyseer de gegeven inhoud en geef gedetailleerde SEO-aanbevelingen in het gevraagde JSON-formaat. Alle output moet in het Nederlands zijn.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 500, // Increased from 300 to 500
    });

    let analysis;
    try {
      analysis = JSON.parse(aiResponse.choices[0].message.content.trim());
    } catch (parseError) {
      console.error(`Error parsing AI response for section ${section}:`, parseError);
      console.log('Raw AI response:', aiResponse.choices[0].message.content);
      
      // Attempt to create a valid JSON object from the response
      analysis = {
        analysis: "Er was een probleem bij het verwerken van de AI-analyse.",
        improvement: "Probeer de analyse opnieuw uit te voeren of neem contact op met onze support.",
        rating: 5
      };
    }

    return NextResponse.json({ analysis });
  } catch (error) {
    console.error(`Error analyzing section ${section}:`, error);
    return NextResponse.json({ 
      error: `Kon ${section} niet analyseren.`,
      analysis: {
        analysis: "Er was een probleem bij het uitvoeren van de AI-analyse.",
        improvement: "Probeer het later opnieuw of neem contact op met onze support.",
        rating: 5
      }
    }, { status: 500 });
  }
}
