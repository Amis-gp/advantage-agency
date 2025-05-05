'use client';
import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import en from '@/messages/en/scrape-advantage.json';
import uk from '@/messages/uk/scrape-advantage.json';

const Footer = () => {
  const locale = useLocale();
  const translations = locale === 'uk' ? uk : en;
  
  // Function to get translation by path
  const t = (path: string): string => {
    const keys = path.split('.');
    let result: any = translations.footer;
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        return '';
      }
    }
    return typeof result === 'string' ? result : '';
  };
  
  return (
    <footer className="w-full py-16 px-6 md:px-12 bg-[#131328] text-white border-t border-[#4B3694]/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and tagline */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#F6C744] to-[#4B3694] bg-clip-text text-transparent">Scrape ADvantage</span>
            </div>
            <p className="text-gray-400 text-sm">
              {t('tagline')}
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F6C744]">{t('navigation')}</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">{t('services')}</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">{t('cases')}</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">{t('blog')}</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">{t('contacts')}</Link></li>
            </ul>
          </div>
          
          {/* Social media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F6C744]">{t('social')}</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/advantage-agencyuk/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/_advantage_agency_/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F6C744]">{t('contactUs')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#F6C744]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:stepan@advantage-agency.co" className="text-gray-300 hover:text-white transition-colors">stepan@advantage-agency.co</a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#F6C744]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:+1(339)368-82-55" className="text-gray-300 hover:text-white transition-colors">+1 (339) 368-82-55</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section with copyright and privacy policy */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Advantage Agency. {t('allRightsReserved')}
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              {t('privacyPolicy')}
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
