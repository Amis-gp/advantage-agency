import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { setRequestLocale } from 'next-intl/server'
import { type Locale } from '@/i18n/request'
import Header from '@/components/Header'
import HeroSection from '@/components/home/HeroSections'
import StatsSection from '@/components/home/StatsSection'
import IntroductionSection from '@/components/home/IntroductionSection'
import PortfolioSection from '@/components/home/PortfolioSection'
import AchievementsSection from '@/components/home/AchievementsSection'
import PartnersSection from '@/components/home/PartnersSection'
import Instructions from '@/components/home/InstructionsSection'
import dynamic from 'next/dynamic'

const TeamSection = dynamic(() => import('@/components/home/TeamSection'), {
  loading: () => <div>Loading...</div>
})
const TestimonialSection = dynamic(() => import('@/components/home/TestimonialSection'), {
  loading: () => <div>Loading...</div>
})
const ServicesSection = dynamic(() => import('@/components/home/ServicesSection'), {
  loading: () => <div>Loading...</div>,
  ssr: false
})
const FormSection = dynamic(() => import('@/components/home/FormSection'), {
  loading: () => <div>Loading...</div>,
  ssr: false
})
const FaqSection = dynamic(() => import('@/components/home/FAQSection'), {
  loading: () => <div>Loading...</div>
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div>Loading...</div>
})



export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const isUkrainian = params.locale === 'ua'

  return {
    metadataBase: new URL('https://www.advantage-agency.co'),
    title: isUkrainian 
      ? 'Advantage Agency | Агенція Цифрового Маркетингу'
      : 'Advantage Agency | Digital Marketing Agency',
    description: isUkrainian
      ? 'Повний спектр digital-послуг: Google Ads, Facebook Ads, Black Affiliate Marketing, розробка прелендінгів, email маркетинг та парсинг даних. Досягайте результатів з нашою експертною командою та комплексними маркетинговими рішеннями.'
      : 'Full-service digital agency specializing in Google Ads, Facebook Ads, Black Affiliate Marketing, Pre-landing Development, Email Marketing, and Data Parsing. Drive results with our expert team and comprehensive marketing solutions.',
    keywords: isUkrainian
      ? [
          'digital агенція',
          'google реклама',
          'facebook реклама',
          'black affiliate marketing',
          'управління PPC',
          'соціальні мережі',
          'розробка прелендінгів',
          'створення лендінгів',
          'email маркетинг',
          'парсинг даних',
          'генерація лідів',
          'маркетингова автоматизація',
          'цифрова реклама',
          'веб скрапінг',
          'збір даних',
          'email кампанії',
          'оптимізація конверсії',
          'маркетингова агенція',
          'цифрові рішення',
          'performance marketing'
        ].join(', ')
      : [
          'digital marketing agency',
          'google ads',
          'facebook ads',
          'black affiliate marketing',
          'PPC management',
          'social media marketing',
          'pre-landing pages',
          'landing page development',
          'email marketing',
          'data parsing',
          'lead generation',
          'marketing automation',
          'digital advertising',
          'web scraping',
          'data extraction',
          'email campaigns',
          'conversion optimization',
          'marketing agency',
          'digital solutions',
          'performance marketing'
        ].join(', '),
    robots: 'index, follow',
    openGraph: {
      images: [
        {
          url: 'img/og-image.jpg',
          width: 1000,
          height: 700,
        },
      ],
      type: 'website',
      title: isUkrainian
        ? 'Advantage Agency | Повний Спектр Цифрового Маркетингу'
        : 'Advantage Agency | Full-Service Digital Marketing Agency',
      description: isUkrainian
        ? 'Експертні послуги з цифрового маркетингу: Google та Facebook реклама, розробка прелендінгів, email маркетинг та парсинг даних.'
        : 'Expert digital marketing services including Google & Facebook Ads, Pre-landing Development, Email Marketing, and Data Parsing solutions.',
      url: `https://www.advantage-agency.co/${params.locale}`,
      siteName: 'Advantage Agency',
      locale: isUkrainian ? 'uk_UA' : 'en_US',
      alternateLocale: isUkrainian ? ['en_US'] : ['uk_UA'],
    },
    twitter: {
      images: ['img/og-image.jpg'],
      card: 'summary_large_image',
      title: isUkrainian
        ? 'Advantage Agency | Повний Спектр Цифрового Маркетингу'
        : 'Advantage Agency | Full-Service Digital Marketing Agency',
      description: isUkrainian
        ? 'Експертні рішення з цифрового маркетингу, розробки прелендінгів, email маркетингу та парсингу даних.'
        : 'Expert digital marketing, pre-landing development, email marketing and data parsing solutions.',
      creator: '@advantageagency',
    },
    alternates: {
      canonical: 'https://www.advantage-agency.co',
      languages: {
        'en-US': 'https://www.advantage-agency.co/en',
        'uk-UA': 'https://www.advantage-agency.co/ua',
      },
    },
    authors: [
      { name: 'Advantage Agency Team' }
    ],
    category: isUkrainian ? 'Цифровий Маркетинг' : 'Digital Marketing',
    icons: {
      icon: '/favicon.svg',
      apple: '/apple-touch-icon.png',
    },
    other: {
      'og:site_name': 'Advantage Agency',
      'og:type': 'website',
      'og:locale': isUkrainian ? 'uk_UA' : 'en_US',
      'og:locale:alternate': isUkrainian ? ['en_US'] : ['uk_UA'],
      'business:contact_data:locality': 'Ukraine',
      'business:contact_data:email': 'contact@advantage-agency.co',
      'business:contact_data:website': 'https://www.advantage-agency.co',
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
  }
}

type Props = {
  params: Promise<{ locale: Locale }>
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations()

  return (
    <div className="bg-black text-white">
      <Header />
      <main className="no-select h-full overflow-y-auto overflow-x-hidden">
        <HeroSection />
        <StatsSection />
        <IntroductionSection />
        <PortfolioSection />
        <AchievementsSection />
        <PartnersSection />
        <Instructions />
        <TeamSection />
        <TestimonialSection />
        <ServicesSection />
        <FormSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}