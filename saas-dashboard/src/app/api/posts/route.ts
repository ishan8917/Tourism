import { NextResponse } from 'next/server';

// In-memory array to simulate DB
let posts = [
  {
    id: 1,
    caption: "Experience the pristine beaches and crystal clear waters of the Maldives. Our exclusive package offers an overwater bungalow with private access to the ocean.",
    hashtags: ["#Maldives", "#Luxury", "#Honeymoon", "#OceanFront"],
    image_prompt: "Cinematic shot of a luxury overwater bungalow in the Maldives at sunset.",
    status: "posted",
    scheduled_time: null
  },
  {
    id: 2,
    caption: "Get ready for the ultimate Alpine adventure. Skiing, gourmet dining, and private chalet accommodations await you in Switzerland.",
    hashtags: ["#SwissAlps", "#SkiTrip", "#WinterWonderland"],
    image_prompt: "A luxurious log cabin in the snowy Swiss Alps with a warm glowing fireplace visible through the window.",
    status: "scheduled",
    scheduled_time: new Date(Date.now() + 86400000).toISOString() // tomorrow
  }
];

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const newPost = await request.json();
  const post = {
    ...newPost,
    id: Date.now()
  };
  posts.unshift(post);
  return NextResponse.json(post);
}

export async function PUT(request: Request) {
  const updatedPost = await request.json();
  posts = posts.map(p => p.id === updatedPost.id ? updatedPost : p);
  return NextResponse.json(updatedPost);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  posts = posts.filter(p => p.id !== id);
  return NextResponse.json({ success: true });
}
