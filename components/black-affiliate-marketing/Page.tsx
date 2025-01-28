"use client"

import React, { useState, useRef, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full overflow-hidden group cursor-pointer" onClick={togglePlay}>
      <video 
        ref={videoRef}
        src={videoUrl}
        className="w-full h-[360px]" 
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
    <div className="min-h-screen bg-black text-white text-center px-4 py-14 overflow-hidden font-sans relative">

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

          <div className="mx-auto h-[360px] w-full md:w-[560px] mt-8">
            <VideoPlayer videoUrl="/img/black-affiliate-marketing/video-vsl.mp4" />
          </div>

          <div className="!mt-6 pt-8 animate-bounce">
            <Link href="/black-affiliate-marketing/form" className="bg-red-800 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 uppercase">
              SECURE YOUR SPOT NOW
            </Link>
          </div>
        </section>

        {/* Who is this course for? */}
        <section className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4 bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-red-600/30 hover:border-red-600/50 transition-all duration-300">
              <div className="w-28 h-28 mx-auto">
                <Image src="/img/black-affiliate-marketing/1.avif" alt="1" width={100} height={100} priority/>
              </div>
              <p className="">
                This course is for anyone ready to leave the{' '}
                <span className="text-red-600">9-to-5 grind</span> and make a real change!
              </p>
            </div>

            <div className="space-y-4 bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-red-600/30 hover:border-red-600/50 transition-all duration-300">
              <div className="w-28 h-28 mx-auto">
                <Image src="/img/black-affiliate-marketing/2.png" alt="2" width={100} height={100} priority/>
              </div>
              <p className="">
                If you want an{' '}
                <span className="text-red-600">online income that's based on your skills</span>, not luck, this course is for you
              </p>
            </div>

            <div className="space-y-4 bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-red-600/30 hover:border-red-600/50 transition-all duration-300">
              <div className="w-28 h-28 mx-auto">
                <Image src="/img/black-affiliate-marketing/3.avif" alt="3" width={100} height={100} priority/>
              </div>
              <p className="">
                Ideal for students or anyone wanting to live life on their own terms,{' '}
                <span className="text-red-600">free from a boss or financial worries</span>
              </p>
            </div>

            <div className="space-y-4 bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-red-600/30 hover:border-red-600/50 transition-all duration-300">
              <div className="w-28 h-28 mx-auto">
                <Image src="/img/black-affiliate-marketing/4.avif" alt="4" width={100} height={100} priority/>
              </div>
              <p className="">
                Perfect for those looking to build a business and passive income,{' '}
                <span className="text-red-600">with strategies that keep paying off</span>{' '}
                in digital marketing
              </p>
            </div>
          </div>
          <div className="mt-20 space-y-10">
            <h2 className="text-3xl font-bold">
                Get free samples of pre-landers, ads and traffic sources!
            </h2>
            <div className="animate-bounce pt-8">
              <Link href="/black-affiliate-marketing/form" className="bg-red-800 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 uppercase">
                TAKE A QUIZ NOW
              </Link>
            </div>
          </div>
        </section>

        {/* Who Am I Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 max-w-6xl mx-auto relative">
          <div
            className="absolute -right-[30%] -top-[30%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-red-600/30 blur-[150px] -z-10"
            style={{ filter: 'blur(150px)' }}
          />
          <div className="relative w-4/5 md:w-full mx-auto pl-2">
            <Image 
              src="/img/black-affiliate-marketing/foto-1.webp" 
              alt="Mentor" 
              width={500} 
              height={700} 
              className="rounded-lg object-cover"
              quality={100}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEB"
            />
          </div>

          <div className="space-y-6 text-left">
            <h2 className="text-4xl font-bold">
              Who Am I <span className="underline">To Teach You?</span>
            </h2>

            <ul className="space-y-6 text-lg md:text-2xl font-bold list-disc pl-6">
              <li className="">
                <span className="text-red-600 font-bold">Over 5 years of experience in Affiliate Marketing, </span>
                <span>media buying agency marketing and performance marketing.</span>
              </li>

              <li className="">
                <span className="text-red-600 font-bold">Consulted for over 2,000 businesses worldwide </span>
                <span>on behalf of industry giants like Google and Volume.</span>
              </li>

              <li className="">
                <span className="text-red-600 font-bold">Extensive experience working </span>
                <span>with a diverse range of industries, from logistics and restaurants to IT and cutting-edge Web 3.0 projects.</span>
              </li>

              <li className="">
                <span className="text-red-600 font-bold">Successfully scaled multiple clients </span>
                <span>from a $10,000 monthly ad spend to an $1,000,000 in monthly ad spend.</span>
              </li>

              <li className="">
                <span className="text-red-600 font-bold">Delivered more than 10 comprehensive </span>
                <span>Marketing Courses to empower professionals in the field.</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center gap-6 mt-6 md:col-span-2">
              <a href="https://www.instagram.com/stepan_knows" target="_blank" className="hover:scale-110 transition-all duration-300">
                <Image src="/img/black-affiliate-marketing/linkedin.avif" alt="LinkedIn" width={40} height={40} />
              </a>
              <a href="https://www.instagram.com/steve_4_real/" target="_blank" className="hover:scale-110 transition-all duration-300">
                <Image src="/img/black-affiliate-marketing/instagram.avif" alt="Instagram" width={40} height={40} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100006500822716&locale=uk_UA" target="_blank" className="hover:scale-110 transition-all duration-300">
                <Image src="/img/black-affiliate-marketing/facebook.avif" alt="Facebook" width={40} height={40} />
              </a>
              <a href="https://www.youtube.com/@Stepan_Knows" target="_blank" className="hover:scale-110 transition-all duration-300">
                <Image src="/img/black-affiliate-marketing/youtube.avif" alt="YouTube" width={40} height={40} />
              </a>
              <a href="https://www.tiktok.com/@steve_4_real" target="_blank" className="hover:scale-110 transition-all duration-300">
                <Image src="/img/black-affiliate-marketing/tiktok.avif" alt="TikTok" width={40} height={40} />
              </a>
            </div>
        </section>

        {/* Story Section */}
        <section className="space-y-12 mt-20 max-w-6xl mx-auto">
          {/* First Part */}
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-[120%] space-y-8 text-left text-lg order-2 md:order-1">
              <p>
                "I hail from very humble beginnings, a life marked by relentless hard work 💪. There were no safety nets; I had to rely <span className="font-bold">solely on my own efforts</span>. My family, with four children, including me as the eldest, was always facing financial constraints, making it necessary for me to take on the <span className="text-red-600 font-bold">responsibility of supporting my siblings and retiring my parents</span> so they don't have to work so hard anymore. My journey took me from a small village in Ukraine to pursuing studies in Poland 🌍, all while juggling a series of low-paying, physically demanding jobs to make ends meet.
              </p>
              <p>
                These jobs ranged from working in kitchens, at McDonald's, in supermarkets, and in construction - any work that involved manual labor 🏗️. It was my only means of earning a meager income, and it still barely covered my modest bills. To make it all work, I often had to <span className="font-bold">juggle two jobs while attending university</span>. My life felt ascetic, dedicated to learning, completing various courses, and an <span className="text-red-600 font-bold">unending pursuit of self-improvement</span>. 📚
              </p>
            </div>

            <div className="w-4/5 mx-auto order-1 md:order-2 md:-mt-6">
              <Image 
                src="/img/black-affiliate-marketing/foto-2.avif" 
                alt="Personal photo" 
                width={500} 
                height={700} 
                className="rounded-lg object-cover"
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
                className="rounded-lg object-cover"
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
            <div className="md:w-[120%] space-y-8 text-left text-lg">
              <p>
                "My journey at Google marked the <span className="font-bold">beginning of my career as a digital marketer</span> 🚀. The story of how I secured this opportunity, the desperation that fueled my efforts, and how I managed to <span className="text-red-600 font-bold">stand out among 50 other candidates</span> is an incredible tale. Perhaps, I'll share it on my YouTube channel someday.
              </p>
              <p>
                The second photo captures a moment from a presentation I delivered to an audience of 200+ people 🎯. Googlers from the Dublin office had come to Poland for a 'pitch-off' event where I competed with five other top performers. I <span className="font-bold">proudly won this contest twice</span> out of 2 participations. Working for Google was a <span className="text-red-600 font-bold">significant achievement</span>, and I established myself as one of the best employees there. 🏆
              </p>
              <p>
                Back then, I thought I was earning a fortune. It was certainly an improvement from the less satisfying jobs, but it was still a far cry from my ultimate goals. Keep in mind, it is Poland, where the average salary was around $700 per month. I was earning <span className="font-bold">$1,500 per month</span> 💰, which was considered a substantial income. Saving was still challenging, but I managed to save $900 or $1k - don't ask me how I did it. I lived with six other people in a cramped room, and my ability to save was a result of <span className="text-red-600 font-bold">frugality</span>. I never dined out with friends, refrained from buying clothes or anything else, and essentially lived a minimalist lifestyle. It wasn't living; it was surviving. 🌱
              </p>
              <p>
                In the midst of it all, I embarked on the creation of <span className="font-bold">ten different e-commerce websites</span> to test various concepts 💻. However, I ended up losing all the money I had saved - a total of $10,000. In Poland, people might amass such savings after two or 3 years of work on a good job and if they save at least $500 per month, while earning $700, but I achieved it in just <span className="text-red-600 font-bold">seven months, at the age of 21</span>. It's important to note that as I'm an immigrant here, many times I faced discrimination due to my nationality. No one welcomed me here in Poland, rather the opposite. 💪
              </p>
            </div>
          </div>

          {/* Third Part */}
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-[120%] space-y-8 text-left text-lg order-2 md:order-1">
              <p>
                "After leaving Google, I ventured into freelancing, managing Google ads for clients, website development, and assisting businesses with their digital transformation 💼. It had its upsides - I had <span className="font-bold">many clients from word of mouth</span>. However, I was a one-person show, working tirelessly throughout the day, without the confines of a traditional 9-5 schedule. It was more like a <span className="text-red-600 font-bold">9 am to 9 pm routine</span>. 
              </p>
              <p>
                Around the six-month mark, I recognized the need for change. Freelancing wasn't providing the stability I desired, and the income was far from substantial, averaging between $1,500 to $2,000 💰. I decided to rent a room in a shared flat with 3 other people, a significant improvement from my previous situation. Subsequently, I dedicated an entire month to a <span className="font-bold">relentless job hunt, participating in over 27 job interviews</span> 🎯. I received numerous offers and chose to take on <span className="text-red-600 font-bold">two demanding corporate sales positions</span> ( Voluum and BenefitHub ), you can verify it on my <Link href="https://www.instagram.com/stepan_knows" target="_blank" className="text-blue-500 font-bold">LinkedIn profile</Link>.
              </p>
              <p>
                Reflecting on that period, it was nothing short of a whirlwind 🌪️. Each day was filled with stress, as I bore the responsibility for the revenue in two IT SaaS companies. I sustained this lifestyle for <span className="font-bold">nearly three years</span>, which took a toll on my health, and life became synonymous with work. I had no days off, along with multiple side projects and tests conducted during my spare time. However, the income improved to a range of <span className="text-red-600 font-bold">$3,000 to $4,000 per month</span> from both jobs, and I managed to save. 💪
              </p>
            </div>

            <div className="w-4/5 mx-auto order-1 md:order-2 md:my-auto">
              <Image 
                src="/img/black-affiliate-marketing/foto-4.avif" 
                alt="Personal photo" 
                width={500} 
                height={700} 
                className="rounded-lg object-cover"
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
                src="/img/black-affiliate-marketing/foto-5.avif" 
                alt="Personal photo" 
                width={500} 
                height={700} 
                className="rounded-lg object-cover"
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
            <div className="md:w-[120%] space-y-8 text-left text-lg">
              <p>
                "In February 2022, a war broke out in my homeland, russia invaded. My family and loved ones were in danger, and the threat of missiles reaching anywhere in Ukraine persisted until today. This was the <span className="text-red-600 font-bold">turning point</span> that made me realize my current efforts were insufficient. 🔄 In addition to making donations to our army, I began investing $2,000 to $3,000 per month in online advertising, specifically affiliate marketing.
              </p>
              <p>
                I faced significant losses initially, but I soon realized I was approaching things the wrong way. With the budget I had, it seemed almost impossible to achieve profitability through conventional methods. So, I embarked on a journey of months, <span className="font-bold">sleepless nights, and weekends, tirelessly searching for answers</span>. Finally, I <span className="text-red-600 font-bold">cracked the code</span>. 🔑
              </p>
              <p>
                Since then, my life transformed into what you might see on Instagram - the 'high life,' as they call it. I generated nearly <span className="text-red-600 font-bold">$400,000 in net profit</span> 🎯, bought my dream car, customized it to my liking, and traveled to destinations like Ibiza, Mallorca, Marbella ( Spain ) then Portugal, Positano, Italy, and Croatia. Got tired of the sea and went to London many times, Amsterdam, Paris, Berlin and this all in just <span className="font-bold">6 months</span>. I enjoyed a life I never thought possible. Finally I quit my jobs, it felt so good. 🌟
              </p>
              <p>
                Subsequently, I established a digital marketing agency, <span className="font-bold">ADvantage</span> 
                <Link href="https://advantage-agency.co" target="_blank" className="text-blue-500 font-bold"> (here's the link)</Link>.
                I now have a team, and we're in the process of expanding. This journey led me to create a course where I aim not only to share my secrets and help others make money online but also to provide an opportunity to join my team. The <span className="text-red-600 font-bold">best-performing students from my course have the chance to earn $5,000</span>. So don't hesitate. This is a short part of my story, just to give you my background and to show that it wasn't easy at all. But if I made it, I'm totally confident that anyone can do it, and I am here to help. 💪
              </p>
            </div>
          </div>

          <div className="animate-bounce pt-8">
            <Link href="/black-affiliate-marketing/form" className="bg-red-800 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 uppercase">
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center space-y-4 ">
                <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
                  <Image src="/img/black-affiliate-marketing/ico-1.avif" alt="Video Lessons" width={70} height={70}/>
                </div>
                <p>35 Video Lessons and Guides</p>
              </div>

              <div className="text-center space-y-4">
                <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
                  <Image src="/img/black-affiliate-marketing/ico-2.avif" alt="FB Accounts" width={70} height={70} />
                </div>
                <p>FB Accounts to run ads from</p>
              </div>

              <div className="text-center space-y-4">
                <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
                  <Image src="/img/black-affiliate-marketing/ico-3.avif" alt="Advanced techniques" width={70} height={70} />
                </div>
                <p>Advanced techniques how to run any ads that you want</p>
              </div>

              <div className="text-center space-y-4">
                <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
                  <Image src="/img/black-affiliate-marketing/ico-4.avif" alt="Funnels" width={70} height={70} />
                </div>
                <p>Funnels of how to Drive Traffic</p>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <div className="text-center space-y-4">
                <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
                  <Image src="/img/black-affiliate-marketing/ico-5.png" alt="Traffic Sources" width={70} height={70} />
                </div>
                <p>Traffic Sources Cheet Sheet</p>
              </div>

              <div className="text-center space-y-4">
                <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
                  <Image src="/img/black-affiliate-marketing/ico-6.avif" alt="Push Notifications" width={70} height={70} />
                </div>
                <p>Push Notifications Course</p>
              </div>

              <div className="text-center space-y-4">
                <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
                  <Image src="/img/black-affiliate-marketing/ico-7.png" alt="FB Advanced" width={70} height={70} />
                </div>
                <p>FB Advanced Level Ads Course</p>
              </div>

              <div className="text-center space-y-4">
                <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
                  <Image src="/img/black-affiliate-marketing/ico-8.avif" alt="Security" width={70} height={70} />
                </div>
                <p>Security in the Internet Instructions</p>
              </div>

              <div className="text-center space-y-4 hidden md:block">
                <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
                  <Image src="/img/black-affiliate-marketing/ico-9.png" alt="Services" width={70} height={70} />
                </div>
                <p>List of Services to use for work</p>
              </div>
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center space-y-4 md:hidden">
                <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
                  <Image src="/img/black-affiliate-marketing/ico-9.png" alt="Services" width={70} height={70} />
                </div>
                <p>List of Services to use for work</p>
              </div>

              <div className="text-center space-y-4">
                <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
                  <Image src="/img/black-affiliate-marketing/ico-10.avif" alt="Mentorship" width={70} height={70} />
                </div>
                <p>1:1 Mentorship from Stepan</p>
              </div>

              <div className="text-center space-y-4">
                <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
                  <Image src="/img/black-affiliate-marketing/ico-11.png" alt="Community" width={70} height={70} />
                </div>
                <p>Private community of like-minded hustlers, that will help you to scale and get your first payout</p>
              </div>

              <div className="text-center space-y-4">
                <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
                  <Image src="/img/black-affiliate-marketing/ico-12.avif" alt="Examples" width={70} height={70} />
                </div>
                <p>Examples of pre-landers, exclusive offers, direct introductions, examples of creatives</p>
              </div>

              <div className="text-center space-y-4 col-span-2 md:col-span-1">
                <div className="bg-gray-50 rounded-full p-6 mx-auto w-fit">
                  <Image src="/img/black-affiliate-marketing/ico-13.png" alt="Ability to get Hired" width={70} height={70} />
                </div>
                <p>Ability to get Hired, and Ability to WIN $5k</p>
              </div>
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
          This Fundamental <span className="text-red-600">3-Phase System Will Transform Your Approach</span> To
          Getting Paper & Make You MATRIX-PROOF
          </h2>

          <h2 className={sectionHeaderClass}>
            Let's Cut The Shit.
          </h2>

          <p className="text-xl md:text-2xl mx-auto">
            Follow This And You Will Become More Successful Than The People You See Online.
          </p>

          {/* Timeline */}
          <div className="!mt-14 relative">

            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-600 md:block hidden" />
            
            {/* Learn the Skill */}
            <div className="relative flex flex-col md:flex-row items-center mb-12 md:mb-32">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-black md:block hidden" />
              <div className='md:pr-16'>
                <div className="w-full md:w-1/2  bg-white text-black p-6 rounded-xl">
                  <div className="mb-8 flex justify-center md:justify-start">
                    <Image 
                      src="/img/black-affiliate-marketing/community-icon-1.webp" 
                      alt="Learn" 
                      width={80} 
                      height={80} 
                    />
                  </div>
                  <h3 className="text-4xl font-bold mb-4 text-center md:text-left">Learn the Skill</h3>
                  <p className="text-lg text-center md:text-left">
                    Complete the lessons, pass a test, launch your first campaigns, get your first conversions and optimize your traffic. 
                    <span className="text-red-500"> Learn the advanced techniques, get unique offers and make</span> your first few grands net profit.
                  </p>
                </div>
              </div>
            </div>

            {/* Join the Community */}
            <div className="relative flex flex-col md:flex-row items-center mb-12 md:mb-32">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-black md:block hidden" />
              <div className='md:pl-16'>
                <div className="w-full md:w-1/2 md:ml-auto md:pl-16 bg-white text-black p-6 rounded-xl">
                  <div className="mb-8 flex justify-center md:justify-start">
                    <Image 
                      src="/img/black-affiliate-marketing/community-icon-2.webp" 
                      alt="Community" 
                      width={80} 
                      height={80} 
                    />
                  </div>
                  <h3 className="text-4xl font-bold mb-4 text-center md:text-left">Join the Community</h3>
                  <p className="text-lg text-center md:text-left">
                    Meet like-minded people, who are also launching their ads and testing campaigns. 
                    <span className="text-red-500"> From complete beginners to a few great media buyers, to share knowledge and results.</span> 
                    Qualify for the affiliate tournament, join the team and drive huge volumes of traffic, test your creatives and funnels 5X faster.
                  </p>
                  </div>
              </div>
            </div>

            {/* Start a Legit Online Business */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-black md:block hidden" />
              <div className='md:pr-16'>
                <div className="w-full md:w-1/2 md:pr-16 bg-white text-black p-6 rounded-xl">
                  <div className="mb-8 flex justify-center md:justify-start">
                    <Image 
                      src="/img/black-affiliate-marketing/community-icon-3.webp" 
                      alt="Business" 
                      width={80} 
                      height={80} 
                    />
                  </div>
                  <h3 className="text-4xl font-bold mb-4 text-center md:text-left">Start a Legit Online Business</h3>
                  <p className="text-lg text-center md:text-left">
                    As you scale with your ad spend, work with better offers, register a company, list the services of 
                    <span className="text-red-500"> digital marketing, landing creation, design, funnel-building, private consultations</span> 
                    for other agencies if you will. Automate the processes and go out there enjoy yourself! There is more to life than just work 😊
                    </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 animate-bounce !mt-10">
            <Link href="/black-affiliate-marketing/form" className="bg-red-800 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 uppercase">
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
            <div className="md:w-2/5">
              <VideoPlayer videoUrl="/img/black-affiliate-marketing/video-1.mp4" />
            </div>
            <div className=" md:w-2/3">
              <VideoPlayer videoUrl="/img/black-affiliate-marketing/video-2.mp4" />
            </div>
            <div className="aspect-[4/5] md:w-2/5">
              <VideoPlayer videoUrl="/img/black-affiliate-marketing/video-3.mp4" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="space-y-4">
              <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-1.jpg')}>
                <Image src="/img/black-affiliate-marketing/testimonial-1.jpg" alt="1" width={500} height={176} />
              </div>
              <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-8.jpg')}>
                <Image src="/img/black-affiliate-marketing/testimonial-8.jpg" alt="8" width={490} height={460} />
              </div>
              <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-3.jpg')}>
                <Image src="/img/black-affiliate-marketing/testimonial-3.jpg" alt="3" width={500} height={176} />
              </div>
            </div>
            <div className="space-y-4 ">
              <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-4.jpg')}>
                <Image src="/img/black-affiliate-marketing/testimonial-4.jpg" alt="4" width={896} height={515} />
              </div>
              <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-5.jpg')}>
                <Image src="/img/black-affiliate-marketing/testimonial-5.jpg" alt="5" width={952} height={296} />
              </div>
              <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-2.jpg')}>
                <Image src="/img/black-affiliate-marketing/testimonial-2.jpg" alt="2" width={500} height={176} />
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-7.jpg')}>
                <Image src="/img/black-affiliate-marketing/testimonial-7.jpg" alt="7" width={489} height={493} />
              </div>
              <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-6.png')}>
                <Image src="/img/black-affiliate-marketing/testimonial-6.png" alt="6" width={1656} height={458} />
              </div>
              <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-9.jpg')}>
                <Image src="/img/black-affiliate-marketing/testimonial-9.jpg" alt="9" width={500} height={176} />
              </div>
            </div>
          </div>
        </section>

         

        {/* Pricing Packages Section */}
        <section className="mt-20 max-w-7xl mx-auto px-4">
          <h2 className={sectionHeaderClass}>
            Choose Your Path to Success
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Basic Package */}
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 group">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <p className="text-gray-400 mb-8 h-12">Your Gateway to Affiliate Success Starts Here</p>
              
              <div className="text-5xl font-bold mb-8 group-hover:text-red-500 transition-colors">$499</div>
              
               <div className="mt-6 mb-8 text-center">
                <Link href="/black-affiliate-marketing/form" className="w-full bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-colors">
                  BUY NOW
                </Link>
              </div>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Push ads academy
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Basic affiliate marketing knowledge
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Working with affiliate networks
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Online marketing principles
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Manuals on how to work with different tools
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Traffic sources sheet
                </li>
              </ul>
            </div>

            {/* Black Affiliate Package */}
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 group">
              <h3 className="text-2xl font-bold mb-2">Black Affiliate</h3>
              <p className="text-gray-400 mb-8 h-12">Become a Black Belt in Affiliate Marketing</p>
              
              <div className="text-5xl font-bold mb-8 group-hover:text-red-500 transition-colors">$999</div>
              
              <div className="mt-6 mb-8 text-center">
                <Link href="/black-affiliate-marketing/form" className="w-full bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-colors">
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

            {/* Pro Package */}
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 group">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-gray-400 mb-8 h-12">Master Affiliate Marketing with Pro Mentorship</p>
              
              <div className="text-5xl font-bold mb-8 group-hover:text-red-500 transition-colors">$2499</div>
              
               <div className="mt-6 mb-8 text-center">
                <Link href="/black-affiliate-marketing/form" className="w-full bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-colors">
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
              
              <div className="text-5xl font-bold mb-8 group-hover:text-red-500 transition-colors">$4999</div>
              
               <div className="mt-6 mb-8 text-center">
                <Link href="/black-affiliate-marketing/form" className="w-full bg-red-800 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-colors">
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
            {[
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
                answer: "I've done thousands of tests in order to get to what really works and build the whole system around it, the pricing is reasonable, considering I've spent more than $100k and teaching you for $1k, and higher plans cost more because I invest a lot of my time to help you."
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
            ].map((faq, index) => (
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
                  <Link href="/black-affiliate-marketing/form" className="bg-red-800 hover:bg-red-700 text-white py-4 px-8 rounded-lg inline-block transition-colors">
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
                          priority
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

