'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { BlogPost } from '@/lib/blog';

interface BlogProps {
  params: { locale: string };
  initialPosts?: BlogPost[];
}

const whiteBlogFallback = {
  headline: 'You can also read these articles',
  description: 'Explore more guides from our White Hat blog to level up your outbound systems.',
  readMore: 'Read More',
};

const whiteBlogPostsConfig = [
  {
    slug: 'email-vs-linkedin',
    image: '/img/blog-white/email-vs-linkedin/hero.webp',
    fallbackTitle: 'Cold Emails vs LinkedIn: Which Channel Works Better?',
    fallbackDescription:
      'Understand which outreach channel performs best for B2B lead generation and how to combine both for maximum conversions.',
  },
  {
    slug: 'five-mistakes-in-cold-outreach',
    image: '/img/blog-white/five-mistakes-in-cold-outreach/hero.webp',
    fallbackTitle: '5 Mistakes in Cold Outreach That Kill Results',
    fallbackDescription:
      'Avoid the most common cold outreach pitfalls and keep your reply rate growing every month.',
  },
  {
    slug: 'ideal-customer-profile',
    image: '/img/blog-white/ideal-customer-profile/hero.webp',
    fallbackTitle: 'How to Build the Ideal Customer Profile',
    fallbackDescription:
      'Step-by-step framework to define the perfect audience and increase conversions in every campaign.',
  },
  {
    slug: 'lead-magnets',
    image: '/img/blog-white/lead-magnets/hero.webp',
    fallbackTitle: 'Lead Magnets for Cold Emails',
    fallbackDescription:
      'Discover high-converting lead magnet ideas that make prospects say yes to your offer.',
  },
  {
    slug: 'lead-scraping',
    image: '/img/blog-white/lead-scraping/hero.webp',
    fallbackTitle: 'Lead Scraping: Find the Right Accounts Faster',
    fallbackDescription:
      'Tools and tactics to build precise prospect lists and feed your SDR team with ready-to-close leads.',
  },
  {
    slug: 'cold-email-automation',
    image: '/img/blog-white/cold-email-automation/hero.webp',
    fallbackTitle: 'Cold Email Automation: Systems That Scale',
    fallbackDescription:
      'Learn how automation multiplies the output of your outbound team without losing personalization.',
  },
  {
    slug: 'b2b-lead-generation-2025',
    image: '/img/blog-white/b2b-lead-generation-trends-2025/hero.jpg',
    fallbackTitle: 'B2B Lead Generation Trends for 2025',
    fallbackDescription:
      'Upcoming trends that will define the B2B outbound landscape next year and how to prepare for them today.',
  },
];

interface WhiteBlogPostCard {
  slug: string;
  image: string;
  title: string;
  description: string;
}

interface WhiteBlogContent {
  headline: string;
  description: string;
  readMore: string;
  posts: WhiteBlogPostCard[];
}

export default function BlogIndexPage({ params, initialPosts }: BlogProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts || []);
  const [isLoading, setIsLoading] = useState(!initialPosts || initialPosts.length === 0);
  const [whiteBlogContent, setWhiteBlogContent] = useState<WhiteBlogContent>({
    headline: whiteBlogFallback.headline,
    description: whiteBlogFallback.description,
    readMore: whiteBlogFallback.readMore,
    posts: whiteBlogPostsConfig.map((post) => ({
      slug: post.slug,
      image: post.image,
      title: post.fallbackTitle,
      description: post.fallbackDescription,
    })),
  });
  const t = useTranslations('blog');

  useEffect(() => {
    // Якщо вже є initialPosts – не робимо додатковий запит
    if (initialPosts && initialPosts.length > 0) {
      setIsLoading(false);
      return;
    }

    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/blog?locale=${params.locale}`, {
          next: { revalidate: 300 },
        });
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
  }, [params.locale, initialPosts]);

  useEffect(() => {
    const loadWhiteBlogTranslations = async () => {
      try {
        const translationsModule = await import('../../messages/en/blog-white/blog.json');
        const translations = (translationsModule.default || {}) as {
          headline?: string;
          title?: string;
          description?: string;
          readMore?: string;
          posts?: Record<string, { title?: string; description?: string }>;
        };

        setWhiteBlogContent({
          headline: translations.headline || translations.title || whiteBlogFallback.headline,
          description: whiteBlogFallback.description,
          readMore: translations.readMore || whiteBlogFallback.readMore,
          posts: whiteBlogPostsConfig.map((post) => ({
            slug: post.slug,
            image: post.image,
            title: translations.posts?.[post.slug]?.title || post.fallbackTitle,
            description: translations.posts?.[post.slug]?.description || post.fallbackDescription,
          })),
        });
      } catch (error) {
        console.error('Error loading white blog translations:', error);
        setWhiteBlogContent({
          headline: whiteBlogFallback.headline,
          description: whiteBlogFallback.description,
          readMore: whiteBlogFallback.readMore,
          posts: whiteBlogPostsConfig.map((post) => ({
            slug: post.slug,
            image: post.image,
            title: post.fallbackTitle,
            description: post.fallbackDescription,
          })),
        });
      }
    };

    loadWhiteBlogTranslations();
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
                          Read More →
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12"
            >
              <div className="text-center max-w-4xl mx-auto ">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent uppercase">
                  You can also read these articles
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whiteBlogContent.posts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Link
                      href={`/en/blog-white/${post.slug}`}
                      className="flex flex-col bg-zinc-900/70 border border-zinc-800/80 rounded-lg overflow-hidden hover:border-red-400/50 hover:bg-black/40 transition-all duration-300 h-full"
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold mb-3 text-white">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                          {post.description}
                        </p>
                        <div className="mt-auto text-red-400 font-semibold">
                          {whiteBlogContent.readMore} →
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
