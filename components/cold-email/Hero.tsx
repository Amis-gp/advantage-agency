'use client';
import { useState } from 'react';
import { useLocale } from 'next-intl';
import ParticlesBackground from './ParticlesBackground';


//https://drive.google.com/file/d/1scpjB4RD9oDB3gXd9_Cx5EpqJLPfPv0O/view?usp=drive_link
const videoSources = {
    en: {
        preview: 'https://advantage-agency.co/img/cold-email/video-preview-en.mp4',
        full: 'https://advantage-agency.co/img/cold-email/video-vsl-en.mp4'
    },
    uk: {
        preview: '/img/cold-email/video-preview-uk.mp4',
        full: '/img/cold-email/video-vsl-uk.mp4'
    },
};

export default function Hero() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const locale = useLocale();

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    const handleVideoError = () => {
        console.error('Video failed to load');
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
                            <span className="text-[#D12923] text-lg font-medium mb-4 block">
                                Attention Marketing Companies:
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Book 100+ Qualified Calls
                                <span className="text-[#D12923]"> in 6 Months</span>
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
                                        <video 
                                            className="w-full h-full object-cover rounded-lg" 
                                            controls
                                            autoPlay
                                            onError={handleVideoError}
                                            src={sources.full}
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
                                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white z-10 transition-transform duration-300 group-hover:scale-110">
                                            <svg className="ml-1" width="19" height="20" viewBox="0 0 86 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M80.1258 40.5562L13.9878 2.50912C7.98783 -0.942487 0.5 3.38842 0.5 10.3104V87.4713C0.5 94.4415 8.08185 98.7661 14.0814 95.218L80.2193 56.1042C86.1521 52.5955 86.1003 43.9932 80.1258 40.5562Z" fill="#000"/>
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <a href="/form"
                                className="px-8 py-3 bg-[#D12923] text-white rounded-full font-medium hover:bg-[#B22320] transition-all duration-300">
                                Book Your Growth Call
                            </a>
                            <a href="#client-results"
                                className="px-8 py-3 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                                View Client Results
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                            <div className="text-center">
                                <h3 className="text-3xl font-bold mb-2">98%</h3>
                                <p className="text-gray-400">Email Deliverability</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-3xl font-bold mb-2">$350K+</h3>
                                <p className="text-gray-400">Revenue Generated</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-3xl font-bold mb-2">7 Days</h3>
                                <p className="text-gray-400">Setup Time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
