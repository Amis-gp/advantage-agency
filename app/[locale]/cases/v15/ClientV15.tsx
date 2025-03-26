"use client"

import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import '@/app/styles.css'
import MessengerButton from '@/components/cases/MessengerButton';
import Formspree from '@/components/cases/Formspree';
import CasesFooter from '@/components/cases/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useParams } from 'next/navigation';

const V15Page: NextPage = () => {
  const params = useParams();
  const locale = params.locale as string;
  const [translations, setTranslations] = useState<any>({});
  
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translations = await import(`../../../../messages/${locale}/cases/v15.json`);
        setTranslations(translations.default);
        document.title = translations.default.seo.title;
      } catch (error) {
        console.error('Помилка завантаження перекладів:', error);
      }
    };
    
    loadTranslations();
  }, [locale]);
  
  const t = (path: string) => {
    const keys = path.split('.');
    let result = translations;
    
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        return path;
      }
    }
    
    return result;
  };
  
  return (    
    <div className="text-black bg-gradient-to-b from-white to-gray-50">
      <div className="pt-4">
        <LanguageSwitcher />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <section className="py-12 md:py-16">
          <div className="text-center">
            <div className="inline-block mb-4 px-6 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
              {t('hero.subtitle')}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              {t('hero.title')}
            </h1>

            <div className="text-left">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-yellow-100 p-3 rounded-2xl">
                  💡
                </div>
                <h2 className="text-2xl font-bold">
                  {t('strategies.title')}
                </h2>
              </div>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t('strategies.description')}
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold">{t('strategies.limitations.title')}</h3>
                </div>
                
                <ul className="space-y-4 text-base md:text-lg">
                  {Array.isArray(t('strategies.limitations.list')) && t('strategies.limitations.list').map((item: string, index: number) => (
                    <li className="flex items-start gap-3" key={index}>
                      <span className="my-auto text-sm">❌</span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 my-6 md:my-10">
                <a 
                  href="#form" 
                  className="px-6 py-3 bg-blue-600 text-white text-center rounded-xl hover:bg-blue-700 transition-all inline-flex items-center justify-center gap-2 w-full sm:w-auto animate-bounce"
                >
                  🚀 {t('strategies.cta')}
                </a>
              </div>

              <div className="relative bg-gradient-to-r from-green-50 to-transparent p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">✨</span>
                  <h3 className="font-medium text-green-800">{t('strategies.solution.title')}</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('strategies.solution.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="relative">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-blue-800 mb-4">
                {t('tools.title')}
              </span>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('tools.subtitle')}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="group">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="relative">
                    <div className="bg-white shadow-xl shadow-purple-100/50 rounded-[1.5rem] p-6 transition-transform duration-500 group-hover:-translate-y-2">
                      <div className="relative aspect-[909/924] rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-pink-50 to-purple-50">
                        <Image 
                          src="/img/v15/scraper-1.webp"
                          alt="Instagram Parser Interface"
                          width={909}
                          height={924}
                          className="object-contain mix-blend-multiply"
                          priority
                        />
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">📸</span>
                          <h3 className="text-xl font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                            {t('tools.instagram.title')}
                          </h3>
                        </div>
                        <p className="text-gray-600">
                          {t('tools.instagram.description')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="relative">
                    <div className="bg-white shadow-xl shadow-indigo-100/50 rounded-[1.5rem] p-6 transition-transform duration-500 group-hover:-translate-y-2">
                      <div className="relative aspect-[909/924] rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-blue-50 to-indigo-50">
                        <Image 
                          src="/img/v15/scraper-2.webp"
                          alt="LinkedIn Parser Interface"
                          width={909}
                          height={924}
                          className="object-contain mix-blend-multiply"
                          priority
                        />
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">👔</span>
                          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            {t('tools.linkedin.title')}
                          </h3>
                        </div>
                        <p className="text-gray-600">
                          {t('tools.linkedin.description')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:hidden space-y-8">
                  <div className="relative">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3 text-blue-600">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                          🛠️
                        </div>
                        <h3 className="font-semibold">{t('steps.mobile.tool.number')} / {t('steps.mobile.tool.title')}</h3>
                      </div>
                      
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
                        <p className="text-gray-700">
                          {t('steps.mobile.tool.description')}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {Array.isArray(t('steps.mobile.tool.tags')) && t('steps.mobile.tool.tags').map((tag: string, index: number) => (
                            <span className="inline-block bg-white/80 backdrop-blur px-3 py-1 rounded-full text-blue-800 text-sm" key={index}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3 text-green-600">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">
                          🧪
                        </div>
                        <h3 className="font-semibold">{t('steps.mobile.testing.number')} / {t('steps.mobile.testing.title')}</h3>
                      </div>
                      
                      <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl">
                        <p className="text-gray-700">
                          {t('steps.mobile.testing.description')}
                        </p>
                        <div className="mt-4 space-y-3">
                          {Array.isArray(t('steps.mobile.testing.challenges')) && t('steps.mobile.testing.challenges').map((challenge: string, index: number) => (
                            <div className="flex items-center gap-3 bg-white/80 backdrop-blur px-4 py-2 rounded-xl" key={index}>
                              <span className="text-red-500">⚠️</span>
                              <span>{challenge}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3 text-orange-600">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-xl">
                          🔧
                        </div>
                        <h3 className="font-semibold">{t('steps.mobile.solving.number')} / {t('steps.mobile.solving.title')}</h3>
                      </div>
                      
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
                        <p className="text-gray-700 whitespace-pre-line">
                          {t('steps.mobile.solving.description')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block space-y-16">
                  <div className="relative pl-0">
                    <div className="grid grid-cols-[200px_1fr] gap-8">
                      <div className="text-right font-semibold text-blue-600">
                        {t('steps.desktop.tool.number')} / {t('steps.desktop.tool.title')}
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
                        <p className="text-gray-700">
                          {t('steps.desktop.tool.description')}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {Array.isArray(t('steps.desktop.tool.tags')) && t('steps.desktop.tool.tags').map((tag: string, index: number) => (
                            <span className="inline-block bg-white/80 backdrop-blur px-3 py-1 rounded-full text-blue-800 text-sm" key={index}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-0">
                    <div className="grid grid-cols-[200px_1fr] gap-8">
                      <div className="text-right font-semibold text-green-600">
                        {t('steps.desktop.testing.number')} / {t('steps.desktop.testing.title')}
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl">
                        <p className="text-gray-700">
                          {t('steps.desktop.testing.description')}
                        </p>
                        <div className="mt-4 space-y-3">
                          {Array.isArray(t('steps.desktop.testing.challenges')) && t('steps.desktop.testing.challenges').map((challenge: string, index: number) => (
                            <div className="flex items-center gap-3 bg-white/80 backdrop-blur px-4 py-2 rounded-xl" key={index}>
                              <span className="text-red-500">⚠️</span>
                              <span>{challenge}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-0">
                    <div className="grid grid-cols-[200px_1fr] gap-8">
                      <div className="text-right font-semibold text-orange-600">
                        {t('steps.desktop.solving.number')} / {t('steps.desktop.solving.title')}
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
                        <p className="text-gray-700 whitespace-pre-line">
                          {t('steps.desktop.solving.description')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col sm:flex-row justify-center gap-4 ">
          <a 
            href="#form" 
            className="px-6 py-3 bg-blue-600 text-white text-center rounded-xl hover:bg-blue-700 transition-all inline-flex items-center justify-center gap-2 w-full sm:w-auto animate-bounce"
          >
            {t('cta.help')}
          </a>
        </div>


        <section className="py-10">
          <div className="">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-indigo-100 p-3 rounded-2xl">
                📈
              </div>
              <h2 className="text-3xl font-bold">
                {t('results.title')}
              </h2>
            </div>

            <div className="space-y-12">
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600">🔹</span>
                    <p className="text-lg">{t('results.point1')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600">🔹</span>
                    <div>
                      <p className="text-lg mb-2">{t('results.point2')}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {Array.isArray(t('results.tags')) && t('results.tags').map((tag: string, index: number) => (
                          <span className="bg-white px-3 py-1 rounded-full text-sm" key={index}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="bg-green-100 p-2 rounded-xl">💡</span>
                  {t('results.applications.title')}
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">📨</span>
                      <h4 className="text-xl font-semibold">{t('results.applications.email.title')}</h4>
                    </div>
                    <p className="text-gray-700">
                      {t('results.applications.email.description')}
                    </p>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">📞</span>
                      <h4 className="text-xl font-semibold">{t('results.applications.phone.title')}</h4>
                    </div>
                    <p className="text-gray-700">
                      {t('results.applications.phone.description')}
                    </p>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">💬</span>
                      <h4 className="text-xl font-semibold">{t('results.applications.messenger.title')}</h4>
                    </div>
                    <p className="text-gray-700">
                      {t('results.applications.messenger.description')}
                    </p>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">🎯</span>
                      <h4 className="text-xl font-semibold">{t('results.applications.targeting.title')}</h4>
                    </div>
                    <p className="text-gray-700">
                      {t('results.applications.targeting.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="form" className="mb-16 mt-6">
          <div className="mx-auto space-y-8">
            <h2 className="text-3xl font-bold">
              {t('form.title')}
            </h2>
            
            <p className="text-xl text-gray-700">
              {t('form.description')}
            </p>
          </div>

          <div className="w-fit mx-auto mt-8">
            <Formspree />
          </div>

          <div className="max-w-2xl mx-auto mt-8 text-center">
            <p className="text-sm text-gray-500">
              {t('form.disclaimer')}
            </p>
          </div>
        </section>

        <MessengerButton
          link="https://m.me/100006500822716"
          text={t('messenger.text')}
        />

      </div>
      <CasesFooter />
    </div>
  );
};

export default V15Page;