"use client"
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function B2BLeadGenerationTrends() {
  const params = useParams();
  const locale = params.locale as string;
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const currentDate = new Date().toISOString();
  
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const translations = await import(`/messages/${locale}/blog/b2b-lead-generation-trends.json`);
        setTranslations(translations.default);
        document.title = translations.default.meta.title;
      } catch (error) {
        console.error('error downloading translations:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadTranslations();
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
  const canonicalUrl = `/blog/b2b-lead-generation-2025`;
  
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
        <meta property="og:image" content="/img/blog/b2b-lead-generation-trends-2025/hero.jpg" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content={locale} />
        <meta property="article:published_time" content="2023-11-15T10:00:00Z" />
        <meta property="article:modified_time" content={currentDate} />
        <meta property="article:author" content="/about" />
        <meta property="article:section" content="B2B Marketing" />
        <meta property="article:tag" content="B2B, Lead Generation, Marketing" />
        
        {/* Twitter картки */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('meta.title')} />
        <meta name="twitter:description" content={t('meta.description')} />
        <meta name="twitter:image" content="/img/blog/b2b-lead-generation-trends-2025/hero.jpg" />
        
        {/* Альтернативні мовні версії */}
        <link rel="alternate" hrefLang="uk" href={`/uk/blog/b2b-lead-generation-2025`} />
        <link rel="alternate" hrefLang="en" href={`/en/blog/b2b-lead-generation-2025`} />
        <link rel="alternate" hrefLang="x-default" href={`/en/blog/b2b-lead-generation-2025`} />
        
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
              'image': '/img/blog/b2b-lead-generation-trends-2025/hero.jpg',
              'datePublished': '2023-11-15T10:00:00Z',
              'dateModified': currentDate,
              'author': {
                '@type': 'Person',
                'name': t('sections.author.name')
              },
              'publisher': {
                '@type': 'Organization',
                'name': t('sections.author.company'),
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
        <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300" itemScope itemType="https://schema.org/BlogPosting">
          <meta itemProp="headline" content={t('meta.title')} />
          <meta itemProp="description" content={t('meta.description')} />
          <meta itemProp="datePublished" content="2023-11-15T10:00:00Z" />
          <meta itemProp="dateModified" content={currentDate} />
          <meta itemProp="author" content={t('sections.author.name')} />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-display bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent" itemProp="headline">{t('title')}</h1>
          
          <div className="mb-10 flex items-center gap-3 text-gray-400">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime="2023-11-15" className="text-sm">{t('publishDate')}</time>
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
              src="/img/blog/b2b-lead-generation-trends-2025/hero.jpg" 
              alt={t('imageAlt')}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
          </div>
          
          <div className="mb-12 bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500">
            <p className="text-xl font-medium leading-relaxed text-white">{t('introduction')}</p>
          </div>
          
          <p className="text-lg">{t('sections.keyTrends.content')}</p>
          
          <h3 className="text-2xl font-bold mt-12 mb-4 text-blue-300">{t('sections.aiDomination.title')}</h3>
          <p>{t('sections.aiDomination.content')}</p>
          
          <h3 className="text-2xl font-bold mt-12 mb-4 text-blue-300">{t('sections.accountPersonalization.title')}</h3>
          <p>{t('sections.accountPersonalization.content')}</p>
          
          <h3 className="text-2xl font-bold mt-12 mb-4 text-blue-300">{t('sections.dataPrivacy.title')}</h3>
          <p>{t('sections.dataPrivacy.content')}</p>
          
          <h2 className="text-3xl font-bold mt-16 mb-6 relative">
            <span className="inline-block">{t('sections.digitalStrategies.title')}</span>
            <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-8 bg-blue-500"></span>
          </h2>
          <p className="text-lg">{t('sections.digitalStrategies.content')}</p>
          
          <h3 className="text-2xl font-bold mt-12 mb-4 text-blue-300">{t('sections.contentMarketing.title')}</h3>
          <p>{t('sections.contentMarketing.content')}</p>
          
          <ul className="bg-gray-800/50 rounded-xl p-5 mt-6 mb-6 space-y-2">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t('sections.contentMarketing.list.item1')}</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t('sections.contentMarketing.list.item2')}</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t('sections.contentMarketing.list.item3')}</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t('sections.contentMarketing.list.item4')}</span>
            </li>
          </ul>
          
          <p className="text-gray-300 italic">{t('sections.contentMarketing.conclusion')}</p>
          
          <h3 className="text-2xl font-bold mt-12 mb-4 text-blue-300">{t('sections.socialMedia.title')}</h3>
          <p>{t('sections.socialMedia.content')}</p>
          
          <h3 className="text-2xl font-bold mt-12 mb-4 text-blue-300">{t('sections.emailAutomation.title')}</h3>
          <p>{t('sections.emailAutomation.content')}</p>
          
          <h2 className="text-3xl font-bold mt-16 mb-6 relative">
            <span className="inline-block">{t('sections.dataAnalytics.title')}</span>
            <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-8 bg-blue-500"></span>
          </h2>
          <p className="text-lg">{t('sections.dataAnalytics.content')}</p>
          
          <h3 className="text-2xl font-bold mt-12 mb-4 text-blue-300">{t('sections.leadQualification.title')}</h3>
          <p>{t('sections.leadQualification.content')}</p>
          
          <h3 className="text-2xl font-bold mt-12 mb-4 text-blue-300">{t('sections.behavioralAnalytics.title')}</h3>
          <p>{t('sections.behavioralAnalytics.content')}</p>
          
          <h3 className="text-2xl font-bold mt-12 mb-4 text-blue-300">{t('sections.crmIntegration.title')}</h3>
          <p>{t('sections.crmIntegration.content')}</p>
          
          <h2 className="text-3xl font-bold mt-16 mb-6 relative">
            <span className="inline-block">{t('sections.b2bVsB2c.title')}</span>
            <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-8 bg-blue-500"></span>
          </h2>
          <p className="text-lg">{t('sections.b2bVsB2c.content')}</p>
          
          <h3 className="text-2xl font-bold mt-12 mb-4 text-blue-300">{t('sections.salesCycles.title')}</h3>
          <p>{t('sections.salesCycles.content')}</p>
          
          <h3 className="text-2xl font-bold mt-12 mb-4 text-blue-300">{t('sections.expertContent.title')}</h3>
          <p>{t('sections.expertContent.content')}</p>
          
          <h3 className="text-2xl font-bold mt-12 mb-4 text-blue-300">{t('sections.metrics.title')}</h3>
          <p>{t('sections.metrics.content')}</p>
          
          <h2 className="text-3xl font-bold mt-16 mb-6 relative">
            <span className="inline-block">{t('sections.recommendations.title')}</span>
            <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-8 bg-blue-500"></span>
          </h2>
          <p className="text-lg">{t('sections.recommendations.content')}</p>
          
          <h3 className="text-2xl font-bold mt-12 mb-4 text-blue-300">{t('sections.aiIntegration.title')}</h3>
          <p>{t('sections.aiIntegration.content')}</p>
          
          <h3 className="text-2xl font-bold mt-12 mb-4 text-blue-300">{t('sections.contentStrategy.title')}</h3>
          <p>{t('sections.contentStrategy.content')}</p>
          
          <h3 className="text-2xl font-bold mt-12 mb-4 text-blue-300">{t('sections.omnichannel.title')}</h3>
          <p>{t('sections.omnichannel.content')}</p>
          
          <h3 className="text-2xl font-bold mt-12 mb-4 text-blue-300">{t('sections.salesMarketingAlignment.title')}</h3>
          <p>{t('sections.salesMarketingAlignment.content')}</p>
          
          <h2 className="text-3xl font-bold mt-16 mb-6 relative">
            <span className="inline-block">{t('sections.conclusion.title')}</span>
            <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-8 bg-blue-500"></span>
          </h2>
          <p className="text-lg">{t('sections.conclusion.content')}</p>
          
          <div className="my-8 p-6 bg-blue-900/30 border-l-4 border-blue-500 rounded-r-lg">
            <p className="font-medium">{t('sections.conclusion.keyToSuccess')}</p>
          </div>
          
          <p>{t('sections.conclusion.qualityOverQuantity')}</p>
          
          <div className="mt-16 mb-10 p-8 bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-white">{t('sections.cta.title')}</h3>
            <p className="mb-8 text-gray-300">{t('sections.cta.content')}</p>
            <Link 
              href="https://t.me/stepan_potichnyi" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors duration-300 group"
            >
              {t('sections.cta.buttonText')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          
          <div className="mt-16 p-6 bg-gray-800/50 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-white">{t('sections.references.title')}</h3>
            <ol className="list-decimal pl-5 space-y-2 text-gray-300">
              <li>{t('sections.references.list.item1')}</li>
              <li>{t('sections.references.list.item2')}</li>
              <li>{t('sections.references.list.item3')}</li>
              <li>{t('sections.references.list.item4')}</li>
            </ol>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8">
            <p className="italic text-gray-400">
              {t('sections.author.name')}, {t('sections.author.company')} <br />
              {t('sections.author.date')}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
