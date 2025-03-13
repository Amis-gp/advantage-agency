"use client"

import React from 'react';
import { NextPage } from 'next';
import Formspree from "@/components/cases/Formspree";

import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';       

import '@/app/styles.css'
import MessengerButton from '@/components/cases/MessengerButton';
import CasesFooter from '@/components/cases/Footer';
import LanguageSwitcher from '@/components/cases/LanguageSwitcher';

const v9Page: NextPage = () => {
  useEffect(() => {
    document.title = "Sten Engineering Success Story";
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
      <LanguageSwitcher />
      <section className="pt-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
        How we increased the amount of leads and calls by <span className='highlight'>264%</span> for Sten Engineering
        </h1>
        {/* <h2 className="text-2xl font-semibold mb-8 text-center text-orange-600">
        Find Out About Unique Strategies That We Used to Save Their Business
        </h2> */}
        <div className="mb-12">
          <p className="mb-4">
          Meet Evgenyi - <strong className='text-orange-500'>owner of a residential engineering company in Los Angeles,</strong> more than 5 years on the market. His company offers a wide range of residential engineering services such as: foundation and retaining structure, residential remodels and additions, interior design, patio design and other. Despite the impeccable quality of service, Evgenyi faced the problem of <u>attracting new clients</u> and the company's media exposure on the Internet. The company's growth stagnated and marketing was the weak link in the business.
          </p>
          <p className="mb-4">
          Evgenyi had tried many things and was desperate. He realized that if he didn't take drastic action, the company was in danger of shutting down. And then he saw our ad. It didn't take long for Evgenyi to decide to trust us because of <strong>our experience in the residential engineering industry.</strong> Our proven system combines strategies based on in-depth data analysis with an impeccable understanding of the industry. This allows us to deliver impressive results.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">The Challenges:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              <li>Attracting new customers in a competitive market</li>
              <li><u>Decrease in demand</u> for the high-ticket services</li>
              <li>Low effectiveness of existing advertising efforts</li>
              <li>Very high cost per new client</li>
            </ul>
            
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v9/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Approach:</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Step</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1</td>
                <td className="px-4 py-2">
                  Conducted a thorough analysis of Sten Engineering's online presence, target audience, and competitors.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                  Developed a comprehensive online marketing strategy tailored to the company's unique needs and goals.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                  Optimized the site for search engines. Redesign focused on increasing conversions.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                  Launched email marketing campaigns to engage the customer base.
                </td>
              </tr>
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
        <h2 className="text-3xl font-bold mb-4 text-center">
          <span className='highlight highlight-orange-300 highlight-variant-5'>Our unique strategy</span> for Sten Engineering advertising campaigns
        </h2>
        <p className="mb-4">
          Advantage Agency specializes in creating viral advertising campaigns on Meta (Facebook and Instagram) and Google Ads platforms. Our team of experts with experience and deep understanding of the advertising industry <strong>created a new strategy</strong> that improved brand awareness and generated new clients for Sten Engineering.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-4 mx-auto">
          <img src="/img/v1/meta.jpg" alt="Meta Ads" className="rounded-lg border-2 md:w-full w-1/2 max-w-none" />
        </div>
        <p className="mb-4">
         Through a detailed campaign audit and consultation with Sten Engineering, we gained valuable insights into the campaign's unique strengths, target audience and development goals. This knowledge informed our strategic approach, allowing us to design campaigns that would <strong>resonate with potential clients</strong> and drive tangible results.
        </p>
        <p>
          We employed a number of proven tactics, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Created promotional video creatives by telling stories and building funnels with the goal of getting leads</li>
          <li>Emphasized brand awareness in advertising</li>
          <li>Precise targeting to <strong>attract ideal clients</strong> for residential engineering services based on demographics, interests and behaviors</li>
          <li>Offers and promotions that prompt immediate action - signups as soon as possible</li>
          <li>Ongoing optimization and A/B testing to improve ad effectiveness and maximize ROI</li>
        </ul>
        <p>
          By utilizing these strategies in Meta Ads and Google Ads, we were confident in our ability to provide a steady flow of new customers and increased brand awareness
        </p>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">A deep dive into our techniques</h2>
        <p className="mb-8">
          With a clear strategy in place, it was time to put our plan into action. Our team of experts rolled up their sleeves and got to work, implementing a number of proven techniques across Meta Ads, Google Ads and our consulting services.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8"><span className='highlight highlight-blue-200 highlight-variant-5'>Meta Ads:</span> Engaging Audiences on Facebook and Instagram</h3>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Before</h4>
                <ul className="space-y-2">
                  <li><strong>Date:</strong> February 2 - March 2</li>
                  <li><strong>Ad Spend:</strong> $2,567.79</li>
                  <li><strong>Link Clicks:</strong> 381</li>
                  <li><strong>CTR:</strong> 0.66%</li>
                  <li><strong>Leads:</strong> 3</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-orange-600">
                <h4 className="text-2xl font-bold mb-4 text-orange-600">After</h4>
                <ul className="space-y-2">
                  <li><strong>Date:</strong> March 2 - April 2</li>
                  <li><strong>Ad Spend:</strong> $3,085.31</li>
                  <li><strong>Link Clicks:</strong> 1,573</li>
                  <li><strong>CTR:</strong> 1.96%</li>
                  <li><strong>Leads:</strong> 11</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
            Instead of just promoting a post through Instagram like they did before, we switched to the Ads Manager dashboard, which allowed us to more accurately customize ads and track them.
          </p>
          <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              Book My Free Consult Now
            </a>
          </div>
          <p className="mb-4">
            Our Meta Ads campaigns were designed to grab the attention of potential customers scrolling through their Facebook and Instagram feeds. We developed compelling ad text and eye-catching visual ads that showcased unique campaign offerings and impactful <strong>shots that could impress any user</strong> who was interested residential engineering services
          </p> 
         

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Results:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-orange-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">Before Our Work</h4>
                    <img src="/img/v9/stata_fb_en_before_case1.jpg" alt="Before Results Screenshot" onClick={openModalBeforeMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">After Our Work</h4>
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
                              Before Our Work
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
                              After Our Work
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
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8"><span className='highlight highlight-green-200 highlight-variant-5'>Google Ads:</span> Attracting Clients Through Search</h3>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Before</h4>
                <ul className="space-y-2">
                  <li><strong>Date:</strong>  February 2 - March 2</li>
                  <li><strong>Cost per Result:</strong> $497.22</li>
                  <li><strong>Link Clicks:</strong> 107</li>
                  <li><strong>CTR:</strong> 2.53%</li>
                  <li><strong>Website Conversions:</strong> 6</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-orange-600">
                <h4 className="text-2xl font-bold mb-4 text-orange-600">After</h4>
                <ul className="space-y-2">
                  <li><strong>Date:</strong> March 2 - April 2</li>
                  <li><strong>Cost per Result:</strong> $214.94</li>
                  <li><strong>Link Clicks:</strong> 182</li>
                  <li><strong>CTR:</strong> 5.15%</li>
                  <li><strong>Website Conversions:</strong> 15</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
          Our Google Ads campaigns were aimed at attracting potential customers actively looking for residential engineering services in Los Angeles. We applied a number of optimization techniques to get <strong>Sten Engineering to the top of the search results</strong>.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Restructuring campaigns by creating separate campaigns for each service with targeted keywords</li>
            <li>Analyze and excluded negative keywords to improve ad relevance</li>
            <li>Optimized bids and conversions by modifying strategies to "maximize conversions" and collecting data</li>
            <li>Created Performance Max campaigns to maximize results in Google ad channels</li>
          </ul>

          <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              Book My Free Consult Now
            </a>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Results:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-orange-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">Before Our Work</h4>
                    <img src="/img/v9/stata_google_en_before_case1.jpg" alt="Before Results Screenshot" onClick={openModalBeforeGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">After Our Work</h4>
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
                              Before Our Work
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
                              After Our Work
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
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Customized Strategies for <span className='highlight highlight-violet-200 highlight-variant-5'>Success</span></h3>
          <p className="mb-4">
            Our consulting services played a large role in the success of online marketing for Sten Engineering. <strong>We worked closely</strong> with the company owner to understand the unique needs, goals, and target audience.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Conducted a detailed analysis of the website, identifying technical issues and opportunities for improvement</li>
            <li><u>Developed a new landing page</u> with clear information, new offers and visually appealing design</li>
            <li>Provided recommendations on creating engaging video content and optimizing ad placement</li>
            <li>Provided ongoing support and strategic guidance to ensure long-term success</li>
          </ul>
        </div>

        <p>
          Through a strategic combination of these tactics utilizing Meta Ads, Google Ads and consulting services, <strong>we created a powerful online marketing plan</strong> that helped Sten Engineering succeed.
        </p>
      </section>

      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center"><span className='highlight highlight-orange-300 highlight-variant-5'>A Сompany Owner's Testimonial</span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src="/img/v9/facephoto.webp" alt="Owner" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-orange-600" />
            <p className="font-bold text-center">Evgenyi Nagovitsyn</p> 
            <p className="text-center">Owner of <a href="https://lastructuralengineer.com" target="_blank" rel="noopener noreferrer" className="text-orange-600"><strong><u>Sten Engineering</u></strong></a></p>
          </div>
          <div className="md:w-2/3 md:px-8">
            <blockquote className="text-xl italic mb-4">
              "Prior to working with Advantage Agency, our marketing was handled by two marketing specialists. We cooperated well with the guys, and they brought certain results. However, their skills were not enough for our ambitious plans and fast growth rate. I would like to thank the Advantage team for taking the initiative, helping us in many ways and taking our marketing to the next level. We now have a clear vision on how to develop our marketing further."
            </blockquote>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
        <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
          Book My Free Consult Now
        </a>
      </div>
      
      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Ready to <span className='highlight highlight-orange-300 highlight-variant-5'>Transform Your Company?</span></h2>
        <p className="text-center">
        See how our effective digital marketing techniques can help your company grow and succeed more than ever before. Schedule your free consultation today and discover how we can help you achieve the growth you've always desired.
        </p>
        <div className="flex justify-center">

        <Formspree/>
        {/* <CalendlyEmbed url="https://calendly.com/d/cn6d-c6t-vy7?primary_color=ea580c" /> */}

        </div>

        <p className="mt-8 text-center">
        Don't miss this opportunity to unlock your company's true potential. At the moment <strong>we can take not more than 3 new clients,</strong> so make sure that your story will be the next and take the first step towards transforming your business by getting in touch with us via Messenger or booking a call.
        </p>
      </section>

      <CasesFooter />

      <MessengerButton
        link="https://m.me/100006500822716"
        text="Chat with us on Messenger"
      />
    </div>
  );
};

export default v9Page;