'use client';
import { useTranslations } from 'next-intl';
import { playSound } from '@/app/constant/sound';

export default function StatsSection() {
    const t = useTranslations();
    const content = "EFFICIENCY GROWTH QUALITY SOLUTIONS INNOVATION CONNECT LEAD";

    return (
        <section className="pt-14">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div 
                        className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 text-center flex flex-col items-center justify-center hover:scale-105 hover:bg-zinc-800 transition-all duration-100"
                        onMouseEnter={() => playSound('hover_2')}
                    >
                        <h3 className="text-6xl font-bold mb-4">72</h3>
                        <p className="text-gray-400">{t('stats.specialists')}</p>
                    </div>
                    
                    <div 
                        className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 text-center flex flex-col items-center justify-center hover:scale-105 hover:bg-zinc-800 transition-all duration-100"
                        onMouseEnter={() => playSound('hover_2')}
                    >
                        <h3 className="text-6xl font-bold mb-4">43%</h3>
                        <p className="text-gray-400">{t('stats.budget')}</p>
                    </div>
                    
                    <div 
                        className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 text-center flex flex-col items-center justify-center hover:scale-105 hover:bg-zinc-800 transition-all duration-100"
                        onMouseEnter={() => playSound('hover_2')}
                    >
                        <h3 className="text-6xl font-bold mb-4">
                            7 <span className="text-6xl">{t('stats.months')}</span>
                        </h3>
                        <p className="text-gray-400">{t('stats.cases')}</p>
                    </div>
                </div>
            </div>

            <div className="bg-black w-full overflow-hidden whitespace-nowrap">
                <div className="relative max-w-[1400px] mx-auto">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
                    <div className="overflow-hidden">
                        <div className="inline-flex animate-marquee mt-10 md:mt-16">
                            {[...Array(2)].map((_, index) => (
                                <div key={index} className="flex items-center">
                                    {content.split(' ').map((word, wordIndex) => (
                                        <div key={wordIndex} className="flex items-center">
                                            <span className="text-white text-2xl md:text-4xl font-bold px-4 md:px-8">
                                                {word}
                                            </span>
                                            <div className="w-3 h-3 md:w-6 md:h-6 bg-red rotate-45" />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}