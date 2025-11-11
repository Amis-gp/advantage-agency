import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import LeadMagnets from '@/components/blog-white/LeadMagnets';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Імпорт перекладів для метаданих
import ukTranslations from '@/messages/uk/blog-white/lead-magnets-for-cold-emails.json';
import enTranslations from '@/messages/en/blog-white/lead-magnets-for-cold-emails.json';

interface Props {
  params: { locale: string }
}

// Генерація метаданих для SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const translations = params.locale === 'uk' ? ukTranslations : enTranslations;
  
  // Базові змінні для SEO
  const title = translations.meta?.title || 'Лід-магніти для холодних листів';
  const description = translations.meta?.description || 'Дізнайтеся, як створити ефективні лід-магніти для холодних листів, які допоможуть вам привернути більше клієнтів';
  const publishDate = '2025-05-10T10:00:00Z';
  const imageUrl = 'https://www.advantage-agency.co/img/blog-white/lead-magnets/hero.webp';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.advantage-agency.co';
  const canonicalUrl = `${baseUrl}/${params.locale}/blog-white/lead-magnets`;
  
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
        'uk': `${baseUrl}/uk/blog-white/lead-magnets`,
        'en': `${baseUrl}/en/blog-white/lead-magnets`
      }
    },
    authors: [{ name: 'ADvantage Agency' }],
  };
}

export default function LeadMagnetsPage({ params }: Props) {
  setRequestLocale(params.locale);
  
  return (
    <div>
      <Header />
      <LeadMagnets />
      <Footer />
    </div>
  );
}