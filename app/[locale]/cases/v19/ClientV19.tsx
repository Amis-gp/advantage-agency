"use client"

import { NextPage } from 'next';
import { useEffect, useState, Fragment, useRef } from 'react';
import '@/app/styles.css'
import MessengerButton from '@/components/cases/MessengerButton';
import Formspree from '@/components/cases/Formspree';
import CasesFooter from '@/components/cases/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useParams } from 'next/navigation';
import Image from 'next/image';

const V19Page: NextPage = () => {
  const params = useParams();
  const locale = params.locale as string;
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const translations = await import(`/messages/${locale}/cases/v19.json`);
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
  
  function openImage(image: string) {
    setCurrentImage(image);
    setIsImageOpen(true);
  }

  function closeImage() {
    setIsImageOpen(false);
  }
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600 mb-4"></div>
          <p className="text-xl font-medium">Loading...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-slate-50 text-slate-800">
      <div className="absolute top-0 right-4">
        <LanguageSwitcher />
      </div>
      
      <div className="bg-gradient-to-br from-red-900 to-orange-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-200 text-orange-900 rounded-full font-medium mb-6">
              {t('hero.subtitle')}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              {t('hero.title')}
            </h1>
            
            <div className="flex items-center gap-4 mt-8">
              <div className="h-1 w-12 bg-orange-400"></div>
              <p className="text-xl text-orange-100">{t('hero.description')}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto sm:px-6 -mt-10">
        <div className="bg-white shadow-xl rounded-3xl px-4 py-8 md:p-12 mb-16">
          <div className="mb-16">
            <div className="flex items-start gap-6 mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  <span className="py-2 px-3 mr-4 justify-center bg-red-100 text-red-600 rounded-2xl text-2xl flex-shrink-0">
                  🌶️
                  </span>
                  {t('intro.title')}
                </h2>
                <div 
                  className="text-lg text-slate-700 leading-relaxed prose max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: t('intro.description')
                  }}
                />
              </div>
            </div>
            
            <div className="relative ml-4 pl-10 border-l-2 border-red-200 py-4 mb-10">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                <span className="text-white text-sm">1</span>
              </div>
              <h3 className="text-xl font-bold text-red-700 mb-6">{t('stats.title')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {t('stats.items') && Array.isArray(t('stats.items')) && t('stats.items').map((stat: any, index: number) => {
                  const isHighlight = stat.label === 'ROI' || stat.label === 'Profit' || stat.label === 'Прибуток';
                  return (
                    <div key={index} className={`p-4 rounded-xl border text-center transform hover:scale-105 transition-all duration-300 ${
                      isHighlight 
                        ? 'bg-gradient-to-br from-red-500 to-orange-600 text-white border-red-600 shadow-lg' 
                        : 'bg-gradient-to-r from-red-50 to-orange-50 border-red-200 hover:shadow-md'
                    }`}>
                      <div className={`text-lg font-bold mb-1 ${
                        isHighlight ? 'text-white' : 'text-red-600'
                      }`}>{stat.value}</div>
                      <div className={`text-xs font-medium ${
                        isHighlight ? 'text-red-100' : 'text-slate-600'
                      }`}>{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="mt-8 mb-8">
              <div className="relative w-full max-w-4xl mx-auto">
                <Image
                  src="/img/v19/image1.webp"
                  alt="Case study statistics"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  onClick={() => openImage('/img/v19/image1.webp')}
                />
              </div>
            </div>
            
            <div className="flex justify-center text-center mt-8">
              <a 
                href="#form" 
                className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-xl transform hover:translate-y-[-2px] hover:shadow-xl transition-all duration-300 hover:from-red-600 hover:to-orange-600"
              >
                {t('cta.buttonText')}
              </a>
            </div>
          </div>
          
          <div className="relative mb-16">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-red-700 to-orange-600 bg-clip-text text-transparent">{t('breakdown.title')}</h3>
                <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-2"></div>
              </div>
            </div>
            
            <div className="grid gap-8">
              {t('breakdown.sections') && Array.isArray(t('breakdown.sections')) && t('breakdown.sections').map((section: any, index: number) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm border border-red-200/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 text-xl mb-4 group-hover:text-red-700 transition-colors duration-300">{section.title}</h4>
                        {section.title.includes('Campaign Setup') ? (
                          <div className="space-y-6">
                            <div className="text-slate-700 leading-relaxed mb-6">
                              During the campaign launch, the team used in-house PWAs, with Facebook as the placement. The target audience was clearly defined: men aged 25 and older.
                            </div>
                            
                            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl border border-red-200">
                              <h5 className="font-bold text-red-700 text-lg mb-4 flex items-center gap-2">
                                <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs">⚙️</span>
                                </span>
                                Key Campaign Parameters
                              </h5>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                  <div className="flex justify-between items-center py-2 border-b border-red-200">
                                    <span className="font-medium text-slate-600">Objective:</span>
                                    <span className="font-bold text-red-600">FTD (First-Time Deposit)</span>
                                  </div>
                                  <div className="flex justify-between items-center py-2 border-b border-red-200">
                                    <span className="font-medium text-slate-600">GEOs:</span>
                                    <span className="font-bold text-red-600">BD, MX, PK</span>
                                  </div>
                                  <div className="flex justify-between items-center py-2 border-b border-red-200">
                                    <span className="font-medium text-slate-600">Cap:</span>
                                    <span className="font-bold text-red-600">20 deposits</span>
                                  </div>
                                  <div className="flex justify-between items-center py-2">
                                    <span className="font-medium text-slate-600">KPI:</span>
                                    <span className="font-bold text-red-600">Minimum deposit, playing traffic</span>
                                  </div>
                                </div>
                                
                                <div className="space-y-3">
                                  <div className="bg-white p-4 rounded-lg border border-red-100">
                                    <h6 className="font-bold text-slate-700 mb-3">Minimum Deposit:</h6>
                                    <div className="space-y-2">
                                      <div className="flex justify-between items-center">
                                        <span className="text-slate-600">BD:</span>
                                        <span className="font-bold text-green-600">400 BDT</span>
                                      </div>
                                      <div className="flex justify-between items-center">
                                        <span className="text-slate-600">MX:</span>
                                        <span className="font-bold text-green-600">40 MXN</span>
                                      </div>
                                      <div className="flex justify-between items-center">
                                        <span className="text-slate-600">PK:</span>
                                        <span className="font-bold text-green-600">200 PKR</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                              <div className="bg-white p-4 rounded-lg border border-red-200 text-center">
                                <div className="text-sm text-slate-600 mb-1">Test Period</div>
                                <div className="font-bold text-red-600">08.09 - 08.10.2024</div>
                              </div>
                              <div className="bg-white p-4 rounded-lg border border-red-200 text-center">
                                <div className="text-sm text-slate-600 mb-1">Platform</div>
                                <div className="font-bold text-red-600">Facebook Apps</div>
                              </div>
                              <div className="bg-white p-4 rounded-lg border border-red-200 text-center">
                                <div className="text-sm text-slate-600 mb-1">Offer</div>
                                <div className="font-bold text-red-600">PWA</div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="text-slate-700 prose max-w-none leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }}></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center text-center mt-12">
              <a 
                href="#form" 
                className="group relative inline-block px-10 py-5 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-2xl transform hover:translate-y-[-3px] hover:shadow-2xl transition-all duration-300 hover:from-red-600 hover:to-orange-600 overflow-hidden"
              >
                <span className="relative z-10">{t('cta.buttonText')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 border border-red-200 rounded-2xl p-8 shadow-lg">
             <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center">
                 <span className="text-2xl">🏆</span>
               </div>
               <h3 className="text-2xl font-bold bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent">{t('conclusion.title')}</h3>
             </div>
             <div className="text-lg text-slate-700 leading-relaxed prose max-w-none" dangerouslySetInnerHTML={{ __html: t('conclusion.description') }}></div>
             
             <div className="mt-8 p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40">
               <div className="text-center">
                 <p className="text-lg font-medium text-slate-800 mb-4" dangerouslySetInnerHTML={{ __html: t('cta.finalText') }}></p>
                 <a 
                   href="#form" 
                   className="inline-block px-10 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl transform hover:translate-y-[-2px] hover:shadow-xl transition-all duration-300 hover:from-red-700 hover:to-orange-700"
                 >
                   {t('cta.buttonText')}
                 </a>
               </div>
             </div>
           </div>

          <div id="form" className="mt-20">
            <div className="">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-800 to-orange-600 bg-clip-text text-transparent">
                    {t('form.title')}
                  </h2>
                </div>
                
                <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-orange-500 mx-auto my-6 rounded-full"></div>
                
                <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                  {t('form.description')}
                </p>
              </div>

              <div className="max-w-xl mx-auto">
                <Formspree />
              </div>

              <div className="text-center mt-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-200 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-amber-700 text-sm font-medium">
                    {t('form.disclaimer')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {isImageOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeImage}>
            <div className="relative max-w-4xl max-h-full p-4">
              <Image
                src={currentImage}
                alt="Case study image"
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={closeImage}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        <MessengerButton
          link="https://m.me/100006500822716"
          text={t('messenger.text')}
        />
        
        <CasesFooter />
      </div>
    </div>
  );
};

export default V19Page;