'use client';

import Image from 'next/image';
import { playSound } from '@/app/constant/sound';

export default function PartnersSection() {


    const partners = [
        { src: '/img/media-buying/logo-affiliate-partner/parthner-logo-1.webp', alt: 'Partner logo 1' },
        { src: '/img/media-buying/logo-affiliate-partner/parthner-logo-2.webp', alt: 'Partner logo 2' },
        { src: '/img/media-buying/logo-affiliate-partner/parthner-logo-3.webp', alt: 'Partner logo 3' },
        { src: '/img/media-buying/logo-affiliate-partner/parthner-logo-4.webp', alt: 'Partner logo 4' },
        { src: '/img/media-buying/logo-affiliate-partner/parthner-logo-5.webp', alt: 'Partner logo 5' },
    ];

    return (
        <section className="pt-10 md:pt-20">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="sm:text-center">
                    <span className="text-red-500 uppercase tracking-wider">Companies</span>
                    <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">Our partners and clients</h2>
                </div>

                <div className="pt-10 md:pt-16 pb-2">
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {partners.map((partner, index) => (
                            <div 
                                key={index}
                                className="h-[35px] md:h-[50px] flex items-center justify-center"
                            >
                                <Image 
                                    src={partner.src}
                                    alt={partner.alt}
                                    height={60}
                                    width={200}
                                    className="h-full w-auto max-w-[200px] object-contain"
                                    loading="lazy"
                                    onMouseEnter={() => playSound('hover_2')}
                                    draggable={false}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}