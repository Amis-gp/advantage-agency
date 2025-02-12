'use client';
import { useState } from 'react';
import { useLocale } from 'next-intl';


const videoSources = {
    en: {
        preview: '/img/cold-email/video-preview-en.mp4',
        full: '/img/cold-email/video-vsl-en.mp4'
    },
    uk: {
        preview: '/img/cold-email/video-preview-uk.mp4',
        full: 'https://www.youtube.com/embed/1V7nF0gnDvA?autoplay=1&rel=0&showinfo=0'
    },
};

export default function Hero() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const locale = useLocale();

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    const handleVideoError = (e: any) => {
        console.error('Video failed to load:', e);
        console.error('Video source:', sources.full);
        setVideoError(true);
    };

    const currentLocale = locale as keyof typeof videoSources;
    const sources = videoSources[currentLocale] || videoSources.en;

    return (
        <div className="relative min-h-screen overflow-hidden">
            
            <div className="relative z-10">
                <div className="container mx-auto px-4 pt-8 md:pt-12 pb-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="mb-8">
                            <span className="text-[#4F46E5] text-lg font-medium mb-4 block">
                                For Marketing & Lead Generation Agencies:
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Book 20+ Qualified Calls
                                <span className="text-[#7C3AED]"> Every Month</span>
                            </h1>
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
                                                <p className="text-white text-center">Preview video is unavailable</p>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        <iframe 
                                            className="w-full h-full rounded-lg"
                                            src={sources.full}
                                            allow="autoplay"
                                            allowFullScreen
                                        />
                                        {videoError && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                                                <p className="text-white text-center">Full video is unavailable</p>
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
                                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#6db4c0] z-10 transition-transform duration-300 group-hover:scale-110">
                                            <svg className="ml-1" width="19" height="20" viewBox="0 0 86 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M80.1258 40.5562L13.9878 2.50912C7.98783 -0.942487 0.5 3.38842 0.5 10.3104V87.4713C0.5 94.4415 8.08185 98.7661 14.0814 95.218L80.2193 56.1042C86.1521 52.5955 86.1003 43.9932 80.1258 40.5562Z" fill="#fff"/>
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <a href="#calendly"
                                className="btn-primary"
                            >
                                Book Your Growth Call
                            </a>
                            <a href="#client-results"
                                className="px-8 py-3 border border-[#06B6D4] text-[#06B6D4] rounded-full font-medium hover:bg-[#06B6D4] hover:text-white transition-all duration-300">
                                View Client Results
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                            <div className="text-center">
                                <h3 className="text-3xl font-bold mb-2 text-[#7C3AED]">95%</h3>
                                <p className="text-gray-400">Email Deliverability</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-3xl font-bold mb-2 text-[#06B6D4]">$250K+</h3>
                                <p className="text-gray-400">Revenue Generated</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-3xl font-bold mb-2 text-[#4F46E5]">14 Days</h3>
                                <p className="text-gray-400">Average Setup Time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
