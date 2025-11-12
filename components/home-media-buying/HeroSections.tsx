'use client';
import { useState, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { playSound } from '@/app/constant/sound';
import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('@/components/black-affiliate-marketing-2/VideoPlayer'), {
    ssr: false,
    loading: () => <div className="aspect-video bg-black/40 flex items-center justify-center rounded-2xl md:rounded-3xl"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"/></div>
});

const videoSources = {
    uk: {
        full: '/img/media-buying/vsl.mp4',
        preview: '/img/media-buying/preview-vsl.webp'
    },
    en: {
        full: '/img/media-buying/vsl.mp4',
        preview: '/img/media-buying/preview-vsl.webp'
    }
};

export default function HeroSection() {
    const t = useTranslations();
    const locale = useLocale();
    const { scrollY } = useScroll();
    const rotate1 = useTransform(scrollY, [0, 3000], [0, 360]);
    const rotate2 = useTransform(scrollY, [0, 3000], [0, -360]);

    return (
        <section className="px-6 relative" id="hero">
            <div className="absolute top-28 -left-40 xl:left-10 w-64 h-64">
                <Image src="/img/home/gradient-ball-1.svg" className="animate-float opacity-40" alt="Decorative lines" width={726} height={726}/>
            </div>
            <div className="absolute top-2/3 -left-40 xl:left-10 w-64 h-64">
                <motion.div className="hidden xl:block absolute" >
                    <Image src="/img/media-buying/icon6.png" alt="Star" width={64} height={64} className='opacity-40'/>
                </motion.div>
            </div>

            <div className="absolute -rotate-12 sm:rotate-0 -top-20 -right-52 sm:-top-80 sm:-right-80 w-[426px] h-[426px] sm:w-[726px] sm:h-[726px] opacity-40">
                <Image src="/img/home/lines.svg" alt="Decorative lines" width={726} height={726} priority/>
            </div>

            <motion.div className="absolute top-20 right-4 xl:right-16  w-8 h-8 xl:w-auto xl:h-auto" style={{ rotate: rotate2 }}>
                
                <Image src="/img/media-buying/icon4.png" alt="icon" width={64} height={64} className=" invert"/>
            </motion.div>

            <div className="absolute -bottom-10 -right-56 sm:right-10 opacity-80 animate-float">
                <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" width={426} height={426} className='opacity-40'/>
            </div>

            <div className="max-w-6xl mx-auto pt-4 sm:pt-16 relative">
                <div className="flex justify-center mb-12">
                    <Image src="/img/logo.svg" alt="Advantage Agency Logo" width={250} height={55} className='opacity-50'/>
                </div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase">
                        We Drive Traffic. You Reap the Rewards.
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
                        We help iGaming and Nutra brands scale globally with Meta Ads, TikTok, Native and Push expertise.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative rounded-2xl md:rounded-3xl overflow-hidden max-w-[740px] mx-auto"
                >
                    <VideoPlayer
                        videoUrl={videoSources[locale as keyof typeof videoSources].full}
                        placeholder={videoSources[locale as keyof typeof videoSources].preview}
                        className="aspect-video"
                    />
                </motion.div>

                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="w-fit mx-auto mt-4 hover:scale-105 transition-all duration-100"
                >
                    <Link href="/form" 
                        className="group relative bg-white hover:bg-white/90 transition-all duration-300 text-black px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2" 
                        onMouseEnter={() => playSound('hover_1')}
                    >
                        <span className="relative z-10">Get traffic</span>
                        <span className="relative z-10 animate-[bounceX_1s_ease-in-out_infinite]">→</span>
                        <div className="absolute inset-0 rounded-full animate-pulse-border group-hover:animate-none"></div>
                    </Link>
                </motion.div>
                
            </div>
        </section>
    );
}