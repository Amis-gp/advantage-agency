import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import AudienceSection from '@/components/offers/AudienceSection';
import HeroSection from '@/components/offers/HeroSections';

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
                <AudienceSection />
            </main>
        </div>
    );
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ua' }];
}
