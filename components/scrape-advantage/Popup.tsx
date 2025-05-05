'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { useLocale } from 'next-intl';
import en from '@/messages/en/scrape-advantage.json';
import uk from '@/messages/uk/scrape-advantage.json';

interface PopupProps {
  delayInSeconds?: number;
  enableExitIntent?: boolean;
}

const Popup: React.FC<PopupProps> = ({ 
  delayInSeconds = 30,
  enableExitIntent = true 
}) => {
  const locale = useLocale();
  const translations = locale === 'uk' ? uk : en;
  
  // Function to get translation by path
  const t = (path: string): string => {
    const keys = path.split('.');
    let result: any = translations.popup;
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        return '';
      }
    }
    return typeof result === 'string' ? result : '';
  };
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  
  // Function to show popup
  const showPopup = useCallback(() => {
    if (!hasShown) {
      setIsVisible(true);
      setHasShown(true);
    }
  }, [hasShown]);
  
  // Close popup
  const closePopup = () => {
    setIsVisible(false);
  };
  
  // Handle exit intent (mouse moving to top of page)
  const handleExitIntent = useCallback((e: MouseEvent) => {
    if (enableExitIntent && e.clientY <= 20 && !hasShown) {
      showPopup();
    }
  }, [enableExitIntent, hasShown, showPopup]);
  
  useEffect(() => {
    // Show popup after delay
    const timer = setTimeout(() => {
      showPopup();
    }, delayInSeconds * 1000);
    
    // Add exit intent listener
    document.addEventListener('mousemove', handleExitIntent);
    
    // Store popup state in session storage to prevent showing again in same session
    const hasPopupShown = sessionStorage.getItem('popupShown');
    if (hasPopupShown) {
      setHasShown(true);
    }
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousemove', handleExitIntent);
    };
  }, [delayInSeconds, handleExitIntent, showPopup]);
  
  // Update session storage when popup is shown
  useEffect(() => {
    if (hasShown) {
      sessionStorage.setItem('popupShown', 'true');
    }
  }, [hasShown]);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity">
      <div 
        className="relative w-full max-w-md p-6 mx-4 bg-gradient-to-br from-[#131328] to-[#0F1022] rounded-xl border border-[#4B3694]/40 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={closePopup}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
          aria-label="Close popup"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Popup content */}
        <div className="text-center">
          <div className="inline-block p-3 mb-4 rounded-full bg-[#4B3694]/30">
            <svg className="w-8 h-8 text-[#F6C744]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{t('title')}</h3>
          <p className="text-gray-300 mb-6">{t('description')}</p>
          
          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={t('emailPlaceholder')}
              className="w-full px-4 py-3 bg-[#0F1022]/80 border border-[#4B3694]/40 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F6C744]/50"
              required
            />
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-[#F6C744] to-[#4B3694] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              {t('submitButton')}
            </button>
          </form>
          
          <p className="mt-4 text-xs text-gray-500">{t('privacyNote')}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
