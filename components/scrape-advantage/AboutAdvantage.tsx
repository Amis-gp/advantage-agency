'use client';
import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import en from '@/messages/en/scrape-advantage.json';
import uk from '@/messages/uk/scrape-advantage.json';

const AboutAdvantage = () => {
  const locale = useLocale();
  const translations = locale === 'uk' ? uk : en;
  
  // Function to get translation by path
  const t = (path: string): string => {
    const keys = path.split('.');
    let result: any = translations.aboutAdvantage;
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        return '';
      }
    }
    return typeof result === 'string' ? result : '';
  };
  return (
    <section className="py-20 bg-[#131328]">
      <div className="max-w-4xl mx-auto px-6 text-center"> 
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {t('title')}
        </h2>
        <p className="text-lg md:text-xl text-[#F6C744] mb-10">
          {t('text')}
        </p>
        <Link href="/" target="_blank" rel="noopener noreferrer">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#F6C744] to-[#4B3694] text-[#131328] font-semibold shadow-lg transition hover:scale-105">
            {t('cta')}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AboutAdvantage;
