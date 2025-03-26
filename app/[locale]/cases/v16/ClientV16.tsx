"use client"

import { NextPage } from 'next';
import { useEffect, useState, Fragment, useRef } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import '@/app/styles.css'
import MessengerButton from '@/components/cases/MessengerButton';
import Formspree from '@/components/cases/Formspree';
import CasesFooter from '@/components/cases/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useParams } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import type { Swiper as SwiperType } from 'swiper';

const testimonialImages = [
  '/img/v16/feedback1.webp',
  '/img/v16/feedback2.webp',
  '/img/v16/feedback3.webp',
  '/img/v16/feedback4.webp',
  '/img/v16/feedback5.webp',
  '/img/v16/feedback6.webp'
];

const V16Page: NextPage = () => {
  const params = useParams();
  const locale = params.locale as string;
  const [translations, setTranslations] = useState<any>({});
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  
  const galleryRef = useRef<SwiperType | null>(null);
  const syncing = useRef(false);
  
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translations = await import(`../../../../messages/${locale}/cases/v16.json`);
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
  
  function openImage(image: string) {
    setCurrentImage(image);
    setIsImageOpen(true);
  }

  function closeImage() {
    setIsImageOpen(false);
  }
  
  return (    
    <div className="bg-slate-50 text-slate-800">
      <div className="absolute top-0 right-4">
        <LanguageSwitcher />
      </div>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-900 to-emerald-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-200 text-emerald-900 rounded-full font-medium mb-6">
              {t('hero.subtitle')}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              {t('hero.title')}
            </h1>
            
            <div className="flex items-center gap-4 mt-8">
              <div className="h-1 w-12 bg-emerald-400"></div>
              <p className="text-xl text-emerald-100">{t('hero.description')}</p>
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
                  <span className="py-2 px-3 mr-4 justify-center bg-amber-100 text-amber-600 rounded-2xl text-2xl flex-shrink-0">
                  🚀
                  </span>
                  {t('intro.title')}
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {t('intro.description')}
                </p>
              </div>
            </div>
            
            {/* Мета проєкту */}
            <div className="relative ml-4 pl-10 border-l-2 border-emerald-200 py-4 mb-10">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                <span className="text-white text-sm">1</span>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-4">{t('goals.title')}</h3>
              <ul className="space-y-3">
                {t('goals.list') && Array.isArray(t('goals.list')) && t('goals.list').map((goal: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 flex-shrink-0">✓</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-center text-center">
              <a 
                href="#form" 
                className="inline-block mt-2 px-8 py-3 bg-amber-500 text-white font-bold rounded-lg transform hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300 leading-6 animate-bounce"
              >
                {t('cta.buttonText')}
              </a>
            </div>
          </div>
          
          {/* Виклики */}
          <div className="relative ml-4 pl-10 border-l-2 border-emerald-200 py-4 mb-16">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
              <span className="text-white text-sm">2</span>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <h3 className="text-xl font-bold text-emerald-700">{t('challenges.title')}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t('challenges.items') && Array.isArray(t('challenges.items')) && t('challenges.items').map((challenge: any, index: number) => (
                <div key={index} className="group bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full bg-${index % 4 === 0 ? 'rose' : index % 4 === 1 ? 'amber' : index % 4 === 2 ? 'indigo' : 'emerald'}-100 text-${index % 4 === 0 ? 'rose' : index % 4 === 1 ? 'amber' : index % 4 === 2 ? 'indigo' : 'emerald'}-600 flex items-center justify-center group-hover:bg-${index % 4 === 0 ? 'rose' : index % 4 === 1 ? 'amber' : index % 4 === 2 ? 'indigo' : 'emerald'}-600 group-hover:text-white transition-all duration-300`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d={index % 4 === 0 ? "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" : index % 4 === 1 ? "M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" : index % 4 === 2 ? "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" : "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"} clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-slate-900">{challenge.title}</h4>
                  </div>
                  <p className="text-slate-600 pl-12">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Рішення */}
          <div className="relative ml-4 pl-10 border-l-2 border-emerald-200 py-4 mb-14">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
              <span className="text-white text-sm">3</span>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <h3 className="text-xl font-bold text-emerald-700">{t('solutions.title')}</h3>
            </div>
            
            <p className="text-lg text-slate-700 mb-8">{t('solutions.description')}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t('solutions.items') && Array.isArray(t('solutions.items')) && t('solutions.items').map((solution: any, index: number) => (
                <div key={index} className="bg-gradient-to-r from-slate-50 to-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500">
                  <h4 className="font-bold text-slate-900 text-lg mb-3">{solution.title}</h4>
                  <div className="text-slate-700" dangerouslySetInnerHTML={{ __html: solution.description }}></div>
                </div>
              ))}
            </div>

            <div className="flex justify-center text-center py-10">
            <a 
              href="#form" 
              className="inline-block mt-2 px-8 py-3 bg-amber-500 text-white font-bold rounded-lg transform hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300 leading-6 animate-bounce"
            >
              {t('cta.buttonText')}
            </a>
          </div>
          
          <h2 className="text-3xl font-bold mb-8 text-center">{t('testing.title')}</h2>
          <p className="text-lg mb-6 text-center">{t('testing.description')}</p>
          
          <div className="text-center mb-10">
            <span className="text-xl font-semibold px-6 py-3 bg-amber-100 text-amber-800 rounded-full inline-block">
              {t('testing.highlight')}
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {t('testing.tags') && Array.isArray(t('testing.tags')) && t('testing.tags').map((tag: string, index: number) => (
              <span key={index} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="bg-slate-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">{t('testing.optimization.title')}</h3>
            <p className="mb-6">{t('testing.optimization.description')}</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {t('testing.optimization.points') && Array.isArray(t('testing.optimization.points')) && 
                t('testing.optimization.points').map((point: any, index: number) => (
                  <div key={index} className="bg-white p-5 rounded-lg">
                    <h4 className="font-bold mb-2">📌 {point.title}</h4>
                    <p className="text-sm text-slate-600">{point.description}</p>
                  </div>
                ))
              }
            </div>
          </div>
          </div>

          
          
          {/* Результати */}
          <div className="relative ml-4 pl-10 border-l-2 border-emerald-200 py-4 mb-16">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
              <span className="text-white text-sm">5</span>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <h3 className="text-xl font-bold text-emerald-700">{t('results.title')}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {t('results.metrics') && Array.isArray(t('results.metrics')) && t('results.metrics').map((metric: any, index: number) => (
                <div key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="p-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
                    <h4 className="font-medium text-slate-200">{metric.title}</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">{metric.value}</div>
                    <p className="text-slate-600">{metric.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mb-12">
              <h4 className="text-xl font-semibold mb-6 text-center">{t('statistics.title')}</h4>
              <div className="relative aspect-[16/9] w-full">
                <Image 
                  src="/img/v16/stats.webp"
                  alt={t('statistics.imageAlt')}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-6 text-center">{t('testimonials.title')}</h4>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {testimonialImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 border border-slate-200"
                    onClick={() => openImage(image)}
                  >
                    <Image
                      src={image}
                      alt={t('testimonials.imageAlt').replace('{0}', (index + 1).toString())}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-white text-sm font-medium px-3 py-1 bg-black/30 rounded-full backdrop-blur-sm">
                        {t('testimonials.imageAlt').replace('{0}', (index + 1).toString())}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          
          
          <div className="relative ml-4 pl-10 border-l-2 border-emerald-200 py-4 mb-16">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
              <span className="text-white text-sm">6</span>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <h3 className="text-xl font-bold text-emerald-700">{t('success.title')}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {t('success.points') && Array.isArray(t('success.points')) && t('success.points').map((point: any, index: number) => (
                <div key={index} className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                  <h5 className="font-semibold text-amber-800">{point.title}</h5>
                  <p className="text-slate-700">{point.description}</p>
                </div>
              ))}
            </div>
            
          </div> 
            <div className="bg-gradient-to-br from-slate-50 to-emerald-50 border border-emerald-100 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('conclusion.title')}</h3>
              <p className="text-lg text-slate-700">
                {t('conclusion.description')}
              </p>
            </div>
        </div>
        
        {/* Form Section */}
        <section id="form" className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16 border border-slate-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-800 to-teal-600 bg-clip-text text-transparent">
              {t('form.title')}
            </h2>
            
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto my-4"></div>
            
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              {t('form.description')}
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <Formspree />
          </div>

          <div className="text-center mt-8">
            <p className="text-amber-700 text-sm font-medium">
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

      <Transition.Root show={isImageOpen} as={Fragment}>
            <Dialog 
                as="div" 
                className="relative z-50" 
                onClose={closeImage}
                open={isImageOpen}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/80" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Dialog.Panel className="relative max-w-4xl w-full">
                            <button
                                onClick={closeImage}
                                className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors z-50"
                            >
                                ×
                            </button>
                            <div className="relative h-[80vh]">
                                <Swiper
                                    modules={[Pagination]}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    pagination={{ 
                                        el: '.swiper-pagination',
                                        clickable: true
                                    }}
                                    loop={true}
                                    initialSlide={testimonialImages.indexOf(currentImage)}
                                    className="h-full w-full"
                                    onSwiper={(swiper) => {
                                        galleryRef.current = swiper;
                                    }}
                                    onSlideChange={() => {
                                    }}
                                >
                                    {testimonialImages.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <Image
                                                src={image}
                                                alt={`Email Response ${index + 1}`}
                                                fill
                                                className="object-contain"
                                                priority
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="swiper-pagination absolute bottom-4 w-full"></div>
                            </div>
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    </div>
  );
};

export default V16Page;