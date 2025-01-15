'use client';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { playSound } from '@/app/constant/sound';

const videoSources = {
    ua: {
        full: 'img/home/video-ua.mp4',
        preview: 'img/home/preview-ua.mp4'
    },
    en: {
        full: 'img/home/video-en.mp4',
        preview: 'img/home/preview-en.mp4'
    }
};

export default function HeroSection() {
    const t = useTranslations();
    const locale = useLocale();
    const [isPlaying, setIsPlaying] = useState(false);
    const { scrollY } = useScroll();
    const rotate1 = useTransform(scrollY, [0, 3000], [0, 360]);
    const rotate2 = useTransform(scrollY, [0, 3000], [0, -360]);

    const handlePlayClick = () => {
        playSound('click');
        setIsPlaying(true);
    };

    return (
        <section className="px-6 relative" id="hero">
            <div className="absolute top-28 -left-40 xl:left-10 w-64 h-64">
                <motion.div className="hidden xl:block absolute" style={{ rotate: rotate1 }}>
                    <Image src="/img/home/star.svg" alt="Star" width={64} height={64}/>
                </motion.div>
                <Image src="/img/home/gradient-ball-1.svg" className="animate-float" alt="Decorative lines" width={726} height={726}/>
            </div>

            <div className="absolute -rotate-12 sm:rotate-0 -top-20 -right-52 sm:-top-80 sm:-right-80 w-[426px] h-[426px] sm:w-[726px] sm:h-[726px] opacity-40">
                <Image src="/img/home/lines.svg" alt="Decorative lines" width={726} height={726}/>
            </div>

            <motion.div className="absolute top-20 right-4 xl:right-16  w-4 h-4 sm:w-8 sm:h-8 xl:w-auto xl:h-auto" style={{ rotate: rotate2 }}>
                <Image src="/img/home/star.svg" alt="Star" width={64} height={64}/>
            </motion.div>

            <div className="absolute -bottom-10 -right-56 sm:right-10 opacity-80 animate-float">
                <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" width={426} height={426}/>
            </div>

            <div className="max-w-6xl mx-auto pt-28 relative">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase">
                        {t('hero.title')}
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
                        {t('hero.description')}
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
                            <video 
                                key={`full-${locale}`} 
                                className="w-full h-full object-cover" 
                                controls={true} 
                                autoPlay
                            >
                                <source src={videoSources[locale as keyof typeof videoSources].full} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        )}
                        
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
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center gap-4 mt-8 justify-center relative"
                >
                    <div className="flex -space-x-4">
                        <Image src="/img/home/ava-1.jpg" alt="Avatar" width={40} height={40}className="rounded-full" />
                        <Image src="/img/home/ava-2.jpg" alt="Avatar" width={40} height={40}className="rounded-full" />
                        <Image src="/img/home/ava-3.jpg" alt="Avatar" width={40} height={40}className="rounded-full" />
                        <Image src="/img/home/ava-4.jpg" alt="Avatar" width={40} height={40}className="rounded-full" />
                    </div>
                    <div className="">
                        <div className="flex items-center">
                            {[1, 2, 3, 4].map((star) => (
                                <Image key={star} src="/img/home/star-yellow.svg" alt="Star" width={12} height={12} className='mr-1'/>
                            ))}
                            <Image src="/img/home/star-yellow-gray.svg" alt="Star" width={12} height={12}/>
                            <span className="ml-2">4.6</span>
                        </div>
                        <span className="mt-3">{t('hero.reviews')}</span>
                    </div>
                    <motion.div className="absolute top-28 left-1 sm:top-10 sm:left-40" style={{ rotate: rotate2 }}>
                        <Image src="/img/home/star.svg" alt="Star" width={24} height={24}/>
                    </motion.div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="w-fit mx-auto mt-4 hover:scale-105 transition-all duration-100"
                >
                    <Link href="/offers" 
                        className="group relative bg-white hover:bg-white/90 transition-all duration-300 text-black px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2" 
                        onMouseEnter={() => playSound('hover_1')}
                    >
                        <span className="relative z-10">{t('hero.button')}</span>
                        <span className="relative z-10 animate-[bounceX_1s_ease-in-out_infinite]">→</span>
                        <div className="absolute inset-0 rounded-full animate-pulse-border group-hover:animate-none"></div>
                    </Link>
                </motion.div>
                
            </div>
        </section>
    );
}











