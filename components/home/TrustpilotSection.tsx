'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';
import { playSound } from '@/app/constant/sound';

export default function TestimonialSection() {
    const t = useTranslations('testimonial');
    const [currentSlide, setCurrentSlide] = useState(0);
    const { scrollY } = useScroll();
    const rotate2 = useTransform(scrollY, [0, 3000], [0, -360]);
    
    const reviews = [
        {
            text: "I love this product because the support is great. Pie ...",
            author: "Worldtraveler",
            rating: 5,
            date: "2 days ago"
        },
        // Add more reviews...
    ];

    const handlePrev = () => {
        playSound('click');
        setCurrentSlide(prev => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    const handleNext = () => {
        playSound('click');
        setCurrentSlide(prev => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="bg-black py-20 md:py-32 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="relative">
                    <span className="text-red uppercase tracking-wider">{t('headline')}</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-10">{t('title')}</h2>

                    <motion.div className="absolute top-0 right-10" style={{ rotate: rotate2 }}>
                        <Image src="/img/home/star.svg" alt="Star" width={64} height={64} loading="lazy" priority={false} />
                    </motion.div>
                </div>

                <div className="flex items-start gap-10">
                    <div className="bg-white rounded-2xl p-6">
                        <Image src="/img/home/trustpilot.svg" alt="Trustpilot" width={100} height={20} />
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-2xl font-bold">5.0</span>
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <Image 
                                        key={star} 
                                        src="/img/home/star-green.svg" 
                                        alt="Star" 
                                        width={20} 
                                        height={20} 
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-gray-500">2345 Reviews</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
                    {reviews.slice(currentSlide, currentSlide + 4).map((review, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl">
                            <div className="flex items-center gap-2 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Image 
                                        key={i} 
                                        src="/img/home/star-green.svg" 
                                        alt="Star" 
                                        width={20} 
                                        height={20} 
                                    />
                                ))}
                                <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                            </div>
                            <p className="text-lg mb-4">{review.text}</p>
                            <p className="font-semibold">{review.author}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-end gap-4 mt-6">
                    <button 
                        onClick={handlePrev}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                        onMouseEnter={() => playSound('hover_1')}
                    >
                        <span className="transform rotate-180">→</span>
                    </button>
                    <button 
                        onClick={handleNext}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                        onMouseEnter={() => playSound('hover_1')}
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}