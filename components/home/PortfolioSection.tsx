'use client';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion, useTransform, useScroll } from 'framer-motion';
import { playSound } from '@/app/constant/sound';
import { portfolioSlides } from '@/app/constant/portfolioSlides';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';

export default function PortfolioSection() {
    const t = useTranslations();
    const locale = useLocale();
    const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

    const getSlugForLocale = (slide: any) => {
        return locale === 'ua' ? slide.slug.ua : slide.slug.en;
    };

    const { scrollY } = useScroll();
    const rotate2 = useTransform(scrollY, [0, 3000], [0, -360]);

    return (
        <section className="bg-black relative py-10 md:py-20 px-6 overflow-hidden">
                
            <motion.div className="absolute top-20 sm:top-32 right-14 w-4 h-4 sm:w-8 sm:h-8" style={{ rotate: rotate2 }}>
                <Image src="/img/home/star.svg" alt="Star" width={64} height={64} loading="lazy" priority={false} />
            </motion.div>
            <div className="absolute bottom-40 sm:bottom-0 -left-56 opacity-20 md:opacity-80 animate-float">
                <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" width={426} height={426} loading="lazy" priority={false} />
            </div>
            <div className="md:hidden absolute bottom-5 -right-24 opacity-20 md:opacity-80 animate-float">
                <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" width={226} height={226} loading="lazy" priority={false} />
            </div>
            <div className="max-w-6xl mx-auto relative">
                
                <motion.div className="hidden xl:block absolute -top-16 -left-20 w-auto h-auto" style={{ rotate: rotate2 }}>
                    <Image src="/img/home/star.svg" alt="Star" width={64} height={64} loading="lazy" priority={false} />
                </motion.div>

                <span className="text-red uppercase tracking-wider">{t('portfolio.headline')}</span>
                <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">{t('portfolio.title')}</h2>

                <div className="relative">
                    <button className="invisible xl:visible swiper-button-prev absolute !-left-16 top-1/2 -translate-y-1/2 z-20 !w-[60px] !h-[60px] rounded-full border border-white/20 flex items-center justify-center !text-white hover:bg-white/10 transition-all duration-100 active:scale-90"
                        onClick={() => playSound('click')} >
                        ←
                    </button>
                    <button className="invisible xl:visible swiper-button-next absolute !-right-16 top-1/2 -translate-y-1/2 z-20 !w-[60px] !h-[60px] rounded-full border border-white/20 flex items-center justify-center !text-white hover:bg-white/10 transition-all duration-100 active:scale-90"
                    onClick={() => playSound('click')}>
                        →
                    </button>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={3}
                        centeredSlides={true}
                        loop={true}
                        spaceBetween={20}
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        }}
                        pagination={{
                            enabled: true,
                            clickable: true,
                            type: 'bullets',
                            dynamicBullets: true,
                            bulletActiveClass: 'swiper-pagination-bullet-active',
                            bulletClass: 'swiper-pagination-bullet',
                        }}
                        className="!pb-10 sm:!pb-16 !pt-10 sm:!pt-14"
                        
                        breakpoints={{
                            0: { 
                                slidesPerView: 1,
                                pagination: {
                                    enabled: true,
                                }
                            },
                            500: {
                                slidesPerView: 2,
                                pagination: {
                                    enabled: true,
                                }
                            },
                            1024: { 
                                slidesPerView: 3,
                                pagination: {
                                    enabled: false,
                                }
                            }
                        }}
                        style={{
                            '--swiper-slide-transform': 'scale(0.8)',
                            '--swiper-pagination-color': '#D12923',
                            '--swiper-pagination-bullet-inactive-color': '#ffffff',
                            '--swiper-pagination-bullet-inactive-opacity': '0.5',
                            '--swiper-pagination-bullet-size': '9px',
                            '--swiper-pagination-bullet-horizontal-gap': '7px',
                            '--swiper-pagination-bottom': '0px',
                        } as any}
                    >
                        {portfolioSlides.map((slide, index) => (
                            <SwiperSlide key={index} className="!opacity-50 !scale-75 transition-all duration-300 [&.swiper-slide-active]:!opacity-100 [&.swiper-slide-active]:!scale-100">
                                <div 
                                    className="group relative w-full h-full [perspective:1000px] sm:hover:scale-105 transition-all duration-300 hover:cursor-pointer" 
                                    onMouseEnter={() => playSound('hover_1')}
                                    onClick={() => {
                                        playSound('flipCard');
                                        setFlippedCards(prev => ({
                                            ...prev,
                                            [index]: !prev[index]
                                        }));
                                    }}
                                >
                                
                                    <div className={`relative aspect-[4/6] transition-all duration-500 [transform-style:preserve-3d] ${
                                        flippedCards[index] ? '[transform:rotateY(180deg)]' : ''
                                    }`}>
                                        <div className="absolute inset-0 [backface-visibility:hidden]">
                                            <div className="">
                                                <Image 
                                                    src={slide.image} 
                                                    alt={slide.title} 
                                                    fill
                                                    className="object-cover brightness-[0.7] rounded-[30px]"
                                                />
                                            </div>
                                            <div className="absolute inset-0 p-10 flex flex-col">
                                                <div className="flex flex-col items-center justify-center h-full">
                                                    <h3 className="text-white text-3xl md:text-4xl font-bold whitespace-pre-line text-center uppercase">{slide.title}</h3>
                                                    <p className="text-white mt-4 text-lg font-medium">{slide.date}</p>
                                                </div>
                                                <div className="absolute bottom-10 right-10 w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors text-black">
                                                    <span className="inline-block animate-[bounceX-small_1s_ease-in-out_infinite]">→</span>
                                                </div>
                                            </div>
                                        </div>
                            
                                        <div className="absolute inset-0 rounded-[30px] bg-zinc-900 p-10 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col">
                                            <div className="mt-5">
                                                <h4 className="text-white text-3xl md:text-4xl font-bold mb-6 uppercase">{slide.title}</h4>
                                                <div className="space-y-4 text-white/80 text-lg md:text-xl">
                                                    <div className="flex justify-between items-center">
                                                        <span>{t('portfolio.companyBudget')}:</span>
                                                        <span>{slide.companyBudget}</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span>{t('portfolio.averageLeadPrice')}:</span>
                                                        <span>{slide.averageLeadPrice}</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span>{t('portfolio.numberOfLeads')}:</span>
                                                        <span>{slide.numberOfLeads}</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span>{t('portfolio.numberOfSales')}:</span>
                                                        <span>{slide.numberOfSales}</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span>{t('portfolio.costPerSale')}:</span>
                                                        <span>{slide.costPerSale}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-auto">
                                                <Link 
                                                    href={getSlugForLocale(slide)}
                                                    className="inline-flex items-center gap-2 text-red hover:text-red/80 transition-colors"
                                                >
                                                    {t('portfolio.more')}
                                                    <span className="inline-block animate-[bounceX_1s_ease-in-out_infinite]">→</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}