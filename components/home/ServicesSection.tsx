'use client'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { playSound } from '@/app/constant/sound'

const serviceStyles = {
    google: {
        background: 'bg-gradient-to-br from-[#4285F4]/20 via-[#DB4437]/20 to-[#F4B400]/20',
    },
    facebook: {
        background: 'bg-gradient-to-br from-[#1877F2]/20 via-[#2851A3]/20 to-[#18A4F4]/20',
    },
    web: {
        background: 'bg-gradient-to-br from-[#00B4D8]/20 via-[#0096C7]/20 to-[#0077B6]/20',
    },
    email: {
        background: 'bg-gradient-to-br from-[#7C3AED]/20 via-[#5B21B6]/20 to-[#4C1D95]/20',
    }
};

export default function ServicesSection() {
    const t = useTranslations('services');
    const swiperRef = useRef<SwiperType>();

    const handlePrev = () => {
        playSound('click');
        swiperRef.current?.slidePrev();
    };

    const handleNext = () => {
        playSound('click');
        swiperRef.current?.slideNext();
    };

    return (
        <section className="max-w-6xl mx-auto px-6 py-10 md:py-14" id="services">
            <div className="flex justify-between items-center">
                <span className="text-red-500 uppercase tracking-wider">{t('headline')}</span>
                <Image className="absolute right-14 md:hidden" src="/img/home/25-percent.svg" alt="25%" width={100} height={50} />
            </div>

            <div className="flex justify-between items-start gap-8 mt-4">
                <div className="max-w-xl">
                    <h2 className="text-4xl md:text-6xl font-bold text-white">{t('title')}</h2>
                    <p className="text-gray-400 mt-4">{t('description')}</p>
                </div>
                <div className="flex items-start gap-8">
                    <Image className="hidden md:block" src="/img/home/25-percent.svg" alt="25%" width={200} height={100} />
                    <div className="hidden md:flex justify-end gap-4">
                        <button 
                            onClick={handlePrev}
                            className="w-[60px] h-[60px] rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 active:scale-90 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            ←
                        </button>
                        <button 
                            onClick={handleNext}
                            className="w-[60px] h-[60px] rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 active:scale-90 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop view with horizontal scroll */}
            <div className="hidden md:block mt-16">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={32}
                    slidesPerView={3}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className="services-swiper"
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 3,
                        }
                    }}
                >
                    {t.raw('items').map((plan: any, index: number) => (
                        <SwiperSlide key={`${plan.title}-${plan.price}`}>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className={`rounded-2xl p-8 border ${serviceStyles[plan.type as keyof typeof serviceStyles].background} border-[#3e4c68] h-[570px]`}
                            >
                                <h3 className="text-2xl font-bold text-white">
                                    {plan.title}
                                </h3>
                                <p className={`mt-2 text-sm text-gray-400`}>
                                    {plan.subtitle}
                                </p>
                                <div className="mt-8">
                                    <span className={`text-5xl font-bold ${['blue', 'white', 'purple']}`}>
                                        {plan.price}
                                    </span>
                                </div>
                                <Link 
                                    href="/offers" 
                                    className={`block w-full py-3 rounded-full mt-8 font-medium transition-all duration-300 text-center text-white bg-white/20 hover:bg-white/30`}
                                >
                                    {plan.button}
                                </Link>
                                <ul className="mt-8 space-y-4">
                                    {plan.features?.map((feature: string, i: number) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <span className="text-green-500">✓</span>
                                            <span className="text-gray-400">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Mobile view with vertical stack */}
            <div className="md:hidden grid grid-cols-1 gap-8 mt-16">
                {t.raw('items').map((plan: any, index: number) => (
                    <motion.div 
                        key={`${plan.title}-${plan.price}`}
                        initial={{ opacity: 0, y: 20 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className={`rounded-2xl p-8 border ${serviceStyles[plan.type as keyof typeof serviceStyles].background} border-[#3e4c68]`}
                    >
                        <h3 className="text-2xl font-bold text-white">
                            {plan.title}
                        </h3>
                        <p className={`mt-2 text-sm text-gray-400`}>
                            {plan.subtitle}
                        </p>
                        <div className="mt-8">
                            <span className={`text-5xl font-bold ${['blue', 'white', 'purple']}`}>
                                {plan.price}
                            </span>
                        </div>
                        <Link 
                            href="/offers" 
                            className={`block w-full py-3 rounded-full mt-8 font-medium transition-all duration-300 text-center text-white bg-white/20 hover:bg-white/30`}
                        >
                            {plan.button}
                        </Link>
                        <ul className="mt-8 space-y-4">
                            {plan.features?.map((feature: string, i: number) => (
                                <li key={i} className="flex items-center gap-3">
                                    <span className="text-green-500">✓</span>
                                    <span className="text-gray-400">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-center mt-4">
                <Link href="/offers"  className="px-10 py-4 text-red-500 hover:text-red/70 font-medium transition-all duration-300 text-lg group flex items-center gap-2">
                    {t('button')} →
                </Link>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-14">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative w-[300px] h-[70px]"
                >
                    <Image
                        src="/img/home/meta-partner.webp"
                        alt="Meta Business Partner"
                        fill
                        sizes="240px"
                        className="object-contain"
                        priority
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative w-[300px] h-[70px]"
                >
                    <Image
                        src="/img/home/google-partner.webp"
                        alt="Google Partner"
                        fill
                        sizes="240px"
                        className="object-contain"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    )
} 