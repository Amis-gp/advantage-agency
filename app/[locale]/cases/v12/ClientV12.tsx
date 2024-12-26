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
        document.title = "Reducing purchase cost from $72 to $48";
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
        Reducing purchase cost from <span className='highlight highlight-red-300 highlight-variant-5'>$72 to $48</span>
    </h1>
    <div className="mb-12">
        <p className="mb-4 text-lg leading-relaxed">
            <strong>🍷 About client:</strong> <a href='https://winest.store/' className="font-semibold text-[#ff6315] underline">Winest</a> - Wine online distributor of 
            <span> exclusive wines</span> in Israel, more than <strong>3 years</strong> in the market, 
            has an online store with <em>digital sommelier</em> service 🥂, for relevant wine selection and 
            <strong> fast delivery</strong> 🚚.
        </p>
    </div>
    <div className="mb-12 flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Challenges:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2 mr-8">
                <li>Need to reduce cost per purchase</li>
                <li>Fix attribution in tracker and traffic source</li>
                <li>Improve existing campaigns</li>
                <li>Prepare ads for Black Friday</li>
            </ul>
        </div>
        <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v12/hero.jpeg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
        </div>
    </div>
    <div className="flex justify-center w-full mt-14 mb-8 text-center">
        <a href="#form" className="bg-[#ff6315] text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
            Free consultation for your business
        </a>
    </div>
    </section>

    <section className="mb-12">
        <div className="">
            <div className="mb-12">
                <p className="text-lg leading-relaxed mb-4">
                    <strong>📊 After a thorough analysis</strong> of all data from advertising campaigns on <span className="text-blue-600"> Google</span> and <span className="text-[#4267B2]"> Facebook</span>, we began to explore the user's journey—from clicking on an ad to adding items to the cart 🛒 on the website and completing the purchase process 💳.
                </p>
            </div>

            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Our approach:</h2>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gradient-to-r from-red-500 to-[#ff6315] text-white">
                            <tr>
                                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Stage</th>
                                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">1.</td>
                                <td className="px-6 py-4 text-gray-700">Called the client, discussed current issues</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">2.</td>
                                <td className="px-6 py-4 text-gray-700">Conducted a detailed analysis of the target audience and market specifics</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">3.</td>
                                <td className="px-6 py-4 text-gray-700">Developed an advertising strategy</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">4.</td>
                                <td className="px-6 py-4 text-gray-700">Adjusted conversion tracking</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>

    <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">Meta ADS: <span className='highlight highlight-red-300 highlight-variant-5'>( facebook/instagram )</span></h2>
        <p className="mb-8 leading-relaxed">
            <strong>🎯 After agreeing with the client</strong>, we started managing active ads and launching new ones. <em>Our first task</em> was to optimize mass ads, so we <strong>removed ineffective ads</strong>, selected the best ad creatives.
        </p>
        <p className="mb-8 leading-relaxed">
            <strong>⚙️ We corrected UTM tags</strong> in ads, which <em>fixed the data transfer issue</em> from ads to Triplewhale tracker, and we integrated a promo code for additional analytics.
        </p>
        <p className="mb-8 leading-relaxed">
            <strong>🚀 We conducted a successful test</strong> with ads targeting <em>"initiating checkout"</em>, which helped us optimize Facebook ads for the Black Friday campaign, and then added warm users. <strong>We changed our approach to targeting</strong>, focusing on Black Friday and Christmas ads.
        </p>

        <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Раніше</h4>
                <ul className="space-y-2">
                    <li><strong>Checkouts:</strong> 633</li>
                    <li><strong>Purchases:</strong> 259</li>
                    <li><strong>rice per purchase:</strong> $63.3</li>
                    <li><strong>Average check:</strong> $90</li>
                    <li><strong>Advertising budget:</strong> $15,383</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-[#ff6315]">
                <h4 className="text-2xl font-bold mb-4 text-[#ff6315]">Після</h4>
                <ul className="space-y-2">
                    <li><strong>Checkouts:</strong> 785</li>
                    <li><strong>Purchases:</strong> 309</li>
                    <li><strong>Price per purchase:</strong> $48.6</li>
                    <li><strong>Average check:</strong> $100</li>
                    <li><strong>Advertising budget:</strong> $15,031</li>
                </ul>
              </div>
            </div>
        </div>
        

        <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Results:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-[#ff6315] rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-[#ff6315] text-white py-2 rounded-t-lg">Before</h4>
                    <img src="/img/v12/facebook-before-v12.webp" alt="Before Results Screenshot" onClick={openModalBeforeMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-[#ff6315] text-white py-2 rounded-t-lg">After</h4>
                    <img src="/img/v12/facebook-after-v12.webp" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                            Prior to our collaboration
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
                                Close
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
                            After our cooperation.
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
                                Close
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
            <h3 className="text-3xl font-bold mb-4">Google Ads:</h3>
            <p className="mb-8 text-lg leading-relaxed">
                <strong>🎯 For Google Ads</strong> we structured ad campaigns, conducted <em>detailed keyword research</em> and <em>negative keyword research</em> 🔍. <strong>✨ We developed specialized ad creatives</strong> for search engines. <span className="text-blue-600">We focused on optimizing ad campaigns</span> - <strong>removed ineffective ads</strong> 🚫 and <em>focused on the most effective ads</em> ⭐.
            </p>
            <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Раніше</h4>
                <ul className="space-y-2">
                    <li><strong>Checkouts:</strong> 207</li>
                    <li><strong>Purchases:</strong> 52</li>
                    <li><strong>Price per purchase:</strong> $67.2</li>
                    <li><strong>Advertising budget:</strong> $3529</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-[#ff6315]">
                <h4 className="text-2xl font-bold mb-4 text-[#ff6315]">Після</h4>
                <ul className="space-y-2">
                    <li><strong>Checkouts:</strong> 294</li>
                    <li><strong>Purchases:</strong> 82</li>
                    <li><strong>Price per purchase:</strong> $51.6</li>
                    <li><strong>Advertising budget:</strong> $4238</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Results:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-[#ff6315] rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-[#ff6315] text-white py-2 rounded-t-lg">Before</h4>
                    <img src="/img/v12/google-before-v12.webp" alt="Before Results Screenshot" onClick={openModalBeforeGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-[#ff6315] text-white py-2 rounded-t-lg">After</h4>
                    <img src="/img/v12/google-after-v12.webp" alt="After Results Screenshot" onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                            Prior to our collaboration
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
                                Close
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
                            After our cooperation.
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
                                Close
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
            <h3 className="text-2xl font-bold mb-8">Overall Results</h3>
            <p className="mt-6 text-lg font-semibol">
                As a result of our work, we not only <strong>reduced the cost per purchase by 23%</strong>, but also significantly increased sales through both advertising channels.
            </p>
            <div className="flex justify-center mt-8">
                <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-[#ff6315]">
                    <ul className="space-y-2">
                        <li><strong>Total purchases:</strong> 391</li>
                        <li><strong>Average price per purchase:</strong> $49.28</li>
                        <li><strong>Advertising budget:</strong> $19,269</li>
                    </ul>
                </div>
            </div>
        </div>

    </section>

    <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center"><span className='highlight highlight-red-300 highlight-variant-5'>What Marina says about cooperation:</span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/3 mb-4 md:mb-0 text-center">
                <img src="/img/v12/facephoto.webp" alt="" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-[#ff6315]" />
                <p className="font-bold">Katya</p> 
                <a href="https://winest.store/" className="font-bold text-[#ff6315]">Business Owner</a>
            </div>
            <div className="md:w-2/3 md:px-8">
                <blockquote className="italic mb-4 text-lg leading-relaxed">
                    "✨ Overall, I'm very satisfied with our cooperation. The <span className="text-[#ff6315]">Advantage</span> team quickly helped us solve our issues with tracking purchases. <strong>The results speak for themselves</strong> - we significantly reduced the cost per purchase. 📈"
                </blockquote>
                <p className="mt-4 text-lg leading-relaxed">
                    <strong>It's important</strong>, that all processes now work like clockwork, and we can clearly see the results of our advertising efforts.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                    Now we have set new goals for the next year. <span className="text-[#ff6315]">Thank you for the professional approach!</span> 🚀
                </p>
            </div>
        </div>
    </section>

    <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">
            Get a professional digital strategy for your business
            <span className="block mt-2 text-2xl text-[#ff6315]">Free consultation</span>
        </h2>
    
        <div className="max-w-3xl mx-auto text-lg">
            <p className="mb-6 text-center leading-relaxed">
                Our team will help you create an effective customer acquisition system through internet marketing. We focus on three key areas:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#ff6315]">
                    <h3 className="font-bold text-xl mb-2 text-center">Analytics</h3>
                    <p className="text-gray-600 text-center">Detailed analysis of your niche and competitors</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#ff6315]">
                    <h3 className="font-bold text-xl mb-2 text-center">Strategy</h3>
                    <p className="text-gray-600 text-center">Development of a comprehensive promotion plan</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#ff6315]">
                    <h3 className="font-bold text-xl mb-2 text-center">Result</h3>
                    <p className="text-gray-600 text-center">Increase in sales and scaling</p>
                </div>
            </div>

            <p className="text-center mb-8">
                Fill out the form below to get a personalized development plan for your business in the digital environment
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