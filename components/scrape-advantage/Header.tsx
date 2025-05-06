"use client";
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import LanguageSwitcher from "@/components/scrape-advantage/LanguageSwitcher";
import en from '@/messages/en/scrape-advantage.json';
import uk from '@/messages/uk/scrape-advantage.json';

const NAV_ITEMS = [
  { href: "/", key: "nav.advantage" },
  { href: "#cases", key: "nav.cases" },
  { href: "/blog", key: "nav.blog" },
  { href: "#contacts", key: "nav.contacts" },
];

const Header = () => {
  const locale = useLocale();
  const translations = locale === 'uk' ? uk : en;

  const t = (path: string): string => {
    const keys = path.split('.');
    let result: any = translations;
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        return '';
      }
    }
    return typeof result === 'string' ? result : '';
  };
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 w-full z-40 bg-black/60 backdrop-blur-xl border-b border-[#23213b]/60 shadow-lg transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 md:py-4 px-4">
        <Link href="/" className="flex items-center gap-3 group min-w-[120px] cursor-pointer">
          <span className="relative">
            <Image src="/img/scrape-advantage/logo.webp" alt="Scrape ADvantage Logo" width={396} height={116} className="md:max-w-[160px] md:max-h-[36px] max-w-[120px] max-h-[26px] object-contain object-left transition-transform group-hover:scale-105" onError={(e) => (e.currentTarget.style.display = 'none')} />
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 lg:gap-10 text-base font-medium relative z-50">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="relative text-white/90 hover:text-gold-400 transition-colors duration-200 px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded cursor-pointer z-50 pointer-events-auto"
            >
              {t(item.key)}
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-gold-400 transition-all duration-300" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-4 relative">
          <LanguageSwitcher />
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-gray-700/60 bg-black/60 text-white hover:bg-[#23213b] transition-all"
            aria-label="Menu"
            onClick={() => setMobileMenu((v) => !v)}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>
      {mobileMenu && (
        <div className="md:hidden absolute left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-[#23213b]/60 shadow-lg animate-fade-in z-50">
          <nav className="flex flex-col items-center gap-2 py-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-lg text-white/90 hover:text-gold-400 px-4 py-2 font-medium rounded transition-colors"
                onClick={() => setMobileMenu(false)}
              >
                {t(item.key)}
              </a>
            ))}
            <a
              href="#lead-magnet"
              className="mt-2 px-6 py-3 rounded-full font-bold text-base text-white bg-gradient-to-r from-[#6B46C1] to-[#F6C744] shadow-lg hover:scale-105 hover:from-[#7e5bef] hover:to-[#ffe066] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 transition-all"
              onClick={() => setMobileMenu(false)}
            >
              {t("cta.get100")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
