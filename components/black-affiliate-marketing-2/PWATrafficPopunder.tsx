"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PWATrafficPopunder() {
    const [showPopunder, setShowPopunder] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopunder(true);
        }, 15000);
        return () => clearTimeout(timer);
    }, []);

    const closePopunder = () => {
        setShowPopunder(false);
    };

    if (!showPopunder) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn"
            onClick={closePopunder}
        >
            <div 
                className="bg-gradient-to-br from-black via-zinc-900 to-black border-2 border-red-600/60 rounded-2xl shadow-2xl shadow-red-600/20 max-w-lg w-full p-8 relative animate-scaleIn"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={closePopunder}
                    className="absolute -top-3 -right-3 bg-zinc-800 hover:bg-red-600 rounded-full p-2 transition-all duration-300 hover:scale-110 z-10"
                    aria-label="Close"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-white" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2.5} 
                            d="M6 18L18 6M6 6l12 12" 
                        />
                    </svg>
                </button>

                <div className="text-white space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white">
                            PWA Traffic
                        </h3>
                    </div>

                    <h4 className="text-xl font-semibold leading-tight text-white">
                        Want to know why PWA traffic is so successful and how it can work for you?
                    </h4>
                    
                    <p className="text-gray-300 leading-relaxed">
                        Discover the secrets of high-converting PWA traffic and scale your campaigns like never before.
                    </p>

                    <div className="pt-2">
                        <Link
                            href="https://t.me/nayborovskiy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full gap-2 px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                            </svg>
                            Get Started on Telegram
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}

