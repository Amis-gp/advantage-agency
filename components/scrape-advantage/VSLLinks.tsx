'use client';
import React from "react";
import { useLocale } from 'next-intl';
import en from '@/messages/en/scrape-advantage.json';
import uk from '@/messages/uk/scrape-advantage.json';
import Link from "next/link";

const VSLLinks = () => {
  const locale = useLocale();
  const translations = locale === 'uk' ? uk : en;

  // Функція для отримання перекладу за шляхом (через крапку)
  const t = (path: string): string => {
    const keys = path.split('.');
    let result: any = translations.vslLinks; // vslLinks — це корінь секції
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
    <section className="py-12 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Cold Email VSL */}
          <Link href="/vsl-cold-email" className="group">
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1 border border-zinc-700 hover:border-purple-500/40">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-700/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {t('coldEmail.title')}
                </h3>
                <p className="text-gray-400 mb-4">
                  {t('coldEmail.description')}
                </p>
                <span className="text-purple-400 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                  {t('viewNow')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* Scraping VSL */}
          <Link href="/vsl-scraping" className="group">
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-yellow-500/20 hover:-translate-y-1 border border-zinc-700 hover:border-yellow-500/40">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-yellow-700/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {t('scraping.title')}
                </h3>
                <p className="text-gray-400 mb-4">
                  {t('scraping.description')}
                </p>
                <span className="text-yellow-400 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                  {t('viewNow')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* Blog VSL */}
          <Link href="/vsl-blog" className="group">
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-teal-500/20 hover:-translate-y-1 border border-zinc-700 hover:border-teal-500/40">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-teal-700/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  {t('blog.title')}
                </h3>
                <p className="text-gray-400 mb-4">
                  {t('blog.description')}
                </p>
                <span className="text-teal-400 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                  {t('viewNow')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VSLLinks;
