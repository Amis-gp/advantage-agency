'use client';
import React, { useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import en from '@/messages/en/scrape-advantage.json';
import uk from '@/messages/uk/scrape-advantage.json';

const ICONS = [
  // Smart Search
  <svg key="search" className="w-12 h-12 text-white group-hover:text-[#F6C744] transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" strokeWidth="1.75"/><path strokeWidth="1.75" d="M21 21l-4.35-4.35"/></svg>,
  // Data Enrichment
  <svg key="enrich" className="w-12 h-12 text-white group-hover:text-[#F6C744] transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" strokeWidth="1.75"/><path strokeWidth="1.75" d="M7 7V5a5 5 0 0 1 10 0v2"/></svg>,
  // Email Verification
  <svg key="email" className="w-12 h-12 text-white group-hover:text-[#F6C744] transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.75"/><path strokeWidth="1.75" d="M3 7l9 6 9-6"/></svg>,
  // Versatility
  <svg key="versatility" className="w-12 h-12 text-white group-hover:text-[#F6C744] transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="1.75"/><path strokeWidth="1.75" d="M12 6v6l4 2"/></svg>
];

const Advantages = () => {
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

    const cards = document.querySelectorAll('.advantage-card');
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);
  
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
  const cards = translations.advantages.cards;

  return (
    <section ref={sectionRef} id="advantages" className="relative py-28 px-4 md:px-12 overflow-hidden">
      {/* Refined background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3A2A5E] via-[#1A1A1A] to-[#1A1A1A] z-0"></div>
      
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-10 z-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%236B46C1' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          animation: 'patternMove 120s linear infinite'
        }}
      ></div>
      
      {/* Softer decorative elements with reduced opacity */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-gradient-to-r from-[#F6C744]/15 to-transparent rounded-full blur-[120px] animate-float-slow"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-gradient-to-r from-[#6B46C1]/20 to-transparent rounded-full blur-[120px] animate-float"></div>
      <div className="absolute top-1/2 left-1/4 w-[20vw] h-[20vw] bg-gradient-to-r from-[#F6C744]/10 to-transparent rounded-full blur-[100px] animate-float-reverse"></div>
      
      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
        {/* Subtler floating particles with reduced opacity */}
        <div className="absolute -top-10 left-1/4 w-2 h-2 bg-[#F6C744] rounded-full opacity-40 animate-particle-1 pointer-events-none"></div>
        <div className="absolute top-20 right-1/3 w-1.5 h-1.5 bg-[#F6C744] rounded-full opacity-30 animate-particle-2 pointer-events-none"></div>
        <div className="absolute -bottom-16 left-1/3 w-3 h-3 bg-[#F6C744] rounded-full opacity-25 animate-particle-3 pointer-events-none"></div>
        
        {/* Refined badge with subtler glow */}
        <div className="relative inline-block mb-6">
          <span className="relative z-10 inline-block py-2 px-6 rounded-full bg-gradient-to-r from-[#1A1A1A] to-[#252136] text-[#F6C744] text-sm font-medium tracking-wide border border-[#6B46C1]/40">
            Scrape ADvantage
          </span>
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F6C744]/30 to-[#6B46C1]/30 blur-md opacity-40 animate-pulse-slow"></span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-geologica tracking-tight drop-shadow-xl relative inline-block">
          {/* Title highlight effect */}
          <span className="relative z-10">{t('advantages.title')}</span>
          <span className="absolute -inset-1 bg-gradient-to-r from-[#F6C744]/20 to-[#6B46C1]/20 blur-md rounded-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"></span>
        </h2>
        
        {/* Refined divider with reduced glow */}
        <div className="relative h-1.5 w-32 mx-auto mt-5 mb-6">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-[#F6C744]/90 to-[#6B46C1]/90 shadow-[0_0_6px_rgba(246,199,68,0.3)]"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-[#F6C744]/20 to-[#6B46C1]/20 rounded-full blur-sm opacity-50"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto mb-20">
        {cards.map((card: any, i: number) => (
          <div
            key={card.title}
            className="advantage-card group flex flex-col items-center rounded-2xl p-8 transition-all duration-500 relative neomorph-card opacity-0 translate-y-8"
            style={{transitionDelay: `${i * 100}ms`}}
          >
            {/* Refined gradient border effect with reduced intensity */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F6C744]/70 via-[#6B46C1]/70 to-[#F6C744]/70 rounded-2xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500"></div>
            
            {/* Subtle inner glow */}
            <div className="absolute inset-1.5 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-radial from-[#F6C744]/50 via-transparent to-transparent blur-sm"></div>
            
            {/* Content wrapper */}
            <div className="relative z-10 flex flex-col items-center w-full">
              {/* Enhanced icon container */}
              <div className="relative mb-7 group-hover:scale-110 transition-transform duration-500">
                <span className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-gradient-to-r from-[#1A1A1A] to-[#2C2644] border border-[#3a3559]/40 icon-container relative z-10">
                  {ICONS[i]}
                </span>
                {/* Subtler icon background pulse effect */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F6C744]/15 to-[#6B46C1]/15 blur-md opacity-0 group-hover:opacity-80 transition-opacity duration-700 pulse-effect"></span>
              </div>
              
              {/* Enhanced title with animated underline */}
              <div className="relative mb-4 w-full text-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold text-[#F6C744] drop-shadow-md mb-2">
                  {card.title}
                </h3>
                <div className="h-0.5 w-0 group-hover:w-1/2 bg-gradient-to-r from-transparent via-[#F6C744] to-transparent transition-all duration-700 ease-out mx-auto"></div>
              </div>
              
              {/* Enhanced text content */}
              <p className="text-gray-300 text-base text-center leading-relaxed px-2">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center relative z-10">
        <a href="#brief-form" className="group relative px-10 py-4 text-lg font-bold overflow-hidden transition-all duration-500 hover:scale-105">
          {/* Enhanced button with multiple effects */}
          <span className="relative z-20 flex items-center gap-2 text-[#F6C744] group-hover:text-white transition-colors duration-500">
            {t('advantages.cta')}
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" 
                 className="ml-1 transform group-hover:translate-x-2 transition-all duration-500 ease-out" 
                 viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          
          {/* Enhanced background fill effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#6B46C1] via-[#9A77E0] to-[#F6C744] rounded-xl transform scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500 ease-out z-10"></span>
          
          {/* Enhanced border */}
          <span className="absolute inset-0 border-2 border-[#F6C744] rounded-xl z-10"></span>
          
          {/* Subtler glow effect */}
          <span className="absolute -inset-1 bg-gradient-to-r from-[#F6C744]/20 via-[#6B46C1]/20 to-[#F6C744]/20 rounded-xl opacity-0 group-hover:opacity-70 blur-md transition-opacity duration-500 z-0"></span>
        </a>
      </div>
      {/* Refined animated shapes with reduced opacity */}
      <div className="absolute left-[10%] top-[15%] w-24 h-24 border border-[#6B46C1]/20 rounded-lg transform rotate-45 animate-float opacity-25 z-0"></div>
      <div className="absolute right-[15%] bottom-[20%] w-16 h-16 border border-[#6B46C1]/15 rounded-full animate-float-slow opacity-20 z-0"></div>
      <div className="absolute left-[30%] bottom-[10%] w-8 h-20 border border-[#F6C744]/10 rounded-sm transform -rotate-12 animate-float-reverse opacity-15 z-0"></div>

      <style jsx>{`
        /* Enhanced card styling */
        .neomorph-card {
          background: linear-gradient(145deg, rgba(25, 22, 36, 0.9), rgba(19, 18, 26, 0.8));
          box-shadow: 8px 8px 24px rgba(0, 0, 0, 0.5),
                    -4px -4px 16px rgba(73, 55, 115, 0.15),
                    0 0 0 1px rgba(73, 55, 115, 0.2) inset;
          backdrop-filter: blur(10px);
          transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .neomorph-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 10px 10px 28px rgba(0, 0, 0, 0.6),
                    -4px -4px 16px rgba(107, 70, 193, 0.15),
                    0 0 12px rgba(246, 199, 68, 0.1),
                    0 0 0 1px rgba(107, 70, 193, 0.25) inset;
        }

        /* Enhanced icon styling */
        .icon-container {
          box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.4),
                    -2px -2px 6px rgba(73, 55, 115, 0.3),
                    inset 0 0 8px rgba(0, 0, 0, 0.6);
          transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .group:hover .icon-container {
          box-shadow: 6px 6px 14px rgba(0, 0, 0, 0.5),
                    -2px -2px 6px rgba(107, 70, 193, 0.3),
                    inset 0 0 10px rgba(246, 199, 68, 0.2),
                    0 0 12px rgba(246, 199, 68, 0.15);
        }
        
        /* Enhanced animations */
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
          50% { transform: translateY(16px) rotate(-1deg); }
        }
        
        @keyframes particle-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          25% { transform: translate(20px, -30px) scale(1.2); opacity: 1; }
          50% { transform: translate(40px, 0) scale(0.8); opacity: 0.5; }
          75% { transform: translate(20px, 30px) scale(1.1); opacity: 0.9; }
        }
        
        @keyframes particle-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          33% { transform: translate(-25px, 25px) scale(1.3); opacity: 0.9; }
          66% { transform: translate(25px, 25px) scale(0.7); opacity: 0.4; }
        }
        
        @keyframes particle-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          20% { transform: translate(15px, -15px) scale(1.1); opacity: 0.8; }
          40% { transform: translate(30px, 0) scale(0.9); opacity: 0.6; }
          60% { transform: translate(15px, 15px) scale(1.2); opacity: 0.9; }
          80% { transform: translate(-15px, 15px) scale(0.8); opacity: 0.4; }
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
        
        .animate-particle-1 {
          animation: particle-1 15s ease-in-out infinite;
        }
        
        .animate-particle-2 {
          animation: particle-2 12s ease-in-out infinite;
        }
        
        .animate-particle-3 {
          animation: particle-3 18s ease-in-out infinite;
        }
        
        .pulse-effect {
          animation: pulse 3s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.15); }
        }
        
        /* Scroll animation for cards */
        .advantage-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Advantages;
