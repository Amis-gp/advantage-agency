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
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              FB marketing
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              Ways to bypass FB
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              35k ip addresses of fb moderators
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              Pre-lander manual
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              Intro to gambling
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              Qualification for the affiliate tournament
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              Suppliers and services
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              Access to community to build a team
            </li>
          </ul>
        </div>

        {/* Black Affiliate Package */}
        <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 group">
          <h3 className="text-2xl font-bold mb-2">Black Affiliate</h3>
          <p className="text-gray-400 mb-8 h-12">Master Affiliate Marketing with Pro Mentorship</p>
          
          <div className="text-5xl font-bold mb-8 group-hover:text-red-500 transition-colors">€2990</div>
          
          <div className="mt-6 mb-8 text-center">
            <Link href="/black-affiliate-marketing-2/form" className="w-full bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-colors">
              BUY NOW
            </Link>
          </div>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              Everything from black affiliate + Mentorship from me
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              Personal introduction to different affiliate networks and traffic sources
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              Examples of funnels
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              Giving you offers and landers to which you can drive traffic
            </li>
          </ul>
        </div>

        {/* VIP Package */}
        <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 group">
          <h3 className="text-2xl font-bold mb-2">Vip</h3>
          <p className="text-gray-400 mb-8 h-12">Unlock VIP Secrets for Unprecedented Success</p>
          
          <div className="text-5xl font-bold mb-8 group-hover:text-red-500 transition-colors">€4999</div>
          
          <div className="mt-6 mb-8 text-center">
            <Link href="/black-affiliate-marketing-2/form" className="w-full bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-colors">
              BUY NOW
            </Link>
          </div>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              Everything from Pro + Agency accounts
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              How to use prohibited creatives in FB
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              1:1 calls with me
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              Handholding to your first payout
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
