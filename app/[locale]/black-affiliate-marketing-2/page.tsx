import { setRequestLocale } from 'next-intl/server'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

// Динамічний імпорт компонентів для кращої швидкодії
const BlackAffiliateMarketing = dynamic(
  () => import('@/components/black-affiliate-marketing-2/Page'),
  { ssr: true, loading: () => <div className="min-h-screen bg-black flex items-center justify-center"><p className="text-white text-xl">Завантаження...</p></div> }
)

const Footer = dynamic(
  () => import('@/components/black-affiliate-marketing/Footer'),
  { ssr: true }
)

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
    url: 'https://www.advantage-agency.co/black-affiliate-marketing-2',
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
    canonical: 'https://www.advantage-agency.co/black-affiliate-marketing-2',
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
