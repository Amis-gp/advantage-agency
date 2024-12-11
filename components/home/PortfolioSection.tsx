'use client';
import { useState, useMemo } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { playSound } from '@/app/constant/sound';
import { portfolioSlides } from '@/app/constant/portfolioSlides';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperConfig = {
    modules: [Navigation, Pagination],
    slidesPerView: 'auto' as const,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    speed: 800,
    grabCursor: true,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class="${className} w-2 h-2 bg-white/20 rounded-full transition-all duration-300 hover:bg-white"></span>`;
        },
    },
    breakpoints: {
        0: { 
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: { 
            slidesPerView: 3,
            spaceBetween: 40,
        }
    }
};

export default function PortfolioSection() {
    const t = useTranslations();
    const locale = useLocale();
    const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

    const handleCardClick = (index: number) => {
        try {
            playSound('flipCard');
        } catch (error) {
            console.error('Error playing sound:', error);
        }
        
        setFlippedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const getSlugForLocale = useMemo(() => (slide: any) => {
        return locale === 'ua' ? slide.slug.ua : slide.slug.en;
    }, [locale]);

    return (
        <section className="bg-black relative py-10 md:py-20 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto relative">
                <span className="text-red uppercase tracking-wider">{t('portfolio.headline')}</span>
                <h2 className="text-white text-3xl md:text-5xl font-bold mt-2 mb-10">{t('portfolio.title')}</h2>

                <div className="relative">
                    <button 
                        className="invisible md:visible swiper-button-prev absolute !-left-16 top-1/2 -translate-y-1/2 z-20 !w-[60px] !h-[60px] rounded-full border border-white/20 items-center justify-center !text-white hover:bg-white/10 transition-all duration-100"
                        onClick={() => {
                            try {
                                playSound('click');
                            } catch (error) {
                                console.error('Error playing sound:', error);
                            }
                        }}
                    >
                        ←
                    </button>
                    <button 
                        className="invisible md:visible swiper-button-next absolute !-right-16 top-1/2 -translate-y-1/2 z-20 !w-[60px] !h-[60px] rounded-full border border-white/20 items-center justify-center !text-white hover:bg-white/10 transition-all duration-100"
                        onClick={() => {
                            try {
                                playSound('click');
                            } catch (error) {
                                console.error('Error playing sound:', error);
                            }
                        }}
                    >
                        →
                    </button>

                    <Swiper {...swiperConfig} className="!pb-10 sm:!pb-16 !pt-10 !px-10">
                        {portfolioSlides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div 
                                    onClick={() => handleCardClick(index)}
                                    className="cursor-pointer"
                                    style={{
                                        perspective: '1000px',
                                        transformStyle: 'preserve-3d'
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'relative',
                                            width: '100%',
                                            paddingBottom: '150%',
                                            transition: 'transform 0.6s',
                                            transformStyle: 'preserve-3d',
                                            transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: 'absolute',
                                                width: '100%',
                                                height: '100%',
                                                backfaceVisibility: 'hidden',
                                                WebkitBackfaceVisibility: 'hidden'
                                            }}
                                            className="rounded-[30px] overflow-hidden relative"
                                        >
                                            <Image 
                                                src={slide.image} 
                                                alt={slide.title}
                                                fill
                                                className="object-cover brightness-75"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 p-8 flex flex-col items-center justify-center">
                                                <h3 className="text-white text-2xl md:text-3xl font-bold text-center uppercase">{slide.title}</h3>
                                                <p className="text-white mt-4">{slide.date}</p>
                                            </div>
                                            <div className="absolute bottom-10 right-10 w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors text-black">
                                                <span className="inline-block animate-[bounceX-small_1s_ease-in-out_infinite]">→</span>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                position: 'absolute',
                                                width: '100%',
                                                height: '100%',
                                                backfaceVisibility: 'hidden',
                                                WebkitBackfaceVisibility: 'hidden',
                                                transform: 'rotateY(180deg)'
                                            }}
                                            className="bg-zinc-900 rounded-[30px] p-8"
                                        >
                                            <div className="h-full flex flex-col">
                                                <h4 className="text-white text-2xl md:text-3xl font-bold mb-6">{slide.title}</h4>
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
                                                <Link 
                                                    href={getSlugForLocale(slide)}
                                                    className="mt-auto text-red hover:opacity-80"
                                                >
                                                    {t('portfolio.more')} →
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