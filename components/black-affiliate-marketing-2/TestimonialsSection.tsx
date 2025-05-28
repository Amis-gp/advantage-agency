"use client"

import React, { useState, Fragment, useCallback, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import dynamic from 'next/dynamic';

// Предзавантаження Swiper з кращою обробкою помилок
const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { 
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
    </div>
  )
});
const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });

import { Navigation, Pagination } from 'swiper/modules';
import VideoPlayer from './VideoPlayer';

interface TestimonialsSectionProps {
  testimonialImages: string[];
}

// Оптимізовані розміри зображень для різних пристроїв
const getOptimizedImageSizes = (width: number, height: number) => {
  return {
    mobile: { width: Math.min(width, 400), height: Math.min(height, 300) },
    tablet: { width: Math.min(width, 600), height: Math.min(height, 450) },
    desktop: { width, height }
  };
};

const TestimonialsSection = ({ testimonialImages }: TestimonialsSectionProps) => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [isSwiperLoaded, setIsSwiperLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  
  // Предзавантаження критичних зображень
  useEffect(() => {
    const preloadCriticalImages = () => {
      // Завантажуємо тільки перші 3 зображення для швидшого відображення
      testimonialImages.slice(0, 3).forEach(src => {
        const img = new window.Image();
        img.src = src;
        img.onload = () => {
          setLoadedImages(prev => prev.includes(src) ? prev : [...prev, src]);
        };
      });
    };

    preloadCriticalImages();
  }, [testimonialImages]);

  useEffect(() => {
    if (isImageOpen && !isSwiperLoaded) {
      setIsSwiperLoaded(true);
    }
  }, [isImageOpen, isSwiperLoaded]);

  const openImage = useCallback((image: string) => {
    setSelectedImage(image);
    setIsImageOpen(true);
  }, []);

  const closeImage = useCallback(() => {
    setIsImageOpen(false);
  }, []);

  // Мемоізуємо конфігурацію зображень
  const imageConfigs = useMemo(() => [
    { src: '/img/black-affiliate-marketing/testimonial-1.webp', alt: 'Testimonial 1', width: 500, height: 176, priority: false },
    { src: '/img/black-affiliate-marketing/testimonial-8.webp', alt: '8', width: 490, height: 460, priority: false },
    { src: '/img/black-affiliate-marketing/testimonial-3.webp', alt: '3', width: 500, height: 176, priority: false },
    { src: '/img/black-affiliate-marketing/testimonial-4.webp', alt: '4', width: 896, height: 515, priority: false },
    { src: '/img/black-affiliate-marketing/testimonial-5.webp', alt: '5', width: 952, height: 296, priority: false },
    { src: '/img/black-affiliate-marketing/testimonial-2.webp', alt: '2', width: 500, height: 176, priority: false },
    { src: '/img/black-affiliate-marketing/testimonial-7.webp', alt: '7', width: 489, height: 493, priority: false },
    { src: '/img/black-affiliate-marketing/testimonial-6.webp', alt: '6', width: 1656, height: 458, priority: false },
    { src: '/img/black-affiliate-marketing/testimonial-9.webp', alt: '9', width: 500, height: 176, priority: false }
  ], []);

  // Компонент для оптимізованого зображення
  const OptimizedImage = ({ config, onClick, className = "" }: { 
    config: typeof imageConfigs[0], 
    onClick: () => void,
    className?: string 
  }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const isLoaded = loadedImages.includes(config.src) || imageLoaded;

    return (
      <div 
        className={`relative cursor-pointer transition-all duration-300 hover:scale-105 ${className}`}
        onClick={onClick}
      >
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse rounded" />
        )}
        <Image 
          src={config.src}
          alt={config.alt}
          width={config.width}
          height={config.height}
          loading={config.priority ? "eager" : "lazy"}
          priority={config.priority}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          onLoad={() => setImageLoaded(true)}
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    );
  };

  return (
    <section className="mt-20 max-w-6xl mx-auto relative px-2">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-white via-red-400 to-gray-100 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
        Testimonials
      </h2>

      {/* Відео секція з кращою адаптивністю */}
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">
        <div className="w-full md:w-2/5 h-[250px] sm:h-[300px] lg:h-[360px]">
          <VideoPlayer 
            videoUrl="/img/black-affiliate-marketing/video-1.mp4" 
            className="h-full" 
            placeholder="/img/black-affiliate-marketing/video-1-placeholder.webp" 
          />
        </div>
        <div className="w-full md:w-2/3 h-[250px] sm:h-[300px] lg:h-[360px]">
          <VideoPlayer 
            videoUrl="/img/black-affiliate-marketing/video-2.mp4" 
            className="h-full" 
            placeholder="/img/black-affiliate-marketing/video-2-placeholder.webp"
          />
        </div>
        <div className="w-full md:w-2/5 h-[250px] sm:h-[300px] lg:h-[360px] aspect-[4/5]">
          <VideoPlayer 
            videoUrl="/img/black-affiliate-marketing/video-3.mp4" 
            className="h-full" 
            placeholder="/img/black-affiliate-marketing/video-3-placeholder.webp"
          />
        </div>
      </div>

      {/* Оптимізована сітка зображень */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
        {/* Колонка 1 */}
        <div className="space-y-4">
          <OptimizedImage 
            config={imageConfigs[0]} 
            onClick={() => openImage(imageConfigs[0].src)} 
          />
          <OptimizedImage 
            config={imageConfigs[1]} 
            onClick={() => openImage(imageConfigs[1].src)} 
          />
          <OptimizedImage 
            config={imageConfigs[2]} 
            onClick={() => openImage(imageConfigs[2].src)} 
          />
        </div>

        {/* Колонка 2 */}
        <div className="space-y-4">
          <OptimizedImage 
            config={imageConfigs[3]} 
            onClick={() => openImage(imageConfigs[3].src)} 
          />
          <OptimizedImage 
            config={imageConfigs[4]} 
            onClick={() => openImage(imageConfigs[4].src)} 
          />
          <OptimizedImage 
            config={imageConfigs[5]} 
            onClick={() => openImage(imageConfigs[5].src)} 
          />
        </div>

        {/* Колонка 3 */}
        <div className="space-y-4">
          <OptimizedImage 
            config={imageConfigs[6]} 
            onClick={() => openImage(imageConfigs[6].src)} 
          />
          <OptimizedImage 
            config={imageConfigs[7]} 
            onClick={() => openImage(imageConfigs[7].src)} 
          />
          <OptimizedImage 
            config={imageConfigs[8]} 
            onClick={() => openImage(imageConfigs[8].src)} 
          />
        </div>
      </div>

      {/* Оптимізоване модальне вікно */}
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
            <div className="fixed inset-0 bg-black/90" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
              <Dialog.Panel className="relative max-w-5xl w-full">
                <button
                  onClick={closeImage}
                  className="absolute -top-8 sm:-top-12 right-0 text-white text-4xl sm:text-6xl hover:text-gray-300 transition-colors z-50 touch-manipulation"
                  aria-label="Закрити"
                >
                  ×
                </button>
                
                <div className="relative h-[70vh] sm:h-[80vh]">
                  {(isImageOpen && isSwiperLoaded) ? (
                    <Swiper
                      modules={[Navigation, Pagination]}
                      spaceBetween={20}
                      slidesPerView={1}
                      loop={true}
                      initialSlide={testimonialImages.indexOf(selectedImage)}
                      className="h-full w-full"
                      navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                      }}
                      pagination={{
                        clickable: true,
                        el: '.swiper-pagination'
                      }}
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
                              sizes="(max-width: 768px) 100vw, 80vw"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                      
                      {/* Кастомні кнопки навігації */}
                      <div className="swiper-button-prev !text-white !text-2xl sm:!text-4xl !w-8 !h-8 sm:!w-12 sm:!h-12"></div>
                      <div className="swiper-button-next !text-white !text-2xl sm:!text-4xl !w-8 !h-8 sm:!w-12 sm:!h-12"></div>
                      <div className="swiper-pagination !bottom-4"></div>
                    </Swiper>
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gray-900">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
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