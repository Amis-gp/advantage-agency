import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import LeadScraping from '@/components/blog/LeadScraping';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Імпорт перекладів для метаданих
import ukTranslations from '@/messages/uk/blog/lead-scraping.json';
import enTranslations from '@/messages/en/blog/lead-scraping.json';

interface Props {
  params: { locale: string }
}

// Генерація метаданих для SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const translations = params.locale === 'uk' ? ukTranslations : enTranslations;
  
  // Базові змінні для SEO
  const title = translations.meta?.title || 'Lead Scraping: Як знайти ідеальних клієнтів для вашого бізнесу';
  const description = translations.meta?.description || 'Дізнайтеся, як lead scraping може допомогти вашому бізнесу знайти ідеальних клієнтів.';
  const publishDate = '2025-04-23T10:00:00Z';
  const imageUrl = 'https://www.advantage-agency.co/img/blog/lead-scraping/hero.webp';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.advantage-agency.co';
  const canonicalUrl = `${baseUrl}/${params.locale}/blog/lead-scraping`;
  
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
        'uk': `${baseUrl}/uk/blog/lead-scraping`,
        'en': `${baseUrl}/en/blog/lead-scraping`
      }
    },
    authors: [{ name: 'ADvantage Agency' }],
  };
}

export default function LeadScrapingPage({ params }: Props) {
  setRequestLocale(params.locale);
  
  return (
    <div>
      <Header />
      <LeadScraping />
      <Footer />
    </div>
  );
}