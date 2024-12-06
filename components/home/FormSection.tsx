'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FormSection = () => {
    const t = useTranslations('contact');

    return (
        <section className="py-0 md:py-20 relative">
            <div className="max-w-6xl mx-auto px-6 ">
                <div className="flex flex-col lg:flex-row gap-16 relative md:px-16 overflow-hidden p-6">
                    <div className="lg:w-1/2 relative md:mt-20">
                        <span className="text-red uppercase tracking-wider">{t('headline')}</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 leading-tight">{t('title')}</h2>
                    </div>

                    <motion.form 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 space-y-6 relative z-30"
                    >
                        <div className="absolute -top-10 left-28 md:top-10 md:-left-[40%] md:right-0 -z-10">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 0L18 12L30 15L18 18L15 30L12 18L0 15L12 12L15 0Z" fill="rgba(255,255,255,0.1)"/>
                            </svg>
                        </div>
                        <div className="absolute -bottom-10 right-10 md:bottom-10 md:-left-[30%] md:right-0">
                            <svg width="50" height="50" viewBox="0 0 30 30" fill="none">
                                <path d="M15 0L18 12L30 15L18 18L15 30L12 18L0 15L12 12L15 0Z" fill="rgba(255,255,255,0.1)"/>
                            </svg>
                        </div>

                        <div>
                            <input 
                                type="text" 
                                placeholder={t('form.name')}
                                className="w-full bg-transparent border border-white/40 rounded-xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
                            />
                        </div>
                        <div>
                            <input 
                                type="email" 
                                placeholder={t('form.email')}
                                className="w-full bg-transparent border border-white/40 rounded-xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
                            />
                        </div>
                        <div>
                            <input 
                                type="text" 
                                placeholder={t('form.company')}
                                className="w-full bg-transparent border border-white/40 rounded-xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
                            />
                        </div>
                        <div>
                            <textarea 
                                placeholder={t('form.purpose')}
                                rows={4}
                                className="w-full bg-transparent border border-white/40 rounded-xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors resize-none"
                            />
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-white text-black font-medium py-4 rounded-xl hover:bg-white/90 transition-all duration-300"
                        >
                            {t('form.submit')}
                        </button>
                    </motion.form>

                    {/* Decorative */}
                    <div className="absolute -rotate-12 sm:rotate-0 -top-20 -right-52 sm:-top-80 sm:-right-80 w-[426px] h-[426px] sm:w-[726px] sm:h-[726px] opacity-40">
                        <Image src="/img/home/lines.svg" alt="Decorative lines" width={726} height={726} loading="lazy" priority={false} />
                    </div>
                    <div className="absolute -rotate-12 sm:rotate-0 -bottom-20 -left-52 sm:-bottom-[31rem] sm:-left-80 w-[426px] h-[426px] sm:w-[726px] sm:h-[726px] opacity-40">
                        <Image src="/img/home/lines.svg" alt="Decorative lines" width={726} height={726} loading="lazy" priority={false} />
                    </div>
                    <div className="absolute -bottom-10 -right-56 sm:-right-10 opacity-40 animate-float">
                        <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" width={426} height={426} loading="lazy" priority={false} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormSection;