'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { BlogPost } from '@/lib/blog';

interface BlogProps {
  params: { locale: string };
}

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

  return (
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
                {t('title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                {t('description')}
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
      </div>
    </div>
  );
}
