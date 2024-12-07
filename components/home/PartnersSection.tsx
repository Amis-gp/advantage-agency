'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { playSound } from '@/app/constant/sound';

export default function PartnersSection() {
    const t = useTranslations();

    return (
        <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black pt-10 md:pt-20"
        >
            <div className="max-w-[1400px] mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="sm:text-center"
                >
                    <span className="text-red uppercase tracking-wider">{t('partners.headline')}</span>
                    <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">{t('partners.title')}</h2>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative w-full overflow-hidden pt-10 md:pt-16 pb-2"
                >
                    <div className="partner-marquee-container">
                        {[1, 2].map((containerIndex) => (
                            <div key={containerIndex} className="partner-marquee-content">
                                {[1, 2, 3, 4, 5, 6, 7].map((index) => (
                                    <motion.div 
                                        key={`${containerIndex}-${index}`}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.6, 
                                            delay: 0.1 * index,
                                            ease: "easeOut"
                                        }}
                                        className="h-[35px] md:h-[50px] w-auto px-8 md:px-12 flex-shrink-0 flex items-center justify-center"
                                    >
                                        <div className="h-full flex items-center justify-center">
                                            <Image 
                                                src={`/img/home/parthner-logo-${index}.webp`}
                                                alt={`Partner logo ${index}`}
                                                height={60}
                                                width={400}
                                                className="h-full w-auto max-w-[850px] partner-logo"
                                                loading="lazy"
                                                onMouseEnter={() => playSound('hover_2')}
                                                draggable={false}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="absolute -left-2 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
                    <div className="absolute -right-2 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
                </motion.div>
            </div>
        </motion.section>
    );
}