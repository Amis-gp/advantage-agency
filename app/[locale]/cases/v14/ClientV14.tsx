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

const V14Page: NextPage = () => {
  const params = useParams();
  const locale = params.locale as string;
  const [translations, setTranslations] = useState<any>({});
  
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translations = await import(`../../../../messages/${locale}/cases/v14.json`);
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

  // Допоміжна функція для перевірки, чи є переклад масивом
  const isArray = (value: any): value is any[] => {
    return Array.isArray(value);
  };
  
  return (    
    <div className="text-black bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <LanguageSwitcher />
      <section className="mt-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 leading-tight" 
            dangerouslySetInnerHTML={{ __html: t('hero.title') }}>
        </h1>

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            {t('background.title')}
          </h2>
          <p className="mb-4 text-xl leading-relaxed text-gray-800">
            {t('background.description')}
          </p>
          
          <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold mb-4 mt-8">{t('goal.title')}</h3>
              <ul className="space-y-2 text-xl leading-relaxed text-gray-800">
                {isArray(t('goal.list')) ? t('goal.list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                )) : null}
              </ul>
            </div>
            <div className="relative h-[300px]">
              <Image 
                src="/img/v14/hero.webp"
                alt="Email Marketing Challenges"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-14 mb-8 text-center">
        <a href="#form" className="bg-[#ff6315] text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
          {t('cta.button')}
        </a>
      </div>

      <section className="my-16">
        <h2 className="text-3xl font-bold mb-8">
          {t('approach.title')}
        </h2>
        
        <p className="text-xl mb-8">
          {t('approach.description')}
        </p>
        
        <div className="space-y-6 mb-10">
          {isArray(t('approach.steps')) ? t('approach.steps').map((step: any, index: number) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-r from-red-50 to-transparent border border-red-100 rounded-lg">
              <span className="text-red-600 text-2xl">📊</span>
              <div>
                <p className="text-lg font-medium">
                  {step.title}
                </p>
                <p className="text-gray-600 mt-2">
                  {step.description}
                </p>
              </div>
            </div>
          )) : null}
        </div>
      </section>

      <section className="my-16">
        <h2 className="text-3xl font-bold mb-8">
          {t('testing.title')}
        </h2>
        
        <p className="text-xl mb-8">
          {t('testing.description')}
        </p>
        
        <div className="space-y-6 mb-10">
          {isArray(t('testing.approaches')) ? t('testing.approaches').map((approach: any, index: number) => (
            <div key={index} className="flex items-start gap-4 p-6 border-l-4 border-blue-400 bg-blue-50">
              <span className="text-blue-600 text-2xl">🔹</span>
              <div>
                <p className="text-lg font-medium">
                  {approach.title}
                </p>
                <p className="text-gray-600 mt-2">
                  {approach.description}
                </p>
              </div>
            </div>
          )) : null}
        </div>

        <div className="border-t-2 border-gray-100 pt-6">
          <p className="text-lg font-medium mb-2">
            {t('testing.effective.title')}
          </p>
          <ul className="space-y-2 text-gray-600 pl-4">
            {isArray(t('testing.effective.list')) ? t('testing.effective.list').map((item: string, index: number) => (
              <li key={index}>• "{item}"</li>
            )) : null}
          </ul>
        </div>
      </section>

      <section className="my-16">
        <h2 className="text-3xl font-bold mb-8">
          {t('optimization.title')}
        </h2>

        <p className="text-xl mb-8">
          {t('optimization.description')}
        </p>

        <div className="space-y-8">
          {isArray(t('optimization.steps')) ? t('optimization.steps').map((step: string, index: number) => (
            <div key={index} className="flex items-start gap-4 border-b border-gray-100 pb-8">
              <span className="text-red-500 text-2xl shrink-0">📌</span>
              <div>
                <p className="text-lg">
                  {step}
                </p>
              </div>
            </div>
          )) : null}
        </div>
      </section>

      <div className="flex justify-center w-full mt-14 mb-8 text-center">
        <a href="#form" className="bg-[#ff6315] text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
          {t('cta.button')}
        </a>
      </div>

      <section className="my-16">
        <h2 className="text-3xl font-bold mb-12">
          {t('results.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {isArray(t('results.stats')) ? t('results.stats').map((stat: any, index: number) => (
            <div key={index} className={`border-l-4 border-${['blue', 'orange', 'purple', 'cyan', 'pink'][index % 5]}-400 pl-6 py-4`}>
              <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.text}</div>
            </div>
          )) : null}
        </div>

        <div className="space-y-12 my-16">
          <div>
            <div className="relative w-full h-full">
              <Image 
                src="/img/cold-email/results.webp"
                alt="Email Campaign Statistics"
                className="object-cover"
                priority
                width={1400}
                height={773}
              />
            </div>
            <p className="mt-4 text-sm text-gray-600">
              {t('results.screenshot')}
            </p>
          </div>
          
          <div className="max-w-[300px] mx-auto">
            <div className="relative">
              <div className="relative aspect-[9/16] bg-gray-900">
                <video 
                  id="testimonial-video"
                  className="w-full h-full object-cover"
                  poster="/img/cold-email/video-testimonial-poster.webp"
                  playsInline
                  onClick={(e) => {
                    const video = e.currentTarget;
                    const button = document.getElementById('play-button');
                    if (video.paused) {
                      video.play();
                      button?.classList.add('hidden');
                    } else {
                      video.pause();
                      button?.classList.remove('hidden');
                    }
                  }}
                  onPause={() => {
                    const button = document.getElementById('play-button');
                    button?.classList.remove('hidden');
                  }}
                  onPlay={() => {
                    const button = document.getElementById('play-button');
                    button?.classList.add('hidden');
                  }}
                >
                  <source src="/img/cold-email/video-testimonial.mp4" type="video/mp4" />
                </video>
                
                <button 
                  id="play-button"
                  className="absolute inset-0 w-full h-full flex items-center justify-center group"
                  onClick={() => {
                    const video = document.getElementById('testimonial-video') as HTMLVideoElement;
                    if (video.paused) {
                      video.play();
                    }
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center transition-transform group-hover:scale-110">
                    <div className="play-icon w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-gray-900 ml-1"></div>
                  </div>
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-600 text-center">
                {t('results.chat')}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-gray-100 pt-12">
          <h2 className="text-3xl font-bold mb-8">
            {t('next.title')}
          </h2>
          
          <div className="space-y-6">
            {isArray(t('next.steps')) ? t('next.steps').map((step: string, index: number) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-blue-500 text-2xl">→</span>
                <p className="text-lg">
                  {step}
                </p>
              </div>
            )) : null}
          </div>
        </div>
      </section>

      <section id="form" className="my-16">
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

      <CasesFooter />

      <MessengerButton
        link="https://m.me/100006500822716"
        text={t('messenger.text')}
      />

    </div>
  );
};

export default V14Page;