"use client"

import React, { useState, Fragment, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import dynamic from 'next/dynamic';
import 'swiper/css';

const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });

const VideoPlayerLazy = dynamic(() => import('../black-affiliate-marketing-2/VideoPlayer'), { ssr: false, loading: () => <div className="h-[480px] w-full flex items-center justify-center bg-gray-800/40"/> });

interface TestimonialsSectionProps {
  testimonialImages: string[];
}

const TestimonialsSection = ({ testimonialImages }: TestimonialsSectionProps) => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [isSwiperLoaded, setIsSwiperLoaded] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [swiperModules, setSwiperModules] = useState<any>(null);
  const gridRef = React.useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (isImageOpen && !isSwiperLoaded) {
      import('swiper/modules').then(modules => {
        setSwiperModules([modules.Navigation, modules.Pagination]);
        setIsSwiperLoaded(true);
      });
    }
  }, [isImageOpen, isSwiperLoaded]);

  useEffect(() => {
    if (!gridRef.current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsGridVisible(true);
          observer.disconnect();
        }
      });
    }, { root: null, rootMargin: '100px', threshold: 0.01 });
    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  const openImage = useCallback((image: string) => {
    setSelectedImage(image);
    setIsImageOpen(true);
  }, []);

  const closeImage = useCallback(() => {
    setIsImageOpen(false);
  }, []);

  return (
    <section className="mt-20 max-w-6xl mx-auto relative px-2">
      <h2 className="text-5xl font-bold text-center mb-10 bg-gradient-to-r from-white via-red-400 to-gray-100 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
        Testimonials
      </h2>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
        <div className="w-full md:w-1/2">
          <VideoPlayerLazy 
            videoUrl="/img/black-affiliate-marketing/video-4.mp4" 
            placeholder="/img/black-affiliate-marketing/video-4-placeholder.webp"
            className="h-[480px]"
          />
        </div>
        <div className="w-full md:w-1/2">
          <VideoPlayerLazy 
            videoUrl="/img/black-affiliate-marketing/video-5.MP4" 
            placeholder="/img/black-affiliate-marketing/video-5-placeholder.webp"
            className="h-[480px]"
          />
        </div>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center sm:mt-4">
        {isGridVisible ? (
        <>
        <div className="space-y-4">
          <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-1.webp')}>
            <Image 
              src="/img/black-affiliate-marketing/testimonial-1.webp" 
              alt="Testimonial 1" 
              width={500} 
              height={176} 
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={60}
              fetchPriority="low"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMBCc5nT1gAAAAASUVORK5CYII="
            />
          </div>
          <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-8.webp')}>
            <Image 
              src="/img/black-affiliate-marketing/testimonial-8.webp" 
              alt="8" 
              width={490} 
              height={460} 
              loading="lazy" decoding="async"
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={60}
              fetchPriority="low"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMBCc5nT1gAAAAASUVORK5CYII="
            />
          </div>
          <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-3.webp')}>
            <Image 
              src="/img/black-affiliate-marketing/testimonial-3.webp" 
              alt="3" 
              width={500} 
              height={176} 
              loading="lazy" decoding="async"
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={60}
              fetchPriority="low"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMBCc5nT1gAAAAASUVORK5CYII="
            />
          </div>
        </div>
        <div className="space-y-4 ">
          <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-4.webp')}>
            <Image 
              src="/img/black-affiliate-marketing/testimonial-4.webp" 
              alt="4" 
              width={896} 
              height={515} 
              loading="lazy" decoding="async"
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={60}
              fetchPriority="low"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMBCc5nT1gAAAAASUVORK5CYII="
            />
          </div>
          <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-5.webp')}>
            <Image 
              src="/img/black-affiliate-marketing/testimonial-5.webp" 
              alt="5" 
              width={952} 
              height={296} 
              loading="lazy" decoding="async"
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={60}
              fetchPriority="low"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMBCc5nT1gAAAAASUVORK5CYII="
            />
          </div>
          <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-2.webp')}>
            <Image 
              src="/img/black-affiliate-marketing/testimonial-2.webp" 
              alt="2" 
              width={500} 
              height={176} 
              loading="lazy" decoding="async"
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={60}
              fetchPriority="low"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMBCc5nT1gAAAAASUVORK5CYII="
            />
          </div>
        </div>
        <div className="space-y-4">
          <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-7.webp')}>
            <Image 
              src="/img/black-affiliate-marketing/testimonial-7.webp" 
              alt="7" 
              width={489} 
              height={493} 
              loading="lazy" decoding="async"
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={60}
              fetchPriority="low"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMBCc5nT1gAAAAASUVORK5CYII="
            />
          </div>
          <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-6.webp')}>
            <Image 
              src="/img/black-affiliate-marketing/testimonial-6.webp" 
              alt="6" 
              width={1656} 
              height={458} 
              loading="lazy" decoding="async"
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={60}
              fetchPriority="low"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMBCc5nT1gAAAAASUVORK5CYII="
            />
          </div>
          <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openImage('/img/black-affiliate-marketing/testimonial-9.webp')}>
            <Image 
              src="/img/black-affiliate-marketing/testimonial-9.webp" 
              alt="9" 
              width={500} 
              height={176} 
              loading="lazy" decoding="async"
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={60}
              fetchPriority="low"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMBCc5nT1gAAAAASUVORK5CYII="
            />
          </div>
        </div>
        </>
        ) : (
          <div className="col-span-3 h-[600px] flex items-center justify-center">
            <div className="animate-pulse text-gray-500">Loading testimonials...</div>
          </div>
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
                  {(isImageOpen && isSwiperLoaded && swiperModules) ? (
                    <Swiper
                      modules={swiperModules}
                      spaceBetween={20}
                      slidesPerView={1}
                      loop={true}
                      initialSlide={testimonialImages.indexOf(selectedImage)}
                      className="h-full w-full"
                    >
                      {testimonialImages.map((image, index) => (
                        <SwiperSlide key={index}>
                          <div className="relative h-full w-full">
                            <Image
                              src={image}
                              alt={`Testimonial ${index + 1}`}
                              fill
                              className="object-contain"
                              loading="lazy"
                              onLoad={(event) => {
                                const target = event.target as HTMLImageElement;
                                if (target.complete) target.classList.remove('opacity-0');
                              }}
                              style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
                              onLoadingComplete={(img) => {
                                img.style.opacity = '1';
                              }}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gray-800">
                      <div className="animate-pulse bg-gray-700 h-4/5 w-4/5 rounded opacity-30"></div>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </section>
  );
};

export default TestimonialsSection;
