import { NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/blog';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get('locale') || 'en';
  
  try {
    const posts = getBlogPosts(locale);
    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ posts: [] }, { status: 500 });
  }
}

