import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import BlogComponent from '@/components/blog/Blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isUkrainian = locale === 'uk';

  return {
    title: isUkrainian
      ? 'Блог | Advantage Agency'
      : 'Blog | Advantage Agency',
    description: isUkrainian
      ? 'Досліджуйте наші останні статті, інсайти та кейси з media buying, digital marketing та performance marketing.'
      : 'Explore our latest articles, insights, and case studies on media buying, digital marketing, and performance marketing.',
    openGraph: {
      title: isUkrainian ? 'Блог | Advantage Agency' : 'Blog | Advantage Agency',
      description: isUkrainian
        ? 'Досліджуйте наші останні статті, інсайти та кейси'
        : 'Explore our latest articles, insights, and case studies',
      url: `https://www.advantage-agency.co/${locale}/blog`,
      siteName: 'Advantage Agency',
      locale: isUkrainian ? 'uk_UA' : 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `https://www.advantage-agency.co/${locale}/blog`,
      languages: {
        'en-US': 'https://www.advantage-agency.co/en/blog',
        'uk-UA': 'https://www.advantage-agency.co/uk/blog',
      },
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black">
      <Header />
      <BlogComponent params={{ locale }} />
      <Footer />
    </div>
  );
}

