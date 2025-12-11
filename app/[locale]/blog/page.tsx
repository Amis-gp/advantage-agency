import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import BlogComponent from '@/components/blog/Blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getBlogPosts } from '@/lib/blog';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: 'Blog | Advantage Agency',
    description: 'Explore our latest articles, insights, and case studies on media buying, digital marketing, and performance marketing.',
    openGraph: {
      title: 'Blog | Advantage Agency',
      description: 'Explore our latest articles, insights, and case studies',
      url: `https://www.advantage-agency.co/${locale}/blog`,
      siteName: 'Advantage Agency',
      locale: 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `https://www.advantage-agency.co/${locale}/blog`,
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const posts = getBlogPosts(locale);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black">
      <Header />
      <BlogComponent params={{ locale }} initialPosts={posts} />
      <Footer />
    </div>
  );
}