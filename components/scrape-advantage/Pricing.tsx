'use client';
import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import en from '@/messages/en/scrape-advantage.json';
import uk from '@/messages/uk/scrape-advantage.json';

const Pricing = () => {
  const locale = useLocale();
  const translations = locale === 'uk' ? uk : en;
  const sectionRef = useRef<HTMLElement>(null);
  
  // Animation for cards on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.pricing-card');
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);
  
  // Translation function
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

  // Pricing data options
  const leadOptions = [
    { id: 'free', leads: '100', price: t('pricing.packages.free') },
    { id: 'small', leads: '1k', price: '€168' },
    { id: 'medium', leads: '2k', price: '€298' },
    { id: 'large', leads: '3k', price: '€409' },
    { id: 'xl', leads: '4k', price: '€499' },
    { id: 'xxl', leads: '5k', price: '€599' },
  ];
  
  // Other packages
  const specialPackages = [
    { id: 'custom', leads: t('pricing.packages.custom.leads'), price: '', isCustom: true },
    { id: 'verification', leads: '1k', price: '€20', isVerification: true },
  ];
  
  // State for selected leads
  const [selectedLeadOption, setSelectedLeadOption] = useState('large'); // Default to 3k (most popular)

  return (
    <section ref={sectionRef} id="pricing" className="relative py-24 px-4 md:px-12 overflow-hidden font-geologica">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1022] via-[#0A0A18] to-[#131328] z-0"></div>
      {/* Subtle texture overlay (static, no animation) */}
      <div 
        className="absolute inset-0 opacity-15 z-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234B3694' fill-opacity='0.3'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      ></div>
      
      {/* Content container */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <span className="relative z-10 inline-block py-2 px-6 rounded-full bg-gradient-to-r from-[#0F1022] to-[#131328] text-[#F6C744] text-sm font-medium tracking-wide border border-[#4B3694]/60">
              Scrape ADvantage
            </span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F6C744]/25 to-[#4B3694]/25 opacity-40 animate-pulse-slow"></span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-xl">
            {t('pricing.title')}
          </h2>
          
          <div className="relative h-1.5 w-32 mx-auto mt-5 mb-10">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-[#F6C744]/80 to-[#4B3694]/80"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F6C744]/15 to-[#4B3694]/15 rounded-full opacity-40"></div>
          </div>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-stretch">

           {/* Custom package */}
          <div
            className="pricing-card group flex flex-col rounded-xl p-6 md:h-full transition-all duration-500 relative opacity-0 translate-y-8 bg-[#0F1022]/90 border border-[#4B3694]/20 hover:border-[#4B3694]/50"
            style={{transitionDelay: `600ms`}}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F6C744]/40 via-[#4B3694]/40 to-[#F6C744]/40 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col md:h-full">
              <div className="mb-4 text-sm text-gray-400">
                {t('pricing.custom.title')}
              </div>
              
              <div className="mb-6">
                <div className="text-2xl font-bold text-white mb-2">
                  {t('pricing.custom.subtitle')}
                </div>
                
                <div className="text-gray-300">
                  {t('pricing.custom.description')}
                </div>
              </div>
              
              <div className="mt-auto">
                <a 
                  href="https://t.me/stepan_potichnyi" 
                  className="group relative inline-flex items-center justify-center w-full py-3 px-6 overflow-hidden rounded-xl border-2 border-[#F6C744] text-[#F6C744] transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-white">
                    {t('pricing.custom.cta')}
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#362873] via-[#4B3694] to-[#F6C744] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"></span>
                </a>
              </div>
            </div>
          </div>


        {/* Main package with lead option selector */}
        <div>
          <div className="pricing-card group flex flex-col rounded-xl p-6 h-full transition-all duration-500 relative opacity-0 translate-y-8 bg-gradient-to-br from-[#0F1022] to-[#131328] border-2 border-[#F6C744]">
            {/* Hover effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F6C744]/40 via-[#4B3694]/40 to-[#F6C744]/40 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            {/* Popular badge */}
            <div className="absolute -top-3 right-6">
              <div className="relative px-3 py-1 bg-[#F6C744] text-[#0F1022] text-xs font-bold rounded-full shadow-lg">
                {t('pricing.popular')}
              </div>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Package title */}
              <div className="mb-4 text-sm text-gray-400">
                {t('pricing.package')} #{leadOptions.findIndex(opt => opt.id === selectedLeadOption) + 1}
              </div>
              
              {/* Package details */}
              <div className="mb-6">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-bold text-white">
                    {leadOptions.find(opt => opt.id === selectedLeadOption)?.leads}
                  </span>
                  <span className="text-xl text-gray-300 mb-1">{t('pricing.leads')}</span>
                </div>
                
                <div className="text-3xl font-bold text-[#F6C744]">
                  {leadOptions.find(opt => opt.id === selectedLeadOption)?.price}
                </div>
              </div>

              {/* Lead quantity selector */}
              <div className="mb-8">
                <div className="text-sm text-gray-400 mb-3">Select lead quantity:</div>
                <div className="flex flex-wrap gap-3">
                  {leadOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedLeadOption(option.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedLeadOption === option.id
                          ? 'bg-[#F6C744] text-[#0F1022] shadow-lg'
                          : 'bg-[#0F1022]/70 text-gray-300 border border-[#4B3694]/30 hover:border-[#4B3694]/70'
                      }`}
                    >
                      {option.leads}
                    </button>
                  ))}
                </div>
              </div>
              

              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F6C744]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">{t('pricing.features.quality')}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F6C744]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">{t('pricing.features.format')}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F6C744]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">{t('pricing.features.support')}</span>
                </div>
              </div>
              
              <a 
                href={selectedLeadOption === 'free' ? 'https://buy.stripe.com/6oE29i1lk5jbb3GaF5' : '/brief-lead-scraping'} 
                className="group relative inline-flex items-center justify-center w-full py-3 px-6 overflow-hidden rounded-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-white font-medium transition-colors duration-300">
                  {t('pricing.cta')}
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                
                <span className="absolute inset-0 bg-gradient-to-r from-[#362873] via-[#4B3694] to-[#F6C744] transform group-hover:scale-105 transition-transform duration-500 z-0"></span>
              </a>
            </div>
          </div>
        </div>
        
        
          
          {/* Email verification package */}
          <div
            className="pricing-card group flex flex-col rounded-xl p-6 md:h-full transition-all duration-500 relative opacity-0 translate-y-8 bg-[#0F1022]/90 border border-[#4B3694]/20 hover:border-[#4B3694]/50"
            style={{transitionDelay: `700ms`}}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F6C744]/40 via-[#4B3694]/40 to-[#F6C744]/40 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col md:h-full">
              <div className="mb-4 text-sm text-gray-400">
                {t('pricing.verification.title')}
              </div>
              
              <div className="mb-6">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-bold text-white">1k</span>
                  <span className="text-xl text-gray-300 mb-1">{t('pricing.leads')}</span>
                </div>
                
                <div className="text-3xl font-bold text-[#F6C744]">
                  €20
                </div>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F6C744]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">{t('pricing.verification.feature1')}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F6C744]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">{t('pricing.verification.feature2')}</span>
                </div>
              </div>
              
              <a 
                href="/brief-lead-scraping" 
                className="group relative inline-flex items-center justify-center w-full py-3 px-6 overflow-hidden rounded-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-white font-medium transition-colors duration-300">
                  {t('pricing.cta')}
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#362873] via-[#4B3694] to-[#F6C744] transform group-hover:scale-105 transition-transform duration-500 z-0"></span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Pricing note */}
        <div className="text-center text-gray-400 text-sm max-w-3xl mx-auto">
          {t('pricing.note')}
        </div>
      </div>

      {/* Animations and styles */}
      <style jsx>{`
        @keyframes patternMove {
          0% { background-position: 0 0; }
          100% { background-position: 500px 500px; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-2deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-2deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.15); }
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 18s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        /* Scroll animation for cards */
        .pricing-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Pricing;
