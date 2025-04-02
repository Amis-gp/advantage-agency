"use client"

import React, { Fragment, useRef } from 'react';
import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useParams } from 'next/navigation';

import '@/app/styles.css'
import MessengerButton from '@/components/cases/MessengerButton';
import Formspree from '@/components/cases/Formspree';
import CasesFooter from '@/components/cases/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonialImages = [
    '/img/v13/foto-1.webp',
    '/img/v13/foto-2.webp',
    '/img/v13/foto-3.webp',
    '/img/v13/foto-4.webp',
    '/img/v13/foto-5.webp',
    '/img/v13/foto-6.webp',
    '/img/v13/foto-7.webp',
    '/img/v13/foto-8.webp',
    '/img/v13/foto-9.webp',
    '/img/v13/foto-10.webp',
    '/img/v13/foto-11.webp',
    '/img/v13/foto-12.webp',
    '/img/v13/foto-13.webp',
    '/img/v13/foto-14.webp'
];

const V13Page: NextPage = () => {
    const params = useParams();
    const locale = params.locale as string;
    const [translations, setTranslations] = useState<any>({});
    const [isImageOpen, setIsImageOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const thumbnailsRef = useRef<SwiperType | null>(null);
    const galleryRef = useRef<SwiperType | null>(null);

    const syncing = useRef(false);

    useEffect(() => {
        const loadTranslations = async () => {
          setIsLoading(true);
          try {
            const translations = await import(`/messages/${locale}/cases/v13.json`);
            setTranslations(translations.default);
            document.title = translations.default.seo.title;
          } catch (error) {
            console.error('Помилка завантаження перекладів:', error);
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

    
    // Допоміжна функція для перевірки, чи є переклад масивом
    const isArray = (value: any): value is any[] => {
        return Array.isArray(value);
    };

    function openImage(image: string) {
        console.log('Opening image:', image);
        setCurrentImage(image);
        setIsImageOpen(true);
    }

    function closeImage() {
        setIsImageOpen(false);
    }
    
    // Add loading indicator before the main return
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-600 mb-4"></div>
                    <p className="text-xl font-medium">Loading...</p>
                </div>
            </div>
        );
    }
    
    return (    
        <div className="text-black bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-4">
                <LanguageSwitcher />
            </div>
            <section className="py-12">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                        {t('hero.title')}
                    </h1>
                    
                    <h2 className="text-xl sm:text-3xl font-bold mt-12 mb-6">
                        {t('intro.title')}
                    </h2>
                    
                    <p className="text-xl mb-6">
                        {t('intro.description')}
                    </p>
                    
                    <p className="text-lg mb-10">
                        {t('intro.details')}
                    </p>
                    
                    <div className="flex justify-center w-full mt-14 mb-8 text-center">
                        <a href="#form" className="bg-[#ff6315] text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
                            {t('cta.button')}
                        </a>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">{t('challenges.title')}</h2>
                <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div>
                        <ul className="list-disc pl-6 space-y-2">
                            {isArray(t('challenges.list')) ? t('challenges.list').map((item: string, index: number) => (
                                <li key={index}>{item}</li>
                            )) : null}
                        </ul>
                    </div>
                    <div className="relative h-[300px]">
                        <Image 
                            src="/img/v13/hero.jpg"
                            alt={t('challenges.imageAlt')}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </section>

            <section className="mb-16 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-sm">
                <p className="text-3xl font-bold mb-8 text-center bg-clip-text">
                    {t('ourChallenge.title')}
                </p>

                <div className="space-y-6 text-gray-800">
                    <p className="text-xl leading-relaxed">
                        {t('ourChallenge.description')}
                    </p>

                    <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#ff6315]">
                        <p className="text-xl font-semibold mb-4">
                            {t('ourChallenge.testing.title')}
                        </p>
                        <p className="text-lg mb-3">
                            {t('ourChallenge.testing.description')}
                        </p>
                        <ul className="space-y-3 pl-4">
                            {isArray(t('ourChallenge.testing.issues')) ? t('ourChallenge.testing.issues').map((issue: string, index: number) => (
                                <li key={index} className="flex items-center gap-2 text-lg">
                                    <span className="text-red-500">❌</span>
                                    {issue}
                                </li>
                            )) : null}
                        </ul>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-yellow-400">
                        <p className="text-lg leading-relaxed">
                            <span className="font-semibold">{t('ourChallenge.critical.title')}</span> {t('ourChallenge.critical.description')}
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-green-500">
                        <p className="text-lg leading-relaxed">
                            <span className="font-semibold">{t('ourChallenge.result.title')}</span> {t('ourChallenge.result.description')}
                        </p>
                    </div>
                </div>
            </section>

            <div className="flex justify-center w-full mt-14 mb-8 text-center">
                <a href="#form" className="bg-[#ff6315] text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
                    {t('cta.button')}
                </a>
            </div>

            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
                    {t('approach.title')}
                </h2>
                <p className="mb-8 text-xl text-center text-gray-700">
                    {t('approach.description')}
                </p>
                
                <div className="">
                    <ul className="space-y-6">
                        {isArray(t('approach.steps')) ? t('approach.steps').map((step: any, index: number) => (
                            <li key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                                <span className="text-2xl">{step.emoji}</span>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                                    {step.description && (
                                        <div className="text-gray-600 pl-4 border-l-2 border-gray-200">
                                            <p>{step.description}</p>
                                        </div>
                                    )}
                                </div>
                            </li>
                        )) : null}
                    </ul>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
                    {t('summary.title')}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                        <div className="mb-6 border-b-2 border-blue-500 pb-4">
                            <h4 className="text-2xl font-bold text-gray-800">{t('summary.title')}</h4>
                        </div>
                        <ul className="space-y-4">
                            {isArray(t('summary.steps')) ? t('summary.steps').map((step: string, index: number) => (
                                <li key={index} className="flex items-center gap-3 text-lg text-gray-700 hover:text-gray-900 transition-colors">
                                    <span className="text-2xl">{['🎯', '🔥', '⚙️', '📋', '✉️', '📈', '🚀', '🛠️'][index % 8]}</span>
                                    <span>{step}</span>
                                </li>
                            )) : null}
                        </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                        <div className="mb-6 border-b-2 border-green-500 pb-4">
                            <h4 className="text-2xl font-bold text-gray-800">Results in 4 Weeks:</h4>
                        </div>
                        <ul className="space-y-6">
                            <li className="flex items-center gap-4 text-lg">
                                <span className="text-3xl font-bold text-blue-600">2921</span>
                                <span className="text-gray-700">Emails Sent</span>
                            </li>
                            <li className="flex items-center gap-4 text-lg">
                                <span className="text-3xl font-bold text-blue-600">56</span>
                                <span className="text-gray-700">Responses</span>
                            </li>
                            <li className="flex items-center gap-4 text-lg">
                                <span className="text-3xl font-bold text-blue-600">31</span>
                                <span className="text-gray-700">Demo Calls</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="mb-16">
                <div className="mb-12 bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="mb-6 border-b-2 border-blue-500 pb-4">
                        <h4 className="text-2xl font-bold text-gray-800">{t('summary.title')}</h4>
                    </div>
                    <ul className="space-y-4">
                        {isArray(t('summary.steps')) ? t('summary.steps').map((step: string, index: number) => (
                            <li key={index} className="flex items-center gap-3 text-lg text-gray-700 hover:text-gray-900 transition-colors">
                                <span className="text-2xl">{['🎯', '🔥', '⚙️', '📋', '✉️', '📈', '🚀', '🛠️'][index % 8]}</span>
                                <span>{step}</span>
                            </li>
                        )) : null}
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6">{t('testimonials.title')}</h2>
                <div className="relative mb-12">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={10}
                        slidesPerView={1}
                        pagination={{ 
                            el: '.swiper-pagination',
                            clickable: true
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {testimonialImages.map((image, index) => (
                            <SwiperSlide key={index} className="sm:pt-4 pb-12 sm:pb-8 px-2">
                                <div 
                                    className="relative h-[370px] w-full cursor-pointer"
                                    onClick={() => {
                                        console.log('Click on image:', image);
                                        openImage(image);
                                    }}
                                    role="button"
                                    tabIndex={0}
                                >
                                    <Image
                                        src={image}
                                        alt={t('testimonials.imageAlt').replace('{0}', (index + 1).toString())}
                                        width={590}
                                        height={735}
                                        className="!w-fit mx-auto object-cover rounded-lg shadow-lg sm:hover:scale-105 transition-all duration-300 cursor-pointer"
                                        priority={index < 4}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            console.log('Click on Image component:', image);
                                            openImage(image);
                                        }}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-pagination md:mt-4"></div>
                </div>
                
                
                <h2 className="text-2xl font-bold mb-6">{t('results.title')}</h2>
                <div className="relative h-full w-full mb-12">
                    <Image 
                        src="/img/v13/stats.webp"
                        alt={t('results.imageAlt')}
                        width={1280}
                        height={620}
                        className="h-full w-full object-contain rounded-lg border border-gray-200"
                    />
                </div>
            </section>

            <section className="mb-12 mt-8">
                <h2 id="form" className="text-3xl font-bold mb-8 text-center">
                    {t('form.title')}
                    <span className="block mt-2 text-2xl text-[#ff6315]">{t('form.subtitle')}</span>
                </h2>
            
                <div className="max-w-3xl mx-auto text-lg">
                    <p className="mb-6 text-center leading-relaxed">
                        {t('form.description')}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        {isArray(t('form.pillars')) ? t('form.pillars').map((pillar: any, index: number) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-md border-t-4 border-[#ff6315]">
                                <h3 className="font-bold text-xl mb-2 text-center">{pillar.title}</h3>
                                <p className="text-gray-600 text-center">{pillar.description}</p>
                            </div>
                        )) : null}
                    </div>

                    <p className="text-center mb-8">
                        {t('form.instruction')}
                    </p>

                    <div className="w-fit mx-auto">
                        <Formspree />
                    </div>

                    <p className="mt-8 text-center text-gray-600">
                        {t('form.footer')}
                    </p>
                </div>
            </section>

            <CasesFooter />

            <MessengerButton
                link="https://m.me/100006500822716"
                text={t('messenger.text')}
            />

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
                                    onSlideChange={(swiper) => {
                                        if (!syncing.current) {
                                            syncing.current = true;
                                            thumbnailsRef.current?.slideTo(swiper.activeIndex);
                                            syncing.current = false;
                                        }
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

export default V13Page;