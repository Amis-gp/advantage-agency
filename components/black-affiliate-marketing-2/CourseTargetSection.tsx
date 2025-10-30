"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CourseTargetSection = () => {
  return (
    <section className="mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4 bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-red-600/30 hover:border-red-600/50 transition-all duration-300">
          <div className="w-28 h-28 mx-auto">
            <Image src="/img/black-affiliate-marketing/1.webp" alt="iGaming operators" width={100} height={100} loading='lazy' 
              sizes="100px"
            />
          </div>
          <p className="">
            ✅ iGaming operators and affiliates – <span className="text-red-600 font-bold">looking to scale campaigns, bypass restrictions, and access aggressive traffic sources</span>.
          </p>
        </div>

        <div className="space-y-4 bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-red-600/30 hover:border-red-600/50 transition-all duration-300">
          <div className="w-28 h-28 mx-auto">
            <Image src="/img/black-affiliate-marketing/2.webp" alt="Offer owners" width={100} height={100} loading='lazy'/>
          </div>
          <p className="">
            ✅ Offer owners – <span className="text-red-600 font-bold">who want to build their own media buying team and control the full funnel from ad to conversion</span>.
          </p>
        </div>

        <div className="space-y-4 bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-red-600/30 hover:border-red-600/50 transition-all duration-300">
          <div className="w-28 h-28 mx-auto">
            <Image src="/img/black-affiliate-marketing/3.webp" alt="Agencies" width={100} height={100} loading='lazy'/>
          </div>
          <p className="">
            ✅ Agencies – <span className="text-red-600 font-bold">that are ready to advertise with no limits, push into black-hat verticals, and unlock high-ROI tactics most won't dare to touch</span>.
          </p>
        </div>

        <div className="space-y-4 bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-red-600/30 hover:border-red-600/50 transition-all duration-300">
          <div className="w-28 h-28 mx-auto">
            <Image src="/img/black-affiliate-marketing/4.webp" alt="Media buyers" width={100} height={100} loading='lazy'/>
          </div>
          <p className="">
            ✅ Media buyers – <span className="text-red-600 font-bold">who want to work with high-paying, uncapped offers across iGaming</span>.
          </p>
        </div>
      </div>
      <div className="mt-20 space-y-10">
        <h2 className="text-3xl font-bold">
            Get free samples of pre-landers, ads and traffic sources!
        </h2>
        <div className="animate-bounce pt-8">
          <Link href="/black-affiliate-marketing-2/form" className="bg-red-800 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 uppercase">
            TAKE A QUIZ NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseTargetSection;
