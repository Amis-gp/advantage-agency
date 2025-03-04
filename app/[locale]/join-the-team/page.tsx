import { setRequestLocale } from 'next-intl/server'
import Header from '@/components/join-the-team/Header'
import Hero from '@/components/join-the-team/Hero'
import AboutUs from '@/components/join-the-team/AboutUs'
import Vacancies from '@/components/join-the-team/Vacancies'
import Portfolio from '@/components/join-the-team/Portfolio'
import Choice from '@/components/join-the-team/Choice'
import Benefits from '@/components/join-the-team/Benefits'
import Testimonials from '@/components/join-the-team/Testimonials'
import Footer from '@/components/join-the-team/Footer'
interface Props {
  params: {
    locale: string;
  };
  searchParams: { 
    campaignId: string 
  };
}

export default function StatisticsPage({
  params: { locale },
  searchParams,
}: Props) {
  setRequestLocale(locale);

  return (
    <div className="">
      <Header />
      <Hero /> 
      <AboutUs />
      <Vacancies />
      <Portfolio />
      <Benefits />
      <Choice />
      <Testimonials />
      <Footer />
    </div>
  )
}
