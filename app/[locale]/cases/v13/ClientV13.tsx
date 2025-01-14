"use client"

import React, { Fragment, useRef } from 'react';
import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import '@/app/styles.css'
import MessengerButton from '@/components/MessengerButton';
import Formspree from '@/components/Formspree';
import CasesFooter from '@/components/CasesFooter';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonialImages = [
    '/img/v13/foto-1.webp',
    '/img/v13/foto-2.webp',
    '/img/v13/foto-3.webp',
    '/img/v13/foto-4.webp',
    '/img/v13/foto-5.webp',
    '/img/v13/foto-6.webp',
    '/img/v13/foto-7.webp',
    '/img/v13/foto-8.webp',
    '/img/v13/foto-9.webp',
    '/img/v13/foto-10.webp',
    '/img/v13/foto-11.webp',
    '/img/v13/foto-12.webp',
    '/img/v13/foto-13.webp',
    '/img/v13/foto-14.webp'
];

const V13uaPage: NextPage = () => {
    useEffect(() => {
        document.title = "31 Demo Calls in 4 Weeks through Cold Email";
    }, []);
    const [isImageOpen, setIsImageOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const thumbnailsRef = useRef<SwiperType | null>(null);
    const galleryRef = useRef<SwiperType | null>(null);

    const syncing = useRef(false);

    function openImage(image: string) {
        console.log('Opening image:', image);
        setSelectedImage(image);
        setIsImageOpen(true);
    }

    function closeImage() {
        setIsImageOpen(false);
    }
    
return (    
    <div className="text-black bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
    <section className="mt-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
            How We Generated <span className='highlight highlight-red-300 highlight-variant-5'>31 Demo Calls</span> 🎯 
            for High-Ticket Services 💎
            Using Cold Email System in 4 Weeks! ✨
        </h1>

        <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Cold Email Marketing: Why Is It Challenging Yet Extremely Effective? 🚀
            </h2>
            <p className="mb-4 text-xl leading-relaxed text-gray-800">
                If you think cold email outreach is just writing an email and hitting "Send", we're about to surprise you! ✨
            </p>
            <p className="mb-4 text-xl leading-relaxed text-gray-800">
                Cold Email Marketing is a true art 🎨 that requires a combination of technical setup 🛠️, email deliverability precision 📧, and sales-driven copywriting ✍️. It's a tool that can transform your business, but doing it right is incredibly challenging.
            </p>
        </div>
    </section>

    <div className="flex justify-center w-full mt-14 mb-8 text-center">
        <a href="#form" className="bg-[#ff6315] text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
            Book Your Free Consultation Now
        </a>
    </div>
    <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Why Most Businesses Struggle:</h2>
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
                <ul className="list-disc pl-6 space-y-2">
                    <li>📩 Emails get marked as spam</li>
                    <li>🔒 Lack of control over email inbox reputation</li>
                    <li>⚙️ Lack of systematization in email outreach</li>
                    <li>🧑‍�� Unsuitable or low-quality leads</li>
                    <li>🖋️ Weak copywriting that doesn't engage</li>
                </ul>
            </div>
            <div className="relative h-[300px]">
                <Image 
                    src="/img/v13/hero.jpg"
                    alt="Email Marketing Challenges"
                    fill
                    className="object-cover rounded-lg"
                />
            </div>
        </div>
    </section>

    <section className="mb-16 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-sm">
      <p className="text-3xl font-bold mb-8 text-center bg-clip-text">
          Our Challenge: How to Build a Stable Cold Email System? 🎯
      </p>

      <div className="space-y-6 text-gray-800">
          <p className="text-xl leading-relaxed">
              Our agency set a goal to scale project count and generate more leads for marketing services. We dove into Cold Email Marketing, and to be honest, it wasn't easy. 😅
          </p>

          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#ff6315]">
              <p className="text-xl font-semibold mb-4">
                  In just a few months, we went through dozens of technical and strategic trials: 🔍
              </p>
              <p className="text-lg mb-3">
                  We tested <span className="font-bold text-[#ff6315]">30+</span> different email automation tools.
                  Many of them were:
              </p>
              <ul className="space-y-3 pl-4">
                  <li className="flex items-center gap-2 text-lg">
                      <span className="text-red-500">❌</span> Too expensive
                  </li>
                  <li className="flex items-center gap-2 text-lg">
                      <span className="text-red-500">❌</span> Unstable (bugs, errors)
                  </li>
                  <li className="flex items-center gap-2 text-lg">
                      <span className="text-red-500">❌</span> Missing necessary features
                  </li>
              </ul>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-yellow-400">
              <p className="text-lg leading-relaxed">
                  <span className="font-semibold">⚠️ Critical Moment:</span> Choosing the right email provider and server settings took weeks.
                  At some point, <span className="font-bold text-red-500">45 email accounts</span> were blacklisted, and we had to completely change our approach.
              </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-green-500">
              <p className="text-lg leading-relaxed">
                  <span className="font-semibold">🎉 Result:</span> To build a system that reliably delivers emails to inboxes, we spent over <span className="font-bold text-[#ff6315]">4 months</span> testing, analyzing, and optimizing. But we created a setup that works consistently, and now we can confidently say: <span className="font-bold">we know how Cold Email Marketing works</span>.
              </p>
          </div>
      </div>
    </section>

    <div className="flex justify-center w-full mt-14 mb-8 text-center">
        <a href="#form" className="bg-[#ff6315] text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
            Book Your Free Consultation Now
        </a>
    </div>

    <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Our Lead Generation Approach
        </h2>
        <p className="mb-8 text-xl text-center text-gray-700">
            Here's what we did to get <span className="font-bold text-blue-600">31 demo calls</span> in 4 weeks:
        </p>
        
        <div className="">
            <ul className="space-y-6">
                <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                    <span className="text-2xl">🎯</span>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Clearly Defined Our Target Audience</h3>
                        <div className="text-gray-600 pl-4 border-l-2 border-gray-200">
                            <p>Which niches? What decision-maker positions?</p>
                        </div>
                    </div>
                </li>

                <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                    <span className="text-2xl">🔥</span>
                    <div>
                        <h3 className="font-semibold text-lg">Set Up Email Inboxes and Improve Reputation</h3>
                    </div>
                </li>

                <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                    <span className="text-2xl">⚙️</span>
                    <div>
                        <h3 className="font-semibold text-lg">Prepared Email Server and Necessary Tools</h3>
                    </div>
                </li>

                <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                    <span className="text-2xl">📋</span>
                    <div>
                        <h3 className="font-semibold text-lg">Collected Contact Information of Decision-Makers</h3>
                    </div>
                </li>

                <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                    <span className="text-2xl">✉️</span>
                    <div>
                        <h3 className="font-semibold text-lg">Created 50+ Email Templates with Unique Offers and Messages</h3>
                    </div>
                </li>

                <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                    <span className="text-2xl">📈</span>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Developed a Sequence of 3-4 Emails</h3>
                        <ul className="pl-4 text-gray-600 space-y-2 border-l-2 border-gray-200">
                            <li>• Different Marketing Approaches</li>
                            <li>• Clear Call-to-Action (CTA)</li>
                        </ul>
                    </div>
                </li>

                <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                    <span className="text-2xl">🚀</span>
                    <div>
                        <h3 className="font-semibold text-lg">Launched Campaigns and Conducted Detailed Analysis</h3>
                    </div>
                </li>

                <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                    <span className="text-2xl">🛠️</span>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Monitored the System</h3>
                        <ul className="pl-4 text-gray-600 space-y-2 border-l-2 border-gray-200">
                            <li>• Domain Reputation</li>
                            <li>• Email Sender Quality</li>
                            <li>• Conversion Rates from Emails</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </section>

    

    <section className="mb-16">
    <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
        Our Lead Generation Approach
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="mb-6 border-b-2 border-blue-500 pb-4">
                <h4 className="text-2xl font-bold text-gray-800">What We Did:</h4>
            </div>
            <ul className="space-y-4">
                <li className="flex items-center gap-3 text-lg text-gray-700 hover:text-gray-900 transition-colors">
                    <span className="text-2xl">🎯</span>
                    <span>Clearly Defined Our Target Audience</span>
                </li>
                <li className="flex items-center gap-3 text-lg text-gray-700 hover:text-gray-900 transition-colors">
                    <span className="text-2xl">🔥</span>
                    <span>Set Up Email Inboxes and Improve Reputation</span>
                </li>
                <li className="flex items-center gap-3 text-lg text-gray-700 hover:text-gray-900 transition-colors">
                    <span className="text-2xl">⚙️</span>
                    <span>Prepared Email Server and Necessary Tools</span>
                </li>
                <li className="flex items-center gap-3 text-lg text-gray-700 hover:text-gray-900 transition-colors">
                    <span className="text-2xl">📋</span>
                    <span>Collected Contact Information of Decision-Makers</span>
                </li>
                <li className="flex items-center gap-3 text-lg text-gray-700 hover:text-gray-900 transition-colors">
                    <span className="text-2xl">✉️</span>
                    <span>Created 50+ Email Templates</span>
                </li>
                <li className="flex items-center gap-3 text-lg text-gray-700 hover:text-gray-900 transition-colors">
                    <span className="text-2xl">📈</span>
                    <span>Developed a Sequence of 3-4 Emails</span>
                </li>
                <li className="flex items-center gap-3 text-lg text-gray-700 hover:text-gray-900 transition-colors">
                    <span className="text-2xl">🚀</span>
                    <span>Launched Campaigns</span>
                </li>
                <li className="flex items-center gap-3 text-lg text-gray-700 hover:text-gray-900 transition-colors">
                    <span className="text-2xl">🛠️</span>
                    <span>Monitored the System</span>
                </li>
            </ul>
        </div>
        
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="mb-6 border-b-2 border-green-500 pb-4">
                <h4 className="text-2xl font-bold text-gray-800">Results in 4 Weeks:</h4>
            </div>
            <ul className="space-y-6">
                <li className="flex items-center gap-4 text-lg">
                    <span className="text-3xl font-bold text-blue-600">2921</span>
                    <span className="text-gray-700">Emails Sent</span>
                </li>
                <li className="flex items-center gap-4 text-lg">
                    <span className="text-3xl font-bold text-blue-600">56</span>
                    <span className="text-gray-700">Responses</span>
                </li>
                <li className="flex items-center gap-4 text-lg">
                    <span className="text-3xl font-bold text-blue-600">31</span>
                    <span className="text-gray-700">Demo Calls</span>
                </li>
            </ul>
        </div>
    </div>
</section>

    <div className="flex justify-center w-full mt-14 mb-8 text-center">
        <a href="#form" className="bg-[#ff6315] text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
            Book Your Free Consultation Now
        </a>
    </div>


    <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Responses from Potential Clients:</h2>
        <div className="mb-12 relative">
            <button 
                className="swiper-button-prev absolute !left-4 top-1/2 -translate-y-1/2 z-20 !w-[60px] !h-[60px] rounded-full bg-white shadow-md border border-gray-100 md:!flex !hidden items-center justify-center text-[#ff6315] hover:bg-gray-300 transition-all duration-100"
            >
                ←
            </button>
            <button 
                className="swiper-button-next absolute !right-4 top-1/2 -translate-y-1/2 z-20 !w-[60px] !h-[60px] rounded-full bg-white shadow-md border border-gray-100 md:!flex !hidden items-center justify-center text-[#ff6315] hover:bg-gray-300 transition-all duration-100"
            >
                →
            </button>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                pagination={{ 
                    el: '.swiper-pagination',
                    clickable: true
                }}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="h-[400px] w-full"
                onSwiper={(swiper) => {
                    thumbnailsRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                    if (!syncing.current) {
                        syncing.current = true;
                        galleryRef.current?.slideTo(swiper.activeIndex);
                        syncing.current = false;
                    }
                }}
            >
                {testimonialImages.map((image, index) => (
                    <SwiperSlide key={index} className="sm:pt-4 pb-12 sm:pb-8 px-2">
                        <div 
                            className="relative h-[370px] w-full cursor-pointer"
                            onClick={() => {
                                console.log('Click on image:', image);
                                openImage(image);
                            }}
                            role="button"
                            tabIndex={0}
                        >
                            <Image
                                src={image}
                                alt={`Email Response ${index + 1}`}
                                width={590}
                                height={735}
                                className="!w-fit mx-auto object-cover rounded-lg shadow-lg sm:hover:scale-105 transition-all duration-300 cursor-pointer"
                                priority={index < 4}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    console.log('Click on Image component:', image);
                                    openImage(image);
                                }}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination md:mt-4"></div>
        </div>
        
        
        <h2 className="text-2xl font-bold mb-6">Results:</h2>
        <div className="relative h-full w-full mb-12">
            <Image 
                src="/img/v13/stats.webp"
                alt="Campaign Results"
                width={1280}
                height={620}
                className="h-full w-full object-contain rounded-lg border border-gray-200"
            />
        </div>
    </section>

    <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">
            Get a Professional Digital Strategy for Your Business
            <span className="block mt-2 text-2xl text-[#ff6315]">Free Consultation</span>
        </h2>
    
        <div className="max-w-3xl mx-auto text-lg">
            <p className="mb-6 text-center leading-relaxed">
                Our team will help you create an effective customer acquisition system through internet marketing. We focus on three key areas:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-[#ff6315]">
                    <h3 className="font-bold text-xl mb-2 text-center">Analytics</h3>
                    <p className="text-gray-600 text-center">Detailed analysis of your niche and competitors</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-[#ff6315]">
                    <h3 className="font-bold text-xl mb-2 text-center">Strategy</h3>
                    <p className="text-gray-600 text-center">Development of comprehensive promotion plan</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-[#ff6315]">
                    <h3 className="font-bold text-xl mb-2 text-center">Results</h3>
                    <p className="text-gray-600 text-center">Sales increase and scaling</p>
                </div>
            </div>

            <p className="text-center mb-8">
                Fill out the form below to receive a personalized development plan for your business in the digital environment
            </p>

            <div className="w-fit mx-auto">
                <Formspree />
            </div>

            <p className="mt-8 text-center text-gray-600">
                Leave your request now to get a <strong>free audit</strong> of your current marketing strategy
            </p>
        </div>
    </section>

    <CasesFooter />

    <MessengerButton
        link="https://m.me/100006500822716"
        text="Chat with us on Messenger"
    />

        <Transition.Root show={isImageOpen} as={Fragment}>
            <Dialog 
                as="div" 
                className="relative z-50" 
                onClose={closeImage}
                open={isImageOpen}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/80" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Dialog.Panel className="relative max-w-4xl w-full">
                            <button
                                onClick={closeImage}
                                className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors z-50"
                            >
                                ×
                            </button>
                            <div className="relative h-[80vh]">
                                <Swiper
                                    modules={[ Pagination]}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    pagination={{ 
                                        el: '.swiper-pagination',
                                        clickable: true
                                    }}
                                    loop={true}
                                    initialSlide={testimonialImages.indexOf(selectedImage)}
                                    className="h-full w-full"
                                    onSwiper={(swiper) => {
                                        galleryRef.current = swiper;
                                    }}
                                    onSlideChange={(swiper) => {
                                        if (!syncing.current) {
                                            syncing.current = true;
                                            thumbnailsRef.current?.slideTo(swiper.activeIndex);
                                            syncing.current = false;
                                        }
                                    }}
                                >
                                    {testimonialImages.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <Image
                                                src={image}
                                                alt={`Email Response ${index + 1}`}
                                                fill
                                                className="object-contain"
                                                priority
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="swiper-pagination absolute bottom-4 w-full"></div>
                            </div>
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    </div>
    );
};

export default V13Page;