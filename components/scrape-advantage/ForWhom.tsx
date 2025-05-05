'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import en from '@/messages/en/scrape-advantage.json';
import uk from '@/messages/uk/scrape-advantage.json';

// Industry icons with consistent styling
const INDUSTRY_ICONS = [
  // Marketing Agencies
  <svg key="marketing" className="w-10 h-10 text-[#F6C744] mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"></path>
  </svg>,
  // B2B Companies
  <svg key="b2b" className="w-10 h-10 text-[#F6C744] mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"></path>
  </svg>,
  // Startups
  <svg key="startups" className="w-10 h-10 text-[#F6C744] mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
  </svg>,
  // IT Companies
  <svg key="it" className="w-10 h-10 text-[#F6C744] mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"></path>
  </svg>,
  // Real Estate
  <svg key="realestate" className="w-10 h-10 text-[#F6C744] mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"></path>
  </svg>,
  // Distributors
  <svg key="distributors" className="w-10 h-10 text-[#F6C744] mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"></path>
  </svg>,
  // Recruiters
  <svg key="recruiters" className="w-10 h-10 text-[#F6C744] mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
  </svg>,
  // Sales Departments
  <svg key="sales" className="w-10 h-10 text-[#F6C744] mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"></path>
  </svg>,
];

const ForWhom = () => {
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

    const cards = document.querySelectorAll('.industry-card');
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

  // Industries data
  const industries = [
    { name: t('forWhom.industries.marketing'), icon: INDUSTRY_ICONS[0] },
    { name: t('forWhom.industries.b2b'), icon: INDUSTRY_ICONS[1] },
    { name: t('forWhom.industries.startups'), icon: INDUSTRY_ICONS[2] },
    { name: t('forWhom.industries.it'), icon: INDUSTRY_ICONS[3] },
    { name: t('forWhom.industries.realestate'), icon: INDUSTRY_ICONS[4] },
    { name: t('forWhom.industries.distributors'), icon: INDUSTRY_ICONS[5] },
    { name: t('forWhom.industries.recruiters'), icon: INDUSTRY_ICONS[6] },
    { name: t('forWhom.industries.sales'), icon: INDUSTRY_ICONS[7] },
  ];

  return (
    <section ref={sectionRef} id="for-whom" className="relative py-24 px-4 md:px-12 overflow-hidden font-geologica">
      {/* Background elements - updated with new gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A2A42] via-[#1A1A1A] to-[#1E1E2D] z-0"></div>
      
      {/* Subtle texture overlay - updated with new pattern */}
      <div 
        className="absolute inset-0 opacity-8 z-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm-20 20l-1 1.732-17.32-10L22 64l17.32 10zm52.546-59.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-40 40l-1.732 1-10-17.32 1.732-1 10 17.32zm32.32 15l1 1.732-17.32 10-1-1.732 17.32-10zM100 69v2H80v-2h20zm19.32 5l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zm52.546-59.84l1.732 1-10 17.32-1.732-1 10-17.32zm-40 40l1.732 1-10 17.32-1.732-1 10-17.32zM111 80h2v20h-2V80zm-19.32 15l-1 1.732-17.32-10 1-1.732 17.32 10z' fill='%235D3FBB' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
          animation: 'patternMove 100s linear infinite'
        }}
      ></div>
      
      {/* Decorative elements - updated with new colors */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-gradient-to-r from-[#7E57C2]/20 to-transparent rounded-full blur-[120px] animate-float-slow"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-gradient-to-r from-[#5D3FBB]/25 to-transparent rounded-full blur-[120px] animate-float"></div>
      <div className="absolute top-1/3 left-1/4 w-[30vw] h-[30vw] bg-gradient-to-r from-[#F6C744]/10 to-transparent rounded-full blur-[100px] animate-float-reverse"></div>
      
      {/* Content container */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <span className="relative z-10 inline-block py-2 px-6 rounded-full bg-gradient-to-r from-[#1E1E2D] to-[#2A2A42] text-[#F6C744] text-sm font-medium tracking-wide border border-[#7E57C2]/40">
              Scrape ADvantage
            </span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F6C744]/25 to-[#7E57C2]/25 blur-md opacity-40 animate-pulse-slow"></span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-xl">
            {t('forWhom.title')}
          </h2>
          
          <div className="relative h-1.5 w-32 mx-auto mt-5 mb-10">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-[#F6C744]/80 to-[#7E57C2]/80 shadow-[0_0_6px_rgba(246,199,68,0.2)]"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F6C744]/15 to-[#7E57C2]/15 rounded-full blur-sm opacity-40"></div>
          </div>
        </div>
        
        {/* Industry cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="industry-card group flex flex-col items-center rounded-xl p-6 transition-all duration-500 relative opacity-0 translate-y-8 bg-[#1E1E2D]/60 backdrop-blur-sm border border-[#7E57C2]/10 hover:border-[#7E57C2]/30"
              style={{transitionDelay: `${i * 100}ms`}}
            >
              {/* Hover glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F6C744]/60 via-[#7E57C2]/60 to-[#F6C744]/60 rounded-xl opacity-0 group-hover:opacity-25 blur-sm transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                {industry.icon}
                <h3 className="text-lg font-medium text-white text-center group-hover:text-[#F6C744] transition-colors duration-300">
                  {industry.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Description text */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-300 leading-relaxed">
            {t('forWhom.description')}
          </p>
        </div>
        
        {/* Blog link */}
        <div className="text-center mb-16">
          <p className="text-base text-gray-400 mb-6">
            {t('forWhom.blogPromo')}
          </p>
          <Link href="/blog/what-is-lead-scraping" className="inline-block text-[#F6C744] hover:text-white border-b border-[#F6C744] pb-1 transition-colors duration-300">
            {t('forWhom.readMore')} →
          </Link>
        </div>
        
        {/* CTA button */}
        <div className="flex justify-center">
          <a href="#brief-form" className="group relative px-10 py-4 text-lg font-bold overflow-hidden transition-all duration-500 hover:scale-105">
            {/* Button text */}
            <span className="relative z-20 flex items-center gap-2 text-[#F6C744] group-hover:text-white transition-colors duration-500">
              {t('forWhom.cta')}
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" 
                   className="ml-1 transform group-hover:translate-x-2 transition-all duration-500 ease-out" 
                   viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            
            {/* Button background fill */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#5D3FBB] via-[#7E57C2] to-[#F6C744] rounded-xl transform scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500 ease-out z-10"></span>
            
            {/* Button border */}
            <span className="absolute inset-0 border-2 border-[#F6C744] rounded-xl z-10"></span>
            
            {/* Button glow effect */}
            <span className="absolute -inset-1 bg-gradient-to-r from-[#F6C744]/15 via-[#7E57C2]/15 to-[#F6C744]/15 rounded-xl opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-500 z-0"></span>
          </a>
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
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        /* Scroll animation for cards */
        .industry-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default ForWhom;
