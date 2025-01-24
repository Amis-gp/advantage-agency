import React from 'react';
import Image from 'next/image';

export default function BlackAffiliateMarketing() {
  return (
    <div className="min-h-screen bg-black text-white text-center px-4 py-16 overflow-hidden font-sans relative">

      <div 
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-red-600/30 blur-[150px]"
        style={{ filter: 'blur(150px)' }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-2xl uppercase tracking-wider">
        CRACK THE CODE OF BLACK AFFILIATE MARKETING
        </h2>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Master Algorithm-Busting Strategies to Rule{' '}
        <span className="underline">The Market Unopposed!</span>
        </h1>

        <div className="text-2xl md:text-3xl">
        Enroll Today and{' '}
        <span className="text-red-600">
            Transform into a Marketing Specialist with Endless Opportunities
        </span>{' '}
        in the Modern Digital World
        </div>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
        Elevate Your Future: Master a Skill for Endless Earnings, Be Your Own Boss, or Join Forces with Fellow Hustlers from Our Course to 4X Your Income
        </p>

        <div className="mx-auto h-[360px]">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/PeUYZkd1KhU?si=4IKhZ4t5Jv0-leTR" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen={true} 
            className="mx-auto"
          />
        </div>

        <div className="mt-8">
          <button className="bg-red-800 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 transition-colors duration-300 uppercase animate-bounce">
            SECURE YOUR SPOT NOW
          </button>
        </div>

        {/* screen two*/}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
          <div className="space-y-4">
            <div className="w-28 h-28 mx-auto">
                <Image src="/img/black-affiliate-marketing/1.avif" alt="1" width={100} height={100} />
            </div>
            <p className="">
            This course is for those who are fed up with their current life, and{' '}
            <span className="text-red-600">current 9-5 job</span> and want to make a change!
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-28 h-28 mx-auto">
            <Image src="/img/black-affiliate-marketing/2.png" alt="2" width={100} height={100} />
            </div>
            <p className="">
            For those who are looking for a way to have an{' '}
            <span className="text-red-600">online income, which is not depended</span> on anything else but your skills, which I'm going to teach you in this course.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-28 h-28 mx-auto">
                <Image src="/img/black-affiliate-marketing/3.avif" alt="3" width={100} height={100} />
            </div>
            <p className="">
            For students, looking for additional streams of income, and start to live on their own terms,{' '}
            <span className="text-red-600">not depended on a job, boss, economical circumstances</span>, or parents.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-28 h-28 mx-auto">
            <Image src="/img/black-affiliate-marketing/4.avif" alt="4" width={100} height={100} />
            </div>
            <p className="">
            For anyone who wants to establish their business, passive income, and turn it into an agency to run ads for the clients.{' '}
            <span className="text-red-600">The methods introduced in this course on by passing algorithms will pay</span>{' '}
            you off forever in the digital marketing world.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 space-y-8">
          <h2 className="text-3xl font-bold">
              Get free samples of pre-landers, ads and traffic sources!
          </h2>
          <button className="bg-red-800 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 transition-colors duration-300 animate-bounce">
              TAKE A QUIZ NOW
          </button>
        </div>
      </div>
    </div>
  );
}
