'use client'

import React from 'react';
import { NextPage } from 'next';
import Formspree from "@/components/cases/Formspree";
import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import '@/app/styles.css'
import MessengerButton from '@/components/cases/MessengerButton';
import CasesFooter from '@/components/cases/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useParams } from 'next/navigation';

const V21Page: NextPage = () => {
  const params = useParams();
  const locale = params.locale as string;
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const translations = await import(`/messages/${locale}/cases/v21.json`);
        setTranslations(translations.default);
        document.title = translations.default.seo.title;
      } catch (error) {
        console.error('error download translate:', error);
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

  const [isOpenImage2, setIsOpenImage2] = useState(false);
  const [isOpenImage3, setIsOpenImage3] = useState(false);
  const [isOpenImage4, setIsOpenImage4] = useState(false);
  const [isOpenImage5, setIsOpenImage5] = useState(false);
  const [isOpenImage6, setIsOpenImage6] = useState(false);
  const [isOpenImage7, setIsOpenImage7] = useState(false);
  const [isOpenImage8, setIsOpenImage8] = useState(false);
  const [isOpenImage9, setIsOpenImage9] = useState(false);
  const [isOpenImage10, setIsOpenImage10] = useState(false);

  function closeModalImage2() {
    setIsOpenImage2(false);
  }

  function openModalImage2() {
    setIsOpenImage2(true);
  }

  function closeModalImage3() {
    setIsOpenImage3(false);
  }

  function openModalImage3() {
    setIsOpenImage3(true);
  }

  function closeModalImage4() {
    setIsOpenImage4(false);
  }

  function openModalImage4() {
    setIsOpenImage4(true);
  }

  function closeModalImage5() {
    setIsOpenImage5(false);
  }

  function openModalImage5() {
    setIsOpenImage5(true);
  }

  function closeModalImage6() {
    setIsOpenImage6(false);
  }

  function openModalImage6() {
    setIsOpenImage6(true);
  }

  function closeModalImage7() {
    setIsOpenImage7(false);
  }

  function openModalImage7() {
    setIsOpenImage7(true);
  }

  function closeModalImage8() {
    setIsOpenImage8(false);
  }

  function openModalImage8() {
    setIsOpenImage8(true);
  }

  function closeModalImage9() {
    setIsOpenImage9(false);
  }

  function openModalImage9() {
    setIsOpenImage9(true);
  }

  function closeModalImage10() {
    setIsOpenImage10(false);
  }

  function openModalImage10() {
    setIsOpenImage10(true);
  }

  // Add loading indicator before the main return
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600 mb-4"></div>
          <p className="text-xl font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-black bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <LanguageSwitcher/>
      <section className="pt-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center" dangerouslySetInnerHTML={{ __html: t('hero.title') }}>
        </h1>
        <h2 className="text-2xl font-semibold mb-8 text-center text-orange-600">
          {t('hero.subtitle')}
        </h2>
        <div className="mb-12">
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('intro.description1') }}>
          </p>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('intro.description2') }}>
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">{t('results.title')}</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              {t('results.stats') && t('results.stats').map((stat: any, index: number) => (
                <li key={index}>{stat.label}: {stat.value}</li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v21/image1.jpg" alt="Case Study Header" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('campaignDetails.title')}</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Parameter</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {t('campaignDetails.details') && t('campaignDetails.details').map((detail: any, index: number) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-4 py-2 whitespace-nowrap font-medium">{detail.parameter}</td>
                  <td className="px-4 py-2">{detail.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              Book My Free Consult Now
            </a>
          </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4 text-center" dangerouslySetInnerHTML={{ __html: t('whatYoullLearn.title') }}>
        </h2>
        <p className="mb-4">
          {t('whatYoullLearn.description1')}
        </p>
        <p className="mb-4">
          {t('whatYoullLearn.description2')}
        </p>
        <p>
          {t('whatYoullLearn.description3')}
        </p>
        <ul className="list-disc pl-6 mb-4">
          {t('whatYoullLearn.topics') && t('whatYoullLearn.topics').map((topic: string, index: number) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
        <p>
          {t('whatYoullLearn.conclusion')}
        </p>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: t('technicalSetup.title') }}></h2>
        <p className="mb-8">
          {t('technicalSetup.description')}
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8" dangerouslySetInnerHTML={{ __html: t('technicalSetup.infrastructure.title') }}></h3>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">{t('technicalSetup.infrastructure.cloaking.title')}</h4>
                <ul className="space-y-2">
                  {t('technicalSetup.infrastructure.cloaking.items') && t('technicalSetup.infrastructure.cloaking.items').map((item: string, index: number) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-orange-600">
                <h4 className="text-2xl font-bold mb-4 text-orange-600">{t('technicalSetup.infrastructure.accounts.title')}</h4>
                <ul className="space-y-2">
                  {t('technicalSetup.infrastructure.accounts.items') && t('technicalSetup.infrastructure.accounts.items').map((item: string, index: number) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
            {t('technicalSetup.infrastructure.conclusion')}
          </p>
          
          <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              {t('cta.buttonText')}
            </a>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: t('technicalSetup.offerSelection.title') }}></h3>
          <p className="mb-4">
            {t('technicalSetup.offerSelection.description')}
          </p>
          <ul className="list-disc pl-6 mb-4">
            {t('technicalSetup.offerSelection.reasons') && t('technicalSetup.offerSelection.reasons').map((reason: string, index: number) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: t('technicalSetup.preLanding.title') }}></h3>
          <p className="mb-4">
            {t('technicalSetup.preLanding.description')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <img src="/img/v21/image2.png" alt="Pre-landing 1" onClick={openModalImage2} className="rounded-lg border border-gray-300 shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer w-48" />
            <img src="/img/v21/image3.png" alt="Pre-landing 2" onClick={openModalImage3} className="rounded-lg border border-gray-300 shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer w-48" />
            <img src="/img/v21/image4.png" alt="Pre-landing 3" onClick={openModalImage4} className="rounded-lg border border-gray-300 shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer w-48" />
            <img src="/img/v21/image5.png" alt="Pre-landing 4" onClick={openModalImage5} className="rounded-lg border border-gray-300 shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer w-48" />
          </div>

          <p className="mb-4">
            {t('technicalSetup.preLanding.benefits.description')}
          </p>
          <ul className="list-disc pl-6 mb-4">
            {t('technicalSetup.preLanding.benefits.items') && t('technicalSetup.preLanding.benefits.items').map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: t('creativeStrategy.title') }}></h3>
          <p className="mb-4">
            {t('creativeStrategy.description')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <img src="/img/v21/image6.png" alt="" onClick={openModalImage6} className="rounded-lg border border-gray-300 shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer w-64" />
            <img src="/img/v21/image7.png" alt="Creative 2" onClick={openModalImage7} className="rounded-lg border border-gray-300 shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer w-64" />
            <img src="/img/v21/image8.png" alt="Creative 3" onClick={openModalImage8} className="rounded-lg border border-gray-300 shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer w-64" />
          </div>

          <p className="mb-4">
            <strong>{t('creativeStrategy.insights.title')}</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            {t('creativeStrategy.insights.items') && t('creativeStrategy.insights.items').map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: t('campaignExecution.title') }}></h2>
        
        <div className="mb-8 overflow-x-auto">
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <tr className='text-lg'>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Setting</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Configuration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-base">
              {t('campaignExecution.settings') && t('campaignExecution.settings').map((setting: any, index: number) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-4 py-2 whitespace-nowrap font-medium">{setting.name}</td>
                  <td className="px-4 py-2">{setting.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">{t('campaignExecution.automatedRules.title')}</h3>
          <p className="mb-4">
            {t('campaignExecution.automatedRules.description')}
          </p>
          
          <div className="flex justify-center mb-4">
            <img src="/img/v21/image9.png" alt="Automated Rules" onClick={openModalImage9} className="rounded-lg border border-gray-300 shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">{t('campaignExecution.finalResults.title')}</h3>
          <p className="mb-4">
            {t('campaignExecution.finalResults.description')}
          </p>
          
          <div className="flex justify-center mb-4">
            <img src="/img/v21/image10.jpg" alt="Campaign Statistics" onClick={openModalImage10} className="rounded-lg border border-gray-300 shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
          </div>

          <div className="p-4 flex flex-col md:flex-row items-center mb-8 border-4 border-orange-600 border-dashed rounded-lg">
            <div className="md:w-1/3 md:pr-8 mb-4 md:mb-0 text-center">
              <p className="text-3xl font-bold text-orange-600 mb-2">{t('campaignExecution.finalResults.roi.percentage')}</p>
              <p><b>{t('campaignExecution.finalResults.roi.label')}</b></p>
            </div>
            <div className="md:w-2/3">
              <p className="text-2xl font-bold">
                {t('campaignExecution.finalResults.roi.description')}
              </p>
            </div>           
          </div>
        </div>

        <div className="flex justify-center w-full mt-8 mb-8 text-center">
          <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
            {t('cta.buttonText')}
          </a>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center">{t('finalCta.title')}</h2>
        <p className="mb-8 text-center text-xl">
          {t('finalCta.description')}
        </p>
        <div className='w-fit mx-auto'>
          <Formspree />
        </div>
      </section>

      {/* Modal for Image 2 */}
      <Transition appear show={isOpenImage2} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalImage2}>
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
                <Dialog.Panel className="w-full max-w-4xl mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex justify-center">
                     <img src="/img/v21/image2.png" alt="Pre-landing" className="max-w-full max-h-[70vh] object-contain" />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={closeModalImage2}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Modal for Image 3 */}
      <Transition appear show={isOpenImage3} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalImage3}>
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
                <Dialog.Panel className="w-full max-w-4xl mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex justify-center">
                     <img src="/img/v21/image3.png" alt="Pre-landing 2" className="max-w-full max-h-[70vh] object-contain" />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={closeModalImage3}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Modal for Image 4 */}
      <Transition appear show={isOpenImage4} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalImage4}>
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
                <Dialog.Panel className="w-full max-w-4xl mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex justify-center">
                     <img src="/img/v21/image4.png" alt="Pre-landing 3" className="max-w-full max-h-[70vh] object-contain" />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={closeModalImage4}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Modal for Image 5 */}
      <Transition appear show={isOpenImage5} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalImage5}>
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
                <Dialog.Panel className="w-full max-w-4xl mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                   <div className="mt-2 flex justify-center">
                     <img src="/img/v21/image5.png" alt="Pre-landing 4" className="max-w-full max-h-[70vh] object-contain" />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={closeModalImage5}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Modal for Image 6 */}
      <Transition appear show={isOpenImage6} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalImage6}>
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
                <Dialog.Panel className="w-full max-w-4xl mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex justify-center">
                     <img src="/img/v21/image6.png" alt="Creative 1" className="max-w-full max-h-[70vh] object-contain" />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={closeModalImage6}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Modal for Image 7 */}
      <Transition appear show={isOpenImage7} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalImage7}>
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
                <Dialog.Panel className="w-full max-w-4xl mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex justify-center">
                     <img src="/img/v21/image7.png" alt="Creative 2" className="max-w-full max-h-[70vh] object-contain" />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={closeModalImage7}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Modal for Image 8 */}
      <Transition appear show={isOpenImage8} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalImage8}>
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
                <Dialog.Panel className="w-full max-w-4xl mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex justify-center">
                     <img src="/img/v21/image8.png" alt="Creative 3" className="max-w-full max-h-[70vh] object-contain" />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={closeModalImage8}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Modal for Image 9 */}
      <Transition appear show={isOpenImage9} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalImage9}>
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
                <Dialog.Panel className="w-full max-w-4xl mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex justify-center">
                    <img src="/img/v21/image9.png" alt="Automated Rules" className="max-w-full max-h-[70vh] object-contain" />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={closeModalImage9}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Modal for Image 10 */}
      <Transition appear show={isOpenImage10} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalImage10}>
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
                <Dialog.Panel className="w-full max-w-4xl mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex justify-center">
                     <img src="/img/v21/image10.jpg" alt="Campaign Statistics" className="max-w-full max-h-[70vh] object-contain" />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={closeModalImage10}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <MessengerButton link="https://t.me/advantage_agency" text="Contact us" />
      <CasesFooter />
    </div>
  );
};

export default V21Page;