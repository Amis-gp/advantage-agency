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

const V10Page: NextPage = () => {
  const params = useParams();
  const locale = params.locale as string;
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const translations = await import(`/messages/${locale}/cases/v10.json`);
        setTranslations(translations.default);
        document.title = translations.default.title;
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
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
        <span className='highlight'>{t('title').split(' ')[0]} {t('title').split(' ')[1]}</span> {t('title').split(' ').slice(2).join(' ')}
        </h1>
        <div className="mb-12">
          <p className="mb-4">
          <span className=''><span dangerouslySetInnerHTML={{ __html: t('intro.greeting') }}></span></span> <span dangerouslySetInnerHTML={{ __html: t('intro.clientDescription') }}></span>
          </p>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('intro.teamLeadIntro') }}>
          </p>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('intro.advertisingGoal') }}>
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
            <img src="/img/v10/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="flex justify-center w-full mt-14 mb-8 text-center">
          <a href="#form" className="bg-red-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
          {t('ctaButton')}
          </a>
        </div>
        <div className="mb-12">
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('approach.teamDescription') }}>
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('approach.title')}</h2>
          <p className="mb-4">
          {t('approach.description')}
          </p>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-red-500 to-red-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">{t('approach.table.headers.step')}</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">{t('approach.table.headers.action')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {t('approach.table.rows') && Array.isArray(t('approach.table.rows')) && t('approach.table.rows').map((row: string, index: number) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-4 py-2 whitespace-nowrap font-medium">{index + 1}.</td>
                  <td className="px-4 py-2">
                    {row}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
          <a href="#form" className="bg-red-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
          {t('ctaButton')}
          </a>
        </div>
      </section>

      <section className="mb-8 mt-8">
      <h2 className="text-3xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: t('targetedAudience.title') }}></h2>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('targetedAudience.description1') }}>
        </p>
        <p className="mb-12" dangerouslySetInnerHTML={{ __html: t('targetedAudience.description2') }}>
        </p>

        <div className="mb-8">
          
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-red-600 mx-auto md:w-1/2">
              <h4 className="text-2xl font-bold mb-4 text-red-600">{t('results.after.title')}</h4>
              <ul className="space-y-2">
                <li>{t('results.after.stats.views')}</li>
                <li>{t('results.after.stats.clicks')}</li>
                <li>{t('results.after.stats.leads')}</li>
                <li>{t('results.after.stats.pricePerLead')}</li>
                <li>{t('results.after.stats.costs')}</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{t('results.title')}</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-red-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-red-600 text-white py-2 rounded-t-lg">{t('results.afterCooperation')}</h4>
                    <img src="/img/v10/fb-after-case-10.webp" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                            {t('results.afterCooperation')}
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v10/fb-after-case-10.webp" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                onClick={closeModalAfterMeta}
                              >
                                {t('results.closeButton')}
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
          <a href="#form" className="bg-red-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
            {t('ctaButton')}
          </a>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-red-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
              {t('ctaButton')}
            </a>
          </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8" dangerouslySetInnerHTML={{ __html: t('callToAction.title') }}></h2>
        <p className="mb-4">
        {t('callToAction.description')}
        </p>
        <ul className="list-disc mb-6 ml-6">
          {t('callToAction.list') && Array.isArray(t('callToAction.list')) && t('callToAction.list').map((item: string, index: number) => (
            <li key={index}><strong>{item}</strong></li>
          ))}
        </ul>
        <p className="">
        {t('callToAction.formIntro')}
        </p>
        <div className="flex justify-center">
        
        <Formspree />
        
        </div>
        <p className="mt-8 text-center" dangerouslySetInnerHTML={{ __html: t('callToAction.conclusion') }}>
        </p>
      </section>

      <CasesFooter />

      <MessengerButton
        link="https://m.me/100006500822716"
        text={t('messengerButton')}
      />
    </div>
  );
};

export default V10Page;