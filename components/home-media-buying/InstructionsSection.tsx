'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { playSound } from '@/app/constant/sound';
import { motion, useTransform, useScroll } from 'framer-motion';

export default function Instructions() {
    const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [strokeWidth, setStrokeWidth] = useState(6);
    
    const { scrollY } = useScroll();
    const rotate2 = useTransform(scrollY, [0, 3000], [0, -360]);
    const steps = [
        {
            title: "Marketing research, analysis geo",
            duration: "Duration 1 day",
        },
        {
            title: "Choosing an offer and locking in terms with the advertiser (aff networks)",
            duration: "Duration 2 days",
        },
        {
            title: "Technical setup of the workflow",
            duration: "Duration 2 days",
        },
        {
            title: "Test launch of traffic to the offer",
            duration: "Duration 7 days",
        },
        {
            title: "Traffic analysis and optimization",
            duration: "Duration 3 weeks",
        },
        {
            title: "Scaling ad campaigns",
            duration: "Duration individually",
        }
    ];
    
    useEffect(() => {
        const updatePath = () => {
            const circles = circleRefs.current.filter(el => el !== null);
            if (circles.length < 2) return;

            let path = '';
            const isMobile = window.innerWidth < 768;

            circles.forEach((circle, index) => {
                if (!circle) return;
                
                const rect = circle.getBoundingClientRect();
                const svgContainer = document.querySelector('.steps-connection-svg');
                if (!svgContainer) return;
                
                const containerRect = svgContainer.getBoundingClientRect();
                
                const x = rect.left - containerRect.left + (rect.width / 2);
                const y = rect.top - containerRect.top + (rect.height / 2);
                
                if (index === 0) {
                    path += `M ${x} ${y}`;
                    const nextRect = circleRefs.current[1]?.getBoundingClientRect();
                    if (nextRect) {
                        const nextX = nextRect.left - containerRect.left + (nextRect.width / 2);
                        const nextY = nextRect.top - containerRect.top + (nextRect.height / 2);
                        
                        if (isMobile) {
                            const cp1x = x;
                            const cp1y = y + (nextY - y) / 3;
                            const cp2x = nextX;
                            const cp2y = nextY - (nextY - y) / 3;
                            path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${nextX} ${nextY}`;
                        } else {
                            const cp1x = x + 100;
                            const cp1y = y;
                            const cp2x = nextX - 50;
                            const cp2y = nextY - 100;
                            path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${nextX} ${nextY}`;
                        }
                    }
                } else if (index < circles.length - 1) {
                    const nextRect = circleRefs.current[index + 1]?.getBoundingClientRect();
                    if (!nextRect) return;
                    
                    const nextX = nextRect.left - containerRect.left + (nextRect.width / 2);
                    const nextY = nextRect.top - containerRect.top + (nextRect.height / 2);
                    
                    if (isMobile) {
                        const midY = (y + nextY) / 2;
                        const cp1x = x;
                        const cp1y = midY;
                        const cp2x = nextX;
                        const cp2y = midY;
                        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${nextX} ${nextY}`;
                    } else {
                        const direction = index % 2 === 0 ? 1 : -1;
                        const cp1x = x;
                        const cp1y = y + 100;
                        const cp2x = nextX + (200 * direction);
                        const cp2y = nextY - 100;
                        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${nextX} ${nextY}`;
                    }
                }
            });

            const svgPath = document.querySelector('.steps-path-line');
            if (svgPath) {
                svgPath.setAttribute('d', path);
            }
        };

        const timeouts = [100, 500, 1000, 2000].map(delay => 
            setTimeout(updatePath, delay)
        );

        window.addEventListener('resize', updatePath);
        
        return () => {
            window.removeEventListener('resize', updatePath);
            timeouts.forEach(clearTimeout);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setStrokeWidth(window.innerWidth < 768 ? 4 : 6);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="pt-20 md:pt-32" id="instructions">
            <div className="max-w-[1400px] mx-auto px-6 relative">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="md:flex justify-between w-full relative"
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="z-10 relative"
                    >
                        <span className="text-red-500 uppercase tracking-wider">Instructions</span>
                        <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">How the collaboration process looks</h2>
                        <p className="text-white/70 mt-4 md:text-lg">Depending on your marketing needs, we develop a workflow for your business!</p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-fit mt-4 hover:scale-105 transition-all duration-100 flex items-end z-10 relative"
                    >
                        <Link href="#form" 
                            className="group relative bg-white hover:bg-white/90 transition-all duration-300 text-black px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2" 
                            onMouseEnter={() => playSound('hover_1')}
                        >
                            <span className="relative z-10 whitespace-nowrap">Start collaboration</span>
                            <span className="relative z-10 animate-[bounceX_1s_ease-in-out_infinite]">→</span>
                            <div className="absolute inset-0 rounded-full animate-pulse-border group-hover:animate-none"></div>
                        </Link>
                    </motion.div>
                    <div className="absolute -rotate-12 sm:rotate-0 -top-20 -right-52 sm:-top-40 sm:-right-80 w-[426px] h-[426px] sm:w-[726px] sm:h-[726px] opacity-40">
                        <Image src="/img/home/lines.svg" alt="Decorative lines" width={726} height={726} loading="lazy" priority={false} />
                    </div>

                    <motion.div className="md:hidden absolute top-72 right-24 sm:top-10 lg:right-80 sm:right-[50%] xl:right-64 w-6 h-6 sm:w-8 sm:h-8 xl:w-auto xl:h-auto" style={{ rotate: rotate2 }}>
                        <Image src="/img/home/star.svg" alt="Star" width={64} height={64} loading="lazy" priority={false} />
                    </motion.div>

                    <div className="hidden md:block absolute top-0 -right-48 opacity-80">
                        <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" width={426} height={426} loading="lazy" priority={false} className='opacity-40'/>
                    </div>
                </motion.div>


                <div className="grid grid-cols-2 gap-4 relative mt-32 md:mt-32">
                    <svg 
                        className="steps-connection-svg absolute inset-0 w-full h-full" 
                        style={{ 
                            stroke: '#D12923',
                            strokeWidth: strokeWidth,
                            fill: 'none',
                            minHeight: '1000px',
                            pointerEvents: 'none',
                            filter: 'drop-shadow(0 0 8px rgba(209, 41, 35, 0.3))',
                        }}
                        preserveAspectRatio="none"
                    >
                        <path 
                            className="steps-path-line" 
                            d="" 
                        />
                    </svg>

                    {steps.map((step, index) => (
                        <div 
                            key={index}
                            className={`flex justify-center ${index % 2 === 1 ? 'mt-28 md:mt-80' : '-mt-14'} relative`}
                        >
                            <div className="z-20 relative rounded-2xl border border-white/90 bg-black p-3 md:p-12 space-y-4 md:space-y-10 max-w-[200px] md:max-w-[350px] h-fit w-full">
                                <p className="text-white text-xs sm:text-base md:text-xl font-semibold">
                                    {step.title}
                                </p>
                                <div 
                                    ref={(el) => {
                                        if (circleRefs.current) {
                                            circleRefs.current[index] = el;
                                        }
                                    }}
                                    className={`absolute ${index % 2 === 0 ? 'left-16' : 'right-16'} ${index === 0 ? '!top-8 md:!top-28 !left-auto -right-6 md:!-right-12' : ''} -top-11  md:-top-20 xl:-top-28 flex justify-center items-center w-10 h-10 md:w-20 md:h-20 xl:w-24 xl:h-24 z-30 bg-red-500 rounded-full`}
                                >
                                    <span className="text-sm md:text-xl xl:text-4xl font-semibold">{`${index + 1}`}</span>
                                </div>
                                <div className='w-fit mx-auto'>
                                    <Image 
                                        src={`/img/media-buying/instruction-icon-${index + 1}.webp`} 
                                        alt={step.title} 
                                        width={170} 
                                        height={120}
                                        loading="lazy" 
                                        className='max-h-[50px] sm:max-h-[100px] md:max-h-[120px] object-contain'
                                    />
                                </div>
                                <div className="text-center gap-2 text-white border border-white rounded-3xl py-2 md:py-4 px-4 md:px-3">
                                    <span className="text-xs sm:text-base md:text-xl">
                                        {step.duration}
                                    </span>
                                </div>
                            </div>

                            <div 
                                className={`${index === 1 ? '' : 'hidden'} absolute -top-20 right-14 sm:-top-32 md:-top-80 sm:right-40 md:right-22 lg:right-40 xl:right-72 rotate-45 md:rotate-12`}
                            >
                                <Image src="/img/home/arrow.webp" alt="Decorative lines" className='w-14 h-10 md:w-[250px] md:h-[250px]' width={200} height={200}  loading="lazy" priority={false} />
                            </div>
                            <div className={`${index === 2 ? '' : 'hidden'} absolute -top-14 left-0 md:-top-48 md:left-22 lg:left-10 xl:left-20`}>
                                <Image src="/img/home/rocket.webp" alt="Decorative lines" className='w-10 h-11 md:w-[139px] md:h-[150px]' width={200} height={200}  loading="lazy" priority={false} />
                            </div>
                            <div className={`${index === 3 ? '' : 'hidden'} absolute -top-14 right-0 md:-top-48 md:right-22 lg:right-10 xl:right-20`}>
                                <Image src="/img/home/brain.webp" alt="Decorative lines" className='w-10 h-11 md:w-[139px] md:h-[150px]' width={200} height={200}  loading="lazy" priority={false} />
                            </div>
                            <div className={`${index === 4 ? '' : 'hidden'} absolute -top-14 left-0 md:-top-48 md:left-22 lg:left-10 xl:left-20 scale-x-[-1]`}>
                                <Image src="/img/home/arrow.webp" alt="Decorative lines" className='w-10 h-11 md:w-[139px] md:h-[150px]' width={200} height={200}  loading="lazy" priority={false} />
                            </div>
                            <div className={`${index === 4 ? '' : 'hidden'} absolute bottom-14 left-12 md:bottom-16 md:left-44 lg:left-60 xl:left-80`}>
                                <Image src="/img/home/success.webp" alt="Decorative lines" className='w-24 h-20 md:w-[139px] md:h-[150px]' width={200} height={200}  loading="lazy" priority={false} />
                            </div>
                            <div className={`${index === 5 ? '' : 'hidden'} absolute -top-14 left-0 md:-top-48 md:left-22 lg:left-10 xl:left-20`}>
                                <Image src="/img/home/schedule.webp" alt="Decorative lines" className='w-10 h-11 md:w-[139px] md:h-[150px]' width={200} height={200}  loading="lazy" priority={false} />
                            </div>
                            <div className={`${index === 5 ? '' : 'hidden'} absolute -bottom-40 left-24 md:-bottom-40 md:left-44 lg:left-60 xl:left-80 w-[426px] h-[426px] sm:w-[726px] sm:h-[726px] opacity-40`}>
                                <Image src="/img/home/lines.svg" alt="Decorative lines" width={726} height={726} loading="lazy" priority={false} />
                            </div>
                        </div>
                    ))}
                </div>
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 0.6, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute top-[15%] -left-20 animate-float"
                >
                    <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" className='w-52 h-52 md:w-[450px] md:h-[450px] opacity-40' width={200} height={200} loading="lazy" priority={false} />
                </motion.div>
                <div className="absolute top-[30%] -right-20 opacity-60">
                    <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" className='w-52 h-52 md:w-[450px] md:h-[450px] opacity-40' width={266} height={266} loading="lazy" priority={false} />
                </div>
                <div className="absolute top-[50%] -left-20 opacity-60">
                    <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" className='w-52 h-52 md:w-[450px] md:h-[450px] opacity-40' width={300} height={300} loading="lazy" priority={false} />
                </div>
                <div className="absolute top-[70%] -right-20 opacity-60 animate-float">
                    <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" className='w-52 h-52 md:w-[450px] md:h-[450px] opacity-40' width={326} height={326} loading="lazy" priority={false} />
                </div>
            </div>
        </section>
    );
}