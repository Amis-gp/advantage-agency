'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function ClientThankYou() {
    const t = useTranslations('thankYou');

    return (
        <div className="min-h-screen flex flex-col justify-between bg-black">
            <main className="text-white relative overflow-hidden">
                <div className="absolute top-28 -left-40 xl:left-10 w-64 h-64">
                    <Image 
                        src="/img/home/gradient-ball-1.svg" 
                        className="animate-float" 
                        alt="Decorative ball" 
                        width={726} 
                        height={726} 
                        priority={false} 
                    />
                </div>

                <div className="absolute -top-20 -right-52 w-[426px] h-[426px] opacity-40">
                    <Image 
                        src="/img/home/lines.svg" 
                        alt="Decorative lines" 
                        width={726} 
                        height={726} 
                        priority={false} 
                    />
                </div>

                <div className="w-fit mx-auto mt-12">
                    <Image src="/img/logo.svg" alt="Logo" width={243} height={55} priority={false} />
                </div>

                <div className="max-w-4xl mx-auto px-6 pt-40 pb-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-center"
                    >
                        <span className="text-red-500 uppercase tracking-wider">{t('headline')}</span>
                        <h1 className="text-4xl md:text-6xl font-bold mt-4">
                            {t('title')}
                        </h1>
                        <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
                            {t('description')}
                        </p>

                        <div className="w-fit mx-auto mt-12 hover:scale-105 transition-all duration-100">
                            <Link 
                                href="/" 
                                className="group relative bg-white hover:bg-white/90 transition-all duration-300 text-black px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2"
                            >
                                <span className="relative z-10">{t('button')}</span>
                                <span className="relative z-10 animate-[bounceX_1s_ease-in-out_infinite]">→</span>
                                <div className="absolute inset-0 rounded-full animate-pulse-border group-hover:animate-none"></div>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}