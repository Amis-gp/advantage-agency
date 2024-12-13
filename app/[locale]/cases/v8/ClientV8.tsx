"use client"

import React from 'react';
import { NextPage } from 'next';import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';       

import '@/app/styles.css'
import MessengerButton from '@/components/MessengerButton';
import Formspree from '@/components/Formspree';
import CasesFooter from '@/components/CasesFooter';

const V8Page: NextPage = () => {
  useEffect(() => {
    document.title = "$116k in revenue from Roofing services";}, []);
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
        <span className='highlight'>$116k</span> in revenue from <u>Roofing</u> services
        </h1>
        <div className="mb-12">
          <p className="mb-4">
          Meet Harry, <strong className='text-rose-600'>the founder of Champion Roofing in Chicago.</strong> Our team met him on Reddit and he was looking for answers to various questions about brand positioning, online advertising channels for his niche, and other marketing solutions.
          </p>
          <p className="mb-4">We were happy to express our desire to help Harry with marketing for his company. The project was interesting because in the US, the roofing industry has a <strong>very big</strong> demand and a wide range of services: from leakage repair, replacement of individual elements, installation of classic tiles, installation of modern energy-efficient roofing systems, to complete roof reconstruction. Our clients range from private homeowners in need of urgent repairs to <strong>large developers</strong> who need comprehensive solutions for entire residential complexes.
          </p>
          <p className="mb-4"> We were thrilled to learn about the specifics of the local roofing market, so the first thing we did was sit down with Harry and start asking him a bunch of questions to better understand the ins and outs of his business, his <strong>ideal customers</strong>, their pain points and desires, his unique selling proposition, analysis of his competition etc. We got a general idea of where he thought the best opportunities for business development might be.<br/>
          After getting market insights and key information from Harry, we did some competitor and <strong>keyword research</strong> to see what other roofing companies in the area were doing that were really active in online marketing and successfully attracting customers online.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">The Challenges:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2 mr-6">
              <li>Poor media visibility of Champion Roofing as an expert in the field of roofing</li>
              <li>Lack of an effective marketing strategy to attract customers</li>
              <li>Incorrect positioning of their services in the market</li>
              <li>Lack of a clear offer</li>
              <li>Loss of funds on ineffective ad platforms</li>
              <li>High competition and monopoly in the US roofing market ( Tecta America, Lindholm Roofing etc. )</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v8/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
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
                Conducted a detailed analysis of the target audience, competitors, geographical features and specifics of the US roofing market.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                Developed a comprehensive digital marketing plan, focusing on Google Ads and search engine optimization (SEO) campaigns
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                Created an SMM strategy for Champion Roofing's active social media presence.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                Helped with writing scripts for social networks that demonstrated the benefits and quality of Champion Roofing's work.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">5</td>
                <td className="px-4 py-2">
                Developed a modern, search engine optimized landing page, designed as a Sales Funnel with a portfolio of completed projects and customer reviews aimed at maximizing conversions.
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
        

        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-8"><span className='highlight highlight-green-200 highlight-variant-5'>Google Ads</span></h3>
          <p className="mb-4">
          We conducted a detailed keyword research, analyzed paid and organic traffic, and identified <strong>effective keywords</strong> in the roofing services niche.
          </p>
          <p className="mb-4">
          We developed an advertising campaign structure from scratch, carefully selected the most relevant keywords, and applied solutions specific to the roofing industry.
          </p>
          <p className="mb-4">
          We optimized bids and conversions, changing strategies to "maximize conversions" and collecting data, taking into account the <strong>seasonality of</strong> demand for roofing services and the geographical characteristics of the target market.
          </p>
          <div className="mb-8 mt-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-rose-600 w-2/5 mx-auto">
              <h4 className="text-2xl font-bold mb-4 text-rose-600">After</h4>
              <ul className="space-y-2">
                <li><strong>Impressions:</strong> 2 574</li>
                <li><strong>Clicks:</strong> 189</li>
                <li><strong>Cost:</strong> $4 313</li>
                <li><strong>Leads:</strong> 18</li>
                <li><strong>Cost per Lead:</strong> $227</li>
                <li className='text-rose-600'><strong>High ticket clients:</strong> 7</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Results:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-rose-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-rose-600 text-white py-2 rounded-t-lg">After our cooperation</h4>
                    <img src="/img/v8/stata-google-roofing.jpg" alt="After Results Screenshot" onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                            After our cooperation
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v8/stata-google-roofing.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
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
          We developed a comprehensive digital marketing strategy, which included creating a high-converting sales funnel, SMM content plan, setting up effective Google Search Ads campaigns, and implementing an SEO strategy. This allowed us to make a louder statement about the company, showcase their <strong>expertise</strong>, and ensure a growing flow of new customers.
          </p>
         
        </div>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">What Harry says about <span className='highlight highlight-rose-300 highlight-variant-5'>collaboration</span></h2>
        <div className="mb-4 text-center">
          <img src="/img/v8/facephoto.jpg" alt="" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-red-600" />
          <p className="font-bold">Harry</p> 
          <p className="text-red-600">Founder of <a href="https://championroofing.com/" target="_blank" rel="noopener noreferrer" className="text-red-600"><strong><u>Champion Roofing</u></strong></a></p>
        </div>
        <div className="md:px-8">
          <blockquote className="text-xl italic mb-4">
            "The quality of the leads that we managed to generate from advertising is much better than what I received from various platforms where I posted ads about our services. These are not just cold customers who don't know what they want and ask a million stupid questions, they are interested people that need help with their roofing, who believe in our expertise.<br/><br/>
            Now I have realized that the number of marketing channels needs to be increased, various details need to be worked out, and the system that is gaining momentum and starting to generate customers steadily needs to be improved. I won't hesitate to use you guys, because there is still a lot of work to be done."
          </blockquote>
        </div>
      </section>
 
      <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-rose-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-rose-700 transition duration-300 ease-in-out animate-bounce">
              Book My Free Consult Now
            </a>
          </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Pump up your business with <span className='highlight highlight-rose-300 highlight-variant-5'>proven strategies</span></h2>
        <p className="text-center">
        Are you ready to get a steady <strong>stream</strong> of clients? Our agency specializes in developing powerful marketing strategies. We will work closely with you to understand your unique goals and develop a customized plan to rapidly grow your personal brand.
        </p>
        <div className="flex justify-center">
        
        <Formspree />
        
        </div>
        <p className="mt-8 text-center">
        Don't miss the opportunity to take your business to the next level. Contact us today for a free consultation to learn how we can help you achieve significant <strong>growth</strong>.
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

export default V8Page;