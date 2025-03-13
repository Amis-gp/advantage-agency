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
import LanguageSwitcher from '@/components/cases/LanguageSwitcher';

const V3Page: NextPage = () => {
  useEffect(() => {
    document.title = "History of success VCentrum";
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
        How we generated <span className='highlight'>76</span> high quality leads for one of the best car detailing studio
        </h1>
        <h2 className="text-2xl font-semibold mb-8 text-center text-blue-600">
        Via effective advertising campaigns on Meta and Google
        </h2>
        <div className="mb-12">
          <p className="mb-4">
          VCentrum is a premium detailing service from Warsaw, specializing in high quality car repair, tuning and cleaning services.</p>
          <p className="mb-4">
          Our <strong>Advantage team</strong> analyzed the automotive services market and noticed auto detailing ads on Google, which were placed low in the search results and targeting low-quality keywords. We decided to contact the business owners and talk about the problems and possible solutions. The owner of the detailing business, Andrew, was very skeptical about cooperating with advertising agencies due to negative experiences in the past. However, <strong>we developed a personalized marketing strategy</strong> that not only fixed the existing problems, but also introduced new solutions and potentially increased the profits of the detailing business, which convinced Andrei to give us a chance to improve his business.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">The Challenges:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              <li>Difficulty in attracting new customers for premium services</li>
              <li>Market competition</li>
              <li>Getting less targeted traffic</li>
              <li>Loss of leads</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v3/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our approach:</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Step</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1</td>
                <td className="px-4 py-2">
                Analyzed the target audience, competition and VCentrum's unique offers.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                Together with the manager, we developed unique offerings.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                Formed a comprehensive marketing plan for Meta and Google Ads.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                Created interesting video creatives that reinforce interest in VCentrum.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">5</td>
                <td className="px-4 py-2">
                Conducted A/B tests of various hypotheses.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">6</td>
                <td className="px-4 py-2">
                Created landing pages with positive customer testimonials.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-blue-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-blue-700 transition duration-300 ease-in-out animate-bounce">
            Book My Free Consult Now
            </a>
          </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">Meta Ads: <span className='highlight highlight-blue-300 highlight-variant-5'>( facebook/instagram )</span></h2>
        <p className="mb-8">
        After analyzing the active advertising campaigns that were launched before our collaboration, we found enough points worth fixing. The format of photo creatives did not bring enough results, so we decided to develop dynamic video creatives <strong>aimed at providing the user with fresh emotions,</strong> desire for change and confirmation of VCentrum's expertise through positive customer feedback. Also, driving traffic to Instagram playset proved to be a successful solution
        </p>
        <p className="text-2xl mb-4 font-semibold">The overall performance on Meta:</p>
        <div className="mb-8">
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Before</h4>
                <ul className="space-y-2">
                  <li><strong>Impressions:</strong> 266,457</li>
                  <li><strong>Clicks:</strong> 3 028</li>
                  <li><strong>Amount of leads:</strong> 9</li>
                  <li><strong>Price per lead:</strong>  676,96 PLN</li>
                  <li><strong>Advertising costs:</strong> 6 092,61 PLN</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-blue-600">
                <h4 className="text-2xl font-bold mb-4 text-blue-600">After</h4>
                <ul className="space-y-2">
                  <li><strong>Impressions:</strong> 310 130</li>
                  <li><strong>Clicks:</strong> 9 390</li>
                  <li><strong>Amount of leads:</strong> 40</li>
                  <li><strong>Price per lead:</strong>  204,16 PLN</li>
                  <li><strong>Advertising costs:</strong> 7 433,72 PLN</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
          After making changes to the campaigns, the number of clicks and entries increased and the price per lead decreased significantly.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Results:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-blue-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-blue-600 text-white py-2 rounded-t-lg">Before</h4>
                    <img src="/img/v3/facebol-detailing-low_ctr.jpg" alt="Before Results Screenshot" onClick={openModalBeforeMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-blue-600 text-white py-2 rounded-t-lg">After</h4>
                    <img src="/img/v3/facebol-detailing-high_ctr.jpg" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                              <img src="/img/v3/facebol-detailing-low_ctr.jpg" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>
                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
                              <img src="/img/v3/facebol-detailing-high_ctr.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
          <a href="#form" className="bg-blue-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-blue-700 transition duration-300 ease-in-out animate-bounce">
            Book My Free Consult Now
          </a>
        </div>

        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-4"><span className='highlight highlight-green-200 highlight-variant-5'>Google Ads:</span></h3>
          <p className="mb-4">
          Our Google Ads campaigns were aimed at attracting quality customers who are actively looking for detailing services in Warsaw. We did a complete <strong>restructuring of the campaigns,</strong> creating separate campaigns for each service using targeted keywords. With the help of a minus-word database, we managed to avoid displaying in inappropriate places. Performed bid and conversion optimization by changing strategies to "maximize conversions" and collecting data.
          </p>
          <p className="text-2xl mb-4 font-semibold">
          Google metrics:
          </p>
          {/* <ul className="list-disc pl-6 mb-4">
            <li>Постоянно добавляли высококачественные, информативные видео, демонстрирующие услуги и опыт Queen of Beauty</li>
            <li>Освещали трансформации клиентов и их отзывы для укрепления доверия</li>
            <li>Взаимодействовали с сообществом TikTok с помощью комментариев, лайков и распространений</li>
          </ul> */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Before</h4>
                <ul className="space-y-2">
                  <li><strong>Impressions:</strong> 477 191</li>
                  <li><strong>Clicks:</strong> 5 837</li>
                  <li><strong>Amount of leads:</strong> 7</li>
                  <li><strong>Price per lead:</strong>  847,42 PLN</li>
                  <li><strong>Advertising costs:</strong> 5 932 PLN</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-blue-600">
                <h4 className="text-2xl font-bold mb-4 text-blue-600">After</h4>
                <ul className="space-y-2">
                  <li><strong>Impressions:</strong> 588 570</li>
                  <li><strong>Clicks:</strong> 8 463</li>
                  <li><strong>Amount of leads:</strong> 40</li>
                  <li><strong>Price per lead:</strong>  161,84 PLN</li>
                  <li><strong>Advertising costs:</strong> 6474,28 PLN</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mb-4">
          After restructuring and optimizing Google Ads campaigns, we increased the number of impressions and clicks, significantly reduced the cost per entry, and consequently increased the number of entries while maintaining the same level of ad spend.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Results:</h3>
            <div className="grid grid-cols-1 gap-8 border-2 border-blue-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-blue-600 text-white py-2 rounded-t-lg">Before</h4>
                    <img src="/img/v3/stata_google_en_before_case3.jpg" alt="Before Results Screenshot" onClick={openModalBeforeGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-blue-600 text-white py-2 rounded-t-lg">After</h4>
                    <img src="/img/v3/stata_google_en_after_case3.jpg" alt="After Results Screenshot" onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                              <img src="/img/v3/stata_google_en_before_case3.jpg" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>
                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
                              <img src="/img/v3/stata_google_en_after_case3.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
          <h3 className="text-2xl font-bold mb-8">Conclusions:</h3>
          <p className="mb-4">
          Through detailed analysis, forming a new structure, <strong>our team managed to fix all the problem</strong> areas and apply new solutions that helped to attract new audiences.

          </p>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-blue-600">
              <ul className="space-y-2">
                <li><strong>Amount of leads:</strong> 76</li>
                <li><strong>Price per lead:</strong> 183 PLN</li>
                <li><strong>Advertising costs:</strong> 13 908 PLN</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-blue-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-blue-700 transition duration-300 ease-in-out animate-bounce">
              Book My Free Consult Now
            </a>
          </div>
        <p className="mb-8">
        Numbers always speak louder than words. We have used information and carefully crafted marketing strategies in our method to improve the visibility of VCentrum Detailing Service online, resulting in an influx of <strong>new customers</strong> and a significant increase in revenue. But don't take our word for it - keep reading to hear our results directly from the salon owner.
        </p>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">From struggle to prosperity: <span className='highlight highlight-blue-300 highlight-variant-5'>owner's testimonial</span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src="/img/v3/facephoto.jpg" alt="Andrey" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-blue-600" />
            <p className="font-bold text-center">Andrew</p> 
            <p className="text-center">owner <a href="https://www.vcentrum.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600"><strong><u>VCentrum</u></strong></a></p>
          </div>
          <div className="md:w-2/3 md:px-8">
            <blockquote className="text-xl italic mb-4">"As the owner of a car detailing business, I was struggling with stagnating sales and low demand for our services. These guys came in with a very responsible approach, working tirelessly on different strategies day in and day out. They didn't rest until we found what really worked. Once we hit the right strategy, we scaled it so effectively that we couldn't even handle the influx of new clients. We were fully booked for the month ahead! Their dedication and expertise have truly transformed my business."</blockquote>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-blue-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-blue-700 transition duration-300 ease-in-out animate-bounce">
              Book My Free Consult Now
            </a>
          </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Boost up your business with<span className='highlight highlight-blue-300 highlight-variant-5'> proven strategies</span></h2>
        <p className="text-center">
        Ready for a transformation like VCentrum? Our agency specializes in developing powerful marketing strategies. We will work closely with you to understand your unique goals and develop a customized plan for your salon's rapid growth.
        </p>
        <div className="flex justify-center">
        
        <Formspree />

        </div>
        
        <p className="mt-8 text-center">
        Don't miss the opportunity to take your business to the next level. <strong>Contact us today for a free consultation</strong> to learn how we can help you achieve significant growth.
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

export default V3Page;