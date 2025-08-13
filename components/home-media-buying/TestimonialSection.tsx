'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useTransform, useScroll, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { playSound } from '@/app/constant/sound';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

interface Review {
    title: string;
    text: string;
    author: string;
    daysAgo: string;
    rating: string;
}

interface ModalProps {
    review: Review;
    isOpen: boolean;
    onClose: () => void;
}

const ReviewModal = ({ review, isOpen, onClose }: ModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 text-black font-roboto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div 
                        className="bg-white p-8 rounded-2xl max-w-lg w-full font-roboto relative"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="mb-4">
                            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 5.13281C6.75 5.13281 0 11.8828 0 20.1328V35.1328H15V20.1328H5C5 14.5828 9.45 10.1328 15 10.1328V5.13281ZM34 5.13281C25.75 5.13281 19 11.8828 19 20.1328V35.1328H34V20.1328H24C24 14.5828 28.45 10.1328 34 10.1328V5.13281Z" fill="#219653"/>
                            </svg>
                        </div>
                        <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-[#b0b0b0] hover:text-[#219653]/60">
                                ✕
                            </button>
                        <h3 className="text-2xl font-medium mb-4">{review.title}</h3>
                        <div className="flex items-center gap-1 mb-4">
                            {[...Array(Number(review.rating))].map((_, i) => (
                                <svg key={`filled-${i}`} width="16" height="16" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" transform="translate(0 0.632812)" fill="#219653"/>
                                    <path d="M16 22.9347L21.2143 21.5385L23.3929 28.6328L16 22.9347ZM28 13.7649H18.8214L16 4.63281L13.1786 13.7649H4L11.4286 19.4253L8.60714 28.5573L16.0357 22.897L20.6071 19.4253L28 13.7649Z" fill="#FBFBFB"/>
                                </svg>
                            ))}
                            {[...Array(5 - Number(review.rating))].map((_, i) => (
                                <svg key={`empty-${i}`} width="16" height="16" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" transform="translate(0 0.632812)" fill="#dcdce6"/>
                                    <path d="M16 22.9347L21.2143 21.5385L23.3929 28.6328L16 22.9347ZM28 13.7649H18.8214L16 4.63281L13.1786 13.7649H4L11.4286 19.4253L8.60714 28.5573L16.0357 22.897L20.6071 19.4253L28 13.7649Z" fill="#FBFBFB"/>
                                </svg>
                            ))}
                            <span className="text-sm ml-2 font-light">{review.daysAgo}</span>
                        </div>
                        <p className="text-base mb-6 whitespace-pre-line">{review.text}</p>
                        <hr className="my-4 border-t border-[#d9d9d9]" />
                        <p className="font-semibold">{review.author}</p>
                        
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default function TestimonialSection() {
    const t = useTranslations('testimonial');
    const { scrollY } = useScroll();
    const rotate2 = useTransform(scrollY, [0, 3000], [0, -360]);
    
    // Anonymous reviews due to NDA agreements
    const reviews: Review[] = [
        {
            title: "Exceptional Casino Growth Results",
            text: "ADvantage scaled our casino brand in Europe with 15k FTDs in 3 months! Their media buying expertise and traffic optimization strategies exceeded our expectations. The team's professionalism and results-driven approach made them our go-to partner for expansion.",
            author: "Anonymous, iGaming Brand",
            daysAgo: "2 days ago",
            rating: "5"
        },
        {
            title: "Crypto Project Success",
            text: "ADvantage helped us launch our crypto project with incredible results. Their team navigated complex regulations while delivering high-quality traffic and conversions. Professional, reliable, and results-oriented.",
            author: "Anonymous, Crypto Startup",
            daysAgo: "3 weeks ago",
            rating: "5"
        },
        {
            title: "E-commerce Scale Achievement",
            text: "Our e-commerce brand saw 400% growth in 6 months thanks to ADvantage's strategic approach. They optimized our funnels and traffic sources perfectly. Highly recommend for serious scaling.",
            author: "Anonymous, E-commerce Brand",
            daysAgo: "1 week ago",
            rating: "5"
        },
        {
            title: "Fintech Campaign Excellence",
            text: "ADvantage delivered exceptional results for our fintech product launch. Their expertise in compliance and performance marketing helped us achieve our KPIs ahead of schedule.",
            author: "Anonymous, Fintech Company",
            daysAgo: "2 weeks ago",
            rating: "5"
        }
    ];
    const [selectedReview, setSelectedReview] = useState<Review | null>(null);

    return (
        <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black py-6 md:py-16 relative overflow-hidden"
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="relative flex flex-col md:flex-row justify-between mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-red-500 uppercase tracking-wider">{t('headline')}</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2">{t('title')}</h2>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="md:flex gap-4 hidden"
                    >
                        <button 
                            className="testimonial-prev w-[60px] h-[60px] rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 active:scale-90"
                            onClick={() => playSound('click')}
                        >
                            ←
                        </button>
                        <button 
                            className="testimonial-next w-[60px] h-[60px] rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 active:scale-90"
                            onClick={() => playSound('click')}
                        >
                            →
                        </button>
                    </motion.div>
                </div>

                <div className="bg-white rounded-2xl p-6 inline-block !pr-20 font-roboto">
                    <div className="flex items-end gap-2">
                        <span className="text-lg font-semibold text-black">Client Reviews</span>
                        <span className="text-sm md:text-base !leading-none text-[#219653]">{reviews.length} anonymous reviews</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-xl font-semibold text-[#219653]">5.0</span>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map(star => (
                                <svg key={`rating-${star}`} width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" transform="translate(0 0.632812)" fill="#219653"/>
                                    <path d="M16 22.9347L21.2143 21.5385L23.3929 28.6328L16 22.9347ZM28 13.7649H18.8214L16 4.63281L13.1786 13.7649H4L11.4286 19.4253L8.60714 28.5573L16.0357 22.897L20.6071 19.4253L28 13.7649Z" fill="#FBFBFB"/>
                                </svg>
                            ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">*NDA Protected</span>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={40}
                        slidesPerView="auto"
                        loop={true}
                        navigation={{
                            prevEl: '.testimonial-prev',
                            nextEl: '.testimonial-next',
                        }}
                        className="testimonials-swiper !-ml-2 !pl-2"
                    >
                        {reviews?.map((review, index) => (
                            <SwiperSlide key={index}>
                                <div 
                                    className="bg-white p-6 my-10 rounded-2xl text-black font-roboto hover:scale-105 transition-all duration-300 cursor-pointer"
                                    onClick={() => setSelectedReview(review)}
                                >
                                    <div className="mb-4">
                                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 5.13281C6.75 5.13281 0 11.8828 0 20.1328V35.1328H15V20.1328H5C5 14.5828 9.45 10.1328 15 10.1328V5.13281ZM34 5.13281C25.75 5.13281 19 11.8828 19 20.1328V35.1328H34V20.1328H24C24 14.5828 28.45 10.1328 34 10.1328V5.13281Z" fill="#219653"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium mb-2">{review.title}</h3>
                                    <div className="flex items-center gap-1 mb-2">
                                        {[...Array(Number(review.rating))].map((_, i) => (
                                            <svg key={`filled-${i}`} width="16" height="16" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="32" height="32" transform="translate(0 0.632812)" fill="#219653"/>
                                                <path d="M16 22.9347L21.2143 21.5385L23.3929 28.6328L16 22.9347ZM28 13.7649H18.8214L16 4.63281L13.1786 13.7649H4L11.4286 19.4253L8.60714 28.5573L16.0357 22.897L20.6071 19.4253L28 13.7649Z" fill="#FBFBFB"/>
                                            </svg>
                                        ))}
                                        {[...Array(5 - Number(review.rating))].map((_, i) => (
                                            <svg key={`empty-${i}`} width="16" height="16" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="32" height="32" transform="translate(0 0.632812)" fill="#dcdce6"/>
                                                <path d="M16 22.9347L21.2143 21.5385L23.3929 28.6328L16 22.9347ZM28 13.7649H18.8214L16 4.63281L13.1786 13.7649H4L11.4286 19.4253L8.60714 28.5573L16.0357 22.897L20.6071 19.4253L28 13.7649Z" fill="#FBFBFB"/>
                                            </svg>
                                        ))}
                                        <span className="text-sm ml-2 font-light">{review.daysAgo}</span>
                                    </div>
                                    <p className="text-sm mb-4 line-clamp-2 font-light">{review.text}</p>
                                    <hr className="my-2 border-t border-[#d9d9d9]" />
                                    <p className="line-clamp-1 font-semibold">{review.author}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                <ReviewModal 
                    review={selectedReview!}
                    isOpen={!!selectedReview}
                    onClose={() => setSelectedReview(null)}
                />
            </div>
        </motion.section>
    );
}