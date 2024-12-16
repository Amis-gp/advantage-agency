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

const V11Page: NextPage = () => {
    useEffect(() => {
        document.title = "132 Leads for Notary Services in Berlin";
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
                <span className='highlight'>132 leads</span> for notary services in Berlin
            </h1>
            <div className="mb-12">
                <p className="mb-4"><strong>About the client:</strong> Marina - head of a notary firm with 22 years of experience, providing services in Berlin and Zurich for Ukrainian emigrants.</p>
            </div>
            <div className="mb-12 flex flex-wrap justify-center items-center">
                <div className="w-full lg:w-3/5 text-center">
                    <h2 className="text-2xl font-bold mb-4">Challenges:</h2>
                    <ul className="list-disc inline-block text-left pl-6 space-y-2 mr-8">
                        <li>High competition among notary services in Berlin</li>
                        <li>Lack of an effective landing page for conversion</li>
                        <li>Need for targeting Ukrainian emigrants</li>
                        <li>Difficulty in tracking advertising effectiveness</li>
                        <li>Need for advertising budget optimization</li>
                        <li>Absence of a systematic sales funnel</li>
                    </ul>
                </div>
                <div className="w-full lg:w-2/5 flex justify-center items-center">
                    <img src="/img/v11/hero.webp" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
                </div>
            </div>
            <div className="flex justify-center w-full mt-14 mb-8 text-center">
                <a href="#form" className="bg-red-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
                    Get a free business consultation
                </a>
            </div>
        </section>

        <section className="mb-12">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <p className="text-lg leading-relaxed mb-4">
                        For successful promotion of notary services in Berlin, we developed a comprehensive approach that includes using <strong>Meta Ads and Google Ads</strong>. Our strategy is based on a deep analysis of the market and creating an optimized sales funnel using a specially developed landing page.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Our approach:</h2>
                    <p className="text-lg mb-6">
                        At the initial stage of cooperation, we conducted a detailed analysis with the client to identify competitive advantages and develop an effective strategy for attracting clients for notary services.
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
                                <tr className="hover:bg-gray-50 transition-colors duration-150">
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">1.</td>
                                    <td className="px-6 py-4 text-gray-700">Identifying goals and conducting an initial analysis of competitive advantages</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors duration-150">
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">2.</td>
                                    <td className="px-6 py-4 text-gray-700">Detailed market analysis and creation of the portrait of an ideal client</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors duration-150">
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">3.</td>
                                    <td className="px-6 py-4 text-gray-700">Development of advertising strategies for Meta Ads and Google Ads, creation of an optimized landing page</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors duration-150">
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">4.</td>
                                    <td className="px-6 py-4 text-gray-700">Setting up advertising, creating ads and optimizing advertising campaigns for 2-4 weeks</td>
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
                After a detailed analysis of the notary services market in Berlin, we developed a targeting strategy for the Ukrainian diaspora. We created personalized ads that highlighted <strong>experience, reliability, and professionalism</strong> of the notary firm. We paid special attention to the development of video content and visualization of the process of working with clients.
            </p>
            <div className="mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-red-600 w-fit mx-auto">
                    <h4 className="text-2xl font-bold mb-4 text-red-600">Meta Ads Results</h4>
                    <ul className="space-y-2">
                        <li><strong>Leads:</strong> 74</li>
                        <li><strong>Records:</strong> 26</li>
                        <li><strong>Average check:</strong> $200</li>
                        <li><strong>Advertising costs:</strong> $992</li>
                        <li><strong>ROI:</strong> 520%</li>
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

            <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4"><span className='highlight highlight-green-200 highlight-variant-5'>Google Ads:</span></h3>
                <p className="mb-4">
                    For Google Ads, we developed a structure of campaigns focused on different types of notary services. We conducted a <strong>deep analysis of keywords</strong> and created optimized ads for each group of services. We paid special attention to geo-targeting and language settings to reach the Ukrainian audience.
                </p>
                <div className="mb-8">
                    <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-red-600 w-fit mx-auto">
                        <h4 className="text-2xl font-bold mb-4 text-red-600">Google Ads Results</h4>
                        <ul className="space-y-2">
                            <li><strong>Leads:</strong> 58</li>
                            <li><strong>Records:</strong> 17</li>
                            <li><strong>Advertising costs:</strong> $1084</li>
                            <li><strong>ROI:</strong> 340%</li>
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

            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-8">Overall results:</h3>
                <p className="mb-4">
                    Thanks to the comprehensive approach and optimization of advertising campaigns, <strong>we managed to achieve significant growth</strong> in the number of clients and notary firm profits.
                </p>
                <div className="flex justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-red-600">
                        <ul className="space-y-2">
                            <li><strong>Total leads:</strong> 132</li>
                            <li><strong>Conversion to clients:</strong> 43</li>
                            <li><strong>Total profit:</strong> $8,600</li>
                            <li><strong>Total expenses:</strong> $2,076</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center"><span className='highlight highlight-red-300 highlight-variant-5'>What Marina says about cooperation:</span></h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/3 mb-4 md:mb-0 text-center">
                    <img src="/img/v11/facephoto.jpg" alt="" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-red-600" />
                    <p className="font-bold">Marina</p> 
                    <p className="font-bold text-red-600">Head of the notary firm</p>
                </div>
                <div className="md:w-2/3 md:px-8">
                    <blockquote className="italic mb-4">
                        "I am very satisfied with the results of our cooperation. The quality of leads we get through advertising is much higher than from other channels. These are people who really need our services right now.
                    </blockquote>
                    <p className="mt-4">
                        It is especially important that we managed to establish a stable stream of clients among the Ukrainian diaspora in Berlin. Now we have a clear system for attracting clients that works 24/7.
                    </p>
                    <p className="mt-4">
                        The professional approach of the team and constant support helped us to reach a new level of business development. Thank you for your excellent work!"
                    </p>
                </div>
            </div>
        </section>

        <section className="mb-12 mt-8">
            <h2 id="form" className="text-3xl font-bold mb-8 text-center">
                Get a professional digital-marketing strategy for your business
                <span className="block mt-2 text-2xl text-red-600">Free consultation</span>
            </h2>
        
            <div className="max-w-3xl mx-auto text-lg">
                <p className="mb-6 text-center leading-relaxed">
                    Our team will help you create an effective system for attracting clients through internet marketing. We focus on three key areas:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-600">
                        <h3 className="font-bold text-xl mb-2 text-center">Analytics</h3>
                        <p className="text-gray-600 text-center">Detailed analysis of your niche and competitors</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-600">
                        <h3 className="font-bold text-xl mb-2 text-center">Strategy</h3>
                        <p className="text-gray-600 text-center">Development of a comprehensive marketing plan</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-600">
                        <h3 className="font-bold text-xl mb-2 text-center">Result</h3>
                        <p className="text-gray-600 text-center">Increase sales and scale</p>
                    </div>
                </div>

                <p className="text-center mb-8">
                    Fill out the form below to receive a personalized development plan for your business in digital-format
                </p>

                <div className="w-fit mx-auto">
                    <Formspree />
                </div>

                <p className="mt-8 text-center text-gray-600">
                    Leave a request now and get a <strong>free audit</strong> of your current marketing strategy
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

export default V11Page;