"use client"

import React from 'react';
import { NextPage } from 'next';
import Formspree from "@/components/cases/Formspree";

import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';       
import { useParams } from 'next/navigation';

import '@/app/styles.css'
import MessengerButton from '@/components/cases/MessengerButton';
import CasesFooter from '@/components/cases/Footer';
import LanguageSwitcher from '@/components/cases/LanguageSwitcher';

const V7Page: NextPage = () => {
  const params = useParams();
  const locale = params.locale as string;
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  
  // Move all state hooks before any conditional returns
  const [isOpenBeforeMeta, setIsOpenBeforeMeta] = useState(false);
  const [isOpenAfterMeta, setIsOpenAfterMeta] = useState(false);
  const [isOpenBeforeGoogle, setIsOpenBeforeGoogle] = useState(false);
  const [isOpenAfterGoogle, setIsOpenAfterGoogle] = useState(false);
  
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const translations = await import(`/messages/${locale}/cases/v7.json`);
        setTranslations(translations.default);
        document.title = translations.default.seo.title;
      } catch (error) {
        console.error('Error loading translations:', error);
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
  
  // Add a raw method to the t function
  t.raw = (path: string) => {
    if (isLoading) return [];
    
    const keys = path.split('.');
    let result = translations;
    
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        return [];
      }
    }
    
    return result;
  };
  
  // Modal functions
  function closeModalBeforeMeta() {
    setIsOpenBeforeMeta(false);
  }

  function openModalBeforeMeta() {
    setIsOpenBeforeMeta(true);
  }

  function closeModalAfterMeta() {
    setIsOpenAfterMeta(false);
  }

  function openModalAfterMeta() {
    setIsOpenAfterMeta(true);
  }

  function closeModalBeforeGoogle() {
    setIsOpenBeforeGoogle(false);
  }

  function openModalBeforeGoogle() {
    setIsOpenBeforeGoogle(true);
  }

  function closeModalAfterGoogle() {
    setIsOpenAfterGoogle(false);
  }

  function openModalAfterGoogle() {
    setIsOpenAfterGoogle(true);
  }
  
  // Add loading indicator right before the main return statement
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600 mb-4"></div>
          <p className="text-xl font-medium">Loading...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="text-black bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <LanguageSwitcher />
      <section className="pt-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center" dangerouslySetInnerHTML={{ __html: t('hero.title') }}>
        </h1>
        <div className="mb-12">
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('hero.description1') }}>
          </p>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('hero.description2') }}>
          </p>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('hero.description3') }}>
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">{t('challenges.title')}</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2 mr-8">
              {Array.isArray(t.raw('challenges.items')) 
                ? t.raw('challenges.items').map((item: string, index: number) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))
                : <li>No challenges listed</li>
              }
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v7/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('approach.title')}</h2>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('approach.description') }}>
          </p>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Step</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {Array.isArray(t.raw('approach.steps')) 
                ? t.raw('approach.steps').map((step: string, index: number) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-4 py-2 whitespace-nowrap font-medium">{index + 1}.</td>
                    <td className="px-4 py-2" dangerouslySetInnerHTML={{ __html: step }}></td>
                  </tr>
                ))
                : <tr><td colSpan={2} className="px-4 py-2 text-center">No steps available</td></tr>
              }
            </tbody>
          </table>
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-emerald-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-emerald-700 transition duration-300 ease-in-out animate-bounce">
            {t('cta.text')}
            </a>
          </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: t('meta.title') }}></h2>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('meta.description1') }}>
        </p>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('meta.description2') }}>
        </p>
        <p className="mb-8" dangerouslySetInnerHTML={{ __html: t('meta.description3') }}>
        </p>  

        <div className="mb-8">
          
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">{t('meta.before.title')}</h4>
                <ul className="space-y-2">
                  <li>{t('meta.before.views')}</li>
                  <li>{t('meta.before.clicks')}</li>
                  <li>{t('meta.before.purchases')}</li>
                  <li>{t('meta.before.price')}</li>
                  <li>{t('meta.before.costs')}</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-emerald-600">
                <h4 className="text-2xl font-bold mb-4 text-emerald-600">{t('meta.after.title')}</h4>
                <ul className="space-y-2">
                  <li>{t('meta.after.views')}</li>
                  <li>{t('meta.after.clicks')}</li>
                  <li>{t('meta.after.purchases')}</li>
                  <li>{t('meta.after.price')}</li>
                  <li>{t('meta.after.costs')}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{t('meta.results.title')}</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-emerald-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-emerald-600 text-white py-2 rounded-t-lg">{t('meta.results.beforeTitle')}</h4>
                    <img src="/img/v7/fb-before-case-7.webp" alt="Before Results Screenshot" onClick={openModalBeforeMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-emerald-600 text-white py-2 rounded-t-lg">{t('meta.results.afterTitle')}</h4>
                    <img src="/img/v7/fb-after-case-7.webp" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                </div>

                <Transition appear show={isOpenBeforeMeta} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModalBeforeMeta}>
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Dialog.Panel className="w-full max-w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                            Before we started our cooperation
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img//v7/fb-before-case-7.webp" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                                onClick={closeModalBeforeMeta}
                              >
                                {t('meta.results.closeButton')}
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>

                <Transition appear show={isOpenAfterMeta} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModalAfterMeta}>
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Dialog.Panel className="w-full max-w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                            After our cooperation
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v7/fb-after-case-7.webp" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                                onClick={closeModalAfterMeta}
                              >
                                {t('meta.results.closeButton')}
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
          </div>         
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
          <a href="#form" className="bg-emerald-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-emerald-700 transition duration-300 ease-in-out animate-bounce">
            {t('cta.text')}
          </a>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8" dangerouslySetInnerHTML={{ __html: t('tiktok.title') }}></h3>
          <p className="mb-8" dangerouslySetInnerHTML={{ __html: t('tiktok.description') }}>
          </p>
          
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-emerald-600 mx-auto sm:w-1/2">
              <h4 className="text-2xl font-bold mb-4 text-emerald-600">{t('tiktok.after.title')}</h4>
              <ul className="space-y-2">
                <li>{t('tiktok.after.views')}</li>
                <li>{t('tiktok.after.clicks')}</li>
                <li>{t('tiktok.after.purchases')}</li>
                <li>{t('tiktok.after.price')}</li>
                <li>{t('tiktok.after.costs')}</li>
              </ul>
            </div>
          </div>
         
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{t('tiktok.results.title')}</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-emerald-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-emerald-600 text-white py-2 rounded-t-lg">{t('tiktok.results.afterTitle')}</h4>
                    <img src="/img/v7/tiktok-after-case7.jpg" alt="After Results Screenshot" onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                </div>
                <Transition appear show={isOpenAfterGoogle} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModalAfterGoogle}>
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Dialog.Panel className="w-full max-w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                            After our cooperation
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v7/tiktok-after-case7.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                                onClick={closeModalAfterGoogle}
                              >
                                {t('meta.results.closeButton')}
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8">{t('conclusions.title')}</h3>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('conclusions.description1') }}>
          </p>
          <p className='mb-8' dangerouslySetInnerHTML={{ __html: t('conclusions.description2') }}>
          </p>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-emerald-600">
              <ul className="space-y-2">
                <li>{t('conclusions.total.purchases')}</li>
                <li>{t('conclusions.total.price')}</li>
                <li>{t('conclusions.total.costs')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center" dangerouslySetInnerHTML={{ __html: t('testimonial.title') }}></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src="/img/v7/facephoto.jpg" alt="Derrick" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-emerald-600" />
            <p className="font-bold text-center">{t('testimonial.name')}</p> 
            <p className="text-center" dangerouslySetInnerHTML={{ __html: t('testimonial.position') }}></p>
          </div>
          <div className="md:w-2/3 md:px-8">
            <blockquote className="text-xl italic mb-4" dangerouslySetInnerHTML={{ __html: t('testimonial.quote') }}>
            </blockquote>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-emerald-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-emerald-700 transition duration-300 ease-in-out animate-bounce">
              {t('cta.text')}
            </a>
          </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center" dangerouslySetInnerHTML={{ __html: t('form.title') }}></h2>
        <p className="text-center" dangerouslySetInnerHTML={{ __html: t('form.description1') }}>
        </p>
        <div className="flex justify-center">
        
        <Formspree />
        
        </div>
        <p className="mt-8 text-center" dangerouslySetInnerHTML={{ __html: t('form.description2') }}>
        </p>
      </section>

      <CasesFooter />
      <MessengerButton
        link="https://m.me/100006500822716"
        text={t('messenger.text')}
      />
    </div>
  );
};

export default V7Page;