"use client"

import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Hero from './Hero';
import CourseTargetSection from './CourseTargetSection';
import MentorSection from './MentorSection';
import StorySection from './StorySection';
import ProvidingSection from './ProvidingSection';
import PhaseSystemSection from './PhaseSystemSection';
import TestimonialsSection from './TestimonialsSection';
import PricingSection from './PricingSection';
import FaqSection from './FaqSection';
import TwoOptionsSection from './TwoOptionsSection';
import ImageModal from './ImageModal';

export default function BlackAffiliateMarketing() {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

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

  return (
    <div className="min-h-screen bg-black text-white text-center px-4 pt-10 pb-14 overflow-hidden font-sans relative">
      <div 
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-red-600/30 blur-[150px] -z-10"
        style={{ filter: 'blur(150px)' }}
      />
      
      <main className="max-w-6xl mx-auto relative z-10">
        <Hero />
        <CourseTargetSection />
        <MentorSection />
        <StorySection />
        <ProvidingSection />
        <PhaseSystemSection />
        <TestimonialsSection openImage={openImage} />
        <PricingSection />
        <FaqSection />
        <TwoOptionsSection />
      </main>

      <ImageModal 
        isOpen={isImageOpen} 
        onClose={closeImage} 
        selectedImage={selectedImage} 
        images={testimonialImages} 
      />
    </div>
  );
}
