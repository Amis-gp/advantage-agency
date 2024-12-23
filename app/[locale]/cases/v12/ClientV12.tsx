"use client"

import React from 'react';
import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';       

import '@/app/styles.css'
import MessengerButton from '@/components/MessengerButton';
import Formspree from '@/components/Formspree';
import CasesFooter from '@/components/CasesFooter';

const V12Page: NextPage = () => {
    useEffect(() => {
        document.title = "Reducing cost per purchase from $63 to $48";
    }, []);
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
    
return (    
    <div className="text-black bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
    <section className="pt-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Reducing cost per purchase from <span className='highlight'>$63 to $48</span>
        </h1>
        <div className="mb-12">
            <p className="mb-4"><strong>About client:</strong> Winest - Wine internet distributor of exclusive wines in Israel, more than 3 years in the market, with an online store featuring digital sommelier service for relevant wine selection and fast delivery.</p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-3/5 text-center">
                <h2 className="text-2xl font-bold mb-4">Challenges:</h2>
                <ul className="list-disc inline-block text-left pl-6 space-y-2 mr-8">
                <li>Need to reduce cost per purchase/checkout</li>
                <li>Fix attribution in tracker and traffic source</li>
                <li>Improve existing campaigns</li>
                <li>Prepare advertising for Black Friday</li>
                </ul>
            </div>
            <div className="w-full lg:w-2/5 flex justify-center items-center">
                <img src="/img/v12/hero.jpeg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
            </div>
        </div>
        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-red-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
                Free business consultation
            </a>
        </div>
    </section>

    <section className="mb-12">
        <div className="max-w-4xl mx-auto">
            <div className="mb-12">
                <p className="text-lg leading-relaxed mb-4">
                    After a detailed analysis of all data, we started setting up ads in Google and Facebook. We analyzed the user journey from ads to adding to the cart on the site and the purchase process itself.
                </p>
            </div>

            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Our approach:</h2>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gradient-to-r from-red-500 to-red-600 text-white">
                            <tr>
                                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Stage</th>
                                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">1.</td>
                                <td className="px-6 py-4 text-gray-700">Conducted client call, discussed current issues</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">2.</td>
                                <td className="px-6 py-4 text-gray-700">Performed detailed analysis of target audience and market specifics</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">3.</td>
                                <td className="px-6 py-4 text-gray-700">Created advertising strategy for Meta Ads and Google Ads</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">4.</td>
                                <td className="px-6 py-4 text-gray-700">Adjusted conversion tracking correctly</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>

    <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">Meta ADS: <span className='highlight highlight-red-300 highlight-variant-5'>( facebook/instagram )</span></h2>
        <p className="mb-8">
            After agreeing on all questions with the client, we started managing active ads and launching new ones. Our first task was to perform mass optimization, for this we disabled ineffective ads, selected the best ads as references, and applied fresh improvements.
        </p>
        <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-red-600 w-fit mx-auto">
                <h4 className="text-2xl font-bold mb-4 text-red-600">Meta Ads Results</h4>
                <ul className="space-y-2">
                    <li><strong>Checkouts:</strong> 857</li>
                    <li><strong>Purchases:</strong> 375</li>
                    <li><strong>Cost per purchase:</strong> $48.6</li>
                    <li><strong>Average check:</strong> $100</li>
                    <li><strong>Ad budget:</strong> $18,031</li>
                </ul>
            </div>
        </div>

        <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Results:</h3>
            <div className="grid grid-cols-1 gap-8 border-2 border-red-600 rounded-lg p-6">
                <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-red-600 text-white py-2 rounded-t-lg">After</h4>
                    <img src="/img/v3/facebol-detailing-high_ctr.jpg" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                    After our cooperation.
                    </Dialog.Title>
                    <div className="mt-2">
                        <img src="/img/v3/facebol-detailing-high_ctr.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                    </div>

                    <div className="mt-4">
                        <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        onClick={closeModalAfterMeta}
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

        <div className="mb-8 mt-8">
            <h3 className="text-3xl font-bold mb-4">Google Ads:</h3>
            <p className="mb-8">
                For Google Ads, we set up ad campaign structures, performed detailed keyword and negative keyword research, and developed special ads for search engines. We focused on optimizing ad campaigns - disabling ineffective ads and focusing on the most effective ads.
            </p>
            <div className="mb-12">
                <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-red-600 w-fit mx-auto">
                    <h4 className="text-2xl font-bold mb-4 text-red-600">Google Ads Results</h4>
                    <ul className="space-y-2">
                        <li><strong>Checkouts:</strong> 294</li>
                        <li><strong>Purchases:</strong> 82</li>
                        <li><strong>Cost per purchase:</strong> $52.2</li>
                        <li><strong>Additional leads through landing page:</strong> 58</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div className="mb-8">
            <h3 className="text-2xl font-bold mb-8">Results:</h3>    
            <div className="grid grid-cols-1 gap-8 border-2 border-red-600 rounded-lg p-6">
                <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-red-600 text-white py-2 rounded-t-lg">After</h4>
                    <img src="/img/v3/stata_google_en_after_case3.jpg" alt="After Results Screenshot" onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                    After our cooperation.
                    </Dialog.Title>
                    <div className="mt-2">
                        <img src="/img/v3/stata_google_en_after_case3.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                    </div>

                    <div className="mt-4">
                        <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        onClick={closeModalAfterGoogle}
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

        <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8">Overall Results</h3>
            <p className="mt-6 text-lg font-semibol">
                As a result of our work, we not only <strong>reduced the cost per purchase by 23%</strong>, but also significantly increased sales volume through both advertising channels.
            </p>
            <div className="flex justify-center mt-8">
                <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-red-600">
                    <ul className="space-y-2">
                        <li><strong>Total purchases:</strong>391</li>
                        <li><strong>Average cost per purchase:</strong> $49.28</li>
                        <li><strong>Advertising budget</strong> $19,269</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center"><span className='highlight highlight-red-300 highlight-variant-5'>What Katherine says about cooperation:</span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/3 mb-4 md:mb-0 text-center">
                <img src="/img/v12/facephoto.webp" alt="" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-red-600" />
                <p className="font-bold">Katherine</p> 
                <p className="font-bold text-red-600">Business Owner</p>
            </div>
            <div className="md:w-2/3 md:px-8">
                <blockquote className="italic mb-4">
                    "Overall, I am very satisfied with our cooperation. The Advantage team quickly helped us solve the problems with order tracking and correct operation. The results speak for themselves - we significantly reduced the cost per purchase and increased sales volume."
                </blockquote>
                <p className="mt-4">
                    It is especially important that all processes now work like clockwork, and we can clearly see the results of our advertising activity. This gives us confidence in further development.
                </p>
                <p className="mt-4">
                    Now we have already set new targets for the next year and plan to launch advertising on a new market together. Thank you for your professional approach and excellent results!"
                </p>
            </div>
        </div>
    </section>

    <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">
            Get a professional digital strategy for your business
            <span className="block mt-2 text-2xl text-red-600">Free consultation</span>
        </h2>
    
        <div className="max-w-3xl mx-auto text-lg">
            <p className="mb-6 text-center leading-relaxed">
                Our team will help you create an effective system for attracting customers through internet marketing. We focus on three key areas:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-600">
                    <h3 className="font-bold text-xl mb-2 text-center">Analytics</h3>
                    <p className="text-gray-600 text-center">Detailed analysis of your niche and competitors</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-600">
                    <h3 className="font-bold text-xl mb-2 text-center">Strategy</h3>
                    <p className="text-gray-600 text-center">Development of comprehensive promotion plan</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-600">
                    <h3 className="font-bold text-xl mb-2 text-center">Results</h3>
                    <p className="text-gray-600 text-center">Increase in sales and scaling</p>
                </div>
            </div>

            <p className="text-center mb-8">
                Fill out the form below to get a personalized plan for your business development in the digital environment
            </p>

            <div className="w-fit mx-auto">
                <Formspree />
            </div>

            <p className="mt-8 text-center text-gray-600">
                Submit your request now and get a <strong>free audit</strong> of your current marketing strategy
            </p>
        </div>
    </section>

    <CasesFooter />

    <MessengerButton
        link="https://m.me/100006500822716"
        text="Chat with us on Messenger"
    />
    </div>
    );
};

export default V12Page;