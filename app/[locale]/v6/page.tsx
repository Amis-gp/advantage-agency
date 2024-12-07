"use client"

import React from 'react';
import { NextPage } from 'next';

import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';       

import '@/app/styles.css'
import MessengerButton from '@/components/MessengerButton';
import Formspree from '@/components/Formspree';

const v6Page: NextPage = () => {
  useEffect(() => {
    document.title = "Historia sukcesu 3D rendering company";
  }, []);

  const [isOpenCom1, setIsOpenCom1] = useState(false);
  const [isOpenCom2, setIsOpenCom2] = useState(false);
  const [isOpenCom3, setIsOpenCom3] = useState(false);
  const [isOpenStata, setIsOpenStata] = useState(false);
  const [isOpenStories, setIsOpenStories] = useState(false);

  function closeModalCom1() {
    setIsOpenCom1(false);
  }

  function openModalCom1() {
    setIsOpenCom1(true);
  }

  function closeModalCom2() {
    setIsOpenCom2(false);
  }

  function openModalCom2() {
    setIsOpenCom2(true);
  }

  function closeModalCom3() {
    setIsOpenCom3(false);
  }

  function openModalCom3() {
    setIsOpenCom3(true);
  }

  function closeModalstata() {
    setIsOpenStata(false);
  }

  function openModalstata() {
    setIsOpenStata(true);
  }

  function closeModalStories() {
    setIsOpenStories(false);
  }

  function openModalStories() {
    setIsOpenStories(true);
  }

  return (
    <div className="text-black bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
        <span className='highlight'>B2B lead generation</span> through email marketing for 3D rendering company
        </h1>
       
        <div className="mb-12">
          <p className="mb-4">
          Meet Konstantin, the owner of Studio Render Market — <strong className='text-amber-600 font'>a 3D rendering and modeling agency based in Los Angeles.</strong> His team offers the development of 3D furniture models, product visualization, and more, helping interior designers and furniture manufacture business owners to sell their products better with the  precise visualization.
          </p>
          <p className="mb-4">
          For Konstantin, the biggest challenge was stable lead generation for their services, as well as direct  contacts to build outreach list, so he turned to us for help with building an email marketing system for their lead generation.
          </p>
          <p className="mb-4">
          For our team, email marketing is something commonplace, as we have been doing it for our services and for others for a long time and with the good outcome, so we were happy to get to work.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">The Challenges:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              <li>Narrow targeted audience</li>
              <li>Difficult to get emails of decision-makers</li>
              <li>Sending emails manually from one domain, with the wrong approach</li>
              <li>Lack of an automated lead generation system</li>
              <li>86% of emails landing in SPAM</li>
              <li>not enough volume of sent emails per week/month</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v6/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our approach:</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Step</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1</td>
                <td className="px-4 py-2">
                We conducted a detailed research of the market and understood pain points of the audience
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                Prepared mail server and other tools
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                Pulled out contacts of decision makers in the furniture business industry, thanks to our own tool
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                Setup of 10 senders, writing email letters
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">5</td>
                <td className="px-4 py-2">
                We’ve built 10 sequences of 4-5 emails with different marketing approaches
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">6</td>
                <td className="px-4 py-2">
                Set up email warm-up tools
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">7</td>
                <td className="px-4 py-2">
                Constant optimization of letters, subjects and angles.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
        Thanks to detailed analysis and consultations with Kostya, we received valuable information about the positioning of services, subtleties, and unique needs of the Studio Render Market.
        </p>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-amber-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-amber-700 transition duration-300 ease-in-out animate-bounce">
            Book My Free Consult Now
            </a>
          </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">Response from <span className='highlight highlight-amber-300 highlight-variant-5'>potential leads:</span></h2>
        <div className="mb-8">

          <div className="mb-8">

                <div  className="border-2 border-amber-600 rounded-lg p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                    <div>
                      <img src="/img/v6/com1.jpg" alt="com1" onClick={openModalCom1} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                    </div>
                    <div>
                      <img src="/img/v6/com2.jpg" alt="com2" onClick={openModalCom2} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                    </div>
                  </div>
                  <div>
                    <img src="/img/v6/com3.jpg" alt="com3" onClick={openModalCom3} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                </div>

                <Transition appear show={isOpenCom1} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModalCom1}>
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
                            <div className="mt-2 w-4/5 mx-auto p-0">
                              <img className="mx-auto w-1/2" src="/img/v6/com1.jpg" alt="com1" />
                            </div>
                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                                onClick={closeModalCom1}
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

                <Transition appear show={isOpenCom2} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModalCom2}>
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
                            <div className="mt-2">
                              <img className="mx-auto w-2/5" src="/img/v6/com2.jpg" alt="com2" />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                                onClick={closeModalCom2}
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
                
                <Transition appear show={isOpenCom3} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModalCom3}>
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
                            <div className="mt-2 w-4/5 mx-auto">
                              <img src="/img/v6/com3.jpg" alt="com3" style={{ width: 'auto', height: 'auto' }} />
                            </div>
                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                                onClick={closeModalCom3}
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

        <p className="mb-4">
          Thanks to the quality of the hand-picked audience of furniture manufacturers that we were able to get, we managed to achieve a great open rate, here is an example of statistics from one of the senders:
        </p>

        <div className="grid grid-cols-1 gap-8 border-2 border-amber-600 rounded-lg p-6 sm:w-3/5 mx-auto mb-8">
          <div>
            <img src="/img/v6/stata.jpg" alt="stata" onClick={openModalstata} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
          </div>
        </div>

                <Transition appear show={isOpenStata} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModalstata}>
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
                            <div className="mt-2 sm:w-4/5 mx-auto">
                              <img src="/img/v6/stata.jpg" alt="stata" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                                onClick={closeModalstata}
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

        <div className="mb-8">
          
         

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Results:</h3>
            <div className="grid grid-cols-1 gap-8 border-2 border-amber-600 rounded-lg p-6 sm:w-2/5 mx-auto">
              <div>
                <video 
                  src="/img/v6/stories@1x.mp4"
                  autoPlay 
                  loop
                  muted
                  onClick={openModalStories} 
                  className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" 
                />
              </div>
            </div>

                <Transition appear show={isOpenStories} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModalStories}>
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
                            <div className="mt-2 mx-auto">
                              <video 
                              className="mx-auto sm:w-2/6"
                              src="/img/v6/stories@2x.mp4" 
                              autoPlay
                              muted
                              loop/>
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                                onClick={closeModalStories}
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
          <h3 className="text-2xl font-bold mb-8">In total, we managed to pull out 5000 contacts:</h3>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-amber-600">
              <ul className="space-y-2">
                <li><strong>Responses to our emails:</strong> 174</li>
                <li><strong>Calls with leads: </strong> 116</li>
                <li><strong>Amount of the closed deals:</strong> 29</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">From struggle to prosperity: <span className='highlight highlight-amber-300 highlight-variant-5'>owner's testimonial</span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src="/img/v6/facephoto.jpg" alt="Konstantin" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-amber-600" />
            <p className="font-bold text-center">Konstantin</p> 
            <p className="text-center">owner of <a href="https://www.render.market" target="_blank" rel="noopener noreferrer" className="text-amber-600"><strong><u>Studio Render Market</u></strong></a></p>
          </div>
          <div className="md:w-2/3 md:px-8">
            <blockquote className="text-xl italic mb-4">"To be honest, I didn't have high expectations for email marketing because my sales specialist was trying to send emails manually but it didn't work well, there were no replies from 1000 emails sent. I wasn't hoping to find another way, but luckily found you guys. You convinced me that it's a pretty good source of leads for my business. Now I'm planning to scale it up to a much bigger volume, and also new niches, which will potentially open up new opportunities."</blockquote>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-amber-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-amber-700 transition duration-300 ease-in-out animate-bounce">
              Book My Free Consult Now
            </a>
          </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center"> Ready to Transform Your Company?</h2>
        <p className="text-center">
          See how our effective digital marketing techniques can help your company grow and succeed more than ever before. Schedule your free consultation today and discover how we can help you achieve the growth you've always desired.
        </p>
        <div className="flex justify-center">
        
        <Formspree />

        </div>
        
        <p className="mt-8 text-center">
        Don't miss the opportunity to take your business to the next level. <strong>Contact us today for a free consultation</strong> to learn how we can help you achieve significant growth.
        </p>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch with Us</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Call Us</p>
              <p className="text-amber-600 text-xl">+1 (929) 205-26-10</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Email Us</p>
              <a className="text-amber-600 text-xl" href='mailto:stepan@advantage-agency.co'>stepan@advantage-agency.co</a>
            </div>
            {/* <div className="text-center">
              <p className="text-lg font-bold mb-2">Visit Our Website</p>
              <a href="https://advantage-agency.co/" target="_blank" rel="noopener noreferrer" className="text-amber-600 text-xl hover:underline">
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

export default v6Page;