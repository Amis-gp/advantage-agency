'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import CaseStudies from './CaseStudies';
import Link from 'next/link';
import { trackButtonClick, trackVideoPlay } from '@/utils/fbConversion';

export default function Results() {
    const t = useTranslations('cold-email.results');
    const locale = useLocale();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const caseUrl = locale === 'uk' ? '/cases/v14uk' : '/cases/v14';

    const stats = Array.from({ length: 2 }, (_, i) => ({
        number: t(`stats.${i}.number`),
        label: t(`stats.${i}.label`),
        description: t(`stats.${i}.description`)
    }));

    const handlePlayPause = async () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
                await trackVideoPlay('testimonial', locale);
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleCaseClick = async () => {
        await trackButtonClick('View Case Study', 'Results');
    };

    return (
        <section id="results" className="relative bg-[#111019] py-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Hexagon Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' stroke-width='2' stroke='%234F46E5' fill='none'/%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }}
                />

                {/* Glowing Elements */}
                <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-[#4F46E5] rounded-full opacity-[0.03] blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#7C3AED] rounded-full opacity-[0.03] blur-[100px] animate-pulse-slow" />

                {/* Animated Lines */}
                <div className="absolute inset-0">
                    <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4F46E5]/20 to-transparent animate-pulse-slow" />
                    <div className="absolute top-[80%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7C3AED]/20 to-transparent animate-pulse-slow" />
                </div>

                {/* Dots Pattern */}
                <div className="absolute inset-0 opacity-[0.1]"
                    style={{
                        backgroundImage: `radial-gradient(#4F46E5 1px, transparent 1px)`,
                        backgroundSize: '30px 30px'
                    }}
                />
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-3 h-3 bg-[#4F46E5]/30 rounded-full animate-float" />
                <div className="absolute top-40 right-20 w-2 h-2 bg-[#7C3AED]/30 rounded-full animate-float-slow" />
                <div className="absolute bottom-20 left-1/3 w-4 h-4 bg-[#06B6D4]/30 rounded-full animate-float-slower" />
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {t('title.case')} <span className="text-[#4F46E5]">{t('title.name')}</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
                        {t('subtitle.main')}
                    </p>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto italic">
                        {t('subtitle.description')}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-black/30 rounded-2xl p-8 border border-[#4F46E5] transition-all duration-300 h-fit my-auto"
                    >
                        <div className="grid grid-cols-2 gap-8 relative mb-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <h3 className={`text-3xl md:text-4xl font-bold mb-2 ${
                                        index % 3 === 0 ? 'text-[#4F46E5]' :
                                        index % 3 === 1 ? 'text-[#06B6D4]' :
                                        'text-[#7C3AED]'
                                    }`}>
                                        {stat.number}
                                    </h3>
                                    <p className="text-white font-medium mb-2">
                                        {stat.label}
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        {stat.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <Link 
                            href={caseUrl}
                            className="flex items-center justify-center gap-3 text-white bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#06B6D4] p-3 rounded-xl hover:opacity-90 transition-all duration-300 group mt-8"
                            onClick={handleCaseClick}
                        >
                            <span className="text-sm font-medium tracking-wide">
                                {t('viewCase')}
                            </span>
                            <svg 
                                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                                />
                            </svg>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px]"
                    >
                        <div className="h-[390px] absolute top-0 md:left-32 hidden md:block shadow-2xl rounded-xl shadow-purple-500/50">
                            <Image
                                src="/img/cold-email/screen-instagram.jpg"
                                alt={t('images.instagram')}
                                width={590}
                                height={1280}
                                loading="lazy"
                                quality={75}
                                className="h-full w-auto rounded-xl shadow-lg"
                            />
                        </div>
                        <div className="md:absolute mx-auto w-fit md:w-auto md:top-4 md:right-8 rounded-xl overflow-hidden">
                            <div className="relative group">
                                <video
                                    ref={videoRef}
                                    className="h-[400px] mx-auto"
                                    poster="/img/cold-email/video-testimonial-poster.webp"
                                    onPlay={() => setIsPlaying(true)}
                                    onPause={() => setIsPlaying(false)}
                                >
                                    <source src="/img/cold-email/video-testimonial.mp4" type="video/mp4" />
                                </video>

                                {/* Custom Play Button */}
                                <button
                                    onClick={handlePlayPause}
                                    className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-300
                                        ${isPlaying ? 'opacity-0 hover:opacity-100 hover:bg-black/20' : 'bg-black/40'}`}
                                >
                                    <div className={`transform transition-all duration-300 
                                        ${isPlaying ? 'scale-75 group-hover:scale-100' : 'scale-100'}
                                        ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
                                    >
                                        {isPlaying ? (
                                            // Pause Icon
                                            <div className="w-20 h-20 rounded-full bg-[#4F46E5] flex items-center justify-center shadow-lg shadow-[#4F46E5]/50">
                                                <div className="flex gap-2">
                                                    <div className="w-2 h-8 bg-white rounded-sm"></div>
                                                    <div className="w-2 h-8 bg-white rounded-sm"></div>
                                                </div>
                                            </div>
                                        ) : (
                                            // Play Icon
                                            <div className="relative">
                                                {/* Ripple Effect */}
                                                <div className="absolute -inset-4 bg-[#4F46E5]/20 rounded-full animate-ping" />
                                                <div className="absolute -inset-8 bg-[#4F46E5]/10 rounded-full animate-pulse" />
                                                
                                                {/* Play Button */}
                                                <div className="relative w-16 h-16 rounded-full bg-[#4F46E5] flex items-center justify-center shadow-lg shadow-[#4F46E5]/50 group-hover:scale-110 transition-transform duration-300">
                                                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </button>

                                {/* Video Controls */}
                                {isPlaying && (
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="flex items-center gap-4">
                                            <button
                                                onClick={handlePlayPause}
                                                className="text-white hover:text-[#4F46E5] transition-colors"
                                            >
                                                {isPlaying ? (
                                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative aspect-[1400/773] w-full max-w-6xl mx-auto"
                >
                    <Image
                        src="/img/cold-email/results.webp"
                        alt={t('images.instagram')}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px"
                        priority={false}
                        quality={75}
                        className="object-cover rounded-xl shadow-lg"
                        placeholder="blur"
                        blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAJYgN4hT4xqgAAAABJRU5ErkJggg=="
                    />
                </motion.div>
            </div>
            <CaseStudies />
        </section>
    );
}
