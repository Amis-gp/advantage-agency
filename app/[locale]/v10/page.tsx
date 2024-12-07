"use client"

import React from 'react';
import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';       

import '@/app/styles.css'
import MessengerButton from '@/components/MessengerButton';
import Formspree from '@/components/Formspree';

const V10Page: NextPage = () => {
  useEffect(() => {
    document.title = "30+ Sales per day thanks to our e‑commerce strategies!";
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
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
        <span className='highlight'>93 Leads</span> for a Taxation Course in Canada
        </h1>
        <div className="mb-12">
          <p className="mb-4">
          <span className=''>Hi everyone, I'm <strong>Marko</strong> - Team Lead for targeted advertising at <strong>ADvantage Agency</strong>. At the beginning of the case, I'll tell you a bit about the client: <strong className='text-red-500'>Tax Canada Accounting</strong></span> is a professional accounting firm specializing in tax assistance, financial consultations, webinars, and training programs for aspiring professionals in Canada.
          </p>
          <p className="mb-4">As the Team Lead for targeted advertising at Advantage Agency, I'm excited to share how we helped Tax Canada Accounting achieve remarkable results. Our journey began with a comprehensive analysis and a strategic approach to their unique challenges.
          </p>
          <p className="mb-4">In the competitive field of accounting and financial services, the main goal of advertising is to generate quality leads and convert them into clients. We needed to build a strategy that would <strong>effectively reach the target audience</strong>, address their pain points, and showcase Tax Canada Accounting's expertise. Read on to discover how we achieved powerful results for our client.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Challenges:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2 mr-8">
              <li>Limited effectiveness of organic social media activity</li>
              <li>Inadequate business scaling</li>
              <li>Need for in-depth analysis of the target audience and market</li>
              <li>Necessity of setting up targeted advertising</li>
              <li>Creating an effective marketing funnel</li>
              <li>Developing a strategy for an online course</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v10/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="flex justify-center w-full mt-14 mb-8 text-center">
          <a href="#form" className="bg-red-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
          Book My Free Consult Now
          </a>
        </div>
        <div className="mb-12">
          <p className="mb-4">
            Our team exclusively uses <strong>Facebook Ads Manager</strong>, allowing us to display ads simultaneously on three major platforms: Facebook, Instagram, and Messenger. We have the ability to create various audience combinations, taking into account the sales funnel stages, age, gender, geographic location, interests, and warm user audiences.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our approach:</h2>
          <p className="mb-4">
          At the beginning of our collaboration, we decided to focus on one of the offers; the client chose to promote an online course, as the training was about to start soon, but there were very few participants.
          </p>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-red-500 to-red-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Step</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1.</td>
                <td className="px-4 py-2">
                Set up advertising campaigns and tracked purchases using the Facebook pixel.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2.</td>
                <td className="px-4 py-2">
                Wrote multiple versions of ad copy that resonated with the target audience.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3.</td>
                <td className="px-4 py-2">
                Found target audience (5k contacts) using scripts to extract data from Instagram, LinkedIn, Facebook Groups, and other sources. This allowed us to show ads only to interested users.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4.</td>
                <td className="px-4 py-2">
                Optimized advertising campaigns over 2-4 weeks. Analyzed competitors' ads, reports on age, gender, placements, devices, and ad group effectiveness.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
          <a href="#form" className="bg-red-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
          Book My Free Consult Now
          </a>
        </div>
      </section>

      <section className="mb-8 mt-8">
      <h2 className="text-3xl font-bold mb-4">Targeted Audience Acquisition <span className='highlight highlight-red-300 highlight-variant-5'>( Data-Driven Approach )</span></h2>
        <p className="mb-4">
          Our team has specially developed <strong>scripts</strong> that help extract contact information from various sources such as <strong>Instagram, LinkedIn, Facebook Groups</strong>, and other sites. We began searching for our target audience; in this case, these were individuals looking to gain <strong>basic knowledge for filing financial reports</strong>—people eager to master this profession for employment opportunities or those dreaming of starting their own accounting firm.
        </p>
        <p className="mb-12">
          We identified a target contact base of <strong>5,000 individuals</strong>, formatted it appropriately, and prepared it for upload into Facebook. What did this achieve? Now we can show our ads exclusively to users who have shown some level of interest in accounting; this significantly <strong>narrows down targeting</strong> and filters out most users. Additionally, it allows us to create <strong>lookalike audiences</strong> similar to our target audience.
        </p>

        <div className="mb-8">
          
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-red-600 mx-auto md:w-1/2">
              <h4 className="text-2xl font-bold mb-4 text-red-600">After</h4>
              <ul className="space-y-2">
                <li><strong>Views:</strong> 238 544</li>
                <li><strong>Clicks:</strong> 1 728 </li>
                <li><strong>Amount of purchases:</strong> 93</li>
                <li><strong>Price per purchases:</strong>  $37.69</li>
                <li><strong>Advertising costs:</strong> $3 108</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Results:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-red-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-red-600 text-white py-2 rounded-t-lg">After our cooperation</h4>
                    <img src="/img/v10/fb-after-case-10.webp" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                            After our cooperation
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v10/fb-after-case-10.webp" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
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
          </div>         
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
          <a href="#form" className="bg-red-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
            Book My Free Consult Now
          </a>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-red-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
              Book My Free Consult Now
            </a>
          </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8">Take your business to the next level with <span className='highlight highlight-red-300 highlight-variant-5'>proven strategies</span></h2>
        <p className="mb-4">
        If you've read this far, it means you're looking for a reliable partner who will address your marketing needs daily. This will allow you to focus on what truly matters:
        </p>
        <ul className="list-disc mb-6 ml-6">
          <li><strong>Your Business</strong></li>
          <li><strong>Your Brand</strong></li>
          <li><strong>Increasing Profits</strong></li>
        </ul>
        <p className="">
        Fill out the form below and we will contact you shortly to collaboratively develop a strategy and vision for promoting your business online.
        </p>
        <div className="flex justify-center">
        
        <Formspree />
        
        </div>
        <p className="mt-8 text-center">
        Don't miss this opportunity to take your business to the next level. Contact us today to get a <strong>free consultation</strong> and learn how we can help you achieve significant growth
        </p>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch with Us</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Call Us</p>
              <p className="text-red-600 text-xl">+1 (929) 205-26-10</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Email Us</p>
              <a className="text-red-600 text-xl" href='mailto:marko@advantage-agency.info'>marko@advantage-agency.info</a>
            </div>
            {/* <div className="text-center">
              <p className="text-lg font-bold mb-2">Visit Our Website</p>
              <a href="https://advantage-agency.co/" target="_blank" rel="noopener noreferrer" className="text-red-600 text-xl hover:underline">
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

export default V10Page;