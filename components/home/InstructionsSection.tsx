'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { playSound } from '@/app/constant/sound';

export default function Instructions() {
    const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
    const t = useTranslations('instructions');
    const [strokeWidth, setStrokeWidth] = useState(6);
    
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
                            // Мобільна версія: простіші криві
                            const cp1x = x;
                            const cp1y = y + (nextY - y) / 3;
                            const cp2x = nextX;
                            const cp2y = nextY - (nextY - y) / 3;
                            path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${nextX} ${nextY}`;
                        } else {
                            // Десктопна версія: оригінальні криві
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
                        // Мобільна версія: вертикальніші криві
                        const midY = (y + nextY) / 2;
                        const cp1x = x;
                        const cp1y = midY;
                        const cp2x = nextX;
                        const cp2y = midY;
                        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${nextX} ${nextY}`;
                    } else {
                        // Десктопна версія: оригінальні криві
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

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="bg-black pt-10 md:pt-20">
            <div className="max-w-[1400px] mx-auto px-6">
                <span className="text-red uppercase tracking-wider">
                    {t('headline')}
                </span>
                <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">
                    {t('title')}
                </h2>
                
                <div className="md:flex justify-between w-full">
                    <p className="text-white/70 mt-4 md:text-lg">{t('description')}</p>
                
                    <div className="w-fit mt-4 hover:scale-105 transition-all duration-100">
                        <Link href="#form" 
                            className="group relative bg-white hover:bg-white/90 transition-all duration-300 text-black px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2" 
                            onMouseEnter={() => playSound('hover_1')}
                        >
                            <span className="relative z-10">{t('button')}</span>
                            <span className="relative z-10 animate-[bounceX_1s_ease-in-out_infinite]">→</span>
                            <div className="absolute inset-0 rounded-full animate-pulse-border group-hover:animate-none"></div>
                        </Link>
                    </div>

                </div>


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
                            style={{
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeDasharray: '0, 30000',
                                animation: 'drawPath 2s ease-out forwards',
                            }}
                        />
                    </svg>

                    {[...Array(6)].map((_, index) => (
                        <div 
                            key={index} 
                            className={`z-10 flex justify-center ${index % 2 === 1 ? 'mt-28 md:mt-80' : '-mt-14'}`} 
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="relative rounded-2xl border border-white/90 bg-black p-3 md:p-12 space-y-4 md:space-y-10 animate-fadeIn max-w-[200px] md:max-w-[350px] h-fit w-full">
                                <p className="text-white text-xs sm:text-base md:text-xl font-semibold">
                                    {t(`steps.step${index + 1}.title`)}
                                </p>
                                <div 
                                    ref={(el) => {
                                        if (circleRefs.current) {
                                            circleRefs.current[index] = el;
                                        }
                                    }}
                                    className={`absolute ${index % 2 === 0 ? 'left-16' : 'right-16'} ${index === 0 ? '!top-8 md:!top-28 !left-auto -right-6 md:!-right-12' : ''} -top-11  md:-top-20 xl:-top-28 flex justify-center items-center w-10 h-10 md:w-20 md:h-20 xl:w-24 xl:h-24 z-30 bg-red rounded-full`}
                                >
                                    <span className="text-sm md:text-xl xl:text-4xl font-semibold">{`${index + 1}`}</span>
                                </div>
                                <Image 
                                    src={`/img/home/instruction-icon-${index + 1}.webp`} 
                                    alt={t(`steps.step${index + 1}.title`)} 
                                    width={200} 
                                    height={150} 
                                    loading="lazy" 
                                />
                                <div className="text-center gap-2 text-white border border-white rounded-3xl py-2 md:py-4 px-4 md:px-3">
                                    <span className="text-xs sm:text-base md:text-xl">
                                        {t(`steps.step${index + 1}.duration`)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}