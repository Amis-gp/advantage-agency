import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { eventData } = await request.json();
    const FB_ACCESS_TOKEN = process.env.NEXT_PUBLIC_FB_ACCESS_TOKEN;
    const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
    
    if (!FB_ACCESS_TOKEN || !PIXEL_ID) {
      return NextResponse.json({ error: "Missing FB configuration" }, { status: 400 });
    }

    const url = `https://graph.facebook.com/v17.0/${PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}&test_event_code=TEST55468`;
    
    console.log('Sending to Facebook:', { data: [eventData] });

    const fbRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        data: [eventData]
      })
    });

    const fbJson = await fbRes.json();
    console.log('Facebook API raw response:', fbJson);
    return NextResponse.json(fbJson);
  } catch (error: unknown) {
    console.error("Conversion API Error", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}