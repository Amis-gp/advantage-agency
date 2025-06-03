"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Blog posts metadata
const blogPosts = [
  {
    slug: 'five-mistakes-in-cold-outreach',
    image: '/img/blog/five-mistakes-in-cold-outreach/hero.webp',
    date: '2025-06-02',
  },
  {
    slug: 'ideal-customer-profile',
    image: '/img/blog/ideal-customer-profile/hero.webp',
    date: '2025-05-21',
  },
  {
    slug: 'lead-magnets',
    image: '/img/blog/lead-magnets/hero.webp',
    date: '2025-05-15',
  },
  {
    slug: 'lead-scraping',
    image: '/img/blog/lead-scraping/hero.webp',
    date: '2025-04-23',
  },
  {
    slug: 'cold-email-automation',
    image: '/img/blog/cold-email-automation/hero.webp',
    date: '2025-04-15',
  },
  {
    slug: 'b2b-lead-generation-2025',
    image: '/img/blog/b2b-lead-generation-trends-2025/hero.jpg',
    date: '2025-03-24',
  },
];

export default function BlogIndexPage({ params }: { params: { locale: string } }) {
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const locale = params.locale;

  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const blogTranslations = await import(`/messages/${locale}/blog/blog.json`);
        setTranslations(blogTranslations.default);
      } catch (error) {
        console.error('Error loading blog translations:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [locale]);

  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-400 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
          <p className="mt-4 text-lg text-blue-300">Loading content...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            {translations.title || 'Blog'}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {translations.description || 'Explore our latest articles, insights, and case studies'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            // Get translations for each post
            const postTitle = translations.posts?.[post.slug]?.title || post.slug;
            const postDescription = translations.posts?.[post.slug]?.description || '';
            
            return (
              <Link 
                href={`/${params.locale}/blog/${post.slug}`}
                key={post.slug}
                className="bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:translate-y-[-5px] flex flex-col h-full"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={postTitle}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="text-sm text-blue-400 mb-2">
                    {new Date(post.date).toLocaleDateString(params.locale === 'uk' ? 'uk-UA' : 'en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-white">{postTitle}</h2>
                  <p className="text-gray-300 mb-4">{postDescription}</p>
                  <div className="mt-auto text-blue-400 font-medium">
                    {translations.readMore || 'Read More'} →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}