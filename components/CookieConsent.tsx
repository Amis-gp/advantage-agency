"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function CookieConsent() {
    const t = useTranslations('cookies');
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setShowConsent(true);
            const timer = setTimeout(() => {
                acceptCookies();
            }, 7000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'true');
        setShowConsent(false);
    };

    if (!showConsent) return null;

    return (
        <div className="fixed bottom-4 left-4 w-[calc(100%-32px)] sm:w-[400px] bg-gray-900/95 backdrop-blur-sm text-white rounded-lg shadow-lg p-6 z-50">
            <div className="flex flex-col gap-4">
                <button 
                    onClick={acceptCookies}
                    className="absolute -top-2 -right-2 bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors"
                    aria-label="Close"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M6 18L18 6M6 6l12 12" 
                        />
                    </svg>
                </button>
                <div className="text-sm">
                    <p>{t('content')}</p>
                </div>
                <div className="flex gap-3 items-center">
                    <button
                        onClick={acceptCookies}
                        className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors text-sm"
                    >
                        {t('decline')}
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-500/80 rounded transition-colors text-sm font-medium"
                    >
                        {t('accept')}
                    </button>
                </div>
            </div>
        </div>
    );
}