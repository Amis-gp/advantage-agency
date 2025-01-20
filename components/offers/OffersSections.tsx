'use client';

import Image from 'next/image';
import { Link } from '@/navigation';
import { playSound } from '@/app/constant/sound';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { META_SLIDES, GOOGLE_SLIDES, LANDING_SLIDES } from '@/app/constant/offers';
import { useTranslations } from 'next-intl';

interface Slide {
    logo: string;
    background: string;
    title?: string;
    subtitle?: string;
    content?: string[];
    link?: {
        href: string;
        text: string;
    };
    link1?: {
        href: string;
        text: string;
    };
    list?: Array<{
        title: string;
        description: string;
    }>;
}

const SliderSection = ({ slides, bgColor, borderColor }: { 
    slides: Slide[], 
    bgColor: string, 
    borderColor: string 
}) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: false,
            }}
            className="!pb-12"
            breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
            }}
        >
            {slides.map((slide: any, index: any) => (
                <SwiperSlide key={index} className="h-auto">
                    <div className={`${bgColor} ${borderColor} rounded-2xl py-8 relative flex flex-col`}>
                        <Image 
                            src={slide.logo} 
                            alt="Service Logo" 
                            height={28}
                            width={300}
                            className="mb-4 px-6 w-fit h-7" 
                        />
                        <div className="relative flex-grow">
                            <Image 
                                src={slide.background} 
                                alt="Background" 
                                width={780} 
                                height={157} 
                                className="absolute top-0 left-0 w-[400px]" 
                            />
                            <div className="relative z-10 px-6 pt-8 flex flex-col min-h-[500px] md:h-[450px]">
                                {slide.title && (
                                    <h3 className="text-white text-3xl md:text-4xl font-bold mb-8 -mt-4">{slide.title}</h3>
                                )}
                                <h4 className="text-white text-xl mb-6">{slide.subtitle}</h4>

                                {slide.list && (
                                    <ul className="space-y-2 text-gray-300">
                                        {slide.list.map((item: any, i: any) => (
                                            <li key={i} className={`${index === 2 ? 'mt-4' : ''}`}>
                                                <div className="font-medium text-gray-300">{item.title}</div>
                                                <div className="text-sm text-gray-400">{item.description}</div>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {slide.link1 && (
                                    <Link 
                                        href={slide.link1.href}
                                        onMouseEnter={() => playSound('hover_1')}
                                        className="mt-8 mb-8 w-fit text-2xl font-semibold inline-block px-6 py-3 text-white border border-yellow rounded-lg hover:bg-white/10 transition-all duration-200"
                                    >
                                        {slide.link1.text}
                                    </Link>
                                )}

                                {slide.content && slide.content.map((text: any, i: any) => (
                                    <p key={i} className="text-gray-300 mb-8">{text}</p>
                                ))}

                                <div className="mt-auto">
                                    {slide.link && (
                                        <Link 
                                            href={slide.link.href}
                                            onMouseEnter={() => playSound('hover_1')}
                                            className="inline-block px-6 py-3 text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-200"
                                        >
                                            {slide.link.text}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            <div className="swiper-pagination !-bottom-4"></div>
        </Swiper>
    );
};

const OffersSection = async ({ locale }: { locale: string }) => {
    const t = useTranslations();
    
    const translateSlides = (slides: Slide[]) => slides.map(slide => ({
        ...slide,
        title: slide.title ? t(slide.title) : undefined,
        subtitle: slide.subtitle ? t(slide.subtitle) : undefined,
        content: slide.content ? slide.content.map((key: string) => t(key)) : undefined,
        link: slide.link ? { ...slide.link, text: t(slide.link.text) } : undefined,
        link1: slide.link1 ? { ...slide.link1, text: t(slide.link1.text) } : undefined,
        list: slide.list ? slide.list.map(item => ({
            title: t(item.title),
            description: t(item.description)
        })) : undefined
    }));

    return (
        <section className="relative pt-14 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div id="meta" className="scroll-mt-20">
                    <div className="flex items-center gap-4 my-12">
                        <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                        <div className="text-gray-400 text-sm font-medium">Meta Ads</div>
                        <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    </div>
                    <SliderSection 
                        slides={translateSlides(META_SLIDES)} 
                        bgColor="bg-[#1877F2]/15" 
                        borderColor="border border-[#1877F2]/30" 
                    />
                </div>
                
                <div id="google" className="scroll-mt-20">
                    <div className="flex items-center gap-4 my-12">
                        <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                        <div className="text-gray-400 text-sm font-medium">Google Ads</div>
                        <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    </div>
                    <SliderSection 
                        slides={translateSlides(GOOGLE_SLIDES)} 
                        bgColor="bg-gradient-to-br from-[#4285F4]/10 via-[#DB4437]/20 to-[#F4B400]/10" 
                        borderColor="border border-[#4285F4]/30" 
                    />
                </div>
                
                <div id="landing" className="scroll-mt-20">
                    <div className="flex items-center gap-4 my-12">
                        <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                        <div className="text-gray-400 text-sm font-medium">Landing Page</div>
                        <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    </div>
                    <SliderSection 
                        slides={translateSlides(LANDING_SLIDES)} 
                        bgColor="bg-gradient-to-br from-[#00B4D8]/20 to-[#0077B6]/20" 
                        borderColor="border border-[#00B4D8]/30" 
                    />
                </div>
                <div className="w-full h-12 my-8 opacity-50" style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,25 C150,75 350,-25 500,25 C650,75 850,-25 1000,25' stroke='%23CBD5E0' fill='none' /%3E%3C/svg%3E\")",
                    backgroundRepeat: "repeat-x",
                    backgroundSize: "1000px"
                }}></div>
                
            </div>
        </section>
    );
};

export default OffersSection;
