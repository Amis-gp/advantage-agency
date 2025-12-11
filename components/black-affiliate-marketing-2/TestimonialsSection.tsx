"use client"

import React, { useState, Fragment, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('./VideoPlayer'), { ssr: false, loading: () => <div className="h-[480px] w-full flex items-center justify-center"/> });

const testimonialImages = [
  '/img/black-affiliate-marketing/testimonial-1.webp',
  '/img/black-affiliate-marketing/testimonial-2.webp',
  '/img/black-affiliate-marketing/testimonial-3.webp',
  '/img/black-affiliate-marketing/testimonial-4.webp',
  '/img/black-affiliate-marketing/testimonial-5.webp',
  '/img/black-affiliate-marketing/testimonial-6.webp',
  '/img/black-affiliate-marketing/testimonial-7.webp',
  '/img/black-affiliate-marketing/testimonial-8.webp',
  '/img/black-affiliate-marketing/testimonial-9.webp'
];

const TestimonialsSection = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const gridRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsGridVisible(true);
          observer.disconnect();
        }
      });
    }, { root: null, rootMargin: '200px', threshold: 0.01 });
    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  const openImage = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setIsImageOpen(true);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % testimonialImages.length);
  }, [testimonialImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length);
  }, [testimonialImages.length]);

  const closeImage = useCallback(() => {
    setIsImageOpen(false);
  }, []);

  return (
    <>
    <section className="mt-20 max-w-6xl mx-auto relative px-2">
      <h2 className="text-5xl font-bold text-center mb-10 bg-gradient-to-r from-white via-red-400 to-gray-100 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
        Testimonials
      </h2>

      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
        <div className="w-full md:w-2/5 mb-4 md:mb-0 self-start md:self-center">
          <div style={{ padding: '177.78% 0 0 0', position: 'relative' }} className="rounded-md overflow-hidden">
            <iframe 
              src="https://player.vimeo.com/video/878742669?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&transparent=0&dnt=1&playsinline=1&autopause=0&quality=720p&controls=1" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
              title="video 1"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 mb-4 md:mb-0 flex items-center justify-center h-full">
          <div style={{ padding: '56.25% 0 0 0', position: 'relative' }} className="rounded-md overflow-hidden w-full">
            <iframe 
              src="https://player.vimeo.com/video/881769577?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&transparent=0&dnt=1&playsinline=1&autopause=0&quality=720p&controls=1" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
              title="video 2"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full md:w-2/5 mb-4 md:mb-0 self-start md:self-center">
          <div style={{ padding: '182.76% 0 0 0', position: 'relative' }} className="rounded-md overflow-hidden">
            <iframe 
              src="https://player.vimeo.com/video/879409981?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&transparent=0&dnt=1&playsinline=1&autopause=0&quality=720p&controls=1" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
              title="video 3"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
        <div className="w-full md:w-1/3">
          <VideoPlayer 
            videoUrl="/img/black-affiliate-marketing/video-4.mp4" 
            placeholder="/img/black-affiliate-marketing/video-4-placeholder.webp"
            className="h-[480px]"
          />
        </div>
        <div className="w-full md:w-1/3">
          <VideoPlayer 
            videoUrl="/img/black-affiliate-marketing/video-5.MP4" 
            placeholder="/img/black-affiliate-marketing/video-5-placeholder.webp"
            className="h-[480px]"
          />
        </div>
        <div className="w-full md:w-1/3">
          <VideoPlayer 
            videoUrl="/img/black-affiliate-marketing/video-6.mp4" 
            placeholder="/img/black-affiliate-marketing/video-6-placeholder.webp"
            className="h-[480px]"
          />
        </div>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center sm:mt-4">
        {isGridVisible && (
        <>
        <div className="space-y-4">
          <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage(0)}>
            <Image 
              src="/img/black-affiliate-marketing/testimonial-1.webp" 
              alt="Testimonial 1" 
              width={500} 
              height={176} 
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage(7)}>
            <Image 
              src="/img/black-affiliate-marketing/testimonial-8.webp" 
              alt="8" 
              width={490} 
              height={460} 
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage(2)}>
            <Image 
              src="/img/black-affiliate-marketing/testimonial-3.webp" 
              alt="3" 
              width={500} 
              height={176} 
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
        <div className="space-y-4 ">
          <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage(3)}>
            <Image 
              src="/img/black-affiliate-marketing/testimonial-4.webp" 
              alt="4" 
              width={896} 
              height={515} 
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage(4)}>
            <Image 
              src="/img/black-affiliate-marketing/testimonial-5.webp" 
              alt="5" 
              width={952} 
              height={296} 
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage(1)}>
            <Image 
              src="/img/black-affiliate-marketing/testimonial-2.webp" 
              alt="2" 
              width={500} 
              height={176} 
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
        <div className="space-y-4">
          <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage(6)}>
            <Image 
              src="/img/black-affiliate-marketing/testimonial-7.webp" 
              alt="7" 
              width={489} 
              height={493} 
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage(5)}>
            <Image 
              src="/img/black-affiliate-marketing/testimonial-6.webp" 
              alt="6" 
              width={1656} 
              height={458} 
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage(8)}>
            <Image 
              src="/img/black-affiliate-marketing/testimonial-9.webp" 
              alt="9" 
              width={500} 
              height={176} 
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
        </>
        )}
      </div>

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
                  <div className="relative h-full w-full">
                    <Image
                      src={testimonialImages[currentImageIndex]}
                      alt={`Testimonial ${currentImageIndex + 1}`}
                      fill
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                  
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
                    {currentImageIndex + 1} / {testimonialImages.length}
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </section>
    </>
  );
};

export default TestimonialsSection;
