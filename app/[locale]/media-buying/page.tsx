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
import Footer from '@/components/Footer';

export default function MediaBuyingPage({
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);

    return (
      <div className="relative bg-black text-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(/img/media-buying/background-dark-grunge.avif)`,
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
            <Instructions />
            <PartnersSection />
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
    return [{ locale: 'en' }, { locale: 'ua' }];
}
