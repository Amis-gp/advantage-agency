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
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Affiliate Marketing | Advantage Agency',
    description: 'Professional Black Affiliate Marketing services. Start scaling your affiliate business today.',
  },
  alternates: {
    canonical: 'https://www.advantage-agency.co/black-affiliate-marketing',
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
