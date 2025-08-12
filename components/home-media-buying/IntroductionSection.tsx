'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { playSound } from '@/app/constant/sound';
import { motion } from 'framer-motion';

export default function IntroductionSection() {
    const desktopRef = useRef<HTMLDivElement>(null);
    const mobileRef = useRef<HTMLDivElement>(null);
    const isDesktopVisible = true;

    return (
        <section className="flex flex-col lg:flex-row justify-between max-w-6xl mx-auto px-6 py-10 md:py-20 relative">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2 flex flex-col justify-between"
            >
                <div className="md:max-w-[440px]">
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-red-500 md:text-lg font-medium tracking-wide"
                    >
                        TRAFFIC AGENCY
                    </motion.p>
                    
                    <motion.h1 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-1 text-3xl md:text-5xl font-bold text-white leading-tight"
                    >
                        ADvantage Traffic Solutions
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-7 text-[#d3d3d3] md:text-lg leading-relaxed"
                    >
                        ADvantage is a Traffic Agency that specializes in traffic generation for highly specialized niches and verticals. We work World Wide, helping brands achieve results through various acquisition channels.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="w-fit mt-4 hover:scale-105 transition-all duration-100"
                    >
                        <Link href="#form" 
                            className="group relative bg-white hover:bg-white/90 transition-all duration-300 text-black px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2" 
                            onMouseEnter={() => playSound('hover_1')}
                        >
                        <span className="relative z-10">Get Started</span>
                        <span className="relative z-10 animate-[bounceX_1s_ease-in-out_infinite]">→</span>
                        <div className="absolute inset-0 rounded-full animate-pulse-border group-hover:animate-none"></div>
                        </Link>
                    </motion.div>
                </div>
                {/* PC */}
                <div ref={desktopRef} className="hidden sm:block relative h-[300px] w-full">
                    {[
                        { icon: "/img/home/telegram.svg", left: "8%", bottom: "5%", rotate: -30, isIcon: true, istg: true },
                        { text: "Traffic", left: "20%", bottom: "0%"},
                        { text: "Campaigns", left: "55%", bottom: "3%", rotate: 10 },
                        { text: "Fast", left: "2%", top: "50%", rotate: -26 },
                        { text: "Worldwide", left: "35%", top: "58%", rotate: -9 },
                        { text: "Results", left: "80%", top: "65%", },
                        { text: "Creative", left: "17%", top: "35%", rotate: 10 },
                        { text: "Meta", left: "65%", top: "40%", rotate: -10 },
                        { text: "TikTok", left: "5%", top: "10%" },
                        { icon: "/img/home/whatsapp.svg", left: "55%", top: "27%", rotate: -30, isIcon: true },
                        { icon: "/img/home/telegram.svg", left: "62%", top: "15%", rotate: -30, isIcon: true, istg: true },
                        { icon: "/img/home/instagram.svg", left: "90%", top: "15%", rotate: 10, isIcon: true }
                    ].map((item, index) => (
                        <div key={index}
                            className={`absolute bg-red-500 hover:bg-red/80 transition-all duration-100 rounded-full text-black animate-fall ${isDesktopVisible ? 'visible' : ''} ${item.isIcon ? 'flex items-center justify-center w-10 h-10' : 'rounded-[30px] px-6 py-3'} ${item.istg ? 'pr-1' : ''}`}
                            onMouseEnter={() => playSound('hover_2')}
                            style={{
                                left: item.left,
                                top: item.top,
                                bottom: item.bottom,
                                fontSize: '20px',
                                fontWeight: '500',
                                lineHeight: '1',
                                '--rotation': `${item.rotate || 0}deg`,
                                animationDelay: `${index * 0.1}s`
                            } as React.CSSProperties}
                        >
                            {item.isIcon ? (
                                <Image src={item.icon} alt="Icon" width={20} height={20} loading="lazy" /> ) : ( item.text
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative lg:w-1/2 md:ml-5 mt-12 md:mt-0"
            >
                <div className="flex flex-col justify-between space-y-8 relative">
                    {[
                        {
                            icon: '/img/home/introduction-icon-1.svg',
                            title: 'Fast Campaign Launch',
                            description: 'Quick setup and deployment of your traffic campaigns'
                        },
                        {
                            icon: '/img/home/introduction-icon-2.svg',
                            title: 'Flexible Cooperation Terms',
                            description: 'Adaptable partnership conditions to meet your needs'
                        },
                        {
                            icon: '/img/home/introduction-icon-3.svg',
                            title: 'Creative Development',
                            description: 'Ads, banners, videos, landing pages, and funnels creation'
                        },
                        {
                            icon: '/img/home/introduction-icon-4.svg',
                            title: 'Secret Gray Vertical Solutions',
                            description: 'Exclusive methods for promoting gray verticals in Meta and TikTok'
                        },
                        {
                            icon: '/img/home/introduction-icon-5.svg',
                            title: 'Reliable Traffic Partner',
                            description: 'Trusted expertise in the traffic generation industry'
                        }
                    ].map((advantage, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="z-10 flex items-start gap-6 bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 hover:bg-zinc-800/50 transition-all duration-300"
                            onMouseEnter={() => playSound('hover_2')}
                        >
                            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                                <Image src={advantage.icon} alt={advantage.title} width={24} height={24} loading="lazy" />
                            </div>
                            <div>
                                <h3 className="text-white text-lg font-semibold mb-2">
                                    {advantage.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {advantage.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="lg:hidden absolute -top-10 -left-80 opacity-80 animate-float">
                    <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" width={426} height={426} loading="lazy" priority={false} />
                </div>
                <div className="absolute bottom-5 -right-80 opacity-80 animate-float">
                    <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" width={426} height={426} loading="lazy" priority={false} />
                </div>
                <div className="hidden lg:block absolute -bottom-10 -right-[650px] w-[726px] h-[726px] opacity-40">
                    <Image src="/img/home/lines.svg" alt="Decorative lines" width={726} height={726} loading="lazy" priority={false} />
                </div>
            </motion.div>

            {/* Mobile */}
            <motion.div 
                ref={mobileRef} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="block sm:hidden relative h-[300px] w-full"
            >
                {[
                    { icon: "/img/home/telegram.svg", left: "8%", bottom: "5%", rotate: -30, isIcon: true, istg: true },
                    { text: "Traffic", left: "20%", bottom: "0%"},
                    { text: "Campaigns", right: "0%", bottom: "3%", rotate: 10 },
                    { text: "Results", left: "17%", top: "65%", },
                    { icon: "/img/home/instagram.svg", right: "0%", bottom: "20%", rotate: 10, isIcon: true },
                    { text: "Worldwide", right: "8%", top: "57%", rotate: -15 },
                    { text: "Fast", left: "2%", top: "50%", rotate: -26 },
                    { icon: "/img/home/whatsapp.svg", left: "32%", top: "48%", rotate: -30, isIcon: true },
                    { icon: "/img/home/telegram.svg", left: "47%", top: "42%", rotate: -30, isIcon: true, istg: true },
                    { text: "Meta", left: "65%", top: "35%", rotate: -10 },
                    { text: "TikTok", left: "2%", top: "30%", rotate: -12 },
                ].map((item, index) => {
                    const rotation = item.rotate || 0;
                    
                    return (
                        <motion.div 
                            key={index}
                            variants={{
                                hidden: { 
                                    opacity: 0, 
                                    y: -50,
                                    rotate: rotation 
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    rotate: rotation,
                                    transition: {
                                        duration: 0.8,
                                        delay: index * 0.15,
                                        ease: "easeOut"
                                    }
                                }
                            }}
                            className={`absolute bg-red-500 hover:bg-red/80 transition-all duration-100 rounded-full text-black ${item.isIcon ? 'w-10 h-10' : 'px-6 py-3'} ${item.istg ? 'pr-1' : ''}`}
                            onMouseEnter={() => playSound('hover_2')}
                            style={{
                                left: item.left || 'auto',
                                top: item.top || 'auto',
                                right: item.right || 'auto',
                                bottom: item.bottom || 'auto',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {item.isIcon ? (
                                <Image 
                                    src={item.icon} 
                                    alt="Icon" 
                                    width={20} 
                                    height={20} 
                                    loading="lazy"
                                /> 
                            ) : ( 
                                <span className="whitespace-nowrap">{item.text}</span>
                            )}
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}