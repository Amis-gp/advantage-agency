import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import ColdEmailAutomationComponent from '@/components/blog-white/ColdEmailAutomation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Імпорт перекладів для метаданих
import ukTranslations from '@/messages/uk/blog-white/cold-email-automation.json';
import enTranslations from '@/messages/en/blog-white/cold-email-automation.json';

interface Props {
  params: { locale: string }
}

// Генерація метаданих для SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const translations = params.locale === 'uk' ? ukTranslations : enTranslations;
  
  // Базові змінні для SEO
  const title = translations.meta?.title || 'Автоматизація холодних листів: як це працює, чому це ефективно і для кого підходить';
  const description = translations.meta?.description || 'Дізнайтеся, як холодні листи допомагають генерувати ліди, чому вони ефективні і для кого вони підходять. Кейси та поради від ADvantage Agency.';
  const publishDate = '2025-04-15T10:00:00Z';
  const imageUrl = 'https://www.advantage-agency.co/img/blog-white/cold-email-automation/hero.webp';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.advantage-agency.co';
  const canonicalUrl = `${baseUrl}/${params.locale}/blog-white/cold-email-automation`;
  
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
        'uk': `${baseUrl}/uk/blog-white/cold-email-automation`,
        'en': `${baseUrl}/en/blog-white/cold-email-automation`
      }
    },
    authors: [{ name: 'ADvantage Agency' }],
  };
}

export default function ColdEmailAutomationPage({ params }: Props) {
  setRequestLocale(params.locale);
  
  return (
    <div>
      <Header />
      <ColdEmailAutomationComponent />
      <Footer />
    </div>
  );
}