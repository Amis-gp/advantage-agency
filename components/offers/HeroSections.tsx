'use client';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { playSound } from '@/app/constant/sound';


export default function HeroSection() {
    const t = useTranslations();
    const locale = useLocale();
    const [isPlaying, setIsPlaying] = useState(false);
    const { scrollY } = useScroll();

    return (
        <section className="px-6 relative" id="hero">
            <div className="absolute top-28 -left-40 xl:left-10 w-64 h-64">
                <motion.div className="hidden xl:block absolute">
                    <Image src="/img/home/star.svg" alt="Star" width={64} height={64}/>
                </motion.div>
                <Image src="/img/home/gradient-ball-1.svg" className="animate-float" alt="Decorative lines" width={726} height={726}/>
            </div>

            <div className="absolute -rotate-12 sm:rotate-0 -top-20 -right-52 sm:-top-80 sm:-right-80 w-[426px] h-[426px] sm:w-[726px] sm:h-[726px] opacity-40">
                <Image src="/img/home/lines.svg" alt="Decorative lines" width={726} height={726}/>
            </div>

            <motion.div className="absolute top-20 right-4 xl:right-16  w-4 h-4 sm:w-8 sm:h-8 xl:w-auto xl:h-auto">
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
                    
                </motion.div>                
            </div>
            <div className="max-w-7xl mx-auto">
                <Image src="/img/offers/finance-icons.webp" alt="finance-icons.svg" width={1500} height={370}/>
            </div>
        </section>
    );
}











