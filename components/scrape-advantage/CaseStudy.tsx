'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import en from '@/messages/en/scrape-advantage.json';
import uk from '@/messages/uk/scrape-advantage.json';

const CaseStudy = () => {
  const locale = useLocale();
  const translations = locale === 'uk' ? uk : en;
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Animation for card on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
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

  return (
    <section ref={sectionRef} id="case-study" className="relative py-24 px-4 md:px-12 overflow-hidden font-geologica">
      {/* Background elements - updated with new gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E36] via-[#141428] to-[#232342] z-0"></div>
      
      {/* Subtle texture overlay - updated with new pattern */}
      <div 
        className="absolute inset-0 opacity-10 z-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236A46C1' fill-opacity='0.25'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          animation: 'patternMove 60s linear infinite'
        }}
      ></div>
      
      {/* Decorative elements - updated with new colors */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-gradient-to-r from-[#8A65D6]/25 to-transparent rounded-full blur-[120px] animate-float-slow"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-gradient-to-r from-[#6A46C1]/30 to-transparent rounded-full blur-[120px] animate-float"></div>
      <div className="absolute top-1/3 left-1/4 w-[30vw] h-[30vw] bg-gradient-to-r from-[#F6C744]/15 to-transparent rounded-full blur-[100px] animate-float-reverse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[25vw] h-[25vw] bg-gradient-to-r from-[#5D3FBB]/20 to-transparent rounded-full blur-[80px] animate-pulse-slow"></div>
      
      {/* Content container */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <span className="relative z-10 inline-block py-2 px-6 rounded-full bg-gradient-to-r from-[#1E1E36] to-[#232342] text-[#F6C744] text-sm font-medium tracking-wide border border-[#8A65D6]/40">
              Scrape ADvantage
            </span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F6C744]/25 to-[#8A65D6]/25 blur-md opacity-40 animate-pulse-slow"></span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-xl">
            {t('caseStudy.title')}
          </h2>
          
          <div className="relative h-1.5 w-32 mx-auto mt-5 mb-10">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-[#F6C744]/80 to-[#7E57C2]/80 shadow-[0_0_6px_rgba(246,199,68,0.2)]"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F6C744]/15 to-[#7E57C2]/15 rounded-full blur-sm opacity-40"></div>
          </div>
        </div>
        
        {/* Case study card */}
        <div 
          ref={cardRef}
          className="max-w-4xl mx-auto opacity-0 translate-y-8 transition-all duration-700 mb-16"
        >
          <div className="relative p-8 md:p-10 rounded-2xl overflow-hidden bg-gradient-to-br from-[#1E1E36]/90 to-[#232342]/90 backdrop-blur-sm border border-[#8A65D6]/20 shadow-xl group">
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F6C744]/5 to-[#8A65D6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              {/* Image */}
              <div className="w-full md:w-2/5">
                <div className="relative h-full transform group-hover:scale-105 transition-transform duration-500">
                  <Image 
                    src="/img/portfolio/build-scraper.webp" 
                    alt="B2B Lead Generation Case Study"
                    className="object-cover rounded-xl overflow-hidden shadow-lg mx-auto"
                    width={250}
                    height={300}
                  />
                </div>
              </div>
              
              {/* Text content */}
              <div className="w-full md:w-3/5">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#F6C744] transition-colors duration-300">
                  {t('caseStudy.subtitle')}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#F6C744]/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#F6C744]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-300">{t('caseStudy.points.first')}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#F6C744]/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#F6C744]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-300">{t('caseStudy.points.second')}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#F6C744]/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#F6C744]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-300">{t('caseStudy.points.third')}</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    href="/cases/v14" 
                    target='_blank'

                    className="group relative inline-flex items-center gap-2 px-6 py-3 overflow-hidden rounded-xl border-2 border-[#F6C744] text-[#F6C744] font-medium transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                      {t('caseStudy.cta')}
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#6A46C1] via-[#8A65D6] to-[#F6C744] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
        
        /* Scroll animation for card */
        .visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default CaseStudy;
