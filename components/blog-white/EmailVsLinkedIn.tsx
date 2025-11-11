"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

import enTranslations from '@/messages/en/blog-white/email-vs-linkedin.json';
import ukTranslations from '@/messages/uk/blog-white/email-vs-linkedin.json';

const EmailVsLinkedIn: React.FC = () => {
  const params = useParams();
  const locale = params.locale as string;
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const loadTranslations = async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
      setTranslations(locale === 'uk' ? ukTranslations : enTranslations);
      setIsLoading(false);
    };
    loadTranslations();
  }, [locale]);

  const t = (key: string) => {
    return key.split('.').reduce((o, i) => (o as any)?.[i], translations) as string || key;
  };

  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-gray-900 to-black text-white font-sans min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">{locale === 'uk' ? 'Завантаження...' : 'Loading...'}</p>
        </div>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('title'),
    "description": t('intro'),
    "image": "https://advantage-agency.com/img/blog-white/email-vs-linkedin/hero.webp",
    "author": {
      "@type": "Organization",
      "name": "Advantage Agency",
      "url": "https://advantage-agency.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Advantage Agency",
      "logo": {
        "@type": "ImageObject",
        "url": "https://advantage-agency.com/img/logo.svg"
      }
    },
    "datePublished": "2025-06-24",
    "dateModified": "2025-06-24",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://advantage-agency.com/${locale}/blog/email-vs-linkedin`
    },
    "articleSection": "Marketing",
    "keywords": locale === 'uk' ? "холодні листи, LinkedIn аутріч, лідогенерація, B2B маркетинг, продажі" : "cold email, LinkedIn outreach, lead generation, B2B marketing, sales"
  };

  return (
    <>
      <Head>
        <title>{t('title')} | Advantage Agency</title>
        <meta name="description" content={t('intro')} />
        <meta name="keywords" content={locale === 'uk' ? "холодні листи, LinkedIn аутріч, лідогенерація, B2B маркетинг, продажі, емейл маркетинг" : "cold email, LinkedIn outreach, lead generation, B2B marketing, sales, email marketing"} />
        <meta property="og:title" content={t('title')} />
        <meta property="og:description" content={t('intro')} />
        <meta property="og:image" content="https://advantage-agency.com/img/blog-white/email-vs-linkedin/hero.webp" />
        <meta property="og:url" content={`https://advantage-agency.com/${locale}/blog/email-vs-linkedin`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('title')} />
        <meta name="twitter:description" content={t('intro')} />
        <meta name="twitter:image" content="https://advantage-agency.com/img/blog-white/email-vs-linkedin/hero.webp" />
        <link rel="canonical" href={`https://advantage-agency.com/${locale}/blog/email-vs-linkedin`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <article className="bg-gradient-to-br from-gray-900 to-black text-white font-sans" itemScope itemType="https://schema.org/Article">
        <div className="max-w-4xl mx-auto px-5 py-24 sm:pt-32">
      <div className="mb-6">
        <Link href={`/${locale}/blog-white`} className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t('backToBlog')}
        </Link>
      </div>

      <header>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-display bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent" itemProp="headline">{t('title')}</h1>
      </header>

      <div className="mb-10 flex items-center gap-3 text-gray-400">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <time dateTime="2025-06-24" className="text-sm" itemProp="datePublished">{t('publishDate')}</time>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm">{t('readTime')}</span>
        </div>
      </div>
      
      <figure className="mb-8 rounded-lg overflow-hidden border border-gray-800">
        <Image 
          src="/img/blog-white/email-vs-linkedin/hero.webp" 
          alt={t('title')} 
          width={800} 
          height={450} 
          className="w-full h-auto"
          itemProp="image"
          priority
        />
      </figure>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-lg text-gray-300"
      >
        <p className="mb-4" itemProp="description">{t('intro')}</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 text-gray-300"
      >
        <h2 className="text-2xl font-bold mb-4 text-white" id="cold-email">{t('coldEmail.title')}</h2>
        <p className="mb-4">{t('coldEmail.description')}</p>
        
        <h3 className="text-xl font-semibold mb-3 text-blue-300">{t('coldEmail.howItWorks.title')}</h3>
        <p className="mb-4">{t('coldEmail.howItWorks.description')}</p>
        
        <h3 className="text-xl font-semibold mb-3 text-blue-300">{t('coldEmail.advantages.title')}</h3>
        <ul className="list-disc pl-6 mb-4">
          {t('coldEmail.advantages.items').split('|').map((item: string, index: number) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
        
        <h3 className="text-xl font-semibold mb-3 text-blue-300">{t('coldEmail.disadvantages.title')}</h3>
        <ul className="list-disc pl-6 mb-4">
          {t('coldEmail.disadvantages.items').split('|').map((item: string, index: number) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
        
        <h3 className="text-xl font-semibold mb-3 text-blue-300">{t('coldEmail.example.title')}</h3>
        <p className="mb-4 bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">{t('coldEmail.example.description')}</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 text-gray-300"
      >
        <h2 className="text-2xl font-bold mb-4 text-white" id="linkedin-outreach">{t('linkedinOutreach.title')}</h2>
        <p className="mb-4">{t('linkedinOutreach.description')}</p>
        
        <h3 className="text-xl font-semibold mb-3 text-blue-300">{t('linkedinOutreach.howItWorks.title')}</h3>
        <p className="mb-4">{t('linkedinOutreach.howItWorks.description')}</p>
        
        <h3 className="text-xl font-semibold mb-3 text-blue-300">{t('linkedinOutreach.advantages.title')}</h3>
        <ul className="list-disc pl-6 mb-4">
          {t('linkedinOutreach.advantages.items').split('|').map((item: string, index: number) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
        
        <h3 className="text-xl font-semibold mb-3 text-blue-300">{t('linkedinOutreach.disadvantages.title')}</h3>
        <ul className="list-disc pl-6 mb-4">
          {t('linkedinOutreach.disadvantages.items').split('|').map((item: string, index: number) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
        
        <h3 className="text-xl font-semibold mb-3 text-blue-300">{t('linkedinOutreach.example.title')}</h3>
        <p className="mb-4 bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">{t('linkedinOutreach.example.description')}</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-8 text-gray-300"
      >
        <h2 className="text-2xl font-bold mb-4 text-white" id="comparison">{t('comparison.title')}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 border border-gray-700 rounded-lg">
            <thead>
              <tr className="bg-gray-900">
                <th className="py-3 px-4 border-b border-gray-700 text-left text-blue-300">{t('comparison.criteria')}</th>
                <th className="py-3 px-4 border-b border-gray-700 text-left text-blue-300">{t('comparison.coldEmail')}</th>
                <th className="py-3 px-4 border-b border-gray-700 text-left text-blue-300">{t('comparison.linkedin')}</th>
              </tr>
            </thead>
            <tbody>
              {['reach', 'response', 'personalization', 'cost', 'speed', 'automation'].map((criterion) => (
                <tr key={criterion} className="hover:bg-gray-700">
                  <td className="py-3 px-4 border-b border-gray-700 font-medium text-white">{t(`comparison.${criterion}.title`)}</td>
                  <td className="py-3 px-4 border-b border-gray-700">{t(`comparison.${criterion}.email`)}</td>
                  <td className="py-3 px-4 border-b border-gray-700">{t(`comparison.${criterion}.linkedin`)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-8 text-gray-300"
      >
        <h2 className="text-2xl font-bold mb-4 text-white" id="which-channel">{t('whichChannel.title')}</h2>
        <p className="mb-4">{t('whichChannel.description')}</p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-300">{t('whichChannel.chooseEmail.title')}</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {translations?.whichChannel?.chooseEmail?.items?.map((item: string, index: number) => (
              <li key={index} className="text-gray-300">{item}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-300">{t('whichChannel.chooseLinkedin.title')}</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {translations?.whichChannel?.chooseLinkedin?.items?.map((item: string, index: number) => (
              <li key={index} className="text-gray-300">{item}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-300">{t('whichChannel.chooseBoth.title')}</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {translations?.whichChannel?.chooseBoth?.items?.map((item: string, index: number) => (
              <li key={index} className="text-gray-300">{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4 text-white" id="conclusion">{t('conclusion.title')}</h2>
        <p className="mb-4">{t('conclusion.description')}</p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
          {translations?.conclusion?.items?.map((item: string, index: number) => (
            <li key={index} className="text-gray-300">{item}</li>
          ))}
        </ul>
        <p className="text-gray-300">{t('conclusion.additionalText')}</p>
      </motion.div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="p-6 bg-blue-900 border border-blue-800 rounded-lg text-center text-gray-300"
      >
        <h3 className="text-xl font-bold mb-4 text-white">{t('cta.title')}</h3>
        <p className="mb-4 text-gray-300">{t('cta.description')}</p>
        <p className="mb-4 text-lg font-semibold text-white">{t('cta.question')}</p>
        <p className="mb-6 text-gray-300">{t('cta.action')}</p>
        <Link href={`https://calendly.com/advantage-agency-contact/30min`} className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 transition duration-300">
          {locale === 'uk' ? 'Зв\'язатися з нами' : 'Contact Us'}
        </Link>
      </motion.div>
        </div>
      </article>
    </>
  );
};

export default EmailVsLinkedIn;