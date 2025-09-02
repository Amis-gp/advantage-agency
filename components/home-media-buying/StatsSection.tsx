'use client';
import { useTranslations } from 'next-intl';
import { playSound } from '@/app/constant/sound';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function StatsSection() {
    const t = useTranslations();
    const content = "EFFICIENCY GROWTH QUALITY SOLUTIONS INNOVATION CONNECT LEAD";
    
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section className="pt-14" ref={ref}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 text-center flex flex-col items-center justify-center hover:scale-105 hover:bg-zinc-800 transition-all duration-100"
                        onMouseEnter={() => playSound('hover_2')}
                    >
                        <h3 className="text-6xl font-bold mb-4">9k</h3>
                        <p className="text-gray-400">FTDs in total</p>
                        <p className="text-gray-300 text-sm mt-2">We launched numerous campaigns that generated results.</p>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 text-center flex flex-col items-center justify-center hover:scale-105 hover:bg-zinc-800 transition-all duration-100"
                        onMouseEnter={() => playSound('hover_2')}
                    >
                        <h3 className="text-6xl font-bold mb-4">105%</h3>
                        <p className="text-gray-400">average ROI</p>
                        <p className="text-gray-300 text-sm mt-2">We track all the key metrics to ensure high-quality performance.</p>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 text-center flex flex-col items-center justify-center hover:scale-105 hover:bg-zinc-800 transition-all duration-100"
                        onMouseEnter={() => playSound('hover_2')}
                    >
                        <h3 className="text-6xl font-bold mb-4">6+</h3>
                        <p className="text-gray-400">years in Affiliate</p>
                        <p className="text-gray-300 text-sm mt-2">We have of experience in Affiliate marketing, building professional projects.</p>
                    </motion.div>
                </div>
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="w-full overflow-hidden whitespace-nowrap"
            >
                <div className="relative max-w-[1400px] mx-auto">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
                    <div className="overflow-hidden">
                        <div className="inline-flex animate-marquee mt-10 md:mt-16">
                            {[...Array(2)].map((_, index) => (
                                <div key={index} className="flex items-center">
                                    {content.split(' ').map((word, wordIndex) => (
                                        <div key={wordIndex} className="flex items-center">
                                            <span className="text-white text-2xl md:text-4xl font-bold px-4 md:px-8">
                                                {word}
                                            </span>
                                            <div className="w-3 h-3 md:w-6 md:h-6 bg-red-500 rotate-45" />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}