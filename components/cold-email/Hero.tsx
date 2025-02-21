'use client';
import { useState, useRef, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { trackViewContent } from '@/utils/fbConversion';

const videoSources = {
    en: {
        preview: '/img/cold-email/video-preview-en.mp4',
        full: '/img/cold-email/video-vsl-en.mp4'
    },
    uk: {
        preview: '/img/cold-email/video-preview-uk.mp4',
        full: 'https://www.youtube.com/embed/1V7nF0gnDvA?autoplay=1&controls=0&rel=0&showinfo=0'
    },
};

export default function Hero() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const [isVideoPaused, setIsVideoPaused] = useState(false);
    const locale = useLocale();
    const t = useTranslations('cold-email.hero');
    const currentLocale = locale as keyof typeof videoSources;
    const sources = videoSources[currentLocale] || videoSources.en;
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        trackViewContent('Cold Email Service', 'Service');
    }, []);

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    const handleVideoError = (e: any) => {
        console.error('Video failed to load:', e);
        console.error('Video source:', sources.full);
        setVideoError(true);
    };

    const toggleVideoPlayback = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="relative z-10">
                <div className="container mx-auto px-4 pt-8 md:pt-12 pb-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="mb-8">
                            <span className="text-[#4F46E5] text-lg font-medium mb-4 block">
                                {t('subtitle')}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                {t('title.part1')}
                                <span className="text-[#7C3AED]"> {t('title.part2')}</span>
                            </h1>
                            <div className="flex items-center justify-center gap-6">
                                <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#4F46E5] to-[#06B6D4] opacity-80"></div>
                                <span className="text-white text-xl">{t('title.part3')}</span>
                                <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-[#4F46E5] to-[#06B6D4] opacity-80"></div>
                            </div>
                        </div>

                        <div className="max-w-[300px] mx-auto">
                            <div className="aspect-[9/16] flex items-center justify-center relative mb-12">
                                {!isPlaying ? (
                                    <>
                                        <video 
                                            className="w-full h-full object-cover rounded-lg"
                                            autoPlay 
                                            muted 
                                            loop 
                                            playsInline
                                            onError={handleVideoError}
                                            src={sources.preview}
                                        />
                                        {videoError && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                                                <p className="text-white text-center">{t('video.error.preview')}</p>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        {currentLocale === 'uk' ? (
                                            <iframe 
                                                className="w-full h-full rounded-lg"
                                                src={sources.full}
                                                allow="autoplay"
                                                allowFullScreen
                                            />
                                        ) : (
                                            <video 
                                                ref={videoRef}
                                                className="w-full h-full object-cover rounded-lg"
                                                autoPlay 
                                                playsInline
                                                onClick={toggleVideoPlayback}
                                                onError={handleVideoError}
                                                onPlay={() => setIsVideoPaused(false)}
                                                onPause={() => setIsVideoPaused(true)}
                                                src={sources.full}
                                            />
                                        )}
                                        {videoError && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                                                <p className="text-white text-center">{t('video.error.full')}</p>
                                            </div>
                                        )}
                                        {currentLocale !== 'uk' && isVideoPaused && (
                                            <div 
                                                className="absolute inset-0 flex items-center justify-center"
                                                onClick={toggleVideoPlayback}
                                            >
                                                <button 
                                                    onClick={(e) => { e.stopPropagation(); toggleVideoPlayback(); }} 
                                                    className="bg-black/40 p-4 rounded-full"
                                                >
                                                    <svg 
                                                        className="w-8 h-8 text-white" 
                                                        viewBox="0 0 24 24" 
                                                        fill="currentColor" 
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        )}
                                    </>
                                )}
                                
                                {!isPlaying && !videoError && (
                                    <div 
                                        className="absolute inset-0 flex items-center justify-center cursor-pointer group" 
                                        onClick={handlePlayClick}
                                    >
                                        <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/50"></div>
                                        
                                        <div className="relative">
                                            <div className="absolute -inset-2 bg-[#6db4c0]/30 rounded-full animate-ping" />
                                            
                                            <div className="relative w-16 h-16 rounded-full bg-[#6db4c0] flex items-center justify-center shadow-lg shadow-[#6db4c0]/50 transition-all duration-300 group-hover:scale-110">
                                                <svg 
                                                    className="ml-1 w-6 h-6 relative z-10" 
                                                    viewBox="0 0 86 97" 
                                                    fill="none" 
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path 
                                                        d="M80.1258 40.5562L13.9878 2.50912C7.98783 -0.942487 0.5 3.38842 0.5 10.3104V87.4713C0.5 94.4415 8.08185 98.7661 14.0814 95.218L80.2193 56.1042C86.1521 52.5955 86.1003 43.9932 80.1258 40.5562Z" 
                                                        fill="currentColor" 
                                                        className="text-white"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <a href="#calendly" className="btn-primary">
                                {t('buttons.book')}
                            </a>
                            <a 
                                href="#results"
                                className="px-8 py-3 border border-[#06B6D4] text-[#06B6D4] rounded-full font-medium hover:bg-[#06B6D4] hover:text-white transition-all duration-300"
                            >
                                {t('buttons.results')}
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                            <div className="text-center">
                                <h3 className="text-3xl font-bold mb-2 text-[#7C3AED]">{t('stats.deliverability.value')}</h3>
                                <p className="text-gray-400">{t('stats.deliverability.label')}</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-3xl font-bold mb-2 text-[#06B6D4]">{t('stats.revenue.value')}</h3>
                                <p className="text-gray-400">{t('stats.revenue.label')}</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-3xl font-bold mb-2 text-[#4F46E5]">{t('stats.setup.value')}</h3>
                                <p className="text-gray-400">{t('stats.setup.label')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
