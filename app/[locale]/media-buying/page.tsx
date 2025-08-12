import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import HeroSection from '@/components/home-media-buying/HeroSections';
import FormSection from '@/components/home-media-buying/FormSection';
import StatsSection from '@/components/home-media-buying/StatsSection';
import IntroductionSection from '@/components/home-media-buying/IntroductionSection';
import PortfolioSection from '@/components/home-media-buying/PortfolioSection';
import AchievementsSection from '@/components/home-media-buying/AchievementsSection';
import PartnersSection from '@/components/home-media-buying/PartnersSection';
import Instructions from '@/components/home-media-buying/InstructionsSection';
import TeamSection from '@/components/home-media-buying/TeamSection';
import TestimonialSection from '@/components/home-media-buying/TestimonialSection';
import QuickLinksSection from '@/components/home-media-buying/QuickLinksSection';
import FaqSection from '@/components/home-media-buying/FAQSection';
import Footer from '@/components/Footer';

export default function MediaBuyingPage({
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);

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
          <FormSection />
          <QuickLinksSection /> 
          <FaqSection />
        </main>
        <Footer />
      </div>
    );
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ua' }];
}
