'use client';

import Image from 'next/image';
import { Link } from '@/navigation';
import { playSound } from '@/app/constant/sound';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OffersSection = () => {
    const slides = [
        {
            logo: "/img/offers/meta-logo.svg",
            background: "/img/offers/1.svg",
            title: "ВІД $400",
            subtitle: "Як працює таргетована реклама?",
            content: [
                "Користувачі переглядають стрічки Facebook та Instagram, у потрібний момент їм показується наша реклама.",
                "Завдяки алгоритмам Meta та штучному інтелекту, реклама знаходить вашу аудиторію через аналіз інтересів та ключових слів, які користувач вимовляє біля смартфона, що підвищує шанс отримати ліди чи покупки."
            ],
            link: { text: "Дізнатись більше", href: "/services/meta-ads" }
        },
        {
            logo: "/img/offers/meta-logo.svg",
            background: "/img/offers/2.svg",
            subtitle: "Чому варто працювати з нами?",
            list: [
                "1. Досвід у різних нішах",
                "2. Чітка структура роботи",
                "3. Брифування та аналіз бізнесу",
                "4. Планування та оптимізація рекламних кампаній",
                "5. Робота з Аудиторією",
                "6. Більше, ніж трафік"
            ]
        },
        {
            logo: "/img/offers/meta-logo.svg",
            background: "/img/offers/3.svg",
            subtitle: "Соціальне доказ",
            link1: { text: "ЧИТАТИ КЕЙС", href: "/case-studies" },
            content: ["Хочете таких результатів? Отримайте безкоштовну стратегію"],
            link: { text: "Отримати стратегію!", href: "/strategy" }
        }
    ];

    return (
        <section className="relative pt-14 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true,
                        dynamicBullets: false,
                        renderBullet: function (index: number, className: string) {
                            return `<span class="${className}"></span>`;
                        },
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                    
                    className="!pb-12"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="h-auto ">
                            <div className="bg-[#0B1221] rounded-2xl py-8 relative flex flex-col">
                                <Image 
                                    src={slide.logo} 
                                    alt="Meta Ads" 
                                    width={300} 
                                    height={30} 
                                    className="mb-4 px-6 md:w-64" 
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
                                        
                                        {slide.link1 && (
                                            <Link 
                                                href={slide.link1.href}
                                                onMouseEnter={() => playSound('hover_1')}
                                                className="mt-12 mb-28 w-fit text-2xl font-semibold inline-block px-6 py-3 text-white border border-yellow rounded-lg hover:bg-white/10 transition-all duration-200"
                                            >
                                                {slide.link1.text}
                                            </Link>
                                        )}

                                        <div className="flex-grow">
                                            {slide.content && slide.content.map((text, i) => (
                                                <p key={i} className="text-gray-300 mb-8">{text}</p>
                                            ))}
                                            
                                            {slide.list && (
                                                <ul className="space-y-4 text-gray-300">
                                                    {slide.list.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                        
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
                </Swiper>
                <div className="swiper-pagination !bottom-8"></div>
            </div>
        </section>
    );
};

export default OffersSection;
