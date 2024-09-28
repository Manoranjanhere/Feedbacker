import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const prompt =
    "Create a list of three open-ended and engaging feedback statements formatted as a single string. Each statement should be separated by '||'. These statements are for a review platform of a website with fewer visitors and should be suitable for a diverse audience. Include both positive and negative feedback, focusing on user experience, content, and design. Avoid overly technical details, and aim to gather constructive criticism and praise. For example, your output should be structured like this: 'The website has a welcoming design, but it could use more interactive features.||The content is valuable, though I think it could be more frequently updated.||Navigating the site is generally easy, but some links seem broken or lead to outdated pages.'. Ensure the statements are relevant, balanced, and help improve the site while acknowledging its strengths.";

    const response = await openai.completions.create({
      model: 'gpt-3.5-turbo-instruct',
      max_tokens: 100,
      stream: true,
      prompt,
    });

    const stream = OpenAIStream(response);
    
    
    return new StreamingTextResponse(stream);
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      // OpenAI API error handling
      const { name, status, headers, message } = error;
      return NextResponse.json({ name, status, headers, message }, { status });
    } else {
      // General error handling
      console.error('An unexpected error occurred:', error);
      throw error;
    }
  }
}
