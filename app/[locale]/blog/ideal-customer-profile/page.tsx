import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import IdealCustomerProfile from '@/components/blog-white/IdealCustomerProfile';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Імпорт перекладів для метаданих
import ukBlogTranslations from '@/messages/uk/blog-white/blog.json';
import enBlogTranslations from '@/messages/en/blog-white/blog.json';

interface Props {
  params: { locale: string }
}

// Генерація метаданих для SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blogTranslations = params.locale === 'uk' ? ukBlogTranslations : enBlogTranslations;
  const postSlug = 'ideal-customer-profile';
  const postData = blogTranslations.posts?.[postSlug] || {};
  
  // Базові змінні для SEO
  const title = postData.title || 'Як знайти ідеальну аудиторію для B2B лід-генерації';
  const description = postData.description || 'Дізнайтеся, як визначити ідеальний профіль клієнта (ICP) для ефективної B2B лід-генерації';
  const publishDate = '2025-05-21T10:00:00Z';
  const imageUrl = 'https://www.advantage-agency.co/img/blog-white/ideal-customer-profile/hero.webp';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.advantage-agency.co';
  const canonicalUrl = `${baseUrl}/${params.locale}/blog-white/ideal-customer-profile`;
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'ADvantage Agency',
      locale: params.locale,
      type: 'article',
      publishedTime: publishDate,
      authors: ['ADvantage Agency'],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@AdvantageAgency',
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'uk': `${baseUrl}/uk/blog-white/ideal-customer-profile`,
        'en': `${baseUrl}/en/blog-white/ideal-customer-profile`
      }
    },
    authors: [{ name: 'ADvantage Agency' }],
  };
}

export default function IdealCustomerProfilePage({ params }: Props) {
  setRequestLocale(params.locale);
  
  return (
    <div>
      <Header />
      <IdealCustomerProfile />
      <Footer />
    </div>
  );
}