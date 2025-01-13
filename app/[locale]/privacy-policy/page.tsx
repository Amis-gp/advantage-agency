import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    const t = useTranslations('privacy');

    return (
        <div className="bg-black text-white min-h-screen pt-14">
            <Header />
            <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center mb-12">{t('title')}</h1>
                
                <div className="space-y-8">
                    <section className="bg-gray-900/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold mb-4 text-[#ff6315]">{t('storage.title')}</h2>
                        <p className="text-gray-300 leading-relaxed">{t('storage.content')}</p>
                    </section>

                    <section className="bg-gray-900/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold mb-4 text-[#ff6315]">{t('cookies.title')}</h2>
                        <p className="text-gray-300 leading-relaxed">{t('cookies.content')}</p>
                    </section>

                    <section className="bg-gray-900/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold mb-4 text-[#ff6315]">{t('security.title')}</h2>
                        <p className="text-gray-300 leading-relaxed">{t('security.content')}</p>
                    </section>

                    <section className="bg-gray-900/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold mb-4 text-[#ff6315]">{t('other.title')}</h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>{t('other.contact')}</p>
                            <p className="text-[#ff6315]">{t('other.email')}</p>
                            <p>{t('other.address')}</p>
                            <p>{t('other.phone')}</p>
                            <p>{t('other.disputes')}</p>
                            <p>{t('other.ageRestriction')}</p>
                            <p>{t('other.updates')}</p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ua' }];
}
