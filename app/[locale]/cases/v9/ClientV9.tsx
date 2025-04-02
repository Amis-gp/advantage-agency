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

const v9Page: NextPage = () => {
  const params = useParams();
  const locale = params.locale as string;
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const translations = await import(`/messages/${locale}/cases/v9.json`);
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
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
        {t('title')}
        </h1>
        {/* <h2 className="text-2xl font-semibold mb-8 text-center text-orange-600">
        Find Out About Unique Strategies That We Used to Save Their Business
        </h2> */}
        <div className="mb-12">
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('intro.paragraph1') }}></p>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('intro.paragraph2') }}></p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">{t('challenges.title')}</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              {Array.isArray(t('challenges.list')) 
                ? t('challenges.list').map((item: string, index: number) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                  ))
                : <li>No challenges listed</li>
              }
            </ul>
            
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v9/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('approach.title')}</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">{t('approach.table.headers.step')}</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">{t('approach.table.headers.action')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {Array.isArray(t('approach.table.rows')) 
                ? t('approach.table.rows').map((row: string, index: number) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-4 py-2 whitespace-nowrap font-medium">{index + 1}</td>
                    <td className="px-4 py-2">{row}</td>
                  </tr>
                ))
                : <tr><td colSpan={2} className="px-4 py-2 text-center">No data available</td></tr>
              }
            </tbody>
          </table>
         
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              {t('ctaButton')}
            </a>
          </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4 text-center" dangerouslySetInnerHTML={{ __html: t('strategy.title') }}></h2>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('strategy.paragraph1') }}></p>
        <div className="flex flex-wrap justify-center gap-4 mb-4 mx-auto">
          <img src="/img/v1/meta.jpg" alt="Meta Ads" className="rounded-lg border-2 md:w-full w-1/2 max-w-none" />
        </div>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('strategy.paragraph2') }}></p>
        <p>
          {t('strategy.paragraph3')}
        </p>
        <ul className="list-disc pl-6 mb-4">
          {Array.isArray(t('strategy.tactics')) 
            ? t('strategy.tactics').map((tactic: string, index: number) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: tactic }}></li>
            ))
            : <li>No tactics listed</li>
          }
        </ul>
        <p>
          {t('strategy.conclusion')}
        </p>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">{t('customizedStrategies.title')}</h2>
        <p className="mb-8">
          {t('customizedStrategies.paragraph')}
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8" dangerouslySetInnerHTML={{ __html: t('metaAds.title') }}></h3>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">{t('metaAds.before.title')}</h4>
                <ul className="space-y-2">
                  <li><strong>{t('metaAds.results.date')}:</strong> {t('metaAds.before.date')}</li>
                  <li><strong>{t('metaAds.results.adSpend')}:</strong> {t('metaAds.before.adSpend')}</li>
                  <li><strong>{t('metaAds.results.linkClicks')}:</strong> {t('metaAds.before.linkClicks')}</li>
                  <li><strong>{t('metaAds.results.ctr')}:</strong> {t('metaAds.before.ctr')}</li>
                  <li><strong>{t('metaAds.results.leads')}:</strong> {t('metaAds.before.leads')}</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-orange-600">
                <h4 className="text-2xl font-bold mb-4 text-orange-600">{t('metaAds.after.title')}</h4>
                <ul className="space-y-2">
                  <li><strong>{t('metaAds.results.date')}:</strong> {t('metaAds.after.date')}</li>
                  <li><strong>{t('metaAds.results.adSpend')}:</strong> {t('metaAds.after.adSpend')}</li>
                  <li><strong>{t('metaAds.results.linkClicks')}:</strong> {t('metaAds.after.linkClicks')}</li>
                  <li><strong>{t('metaAds.results.ctr')}:</strong> {t('metaAds.after.ctr')}</li>
                  <li><strong>{t('metaAds.results.leads')}:</strong> {t('metaAds.after.leads')}</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
            {t('metaAds.paragraph1')}
          </p>
          <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              {t('ctaButton')}
            </a>
          </div>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('metaAds.paragraph2') }}></p> 
         

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{t('metaAds.results.title')}</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-orange-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">{t('metaAds.results.beforeTitle')}</h4>
                    <img src="/img/v9/stata_fb_en_before_case1.jpg" alt="Before Results Screenshot" onClick={openModalBeforeMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">{t('metaAds.results.afterTitle')}</h4>
                    <img src="/img/v9/stata_fb_en_after_case1.jpg" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                              {t('googleAds.results.beforeTitle')}
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v9/stata_fb_en_before_case1.jpg" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                                onClick={closeModalBeforeMeta}
                              >
                                {t('metaAds.results.closeButton')}
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
                              {t('googleAds.results.afterTitle')}
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v9/stata_fb_en_after_case1.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                                onClick={closeModalAfterMeta}
                              >
                                {t('metaAds.results.closeButton')}
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
          <h3 className="text-2xl font-bold mb-8" dangerouslySetInnerHTML={{ __html: t('googleAds.title') }}></h3>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">{t('googleAds.before.title')}</h4>
                <ul className="space-y-2">
                  <li><strong>{t('metaAds.results.date')}:</strong> {t('googleAds.before.date')}</li>
                  <li><strong>{t('googleAds.results.costPerResult')}:</strong> {t('googleAds.before.costPerResult')}</li>
                  <li><strong>{t('metaAds.results.linkClicks')}:</strong> {t('googleAds.before.linkClicks')}</li>
                  <li><strong>{t('metaAds.results.ctr')}:</strong> {t('googleAds.before.ctr')}</li>
                  <li><strong>{t('googleAds.results.conversions')}:</strong> {t('googleAds.before.conversions')}</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-orange-600">
                <h4 className="text-2xl font-bold mb-4 text-orange-600">{t('googleAds.after.title')}</h4>
                <ul className="space-y-2">
                  <li><strong>{t('metaAds.results.date')}:</strong> {t('googleAds.after.date')}</li>
                  <li><strong>{t('googleAds.results.costPerResult')}:</strong> {t('googleAds.after.costPerResult')}</li>
                  <li><strong>{t('metaAds.results.linkClicks')}:</strong> {t('googleAds.after.linkClicks')}</li>
                  <li><strong>{t('metaAds.results.ctr')}:</strong> {t('googleAds.after.ctr')}</li>
                  <li><strong>{t('googleAds.results.conversions')}:</strong> {t('googleAds.after.conversions')}</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('googleAds.paragraph') }}></p>
          <ul className="list-disc pl-6 mb-4">
            {Array.isArray(t('googleAds.techniques')) 
              ? t('googleAds.techniques').map((technique: string, index: number) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: technique }}></li>
              ))
              : <li>No techniques listed</li>
            }
          </ul>

          <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              {t('ctaButton')}
            </a>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{t('googleAds.results.title')}</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-orange-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">{t('googleAds.results.beforeTitle')}</h4>
                    <img src="/img/v9/stata_google_en_before_case1.jpg" alt="Before Results Screenshot" onClick={openModalBeforeGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">{t('googleAds.results.afterTitle')}</h4>
                    <img src="/img/v9/stata_google_en_after_case1.jpg" alt="After Results Screenshot" onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                              {t('googleAds.results.beforeTitle')}
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v9/stata_google_en_before_case1.jpg" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                                onClick={closeModalBeforeGoogle}
                              >
                                {t('googleAds.results.closeButton')}
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
                              {t('googleAds.results.afterTitle')}
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v9/stata_google_en_after_case1.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                                onClick={closeModalAfterGoogle}
                              >
                                {t('googleAds.results.closeButton')}
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
          <h3 className="text-2xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: t('customizedStrategies.title') }}></h3>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('customizedStrategies.paragraph') }}></p>
          <ul className="list-disc pl-6 mb-4">
            {Array.isArray(t('customizedStrategies.strategies')) 
              ? t('customizedStrategies.strategies').map((strategy: string, index: number) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: strategy }}></li>
              ))
              : <li>No strategies listed</li>
            }
          </ul>
        </div>

        <p dangerouslySetInnerHTML={{ __html: t('customizedStrategies.conclusion') }}></p>
      </section>

      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center" dangerouslySetInnerHTML={{ __html: t('testimonial.title') }}></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src="/img/v9/facephoto.webp" alt="Owner" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-orange-600" />
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
        <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
          {t('ctaButton')}
        </a>
      </div>
      
      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center" dangerouslySetInnerHTML={{ __html: t('contactForm.title') }}></h2>
        <p className="text-center">
        {t('contactForm.description')}
        </p>
        <div className="flex justify-center">

        <Formspree/>
        {/* <CalendlyEmbed url="https://calendly.com/d/cn6d-c6t-vy7?primary_color=ea580c" /> */}

        </div>

        <p className="mt-8 text-center" dangerouslySetInnerHTML={{ __html: t('contactForm.note') }}>
        </p>
      </section>

      <CasesFooter />

      <MessengerButton
        link="https://m.me/100006500822716"
        text={t('messengerButton.text')}
      />
    </div>
  );
};

export default v9Page;