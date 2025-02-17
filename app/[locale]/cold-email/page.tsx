import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/cold-email/Hero';
import Testimonials from '@/components/cold-email/Testimonials';
import HowItWorks from '@/components/cold-email/HowItWorks';
import FAQ from '@/components/cold-email/FAQ';
import Pricing from '@/components/cold-email/Pricing';
import Process from '@/components/cold-email/Process';
import Footer from '@/components/cold-email/Footer';
import ParticlesBackground from '@/components/cold-email/ParticlesBackground';
import Results from '@/components/cold-email/Results';
import CaseStudies from '@/components/cold-email/CaseStudies';

export default function OffersPage({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);

    return (
        <div className="relative min-h-screen bg-black overflow-x-hidden">
            <div className="fixed inset-0 z-0">
                <ParticlesBackground />
            </div>
            
            <div className="relative z-10">
                <Hero />
                <HowItWorks />
                <Process />
                <Results />
                <CaseStudies />
                <Testimonials />
                <Pricing />
                <FAQ />
                <Footer />
            </div>
        </div>
    );
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'uk' }];
}
