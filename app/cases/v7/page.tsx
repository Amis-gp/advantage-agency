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
        <span className='highlight'>30+</span> Sales per day thanks to our <u>e‑commerce strategies!</u>
        </h1>
        <div className="mb-12">
          <p className="mb-4">
          <span className='text-emerald-600'><strong>Pawty Dog Toys</strong></span> is a creative online store that specializes in products for pets.
          </p>
          <p className="mb-4">The company's main focus is on eco-friendly and sustainable products for animals, which emphasizes their responsibility to the planet. The anti-chew dog bed was their original product with which they started their business. All of their products have <strong>eco-friendly</strong> characteristics, such as being made from recycled plastic bottles or shredded foam residue, which ensures zero waste production.
          </p>
          <p className="mb-4">In e‑commerce the main goal of advertising is online sales, without direct contact with the customer, so we need to build our strategy in such a way as to <strong>simplify the customer's path</strong> to purchase and answer all possible questions and objections that may arise, so that the customer pays for the product immediately on the site. We're experts at this, so read on to find out how we brought them such powerful results.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">The Challenges:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2 mr-8">
              <li>Unprofitable advertising campaigns on Facebook</li>
              <li>High cost per sale</li>
              <li><strong>Difficulty in scaling up due</strong> to the increase in the high cost per sale</li>
              <li>The classic approach to advertising didn’t work well</li>
              <li>Anti-record of sales last 60 days</li>
              <li>FB conversion tracking wasn’t working</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v7/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our approach:</h2>
          <p className="mb-4">
          After consulting with the owners of Pawty Dog Toys, we proposed a step-by-step action plan that would turn the situation around and take into account all the individual needs of the brand.
          </p>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Step</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1.</td>
                <td className="px-4 py-2">
                We analyzed the target audience, competition, and unique offers of Pawty Dog Toys.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2.</td>
                <td className="px-4 py-2">
                Scrapped 20k contacts (dog owners) in order to market to these people
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3.</td>
                <td className="px-4 py-2">
                Together with the owner, we developed unique offers, promotions, and discount packages.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4.</td>
                <td className="px-4 py-2">
                Helped with social media and online presence
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">5.</td>
                <td className="px-4 py-2">
                Created a comprehensive marketing plan for Facebook and TikTok.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">6.</td>
                <td className="px-4 py-2">
                Come up with the attractive video creatives
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">7.</td>
                <td className="px-4 py-2">
                Created 2 pre-landing ( advertorials ) pages to nurture buyers
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">8.</td>
                <td className="px-4 py-2">
                Conducted A/B testing of various advertising hypotheses.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">9.</td>
                <td className="px-4 py-2">
                We used email automation to inform about new promotions and products
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-emerald-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-emerald-700 transition duration-300 ease-in-out animate-bounce">
            Book My Free Consult Now
            </a>
          </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">Meta Ads <span className='highlight highlight-emerald-300 highlight-variant-5'>( facebook/instagram )</span></h2>
        <p className="mb-4">
          After analyzing the current <strong>Facebook advertising campaigns</strong> that were running before we started working with them, we found numerous shortcomings that were having a negative impact on the results. Using only <strong>static images</strong> did not bring the desired result, so we decided to create <strong>dynamic video creatives</strong> that provide users with new emotions, encourage them to buy products, and emphasize Pawty Dog Toys' quality through positive customer reviews.
        </p>
        <p className="mb-4">
          To achieve our goals and increase sales, we had to increase our <strong>advertising budget</strong>, which increased the reach of the audience and ads may be shown to some part of the less targeted audience, so it will be more difficult to reduce the high cost per sale, but we solved this problem with a successful approach to creatives.<br/>
          To increase <strong>ROI</strong>, we focused on the <strong>average product value (AOV)</strong> and <strong>lifetime value (LTV)</strong>, meaning we tried to sell more than one product to a user, so we collected data on users who made a purchase and offered them related products for their dogs through different channels.
        </p>
        <p className="mb-8">
          We uploaded a ready-made audience of <strong>pet owners</strong>, and created a similar audience and an audience for <strong>retargeting</strong>. Overall performance on Facebook:
        </p>  

        <div className="mb-8">
          
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Before</h4>
                <ul className="space-y-2">
                  <li><strong>Views:</strong> 102 197</li>
                  <li><strong>Clicks:</strong> 1 169</li>
                  <li><strong>Amount of purchases:</strong> 365</li>
                  <li><strong>Price per purchases:</strong>  $11.50</li>
                  <li><strong>Advertising costs:</strong> $4 196</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-emerald-600">
                <h4 className="text-2xl font-bold mb-4 text-emerald-600">After</h4>
                <ul className="space-y-2">
                  <li><strong>Views:</strong> 140 414</li>
                  <li><strong>Clicks:</strong> 3 454</li>
                  <li><strong>Amount of purchases:</strong> 851</li>
                  <li><strong>Price per purchases:</strong>  $7.30</li>
                  <li><strong>Advertising costs:</strong> $6 213</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Results:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-emerald-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-emerald-600 text-white py-2 rounded-t-lg">Before we started our cooperation</h4>
                    <img src="/img/v7/fb-before-case-7.jpg" alt="Before Results Screenshot" onClick={openModalBeforeMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-emerald-600 text-white py-2 rounded-t-lg">After our cooperation</h4>
                    <img src="/img/v7/fb-after-case-7.jpg" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                            Before we started our cooperation
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img//v7/fb-before-case-7.jpg" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
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
                            After our cooperation
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v7/fb-after-case-7.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
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
          <a href="#form" className="bg-emerald-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-emerald-700 transition duration-300 ease-in-out animate-bounce">
            Book My Free Consult Now
          </a>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8"><span className='highlight highlight-green-200 highlight-variant-5'>TikTok</span></h3>
          <p className="mb-8">
          Advertising campaigns on <strong>TikTok</strong> were our initiative for Pawty Dog Toys. We focused on engaging the audience with pets. We planned a sequence of advertising efforts, creating separate campaigns for each product category, and using effective <strong>hashtags and creatives</strong>. We optimized strategies to maximize purchases and <strong>collected data to improve targeting</strong>.
          </p>
          
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-emerald-600 mx-auto sm:w-1/2">
              <h4 className="text-2xl font-bold mb-4 text-emerald-600">After</h4>
              <ul className="space-y-2">
                <li><strong>Views:</strong> 87 202</li>
                <li><strong>Clicks:</strong> 2 473 </li>
                <li><strong>Amount of purchases:</strong> 503</li>
                <li><strong>Price per purchases:</strong>  $6.67</li>
                <li><strong>Advertising costs:</strong> $3 356</li>
              </ul>
            </div>
          </div>
         
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Results:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-emerald-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-emerald-600 text-white py-2 rounded-t-lg">After our cooperation</h4>
                    <img src="/img/v7/tiktok-after-case7.jpg" alt="After Results Screenshot" onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                              <img src="/img/v7/tiktok-after-case7.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
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
          Introducing a new approach and shifting the focus from cost high cost per sale to <strong>customer lifetime</strong> helped Pawty Dog Toys retain and engage customers for 4-5 purchases, which brought in much more revenue in the long run. Increased efficiency of advertising campaigns and active use of <strong>TikTok</strong> allowed the company to attract the attention of a large number of people who want to provide their dogs with high-quality and eco-friendly toys. Improved marketing efforts focused on showcasing the unique features of pet-friendly products and creating <strong>engaging video content</strong> that captured people's attention.
          </p>
          <p className='mb-8'>By working with the Advantage team, Pawty Dog Toys not only increased its brand visibility, but also strengthened its position in the pet products market. Information about <strong>B Corp certification</strong> helped to emphasize the company's social responsibility, which became an additional advantage in the eyes of customers who want to buy products for their pets from a reliable and responsible manufacturer.
          </p>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-emerald-600">
              <ul className="space-y-2">
                <li><strong>Total amount of purchases:</strong> 1 354</li>
                <li><strong>Cost per purchases:</strong> $7.06 </li>
                <li><strong>Advertising costs:</strong> $9 569</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center"><span className='highlight highlight-emerald-300 highlight-variant-5'>What Derrick,</span> <span className='text-2xl'>CEO of Pawty Dog Toys, says about the cooperation</span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src="/img/v7/facephoto.jpg" alt="Derrick" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-emerald-600" />
            <p className="font-bold text-center">Derrick</p> 
            <p className="text-center">CEO of <a href="https://pawtydogtoys.com/collections/new-arrivals" target="_blank" rel="noopener noreferrer" className="text-emerald-600"><strong><u>Pawty Dog Toys</u></strong></a></p>
          </div>
          <div className="md:w-2/3 md:px-8">
            <blockquote className="text-xl italic mb-4">
            "I was really afraid of closing the store because it took a lot of resources, time and effort from me and my team. In the last few months, the results have been very poor, we have changed three specialists, and we could not improve the situation. Of course, I was skeptical about any marketing specialists, but now I realize that nothing can be done without risk and trust. 
            <br/><br/>
            Now I'm glad that the Advantage team helped me get out of this, pointed out problem areas and generally supported me in various matters, which was very much lacking in my previous experience. At the moment, I am grateful for the work done and hope for further fruitful cooperation!
            </blockquote>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-emerald-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-emerald-700 transition duration-300 ease-in-out animate-bounce">
              Book My Free Consult Now
            </a>
          </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Take your business to the next level with <span className='highlight highlight-emerald-300 highlight-variant-5'>proven strategies</span></h2>
        <p className="text-center">
        Ready for a transformation like Pawty Dog Toys? Our agency specializes in developing powerful e‑commerce marketing strategies. We'll work closely with you to understand your unique goals and develop a customized plan to <strong>skyrocket</strong> your store's growth.
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
              <p className="text-emerald-600 text-xl">+1 (929) 205-26-10</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Email Us</p>
              <a className="text-emerald-600 text-xl" href='mailto:stepan@advantage-agency.co'>stepan@advantage-agency.co</a>
            </div>
            {/* <div className="text-center">
              <p className="text-lg font-bold mb-2">Visit Our Website</p>
              <a href="https://advantage-agency.co/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 text-xl hover:underline">
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