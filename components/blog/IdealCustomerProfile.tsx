"use client"
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import enTranslations from '../../messages/en/blog/ideal-customer-profile.json';
import ukTranslations from '../../messages/uk/blog/ideal-customer-profile.json';

export default function IdealCustomerProfile() {
  const params = useParams();
  const locale = params.locale as string;
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const currentDate = new Date().toISOString();
  
  useEffect(() => {
    const translationsToUse = locale === 'uk' ? ukTranslations : enTranslations;
    setTranslations(translationsToUse);
    document.title = translationsToUse.meta?.title || 'Ideal Customer Profile';
    setIsLoading(false);
  }, [locale]);
  
  const t = (path: string) => {
    if (isLoading) return '';
    
    const regex = /(.*?)\[(\d+)\]$/;
    const match = path.match(regex);
    
    if (match) {
      const basePath = match[1];
      const index = parseInt(match[2], 10);
      
      const keys = basePath.split('.');
      let result = translations;
      
      for (const key of keys) {
        if (result && result[key] !== undefined) {
          result = result[key];
        } else {
          return '';
        }
      }
      
      if (Array.isArray(result) && index < result.length) {
        return result[index];
      }
      return '';
    } else {
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
    }
  };

  const renderHTML = (htmlContent: string) => {
    return { __html: htmlContent };
  };
  
  const canonicalUrl = `/blog/ideal-customer-profile`;
  
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
        
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:image" content="/img/blog/ideal-customer-profile/hero.webp" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content={locale} />
        <meta property="article:published_time" content="2024-05-15T10:00:00Z" />
        <meta property="article:modified_time" content={currentDate} />
        <meta property="article:section" content="B2B Marketing" />
        <meta property="article:tag" content="B2B, Lead Generation, ICP, Ideal Customer Profile" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('meta.title')} />
        <meta name="twitter:description" content={t('meta.description')} />
        <meta name="twitter:image" content="/img/blog/ideal-customer-profile/hero.webp" />
        
        <link rel="alternate" hrefLang="uk" href={`/uk/blog/ideal-customer-profile`} />
        <link rel="alternate" hrefLang="en" href={`/en/blog/ideal-customer-profile`} />
        <link rel="alternate" hrefLang="x-default" href={`/en/blog/ideal-customer-profile`} />
        
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
        
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              'headline': t('meta.title'),
              'description': t('meta.description'),
              'image': '/img/blog/ideal-customer-profile/hero.webp',
              'datePublished': '2024-05-15T10:00:00Z',
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
        
        <article className="prose prose-lg prose-invert max-w-none">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display text-white">
              {t('title')}
            </h1>
            <div className="flex items-center text-gray-400 mb-8">
              <time dateTime="2024-05-15">{t('publishDate')}</time>
              <span className="mx-2">•</span>
              <span>{t('readTime')}</span>
            </div>
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
              <Image
                src="/img/blog/ideal-customer-profile/hero.webp"
                alt={t('imageAlt')}
                fill
                className="object-cover"
                priority
              />
            </div>
          </header>
          
          <div className="text-xl text-gray-300 mb-10">
            {t('intro')}
          </div>
          
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              {t('sections.whyMassApproachFails.title')}
            </h2>
            <p className="mb-4 text-gray-300">
              {t('sections.whyMassApproachFails.content[0]')}
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
              {Array.isArray(t('sections.whyMassApproachFails.content[1]')) && 
                t('sections.whyMassApproachFails.content[1]').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))
              }
            </ul>
            <p className="text-gray-300">
              {t('sections.whyMassApproachFails.content[2]')}
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              {t('sections.howToIdentifyDecisionMaker.title')}
            </h2>
            <p className="mb-4 text-gray-300">
              {t('sections.howToIdentifyDecisionMaker.content[0]')}
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-300">
              {Array.isArray(t('sections.howToIdentifyDecisionMaker.content[1]')) && 
                t('sections.howToIdentifyDecisionMaker.content[1]').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))
              }
            </ol>
            <p className="text-gray-300">
              {t('sections.howToIdentifyDecisionMaker.content[2]')}
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              {t('sections.successfulICPExamples.title')}
            </h2>
            <p className="mb-6 text-gray-300">
              {t('sections.successfulICPExamples.content[0]')}
            </p>
            
            <div className="space-y-6 mb-6">
              {Array.isArray(t('sections.successfulICPExamples.content[1]')) && 
                t('sections.successfulICPExamples.content[1]').map((item: string, index: number) => (
                  <div key={index} className="bg-gray-800/50 p-6 rounded-lg">
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))
              }
            </div>
            
            <p className="text-gray-300">
              {t('sections.successfulICPExamples.content[2]')}
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              {t('sections.leadMagnetsRole.title')}
            </h2>
            <p className="mb-4 text-gray-300">
              {t('sections.leadMagnetsRole.content[0]')}
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
              {Array.isArray(t('sections.leadMagnetsRole.content[1]')) && 
                t('sections.leadMagnetsRole.content[1]').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))
              }
            </ul>
            <p className="text-gray-300" 
               dangerouslySetInnerHTML={renderHTML(t('sections.leadMagnetsRole.content[2]'))}>
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              {t('sections.conclusion.title')}
            </h2>
            <p className="mb-4 text-gray-300">
              {t('sections.conclusion.content[0]')}
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
              {Array.isArray(t('sections.conclusion.content[1]')) && 
                t('sections.conclusion.content[1]').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))
              }
            </ul>
            <p className="text-gray-300">
              {t('sections.conclusion.content[2]')}
            </p>
          </section>
        </article>
        
        <div className="mt-16 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2 text-white">
                {locale === 'uk' ? 'Поділитися статтею' : 'Share this article'}
              </h3>
              <div className="flex space-x-4">
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://advantage-agency.co${canonicalUrl}`)}&text=${encodeURIComponent(t('meta.title'))}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://advantage-agency.co${canonicalUrl}`)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://advantage-agency.co${canonicalUrl}`)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <Link 
                href={`https://calendly.com/advantage-agency-contact/30min`}
                className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-400 bg-transparent hover:bg-blue-500 hover:text-white transition-colors rounded-lg font-medium"
              >
                {locale === 'uk' ? 'Зв\'язатися з нами' : 'Contact Us'}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-white">
            {locale === 'uk' ? 'Інші статті' : 'Related Articles'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link 
              href={`/${locale}/blog/lead-magnets-for-cold-emails`}
              className="bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:translate-y-[-5px] flex flex-col h-full"
            >
              <div className="relative h-48 w-full">
                <Image
                  src="/img/blog/lead-magnets/hero.webp"
                  alt="Lead Magnets for Cold Emails"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h4 className="text-xl font-bold mb-3 text-white">
                  {locale === 'uk' ? 'Лід-магніти для холодних листів' : 'Lead Magnets for Cold Emails'}
                </h4>
                <p className="text-gray-300 mb-4">
                  {locale === 'uk' 
                    ? 'Як створювати ефективні лід-магніти для підвищення конверсії холодних листів' 
                    : 'How to create effective lead magnets to increase cold email conversion'}
                </p>
                <div className="mt-auto text-blue-400 font-medium">
                  {locale === 'uk' ? 'Читати далі' : 'Read More'} →
                </div>
              </div>
            </Link>
            
            <Link 
              href={`/${locale}/blog/lead-scraping`}
              className="bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:translate-y-[-5px] flex flex-col h-full"
            >
              <div className="relative h-48 w-full">
                <Image
                  src="/img/blog/lead-scraping/hero.webp"
                  alt="Lead Scraping"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h4 className="text-xl font-bold mb-3 text-white">
                  {locale === 'uk' ? 'Парсинг лідів для B2B' : 'Lead Scraping for B2B'}
                </h4>
                <p className="text-gray-300 mb-4">
                  {locale === 'uk' 
                    ? 'Етичні та ефективні методи збору контактів для B2B лідогенерації' 
                    : 'Ethical and effective methods of contact collection for B2B lead generation'}
                </p>
                <div className="mt-auto text-blue-400 font-medium">
                  {locale === 'uk' ? 'Читати далі' : 'Read More'} →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}