'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation as NavigationModule } from 'swiper/modules'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { playSound } from '@/app/constant/sound'
import 'swiper/css'
import 'swiper/css/navigation'
import { teamMembers } from '@/app/constant/team';
import { motion } from 'framer-motion';

interface TeamSectionProps {
    playSound?: (sound: string) => void
}

export default function TeamSection() {
    const t = useTranslations()
    
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto px-6 py-10 md:py-20"
        >
            <div className="flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-red uppercase tracking-wider">{t('team.headline')}</span>
                    <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">{t('team.title')}</h2>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="md:flex gap-4 hidden z-30"
                >
                    <button 
                        className="team-prev w-[60px] h-[60px] rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 active:scale-90"
                        onClick={() => playSound('click')}
                    >
                        ←
                    </button>
                    <button 
                        className="team-next w-[60px] h-[60px] rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 active:scale-90"
                        onClick={() => playSound('click')}
                    >
                        →
                    </button>
                </motion.div>
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
            >
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                <Swiper
                    modules={[NavigationModule]}
                    slidesPerView={4}
                    spaceBetween={32}
                    loop={true}
                    navigation={{
                        prevEl: '.team-prev',
                        nextEl: '.team-next',
                    }}
                    breakpoints={{
                        0: { 
                            slidesPerView: 3,
                            spaceBetween: 32,
                            centeredSlides: true
                        },
                        640: { 
                            slidesPerView: 3,
                            centeredSlides: false,
                            spaceBetween: 32
                        },
                        1024: { 
                            slidesPerView: 4,
                            centeredSlides: false,
                            spaceBetween: 32
                        }
                    }}
                    className="team-swiper"
                >
                    {teamMembers.map((member) => (
                        <SwiperSlide key={member.name}>
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ 
                                    duration: 0.4,
                                    ease: "easeOut"
                                }}
                                className="pt-12 md:pt-16 transition-all duration-300 [&.swiper-slide-active]:scale-125 max-w-[200px] mx-auto sm:transform-none"
                            >
                                <div className="aspect-square relative rounded-full overflow-hidden">
                                    <Image 
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="text-center mt-3">
                                    <h3 className="text-white text-base md:text-lg font-semibold">
                                        {member.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-base">
                                        {member.position}
                                    </p>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </motion.section>
    )
}