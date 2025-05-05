'use client';
import React, { useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import en from '@/messages/en/scrape-advantage.json';
import uk from '@/messages/uk/scrape-advantage.json';

// Step icons with consistent styling
const STEP_ICONS = [
  // Brief form
  <svg key="brief" className="w-12 h-12 text-[#F6C744] mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"></path>
  </svg>,
  // Smart scraping
  <svg key="scraping" className="w-12 h-12 text-[#F6C744] mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"></path>
  </svg>,
  // Data enrichment
  <svg key="enrichment" className="w-12 h-12 text-[#F6C744] mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"></path>
  </svg>,
  // Ready database
  <svg key="database" className="w-12 h-12 text-[#F6C744] mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"></path>
  </svg>,
];

const HowItWorks = () => {
  const locale = useLocale();
  const translations = locale === 'uk' ? uk : en;
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
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

  // Animation for timeline steps on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    const steps = document.querySelectorAll('.timeline-step');
    steps.forEach((step) => {
      observer.observe(step);
    });

    // Animate the timeline progress bar
    const progressObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timeline = timelineRef.current;
          if (timeline) {
            timeline.classList.add('animate-progress');
          }
        }
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) {
      progressObserver.observe(timelineRef.current);
    }

    return () => {
      steps.forEach((step) => {
        observer.unobserve(step);
      });
      if (timelineRef.current) {
        progressObserver.unobserve(timelineRef.current);
      }
    };
  }, []);

  // Steps data
  const steps = [
    { 
      title: t('howItWorks.steps.brief.title'), 
      description: t('howItWorks.steps.brief.description'),
      time: t('howItWorks.steps.brief.time'),
      icon: STEP_ICONS[0] 
    },
    { 
      title: t('howItWorks.steps.scraping.title'), 
      description: t('howItWorks.steps.scraping.description'),
      icon: STEP_ICONS[1] 
    },
    { 
      title: t('howItWorks.steps.enrichment.title'), 
      description: t('howItWorks.steps.enrichment.description'),
      icon: STEP_ICONS[2] 
    },
    { 
      title: t('howItWorks.steps.database.title'), 
      description: t('howItWorks.steps.database.description'),
      icon: STEP_ICONS[3] 
    },
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="relative py-24 px-4 md:px-12 overflow-hidden font-geologica">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#252136] to-[#1A1A1A] z-0"></div>
      
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-10 z-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%236B46C1' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          animation: 'patternMove 120s linear infinite'
        }}
      ></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-gradient-to-r from-[#6B46C1]/15 to-transparent rounded-full blur-[120px] animate-float-slow"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-gradient-to-r from-[#6B46C1]/20 to-transparent rounded-full blur-[120px] animate-float"></div>
      
      {/* Content container */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-6">
            <span className="relative z-10 inline-block py-2 px-6 rounded-full bg-gradient-to-r from-[#1A1A1A] to-[#252136] text-[#F6C744] text-sm font-medium tracking-wide border border-[#6B46C1]/40">
              Scrape ADvantage
            </span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F6C744]/30 to-[#6B46C1]/30 blur-md opacity-40 animate-pulse-slow"></span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-xl">
            {t('howItWorks.title')}
          </h2>
          
          <div className="relative h-1.5 w-32 mx-auto mt-5 mb-10">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-[#F6C744]/90 to-[#6B46C1]/90 shadow-[0_0_6px_rgba(246,199,68,0.3)]"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F6C744]/20 to-[#6B46C1]/20 rounded-full blur-sm opacity-50"></div>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto mb-20">
          {/* Vertical timeline line */}
          <div 
            ref={timelineRef}
            className="absolute left-[20px] md:left-1/2 md:-ml-[2px] top-0 w-1 md:w-1.5 bg-gradient-to-b from-[#6B46C1]/50 to-[#F6C744]/50 h-full transform origin-top scale-y-0 transition-transform duration-1000"
          ></div>
          
          {/* Timeline steps */}
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`timeline-step relative flex flex-col md:flex-row items-start md:items-center gap-6 mb-16 opacity-0 translate-y-8 transition-all duration-700 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Step number/icon */}
              <div className="flex-shrink-0 z-10">
                <div className="relative flex items-center justify-center w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#1A1A1A] to-[#252136] border-4 border-[#1A1A1A] ml-[10px] md:ml-0 md:mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6B46C1] to-[#F6C744] opacity-30 blur-sm"></div>
                  <span className="relative z-10 text-2xl font-bold text-white">{index + 1}</span>
                </div>
              </div>
              
              {/* Content card */}
              <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right md:pr-10' : 'md:pl-10'}`}>
                <div className="bg-gradient-to-br from-[#1A1A1A]/80 to-[#252136]/80 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#6B46C1]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#6B46C1]/40 group">
                  {/* Step time badge (only for first step) */}
                  {step.time && (
                    <div className="inline-block px-3 py-1 mb-3 text-xs font-medium text-[#F6C744] bg-[#F6C744]/10 rounded-full border border-[#F6C744]/20">
                      {step.time}
                    </div>
                  )}
                  
                  {/* Icon */}
                  <div className="mb-4 flex items-center justify-center md:justify-start">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      {step.icon}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F6C744]/10 to-[#6B46C1]/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#F6C744] transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA button */}
        <div className="flex justify-center">
          <a href="#brief-form" className="group relative px-10 py-4 text-lg font-bold overflow-hidden transition-all duration-500 hover:scale-105">
            {/* Button text */}
            <span className="relative z-20 flex items-center gap-2 text-[#F6C744] group-hover:text-white transition-colors duration-500">
              {t('howItWorks.cta')}
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" 
                   className="ml-1 transform group-hover:translate-x-2 transition-all duration-500 ease-out" 
                   viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            
            {/* Button background fill */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#6B46C1] via-[#9A77E0] to-[#F6C744] rounded-xl transform scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500 ease-out z-10"></span>
            
            {/* Button border */}
            <span className="absolute inset-0 border-2 border-[#F6C744] rounded-xl z-10"></span>
            
            {/* Button glow effect */}
            <span className="absolute -inset-1 bg-gradient-to-r from-[#F6C744]/20 via-[#6B46C1]/20 to-[#F6C744]/20 rounded-xl opacity-0 group-hover:opacity-70 blur-md transition-opacity duration-500 z-0"></span>
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
        
        /* Timeline progress animation */
        .animate-progress {
          transform: scaleY(1);
        }
        
        /* Scroll animation for timeline steps */
        .timeline-step.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
