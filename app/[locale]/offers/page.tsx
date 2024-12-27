import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import NavigationSection from '@/components/offers/NavigationSection';
import HeroSection from '@/components/offers/HeroSections';
import OffersSection from '@/components/offers/OffersSections';
import FormSection from '@/components/home/FormSection';
import Footer from '@/components/Footer';

export default function OffersPage({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);

    return (
        <div className="bg-black text-white overflow-x-hidden fixed inset-0 overflow-auto">
            <Header />
            <main className="no-select">
                <HeroSection />
                <NavigationSection />
                <OffersSection />
                <FormSection />
                <Footer />
            </main>
        </div>
    );
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ua' }];
}
