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

const V20Page: NextPage = () => {
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
        const translations = await import(`/messages/${locale}/cases/v20.json`);
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
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4"></div>
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
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
            <span className="text-lg font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
              {t('hero.subtitle')}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent leading-tight">
            {t('hero.title')}
          </h1>
          
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto my-6 rounded-full"></div>
          
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h2 className="text-2xl font-bold text-white">{t('intro.title')}</h2>
              </div>
            </div>
            
            <div className="p-8">
              <div className="text-lg text-slate-700 leading-relaxed prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: t('intro.description') }}></div>
              
              <div className="cursor-pointer" onClick={() => openImage('/img/v20/image1.webp')}>
                <Image
                  src="/img/v20/image1.webp"
                  alt="Case study overview"
                  width={800}
                  height={600}
                  className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">{t('stats.title')}</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {t('stats.items') && t('stats.items').map((item: any, index: number) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center border border-white/40 hover:bg-white/80 transition-all duration-300">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">{item.value}</div>
                  <div className="text-sm font-medium text-slate-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8 mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔍</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">
                {t('breakdown.title')}
              </h2>
            </div>
            
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          {t('breakdown.sections') && t('breakdown.sections').map((section: any, index: number) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{section.title}</h3>
                </div>
              </div>
              
              <div className="p-8">
                <div className="text-slate-700 prose max-w-none leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }}></div>
                
                {section.images && section.images.map((image: string, imgIndex: number) => (
                  <div key={imgIndex} className="mt-6 cursor-pointer" onClick={() => openImage(image)}>
                    <Image
                      src={image}
                      alt={`Case study image ${imgIndex + 1}`}
                      width={800}
                      height={600}
                      className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center text-center mt-12">
          <a 
            href="#form" 
            className="group relative inline-block px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl transform hover:translate-y-[-3px] hover:shadow-2xl transition-all duration-300 hover:from-blue-600 hover:to-purple-600 overflow-hidden"
          >
            <span className="relative z-10">{t('cta.buttonText')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 shadow-lg mt-16">
           <div className="flex items-center gap-3 mb-6">
             <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
               <span className="text-2xl">🎯</span>
             </div>
             <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">{t('conclusion.title')}</h3>
           </div>
           <div className="text-lg text-slate-700 leading-relaxed prose max-w-none" dangerouslySetInnerHTML={{ __html: t('conclusion.description') }}></div>
           
           <div className="mt-8 p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40">
             <div className="text-center">
               <p className="text-lg font-medium text-slate-800 mb-4" dangerouslySetInnerHTML={{ __html: t('cta.finalText') }}></p>
               <a 
                 href="#form" 
                 className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl transform hover:translate-y-[-2px] hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
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
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">
                  {t('form.title')}
                </h2>
              </div>
              
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto my-6 rounded-full"></div>
              
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
  );
};

export default V20Page;