'use client';

import { useTranslations } from 'next-intl';

export default function CasesFooter() {
    const t = useTranslations('casesFooter');

    return (
        <section className="bg-gray-100 py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    {t('title')}
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
                    <div className="text-center">
                        <p className="text-lg font-bold mb-2">{t('callUs')}</p>
                        <a 
                            className="text-orange-600 text-xl transition-all duration-300 hover:text-orange-700 hover:underline" 
                            href="tel:+13393688255"
                        >
                            +1 (339) 368-82-55
                        </a>
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-bold mb-2">{t('emailUs')}</p>
                        <a 
                            className="text-orange-600 text-xl transition-all duration-300 hover:text-orange-700 hover:underline" 
                            href={`mailto:stepan@advantage-agency.co`}
                        >
                            stepan@advantage-agency.co
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}