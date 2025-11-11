import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/home-media-buying/HeroSections';
import FormSection from '@/components/home-media-buying/FormSection';
import StatsSection from '@/components/home-media-buying/StatsSection';
import IntroductionSection from '@/components/home-media-buying/IntroductionSection';
import PortfolioSection from '@/components/home-media-buying/PortfolioSection';
import PartnersSection from '@/components/home-media-buying/PartnersSection';
import Instructions from '@/components/home-media-buying/InstructionsSection';
import QuickLinksSection from '@/components/home-media-buying/QuickLinksSection';
import FaqSection from '@/components/home-media-buying/FAQSection';
import AdBlockSection from '@/components/home-media-buying/AdBlockSection';
import HowWeWorkSection from '@/components/home-media-buying/HowWeWorkSection';
import Footer from '@/components/Footer';
import CtaSection from '@/components/home-media-buying/CtaSection';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const isUkrainian = params.locale === 'uk';

  return {
    metadataBase: new URL('https://www.advantage-agency.co'),
    title: isUkrainian 
      ? 'Advantage Agency | Media Buying та Performance Marketing'
      : 'Advantage Agency | Media Buying & Performance Marketing',
    description: isUkrainian
      ? 'Професійний media buying для Facebook, TikTok та Google. Black Hat трафік, оптимізація кампаній та масштабування. Результати в цифрах: ROI 47%, тисячі конверсій.'
      : 'Professional media buying for Facebook, TikTok, and Google. Black Hat traffic, campaign optimization, and scaling. Results in numbers: 47% ROI, thousands of conversions.',
    keywords: isUkrainian
      ? [
          'media buying',
          'facebook ads',
          'tiktok ads',
          'google ads',
          'black hat traffic',
          'performance marketing',
          'campaign optimization',
          'affiliate marketing',
          'трафік',
          'реклама',
          'оптимізація кампаній',
          'масштабування',
          'конверсії',
          'ROI'
        ].join(', ')
      : [
          'media buying',
          'facebook ads',
          'tiktok ads',
          'google ads',
          'black hat traffic',
          'performance marketing',
          'campaign optimization',
          'affiliate marketing',
          'traffic generation',
          'advertising',
          'campaign scaling',
          'conversions',
          'ROI optimization'
        ].join(', '),
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      title: isUkrainian
        ? 'Advantage Agency | Media Buying та Performance Marketing'
        : 'Advantage Agency | Media Buying & Performance Marketing',
      description: isUkrainian
        ? 'Професійний media buying для Facebook, TikTok та Google. Black Hat трафік, оптимізація кампаній та масштабування.'
        : 'Professional media buying for Facebook, TikTok, and Google. Black Hat traffic, campaign optimization, and scaling.',
      url: `https://www.advantage-agency.co/${params.locale}`,
      siteName: 'Advantage Agency',
      locale: isUkrainian ? 'uk_UA' : 'en_US',
      alternateLocale: isUkrainian ? ['en_US'] : ['uk_UA'],
      images: [
        {
          url: 'https://www.advantage-agency.co/img/media-buying/bg.avif',
          width: 1200,
          height: 630,
          alt: isUkrainian ? 'Advantage Agency Media Buying' : 'Advantage Agency Media Buying',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isUkrainian
        ? 'Advantage Agency | Media Buying та Performance Marketing'
        : 'Advantage Agency | Media Buying & Performance Marketing',
      description: isUkrainian
        ? 'Професійний media buying для Facebook, TikTok та Google. Black Hat трафік та оптимізація кампаній.'
        : 'Professional media buying for Facebook, TikTok, and Google. Black Hat traffic and campaign optimization.',
      creator: '@advantageagency',
      images: ['https://www.advantage-agency.co/img/media-buying/bg.avif'],
    },
    alternates: {
      canonical: 'https://www.advantage-agency.co',
      languages: {
        'en-US': 'https://www.advantage-agency.co/en',
        'uk-UA': 'https://www.advantage-agency.co/uk',
      },
    },
    authors: [
      { name: 'Advantage Agency Team' }
    ],
    category: isUkrainian ? 'Media Buying' : 'Media Buying',
    other: {
      'og:site_name': 'Advantage Agency',
      'og:type': 'website',
      'og:locale': isUkrainian ? 'uk_UA' : 'en_US',
      'og:locale:alternate': isUkrainian ? ['en_US'] : ['uk_UA'],
    },
    applicationName: 'Advantage Agency',
    generator: 'Next.js',
    referrer: 'origin-when-cross-origin',
    creator: 'Advantage Agency Team',
    publisher: 'Advantage Agency',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

type Props = {
  params: Promise<{ locale: string }>
}

export default async function MediaBuyingPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
      <div className="relative bg-black text-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(/img/media-buying/bg.avif)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: 0.6,
          }}
        />
        <div className="relative">
          <main className="no-select h-full overflow-y-auto overflow-x-hidden">
            <HeroSection />
            <StatsSection />
            <IntroductionSection />
            <PortfolioSection />
            <AdBlockSection />
            <CtaSection />
            <Instructions />
            <PartnersSection />
            <HowWeWorkSection />
            <FormSection />
            <QuickLinksSection />
            <FaqSection />
          </main>
          <Footer />
        </div>
      </div>
    );
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'uk' }];
}
