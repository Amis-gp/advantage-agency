'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation as NavigationModule } from 'swiper/modules'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { playSound } from '@/app/constant/sound'
import 'swiper/css'
import 'swiper/css/navigation'
import { teamMembers } from '@/app/constant/team'
import { useEffect, useRef, memo, useMemo } from 'react'

const TeamMember = memo(({ member }: { member: typeof teamMembers[0] }) => (
    <div className="pt-12 md:pt-16 transition-all duration-300 mx-auto max-w-[200px] md:max-w-none">
        <div className="aspect-square relative rounded-full overflow-hidden">
            <Image 
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 200px"
                loading="lazy"
                quality={75}
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjAyMDIwIi8+PC9zdmc+"
            />
        </div>
        <div className="text-center mt-3">
            <h3 className="text-white text-sm md:text-lg font-semibold">
                {member.name}
            </h3>
            <p className="text-gray-400 text-xs md:text-base">
                {member.position}
            </p>
        </div>
    </div>
));

TeamMember.displayName = 'TeamMember';

const swiperConfig = {
    modules: [NavigationModule],
    slidesPerView: 4,
    spaceBetween: 32,
    loop: true,
    centeredSlides: false,
    navigation: {
        prevEl: '.team-prev',
        nextEl: '.team-next',
    },
    breakpoints: {
        0: { 
            slidesPerView: 1.5,
            spaceBetween: 20,
            centeredSlides: true
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 24,
            centeredSlides: true
        },
        640: { 
            slidesPerView: 3,
            spaceBetween: 32,
            centeredSlides: false
        },
        1024: { 
            slidesPerView: 4,
            spaceBetween: 32,
            centeredSlides: false
        }
    }
};

export default function TeamSection() {
    const t = useTranslations();
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.update();
        }
    }, []);

    const memoizedTeamMembers = useMemo(() => teamMembers, []);
    
    return (
        <section className="max-w-6xl mx-auto px-6 pt-10 md:pt-20 pb-4 md:pb-10">
            <div className="flex justify-between items-center">
                <div>
                    <span className="text-red uppercase tracking-wider">{t('team.headline')}</span>
                    <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">{t('team.title')}</h2>
                </div>
                
                <div className="md:flex gap-4 hidden z-30">
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
                </div>
            </div>

            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                <Swiper {...swiperConfig} className="team-swiper !pb-6" ref={swiperRef}>
                    {memoizedTeamMembers.map((member) => (
                        <SwiperSlide key={member.name}>
                            <TeamMember member={member} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}