'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { playSound } from '@/app/constant/sound';

export default function PartnersSection() {


    const partners = [
        { src: '/img/media-buying/logo-affiliate-partner/parthner-logo-2.webp', alt: 'Partner logo 2' },
        { src: '/img/media-buying/logo-affiliate-partner/parthner-logo-1.webp', alt: 'Partner logo 1' },
        { src: '/img/media-buying/logo-affiliate-partner/parthner-logo-3.webp', alt: 'Partner logo 3' },
        { src: '/img/media-buying/logo-affiliate-partner/parthner-logo-4.webp', alt: 'Partner logo 4' },
        { src: '/img/media-buying/logo-affiliate-partner/parthner-logo-5.webp', alt: 'Partner logo 5' },
    ];

    return (
        <section className="py-16 md:py-24 relative">
            
            <div className="max-w-[1400px] mx-auto px-6 relative">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="text-red-500 uppercase tracking-wider">Companies</span>
                    <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">Our partners and clients</h2>
                </motion.div>

                <div className="relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
                        {partners.map((partner, index) => (
                            <motion.div 
                                key={index}
                                className="group flex items-center justify-center p-4 rounded-xl bg-black hover:bg-black/50 transition-all duration-300 border border-transparent hover:border-red-500/30"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ 
                                    duration: 0.4, 
                                    delay: index * 0.1 
                                }}
                                whileHover={{ 
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                                viewport={{ once: true }}
                            >
                                <Image 
                                    src={partner.src}
                                    alt={partner.alt}
                                    height={50}
                                    width={160}
                                    className="h-[35px] md:h-[45px] w-auto max-w-[160px] object-contain filter group-hover:brightness-100 transition-all duration-300"
                                    loading="lazy"
                                    onMouseEnter={() => playSound('hover_2')}
                                    draggable={false}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}