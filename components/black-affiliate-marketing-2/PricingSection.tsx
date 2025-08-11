"use client"

import React from 'react';
import Link from 'next/link';

const PricingSection = () => {
  return (
    <section className="mt-20 max-w-7xl mx-auto px-4">
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
        Choose Your Path to Success
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Basic Package */}
        <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 group">
          <h3 className="text-2xl font-bold mb-2">Basic</h3>
          <p className="text-gray-400 mb-8 h-12">Become a Black Belt in Affiliate Marketing</p>
          
          <div className="text-5xl font-bold mb-8 group-hover:text-red-500 transition-colors">€999</div>
          
          <div className="mt-6 mb-8 text-center">
            <Link href="/black-affiliate-marketing-2/form" className="w-full bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-colors">
              BUY NOW
            </Link>
          </div>

          <ul className="space-y-4 text-sm">
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              FB marketing fundamentals
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              Proven ways to bypass FB restrictions
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              35k IP addresses of FB moderators
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              Pre-lander setup & optimization manual
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              Intro to Gambling, Nutra and crypto vertical
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              List of suppliers & essential services
            </li>
          </ul>
        </div>

        {/* Black Affiliate Package */}
        <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 group">
          <h3 className="text-2xl font-bold mb-2">Black Affiliate</h3>
          <p className="text-gray-400 mb-8 h-12">Master Affiliate Marketing with Pro Mentorship</p>
          
          <div className="text-5xl font-bold mb-8 group-hover:text-red-500 transition-colors">€2999</div>
          
          <div className="mt-6 mb-8 text-center">
            <Link href="/black-affiliate-marketing-2/form" className="w-full bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-colors">
              BUY NOW
            </Link>
          </div>

          <ul className="space-y-4 text-sm text-left">
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              Everything from BASIC, plus:
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              Personal mentorship directly from me
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              Warm introductions to top affiliate networks & traffic sources
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              Real examples of high-converting funnels
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              Personal recommendations
            </li>
          </ul>
        </div>

        {/* VIP Package */}
        <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 group">
          <h3 className="text-2xl font-bold mb-2">Vip</h3>
          <p className="text-gray-400 mb-8 h-12">Unlock VIP Secrets for Unprecedented Success</p>
          
          <div className="text-5xl font-bold mb-8 group-hover:text-red-500 transition-colors">€3999</div>
          
          <div className="mt-6 mb-8 text-center">
            <Link href="/black-affiliate-marketing-2/form" className="w-full bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-colors">
              BUY NOW
            </Link>
          </div>

          <ul className="space-y-4 text-sm text-left">
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              Everything from BLACK AFFILIATE, plus:
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              Contacts of trusted sellers
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              Advanced methods for running prohibited creatives on FB
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              4 one-on-one strategic calls with me
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              Road Map
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              Step-by-step handholding until your first payout
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
