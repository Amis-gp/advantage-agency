import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailVsLinkedIn from '@/components/blog/EmailVsLinkedIn';

// Імпорт перекладів для метаданих
import ukTranslations from '@/messages/uk/blog/email-vs-linkedin.json';
import enTranslations from '@/messages/en/blog/email-vs-linkedin.json';

interface Props {
  params: { locale: string }
}

// Генерація метаданих для SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const translations = params.locale === 'uk' ? ukTranslations : enTranslations;
  
  // Базові змінні для SEO з резервними текстами відповідно до мови
  const title = translations.meta?.title || (params.locale === 'uk' 
    ? 'Холодні листи vs LinkedIn: Який канал обрати для B2B лідогенерації' 
    : 'Cold Emails vs LinkedIn: Which Channel to Choose for B2B Lead Generation');
  const description = translations.meta?.description || (params.locale === 'uk' 
    ? 'Дізнайтеся про ключові відмінності між холодними листами та LinkedIn outreach для B2B лідогенерації, їхні переваги, недоліки та як обрати правильний канал для вашого бізнесу.' 
    : 'Learn the key differences between cold emails and LinkedIn outreach for B2B lead generation, their advantages, disadvantages, and how to choose the right channel for your business.');
  const publishDate = '2025-07-15T10:00:00Z';
  const imageUrl = 'https://www.advantage-agency.co/img/blog/email-vs-linkedin/hero.webp';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.advantage-agency.co';
  const canonicalUrl = `${baseUrl}/${params.locale}/blog/email-vs-linkedin`;
  
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
        'uk': `${baseUrl}/uk/blog/email-vs-linkedin`,
        'en': `${baseUrl}/en/blog/email-vs-linkedin`
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
      <EmailVsLinkedIn />
      <Footer />
    </div>
  );
}