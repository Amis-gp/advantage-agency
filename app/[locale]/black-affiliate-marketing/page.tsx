import { setRequestLocale } from 'next-intl/server'
import { Metadata } from 'next'
import BlackAffiliateMarketing from '@/components/black-affiliate-marketing/Page'
import Footer from '@/components/black-affiliate-marketing/Footer'

interface Props {
  params: { locale: string }
}

export const metadata: Metadata = {
  title: 'Black Affiliate Marketing | Advantage Agency',
  description: 'Professional Black Affiliate Marketing services. High-converting campaigns, expert team, and proven results. Start scaling your affiliate business today.',
  keywords: 'black affiliate marketing, affiliate marketing, high-converting campaigns, marketing agency, digital marketing',
  openGraph: {
    title: 'Black Affiliate Marketing | Advantage Agency',
    description: 'Professional Black Affiliate Marketing services. High-converting campaigns and proven results.',
    url: 'https://www.advantage-agency.co/black-affiliate-marketing',
    siteName: 'Advantage Agency',
    images: [
      {
        url: 'https://www.advantage-agency.co/og-black-affiliate.jpg',
        width: 1200,
        height: 630,
        alt: 'Black Affiliate Marketing Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Affiliate Marketing | Advantage Agency',
    description: 'Professional Black Affiliate Marketing services. Start scaling your affiliate business today.',
    images: ['https://www.advantage-agency.co/twitter-black-affiliate.jpg'],
  },
  alternates: {
    canonical: 'https://www.advantage-agency.co/black-affiliate-marketing',
    languages: {
      'en': 'https://www.advantage-agency.co/en/black-affiliate-marketing',
      'uk': 'https://www.advantage-agency.co/uk/black-affiliate-marketing',
    },
  },
}

export default function BlackAffiliatePage({ params: { locale } }: Props) {
  setRequestLocale(locale)
  
  return (
    <>
      <BlackAffiliateMarketing />
      <Footer />
    </>
  )
}
