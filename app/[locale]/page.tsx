import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { type Locale } from '@/i18n/request';
import Header from '@/components/Header';
import HeroSection from '@/components/home/HeroSections';
import StatsSection from '@/components/home/StatsSection';
import IntroductionSection from '@/components/home/IntroductionSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import AchievementsSection from '@/components/home/AchievementsSection';
import PartnersSection from '@/components/home/PartnersSection';
import Instructions from '@/components/home/InstructionsSection';
import TeamSection from '@/components/home/TeamSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import ServicesSection from '@/components/home/ServicesSection';

import FaqSection from '@/components/home/FAQSection';
import Footer from '@/components/Footer';
import FormSection from '@/components/home/FormSection';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

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
  );
}