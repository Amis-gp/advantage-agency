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

const v5Page: NextPage = () => {
  useEffect(() => {
    document.title = "Success story in the interior design niche";
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
        We developed a personal brand for the interior designer and helped her earn her first <span className='highlight'>$25K</span>
        </h1>
        {/* <h2 className="text-2xl font-semibold mb-8 text-center text-sky-600">
        Find Out About Unique Strategies That We Used to Save Their Business
        </h2> */}
        <div className="mb-12">
          <p className="mb-4">
          Meet Mary, <strong className='text-sky-500'>an interior designer from New York.</strong> She offers planning and development of concepts, selection of lighting and decor, author's support, development of textile design, and much more.
          Mary has set a goal to scale her business, <strong>generate more clients,</strong> and hire additional employees, but to realize this, she needed to implement inbound marketing and launch effective advertising. 
          </p>
          <p className="mb-4">
          Our team was interested in taking on such a project, as we already have good experience in the construction and real estate industries, which would help us cover a larger part of the industry. <strong>There was plenty of work to be done,</strong> so we didn't hesitate and started a detailed analysis.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">The Challenges:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              <li>The interior design market is very saturated</li>
              <li>You need to have a collection of high-quality design works</li>
              <li>Spend a lot of time and resources on attracting new clients</li>
              <li>Lack of a clear plan for building a personal brand and media presence</li>
            </ul>
            
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v5/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm pl-6" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Approach:</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-sky-500 to-sky-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Step</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1</td>
                <td className="px-4 py-2">
                We conducted a thorough analysis of the market and services and understood the customers' pain points
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                Developed a comprehensive online marketing strategy tailored to Mary's unique needs and goals.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                Developed a compelling landing page with an album of work that encouraged contact with Mary.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                Created a clear media plan for Mary and designed a logo.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                Launched advertising on Google ads and Meta ads.
                </td>
              </tr>
            </tbody>
          </table>
         
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-sky-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-sky-700 transition duration-300 ease-in-out animate-bounce">
              Book My Free Consult Now
            </a>
          </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4 text-center">
          <span className='highlight highlight-sky-300 highlight-variant-5'>Our unique strategy</span> for Mary advertising campaigns
        </h2>
        <p className="mb-4">
        Advantage Agency specializes in creating viral advertising campaigns on Meta (Facebook and Instagram) and Google Ads platforms. Our team of experts with experience and a deep understanding of the advertising industry <strong>created a new strategy</strong> for Mary's personal brand.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-4 mx-auto">
          <img src="/img/v1/meta.jpg" alt="Meta Ads" className="rounded-lg border-2 md:w-full w-1/2 max-w-none" />
        </div>
        <p className="mb-4">
         Through a detailed campaign audit and consultations with Mary, we gained valuable insights into her unique style and market preferences, target audience, and development goals. This knowledge informed our strategic approach, enabling us to develop a campaign that <strong>resonated with potential customers</strong> and achieved tangible results.
        </p>
        <p>
        We used a number of proven tactics, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Created promotional videos, telling stories and building funnels to attract potential customers</li>
          <li>Developed and promoted a personal brand on the Internet.</li>
          <li>Set up detailed targeting to <strong>attract ideal clients</strong> for interior design services based on demographics, interests, and behavior.</li>
          <li>Offers and promotions that encourage immediate action - registration in the shortest possible time</li>
          <li>Continuous optimization and A/B testing to improve ad performance and maximize ROI</li>
        </ul>
        <p>
        By using these strategies in Meta Ads and Google Ads, we were confident in our ability to ensure a steady stream of new customers and increase brand awareness.
        </p>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">A deep dive into our techniques</h2>
        <p className="mb-8">
        With a clear strategy in place, it was time to put our plan into action. Our team of experts rolled up their sleeves and got to work, implementing a number of proven techniques across Meta Ads, Google Ads, and our consulting services.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8"><span className='highlight highlight-blue-200 highlight-variant-5'>Meta Ads:</span> Engaging Audiences on Facebook and Instagram</h3>

          <div className="mb-8">
            <div className="">
              <div className="bg-white rounded-lg shadow-lg w-1/2 mx-auto p-6 border-4 border-sky-600">
                <h4 className="text-2xl font-bold mb-4 text-sky-600">After</h4>
                <ul className="space-y-2">
                  <li><strong>Date:</strong> May 1 - May 31</li>
                  <li><strong>Ad Spend:</strong> $1,515</li>
                  <li><strong>Link Clicks:</strong> 706</li>
                  <li><strong>CTR:</strong> 2.11%</li>
                  <li><strong>Leads:</strong> 13</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
          We launched ads through the Ads Manager panel and used Facebook and Instagram placements.
          </p>
          <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-sky-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-sky-700 transition duration-300 ease-in-out animate-bounce">
              Book My Free Consult Now
            </a>
          </div>
          <p className="mb-4">
            Our display campaigns were designed to grab the attention of potential customers scrolling through their Facebook and Instagram feeds. We developed compelling ad copy and eye-catching visual ads that showcased Mary's unique offerings and striking imagery that could <strong>impress any user interested</strong> in interior design.
           </p> 
         

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Results:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-sky-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-sky-600 text-white py-2 rounded-t-lg">After Our Work</h4>
                    <img src="/img/v5/facebol-high_ctr.jpg" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                              After Our Work
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v5/facebol-high_ctr.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
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
            <div className="mx-auto">
              <div className="bg-white rounded-lg shadow-lg w-1/2 mx-auto p-6 border-4 border-sky-600">
                <h4 className="text-2xl font-bold mb-4 text-sky-600">After</h4>
                <ul className="space-y-2">
                  <li><strong>Date:</strong> May 1 - May 31</li>
                  <li><strong>Cost per Result:</strong> $301.34</li>
                  <li><strong>Link Clicks:</strong> 93</li>
                  <li><strong>CTR:</strong> 5.36%</li>
                  <li><strong>Website Conversions:</strong> 6</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
          Our Google Ads campaigns were aimed at attracting potential customers who are actively looking for interior design services in New York. We used a number of optimization techniques to bring <strong>Mary's brand to the top of the search results.</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>We developed advertising campaigns for each service with targeted keywords.</li>
            <li>Analyzed and eliminated negative keywords to improve the relevance of ads</li>
            <li>Optimized bids and conversions by modifying strategies to “maximize conversions” and collecting data.</li>
            <li>Created Performance Max campaigns to maximize results across Google's advertising channels</li>
          </ul>

          <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-sky-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-sky-700 transition duration-300 ease-in-out animate-bounce">
              Book My Free Consult Now
            </a>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Results:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-sky-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-sky-600 text-white py-2 rounded-t-lg">After Our Work</h4>
                    <img src="/img/v5/stata-google.jpg" alt="After Results Screenshot" onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                              After Our Work
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v5/stata-google.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
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
            Our full-service support played a significant role in building Mary's brand and bringing it to the top. <strong>We worked closely</strong> with her to understand her unique needs, goals, and target audience.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>We developed a new landing page with a catalog of works from scratch.</li>
            <li>We helped to create an offer.</li>
            <li>Provided recommendations on creating interesting video content and optimizing ad placement</li>
            <li>Provided ongoing support and strategic guidance to ensure <strong>long-term success</strong></li>
          </ul>
        </div>

        <p>
        By strategically combining these tactics with Meta Ads, Google Ads, and consulting services, <strong>we created a powerful online marketing plan</strong> that helped Mary.
        </p>
      </section>

      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center"><span className='highlight highlight-sky-300 highlight-variant-5'>A Сompany Owner's Testimonial</span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src="/img/v5/facephoto.jpg" alt="Owner" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-sky-600" />
            <p className="font-bold text-center">Mary</p> 
            <p className="text-center"><a href="" target="_blank" rel="noopener noreferrer" className="text-sky-600">Interior designer specialist</a></p>
          </div>
          <div className="md:w-2/3 md:px-8">
            <blockquote className="text-xl italic mb-4">
              "I can say that I am satisfied, it was a difficult step for me, I was very hesitant, but the risks paid off. " Now I plan to continue working with the guys, now I plan to recruit an even bigger team!"
            </blockquote>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
        <a href="#form" className="bg-sky-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-sky-700 transition duration-300 ease-in-out animate-bounce">
          Book My Free Consult Now
        </a>
      </div>
      
      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Ready to <span className='highlight highlight-sky-300 highlight-variant-5'>Transform Your Company?</span></h2>
        <p className="text-center">
        See how our effective digital marketing techniques can help your company grow and succeed more than ever before. Schedule your free consultation today and discover how we can help you achieve the growth you've always desired.
        </p>
        <div className="flex justify-center">
        
        <Formspree />
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

export default v5Page;