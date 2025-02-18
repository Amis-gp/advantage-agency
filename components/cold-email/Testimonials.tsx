'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function ClientResults() {
    const t = useTranslations('cold-email.testimonials');

    const testimonials = Array.from({ length: 6 }, (_, i) => ({
        name: t(`items.${i}.name`),
        position: t(`items.${i}.position`),
        company: t(`items.${i}.company`),
        text: t(`items.${i}.text`),
        image: `/img/cold-email/testimonial-${i + 1}.webp`,
        imageAlt: t(`items.${i}.image_alt`)
    }));

    return (
        <section id="testimonials" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {t('title.part1')} <span className="text-[#4F46E5]">{t('title.part2')}</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index}
                            className="bg-[#111019] rounded-2xl p-6 border border-zinc-800 hover:border-[#4F46E5] transition-all duration-300 group"
                        >
                            <div className="relative">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="relative w-16 h-16 flex-shrink-0">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.imageAlt}
                                            fill
                                            className="rounded-full object-cover"
                                            loading="lazy"
                                            sizes="(max-width: 250px) 64px, 64px"
                                            quality={75}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-gray-400 ">
                                            {testimonial.position} @{testimonial.company}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-white text-lg leading-relaxed">
                                    "{testimonial.text}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div className="text-center mt-12">
                    <a href="#all-results" className="inline-flex items-center text-white hover:text-[#4F46E5] transition-colors duration-300">
                        <span className="mr-2">{t('cta')}</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div> */}
            </div>
        </section>
    );
}
