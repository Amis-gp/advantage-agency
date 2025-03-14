'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'

const Header = () => {
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
      const pathWithoutLocale = currentPath.replace(/^\/(en|uk)/, '');
      router.push(`/${newLocale}${pathWithoutLocale}`);
      setIsLangDropdownOpen(false);
  };

  return (
    <section className="relative w-full bg-black z-90">
      <nav className="fixed top-0 w-full z-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/join-the-team">
            <Image 
              src="/img/logo.svg" 
              alt="Advantage Agency" 
              width={180} 
              height={40} 
              className="h-8 w-auto"
            />
          </Link>


          <div className="flex items-center gap-6">
            <div className="relative" ref={dropdownRef}>
              <button 
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)} 
                  className="flex items-center justify-center gap-1 px-3 py-1.5 text-white/70 hover:text-red-500 transition-colors"
              >
                  <span className="font-medium text-sm">{currentLocale === 'uk' ? 'UA' : 'EN'}</span>
                  <svg
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${isLangDropdownOpen ? 'rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
              </button>
              
              {isLangDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 bg-black border border-white/10 rounded-lg overflow-hidden shadow-xl w-[70px] z-20">
                    {currentLocale !== 'en' && (
                        <button 
                            onClick={() => changeLanguage('en')} 
                            className="w-full px-3 py-2 text-center text-white/70 hover:text-red-500 transition-colors"
                        >
                            EN
                        </button>
                    )}
                    {currentLocale !== 'uk' && (
                        <button 
                            onClick={() => changeLanguage('uk')} 
                            className="w-full px-3 py-2 text-center text-white/70 hover:text-red-500 transition-colors"
                        >
                            UA
                        </button>
                    )}
                </div>
              )}
            </div>
            <Link href="https://www.linkedin.com/company/advantage-agencyuk/" 
                  className="text-white/70 hover:text-red-500 transition-colors"
                  target="_blank">
              <Image src="/img/linkedin.svg" alt="LinkedIn" width={28} height={28} />
            </Link>
            <Link href="https://www.instagram.com/_advantage_agency_" 
                  className="text-white/70 hover:text-red-500 transition-colors hidden sm:block"
                  target="_blank">
              <Image src="/img/instagram.svg" alt="Instagram" width={28} height={28} />
            </Link>
            <Link href="https://t.me/stepan_potichnyi" 
                  className="text-white/70 hover:text-red-500 transition-colors hidden sm:block"
                  target="_blank">
              <Image src="/img/telegram.svg" alt="Telegram" width={28} height={28} />
            </Link>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Header
