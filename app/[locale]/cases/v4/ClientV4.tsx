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

const v4Page: NextPage = () => {
  useEffect(() => {
    document.title = "History of success Real Estate";
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
        <span className='highlight'>$31K</span> of Net profit in the Real Estate niche 
        </h1>
        {/* <h2 className="text-2xl font-semibold mb-8 text-center text-red-600">
        Find Out About Unique Strategies That We Used to Save Their Business
        </h2> */}
        <div className="mb-12">
          <p className="mb-4">
          Meet David - <strong className='text-red-500'>a real estate agent from Chicago,</strong> who approached us with an urge to build his personal brand, in order to eliminate the need of cold calling prospects, and set up a <strong>steady stream of clients</strong> from advertising for buying and selling real estate.
          </p>
          <p className="mb-4">
          We were very interested in working in the Real Estate niche, especially in the Chicago area, as there is a  <strong>very broad demographic range:</strong> first-time home buyers, lots of new buildings are being built, people looking for large homes with big families, people looking for smaller homes and apartments or condos, just to name a few.
          </p>
          <p className="mb-4">
          Despite not being familiar with the area ourselves, the first thing we did was sit down with David to discuss his market and get a general idea of where he thought <strong>the best opportunities might come.</strong>
          </p>
          <p className="mb-4">
          After gaining an understanding of the market and key information from David, we did some competitor research, keyword research to see what the other agents in the area were doing.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Challenges:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              <li>David's lack of online media exposure as a specialist</li>
              <li>David <strong>didn't want to cold call </strong>the leads and didn't know how to launch marketing for his services on his own</li>
              <li><strong>Spent a lot of money</strong> on Zillow and didn’t get any tangible results</li>
              <li><strong>Dynamic market and a lot of competition,</strong> you need to find new ways to attract customers all the time</li>
            </ul>
            
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v4/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our approach:</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-red-500 to-red-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Step</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1</td>
                <td className="px-4 py-2">
                Analyzed target audience, competition, location and niche specifics.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                Formed a comprehensive marketing plan for Meta and Google Ads.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                Developed an SMM strategy for social media management.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                Wrote intriguing scripts for video creatives.
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
                Designed a logo and corporate identity
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">7</td>
                <td className="px-4 py-2">
                Developed a sales landing.
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
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4"><span className='highlight highlight-blue-200 highlight-variant-5'>Meta Ads:</span> facebook/instagram</h2>
          <p className="mb-8">
            Our task was to create quality ads for Facebook and Instagram that would get middle-aged to older <strong>people interested</strong> in buying real estate. By testing different ad placements and ad creation approaches, we found an effective way to promote real estate services. 
          </p>
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300 max-w-[400px] mx-auto">
              <h4 className="text-2xl font-bold mb-4 text-gray-600">Overall Meta results:</h4>
              <ul className="space-y-2">
                <li><strong>Impressions:</strong> 65 767</li>
                <li><strong>Clicks:</strong> 1357</li>
                <li><strong>Amount of filled lead forms:</strong> 69</li>
                <li><strong>Cost per lead:</strong> $44.43</li>
                <li><strong>Ad spend budget:</strong> $3 065</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <div className="grid grid-cols-1 gap-8 border-2 border-red-600 rounded-lg p-6">
              <div>
                <h4 className="text-xl font-bold mb-4 text-center bg-red-600 text-white py-2 rounded-t-lg">Results</h4>
                <img src="/img/v4/meta.jpg" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                        Results
                        </Dialog.Title>
                        <div className="mt-2">
                          <img src="/img/v4/meta.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
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

        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-8"><span className='highlight highlight-green-200 highlight-variant-5'>Google Ads</span></h2>
          <p className="mb-4">
          For keyword research, <strong>we used - SEMRush.</strong> It helped us get information about PPC, and organic traffic and helped us identify both short tail and long tail keywords.
          </p>
          <p className="mb-4">
            We <strong>designed the ad campaign structure from scratch,</strong> selected the best keywords and sorted out all the garbage. Performed bid and conversion optimization by changing strategies to "maximum conversions" and collecting data, then changed to a "Target CPA" strategy. 
          </p>
          <div className="mb-8 mt-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300 max-w-[400px] mx-auto">
              <h4 className="text-2xl font-bold mb-4 text-gray-600">Results on Google:</h4>
              <ul className="space-y-2">
                <li><strong>CTR:</strong>  6%</li>
                <li><strong>Clicks:</strong> 142</li>
                <li><strong>Amount of filled lead forms:</strong> 26</li>
                <li><strong>Cost per lead:</strong> $49</li>
                <li><strong>Ad spend budget:</strong> $1 283 </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-red-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
            Book My Free Consult Now
            </a>
          </div>

          <div className="mb-8">
            <div className="grid grid-cols-1 gap-8 border-2 border-red-600 rounded-lg p-6">
              <div>
                <h4 className="text-xl font-bold mb-4 text-center bg-red-600 text-white py-2 rounded-t-lg">Results</h4>
                <img src="/img/v4/google.jpg" alt="After Results Screenshot" onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                        Results
                        </Dialog.Title>
                        <div className="mt-2">
                          <img src="/img/v4/google.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
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
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8">Conclusions:</h3>
          <p className="mb-4">
          Thanks to a competent analysis of the niche, competition, and problems of potential clients, <strong>we were able to build a working system for generating clients</strong> for the sale and purchase of houses.
          </p>
          <div className="flex justify-center mt-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-red-600">
              <ul className="space-y-2">
                <li><strong>Amount of leads:</strong> 95</li>
                <li><strong>Cost per lead:</strong> $45,76</li>
                <li><strong>Total Ad spend:</strong> $4 348</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">What David says about collaboration:</h2>
        <div className="mb-4 text-center">
          <img src="/img/v4/facephoto.jpg" alt="" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-red-600" />
          <p className="font-bold">David </p> 
          <p className="font-bold text-red-600">Real estate agent from Chicago</p>
        </div>
        <div className="md:px-8">
          <blockquote className="italic mb-4">
            "I would be happy to leave a review of what you’ve done. The quality of leads that we managed to generate from ads is pretty good I must say. These are not just cold customers who don't know what they want, but people who are looking to buy or sell a property now!
          </blockquote>
          <p className="mt-4">
          The deals that we have already closed and the ones that are in the process of being signed show that your integrated approach to marketing is working very well.
          </p>
          <p className="mt-4">
          Now I understand very well why an entrepreneur and businessman needs a marketing agency, it is simply not realistic to do such a huge amount of work on your own. Probably, if I hadn't decided to take the step of cooperation, I would still be looking for leads for my services manually and spending a lot of time and nerves by calling them.
          </p>
          <p className="mt-4">
          Thanks to the team for their support, I think this cooperation was really interesting and fruitful!"
          </p>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
        <a href="#form" className="bg-red-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
          Book My Free Consult Now
        </a>
      </div>
      

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Pump up your business with <span className='highlight highlight-red-300 highlight-variant-5'>proven strategies</span></h2>
        <p className="text-center">
         Are you ready to get a steady stream of clients? Our agency specializes in developing powerful marketing strategies. We will work closely with you to understand your unique goals and <strong>develop a customized plan</strong> to rapidly grow your personal brand.
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

export default v4Page;