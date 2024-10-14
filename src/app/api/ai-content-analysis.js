import axios from 'axios';
import { Configuration, OpenAIApi } from 'openai';
import { JSDOM } from 'jsdom';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function GET(req) {
  const url = new URL(req.url).searchParams.get('url');

  if (!url) {
    return new Response(JSON.stringify({ error: 'URL is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // Fetch website content
    const response = await axios.get(url);
    const html = response.data;
    const dom = new JSDOM(html);
    const { document } = dom.window;
    const bodyText = document.body.textContent || '';

    // Use OpenAI API for content analysis
    const aiResponse = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are an SEO expert. Analyze the given content and provide detailed SEO recommendations.' },
        { role: 'user', content: `Analyze the SEO of the following content and provide detailed recommendations:\n\n${bodyText}` }
      ],
      max_tokens: 500,
    });

    const analysis = aiResponse.data.choices[0].message.content.trim();

    return new Response(JSON.stringify({ analysis }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Error performing AI analysis' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
