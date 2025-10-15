'use client'

import React from 'react';
import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import V22Form from '@/components/cases/Form2';
import V22Footer from '@/components/cases/Footer2';

const V22Page: NextPage = () => {
  const params = useParams();
  const locale = params.locale as string;
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const translations = await import(`/messages/${locale}/cases/v22.json`);
        setTranslations(translations.default);
        document.title = translations.default.seo.title;
      } catch (error) {
        console.error('error download translate:', error);
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

  if (isLoading) {
    return (
      <div className="bg-black flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600 mb-4"></div>
          <p className="text-xl font-medium text-white">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white">
      <Header />
      
      <main className="overflow-x-hidden pt-20">
        <section ref={heroRef} className="px-6 relative pt-16">
          <div className="absolute top-0 -left-40 xl:left-10 w-64 h-64 opacity-30">
            <Image src="/img/home/gradient-ball-1.svg" className="animate-float" alt="Decorative" width={426} height={426}/>
          </div>
          
          <div className="absolute -top-20 -right-52 sm:-right-80 w-[426px] h-[426px] opacity-20">
            <Image src="/img/home/lines.svg" alt="Decorative lines" width={726} height={726}/>
          </div>

          <div className="max-w-6xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-red-500 uppercase tracking-wider text-sm mb-4 block">Case Study</span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase" dangerouslySetInnerHTML={{ __html: t('hero.title') }}>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
                {t('hero.subtitle')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden max-w-4xl mx-auto mb-12"
            >
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="bg-gradient-to-r from-red-600 to-red-500">
                    <tr>
                      <th className="px-6 py-4 font-semibold uppercase tracking-wider text-left">Parameter</th>
                      <th className="px-6 py-4 font-semibold uppercase tracking-wider text-left">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    {t('overview.stats') && t('overview.stats').map((stat: any, index: number) => (
                      <tr key={index} className="hover:bg-zinc-800 transition-colors duration-150">
                        <td className="px-6 py-4 font-medium text-gray-300">{stat.parameter}</td>
                        <td className="px-6 py-4 text-white">{stat.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <p className="text-lg text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('intro.description') }}>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-4xl mx-auto mb-12 rounded-xl overflow-hidden"
            >
              <Image 
                src="/img/v22/image1.webp" 
                alt="Slovakia Multi-Geo PWA Campaign" 
                width={1200} 
                height={675}
                className="w-full h-auto rounded-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center mt-12"
            >
            <a 
              href="#form" 
              className="te inline-block bg-white hover:bg-white/90 text-black px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              {t('cta.buttonText')}
            </a>
            </motion.div>
          </div>
        </section>

        <section ref={statsRef} className="pt-16 relative px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: t('multiGeo.title') }}></h2>
              <p className="text-lg text-gray-300 mb-6" dangerouslySetInnerHTML={{ __html: t('multiGeo.description') }}>
              </p>
              
              <ul className="space-y-3 mb-6">
                {t('multiGeo.points') && t('multiGeo.points').map((point: string, index: number) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-red-500 mt-1">•</span>
                    <span dangerouslySetInnerHTML={{ __html: point }}></span>
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 border border-red-500/30 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/5 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-red-500/5 rounded-full translate-y-8 -translate-x-8"></div>
                <p className="text-gray-300 relative z-10">
                  <strong className="text-red-500">{t('multiGeo.proTip.label')}</strong>{' '}
                  <span className="text-gray-400">{t('multiGeo.proTip.text')}</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: t('iosTraffic.title') }}></h2>
              <p className="text-lg text-gray-300 mb-6" dangerouslySetInnerHTML={{ __html: t('iosTraffic.description') }}>
              </p>

              <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700 rounded-xl p-6 relative">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300">
                      <strong className="text-red-500">{t('iosTraffic.insight.label')}</strong>{' '}
                      <span className="text-gray-400">{t('iosTraffic.insight.text')}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: t('facebookCampaign.title') }}></h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {t('facebookCampaign.points') && t('facebookCampaign.points').map((point: string, index: number) => (
                  <div 
                    key={index}
                    className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:bg-zinc-800/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-500 text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-300" dangerouslySetInnerHTML={{ __html: point }}></span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: t('creatives.title') }}></h2>
              <p className="text-lg text-gray-300 mb-6" dangerouslySetInnerHTML={{ __html: t('creatives.description') }}>
              </p>
              
              <div className="space-y-4">
                {t('creatives.points') && t('creatives.points').map((point: string, index: number) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gradient-to-r from-zinc-900/30 to-transparent border-l-4 border-red-500 rounded-r-lg"
                  >
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300" dangerouslySetInnerHTML={{ __html: point }}></span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700 rounded-2xl p-8 mt-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                      {t('optimization.strategy.title')}
                    </h3>
                    <p className="text-gray-400">
                      {t('optimization.strategy.description')}
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <svg className="w-32 h-32 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: t('optimization.title') }}></h2>
              <p className="text-lg text-gray-300 mb-6">{t('optimization.description')}</p>
              
              <div className="grid gap-4 mb-8">
                {t('optimization.points') && t('optimization.points').map((point: string, index: number) => (
                  <div 
                    key={index}
                    className="group relative overflow-hidden bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 hover:border-red-500/50 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-red-500 font-bold text-lg">{index + 1}</span>
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors" dangerouslySetInnerHTML={{ __html: point }}></span>
                    </div>
                  </div>
                ))}
              </div>

             
            </motion.div>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center px-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: t('conclusion.title') }}></h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8" dangerouslySetInnerHTML={{ __html: t('conclusion.description') }}>
          </p>
          
          <a 
            href="#form" 
            className="inline-block bg-white hover:bg-white/90 text-black px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            {t('cta.buttonText')}
          </a>
        </motion.div>

        <section className="pt-16 pb-10 px-6 relative bg-gradient-to-b from-black via-zinc-950 to-black">
          <div className="absolute -bottom-10 -right-56 opacity-20 animate-float">
            <Image src="/img/home/gradient-ball-1.svg" alt="Decorative" width={426} height={426}/>
          </div>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: t('whyMultiGeo.title') }}></h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {t('whyMultiGeo.points') && t('whyMultiGeo.points').map((point: string, index: number) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                        <span className="text-red-500 font-bold">{index + 1}</span>
                      </div>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-transparent"></div>
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors" dangerouslySetInnerHTML={{ __html: point }}></span>
                  </div>
                ))}
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
                <p className="text-gray-300">
                  <strong className="text-red-500">{t('whyMultiGeo.bonusInsight.label')}</strong>{' '}
                  <span className="text-gray-400">{t('whyMultiGeo.bonusInsight.text')}</span>
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-red-600 to-red-500 p-8 rounded-2xl shadow-2xl max-w-[80%] mx-auto"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <p className="text-5xl md:text-6xl font-bold mb-2">{t('finalResults.roi.percentage')}</p>
                    <p className="text-xl font-semibold">{t('finalResults.roi.label')}</p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-lg md:text-xl">
                      {t('finalResults.roi.description')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <V22Form />
      </main>

      <V22Footer />
    </div>
  );
};

export default V22Page;
