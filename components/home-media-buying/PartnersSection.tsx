'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { playSound } from '@/app/constant/sound';

export default function PartnersSection() {
    const t = useTranslations();

    return (
        <section className="bg-black pt-10 md:pt-20">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="sm:text-center">
                    <span className="text-red-500 uppercase tracking-wider">{t('partners.headline')}</span>
                    <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">{t('partners.title')}</h2>
                </div>

                <div className="pt-10 md:pt-16 pb-2">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
                        {[2, 3, 4, 5].map((index) => (
                            <div 
                                key={index}
                                className="h-[35px] md:h-[50px] w-auto flex items-center justify-center"
                            >
                                <Image 
                                    src={`/img/media-buying/logo-affiliate-partner/parthner-logo-${index}.webp`}
                                    alt={`Partner logo ${index}`}
                                    height={60}
                                    width={400}
                                    className="h-full w-auto max-w-[200px] object-contain"
                                    loading="lazy"
                                    onMouseEnter={() => playSound('hover_2')}
                                    draggable={false}
                                />
                            </div>
                        ))}
                        <div className="col-span-2 md:col-span-1 h-[35px] md:h-[50px] w-auto flex items-center justify-center">
                            <Image 
                                src="/img/media-buying/logo-affiliate-partner/parthner-logo-1.webp"
                                alt="Partner logo 1"
                                height={60}
                                width={400}
                                className="h-full w-auto max-w-[200px] object-contain"
                                loading="lazy"
                                onMouseEnter={() => playSound('hover_2')}
                                draggable={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}