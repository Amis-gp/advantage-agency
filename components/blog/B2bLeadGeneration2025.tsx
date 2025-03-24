import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../LanguageSwitcher'
import { GetStaticProps } from 'next';

export default function B2BLeadGenerationTrends() {
  const t = useTranslations('blog.b2b-lead-generation-trends');
  
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:image" content="/img/blog/b2b-lead-generation-trends-2025/hero.jpg" />
        <meta property="og:type" content="article" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </Head>
      
      
      <div className="max-w-4xl mx-auto px-5 py-24 sm:pt-32">
        
        <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-display bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">{t('title')}</h1>
          
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
          
          <h2 className="text-3xl font-bold mt-16 mb-6 relative">
            <span className="inline-block">{t('sections.keyTrends.title')}</span>
            <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-8 bg-blue-500"></span>
          </h2>
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
        
        {/* <div className="mt-16 flex justify-center space-x-6">
          <a href="https://facebook.com/share" className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors duration-300 transform hover:scale-110">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://twitter.com/intent/tweet" className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-300 transition-colors duration-300 transform hover:scale-110">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="https://linkedin.com/shareArticle" className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 transform hover:scale-110">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        
        <div className="mt-16 mb-10">
          <h3 className="text-2xl font-bold mb-8 text-center text-white">{t('sections.relatedArticles.title')}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href={t('sections.relatedArticles.articles.article1.url')} className="group">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 hover:border-blue-800">
                <h4 className="font-semibold text-lg mb-2 text-blue-300 group-hover:text-blue-200 transition-colors">
                  {t('sections.relatedArticles.articles.article1.title')}
                </h4>
                <div className="mt-4 flex justify-end">
                  <span className="text-blue-400 text-sm group-hover:translate-x-1 transition-transform duration-300">Читати далі →</span>
                </div>
              </div>
            </a>
            <a href={t('sections.relatedArticles.articles.article2.url')} className="group">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 hover:border-blue-800">
                <h4 className="font-semibold text-lg mb-2 text-blue-300 group-hover:text-blue-200 transition-colors">
                  {t('sections.relatedArticles.articles.article2.title')}
                </h4>
                <div className="mt-4 flex justify-end">
                  <span className="text-blue-400 text-sm group-hover:translate-x-1 transition-transform duration-300">Читати далі →</span>
                </div>
              </div>
            </a>
            <a href={t('sections.relatedArticles.articles.article3.url')} className="group">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 hover:border-blue-800">
                <h4 className="font-semibold text-lg mb-2 text-blue-300 group-hover:text-blue-200 transition-colors">
                  {t('sections.relatedArticles.articles.article3.title')}
                </h4>
                <div className="mt-4 flex justify-end">
                  <span className="text-blue-400 text-sm group-hover:translate-x-1 transition-transform duration-300">Читати далі →</span>
                </div>
              </div>
            </a>
          </div> 
        </div>*/}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
};
