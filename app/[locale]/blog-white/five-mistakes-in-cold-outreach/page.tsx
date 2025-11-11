import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FiveMistakesInColdOutreach from '@/components/blog/FiveMistakesInColdOutreach';

// Імпорт перекладів для метаданих
import ukTranslations from '@/messages/uk/blog/five-mistakes-in-cold-outreach.json';
import enTranslations from '@/messages/en/blog/five-mistakes-in-cold-outreach.json';

interface Props {
  params: { locale: string }
}

// Генерація метаданих для SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const translations = params.locale === 'uk' ? ukTranslations : enTranslations;
  
  // Базові змінні для SEO з резервними текстами відповідно до мови
  const title = translations.meta?.title || (params.locale === 'uk' 
    ? '5 помилок у холодних листах і повідомленнях' 
    : '5 Mistakes in Cold Outreach Emails and Messages');
  const description = translations.meta?.description || (params.locale === 'uk' 
    ? 'Дізнайтеся про найпоширеніші помилки в холодних листах, які знижують ефективність ваших кампаній, та як їх уникнути' 
    : 'Discover the most common mistakes in cold emails that reduce the effectiveness of your campaigns and how to avoid them');
  const publishDate = '2025-06-02T10:00:00Z';
  const imageUrl = 'https://www.advantage-agency.co/img/blog/five-mistakes-in-cold-outreach/hero.webp';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.advantage-agency.co';
  const canonicalUrl = `${baseUrl}/${params.locale}/blog/five-mistakes-in-cold-outreach`;
  
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
        'uk': `${baseUrl}/uk/blog/five-mistakes-in-cold-outreach`,
        'en': `${baseUrl}/en/blog/five-mistakes-in-cold-outreach`
      }
    },
    authors: [{ name: 'ADvantage Agency' }],
  };
}

export default function Page({ params }: Props) {
  setRequestLocale(params.locale);
  
  return (
    <div>
      <Header />
      <FiveMistakesInColdOutreach />
      <Footer />
    </div>
  );
}
