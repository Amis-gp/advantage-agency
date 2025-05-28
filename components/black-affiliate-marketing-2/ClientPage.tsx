"use client"

import { useState } from 'react'
import dynamic from 'next/dynamic'

// Динамічний імпорт компонентів для кращої швидкодії
const Hero = dynamic(() => import('@/components/black-affiliate-marketing-2/Hero'), { ssr: true })
const CourseTargetSection = dynamic(() => import('@/components/black-affiliate-marketing-2/CourseTargetSection'), { ssr: true })
const MentorSection = dynamic(() => import('@/components/black-affiliate-marketing-2/MentorSection'), { ssr: true })
const TestimonialsSection = dynamic(() => import('@/components/black-affiliate-marketing-2/TestimonialsSection'), { ssr: true })
const PricingSection = dynamic(() => import('@/components/black-affiliate-marketing-2/PricingSection'), { ssr: true })
const FaqSection = dynamic(() => import('@/components/black-affiliate-marketing-2/FaqSection'), { ssr: true })
const ProvidingSection = dynamic(() => import('@/components/black-affiliate-marketing-2/ProvidingSection'), { ssr: true })
const PhaseSystemSection = dynamic(() => import('@/components/black-affiliate-marketing-2/PhaseSystemSection'), { ssr: true })
const StorySection = dynamic(() => import('@/components/black-affiliate-marketing-2/StorySection'), { ssr: true })
const TwoOptionsSection = dynamic(() => import('@/components/black-affiliate-marketing-2/TwoOptionsSection'), { ssr: true })
const VideoPlayer = dynamic(() => import('@/components/black-affiliate-marketing-2/VideoPlayer'), { ssr: true })
const ImageModal = dynamic(() => import('@/components/black-affiliate-marketing-2/ImageModal'), { ssr: true })

export default function ClientPage() {
  // Стан для керування модальним вікном зображень
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')
  
  // Масив зображень для модального вікна
  const testimonialImages = [
    '/img/black-affiliate-marketing/testimonial-1.jpg',
    '/img/black-affiliate-marketing/testimonial-2.jpg',
    '/img/black-affiliate-marketing/testimonial-3.jpg',
    '/img/black-affiliate-marketing/testimonial-4.jpg',
    '/img/black-affiliate-marketing/testimonial-5.jpg',
  ]
  
  // Функція для відкриття модального вікна з зображенням
  const openImage = (image: string) => {
    setSelectedImage(image)
    setIsImageModalOpen(true)
  }
  
  // Функція для закриття модального вікна
  const closeImageModal = () => {
    setIsImageModalOpen(false)
  }
  
  // URL відео для VideoPlayer
  const videoUrl = 'https://example.com/video.mp4' // Замініть на реальний URL відео
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <CourseTargetSection />
      <MentorSection />
      <TestimonialsSection openImage={openImage} />
      <PricingSection />
      <ProvidingSection />
      <PhaseSystemSection />
      <StorySection />
      <TwoOptionsSection />
      <FaqSection />
      <ImageModal 
        isOpen={isImageModalOpen} 
        onClose={closeImageModal} 
        selectedImage={selectedImage} 
        images={testimonialImages} 
      />
    </div>
  )
}
