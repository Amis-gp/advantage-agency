'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';


export default function LanguageSwitcher() {
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const locale = useLocale();
    const currentLocale = locale as string;
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsLangDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const changeLanguage = (newLocale: string) => {
        const currentPath = window.location.pathname;
        
        // Перевірка наявності "uk" або його відсутності в кінці шляху
        if (currentPath.includes('/cases/v')) {
            const caseMatch = currentPath.match(/\/cases\/v(\d+)(uk)?/);
            
            if (caseMatch) {
                const caseNumber = caseMatch[1]; // номер кейсу (1, 9, 13, тощо)
                
                if (newLocale === 'uk') {
                    // Перехід на українську версію
                    router.push(`/uk/cases/v${caseNumber}uk`);
                } else {
                    // Перехід на англійську версію
                    router.push(`/en/cases/v${caseNumber}`);
                }
                
                setIsLangDropdownOpen(false);
                return;
            }
        }
        
        // Стандартна логіка зміни мови для інших сторінок
        const pathWithoutLocale = currentPath.replace(/^\/(en|uk)/, '');
        router.push(`/${newLocale}${pathWithoutLocale}`);
        setIsLangDropdownOpen(false);
    };

    return (
        <div className="w-full flex pt-4 justify-end xl:absolute xl:top-4 xl:right-4 z-50 relative" ref={dropdownRef}>
            <button 
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)} 
                className="flex items-center justify-center gap-1 px-4 py-2 bg-black/90 backdrop-blur-md border border-white/30 rounded-full hover:bg-black/80 transition-all duration-300 shadow-lg"
            >
                <span className="font-medium text-white text-sm">{currentLocale === 'uk' ? 'UK' : 'EN'}</span>
                <svg
                    className={`w-3.5 h-3.5 text-white transition-transform duration-300 ${isLangDropdownOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            
            {isLangDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 bg-black/90 backdrop-blur-md border border-white/30 rounded-xl overflow-hidden shadow-xl w-[70px]">
                    {currentLocale !== 'en' && (
                        <button 
                            onClick={() => changeLanguage('en')} 
                            className="text-sm w-full px-3 py-2 text-center text-white hover:bg-white/10 transition-colors"
                        >
                            EN
                        </button>
                    )}
                    {currentLocale !== 'uk' && (
                        <button 
                            onClick={() => changeLanguage('uk')} 
                            className="text-sm w-full px-3 py-2 text-center text-white hover:bg-white/10 transition-colors"
                        >
                            UK
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
