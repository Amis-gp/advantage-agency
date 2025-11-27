'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Link } from '@/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { playSound } from '@/app/constant/sound';

export default function Header(): JSX.Element {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const locale = useLocale();
    const t = useTranslations();
    const router = useRouter();
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    const toggleLanguage = (newLocale: string): void => {
        const pathWithoutLocale = pathname.replace(`/${locale}`, '');
        
        router.push(`/${newLocale}${pathWithoutLocale}`);
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            setIsScrolled(scrolled);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleServicesClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById('services');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLogoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.location.href = '/';
        }
    };

    const isBlogPage = pathname?.includes('/blog');
    const isCasePage = pathname?.includes('/cases');

    return (
        <header 
            ref={headerRef}
            className={`text-white py-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 
            ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}
        >
            <div className="max-w-6xl px-6 mx-auto flex justify-between items-left">
                <Link 
                    href={`/`} 
                    onClick={handleLogoClick}
                    className="flex items-center gap-2"
                >
                    <Image src="/img/logo.svg" alt="Advantage Agency" width={243} height={50} loading="lazy" className="h-6 sm:h-12 w-fit"/>
                </Link>


                <div className="flex items-center gap-4">
                    {!isBlogPage && (
                        <div className="relative" ref={dropdownRef}>
                            <button 
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                                type="button" 
                                aria-label="Change language" 
                                className={`flex items-center gap-2 px-3 py-2 sm:px-7 sm:py-2 border border-white bg-black backdrop-blur-sm hover:bg-gray-800 transition-colors duration-300
                                    ${isDropdownOpen ? 'rounded-t-[20px] sm:rounded-t-[24px] rounded-b-none' : 'rounded-[20px] sm:rounded-[24px]'}`}
                            >
                                {locale === 'uk' ? 'UA' : 'EN'} 
                                <svg
                                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            {isDropdownOpen && (
                                <div className="absolute top-[calc(100%-1px)] left-0 right-0 bg-black border border-white rounded-b-[20px] sm:rounded-b-[24px] overflow-hidden border-t-0">
                                    {locale.toUpperCase() !== 'EN' && (
                                        <button 
                                            onClick={() => toggleLanguage('en')} 
                                            className="w-full px-3 py-2 sm:px-7 sm:py-4 text-left hover:bg-gray/20 transition-colors"
                                        >
                                            EN
                                        </button>
                                    )}
                                    {locale.toUpperCase() !== 'UA' && (
                                        <button 
                                            onClick={() => toggleLanguage('uk')} 
                                            className="w-full px-3 py-2 sm:px-7 sm:py-4 text-left hover:bg-gray/20 transition-colors"
                                        >
                                            UA
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    <div className="gap-4 items-center hidden sm:flex">
                        {[
                            { href: "https://www.linkedin.com/company/advantage-agencyuk/posts/?feedView=all", icon: "/img/linkedin.svg", alt: "LinkedIn" },
                            { href: "https://www.instagram.com/_advantage_agency_/", icon: "/img/instagram.svg", alt: "Instagram", className: "hidden sm:block" },
                            { href: "https://t.me/nayborovskiy", icon: "/img/telegram.svg", alt: "Telegram" }
                        ].map((social) => (
                            <Link 
                                key={social.alt}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex-shrink-0 hover:scale-110 transition-transform ${social.className}`}
                                onMouseEnter={() => playSound('hover_2')}
                            >
                                <Image 
                                    src={social.icon} 
                                    alt={social.alt} 
                                    width={30} 
                                    height={30}
                                    className="hover:opacity-80 transition-opacity" 
                                />
                            </Link>
                        ))}
                    </div>
                    <Link 
                        href={`/${locale}/blog`}
                        className="text-white px-4 py-2 sm:px-6 sm:py-2 hover:text-red-500 transition-colors hidden sm:block"
                        onMouseEnter={() => playSound('hover_2')}
                    >
                        Blog
                    </Link>
                    {!isBlogPage && !isCasePage && (
                        <Link 
                            href='/#services' 
                            onClick={handleServicesClick}
                            className="bg-white text-black px-4 py-2 border border-white sm:px-12 sm:py-3 rounded-[20px] sm:rounded-[24px] font-medium hover:bg-gray-300 transition-colors"
                        >
                            {t('pricing')}
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
} 