"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
// Remove Head import as it's not supported in app router
// import Head from 'next/head';

const ColdEmailAutomation = () => {
  const params = useParams();
  const locale = params.locale as string;
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const currentDate = new Date().toISOString();
  
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const translations = await import(`/messages/${locale}/blog/cold-email-automation.json`);
        setTranslations(translations.default);
        document.title = translations.default.title || 'Cold Email Automation';
      } catch (error) {
        console.error('Error loading translations:', error);
        // Спробуємо завантажити англійські переклади як запасний варіант
        try {
          const fallbackTranslations = await import(`/messages/en/blog/cold-email-automation.json`);
          setTranslations(fallbackTranslations.default);
          document.title = fallbackTranslations.default.title || 'Cold Email Automation';
        } catch (fallbackError) {
          console.error('Error loading fallback translations:', fallbackError);
        }
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
  
  // Helper function to safely get array data from translations
  const getArrayData = (path: string) => {
    const data = t(path);
    return Array.isArray(data) ? data : [];
  };
  
  // Use relative paths instead of domain-based URLs
  const canonicalUrl = `/blog/cold-email-automation`;
  
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
        <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300" itemScope itemType="https://schema.org/BlogPosting">
          <meta itemProp="headline" content={t('title')} />
          <meta itemProp="description" content={t('intro')} />
          <meta itemProp="datePublished" content="2023-11-15T10:00:00Z" />
          <meta itemProp="dateModified" content={currentDate} />
          <meta itemProp="author" content="Advantage Agency" />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-display bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent" itemProp="headline">{t('title')}</h1>
          
          <div className="mb-10 flex items-center gap-3 text-gray-400">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime="2023-11-15" className="text-sm">April 15, 2025</time>
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
              src="/img/blog/cold-email-automation/hero.webp" 
              alt={t('title')}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
          </div>
          
          <div className="mb-12 bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500">
            <p className="text-xl font-medium leading-relaxed text-white">{t('intro')}</p>
          </div>
          
          {/* Section 1 */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 mr-4 text-white font-bold">
                1
              </div>
              <h2 className="text-2xl font-bold text-white">{t('section1.title')}</h2>
            </div>
            
            <p className="mb-6 text-gray-300">
              {t('section1.intro')}
            </p>
            
            <ul className="space-y-3 mb-6 list-none pl-0">
              {getArrayData('section1.points').map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">✓</span>
                  <div>
                    <span className="font-medium text-white">{point.title}</span> 
                    <span className="text-gray-300"> {point.description}</span>
                  </div>
                </li>
              ))}
            </ul>
            
            <p className="text-gray-300">
              {t('section1.conclusion')}
            </p>
          </section>

          {/* Rest of your sections remain the same */}
          {/* Section 2 */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 mr-4 text-white font-bold">
                2
              </div>
              <h2 className="text-2xl font-bold text-white">{t('section2.title')}</h2>
            </div>
            
            <p className="mb-6 text-gray-300">
              {t('section2.intro')}
            </p>
            
            <ul className="space-y-3 mb-6 list-none pl-0">
              {getArrayData('section2.points').map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">✓</span>
                  <div>
                    <span className="font-medium text-white">{point.title}</span> 
                    <span className="text-gray-300"> {point.description}</span>
                  </div>
                </li>
              ))}
            </ul>
            
            <p className="text-gray-300">
              {t('section2.conclusion')}
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 mr-4 text-white font-bold">
                3
              </div>
              <h2 className="text-2xl font-bold text-white">{t('section3.title')}</h2>
            </div>
            
            <p className="mb-6 text-gray-300">
              {t('section3.intro')}
            </p>
            
            <ul className="space-y-3 mb-6 list-none pl-0">
              {getArrayData('section3.points').map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">✓</span>
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-gray-300">
              <span className="font-medium text-white">{t('section3.examplesTitle')}</span> {t('section3.examples')}
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 mr-4 text-white font-bold">
                4
              </div>
              <h2 className="text-2xl font-bold text-white">{t('section4.title')}</h2>
            </div>
            
            <p className="mb-6 text-gray-300">
              {t('section4.intro')}
            </p>
            
            <ul className="space-y-3 mb-6 list-none pl-0">
              {getArrayData('section4.points').map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">✓</span>
                  <div>
                    <span className="font-medium text-white">{point.title}</span> 
                    <span className="text-gray-300"> {point.description}</span>
                  </div>
                </li>
              ))}
            </ul>
            
            <p className="text-gray-300">
              {t('section4.conclusion')}
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 mr-4 text-white font-bold">
                5
              </div>
              <h2 className="text-2xl font-bold text-white">{t('section5.title')}</h2>
            </div>
            
            <p className="mb-6 text-gray-300">
              {t('section5.intro')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {getArrayData('section5.cases').map((caseItem, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-lg shadow-md border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <h3 className="font-bold text-lg mb-2 text-white">{caseItem.title}</h3>
                  <p className="text-gray-300">
                    {caseItem.description}
                  </p>
                </div>
              ))}
            </div>
            
            <p className="text-gray-300">
              {t('section5.conclusion')}
            </p>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-white">{t('conclusion.title')}</h2>
            
            <p className="mb-6 text-gray-300">
              {t('conclusion.intro')}
            </p>
            
            <ul className="space-y-3 mb-6 list-none pl-0">
              {getArrayData('conclusion.points').map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">✓</span>
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-gray-300">
              {t('conclusion.final')}
            </p>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-10 rounded-2xl text-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">{t('cta.title')}</h3>
            <p className="mb-8 text-blue-100">{t('cta.subtitle')}</p>
            <Link href="https://calendly.com/advantage-agency-contact/30min" className="inline-block bg-white text-blue-600 font-bold py-3 px-10 rounded-full hover:bg-blue-50 transition duration-300 shadow-lg">
              {t('cta.buttonText')}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ColdEmailAutomation;