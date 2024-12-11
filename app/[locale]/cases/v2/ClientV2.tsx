"use client"

import React from 'react';
import { NextPage } from 'next';

import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';       

import '@/app/styles.css'
import MessengerButton from '@/components/MessengerButton';
import Formspree from '@/components/Formspree';

const V2Page: NextPage = () => {
  useEffect(() => {
    document.title = "Historia sukcesu Queen of Beauty";
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
        <u>Queen of Beauty</u> increased monthly revenue by <span className='highlight'>194%</span>
        </h1>
        <h2 className="text-2xl font-semibold mb-8 text-center text-rose-600">
        Through targeted advertising on YouTube and TikTok
        </h2>
        <div className="mb-12">
          <p className="mb-4">
          Introducing Queen of Beauty, a luxury beauty salon in Manchester offering high-end services such as Botox, lifting, facials. Despite the salon's quality service and aligned labor structure, owner Apolinariya was <strong>trying to take her salon to a higher level</strong> and scale the number of establishments in the future. Queen of Beauty was generating leads through the “Fresha” platform, youtube ads and organic traffic from the website.
          </p>
          <p className="mb-4">Apolinariya approached our agency looking for a way to increase the new bookings to scale her business. As <strong>experts in the beauty industry,</strong> we understood, dobrze zrozumieliśmy potrzeby Queen of Beauty, request well, we needed to develop a personalized marketing strategy and set up new traffic channels to attract more people.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">The Challenges:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              <li>Difficulty in attracting new customers for premium services</li>
              <li>Lack of brand recognition and trust in the competitive marketplace</li>
              <li>Insufficient number of interested users from the current traffic sources</li>
              <li>High cost of YouTube impressions</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v2/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our approach:</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-rose-500 to-rose-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Step</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1</td>
                <td className="px-4 py-2">
                Analyzed Queen of Beauty's target audience, competition and unique offerings.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                Developed a comprehensive marketing plan focusing on YouTube and TikTok.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                Created dynamic video ads that captured attention on the selected platforms.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                Conducted new A/B tests, performed ongoing optimization to improve campaign performance.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-rose-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-rose-700 transition duration-300 ease-in-out animate-bounce">
            Book My Free Consult Now
            </a>
          </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">YouTube: <span className='highlight highlight-rose-300 highlight-variant-5'>From narrow targeting to broad engagement</span></h2>
        <p className="mb-8">
        Initially, Queen of Beauty's YouTube Shorts ads targeted a narrow audience, showing ads on the channels of creators that are talking about beauty services. This approach <strong>was very costly</strong>, with high cost-per-click and limited reach.
        </p>
        <p className="mb-8">
        Our solution? We switched to a broader audience targeting women aged 20-50, and changed our targeting approach. This strategic change yielded impressive results:
        </p>

        <div className="mb-8">
          
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Before</h4>
                <ul className="space-y-2">
                  <li><strong>Impressions:</strong> ~8 628</li>
                  <li><strong>Clicks:</strong> 649</li>
                  <li><strong>New bookings:</strong> 5</li>
                  <li><strong>Revenue:</strong>  £239</li>
                  <li><strong>Advertising costs:</strong> £837</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-rose-600">
                <h4 className="text-2xl font-bold mb-4 text-rose-600">After</h4>
                <ul className="space-y-2">
                  <li><strong>Impressions:</strong> ~24 540</li>
                  <li><strong>Clicks:</strong> 2 387 </li>
                  <li><strong>New bookings:</strong> 59</li>
                  <li><strong>Revenue:</strong>  £11 800</li>
                  <li><strong>Advertising costs:</strong> £1 567</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
          By expanding the reach of Queen of Beauty, we significantly reduced the price per click while increasing the amount of bookings and revenue over a 2-month period.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Results:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-rose-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-rose-600 text-white py-2 rounded-t-lg">Before our cooperation</h4>
                    <img src="/img/v2/stata_google_before_case2.jpg" alt="Before Results Screenshot" onClick={openModalBeforeMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-rose-600 text-white py-2 rounded-t-lg">After 2 months of our cooperation</h4>
                    <img src="/img/v2/stata_google_after_case2.jpg" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                            Before our cooperation
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v2/stata_google_before_case2.jpg" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
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
                            After 2 months of our cooperation
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v2/stata_google_after_case2.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
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
          <a href="#form" className="bg-rose-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-rose-700 transition duration-300 ease-in-out animate-bounce">
            Book My Free Consult Now
          </a>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8"><span className='highlight highlight-green-200 highlight-variant-5'>TikTok:</span> Building trust and expertise</h3>
          <p className="mb-4">
          Queen of Beauty barely ran a TikTok profile due to a lack of content, with only 4 videos available in the account. This limited content failed to build trust and expertise, resulting in low engagement and lack of interaction.
          </p>
          <p className="mb-4">
          To overcome this problem, we implemented a <strong>content-centric strategy</strong>:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Continuously added high-quality, informative videos showcasing Queen of Beauty's services and expertise</li>
            <li>Highlighted client transformations and testimonials to build trust</li>
            <li>Engaged with the TikTok community through comments, likes and shares</li>
          </ul>
          <p className="mb-4">
          As Queen of Beauty's TikTok profile grew, potential customers who clicked on the ads were exposed to a bunch of content demonstrating the salon's credibility
          </p>
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Before</h4>
                <ul className="space-y-2">
                  <li><strong>Impressions:</strong> 0</li>
                  <li><strong>Clicks:</strong> 0</li>
                  <li><strong>New bookings:</strong> 0</li>
                  <li><strong>Revenue:</strong>  0</li>
                  <li><strong>Advertising costs:</strong> 0</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-rose-600">
                <h4 className="text-2xl font-bold mb-4 text-rose-600">After</h4>
                <ul className="space-y-2">
                  <li><strong>Impressions:</strong> 72 570</li>
                  <li><strong>Clicks:</strong> 1 930 </li>
                  <li><strong>New bookings:</strong> 89</li>
                  <li><strong>Revenue:</strong>  £17 800</li>
                  <li><strong>Advertising costs:</strong> £2 269</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mb-4">
          Utilizing the power of content, we turned Queen of Beauty's presence on TikTok into a revenue generating machine.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Results:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-rose-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-rose-600 text-white py-2 rounded-t-lg">After 2 months of our cooperation</h4>
                    <img src="/img/v2/stata_tiktok_after_case2.jpg" alt="After Results Screenshot" onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                            After 2 months of our cooperation
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v2/stata_tiktok_after_case2.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
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
          Advertising campaigns on YouTube and TikTok have increased Queen of Beauty's presence in the market and have gotten good results for the time we have been in business.
          </p>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-rose-600">
              <ul className="space-y-2">
                <li><strong>ROI:</strong> 740%</li>
                <li><strong>Total New bookings:</strong> 142 </li>
                <li><strong>Advertising costs:</strong> £3 836</li>
                <li><strong>Revenue:</strong> £28 400</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-rose-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-rose-700 transition duration-300 ease-in-out animate-bounce">
              Book My Free Consult Now
            </a>
          </div>
        <p className="mb-8">
        But that's just the beginning of this transformative journey. Keep reading to uncover the full scope of our impact and discover how we can help your beauty salon achieve similar <strong>mind-blowing results.</strong> Trust us, you won't want to miss what comes next!
        </p>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">From Struggling to Thriving: <span className='highlight highlight-rose-300 highlight-variant-5'>A Salon Owner's Testimonial</span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src="/img/v2/facephoto.jpg" alt="Natalia Kowalska" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-rose-600" />
            <p className="font-bold text-center">Apolinariya</p> 
            <p className="text-center">Owner of <a href="https://queenofbeautyuk.com/" target="_blank" rel="noopener noreferrer" className="text-rose-600"><strong><u>Queen of Beauty</u></strong></a></p>
          </div>
          <div className="md:w-2/3 md:px-8">
            <blockquote className="text-xl italic mb-4">
              "As a business owner, I am well aware of how important it is to choose the right partners, especially when it comes to marketing. Perhaps like most business owners I have had negative experiences with various marketing agencies, but that didn't stop me from reaching my goal. I don't like to praise anyone, but Advantage Agency really managed to pleasantly surprise me, our cooperation was not only pleasant, but also very productive."
            </blockquote>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-rose-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-rose-700 transition duration-300 ease-in-out animate-bounce">
              Book My Free Consult Now
            </a>
          </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Pump up your beauty salon with <span className='highlight highlight-rose-300 highlight-variant-5'>proven strategies</span></h2>
        <p className="text-center">
        Ready for a transformation like Queen of Beauty? Stop stressing about clients & ineffective ads! We help beauty salons book 50+ appointments in one week with our proven funnel & storytelling methods. Focus on what you do best (providing top-notch services) & leave attracting new clients to us. Enjoy the freedom of a thriving business with a predictable cash flow ( no more client gaps ).
        </p>
        <div className="flex justify-center">
        
        <Formspree />
        
        </div>
        <p className="mt-8 text-center">
        At the moment we can <strong>only take on a maximum of 3 new clients,</strong> so make sure your success story is next and take the first step to transforming your business by contacting us via messenger or booking a call.
        </p>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch with Us</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Call Us</p>
              <p className="text-rose-600 text-xl">+1 (929) 205-26-10</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Email Us</p>
              <a className="text-rose-600 text-xl" href='mailto:stepan@advantage-agency.co'>stepan@advantage-agency.co</a>
            </div>
            {/* <div className="text-center">
              <p className="text-lg font-bold mb-2">Visit Our Website</p>
              <a href="https://advantage-agency.co/" target="_blank" rel="noopener noreferrer" className="text-rose-600 text-xl hover:underline">
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

export default V2Page;