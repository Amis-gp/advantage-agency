import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import HeroSection from '@/components/scrape-advantage/Hero';
import Header from '@/components/scrape-advantage/Header';
import PlatformsLogos from '@/components/scrape-advantage/PlatformsLogos';
import Advantages from '@/components/scrape-advantage/Advantages';
import ForWhom from '@/components/scrape-advantage/ForWhom';
import HowItWorks from '@/components/scrape-advantage/HowItWorks';
import CaseStudy from '@/components/scrape-advantage/CaseStudy';
import Pricing from '@/components/scrape-advantage/Pricing';
import AboutAdvantage from '@/components/scrape-advantage/AboutAdvantage';
import FAQ from '@/components/scrape-advantage/FAQ';
import Footer from '@/components/scrape-advantage/Footer';
import Popup from '@/components/scrape-advantage/Popup';

// Generate metadata for the page
export function generateMetadata(): Metadata {
  return {
    title: 'Scrape Advantage',
    description: 'Scrape Advantage service page',
    icons: {
      icon: '/img/favicon.svg',
    },
  };
}

// Add viewport configuration
export function generateViewport() {
  return {
    themeColor: '#131328',
  };
}

export default function OffersPage({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);

    return (
      <div style={{ fontFamily: "'Geologica', 'Inter', sans-serif" }}>
          <Header />
          <HeroSection />
          <PlatformsLogos />
          <Advantages />
          <ForWhom />
          <HowItWorks />
          <CaseStudy />
          <Pricing />
          <AboutAdvantage />
          <FAQ />
          <Footer />
          <Popup />
        </div> 
    );
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'uk' }];
}
