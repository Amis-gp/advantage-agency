"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="md:pt-4 md:gap-4 flex flex-col">
      <h2 className="text-2xl uppercase tracking-wider">
        UNLOCK THE SECRETS OF HIGH-PERFORMANCE AFFILIATE MARKETING
      </h2>

      <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4">
        Master the craft of overcoming any limitations on your ads, to keep your ROI{' '} 
        <span className="underline"> always positive!</span>
      </h1>

      <div className="text-2xl md:text-3xl mt-8">
        Jump into the world of{' '}
        <span className="text-red-600">
          Black-Hat marketing and become an expert in your game
        </span>
      </div>
      {/* <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-8">
        Boost Your Future: Master a Skill for Endless Earnings, Be Your Own Boss, or Team Up with Fellow Hustlers from Our Training program to 4X Your Income
      </p> */}

      <div className="mx-auto md:w-[560px] mt-8 relative">
        <Image 
          src="/img/black-affiliate-marketing/hero.webp" 
          alt="Black Affiliate Marketing Hero" 
          width={560} 
          height={315} 
          className="rounded-lg object-cover border-2 border-red-900 shadow-[0_0_25px_8px] shadow-red-700/50"
          priority
          quality={90}
          sizes="(max-width: 768px) 100vw, 560px"
        />
        <Image 
          src="/img/black-affiliate-marketing/arrow.webp" 
          alt="Black Affiliate Marketing Hero" 
          width={80} 
          height={50}
          className="hidden md:block absolute -bottom-24 -right-32 -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-60"
          priority
          quality={90}
        />
      </div>
      

      <div className="!mt-6 pt-8 animate-bounce">
        <Link href="#pricing" className="bg-red-800 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 uppercase">
          SECURE YOUR SPOT NOW
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
