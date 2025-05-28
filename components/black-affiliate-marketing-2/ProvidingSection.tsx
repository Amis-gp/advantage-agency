"use client"

import React from 'react';
import Image from 'next/image';

const ProvidingSection = () => {
  return (
    <section className="mt-20 max-w-6xl mx-auto relative">
      <div
        className="absolute -left-[30%] -bottom-[50%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-red-600/30 blur-[150px] -z-10"
        style={{ filter: 'blur(150px)' }}
      />
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
        What We Are Providing!
      </h2>

      <div className="space-y-8">
        {/* First Row - 4 items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-4 ">
            <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
              <Image src="/img/black-affiliate-marketing/ico-1.avif" alt="Video Lessons" width={70} height={70} loading="lazy" sizes="70px" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJc0aNZqgAAAABJRU5ErkJggg==" />
            </div>
            <p>35 Video Lessons and Guides</p>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
              <Image src="/img/black-affiliate-marketing/ico-2.avif" alt="FB Accounts" width={70} height={70} loading="lazy" sizes="70px" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJc0aNZqgAAAABJRU5ErkJggg==" />
            </div>
            <p>FB Accounts to run ads from</p>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
              <Image src="/img/black-affiliate-marketing/ico-3.avif" alt="Advanced techniques" width={70} height={70} loading="lazy" sizes="70px" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJc0aNZqgAAAABJRU5ErkJggg==" />
            </div>
            <p>Advanced techniques how to run any ads that you want</p>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
              <Image src="/img/black-affiliate-marketing/ico-4.avif" alt="Funnels" width={70} height={70} loading="lazy" sizes="70px" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJc0aNZqgAAAABJRU5ErkJggg==" />
            </div>
            <p>Funnels of how to Drive Traffic</p>
          </div>
        </div>

        {/* Second Row - 3 items */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:px-[10%]">
          <div className="text-center space-y-4">
            <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
              <Image src="/img/black-affiliate-marketing/ico-5.png" alt="Traffic Sources" width={70} height={70} loading="lazy" sizes="70px" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJc0aNZqgAAAABJRU5ErkJggg==" />
            </div>
            <p>Traffic Sources Cheet Sheet</p>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
              <Image src="/img/black-affiliate-marketing/ico-6.avif" alt="Push Notifications" width={70} height={70} loading="lazy" sizes="70px" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJc0aNZqgAAAABJRU5ErkJggg==" />
            </div>
            <p>Push Notifications Course</p>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
              <Image src="/img/black-affiliate-marketing/ico-7.png" alt="FB Advanced" width={70} height={70} loading="lazy" sizes="70px" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJc0aNZqgAAAABJRU5ErkJggg==" />
            </div>
            <p>FB Advanced Level Ads Course</p>
          </div>

          <div className="text-center space-y-4 md:hidden">
            <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
              <Image src="/img/black-affiliate-marketing/ico-8.avif" alt="Security" width={70} height={70} loading="lazy" sizes="70px" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJc0aNZqgAAAABJRU5ErkJggg==" />
            </div>
            <p>Security in the Internet Instructions</p>
          </div>
        </div>

        {/* Third Row - 4 items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-4 hidden md:block">
            <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
              <Image src="/img/black-affiliate-marketing/ico-8.avif" alt="Security" width={70} height={70} loading="lazy" sizes="70px" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJc0aNZqgAAAABJRU5ErkJggg==" />
            </div>
            <p>Security in the Internet Instructions</p>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
              <Image src="/img/black-affiliate-marketing/ico-9.png" alt="Services" width={70} height={70} loading="lazy" sizes="70px" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJc0aNZqgAAAABJRU5ErkJggg==" />
            </div>
            <p>List of Services to use for work</p>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
              <Image src="/img/black-affiliate-marketing/ico-10.avif" alt="Mentorship" width={70} height={70} loading="lazy" sizes="70px" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJc0aNZqgAAAABJRU5ErkJggg==" />
            </div>
            <p>1:1 Mentorship from Stepan</p>
          </div>

          <div className="text-center space-y-4 hidden md:block">
            <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
              <Image src="/img/black-affiliate-marketing/ico-12.avif" alt="Examples" width={70} height={70} loading="lazy" sizes="70px" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJc0aNZqgAAAABJRU5ErkJggg==" />
            </div>
            <p>Examples of pre-landers, exclusive offers, direct introductions, examples of creatives</p>
          </div>
        </div>
        <div className="text-center space-y-4 md:hidden">
            <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
              <Image src="/img/black-affiliate-marketing/ico-12.avif" alt="Examples" width={70} height={70} loading="lazy" sizes="70px" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJc0aNZqgAAAABJRU5ErkJggg==" />
            </div>
            <p>Examples of pre-landers, exclusive offers, direct introductions, examples of creatives</p>
        </div>
      </div>
    </section>
  );
};

export default ProvidingSection;
