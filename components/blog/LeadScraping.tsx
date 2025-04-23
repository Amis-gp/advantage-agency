"use client"
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Імпортуємо файли перекладів напряму
import enTranslations from '../../messages/en/blog/lead-scraping.json';
import ukTranslations from '../../messages/uk/blog/lead-scraping.json';

export default function LeadScraping() {
  const params = useParams();
  const locale = params.locale as string;
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const currentDate = new Date().toISOString();
  
  useEffect(() => {
    // Використовуємо імпортовані переклади замість динамічного імпорту
    const translationsToUse = locale === 'uk' ? ukTranslations : enTranslations;
    setTranslations(translationsToUse);
    document.title = translationsToUse.meta?.title || 'Lead Scraping';
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
  
  // Use relative paths instead of domain-based URLs
  const canonicalUrl = `/blog/lead-scraping`;
  
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
    <div className="bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        
        {/* Основні SEO-теги */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* OpenGraph теги для соцмереж */}
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:image" content="/img/blog/lead-scraping/hero.webp" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content={locale} />
        <meta property="article:published_time" content="2023-12-15T10:00:00Z" />
        <meta property="article:modified_time" content={currentDate} />
        <meta property="article:section" content="B2B Marketing" />
        <meta property="article:tag" content="B2B, Lead Generation, Lead Scraping" />
        
        {/* Twitter картки */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('meta.title')} />
        <meta name="twitter:description" content={t('meta.description')} />
        <meta name="twitter:image" content="/img/blog/lead-scraping/hero.webp" />
        
        {/* Альтернативні мовні версії */}
        <link rel="alternate" hrefLang="uk" href={`/uk/blog/lead-scraping`} />
        <link rel="alternate" hrefLang="en" href={`/en/blog/lead-scraping`} />
        <link rel="alternate" hrefLang="x-default" href={`/en/blog/lead-scraping`} />
        
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
        
        {/* Структуровані дані JSON-LD */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              'headline': t('meta.title'),
              'description': t('meta.description'),
              'image': '/img/blog/lead-scraping/hero.webp',
              'datePublished': '2023-12-15T10:00:00Z',
              'dateModified': currentDate,
              'publisher': {
                '@type': 'Organization',
                'name': 'ADvantage Agency',
                'logo': {
                  '@type': 'ImageObject',
                  'url': '/img/logo.png'
                }
              },
              'mainEntityOfPage': {
                '@type': 'WebPage',
                '@id': canonicalUrl
              }
            })
          }}
        />
      </Head>
      
      <div className="max-w-4xl mx-auto px-5 py-24 sm:pt-32 ">
        <div className="mb-8">
          <Link 
            href={`/${locale}/blog`}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {locale === 'uk' ? 'Назад до блогу' : 'Back to Blog'}
          </Link>
        </div>
        
        <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300" itemScope itemType="https://schema.org/BlogPosting">
          <meta itemProp="headline" content={t('meta.title')} />
          <meta itemProp="description" content={t('meta.description')} />
          <meta itemProp="datePublished" content="2023-12-15T10:00:00Z" />
          <meta itemProp="dateModified" content={currentDate} />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-display bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent" itemProp="headline">{t('title')}</h1>
          
          <div className="mb-10 flex items-center gap-3 text-gray-400">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime="2023-12-15" className="text-sm">{t('publishDate')}</time>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">{t('readTime')}</span>
            </div>
          </div>
          
          <div className="relative w-full h-[500px] mb-10 rounded-2xl overflow-hidden shadow-xl shadow-blue-900/20">
            <Image 
              src="/img/blog/lead-scraping/hero.webp" 
              alt={t('imageAlt')}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
          </div>
          
          <div className="mb-12 bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500">
            <p className="text-xl font-medium leading-relaxed text-white">{t('introduction')}</p>
          </div>
          
          <h2 className="text-3xl font-bold mt-16 mb-6 relative">
            <span className="inline-block">{t('sections.whatIsLeadParsing.title')}</span>
            <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-8 bg-blue-500"></span>
          </h2>
          <p className="text-lg">{t('sections.whatIsLeadParsing.content')}</p>
          <ul className="mt-6 space-y-4">
            {t('sections.whatIsLeadParsing.list').map((item: string, index: number) => (
              <li key={index} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-bold mt-16 mb-6 relative">
            <span className="inline-block">{t('sections.standardSolutions.title')}</span>
            <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-8 bg-blue-500"></span>
          </h2>
          <p className="text-lg">{t('sections.standardSolutions.content')}</p>
          <ul className="mt-6 space-y-4">
            {t('sections.standardSolutions.list').map((item: string, index: number) => (
              <li key={index} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4">{t('sections.standardSolutions.conclusion')}</p>

          <h2 className="text-3xl font-bold mt-16 mb-6 relative">
            <span className="inline-block">{t('sections.businessApplications.title')}</span>
            <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-8 bg-blue-500"></span>
          </h2>
          <p className="text-lg">{t('sections.businessApplications.content')}</p>
          <ul className="mt-6 space-y-4">
            {t('sections.businessApplications.list').map((item: string, index: number) => (
              <li key={index} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4">{t('sections.businessApplications.conclusion')}</p>

          
          
          <h2 className="text-3xl font-bold mt-16 mb-6 relative">
            <span className="inline-block">{t('sections.suitableNiches.title')}</span>
            <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-8 bg-blue-500"></span>
          </h2>
          <p className="text-lg">{t('sections.suitableNiches.content')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-blue-900/20 p-6 rounded-xl border-t-2 border-blue-500 hover:bg-blue-900/30 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-white">{t('sections.suitableNiches.b2b.title')}</h3>
              <p>{t('sections.suitableNiches.b2b.content')}</p>
            </div>
            
            <div className="bg-blue-900/20 p-6 rounded-xl border-t-2 border-blue-500 hover:bg-blue-900/30 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-white">{t('sections.suitableNiches.retail.title')}</h3>
              <p>{t('sections.suitableNiches.retail.content')}</p>
            </div>
            
            <div className="bg-blue-900/20 p-6 rounded-xl border-t-2 border-blue-500 hover:bg-blue-900/30 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-white">{t('sections.suitableNiches.realestate.title')}</h3>
              <p>{t('sections.suitableNiches.realestate.content')}</p>
            </div>
            
            <div className="bg-blue-900/20 p-6 rounded-xl border-t-2 border-blue-500 hover:bg-blue-900/30 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-white">{t('sections.suitableNiches.finance.title')}</h3>
              <p>{t('sections.suitableNiches.finance.content')}</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mt-16 mb-6 relative">
            <span className="inline-block">{t('sections.whyProfessionals.title')}</span>
            <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-8 bg-blue-500"></span>
          </h2>
          <p className="text-lg">{t('sections.whyProfessionals.content')}</p>
          
          <ul className="mt-6 space-y-4">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t('sections.whyProfessionals.list.item1')}</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t('sections.whyProfessionals.list.item2')}</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t('sections.whyProfessionals.list.item3')}</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t('sections.whyProfessionals.list.item4')}</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t('sections.whyProfessionals.list.item5')}</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t('sections.whyProfessionals.list.item6')}</span>
            </li>
          </ul>
          
          <div className="mt-16 bg-blue-900/20 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">{t('sections.conclusion.title')}</h2>
            <p className="text-lg">{t('sections.conclusion.content')}</p>
            
            <div className="mt-8">
              <Link 
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-8 transition-colors"
              >
                {t('sections.conclusion.cta')}
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}