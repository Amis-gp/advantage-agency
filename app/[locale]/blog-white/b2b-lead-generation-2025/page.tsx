import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import B2BLeadGenerationTrends from '@/components/blog/B2bLeadGeneration2025';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Імпорт перекладів для метаданих
import ukTranslations from '@/messages/uk/blog/b2b-lead-generation-trends.json';
import enTranslations from '@/messages/en/blog/b2b-lead-generation-trends.json';

interface Props {
  params: { locale: string }
}

// Генерація метаданих для SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const translations = params.locale === 'uk' ? ukTranslations : enTranslations;
  
  // Базові змінні для SEO
  const title = translations.meta?.title || 'Тренди B2B лід-генерації на 2025 рік';
  const description = translations.meta?.description || 'Дізнайтеся про найновіші тренди та стратегії в B2B лід-генерації, які домінуватимуть на ринку в 2025 році.';
  const publishDate = '2025-03-24T10:00:00Z';
  const imageUrl = 'https://www.advantage-agency.co/img/blog/b2b-lead-generation-trends-2025/hero.jpg';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.advantage-agency.co';
  const canonicalUrl = `${baseUrl}/${params.locale}/blog/b2b-lead-generation-2025`;
  
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
        'uk': `${baseUrl}/uk/blog/b2b-lead-generation-2025`,
        'en': `${baseUrl}/en/blog/b2b-lead-generation-2025`
      }
    },
    authors: [{ name: 'ADvantage Agency' }],
  };
}

export default function B2BLeadGeneration2025Page({ params }: Props) {
  setRequestLocale(params.locale);
  
  return (
    <div>
      <Header />
      <B2BLeadGenerationTrends />
      <Footer />
    </div>
  );
}