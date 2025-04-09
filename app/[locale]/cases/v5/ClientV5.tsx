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

const v5Page: NextPage = () => {
  const params = useParams();
  const locale = params.locale as string;
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const translations = await import(`/messages/${locale}/cases/v5.json`);
        setTranslations(translations.default);
        document.title = translations.default.title;
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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-600 mb-4"></div>
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
          {t('heading')}
        </h1>
        <div className="mb-12">
          <p className="mb-4">
          {locale === 'en' ? (
            <>
              Meet Mary, <strong className='text-sky-500'>an interior designer from New York.</strong> She offers planning and development of concepts, selection of lighting and decor, author's support, development of textile design, and much more.
              Mary has set a goal to scale her business, <strong>generate more clients,</strong> and hire additional employees, but to realize this, she needed to implement inbound marketing and launch effective advertising.
            </>
          ) : (
            <>
              Знайомтесь, Мері, <strong className='text-sky-500'>дизайнер інтер'єрів із Нью-Йорка.</strong> Пропонує планування та розробку концепції, підбір освітлення та декору, авторський супровід, розробку текстильного дизайну та багато іншого.
              Мері поставила за мету розширити свій бізнес, <strong>залучити більше клієнтів,</strong> та найняти додаткових співробітників, але щоб реалізувати це, їй потрібно було запровадити вхідний маркетинг і запустити ефективну рекламу.
            </>
          )}
          </p>
          <p className="mb-4">
            {t('intro.paragraph2')}
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
            <img src="/img/v5/hero.jpg" alt={t('challenges.imageAlt')} className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm pl-6" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('approach.title')}</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-sky-500 to-sky-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">{t('approach.table.headers.0')}</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">{t('approach.table.headers.1')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {Array.isArray(t.raw('approach.table.rows')) 
                ? t.raw('approach.table.rows').map((row: string, index: number) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-4 py-2 whitespace-nowrap font-medium">{index + 1}</td>
                    <td className="px-4 py-2">{row}</td>
                  </tr>
                ))
                : <tr><td colSpan={2} className="px-4 py-2 text-center">No rows available</td></tr>
              }
            </tbody>
          </table>
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
          <a href="#form" className="bg-sky-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-sky-700 transition duration-300 ease-in-out animate-bounce">
            {t('cta')}
          </a>
        </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4 text-center">
          <span className='highlight highlight-sky-300 highlight-variant-5'>{t('strategy.title').split(' for ')[0]}</span> {t('strategy.title').includes(' for ') ? t('strategy.title').split(' for ')[1] : ''}
        </h2>
        <p className="mb-4">
          {t('strategy.paragraph1')}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-4 mx-auto">
          <img src="/img/v1/meta.jpg" alt={t('strategy.imageAlt')} className="rounded-lg border-2 md:w-full w-1/2 max-w-none" />
        </div>
        <p className="mb-4">
          {t('strategy.paragraph2')}
        </p>
        <p>
          {t('strategy.tactics.intro')}
        </p>
        <ul className="list-disc pl-6 mb-4">
          {Array.isArray(t.raw('strategy.tactics.list')) 
            ? t.raw('strategy.tactics.list').map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))
            : <li>No tactics listed</li>
          }
        </ul>
        <p>
          {t('strategy.tactics.conclusion')}
        </p>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">{t('techniques.title')}</h2>
        <p className="mb-8">
          {t('techniques.intro')}
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8"><span className='highlight highlight-blue-200 highlight-variant-5'>{t('techniques.metaAds.title').split(':')[0]}:</span> {t('techniques.metaAds.title').includes(':') ? t('techniques.metaAds.title').split(':')[1] : ''}</h3>

          <div className="mb-8">
            <div className="">
              <div className="bg-white rounded-lg shadow-lg w-1/2 mx-auto p-6 border-4 border-sky-600">
                <h4 className="text-2xl font-bold mb-4 text-sky-600">{t('techniques.metaAds.results.title')}</h4>
                <ul className="space-y-2">
                  <li><strong>{locale === 'en' ? 'Date:' : 'Дата:'}</strong> {t('techniques.metaAds.results.date')}</li>
                  <li><strong>{locale === 'en' ? 'Ad Spend:' : 'Витрати на рекламу:'}</strong> {t('techniques.metaAds.results.adSpend')}</li>
                  <li><strong>{locale === 'en' ? 'Link Clicks:' : 'Переходів за посиланням:'}</strong> {t('techniques.metaAds.results.linkClicks')}</li>
                  <li><strong>CTR:</strong> {t('techniques.metaAds.results.ctr')}</li>
                  <li><strong>{locale === 'en' ? 'Leads:' : 'Виводів:'}</strong> {t('techniques.metaAds.results.leads')}</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
            {t('techniques.metaAds.paragraph1')}
          </p>
          <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-sky-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-sky-700 transition duration-300 ease-in-out animate-bounce">
              {t('cta')}
            </a>
          </div>
          <p className="mb-4">
            {t('techniques.metaAds.paragraph2')}
          </p> 
         
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{t('techniques.metaAds.resultsTitle')}</h3>
            <div className="grid grid-cols-1 gap-8 border-2 border-sky-600 rounded-lg p-6">
              <div>
                <h4 className="text-xl font-bold mb-4 text-center bg-sky-600 text-white py-2 rounded-t-lg">{t('techniques.metaAds.afterTitle')}</h4>
                <img 
                  src="/img/v5/facebol-high_ctr.jpg" 
                  alt={t('techniques.metaAds.imageAlt')} 
                  onClick={openModalAfterMeta} 
                  className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" 
                />
              </div>
            </div>

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
                          {t('techniques.metaAds.modalTitle')}
                        </Dialog.Title>
                        <div className="mt-2 w-full mx-auto">
                          <img 
                            className="mx-auto w-full sm:w-4/5 md:w-3/4 lg:w-1/2 max-h-[80vh] object-contain" 
                            src="/img/v5/facebol-high_ctr.jpg" 
                            alt={t('techniques.metaAds.imageAlt')} 
                          />
                        </div>

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                            onClick={closeModalAfterMeta}
                          >
                            {t('modal.close')}
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
          <h3 className="text-2xl font-bold mb-8"><span className='highlight highlight-green-200 highlight-variant-5'>{t('techniques.googleAds.title')}</span> {t('techniques.googleAds.subtitle')}</h3>

          <div className="mb-8">
            <div className="mx-auto">
              <div className="bg-white rounded-lg shadow-lg w-1/2 mx-auto p-6 border-4 border-sky-600">
                <h4 className="text-2xl font-bold mb-4 text-sky-600">{t('techniques.googleAds.results.title')}</h4>
                <ul className="space-y-2">
                  <li><strong>{locale === 'en' ? 'Date:' : 'Дата:'}</strong> {t('techniques.googleAds.results.date')}</li>
                  <li><strong>{locale === 'en' ? 'Cost per Result:' : 'Вартість за результат:'}</strong> {t('techniques.googleAds.results.costPerResult')}</li>
                  <li><strong>{locale === 'en' ? 'Link Clicks:' : 'Переходів за посиланням:'}</strong> {t('techniques.googleAds.results.linkClicks')}</li>
                  <li><strong>CTR:</strong> {t('techniques.googleAds.results.ctr')}</li>
                  <li><strong>{locale === 'en' ? 'Website Conversions:' : 'Конверсії на сайті:'}</strong> {t('techniques.googleAds.results.conversions')}</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
            {t('techniques.googleAds.paragraph')}
          </p>
          <ul className="list-disc pl-6 mb-4">
            {Array.isArray(t.raw('techniques.googleAds.list')) 
              ? t.raw('techniques.googleAds.list').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))
              : <li>No Google Ads techniques listed</li>
            }
          </ul>

          <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-sky-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-sky-700 transition duration-300 ease-in-out animate-bounce">
              {t('cta')}
            </a>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{t('techniques.googleAds.resultsTitle')}</h3>
            <div className="grid grid-cols-1 gap-8 border-2 border-sky-600 rounded-lg p-6">
              <div>
                <h4 className="text-xl font-bold mb-4 text-center bg-sky-600 text-white py-2 rounded-t-lg">{t('techniques.googleAds.afterTitle')}</h4>
                <img 
                  src="/img/v5/stata-google.jpg" 
                  alt={t('techniques.googleAds.imageAlt')} 
                  onClick={openModalAfterGoogle} 
                  className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" 
                />
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
                          {t('techniques.googleAds.modalTitle')}
                        </Dialog.Title>
                        <div className="mt-2">
                          <img src="/img/v5/stata-google.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                        </div>
          
                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                            onClick={closeModalAfterGoogle}
                          >
                            {t('modal.close')}
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
          <h3 className="text-2xl font-bold mb-4">{t('techniques.customStrategies.title')} <span className='highlight highlight-violet-200 highlight-variant-5'>{t('techniques.customStrategies.highlight')}</span></h3>
          <p className="mb-4">
            {t('techniques.customStrategies.paragraph')}
          </p>
          <ul className="list-disc pl-6 mb-4">
            {Array.isArray(t.raw('techniques.customStrategies.list')) 
              ? t.raw('techniques.customStrategies.list').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))
              : <li>No custom strategies listed</li>
            }
          </ul>
        </div>

        <p>
          {t('techniques.customStrategies.conclusion')}
        </p>
      </section>

      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center"><span className='highlight highlight-sky-300 highlight-variant-5'>{t('testimonial.title')}</span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src="/img/v5/facephoto.jpg" alt={t('testimonial.name')} className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-sky-600" />
            <p className="font-bold text-center">{t('testimonial.name')}</p> 
            <p className="text-center"><a href="" target="_blank" rel="noopener noreferrer" className="text-sky-600">{t('testimonial.position')}</a></p>
          </div>
          <div className="md:w-2/3 md:px-8">
            <blockquote className="text-xl italic mb-4">
              "{t('testimonial.quote')}"
            </blockquote>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
        <a href="#form" className="bg-sky-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-sky-700 transition duration-300 ease-in-out animate-bounce">
          {t('cta')}
        </a>
      </div>
      
      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">{t('form.title').split(t('form.titleHighlight'))[0]} <span className='highlight highlight-sky-300 highlight-variant-5'>{t('form.titleHighlight')}</span></h2>
        <p className="text-center">
          {t('form.description')}
        </p>
        <div className="flex justify-center">
          <Formspree />
        </div>

        <p className="mt-8 text-center">
          {t('form.note')}
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

export default v5Page;