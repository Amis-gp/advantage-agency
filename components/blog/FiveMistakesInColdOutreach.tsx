"use client";

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

// Import translations directly
import enTranslations from '../../messages/en/blog/five-mistakes-in-cold-outreach.json';
import ukTranslations from '../../messages/uk/blog/five-mistakes-in-cold-outreach.json';

const FiveMistakesInColdOutreach = () => {
  const params = useParams();
  const locale = params.locale as string;
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const currentDate = new Date().toISOString();
  
  useEffect(() => {
    const translationsToUse = locale === 'uk' ? ukTranslations : enTranslations;
    setTranslations(translationsToUse);
    document.title = translationsToUse.meta?.title || 'Cold Outreach Mistakes';
    setIsLoading(false);
  }, [locale]);
  
  const t = (path: string) => {
    if (isLoading) return '';
    
    const keys = path.split('.');
    let result = translations;
    
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        return '';
      }
    }
    
    return result;
  };
  
  const getArrayData = (path: string) => {
    const data = t(path);
    return Array.isArray(data) ? data : [];
  };
  
  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-gray-900 to-black text-white font-sans min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-400 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
          <p className="mt-4 text-lg text-blue-300">Loading content...</p>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      <div className="max-w-4xl mx-auto px-5 py-24 sm:pt-32">
        <div className="mb-8">
          <Link 
            href={`/${locale}/blog`}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {locale === 'uk' ? 'Назад до блогу' : 'Back to Blog'}
          </Link>
        </div>
        
        <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300" itemScope itemType="https://schema.org/BlogPosting">
          <meta itemProp="headline" content={t('title')} />
          <meta itemProp="description" content={t('intro')} />
          <meta itemProp="datePublished" content="2023-11-14T10:00:00Z" />
          <meta itemProp="dateModified" content={currentDate} />
          <meta itemProp="author" content="ADvantage" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-display bg-gradient-to-r from-white via-blue-300 to-blue-400 bg-clip-text text-transparent" itemProp="headline">{t('title')}</h1>
         
          
          <div className="mb-10 flex items-center gap-3 text-gray-400 border-l-4 border-blue-500 pl-4 py-2">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>02.06.2025</span>
            </div>
            <span>•</span>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>ADvantage Agency</span>
            </div>
            <span>•</span>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>5 {t('readingTime')}</span>
            </div>
          </div>
          <div className="mb-8 relative">
            <Image
              src="/img/blog/five-mistakes-in-cold-outreach/hero.webp"
              alt={t('title')}
              width={1200}
              height={630}
              className="w-full h-auto rounded-lg shadow-lg mb-8"
              priority
            />
          </div>
          
          
          
          <div className="mb-10">
            <p className="text-gray-200 leading-relaxed">{t('intro')}</p>
          </div>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">{t('mistake1.title')}</h2>
            
            <div>
              <p className="text-gray-300 mb-4">{t('mistake1.description')}</p>
              
              <div className="mb-4 border-l-4 border-red-500/70 pl-4 py-1">
                <p className="text-red-300 mb-0"><strong>{t('mistake1.consequences')}</strong></p>
              </div>
              
              <div className="mb-4 border-l-4 border-green-500/70 pl-4 py-1">
                <p className="text-gray-300 mb-0"><strong className="text-green-300">{t('solution')}:</strong> {t('mistake1.solution')}</p>
              </div>
              
              <div className="border-l-4 border-blue-500/70 pl-4 py-1">
                <p className="text-gray-300 mb-0"><strong className="text-blue-300">{t('tip')}:</strong> {t('mistake1.tip')}</p>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">{t('mistake2.title')}</h2>
            
            <div>
              <p className="text-gray-300 mb-4">{t('mistake2.description')}</p>
              
              <div className="mb-4 border-l-4 border-red-500/70 pl-4 py-1">
                <p className="text-red-300 mb-0"><strong>{t('mistake2.consequences')}</strong></p>
              </div>
              
              <div className="mb-4 border-l-4 border-green-500/70 pl-4 py-1">
                <p className="text-gray-300 mb-0"><strong className="text-green-300">{t('solution')}:</strong> {t('mistake2.solution')}</p>
              </div>
              
              <div className="border-l-4 border-blue-500/70 pl-4 py-1">
                <p className="text-gray-300 mb-0"><strong className="text-blue-300">{t('tip')}:</strong> {t('mistake2.tip')}</p>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">{t('mistake3.title')}</h2>
            
            <div>
              <p className="text-gray-300 mb-4">{t('mistake3.description')}</p>
              
              <div className="mb-4 border-l-4 border-red-500/70 pl-4 py-1">
                <p className="text-red-300 mb-0"><strong>{t('mistake3.consequences')}</strong></p>
              </div>
              
              <div className="mb-4 border-l-4 border-green-500/70 pl-4 py-1">
                <p className="text-gray-300 mb-0"><strong className="text-green-300">{t('solution')}:</strong> {t('mistake3.solution')}</p>
              </div>
              
              <div className="border-l-4 border-blue-500/70 pl-4 py-1">
                <p className="text-gray-300 mb-0"><strong className="text-blue-300">{t('tip')}:</strong> {t('mistake3.tip')}</p>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">{t('mistake4.title')}</h2>
            
            <div>
              <p className="text-gray-300 mb-4">{t('mistake4.description')}</p>
              
              <div className="mb-4 border-l-4 border-red-500/70 pl-4 py-1">
                <p className="text-red-300 mb-0"><strong>{t('mistake4.consequences')}</strong></p>
              </div>
              
              <div className="mb-4 border-l-4 border-green-500/70 pl-4 py-1">
                <p className="text-gray-300 mb-0"><strong className="text-green-300">{t('solution')}:</strong> {t('mistake4.solution')}</p>
              </div>
              
              <div className="border-l-4 border-blue-500/70 pl-4 py-1">
                <p className="text-gray-300 mb-0"><strong className="text-blue-300">{t('tip')}:</strong> {t('mistake4.tip')}</p>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">{t('mistake5.title')}</h2>
            
            <div>
              <p className="text-gray-300 mb-4">{t('mistake5.description')}</p>
              
              <div className="mb-4 border-l-4 border-red-500/70 pl-4 py-1">
                <p className="text-red-300 mb-0"><strong>{t('mistake5.consequences')}</strong></p>
              </div>
              
              <div className="mb-4 border-l-4 border-green-500/70 pl-4 py-1">
                <p className="text-gray-300 mb-0"><strong className="text-green-300">{t('solution')}:</strong> {t('mistake5.solution')}</p>
              </div>
              
              <div className="border-l-4 border-blue-500/70 pl-4 py-1">
                <p className="text-gray-300 mb-0"><strong className="text-blue-300">{t('tip')}:</strong> {t('mistake5.tip')}</p>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent inline-block">{t('conclusion.title')}</h2>
            <p className="text-gray-200">{t('conclusion.description')}</p>
          </section>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">{locale === 'uk' ? 'Готові покращити ваші холодні листи?' : 'Ready to improve your cold emails?'}</h3>
            <p className="text-gray-300 mb-6">{t('cta')}</p>
            <Link 
              href={`https://calendly.com/advantage-agency-contact/30min`} 
              className="inline-flex items-center px-5 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors group"
            >
              {locale === 'uk' ? 'Зв\'яжіться з нами' : 'Contact us'}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FiveMistakesInColdOutreach;
