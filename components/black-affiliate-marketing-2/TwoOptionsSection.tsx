"use client"

import React from 'react';
import Link from 'next/link';

const TwoOptionsSection = () => {
  return (
    <section className="space-y-12 mt-20">
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
        Two Options
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 transition-all duration-300">
          <h3 className="text-3xl font-bold mb-6">Option 1:</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              You can choose to continue your current approach, which involves purchasing inexpensive courses, receiving generic advice, and feeling stuck while hoping for a change. However, it's essential to ask yourself: How much more willpower can you summon, and for how much longer can you persist without witnessing tangible results?
            </p>
            <p>
              Furthermore, by following this path, the opportunity cost is substantial. You're essentially trading the months spent on learning for the opportunity to start earning money right away.
            </p>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-red-600/50 transition-all duration-300 shadow-2xl shadow-red-600/20">
          <h3 className="text-3xl font-bold mb-6">Option 2:</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              You have the opportunity to collaborate directly with me, leveraging all my expertise, and diligently following the precise, step-by-step guidance I'm prepared to provide.
            </p>
            <p>
              It may not be a simple endeavor, but I am committed to ensuring your success in the most effective and efficient manner possible.
            </p>
            <div className="mt-8">
              <Link href="/black-affiliate-marketing-2/form" className="bg-red-800 hover:bg-red-700 text-white py-4 px-8 rounded-lg inline-block transition-colors">
                SECURE YOUR SPOT NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoOptionsSection;
