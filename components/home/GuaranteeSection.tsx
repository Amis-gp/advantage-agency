'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { playSound } from '@/app/constant/sound';

export default function GuaranteeSection() {
    const t = useTranslations();

    return (
        <section className="px-6 relative py-20">

            <div className="max-w-6xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-white rounded-[32px] p-12 overflow-hidden"
                >
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-semibold mt-2 text-black">{t('guarantee.title')}</h2>
                        
                        <div className="bg-[#FFB800] rounded-xl px-6 p-4 w-fit mt-6 md:mt-14">
                            <div className="flex items-center gap-2">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.63281L10.6985 7.8388C10.4445 8.85466 10.3176 9.36259 10.0531 9.7759C9.81915 10.1415 9.50868 10.452 9.14309 10.6859C8.72978 10.9504 8.22185 11.0774 7.20599 11.3313L2 12.6328L7.20599 13.9343C8.22185 14.1883 8.72978 14.3153 9.14309 14.5797C9.50868 14.8137 9.81915 15.1241 10.0531 15.4897C10.3176 15.903 10.4445 16.411 10.6985 17.4268L12 22.6328L13.3015 17.4268C13.5555 16.411 13.6824 15.903 13.9469 15.4897C14.1808 15.1241 14.4913 14.8137 14.8569 14.5797C15.2702 14.3153 15.7782 14.1883 16.794 13.9343L22 12.6328L16.794 11.3313C15.7782 11.0774 15.2702 10.9504 14.8569 10.6859C14.4913 10.452 14.1808 10.1415 13.9469 9.7759C13.6824 9.36259 13.5555 8.85466 13.3015 7.8388L12 2.63281Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span className="font-medium text-black">{t('guarantee.badge')}</span>
                            </div>
                        </div>

                        <p className="text-lg md:text-xl text-gray-600 mt-8 max-w-xl">
                            {t('guarantee.description')}
                        </p>

                        <Link 
                            href="#form"
                            className="mt-10 group inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-black/80 hover:scale-105 transition-all duration-300"
                            onMouseEnter={() => playSound('hover_1')}
                        >
                            <span>{t('guarantee.button')}</span>
                            <span className="animate-[bounceX_1s_ease-in-out_infinite] group-hover:animate-none group-hover:translate-x-1">→</span>
                        </Link>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-20 -right-20 md:-top-72 md:-right-72 w-[426px] h-[426px] md:w-[726px] md:h-[726px] opacity-50">
                        <Image src="/img/home/lines.svg" alt="Decorative lines" width={726} height={726}
                            className="[filter:invert(50%)_sepia(74%)_saturate(1115%)_hue-rotate(360deg)_brightness(103%)_contrast(104%)]" />
                    </div>
                    <div className="absolute hidden md:block top-40 -left-40  w-[526px] h-[526px] opacity-30">
                        <Image src="/img/home/lines.svg" alt="Decorative lines" width={726} height={726}
                            className="[filter:invert(50%)_sepia(74%)_saturate(1115%)_hue-rotate(360deg)_brightness(103%)_contrast(104%)]" />
                    </div>
                    <div className="absolute hidden md:block -bottom-40 -right-56 w-[426px] h-[426px] opacity-60">
                        <Image src="/img/home/lines.svg" alt="Decorative lines" width={726} height={726} className="brightness-0" />
                    </div>

                    <div className="absolute -bottom-10 -right-10 md:-bottom-6 md:right-10 opacity-60">
                        <Image src="/img/home/dots.svg" alt="Decorative lines" width={150} height={200}/>
                    </div>

                    <div className="absolute right-8 top-8 md:left-[40%] md:w-[50px] md:h-[50px] md:right-auto">
                        <Image src="/img/home/star.svg" alt="Star" width={50} height={50} className="brightness-0 rotate-45"/>
                    </div>

                    <div className="absolute hidden md:block bottom-8 right-96">
                        <Image src="/img/home/star.svg" alt="Star" width={32} height={32} className="brightness-0"/>
                    </div>

                    <div className="absolute -top-72 -left-40 hidden md:block opacity-60 animate-float">
                        <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" width={426} height={426}/>
                    </div>
                    <div className="absolute -top-40 -right-28 hidden md:block opacity-60 animate-float">
                        <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" width={426} height={426}/>
                    </div>

                    <div className="absolute -bottom-40 -left-56 sm:left-40 opacity-60 animate-float">
                        <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" width={426} height={426}/>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}