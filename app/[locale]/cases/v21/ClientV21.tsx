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
import LanguageSwitcher from '@/components/LanguageSwitcher';

const V21Page: NextPage = () => {
  useEffect(() => {
    document.title = "Prostanorm Forte Case Study: $9,450 in 2 Weeks";
  }, []);

  const [isOpenImage2, setIsOpenImage2] = useState(false);
  const [isOpenImage3, setIsOpenImage3] = useState(false);
  const [isOpenImage4, setIsOpenImage4] = useState(false);
  const [isOpenImage5, setIsOpenImage5] = useState(false);
  const [isOpenImage6, setIsOpenImage6] = useState(false);
  const [isOpenImage7, setIsOpenImage7] = useState(false);
  const [isOpenImage8, setIsOpenImage8] = useState(false);
  const [isOpenImage9, setIsOpenImage9] = useState(false);
  const [isOpenImage10, setIsOpenImage10] = useState(false);

  function closeModalImage2() {
    setIsOpenImage2(false);
  }

  function openModalImage2() {
    setIsOpenImage2(true);
  }

  function closeModalImage3() {
    setIsOpenImage3(false);
  }

  function openModalImage3() {
    setIsOpenImage3(true);
  }

  function closeModalImage4() {
    setIsOpenImage4(false);
  }

  function openModalImage4() {
    setIsOpenImage4(true);
  }

  function closeModalImage5() {
    setIsOpenImage5(false);
  }

  function openModalImage5() {
    setIsOpenImage5(true);
  }

  function closeModalImage6() {
    setIsOpenImage6(false);
  }

  function openModalImage6() {
    setIsOpenImage6(true);
  }

  function closeModalImage7() {
    setIsOpenImage7(false);
  }

  function openModalImage7() {
    setIsOpenImage7(true);
  }

  function closeModalImage8() {
    setIsOpenImage8(false);
  }

  function openModalImage8() {
    setIsOpenImage8(true);
  }

  function closeModalImage9() {
    setIsOpenImage9(false);
  }

  function openModalImage9() {
    setIsOpenImage9(true);
  }

  function closeModalImage10() {
    setIsOpenImage10(false);
  }

  function openModalImage10() {
    setIsOpenImage10(true);
  }

  return (
    <div className="text-black bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <LanguageSwitcher/>
      <section className="pt-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
          Case Study: <span className='highlight'>$9,450 with Prostanorm Forte</span> in 2 Weeks on FB in Mexico
        </h1>
        <h2 className="text-2xl font-semibold mb-8 text-center text-orange-600">
        Discover the Winning Strategy That Generated 81% ROI
        </h2>
        <div className="mb-12">
          <p className="mb-4">
            This case study reveals how we achieved outstanding results with Prostanorm Forte in the Mexican market using Facebook advertising. In just 2 weeks, we generated <strong>$9,414 in revenue</strong> with a total ad spend of $5,199, resulting in an impressive <strong>81.07% ROI</strong>.
          </p>
          <p className="mb-4">
            Our team leveraged proven strategies in the prostatitis remedy category, utilizing ready-made pre-landings from LuckyOnline's media buying team and adapting them specifically for Facebook campaigns. The results speak for themselves - <u>1,642 total leads</u> with a <strong>31.85% approval rate</strong>.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Campaign Results:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              <li>Total Leads: 1,642</li>
              <li>Approved: 523 (31.85%)</li>
              <li>Total Spent: $5,199</li>
              <li>Total Earned: $9,414</li>
              <li>Net Profit: $4,214</li>
              <li>ROI: 81.07%</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v21/image1.jpg" alt="Case Study Header" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Campaign Details:</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Parameter</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">Offer</td>
                <td className="px-4 py-2">Prostanorm Forte</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">Network</td>
                <td className="px-4 py-2">LuckyOnline</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">Traffic Source</td>
                <td className="px-4 py-2">Facebook</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">GEO</td>
                <td className="px-4 py-2">Mexico</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">Campaign Period</td>
                <td className="px-4 py-2">02/01/2025 – 02/14/2025</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">Daily Cap</td>
                <td className="px-4 py-2">150 leads</td>
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
          What You'll Learn: <span className='highlight highlight-orange-300 highlight-variant-5'>Our Winning Strategy</span> for Prostanorm Forte Campaign
        </h2>
        <p className="mb-4">
        This comprehensive case study will reveal the exact strategies and techniques we used to achieve these outstanding results. You'll discover proven methods that can be applied to your own campaigns in the health and wellness niche.
        </p>
        <p className="mb-4">
          Through our detailed analysis, you'll gain valuable insights into successful Facebook advertising for health products in Latin American markets. This knowledge will help you understand the nuances of targeting, creative development, and campaign optimization.
        </p>
        <p>
          Here's what this case study covers:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>The traffic pouring scheme that generated consistent results</li>
          <li>Converting pre-landing pages adapted from native ads to Facebook</li>
          <li>Winning creative approaches specifically for the Mexican market</li>
          <li>Technical setup including accounts, payment methods, cloaking, and proxies</li>
          <li>Campaign optimization strategies and automated rules</li>
        </ul>
        <p>
          By implementing these proven tactics, you'll be able to replicate similar success in your own campaigns. Let's dive into the details!
        </p>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">Technical Setup: <span className='highlight highlight-orange-300 highlight-variant-5'>The Foundation of Success</span></h2>
        <p className="mb-8">
        Before launching any campaign, proper technical setup is crucial for success. Here's the exact infrastructure we used to ensure smooth operations and avoid common pitfalls that can kill campaigns.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8"><span className='highlight highlight-blue-200 highlight-variant-5'>Infrastructure:</span> Essential Tools and Services</h3>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Cloaking & Security</h4>
                <ul className="space-y-2">
                  <li><strong>Cloaking:</strong> Keitaro filters</li>
                  <li><strong>Filters:</strong> Providers, GEO, Generated white page</li>
                  <li><strong>Proxies:</strong> Mobile proxies tailored to Mexico</li>
                  <li><strong>Purpose:</strong> Account farming and security</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-orange-600">
                <h4 className="text-2xl font-bold mb-4 text-orange-600">Accounts & Payments</h4>
                <ul className="space-y-2">
                  <li><strong>Payment System:</strong> Lamanche Payments</li>
                  <li><strong>FB Accounts:</strong> Agency accounts from Fan Agency</li>
                  <li><strong>Fan Pages:</strong> PZRD (pre-verified) Fan Pages</li>
                  <li><strong>Daily Cap:</strong> 150 leads per account</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
          This technical foundation allowed us to run campaigns safely and scale effectively. The combination of proper cloaking, reliable payment processing, and quality accounts is essential for sustained success in affiliate marketing.
          </p>
          
          <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              Book My Free Consult Now
            </a>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4"><span className='highlight highlight-green-200 highlight-variant-5'>Offer Selection:</span> Why Prostanorm Forte</h3>
          <p className="mb-4">
          Based on the recommendation from manager Emil for driving traffic in Mexico, the Prostanorm Forte offer from the prostatitis remedy category was chosen. This decision was backed by:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Strong performance history in Latin American markets</li>
            <li>High conversion rates for the target demographic (M40+)</li>
            <li>Proven demand for prostatitis remedies in Mexico</li>
            <li>Competitive payout structure from LuckyOnline network</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4"><span className='highlight highlight-purple-200 highlight-variant-5'>Pre-Landing Strategy:</span> Adapting Proven Winners</h3>
          <p className="mb-4">
          We didn't have to spend much time or money testing approaches because LuckyOnline provides ready-made pre-landings from their media buying, already tested in native ads. We took two pre-landings with a medical news approach and adapted them for Facebook.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <img src="/img/v21/image2.png" alt="Pre-landing 1" onClick={openModalImage2} className="rounded-lg border border-gray-300 shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer w-48" />
            <img src="/img/v21/image3.png" alt="Pre-landing 2" onClick={openModalImage3} className="rounded-lg border border-gray-300 shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer w-48" />
            <img src="/img/v21/image4.png" alt="Pre-landing 3" onClick={openModalImage4} className="rounded-lg border border-gray-300 shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer w-48" />
            <img src="/img/v21/image5.png" alt="Pre-landing 4" onClick={openModalImage5} className="rounded-lg border border-gray-300 shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer w-48" />
          </div>

          <p className="mb-4">
          The medical news angle works particularly well because it:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Builds trust through authoritative presentation</li>
            <li>Educates users about the problem before presenting the solution</li>
            <li>Reduces ad fatigue by appearing as editorial content</li>
            <li>Improves Facebook approval rates compared to direct sales pages</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4"><span className='highlight highlight-red-200 highlight-variant-5'>Creative Strategy:</span> Proven Winners for LatAm</h3>
          <p className="mb-4">
          Since we'd already worked with the prostatitis category in Mexico, we didn't need to test tons of creatives. We immediately used creatives that had proven effective for prostatitis in LatAm.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <img src="/img/v21/image6.png" alt="" onClick={openModalImage6} className="rounded-lg border border-gray-300 shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer w-64" />
            <img src="/img/v21/image7.png" alt="Creative 2" onClick={openModalImage7} className="rounded-lg border border-gray-300 shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer w-64" />
            <img src="/img/v21/image8.png" alt="Creative 3" onClick={openModalImage8} className="rounded-lg border border-gray-300 shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer w-64" />
          </div>

          <p className="mb-4">
          <strong>Key insights about our creative approach:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>This approach generates consistent traffic with minimal rejections</li>
            <li>Rejections typically appear within 24 hours if they occur</li>
            <li>Lower conversion rates are offset by extremely cheap click prices</li>
            <li>Cost per lead remains highly competitive due to volume</li>
          </ul>
        </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">Campaign Execution: <span className='highlight highlight-orange-300 highlight-variant-5'>The Winning Formula</span></h2>
        
        <div className="mb-8 overflow-x-auto">
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <tr className='text-lg'>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Setting</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Configuration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-base">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">Target Audience</td>
                <td className="px-4 py-2">Males 40+ (based on experience)</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">Placements</td>
                <td className="px-4 py-2">FB News Feed, FB Video Feed, FB Stories, IG Stories, IG Feed</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">Account Setup</td>
                <td className="px-4 py-2">1:1:1 setup on accounts with $50 limit</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">Bidding Strategy</td>
                <td className="px-4 py-2">Cost per Result targeting 10% ROI</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Automated Rules for Optimization</h3>
          <p className="mb-4">
          We always applied automated rules to pause expensive ad sets when they overspin. This crucial optimization prevents budget waste and maintains profitability.
          </p>
          
          <div className="flex justify-center mb-4">
            <img src="/img/v21/image9.png" alt="Automated Rules" onClick={openModalImage9} className="rounded-lg border border-gray-300 shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Final Results & Statistics</h3>
          <p className="mb-4">
          Here's a screenshot from one of our advertising accounts showing the actual performance data:
          </p>
          
          <div className="flex justify-center mb-4">
            <img src="/img/v21/image10.jpg" alt="Campaign Statistics" onClick={openModalImage10} className="rounded-lg border border-gray-300 shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
          </div>

          <div className="p-4 flex flex-col md:flex-row items-center mb-8 border-4 border-orange-600 border-dashed rounded-lg">
            <div className="md:w-1/3 md:pr-8 mb-4 md:mb-0 text-center">
              <p className="text-3xl font-bold text-orange-600 mb-2">81.07%</p>
              <p><b>Return on Investment</b></p>
            </div>
            <div className="md:w-2/3">
              <p className="text-2xl font-bold">
              Through our strategic approach and proven methodologies, we achieved an outstanding 81.07% ROI, generating $4,214 in net profit from a $5,199 investment in just 2 weeks.
              </p>
            </div>           
          </div>
        </div>

        <div className="flex justify-center w-full mt-8 mb-8 text-center">
          <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
            Book My Free Consult Now
          </a>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Ready to Replicate These Results?</h2>
        <p className="mb-8 text-center text-xl">
          This case study demonstrates the power of combining proven strategies with proper execution. If you're ready to achieve similar results in your campaigns, let's discuss how we can help you succeed.
        </p>
        <div className='w-fit mx-auto'>
          <Formspree />
        </div>
      </section>

      {/* Modal for Image 2 */}
      <Transition appear show={isOpenImage2} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalImage2}>
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
                <Dialog.Panel className="w-full max-w-4xl mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex justify-center">
                     <img src="/img/v21/image2.png" alt="Pre-landing" className="max-w-full max-h-[70vh] object-contain" />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={closeModalImage2}
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

      {/* Modal for Image 3 */}
      <Transition appear show={isOpenImage3} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalImage3}>
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
                <Dialog.Panel className="w-full max-w-4xl mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex justify-center">
                     <img src="/img/v21/image3.png" alt="Pre-landing 2" className="max-w-full max-h-[70vh] object-contain" />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={closeModalImage3}
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

      {/* Modal for Image 4 */}
      <Transition appear show={isOpenImage4} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalImage4}>
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
                <Dialog.Panel className="w-full max-w-4xl mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex justify-center">
                     <img src="/img/v21/image4.png" alt="Pre-landing 3" className="max-w-full max-h-[70vh] object-contain" />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={closeModalImage4}
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

      {/* Modal for Image 5 */}
      <Transition appear show={isOpenImage5} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalImage5}>
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
                <Dialog.Panel className="w-full max-w-4xl mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                   <div className="mt-2 flex justify-center">
                     <img src="/img/v21/image5.png" alt="Pre-landing 4" className="max-w-full max-h-[70vh] object-contain" />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={closeModalImage5}
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

      {/* Modal for Image 6 */}
      <Transition appear show={isOpenImage6} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalImage6}>
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
                <Dialog.Panel className="w-full max-w-4xl mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex justify-center">
                     <img src="/img/v21/image6.png" alt="Creative 1" className="max-w-full max-h-[70vh] object-contain" />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={closeModalImage6}
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

      {/* Modal for Image 7 */}
      <Transition appear show={isOpenImage7} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalImage7}>
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
                <Dialog.Panel className="w-full max-w-4xl mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex justify-center">
                     <img src="/img/v21/image7.png" alt="Creative 2" className="max-w-full max-h-[70vh] object-contain" />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={closeModalImage7}
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

      {/* Modal for Image 8 */}
      <Transition appear show={isOpenImage8} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalImage8}>
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
                <Dialog.Panel className="w-full max-w-4xl mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex justify-center">
                     <img src="/img/v21/image8.png" alt="Creative 3" className="max-w-full max-h-[70vh] object-contain" />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={closeModalImage8}
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

      {/* Modal for Image 9 */}
      <Transition appear show={isOpenImage9} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalImage9}>
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
                <Dialog.Panel className="w-full max-w-4xl mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex justify-center">
                    <img src="/img/v21/image9.png" alt="Automated Rules" className="max-w-full max-h-[70vh] object-contain" />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={closeModalImage9}
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

      {/* Modal for Image 10 */}
      <Transition appear show={isOpenImage10} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalImage10}>
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
                <Dialog.Panel className="w-full max-w-4xl mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex justify-center">
                     <img src="/img/v21/image10.jpg" alt="Campaign Statistics" className="max-w-full max-h-[70vh] object-contain" />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={closeModalImage10}
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

      <MessengerButton link="https://t.me/advantage_agency" text="Contact us" />
      <CasesFooter />
    </div>
  );
};

export default V21Page;