import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPost, getAllBlogPostSlugs } from '@/lib/blog';
import MarkdownRenderer from '@/components/blog/MarkdownRenderer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogPostSlugs();
  const locales = ['en', 'uk'];
  
  return slugs.flatMap((slug) =>
    locales.map((locale) => ({
      slug,
      locale,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug, locale);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const isUkrainian = locale === 'uk';
  const baseUrl = 'https://www.advantage-agency.co';

  return {
    title: `${post.title} | Advantage Agency Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${baseUrl}/${locale}/blog/${slug}`,
      siteName: 'Advantage Agency',
      locale: isUkrainian ? 'uk_UA' : 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Advantage Agency'],
      images: post.image
        ? [
            {
              url: post.image.startsWith('http')
                ? post.image
                : `${baseUrl}${post.image}`,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image
        ? [
            post.image.startsWith('http')
              ? post.image
              : `${baseUrl}${post.image}`,
          ]
        : [],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/blog/${slug}`,
      languages: {
        'en-US': `${baseUrl}/en/blog/${slug}`,
        'uk-UA': `${baseUrl}/uk/blog/${slug}`,
      },
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getBlogPost(slug, locale);

  if (!post) {
    notFound();
  }

  const isUkrainian = locale === 'uk';

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-5 py-24 sm:pt-32">
        <div className="mb-8">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            {isUkrainian ? 'Назад до блогу' : 'Back to Blog'}
          </Link>
        </div>

        <article
          className="mb-12"
          itemScope
          itemType="https://schema.org/BlogPosting"
        >
          <header className="mb-12">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent"
              itemProp="headline"
            >
              {post.title}
            </h1>

            <div className="flex items-center text-gray-400 mb-8 flex-wrap gap-4">
              <time dateTime={post.date} itemProp="datePublished">
                {new Date(post.date).toLocaleDateString(
                  isUkrainian ? 'uk-UA' : 'en-US',
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }
                )}
              </time>
              {post.author && (
                <>
                  <span>•</span>
                  <span itemProp="author">{post.author}</span>
                </>
              )}
            </div>

            {post.image && (
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8">
                <Image
                  src={post.image.startsWith('http') ? post.image : post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {post.description && (
              <p className="text-xl text-gray-300 mb-8" itemProp="description">
                {post.description}
              </p>
            )}

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div itemProp="articleBody">
            <MarkdownRenderer content={post.content} />
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}

