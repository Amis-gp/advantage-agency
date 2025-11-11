<<<<<<< HEAD
"use client";

import React, { useEffect, useState } from 'react';
=======
'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
>>>>>>> 7bedae81c93aa6c955dd3633165e887bbb01c7a6
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { BlogPost } from '@/lib/blog';

// Blog posts metadata
const blogPosts = [
  {
    slug: 'email-vs-linkedin',
    image: '/img/blog/email-vs-linkedin/hero.webp',
    date: '2025-06-24',
  },
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

<<<<<<< HEAD
export default function BlogIndexPage({ params }: { params: { locale: string } }) {
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const locale = params.locale;
=======
export default function BlogIndexPage({ params }: BlogProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations('blog');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/blog?locale=${params.locale}`);
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [params.locale]);
>>>>>>> 7bedae81c93aa6c955dd3633165e887bbb01c7a6

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
<<<<<<< HEAD
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
=======
    <div className="relative bg-black text-white min-h-screen">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(/img/media-buying/bg.avif)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.6,
        }}
      />
      <div className="relative">
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase ">
              Blog
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Explore our latest articles, insights, and case studies on media buying, digital marketing, and performance marketing.
              </p>
            </motion.div>

            {isLoading ? (
              <div className="text-center py-20">
                <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-red-400 border-r-transparent"></div>
                <p className="mt-4 text-gray-400 text-lg">Loading...</p>
              </div>
            ) : posts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-20"
              >
                <p className="text-gray-400 text-lg">
                  {t('noPosts')}
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link
                      href={`/${params.locale}/blog/${post.slug}`}
                      className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:bg-black/30 hover:border-red-400/50 transition-all duration-300 group h-full"
                    >
                      {post.image && (
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={post.image.startsWith('http') ? post.image : post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      )}
                      <div className="p-6 flex-grow flex flex-col">
                        <div className="text-sm text-red-400 mb-3 font-semibold">
                          {new Date(post.date).toLocaleDateString(
                            params.locale === 'uk' ? 'uk-UA' : 'en-US',
                            {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            }
                          )}
                        </div>
                        <h2 className="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                          {post.description}
                        </p>
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs border border-red-500/30"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="mt-auto text-red-400 font-semibold group-hover:text-red-300 transition-colors">
                          {t('readMore')} →
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
>>>>>>> 7bedae81c93aa6c955dd3633165e887bbb01c7a6
      </div>
    </div>
  );
}