import Header from '@/components/Header';
import AudienceSection from '@/components/offers/AudienceSection';
import HeroSection from '@/components/offers/HeroSections';
import { NextPage } from 'next';

const OffersPage: NextPage = () => {
    return (
        <div className="bg-black text-white overflow-x-hidden fixed inset-0 overflow-auto">
            <Header />
            <main className="no-select">
                <HeroSection />
                <AudienceSection />
            </main>
        </div>
    );
};

export default OffersPage;