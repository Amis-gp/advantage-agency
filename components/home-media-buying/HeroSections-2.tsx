'use client';
import { useState, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { playSound } from '@/app/constant/sound';

const videoSources = {
    uk: {
        full: 'img/home/video-uk.mp41',
        preview: 'img/home/preview-uk.mp41'
    },
    en: {
        full: 'img/home/video-en.mp41',
        preview: 'img/home/preview-en.mp41'
    }
};

export default function HeroSection() {
    const t = useTranslations();
    const locale = useLocale();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVideoPaused, setIsVideoPaused] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const { scrollY } = useScroll();
    const rotate1 = useTransform(scrollY, [0, 3000], [0, 360]);
    const rotate2 = useTransform(scrollY, [0, 3000], [0, -360]);

    const handlePlayClick = () => {
        playSound('click');
        setIsPlaying(true);
    };

    const toggleVideoPlayback = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

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
                    <div className="aspect-video flex items-center justify-center relative">
                        {!isPlaying ? (
                            <video 
                                key={`preview-${locale}`} 
                                className="absolute inset-0 w-full h-full object-cover"
                                autoPlay 
                                muted 
                                loop 
                                playsInline
                            >
                                <source src={videoSources[locale as keyof typeof videoSources].preview} type="video/mp4"/>
                            </video>
                        ) : (
                            <>
                                <video 
                                    key={`full-${locale}`} 
                                    ref={videoRef}
                                    className="w-full h-full object-cover" 
                                    autoPlay 
                                    playsInline
                                    onClick={toggleVideoPlayback}
                                    onPlay={() => setIsVideoPaused(false)}
                                    onPause={() => setIsVideoPaused(true)}
                                >
                                    <source src={videoSources[locale as keyof typeof videoSources].full} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                                {isVideoPaused && (
                                    <div 
                                        className="absolute inset-0 flex items-center justify-center"
                                        onClick={toggleVideoPlayback}
                                    >
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); toggleVideoPlayback(); }} 
                                            className="bg-black/40 p-4 rounded-full"
                                        >
                                            <svg 
                                                className="w-8 h-8 text-white" 
                                                viewBox="0 0 24 24" 
                                                fill="currentColor" 
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                        
                        <div className="absolute top-4 sm:top-1/4 w-full text-center text-white/50 text-xl sm:text-4xl px-3 py-1 rounded-full font-bold z-20">
                            COMING SOON
                        </div>
                        
                        {!isPlaying && (
                            <div 
                                onMouseEnter={() => playSound('hover_1')} 
                                className="absolute inset-0 flex items-center justify-center cursor-pointer group" 
                                onClick={handlePlayClick}
                            >
                                <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/50"></div>
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white z-10 transition-transform duration-300 group-hover:scale-110">
                                    <svg className="ml-1 transition-transform duration-300" width="19" height="20" viewBox="0 0 86 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M80.1258 40.5562L13.9878 2.50912C7.98783 -0.942487 0.5 3.38842 0.5 10.3104V87.4713C0.5 94.4415 8.08185 98.7661 14.0814 95.218L80.2193 56.1042C86.1521 52.5955 86.1003 43.9932 80.1258 40.5562Z" fill="#000"/>
                                    </svg>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>

                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="w-fit mx-auto mt-4 hover:scale-105 transition-all duration-100"
                >
                    <Link href="#form" 
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