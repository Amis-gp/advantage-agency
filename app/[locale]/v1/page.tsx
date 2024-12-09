"use client"

import React from 'react';
import { NextPage } from 'next';
import Formspree from "@/components/Formspree";

import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';       

import '@/app/styles.css'
import MessengerButton from '@/components/MessengerButton';

const V1Page: NextPage = () => {
  useEffect(() => {
    document.title = "Swan Beauty's Success Story";
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
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
          Discover the Secrets Behind Swan Beauty's <span className='highlight'>228% Increase</span> in Monthly Bookings
        </h1>
        <h2 className="text-2xl font-semibold mb-8 text-center text-orange-600">
        Find Out About Unique Strategies That We Used to Save Their Business
        </h2>
        <div className="mb-12">
          <p className="mb-4">
            Meet Natalia, the owner of Swan Beauty Salon in Berlin that offers Laser hair removal, Lashes, Aesthetic medicine, Permanent makeup and others. Despite providing exceptional services, Natalia found herself struggling <u>to attract new clients</u> and maintain a steady stream of bookings. The salon's growth had stagnated, and traditional marketing methods weren't yielding results.
          </p>
          <p className="mb-4">
            Natalia was desperate and had to take action immediately, otherwise her salon couldn’t endure for much longer and there was a threat of shutting down. She saw our ad and decided to give it a try, because we <strong>specialize in helping beauty salons</strong> thrive in today's competitive market. Our proven system combines data-driven strategies with <strong>a deep understanding of the beauty industry</strong> to deliver remarkable results.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">The Challenges:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              <li>Attracting new clients in a competitive market</li>
              <li>Decreasing demand for core services</li>
              <li>Poor performance of existing advertising efforts</li>
              <li>Lack of tracking for leads and bookings via “Booksy”</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v1/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
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
                  Conducted a thorough analysis of Swan Beauty's digital presence, target audience, and competition.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                  Developed a comprehensive digital marketing strategy tailored to the salon's unique needs and goals.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                  Implemented targeted advertising campaigns on Facebook and Google.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                  Optimized the salon's website for search engines and user experience.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">5</td>
                <td className="px-4 py-2">
                  Launched email marketing campaigns to nurture leads and encourage repeat bookings.
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
          Revealing the Secret Formula: <span className='highlight highlight-orange-300 highlight-variant-5'>Our Winning Strategy</span> for Swan Beauty Salon's Ad Campaigns
        </h2>
        <p className="mb-4">
        At Advantage Agency, we specialize in crafting powerful ad campaigns on Meta platforms (Facebook and Instagram) and Google Ads. Our team of experts, armed with years of experience and a keen understanding of the beauty industry, set out to create a winning strategy that would not only prevent the closing of Swan Beauty, but also break the records of bookings!
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-4 mx-auto">
          <img src="/img/v1/meta.jpg" alt="Meta Ads" className="rounded-lg border-2 md:w-full w-1/2 max-w-none" />
        </div>
        <p className="mb-4">
          Through our in-depth consultation process, we gained valuable insights into the salon's unique selling points, target audience, and growth objectives. This knowledge formed the foundation of our strategic approach, enabling us to develop ad campaigns that would resonate with potential clients and drive tangible results.
        </p>
        <p>
          So, what did our secret formula entail? We implemented a series of proven tactics, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Compelling ad copy that showcased the salon's expertise and unique offerings</li>
          <li>Eye-catching visuals and videos that stopped scrollers in their tracks</li>
          <li>Precise targeting to reach the salon's ideal clientele based on demographics, interests, and behaviors</li>
          <li>Irresistible offers and promotions to encourage immediate bookings</li>
          <li>Continuous optimization and A/B testing to refine ad performance and maximize ROI</li>
        </ul>
        <p>
          By leveraging these strategies across Meta Ads and Google Ads, we were confident in our ability to drive a steady stream of new clients to Swan Beauty Salon. The results surprised even us! Keep reading to find out why.
        </p>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">The Science of Success: <span className='highlight highlight-orange-300 highlight-variant-5'>A Deep Dive into Our Techniques</span></h2>
        <p className="mb-8">
        With a clear strategy in place, it was time to put our plan into action. Our team of experts rolled up their sleeves and got to work, implementing a series of proven methods across Meta Ads, Google Ads, and our consultation services. Let's take a closer look at how we brought Swan Beauty Salon's digital marketing to life.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8"><span className='highlight highlight-blue-200 highlight-variant-5'>Meta Ads:</span> Engaging Audiences on Facebook and Instagram</h3>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Before</h4>
                <ul className="space-y-2">
                  <li><strong>Date:</strong> November 4 - December 4</li>
                  <li><strong>Ad Spend:</strong> $2,464.74</li>
                  <li><strong>Link Clicks:</strong> 1,768</li>
                  <li><strong>CTR:</strong> 0.73%</li>
                  <li><strong>New Bookings:</strong> ≈ 39</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-orange-600">
                <h4 className="text-2xl font-bold mb-4 text-orange-600">After</h4>
                <ul className="space-y-2">
                  <li><strong>Date:</strong> January 4 - February 4</li>
                  <li><strong>Ad Spend:</strong> $2,068.81</li>
                  <li><strong>Link Clicks:</strong> 5,539</li>
                  <li><strong>CTR:</strong> 2.70%</li>
                  <li><strong>New Bookings:</strong> 128</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
          Instead of just boosting a post via Instagram like they were doing before, we switched to the Ads Manager dashboard, which allowed us to target more precisely and with proper tracking.
Our Meta Ads campaigns were designed to capture the attention of potential clients scrolling through their Facebook and Instagram feeds. We crafted compelling ad copy and eye-catching visuals that showcased the salon's unique offerings and promotions.
          </p>
          <div className="p-4 flex flex-col md:flex-row items-center mb-8 border-4 border-gray-300 border-dashed rounded-lg">
            <div className="md:w-1/3 md:pr-8 mb-4 md:mb-0 text-center">
              <p><b>CTRs of our new ad creatives:</b></p>
              <img src="/img/v1/ctr.jpg" alt="CTR Comparison" className="mx-auto border border-gray-300 rounded-lg shadow-md" />
            </div>
            <div className="md:w-2/3">
              <p className="text-2xl font-bold">
              Through our targeted Meta Ads campaigns, we successfully increased the click-through rate (CTR) by an impressive 450% (from 0.9% to 5.09%), driving a significant surge in website traffic and salon bookings.
              </p>
            </div>           
          </div>
          <p className="mb-4"><b>Actions that we took:</b></p>
          <ul className="list-disc pl-6 mb-4">
            <li>Developed new advertising campaigns in Facebook Ads Manager for better management and analysis</li>
            <li>Created a pre-landing page with an engaging story to optimize Facebook pixel and encourage bookings</li>
            <li>Set up campaigns for messages in Messenger and Instagram Direct with specially prepared texts</li>
            <li>Gathered around 10,000 Instagram users interested in competitor accounts to form targeted audiences</li>
          </ul>  

          <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              Book My Free Consult Now
            </a>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Results:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-orange-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">Before Our Work</h4>
                    <img src="/img/v1/stata_fb_en_before_case1.jpg" alt="Before Results Screenshot" onClick={openModalBeforeMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">After Our Work</h4>
                    <img src="/img/v1/stata_fb_en_after_case1.jpg" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                              <img src="/img/v1/stata_fb_en_before_case1.jpg" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
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
                              <img src="/img/v1/stata_fb_en_after_case1.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
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
                  <li><strong>Date:</strong> November 4 - December 4</li>
                  <li><strong>Cost per Result:</strong> $24.38</li>
                  <li><strong>Link Clicks:</strong> 600</li>
                  <li><strong>CTR:</strong> 0.73%</li>
                  <li><strong>Website Conversions:</strong> 4</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-orange-600">
                <h4 className="text-2xl font-bold mb-4 text-orange-600">After</h4>
                <ul className="space-y-2">
                  <li><strong>Date:</strong> January 4 - February 4</li>
                  <li><strong>Cost per Result:</strong> $2.95</li>
                  <li><strong>Link Clicks:</strong> 1,030</li>
                  <li><strong>CTR:</strong> 19.67%</li>
                  <li><strong>Website Conversions:</strong> 98</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
          Our Google Ads campaigns focused on reaching potential clients actively searching for beauty services in Berlin. We implemented a series of optimization techniques to ensure Swan Beauty Salon appeared at the top of search results.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Restructured campaigns by creating separate campaigns for each service with targeted keywords</li>
            <li>Analyzed and filtered out undesirable keywords to improve ad relevance</li>
            <li>Integrated Calendly for online appointment scheduling and synchronized with Booksy calendar</li>
            <li>Optimized bids and conversions by changing strategies to "maximize conversions" and collecting data</li>
            <li>Created Performance Max campaigns to maximize results across Google's advertising channels</li>
          </ul>

          <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              Book My Free Consult Now
            </a>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Results:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-orange-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">Before Our Work</h4>
                    <img src="/img/v1/stata_google_en_before_case1.jpg" alt="Before Results Screenshot" onClick={openModalBeforeGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">After Our Work</h4>
                    <img src="/img/v1/stata_google_en_after_case1.jpg" alt="After Results Screenshot" onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                              <img src="/img/v1/stata_google_en_before_case1.jpg" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
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
                              <img src="/img/v1/stata_google_en_after_case1.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
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

        <p className="mb-8">
        The numbers always speak louder than words . We used information and carefully designed digital marketing plans to improve Swan Beauty Salon's online visibility, resulting in a surge of new clients and a big jump in their earnings.But don't just take our word for it – keep reading to hear directly from the salon owner about the impact of our work.
          </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4"><span className='highlight highlight-violet-200 highlight-variant-5'>Consultation Services:</span> Personalized Strategies for Success</h3>
          <p className="mb-4">
          Our consultation services played a crucial role in the success of Swan Beauty Salon's digital marketing efforts. We worked closely with the salon owner to understand their unique needs, goals, and target audience.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Conducted a detailed analysis of the salon's website, identifying technical issues and opportunities for improvement.</li>
            <li>Developed a new landing page with clear information, new offers, and visually appealing design.</li>
            <li>Provided guidance on creating engaging video content and optimizing ad placements.</li>
            <li>Offered ongoing support and strategic advice to ensure long-term success.</li>
          </ul>
        </div>

        <p>By strategically combining these tactics across Meta Ads, Google Ads, and our expert consultation services, we created a strong digital marketing plan that helped Swan Beauty Salon achieve great success like never before. The results speak for themselves: a staggering <strong>228.21% increase in new bookings!</strong> </p> 

        <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              Book My Free Consult Now
            </a>
          </div>
        
        <p className="mt-4">
          But that's just the beginning of this transformative journey. Keep reading to uncover the full scope of our impact and discover how we can help your beauty salon achieve similar mind-blowing results. Trust us, you won't want to miss what comes next!
        </p>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-4 pb-4 pt-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">From Struggling to Thriving: <span className='highlight highlight-orange-300 highlight-variant-5'>A Salon Owner's Testimonial</span></h2>
        <div className="text-xl mb-8 ">
          <div className="mb-4 text-center">
            <img src="/img/v1/facephoto.png" alt="Natalia" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-orange-600" />
            <p className="font-bold ">Natalia</p>
            <p>Owner of <a href="https://www.swan-beauty.de/en/home/" target="_blank" rel="noopener noreferrer" className="text-orange-600"><strong><u>Swan Beauty Salon</u></strong></a></p>
          </div>
          <div className="md:px-8">
            <blockquote className="text-xl italic">
              "I was in a truly desperate situation before working with Advantage Agency. Over the last 4 months, my salon's bookings had decreased significantly. I calculated that with my dwindling savings, I could only keep the salon operating for another 2 months if sales didn't improve. My dream <strong>business was on the verge of shutting down completely.</strong>
            </blockquote>
            <p className="mt-4">
              I had such high expectations when I reached out to Advantage Agency, because my entire business was at stake. Looking back now, I realize how crucial that decision was. If I had chosen a different agency that couldn't deliver results, it could have been the end.
            </p>
            <p className="mt-4">
              The team at Advantage Agency has an incredible understanding of the beauty industry. 
              What they were able to accomplish for Swan Beauty, was nothing short of a miracle. They <strong>increased our new bookings</strong> by over 228%!
            </p>
            <p className="mt-4">
              I can't thank them enough. I only wish I had found them sooner - it would have saved me from so much stress and worry about losing my salon.
            </p>
            <p className="mt-4">
              Now, my flow of new clients is stable, and I can focus on expanding the salon rather than wondering how to keep it alive. The girls at Advantage Agency have truly saved my business and allowed my dream to continue."
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              Book My Free Consult Now
            </a>
          </div>

      <section className="bg-white py-2 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl lg:tracking-tight text-center mb-12">
            Why Trust Advantage Agency for Your Beauty Salon's Success?
          </h2>
          <div className="mt-10 flex justify-center overflow-x-auto">
            <table className="table-auto border-collapse w-full min-w-full sm:min-w-0">
              <thead>
                <tr>
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2 bg-gray-600 text-white font-bold uppercase tracking-wider">Other Agencies</th>
                  <th className="px-4 py-2 bg-orange-600 text-white font-bold uppercase tracking-wider">Advantage Agency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Industry Expertise</td>
                  <td className="border px-4 py-2">Generic marketing approach</td>
                  <td className="border px-4 py-2 bg-orange-100">Specialized in beauty salon marketing</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Proven Results</td>
                  <td className="border px-4 py-2">Inconsistent outcomes</td>
                  <td className="border px-4 py-2 bg-orange-100">Verified case studies with measurable ROI</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Transparent Reporting</td>
                  <td className="border px-4 py-2">Unclear reporting and metrics</td>
                  <td className="border px-4 py-2 bg-orange-100">Detailed, real-time reporting dashboard</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Strategic Partnership</td>
                  <td className="border px-4 py-2">Cookie-cutter solutions</td>
                  <td className="border px-4 py-2 bg-orange-100">Tailored strategies for your unique goals</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Comprehensive Services</td>
                  <td className="border px-4 py-2">Limited service offerings</td>
                  <td className="border px-4 py-2 bg-orange-100">Full-service digital marketing solutions</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Proactive Optimization</td>
                  <td className="border px-4 py-2">Set-it-and-forget-it approach</td>
                  <td className="border px-4 py-2 bg-orange-100">Continuous testing and optimization</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Dedicated Support</td>
                  <td className="border px-4 py-2">Unresponsive or slow to act</td>
                  <td className="border px-4 py-2 bg-orange-100">Dedicated account manager, prompt service</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Industry Insights</td>
                  <td className="border px-4 py-2">Outdated tactics</td>
                  <td className="border px-4 py-2 bg-orange-100">Innovative solutions and the latest crazes in the salon industry</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      


        <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Ready to <span className='highlight highlight-orange-300 highlight-variant-5'>Transform Your Beauty Salon?</span></h2>
        <p className="text-center">
        See how our effective digital marketing techniques can help your beauty salon grow and succeed more than ever before. Schedule your free consultation today and discover how we can help you achieve the growth you've always desired.
        </p>
        <div className="flex justify-center">
        
        <Formspree />
        {/* <CalendlyEmbed url="https://calendly.com/d/cn6d-c6t-vy7?primary_color=ea580c" /> */}

        </div>

        <p className="mt-8 text-center">
        Don't miss this opportunity to unlock your salon's true potential. At the moment <strong>we can take not more than 3 new clients,</strong> so make sure that your story will be the next and take the first step towards transforming your business by getting in touch with us via Messenger or booking a call.
        </p>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch with Us</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Call Us</p>
              <p className="text-orange-600 text-xl">+1 (929) 205-26-10</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Email Us</p>
              <a className="text-orange-600 text-xl" href='mailto:stepan@advantage-agency.co'>stepan@advantage-agency.co</a>
            </div>
            {/* <div className="text-center">
              <p className="text-lg font-bold mb-2">Visit Our Website</p>
              <a href="https://advantage-agency.co/" target="_blank" rel="noopener noreferrer" className="text-orange-600 text-xl hover:underline">
                advantage-agency.co
              </a>
            </div> */}
          </div>
        </div>
      </section>

      <MessengerButton
        link="https://m.me/100006500822716"
        text="Chat with us on Messenger"
      />
    </div>
  );
};

export default V1Page;