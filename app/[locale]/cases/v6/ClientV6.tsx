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
import LanguageSwitcher from '@/components/LanguageSwitcher';
const V6Page: NextPage = () => {
  const params = useParams();
  const locale = params.locale as string;
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const translations = await import(`/messages/${locale}/cases/v6.json`);
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

  const [isOpenCom1, setIsOpenCom1] = useState(false);
  const [isOpenCom2, setIsOpenCom2] = useState(false);
  const [isOpenCom3, setIsOpenCom3] = useState(false);
  const [isOpenStata, setIsOpenStata] = useState(false);
  const [isOpenStories, setIsOpenStories] = useState(false);

  function closeModalCom1() {
    setIsOpenCom1(false);
  }

  function openModalCom1() {
    setIsOpenCom1(true);
  }

  function closeModalCom2() {
    setIsOpenCom2(false);
  }

  function openModalCom2() {
    setIsOpenCom2(true);
  }

  function closeModalCom3() {
    setIsOpenCom3(false);
  }

  function openModalCom3() {
    setIsOpenCom3(true);
  }

  function closeModalstata() {
    setIsOpenStata(false);
  }

  function openModalstata() {
    setIsOpenStata(true);
  }

  function closeModalStories() {
    setIsOpenStories(false);
  }

  function openModalStories() {
    setIsOpenStories(true);
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600 mb-4"></div>
          <p className="text-xl font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-black bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <LanguageSwitcher />
      <section className="pt-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center" dangerouslySetInnerHTML={{ __html: t('hero.title') }}>
        </h1>
        
        <div className="mb-12">
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('about.paragraph1') }}>
          </p>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('about.paragraph2') }}>
          </p>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('about.paragraph3') }}>
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">{t('challenges.title')}</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              {Array.isArray(t.raw('challenges.list')) 
                ? t.raw('challenges.list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))
                : <li>No challenges listed</li>
              }
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v6/hero.jpg" alt={t('challenges.imageAlt')} className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('approach.title')}</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Step</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {Array.isArray(t.raw('approach.steps')) 
                ? t.raw('approach.steps').map((step: string, index: number) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-4 py-2 whitespace-nowrap font-medium">{index + 1}</td>
                    <td className="px-4 py-2">{step}</td>
                  </tr>
                ))
                : <tr><td colSpan={2} className="px-4 py-2 text-center">No steps available</td></tr>
              }
            </tbody>
          </table>
        </div>

        <p className="mb-8" dangerouslySetInnerHTML={{ __html: t('analysis.paragraph') }}>
        </p>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-amber-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-amber-700 transition duration-300 ease-in-out animate-bounce">
            {t('cta.button')}
            </a>
          </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: t('responses.title') }}></h2>
        <div className="mb-8">

          <div className="mb-8">

                <div  className="border-2 border-amber-600 rounded-lg p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                    <div>
                      <img src="/img/v6/com-1.jpg" alt={t('responses.imageAlt1')} onClick={openModalCom1} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                    </div>
                    <div>
                      <img src="/img/v6/com2.jpg" alt={t('responses.imageAlt2')} onClick={openModalCom2} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                    </div>
                  </div>
                  <div>
                    <img src="/img/v6/com3.jpg" alt={t('responses.imageAlt3')} onClick={openModalCom3} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                </div>

                <Transition appear show={isOpenCom1} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModalCom1}>
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
                            <div className="mt-2 w-full mx-auto">
                              <img 
                                className="mx-auto w-full sm:w-4/5 md:w-3/4 lg:w-1/2 max-h-[80vh] object-contain" 
                                src="/img/v6/com-1.jpg" 
                                alt={t('responses.imageAlt1')} 
                              />
                            </div>
                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                                onClick={closeModalCom1}
                              >
                                {t('responses.close')}
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>

                <Transition appear show={isOpenCom2} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModalCom2}>
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
                            <div className="mt-2 w-full mx-auto">
                              <img 
                                className="mx-auto w-full sm:w-4/5 md:w-3/4 lg:w-1/2 max-h-[80vh] object-contain" 
                                src="/img/v6/com2.jpg" 
                                alt={t('responses.imageAlt2')} 
                              />
                            </div>
                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                                onClick={closeModalCom2}
                              >
                                {t('responses.close')}
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
                
                <Transition appear show={isOpenCom3} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModalCom3}>
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
                            <div className="mt-2 w-full mx-auto">
                              <img 
                                className="mx-auto w-full sm:w-4/5 md:w-3/4 lg:w-1/2 max-h-[80vh] object-contain" 
                                src="/img/v6/com3.jpg" 
                                alt={t('responses.imageAlt3')} 
                              />
                            </div>
                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                                onClick={closeModalCom3}
                              >
                                {t('responses.close')}
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

        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('stats.paragraph') }}>
        </p>

        <div className="grid grid-cols-1 gap-8 border-2 border-amber-600 rounded-lg p-6 sm:w-3/5 mx-auto mb-8">
          <div>
            <img src="/img/v6/stata.jpg" alt={t('stats.imageAlt')} onClick={openModalstata} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
          </div>
        </div>

                <Transition appear show={isOpenStata} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModalstata}>
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
                            <div className="mt-2 sm:w-4/5 mx-auto">
                              <img src="/img/v6/stata.jpg" alt={t('stats.imageAlt')} style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                                onClick={closeModalstata}
                              >
                                {t('responses.close')}
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>

        <div className="mb-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-8">{t('contacts.title')}</h3>
            <div className="flex justify-center">
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-amber-600">
                <ul className="space-y-2">
                  <li><strong>{t('contacts.responses')}</strong> 174</li>
                  <li><strong>{t('contacts.calls')}</strong> 116</li>
                  <li><strong>{t('contacts.deals')}</strong> 29</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
      
      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center" dangerouslySetInnerHTML={{ __html: t('testimonial.title') }}></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src="/img/v6/facephoto.jpg" alt={t('testimonial.name')} className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-amber-600" />
            <p className="font-bold text-center">{t('testimonial.name')}</p> 
            <p className="text-center">{t('testimonial.position')} of <a href="https://render-market.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-amber-600"><strong><u>{t('testimonial.company')}</u></strong></a></p>
          </div>
          <div className="md:w-2/3 md:px-8">
            <blockquote className="text-xl italic mb-4">{t('testimonial.quote')}</blockquote>
          </div>
        </div>
      </section>
      
      <div className="flex justify-center w-full mt-8 mb-8 text-center">
        <a href="#form" className="bg-amber-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-amber-700 transition duration-300 ease-in-out animate-bounce">
          {t('cta.button')}
        </a>
      </div>
      
      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">{t('form.title')}</h2>
        <p className="text-center" dangerouslySetInnerHTML={{ __html: t('form.description') }}></p>
        <div className="flex justify-center">
          <Formspree />
        </div>
        <p className="mt-8 text-center" dangerouslySetInnerHTML={{ __html: t('form.footer') }}></p>
      </section>

      <CasesFooter />

      <MessengerButton
        link="https://m.me/100006500822716"
        text={t('messenger.text')}
      />
    </div>
  );
};

export default V6Page;