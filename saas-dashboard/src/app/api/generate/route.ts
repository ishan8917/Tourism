import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  // Simulate AI delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return NextResponse.json({
    caption: `Discover the ultimate escape with our exclusive package. Whether you're looking for breathtaking landscapes, cultural immersion, or pure relaxation, we've carefully curated every detail. ✈️🌍✨\n\nBased on your prompt: "${prompt}"`,
    hashtags: ['#LuxuryTravel', '#Wanderlust', '#TravelGoals', '#BoutiqueExperience', '#VacationMode'],
    image_prompt: 'A stunning ultra-high resolution cinematic shot of a luxury boutique resort blending seamlessly into a dramatic mountainous landscape at sunset. Warm golden lighting, highly detailed, soft shadows.'
  });
}
