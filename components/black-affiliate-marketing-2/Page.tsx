"use client"

import React, { useState, useRef, Fragment, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import dynamic from 'next/dynamic';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });

import { Navigation, Pagination } from 'swiper/modules';

const VideoPlayerComponent = ({ 
  videoUrl, 
  placeholder,
  className
}: { 
  videoUrl: string, 
  placeholder?: string,
  className?: string
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const loadVideo = useCallback(() => {
    if (videoRef.current && !isVideoLoaded) {
      videoRef.current.src = videoUrl;
      videoRef.current.load();
      setIsVideoLoaded(true);
    }
  }, [videoUrl, isVideoLoaded]);

  const togglePlay = useCallback(() => {
    if (!isVideoLoaded) {
      loadVideo();
    }
    
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        if (previewRef.current) {
          previewRef.current.style.display = 'none';
        }
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isVideoLoaded, isPlaying, loadVideo]);

  return (
    <div className="relative w-full overflow-hidden group cursor-pointer" onClick={togglePlay}>
      {!isPlaying && (
        <video 
          ref={previewRef}
          src={placeholder}
          className={`absolute inset-0 w-full ${className}`}
          autoPlay
          muted
          loop
          playsInline
        />
      )}
      
      <video 
        ref={videoRef}
        src={videoUrl}
        className={`w-full mx-auto ${className}`}
        playsInline
      />

      {!isPlaying && (
        <div className='bg-black/30 absolute inset-0 hover:bg-black/40 transition-all duration-300 group'>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="group-hover:bg-white/25 bg-black/25 group-hover:scale-110 p-2 rounded-full backdrop-blur-sm transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const VideoPlayer = React.memo(VideoPlayerComponent);

const sectionHeaderClass = `
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
`;

export default function BlackAffiliateMarketing() {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const testimonialImages = [
    '/img/black-affiliate-marketing/testimonial-1.jpg',
    '/img/black-affiliate-marketing/testimonial-2.jpg',
    '/img/black-affiliate-marketing/testimonial-3.jpg',
    '/img/black-affiliate-marketing/testimonial-4.jpg',
    '/img/black-affiliate-marketing/testimonial-5.jpg',
    '/img/black-affiliate-marketing/testimonial-6.png',
    '/img/black-affiliate-marketing/testimonial-7.jpg',
    '/img/black-affiliate-marketing/testimonial-8.jpg',
    '/img/black-affiliate-marketing/testimonial-9.jpg'
  ];

  const faqList = [
    {
      question: "How much is possible to earn per month?",
      answer: "There is no limit as such, the more you spend on ads - the more you earn, all comes down to your ROI. I'm offering basically a hand holding until you get your first payouts. Consistency is the key."
    },
    {
      question: "How quickly will I get my first payout?",
      answer: "Depends on the offer type, there are offers that pay daily, that are offers that pay monthly, you see your sales every day, then you can withdraw your money from affiliate network and invest in ads more or buy yourself nice things. But for your first 5 payouts I would hold off shopping and invest in ads."
    },
    {
      question: "The course seems to be quite expensive, why?",
      answer: "I've done thousands of tests in order to get to what really works and build the whole system around it, the pricing is reasonable, considering I've spent more than €100k and teaching you for €1k, and higher plans cost more because I invest a lot of my time to help you."
    },
    {
      question: "How much I should work per day?",
      answer: "It is quite individual, depending how much stuff you can get done and how fast you learn. I would recommend to consider it as a part-time or full-time job, the more time you invest in this, the better you become and less you need to work. It is possible to automate many processes and work a few hours per day."
    },
    {
      question: "What if I don't like the course?",
      answer: "I guess what matters is a result, if you are making decent money working remotely from any country - it was worth it being consistent and not giving up. That's why we have a community, and teams to make sure you won't abandon it. I also offer a full refund, if you did what was required but never earned nothing."
    },
    {
      question: "Why is it called \"black affiliate marketing\"?",
      answer: "I was thinking about the name, and concerned if it wouldn't make an impression as something bad. Not at all, it is just a different side of the affiliate marketing with specific technical aspects and techniques that will give you a huge advantage over competition, bringing you more conversions and profit."
    },
    {
      question: "Will it work in my country?",
      answer: "Yes! If you are from the US, UK, CA, AU, - you should quickly get your first results. If you are from Europe - also pretty quick. If you are from other countries, it might take a bit more time, but it will work as well, as it is based on the internet."
    },
    {
      question: "How long will I have access to the course?",
      answer: "You will have access to the course for a lifetime, you can always get back to it when needed."
    }
  ];

  function openImage(image: string) {
    setSelectedImage(image);
    setIsImageOpen(true);
  }

  function closeImage() {
    setIsImageOpen(false);
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white text-center px-4 pt-10 pb-14 overflow-hidden font-sans relative">

      <div 
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-red-600/30 blur-[150px] -z-10"
        style={{ filter: 'blur(150px)' }}
      />
      
      <main className="max-w-6xl mx-auto relative z-10">

        <section className="">
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
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-8">
            Boost Your Future: Master a Skill for Endless Earnings, Be Your Own Boss, or Team Up with Fellow Hustlers from Our Course to 4X Your Income
          </p>

          <div className="mx-auto md:w-[560px] mt-8 relative">
            <Image 
              src="/img/black-affiliate-marketing/hero.webp" 
              alt="Black Affiliate Marketing Hero" 
              width={560} 
              height={315} 
              className="rounded-lg object-cover"
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, 560px"
            />
          </div>

          <div className="!mt-6 pt-8 animate-bounce">
            <Link href="/black-affiliate-marketing-2/form" className="bg-red-800 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 uppercase">
              SECURE YOUR SPOT NOW
            </Link>
          </div>
        </section>

        {/* Who is this course for? */}
        <section className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4 bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-red-600/30 hover:border-red-600/50 transition-all duration-300">
              <div className="w-28 h-28 mx-auto">
                <Image src="/img/black-affiliate-marketing/1.webp" alt="iGaming operators" width={100} height={100} loading='eager' 
                  sizes="100px"
                />
              </div>
              <p className="">
                ✅ iGaming operators and affiliates – <span className="text-red-600">looking to scale campaigns, bypass restrictions, and access aggressive traffic sources</span>.
              </p>
            </div>

            <div className="space-y-4 bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-red-600/30 hover:border-red-600/50 transition-all duration-300">
              <div className="w-28 h-28 mx-auto">
                <Image src="/img/black-affiliate-marketing/2.webp" alt="Offer owners" width={100} height={100} loading='eager'/>
              </div>
              <p className="">
                ✅ Offer owners – <span className="text-red-600">who want to build their own media buying team and control the full funnel from ad to conversion</span>.
              </p>
            </div>

            <div className="space-y-4 bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-red-600/30 hover:border-red-600/50 transition-all duration-300">
              <div className="w-28 h-28 mx-auto">
                <Image src="/img/black-affiliate-marketing/3.webp" alt="Agencies" width={100} height={100} loading='eager'/>
              </div>
              <p className="">
                ✅ Agencies – <span className="text-red-600">that are ready to advertise with no limits, push into black-hat verticals, and unlock high-ROI tactics most won't dare to touch</span>.
              </p>
            </div>

            <div className="space-y-4 bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-red-600/30 hover:border-red-600/50 transition-all duration-300">
              <div className="w-28 h-28 mx-auto">
                <Image src="/img/black-affiliate-marketing/4.webp" alt="Media buyers" width={100} height={100} loading='eager'/>
              </div>
              <p className="">
                ✅ Media buyers – <span className="text-red-600">who want to work with high-paying, uncapped offers across iGaming, nutra, dating, and crypto niches</span>.
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

        {/* Who Am I Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 sm:mt-16 max-w-6xl mx-auto relative">
          <div
            className="absolute -right-[30%] -top-[30%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-red-600/30 blur-[150px] -z-10"
            style={{ filter: 'blur(150px)' }}
          />
          <div className="relative w-4/5 md:w-full mx-auto pl-2">
            <Image 
              src="/img/black-affiliate-marketing/foto-1.webp" 
              alt="Mentor" 
              width={1080} 
              height={1616} 
              className="rounded-lg  max-h-[700px] w-auto"
              quality={100}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEB"
            />
          </div>

          <div className="space-y-6 text-left flex flex-col justify-center">
            <h2 className="text-4xl font-bold">
              Meet Your <span className="underline">Growth</span> Partner
            </h2>

            <ul className="space-y-6 text-lg md:text-2xl font-bold list-disc pl-6">
              <li className="">
                <span className="text-red-600 font-bold">Over 5 years of experience in Affiliate Marketing, </span>
                <span>media buying agency marketing and performance marketing.</span>
              </li>

              <li className="">
                <span className="text-red-600 font-bold">Consulted for over 2,000 businesses worldwide </span>
                <span>on behalf of industry giants like Google and Voluum.</span>
              </li>

              <li className="">
                <span className="text-red-600 font-bold">Extensive experience worked across all big verticals : </span>
                <span>from ecommerce and nutra to igaming, crypto and search arbitrage.</span>
              </li>

              <li className="">
                <span className="text-red-600 font-bold">Successfully scaled multiple clients </span>
                <span>from a €10,000 monthly ad spend to an €1,000,000 in monthly ad spend.</span>
              </li>

              {/* <li className="">
                <span className="text-red-600 font-bold">Delivered more than 10 comprehensive </span>
                <span>Marketing Courses to empower professionals in the field.</span>
              </li> */}
            </ul>
          </div>
          <div className="flex justify-center gap-6 mt-6 md:col-span-2">
              <a href="https://www.linkedin.com/in/stepan-potichnyi/" target="_blank" className="hover:scale-110 transition-all duration-300">
                <Image src="/img/black-affiliate-marketing/linkedin.avif" alt="LinkedIn" width={40} height={40} loading="lazy" 
                  sizes="40px"
                  quality={80}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEB"
                />
              </a>
              <a href="https://www.instagram.com/stepan_knows" target="_blank" className="hover:scale-110 transition-all duration-300">
                <Image src="/img/black-affiliate-marketing/instagram.avif" alt="Instagram" width={40} height={40} loading="lazy"/>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100006500822716&locale=uk_UA" target="_blank" className="hover:scale-110 transition-all duration-300">
                <Image src="/img/black-affiliate-marketing/facebook.avif" alt="Facebook" width={40} height={40} loading="lazy"/>
              </a>
              <a href="https://www.youtube.com/@Stepan_Knows" target="_blank" className="hover:scale-110 transition-all duration-300">
                <Image src="/img/black-affiliate-marketing/youtube.avif" alt="YouTube" width={40} height={40} loading="lazy"/>
              </a>
              <a href="https://www.tiktok.com/@steve_4_real" target="_blank" className="hover:scale-110 transition-all duration-300">
                <Image src="/img/black-affiliate-marketing/tiktok.avif" alt="TikTok" width={40} height={40} loading="lazy"/>
              </a>
            </div>
        </section>

        {/* Story Section */}
        <section className="space-y-12 mt-20 max-w-6xl mx-auto">
          {/* First Part */}
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-[120%] space-y-8 text-left text-lg order-2 md:order-1 flex flex-col justify-center">
              <p>
                I come from humble beginnings — the oldest of four kids in a Ukrainian village, where hard work wasn't a choice, it was survival. With no safety nets, I took on the <span className="text-red-600 font-bold">responsibility of supporting my family</span> and working toward retiring my parents.
              </p>
              <p>
                I moved to Poland to study, while grinding through low-paying, physical jobs — kitchens, McDonald's, construction, supermarkets — whatever kept the lights on. At one point, I was <span className="font-bold">juggling two jobs and university</span>, living a disciplined, ascetic life focused on growth, learning, and <span className="text-red-600 font-bold">breaking the cycle</span>. 📚
              </p>
            </div>

            <div className="mx-auto order-1 md:order-2">
              <Image 
                src="/img/black-affiliate-marketing/foto-2.avif" 
                alt="Personal photo" 
                width={500} 
                height={700} 
                className="rounded-lg object-cover max-w-[330px] max-h-[400px]"
                loading="lazy"
                quality={90}
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEB"
              />
            </div>
          </div>

          {/* Second Part */}
          <div className="flex flex-col md:flex-row gap-12 relative">
            <div
              className="absolute -left-[30%] -top-[30%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-red-600/30 blur-[150px] -z-10"
              style={{ filter: 'blur(150px)' }}
            />
            <div className="w-4/5 md:w-full mx-auto md:my-auto">
              <Image 
                src="/img/black-affiliate-marketing/foto-3.webp" 
                alt="Personal photo" 
                width={500} 
                height={700} 
                className="rounded-lg object-cover max-h-[650px]"
                loading="lazy"
                quality={90}
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
            <div className="md:w-[120%] space-y-8 text-left text-lg flex flex-col justify-center">
              <p>
                My break came when I landed a role at Google — <span className="text-red-600 font-bold">beating out over 50 candidates</span>. I'll share the full story on YouTube one day, but it started with pure hunger and zero excuses.
              </p>
              <p>
                Soon, I was presenting to crowds of 200+, winning company-wide pitch competitions in front of the top Googlers from Dublin. I <span className="font-bold">won twice out of two appearances</span> — and earned a reputation as one of the top performers in the office.
              </p>
              <p>
                At the time, €1,500/month felt like a fortune, especially in Poland, where the average was €700. But it still wasn't freedom. I lived in a cramped apartment with six others, didn't eat out, didn't buy clothes — just <span className="text-red-600 font-bold">saved like a machine</span>. I managed to put away €10,000 in seven months at age 21.
              </p>
              <p>
                Then I lost all of it — testing 10 e-commerce projects that flopped. That pain taught me more than any win ever could. As a foreigner in Poland, I faced discrimination and exclusion. No one rolled out a red carpet. But that only made me <span className="font-bold">more determined to carve my own path</span> — by any means necessary.
              </p>
            </div>
          </div>

          {/* Third Part */}
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-[120%] space-y-8 text-left text-lg order-2 md:order-1 flex flex-col justify-center">
              <p>
                After Google, I went all-in on freelancing — running Google Ads, building websites, and helping small businesses go digital. It was just me, grinding <span className="text-red-600 font-bold">9 AM to 9 PM, every day</span>. No team, no safety net — just hustle and referrals.
              </p>
              <p>
                Six months in, I hit a wall. Freelancing wasn't stable, and the income (€1.5k–€2k/month) wasn't enough for the life I wanted. So I made a move — rented a shared flat, and spent an entire month doing nothing but job interviews. <span className="font-bold">27 of them</span>, to be exact.
              </p>
              <p>
                The result? I landed <span className="text-red-600 font-bold">two high-pressure corporate roles at once</span> — Voluum and BenefitHub — both in SaaS sales. You can verify that on my <Link href="https://www.linkedin.com/in/stepan-potichnyi/" target="_blank" className="text-blue-500 font-bold">LinkedIn profile</Link>. For nearly three years, I carried the revenue of two tech companies on my back. No weekends. No balance. Just pure output. My income jumped to €3k–€4k/month. I finally started saving — but my health, energy, and freedom were running low.
              </p>
            </div>

            <div className="w-4/5 mx-auto order-1 md:order-2 md:my-auto">
              <Image 
                src="/img/black-affiliate-marketing/foto-4.avif" 
                alt="Personal photo" 
                width={500} 
                height={700} 
                className="rounded-lg object-cover"
                loading="lazy"
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>

          {/* Fourth Part */}
          <div className="flex flex-col md:flex-row gap-12 relative">
            <div
              className="absolute -right-[30%] -top-[30%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-red-600/30 blur-[150px] -z-10"
              style={{ filter: 'blur(150px)' }}
            />
            <div className="w-4/5 md:w-full mx-auto md:my-auto">
              <Image 
                src="/img/black-affiliate-marketing/foto-5.webp" 
                alt="Personal photo" 
                width={500} 
                height={700} 
                className="rounded-lg object-cover"
                loading="lazy"
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
            <div className="md:w-[120%] space-y-8 text-left text-lg flex flex-col justify-center">
              <p>
                In February 2022, war broke out in my homeland. Russia invaded Ukraine. My family was in danger, missiles were flying, and everything I thought mattered suddenly didn't. That moment hit hard — I realized that the life I had built wasn't enough. I needed to create <span className="text-red-600 font-bold">real freedom</span>.
              </p>
              <p>
                So I went all-in. I started donating to our army and investing €2,000–€3,000/month into affiliate marketing. At first, I lost money. A lot. I was doing it the "standard" way — and failing. So I went dark. <span className="font-bold">Locked in. Spent months testing, studying, building</span>. Sleepless nights, no weekends, just work. Eventually, I <span className="text-red-600 font-bold">cracked the code</span>.
              </p>
              <p>
                Everything changed. Over the next six months, I pulled nearly <span className="text-red-600 font-bold">€400,000 in net profit</span>. I bought my dream car, traveled across Europe — Ibiza, Marbella, Positano, Amsterdam, London, Berlin. I quit both jobs. For the first time ever, I had full control of my time and income.
              </p>
              <p>
                That success led to my agency — <span className="font-bold">ADvantage</span> 
                <Link href="https://advantage-agency.co" target="_blank" className="text-blue-500 font-bold"> (here's the link)</Link> —
                and now, this course. I'm not here to sell dreams. I'm here to show you the path, and if you're serious, even offer you a seat at the table. My <span className="text-red-600 font-bold">top students now earn up to €5,000/month</span> working with us. This is just a part of my story. Nothing about it was easy. But if I did it — so can you. And I'll show you how.
              </p>
            </div>
          </div>

          <div className="animate-bounce pt-8">
            <Link href="/black-affiliate-marketing-2/form" className="bg-red-800 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 uppercase">
              SECURE YOUR SPOT NOW
            </Link>
          </div>
        </section>

        {/* What We Are Providing Section */}
        <section className="mt-20 max-w-6xl mx-auto relative">
          <div
            className="absolute -left-[30%] -bottom-[50%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-red-600/30 blur-[150px] -z-10"
            style={{ filter: 'blur(150px)' }}
          />
          <h2 className={sectionHeaderClass}>
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

        {/* Let's Cut The Shit. */}
        <section className="mt-20 text-center space-y-6 max-w-4xl mx-auto relative">
          <div
            className="absolute -right-[30%] bottom-[0%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-red-600/30 blur-[150px] -z-10"
            style={{ filter: 'blur(150px)' }}
          />
          <h2 className="text-2xl md:text-4xl font-bold">
            The Proven <span className="text-red-600">3-Phase System to Build a Profitable Black-Hat Advertising Operation</span>
          </h2>

          <h2 className={sectionHeaderClass}>
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
            <Link href="/black-affiliate-marketing-2/form" className="bg-red-800 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 uppercase">
              SECURE YOUR SPOT NOW
            </Link>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-20 max-w-6xl mx-auto relative px-2">
          <h2 className={sectionHeaderClass}>
            Testimonials
          </h2>

          {/* First Row - Videos */}
          <div className="gap-4 md:flex justify-between">
            <div className="md:w-2/5 h-[360px] mx-auto">
              <VideoPlayer 
                videoUrl="/img/black-affiliate-marketing/video-1.mp4" 
                className="h-[360px]" 
                placeholder="/img/black-affiliate-marketing/video-1-placeholder.webp" 
              />
            </div>
            <div className=" md:w-2/3 h-[360px] mx-auto">
              <VideoPlayer 
                videoUrl="/img/black-affiliate-marketing/video-2.mp4" 
                className="h-[360px]" 
                placeholder="/img/black-affiliate-marketing/video-2-placeholder.webp"
              />
            </div>
            <div className="aspect-[4/5] md:w-2/5 h-[360px] mx-auto mb-8 md:mb-0">
              <VideoPlayer 
                videoUrl="/img/black-affiliate-marketing/video-3.mp4" 
                className="h-[360px]" 
                placeholder="/img/black-affiliate-marketing/video-3-placeholder.webp"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center sm:mt-4">
            <div className="space-y-4">
              <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-1.jpg')}>
                <Image 
                  src="/img/black-affiliate-marketing/testimonial-1.jpg" 
                  alt="1" 
                  width={500} 
                  height={176} 
                  loading="lazy" decoding="async"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEB"
                />
              </div>
              <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-8.jpg')}>
                <Image 
                  src="/img/black-affiliate-marketing/testimonial-8.jpg" 
                  alt="8" 
                  width={490} 
                  height={460} 
                  loading="lazy" decoding="async"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-3.jpg')}>
                <Image 
                  src="/img/black-affiliate-marketing/testimonial-3.jpg" 
                  alt="3" 
                  width={500} 
                  height={176} 
                  loading="lazy" decoding="async"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>
            <div className="space-y-4 ">
              <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-4.jpg')}>
                <Image 
                  src="/img/black-affiliate-marketing/testimonial-4.jpg" 
                  alt="4" 
                  width={896} 
                  height={515} 
                  loading="lazy" decoding="async"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-5.jpg')}>
                <Image 
                  src="/img/black-affiliate-marketing/testimonial-5.jpg" 
                  alt="5" 
                  width={952} 
                  height={296} 
                  loading="lazy" decoding="async"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-2.jpg')}>
                <Image 
                  src="/img/black-affiliate-marketing/testimonial-2.jpg" 
                  alt="2" 
                  width={500} 
                  height={176} 
                  loading="lazy" decoding="async"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-7.jpg')}>
                <Image 
                  src="/img/black-affiliate-marketing/testimonial-7.jpg" 
                  alt="7" 
                  width={489} 
                  height={493} 
                  loading="lazy" decoding="async"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-6.png')}>
                <Image 
                  src="/img/black-affiliate-marketing/testimonial-6.png" 
                  alt="6" 
                  width={1656} 
                  height={458} 
                  loading="lazy" decoding="async"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-9.jpg')}>
                <Image 
                  src="/img/black-affiliate-marketing/testimonial-9.jpg" 
                  alt="9" 
                  width={500} 
                  height={176} 
                  loading="lazy" decoding="async"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>
          </div>
        </section>


        {/* Pricing Packages Section */}
        <section className="mt-20 max-w-7xl mx-auto px-4">
          <h2 className={sectionHeaderClass}>
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

              <div className="mt-6 text-center">
                <p className="text-white underline">+ ready to run FB accounts</p>
              </div>
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

        {/* FAQ Section */}
        <section className="mt-20 max-w-7xl mx-auto">
          <h2 className={sectionHeaderClass}>
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqList.map((faq, index) => (
              <div key={index} className="border border-white/10 rounded-lg hover:border-red-600/50 hover:bg-red-600/10 transition-all duration-300">
                <button 
                  className="w-full p-6 text-left text-2xl flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="ml-4">{faq.question}</span>
                  <div className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-0' : '-rotate-90'}`}>
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M12 4V20M4 12H20" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        className={`transform origin-center transition-transform duration-300 ${openFaq === index ? 'scale-y-0' : 'scale-y-100'}`}
                      />
                      <path 
                        d="M4 12H20" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-left md:mr-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Two Options section */}
        <section className="space-y-12 mt-20">
          <h2 className={sectionHeaderClass}>
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

      </main>

      <Transition.Root show={isImageOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeImage}>
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
                  className="absolute -top-12 right-0 text-white text-6xl hover:text-gray-300 transition-colors z-50"
                >
                  ×
                </button>
                <div className="relative h-[80vh]">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    initialSlide={testimonialImages.indexOf(selectedImage)}
                    className="h-full w-full"
                  >
                    {testimonialImages.map((image, index) => (
                      <SwiperSlide key={index}>
                        <Image
                          src={image}
                          alt={`Testimonial ${index + 1}`}
                          fill
                          className="object-contain"
                          loading="lazy"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

