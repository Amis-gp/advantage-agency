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

const V12Page: NextPage = () => {
    const params = useParams();
    const locale = params.locale as string;
    const [translations, setTranslations] = useState<any>({});
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const loadTranslations = async () => {
            setIsLoading(true);
            try {
                const translations = await import(`/messages/${locale}/cases/v12.json`);
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
    
    const [isOpenBeforeMeta, setIsOpenBeforeMeta] = useState(false);
    const [isOpenAfterMeta, setIsOpenAfterMeta] = useState(false);
    const [isOpenBeforeGoogle, setIsOpenBeforeGoogle] = useState(false);
    const [isOpenAfterGoogle, setIsOpenAfterGoogle] = useState(false);

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
      <LanguageSwitcher />
    <section className="pt-8">
    <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        <div dangerouslySetInnerHTML={{ __html: t('hero.title') }} />
    </h1>
    <div className="mb-12">
        <p className="mb-4 text-lg leading-relaxed">
            <strong>{t('about.title')}</strong> <a href='https://winest.store/' className="font-semibold text-[#ff6315] underline">{t('about.name')}</a> - {t('about.description')}
        </p>
    </div>
    <div className="mb-12 flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">{t('challenges.title')}</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2 mr-8">
                {t('challenges.list') && Array.isArray(t('challenges.list')) && t('challenges.list').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v12/hero.jpeg" alt={t('challenges.imageAlt')} className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
        </div>
    </div>
    <div className="flex justify-center w-full mt-14 mb-8 text-center">
        <a href="#form" className="bg-[#ff6315] text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
            {t('cta.button')}
        </a>
    </div>
    </section>

    <section className="mb-12">
        <div className="">
            <div className="mb-12">
                <p className="text-lg leading-relaxed mb-4">
                    {t('analysis.description')}
                </p>
            </div>

            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">{t('approach.title')}</h2>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gradient-to-r from-red-500 to-[#ff6315] text-white">
                            <tr>
                                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Stage</th>
                                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {t('approach.steps') && Array.isArray(t('approach.steps')) && t('approach.steps').map((step: string, index: number) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{index + 1}.</td>
                                    <td className="px-6 py-4 text-gray-700">{step}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>

    <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">
            <div dangerouslySetInnerHTML={{ __html: t('meta.title') }} />
        </h2>
        <p className="mb-8 leading-relaxed">
            {t('meta.description1')}
        </p>
        <p className="mb-8 leading-relaxed">
            {t('meta.description2')}
        </p>
        <p className="mb-8 leading-relaxed">
            {t('meta.description3')}
        </p>

        <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">{t('meta.before.title')}</h4>
                <ul className="space-y-2">
                    <li>{t('meta.before.checkouts')}</li>
                    <li>{t('meta.before.purchases')}</li>
                    <li>{t('meta.before.price')}</li>
                    <li>{t('meta.before.average')}</li>
                    <li>{t('meta.before.budget')}</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-[#ff6315]">
                <h4 className="text-2xl font-bold mb-4 text-[#ff6315]">{t('meta.after.title')}</h4>
                <ul className="space-y-2">
                    <li>{t('meta.after.checkouts')}</li>
                    <li>{t('meta.after.purchases')}</li>
                    <li>{t('meta.after.price')}</li>
                    <li>{t('meta.after.average')}</li>
                    <li>{t('meta.after.budget')}</li>
                </ul>
              </div>
            </div>
        </div>
        

        <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{t('meta.results.title')}</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-[#ff6315] rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-[#ff6315] text-white py-2 rounded-t-lg">{t('meta.results.before')}</h4>
                    <img src="/img/v12/facebook-before-v12.webp" alt={t('meta.results.beforeImageAlt')} onClick={openModalBeforeMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-[#ff6315] text-white py-2 rounded-t-lg">{t('meta.results.after')}</h4>
                    <img src="/img/v12/facebook-after-v12.webp" alt={t('meta.results.afterImageAlt')} onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                            {t('meta.results.modalBefore')}
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v12/facebook-before-v12.webp" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>
                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-[#ff6315] px-4 py-2 text-sm font-medium text-white hover:bg-[#cb4d0f] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModalBeforeMeta}
                              >
                                {t('meta.results.close')}
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
                            {t('meta.results.modalAfter')}
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v12/facebook-after-v12.webp" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-[#ff6315] px-4 py-2 text-sm font-medium text-white hover:bg-[#cb4d0f] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModalAfterMeta}
                              >
                                {t('meta.results.close')}
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
          </div> 

        <div className="mb-8 mt-8">
            <h3 className="text-3xl font-bold mb-4">{t('google.title')}</h3>
            <p className="mb-8 text-lg leading-relaxed">
                {t('google.description')}
            </p>
            <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">{t('google.before.title')}</h4>
                <ul className="space-y-2">
                    <li>{t('google.before.checkouts')}</li>
                    <li>{t('google.before.purchases')}</li>
                    <li>{t('google.before.price')}</li>
                    <li>{t('google.before.budget')}</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-[#ff6315]">
                <h4 className="text-2xl font-bold mb-4 text-[#ff6315]">{t('google.after.title')}</h4>
                <ul className="space-y-2">
                    <li>{t('google.after.checkouts')}</li>
                    <li>{t('google.after.purchases')}</li>
                    <li>{t('google.after.price')}</li>
                    <li>{t('google.after.budget')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{t('google.results.title')}</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-[#ff6315] rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-[#ff6315] text-white py-2 rounded-t-lg">{t('google.results.before')}</h4>
                    <img src="/img/v12/google-before-v12.webp" alt={t('google.results.beforeImageAlt')} onClick={openModalBeforeGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-[#ff6315] text-white py-2 rounded-t-lg">{t('google.results.after')}</h4>
                    <img src="/img/v12/google-after-v12.webp" alt={t('google.results.afterImageAlt')} onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                </div>

                <Transition appear show={isOpenBeforeGoogle} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModalBeforeGoogle}>
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
                            {t('meta.results.modalBefore')}
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v12/google-before-v12.webp" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>
                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-[#ff6315] px-4 py-2 text-sm font-medium text-white hover:bg-[#cb4d0f] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModalBeforeGoogle}
                              >
                                {t('google.results.close')}
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>

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
                            {t('meta.results.modalAfter')}
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v12/google-after-v12.webp" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-[#ff6315] px-4 py-2 text-sm font-medium text-white hover:bg-[#cb4d0f] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModalAfterGoogle}
                              >
                                {t('google.results.close')}
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
          </div> 

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8">{t('overall.title')}</h3>
            <p className="mt-6 text-lg font-semibol">
                {t('overall.description')}
            </p>
            <div className="flex justify-center mt-8">
                <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-[#ff6315]">
                    <ul className="space-y-2">
                        <li>{t('overall.total')}</li>
                        <li>{t('overall.average')}</li>
                        <li>{t('overall.budget')}</li>
                    </ul>
                </div>
            </div>
        </div>

    </section>

    <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">
            <div dangerouslySetInnerHTML={{ __html: t('testimonial.title') }} />
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/3 mb-4 md:mb-0 text-center">
                <img src="/img/v12/facephoto.webp" alt="" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-[#ff6315]" />
                <p className="font-bold">{t('testimonial.name')}</p> 
                <a href="https://winest.store/" className="font-bold text-[#ff6315]">{t('testimonial.position')}</a>
            </div>
            <div className="md:w-2/3 md:px-8">
                <blockquote className="italic mb-4 text-lg leading-relaxed">
                    "{t('testimonial.quote')}"
                </blockquote>
                <p className="mt-4 text-lg leading-relaxed">
                    {t('testimonial.additional1')}
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                    {t('testimonial.additional2')}
                </p>
            </div>
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {t('form.pillars') && Array.isArray(t('form.pillars')) && t('form.pillars').map((pillar: any, index: number) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#ff6315]">
                        <h3 className="font-bold text-xl mb-2 text-center">{pillar.title}</h3>
                        <p className="text-gray-600 text-center">{pillar.description}</p>
                    </div>
                ))}
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
    </div>
    );
};

export default V12Page;