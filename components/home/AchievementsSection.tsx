'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as NavigationModule } from 'swiper/modules';
import { motion, useTransform, useScroll } from 'framer-motion';
import { playSound } from '@/app/constant/sound';

export default function AchievementsSection() {
    const t = useTranslations();
    const { scrollY } = useScroll();
    const rotate2 = useTransform(scrollY, [0, 3000], [0, -360]);

    const achievementSlides = [
        { id: 1, src: '/img/home/stata-1.webp', width: 800, height: 500 },
        { id: 2, src: '/img/home/stata-2.webp', width: 800, height: 500 },
        { id: 3, src: '/img/home/stata-3.webp', width: 800, height: 500 }
    ];

    const swiperConfig = {
        modules: [NavigationModule],
        slidesPerView: 1,
        loop: true,
        navigation: {
            prevEl: '.achievement-prev',
            nextEl: '.achievement-next',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        }
    };

    return (
        <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl px-6 mx-auto py-10 md:py-20"
        >
            <div className="p-6 md:px-14 md:py-10 bg-white text-black relative overflow-hidden rounded-[40px]">
                <motion.div 
                    className="absolute w-10 h-10 sm:w-16 sm:h-16 top-3 sm:top-10 right-10" 
                    style={{ rotate: rotate2 }}
                >
                    <Image src="/img/home/star.svg" alt="Star" width={64} height={64} loading="lazy" priority={false} 
                        className="filter invert-[45%] sepia-[100%] hue-rotate-[0deg] brightness-[100%]"
                    />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 0.8, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute top-[20%] -left-40 sm:-left-32 w-[326px] h-[326px] md:w-auto md:h-auto animate-float"
                >
                    <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" width={426} height={426} loading="lazy" priority={false} />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 0.8, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="absolute top-[40%] -right-40 sm:-right-40 w-[326px] h-[326px] md:w-auto md:h-auto opacity-80 animate-float"
                >
                    <Image src="/img/home/gradient-ball-1.svg" className="scale-x-[-1]" alt="Decorative lines" width={426} height={426} loading="lazy" priority={false} />
                </motion.div>

                <div className="z-10 relative">
                    <div className="flex flex-col xl:flex-row xl:items-end justify-between xl:max-w-[80%] mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <p className="text-red uppercase tracking-wider">{t('achievements.headline')}</p>
                            <h2 className="text-3xl md:text-5xl font-bold mt-2">{t('achievements.title')}</h2>
                            <p className="text-xl text-gray-600 mt-4">{t('achievements.description')}</p>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="w-fit mt-4 hover:scale-105 transition-all duration-100"
                        >
                            <Link href="#form" 
                                className="group relative bg-black hover:bg-black/80 transition-all duration-300 text-white px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2" 
                                onMouseEnter={() => playSound('hover_1')}
                            >
                                <span className="text-sm sm:text-base relative z-10">{t('achievements.button')}</span>
                                <span className="relative z-10 animate-[bounceX_1s_ease-in-out_infinite]">→</span>
                                <div className="absolute inset-0 rounded-full animate-pulse-border-black group-hover:animate-none"></div>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-10 relative"
                    >
                        <div className="relative">
                            <Image 
                                src="/img/home/macbook.svg"
                                className="w-max" 
                                alt="Achievement statistics" 
                                width={800} 
                                height={500} 
                                loading="lazy"
                            />
                            
                            <div className="absolute top-[5%] left-[11.5%] right-[11.5%] lg:right-[10.2vw] xl:right-[12.7%] bottom-[7%] overflow-hidden rounded-[5px]">
                                <Swiper {...swiperConfig}>
                                    {achievementSlides.map(({ id, src, width, height }) => (
                                        <SwiperSlide key={id}>
                                            <div className="relative h-full">
                                                <Image 
                                                    src={src}
                                                    alt={`Achievement statistics ${id}`}
                                                    width={width}
                                                    height={height}
                                                    className="object-cover w-full h-full"
                                                    loading="lazy"
                                                    quality={75}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex gap-4 justify-center mt-8"
                        >
                            <button 
                                className="achievement-prev w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:bg-black/90 transition-all duration-300 active:scale-90"
                                onClick={() => playSound('click')}
                            >
                                ←
                            </button>
                            <button 
                                className="achievement-next w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:bg-black/90 transition-all duration-300 active:scale-90"
                                onClick={() => playSound('click')}
                            >
                                →
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}