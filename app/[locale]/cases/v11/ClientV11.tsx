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

const V11Page: NextPage = () => {
    const params = useParams();
    const locale = params.locale as string;
    const [translations, setTranslations] = useState<any>({});
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const loadTranslations = async () => {
            setIsLoading(true);
            try {
                const translations = await import(`/messages/${locale}/cases/v11.json`);
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
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center" dangerouslySetInnerHTML={{ __html: t('hero.title') }}></h1>
            <div className="mb-12">
                <p className="mb-4"><strong>{t('about.title')}</strong> {t('about.description')}</p>
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
                    <img src="/img/v11/hero.webp" alt={t('challenges.imageAlt')} className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
                </div>
            </div>
            <div className="flex justify-center w-full mt-14 mb-8 text-center">
                <a href="#form" className="bg-red-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
                    {t('cta.button')}
                </a>
            </div>
        </section>

        <section className="mb-12">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <p className="text-lg leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t('analysis.description') }}></p>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">{t('approach.title')}</h2>
                    <p className="text-lg mb-6">
                        {t('approach.description')}
                    </p>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-red-500 to-red-600 text-white">
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
            <h2 className="text-3xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: t('meta.title') }}></h2>
            <p className="mb-8" dangerouslySetInnerHTML={{ __html: t('meta.description') }}></p>
            <div className="mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-red-600 w-fit mx-auto">
                    <h4 className="text-2xl font-bold mb-4 text-red-600">{t('meta.results.title')}</h4>
                    <ul className="space-y-2">
                        <li>{t('meta.results.leads')}</li>
                        <li>{t('meta.results.records')}</li>
                        <li>{t('meta.results.average')}</li>
                        <li>{t('meta.results.costs')}</li>
                        <li>{t('meta.results.roi')}</li>
                    </ul>
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">{t('meta.after.title')}</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-red-600 rounded-lg p-6">
                    <div>
                        <h4 className="text-xl font-bold mb-4 text-center bg-red-600 text-white py-2 rounded-t-lg">{t('meta.after.afterTitle')}</h4>
                        <img src="/img/v3/facebol-detailing-high_ctr.jpg" alt={t('meta.after.afterImageAlt')} onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                    </div>
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
                        {t('meta.after.modalTitle')}
                        </Dialog.Title>
                        <div className="mt-2">
                            <img src="/img/v3/facebol-detailing-high_ctr.jpg" alt={t('meta.after.afterImageAlt')} style={{ width: 'auto', height: 'auto' }} />
                        </div>

                        <div className="mt-4">
                            <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                            onClick={closeModalAfterMeta}
                            >
                            {t('meta.after.close')}
                            </button>
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>

            <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: t('google.title') }}></h3>
                <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('google.description') }}></p>
                <div className="mb-8">
                    <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-red-600 w-fit mx-auto">
                        <h4 className="text-2xl font-bold mb-4 text-red-600">{t('google.results.title')}</h4>
                        <ul className="space-y-2">
                            <li>{t('google.results.leads')}</li>
                            <li>{t('google.results.records')}</li>
                            <li>{t('google.results.costs')}</li>
                            <li>{t('google.results.roi')}</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-8">{t('google.after.title')}</h3>    
                <div className="grid grid-cols-1 gap-8 border-2 border-red-600 rounded-lg p-6">
                    <div>
                        <h4 className="text-xl font-bold mb-4 text-center bg-red-600 text-white py-2 rounded-t-lg">{t('google.after.afterTitle')}</h4>
                        <img src="/img/v3/stata_google_en_after_case3.jpg" alt={t('google.after.afterImageAlt')} onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                    </div>
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
                        {t('google.after.modalTitle')}
                        </Dialog.Title>
                        <div className="mt-2">
                            <img src="/img/v3/stata_google_en_after_case3.jpg" alt={t('google.after.afterImageAlt')} style={{ width: 'auto', height: 'auto' }} />
                        </div>

                        <div className="mt-4">
                            <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                            onClick={closeModalAfterGoogle}
                            >
                            {t('google.after.close')}
                            </button>
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>

            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-8">{t('overall.title')}</h3>
                <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('overall.description') }}></p>
                <div className="flex justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-red-600">
                        <ul className="space-y-2">
                            {t('overall.results') && Array.isArray(t('overall.results')) && t('overall.results').map((item: string, index: number) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center" dangerouslySetInnerHTML={{ __html: t('testimonial.title') }}></h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/3 mb-4 md:mb-0 text-center">
                    <img src="/img/v11/facephoto.jpg" alt="" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-red-600" />
                    <p className="font-bold">{t('testimonial.name')}</p> 
                    <p className="font-bold text-red-600">{t('testimonial.position')}</p>
                </div>
                <div className="md:w-2/3 md:px-8">
                    <blockquote className="italic mb-4">
                        "{t('testimonial.quote1')}
                    </blockquote>
                    <p className="mt-4">
                        {t('testimonial.quote2')}
                    </p>
                    <p className="mt-4">
                        {t('testimonial.quote3')}"
                    </p>
                </div>
            </div>
        </section>

        <section className="mb-12 mt-8">
            <h2 id="form" className="text-3xl font-bold mb-8 text-center">
                {t('form.title')}
                <span className="block mt-2 text-2xl text-red-600">{t('form.subtitle')}</span>
            </h2>
        
            <div className="max-w-3xl mx-auto text-lg">
                <p className="mb-6 text-center leading-relaxed">
                    {t('form.description')}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {t('form.areas') && Array.isArray(t('form.areas')) && t('form.areas').map((area: any, index: number) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-600">
                            <h3 className="font-bold text-xl mb-2 text-center">{area.title}</h3>
                            <p className="text-gray-600 text-center">{area.description}</p>
                        </div>
                    ))}
                </div>

                <p className="text-center mb-8">
                    {t('form.formDescription')}
                </p>

                <div className="w-fit mx-auto">
                    <Formspree />
                </div>

                <p className="mt-8 text-center text-gray-600" dangerouslySetInnerHTML={{ __html: t('form.note') }}></p>
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

export default V11Page;