import { setRequestLocale } from 'next-intl/server'
import { Metadata } from 'next'

export const runtime = 'nodejs'
export const revalidate = 3600

import HeroSection from '@/components/black-affiliate-marketing-2/HeroSection'
import CourseTargetSection from '@/components/black-affiliate-marketing-2/CourseTargetSection'
import ProvidingSection from '@/components/black-affiliate-marketing-3/ProvidingSection'
import PhaseSystemSection from '@/components/black-affiliate-marketing-2/PhaseSystemSection'
import PricingSection from '@/components/black-affiliate-marketing-3/PricingSection'
import FAQSection from '@/components/black-affiliate-marketing-2/FAQSection'
import TwoOptionsSection from '@/components/black-affiliate-marketing-3/TwoOptionsSection'
import TestimonialsSection from '@/components/black-affiliate-marketing-3/TestimonialsSection'
import PWATrafficPopunder from '@/components/black-affiliate-marketing-2/PWATrafficPopunder'

import Footer from '@/components/black-affiliate-marketing-3/Footer'

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
    canonical: 'https://www.advantage-agency.co/black-affiliate-marketing-3',
    languages: {
      'en-US': 'https://www.advantage-agency.co/en/black-affiliate-marketing-3-s',
      'uk-UA': 'https://www.advantage-agency.co/uk/black-affiliate-marketing-3-s',
    },
  },
}

export default async function BlackAffiliatePage({ params: { locale } }: Props) {
  setRequestLocale(locale)
  
  return (
    <>
      <div className="min-h-screen bg-black text-white text-center px-4 pt-10 pb-14 overflow-hidden font-sans relative">
        <div 
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-red-600/30 blur-[150px] -z-10"
          style={{ filter: 'blur(150px)' }}
        />
        
        <main className="max-w-6xl mx-auto relative z-10">
          <HeroSection />
          <CourseTargetSection />
          <ProvidingSection />
          <PhaseSystemSection />
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
          <TwoOptionsSection />
        </main>
      </div>
      <PWATrafficPopunder />
      <Footer />
    </>
  )
}
