"use client"

import React from 'react';
import Link from 'next/link';

const PricingSection = () => {
  const packages = {
    strategicAudit: 'Strategic Audit',
    auditRoadMap: 'Audit & Road Map',
    mentorship: 'Mentorship'
  };
  const pageName = 'black-affiliate-marketing-2-hight';
  return (
    <section className="mt-20 max-w-7xl mx-auto">
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
        {/* Strategic Audit Package */}
        <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 group">
          <h3 className="text-2xl font-bold mb-2">Strategic Audit</h3>
          <p className="text-gray-400 mb-4 ">One-time in-depth setup analysis</p>
          <p className="text-gray-500 mb-6 text-sm">For experienced media buyers who have hit a plateau or are facing unpredictable losses. You are running campaigns, but the results are unstable.</p>
          
          <div className="text-4xl font-bold mb-8 group-hover:text-red-500 transition-colors">€600</div>
          
          <div className="mt-6 mb-8 text-center">
            <Link href={`/black-affiliate-marketing-2/form?package=${encodeURIComponent(packages.strategicAudit)}&page=${encodeURIComponent(pageName)}`} className="w-full bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-colors">
              Get It Now
            </Link>
          </div>

          <ul className="space-y-3 ">
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              <span>In-Depth Analysis of Your Setup: We examine your funnel, from creatives and landing pages to your offer and targeting strategy.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              <span>Error Analysis & Clear Action Plan: You receive a detailed report with specific recommendations on what to stop doing and what to start doing to optimize your workflow.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              <span>Answers to Your Pressing Questions: Get clarity on the key issues that are holding you back.</span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-400 italic">You will understand exactly which actions are draining your budget and receive a concrete plan to correct them and restart your growth.</p>
        </div>

        {/* Audit & Road Map Package */}
        <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 group">
          <h3 className="text-2xl font-bold mb-2">Audit & Road Map</h3>
          <p className="text-gray-400 mb-4 ">Comprehensive Starter Package</p>
          <p className="text-gray-500 mb-6 text-sm">For those who want a powerful boost for their business. We will identify weak spots in your current workflow and provide you with the tools to fix them and ensure future growth.</p>
          
          <div className="text-4xl font-bold mb-8 group-hover:text-red-500 transition-colors">€1550</div>
          
          <div className="mt-6 mb-8 text-center">
            <Link href={`/black-affiliate-marketing-2/form?package=${encodeURIComponent(packages.auditRoadMap)}&page=${encodeURIComponent(pageName)}`} className="w-full bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-colors">
              Get It Now
            </Link>
          </div>

          <ul className="space-y-3 ">
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              <span>Everything included in the «Strategic Audit» package.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              <span>Visual Road Map: A step-by-step flowchart guiding you from campaign testing to full-scale scaling.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              <span>Metrics Analysis System: Clear instructions, recommendations, and insights on which key performance indicators to focus on and which to ignore.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              <span>Funnel Tracking Template: A unified tool to monitor every element of your campaign.</span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-400 italic">You will eliminate chaos and start working like a well-oiled machine: systematically testing, analyzing, and scaling with a clear and understandable system.</p>
        </div>

        {/* Mentorship Package */}
        <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 group">
          <h3 className="text-2xl font-bold mb-2">Mentorship</h3>
          <p className="text-gray-400 mb-4 ">For serious specialists who want to launch quickly and avoid any mistakes</p>
          <p className="text-gray-500 mb-6 text-sm">This is the fastest path from your current results to stable profit.</p>
          
          <div className="text-4xl font-bold mb-2 group-hover:text-red-500 transition-colors">€2000</div>
          <div className="text-gray-400 mb-6">+ €2000 (second payment after first results)</div>
          
          <div className="mt-6 mb-8 text-center">
            <Link href={`/black-affiliate-marketing-2/form?package=${encodeURIComponent(packages.mentorship)}&page=${encodeURIComponent(pageName)}`} className="w-full bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-colors">
              Get It Now
            </Link>
          </div>

          <ul className="space-y-3 ">
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              <span>Archive of 163 ready-to-use pre-landings: Unique gaming landings that can be quickly adapted to your offer. This is a "turnkey" solution for scaling.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              <span>Personal chat support for 2 months: Your personal advisor who will answer any question during business hours.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              <span>Calls: on an individual schedule.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              <span>Timely updates: access to new insights possessed by ADvantage.</span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-400 italic">You will receive not just information, but a personal assistant who will guide you to the result. You will achieve in 2 months what takes others a year.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
