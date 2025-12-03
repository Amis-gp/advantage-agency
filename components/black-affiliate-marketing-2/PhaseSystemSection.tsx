"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PhaseSystemSection = () => {
  return (
    <section className="mt-20 text-center space-y-6 max-w-4xl mx-auto relative">
      <div
        className="absolute -right-[30%] bottom-[0%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-red-600/30 blur-[150px] -z-10"
        style={{ filter: 'blur(150px)' }}
      />
      <h2 className="text-2xl md:text-4xl font-bold">
        The Proven <span className="text-red-600">3-Phase System to Build a Profitable Black-Hat Advertising Operation</span>
      </h2>

      <h2 className={`
        text-5xl 
        font-bold 
        text-center 
        mb-10
        bg-gradient-to-r 
        from-white 
        via-red-400 
        to-gray-100 
        bg-clip-text 
        text-transparent 
        animate-gradient 
        bg-[length:200%_auto]
      `}>
        This program isn't theory. It's a practical system based on real campaigns, real results, and hard-earned lessons.
      </h2>

      <p className="text-xl md:text-2xl mx-auto">
        If you're looking to run aggressive offers in restricted verticals like iGaming, Nutra, or Crypto — this is the process:
      </p>

      {/* Timeline */}
      <div className="!mt-14 relative">

        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-600 md:block hidden" />
        
        {/* Learn the Skill */}
        <div className="relative flex flex-col md:flex-row items-center mb-12 md:mb-32">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-black md:block hidden" />
          <div className='md:pr-16'>
            <div className="w-full md:w-1/2  bg-white text-black p-6 sm:p-8 rounded-xl">
              <div className="mb-8 flex justify-center md:justify-start">
                <Image 
                  src="/img/black-affiliate-marketing/community-icon-1.webp" 
                  alt="Learn" 
                  width={80} 
                  height={80} 
                  loading="lazy"
                  quality={90}
                  blurDataURL='/img/black-affiliate-marketing/community-icon-1.webp'
                />
              </div>
              <h3 className="text-4xl font-bold mb-4 text-center md:text-left">Master the Technical Foundation</h3>
              <p className="text-lg text-center md:text-left">
                Learn how to set up cloaking correctly, implement tracking tools, prepare ad accounts, and build funnels that avoid bans. 
                <span className="text-red-500"> We cover the exact infrastructure required to operate in black-hat environments.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Join the Community */}
        <div className="relative flex flex-col md:flex-row items-center mb-12 md:mb-32">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-black md:block hidden" />
          <div className='md:pl-16'>
            <div className="w-full md:w-1/2 md:ml-auto bg-white text-black p-6 sm:p-8 rounded-xl">
              <div className="mb-8 flex justify-center md:justify-start">
                <Image 
                  src="/img/black-affiliate-marketing/community-icon-2.webp" 
                  alt="Community" 
                  width={80} 
                  height={80} 
                  loading="lazy"
                  quality={90}
                  blurDataURL='/img/black-affiliate-marketing/community-icon-2.webp'
                />
              </div>
              <h3 className="text-4xl font-bold mb-4 text-center md:text-left">Select the Right Offer and Build a Marketing Strategy</h3>
              <p className="text-lg text-center md:text-left">
                Choosing the wrong offer will drain your budget fast. You'll learn how to evaluate verticals, select high-ROI campaigns, 
                <span className="text-red-500"> and craft a complete go-to-market plan — from creatives to landers to traffic source.</span>
              </p>
              </div>
          </div>
        </div>

        {/* Start a Legit Online Business */}
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-black md:block hidden" />
          <div className='md:pr-16'>
            <div className="w-full md:w-1/2 bg-white text-black p-6 sm:p-8 rounded-xl">
              <div className="mb-8 flex justify-center md:justify-start">
                <Image 
                  src="/img/black-affiliate-marketing/community-icon-3.webp" 
                  alt="Business" 
                  width={80} 
                  height={80} 
                  loading="lazy"
                  quality={90}
                  blurDataURL='/img/black-affiliate-marketing/community-icon-3.webp'
                />
              </div>
              <h3 className="text-4xl font-bold mb-4 text-center md:text-left">Launch, Analyze, and Scale</h3>
              <p className="text-lg text-center md:text-left">
                Once you're live and see early signs of profitability, it's time to scale. We'll walk through data-driven decisions, 
                <span className="text-red-500"> traffic source reinvestment, scaling frameworks, and maintaining account stability while growing aggressively.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 animate-bounce !mt-10">
        <Link href="#pricing" className="bg-red-800 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 uppercase">
          SECURE YOUR SPOT NOW
        </Link>
      </div>
    </section>
  );
};

export default PhaseSystemSection;
