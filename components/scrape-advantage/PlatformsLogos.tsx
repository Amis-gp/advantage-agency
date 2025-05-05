"use client";

import React from "react";
import Image from "next/image";
import { useLocale } from 'next-intl';
import en from '@/messages/en/scrape-advantage.json';
import uk from '@/messages/uk/scrape-advantage.json';

type LogoInfo = {
  key: keyof typeof logos;
  src: string;
};

const logos: Record<string, LogoInfo> = {
  instagram: { key: "instagram", src: "/img/scrape-advantage/instagram.webp" },
  linkedin: { key: "linkedin", src: "/img/scrape-advantage/linkedin.png" },
  googleMaps: { key: "googleMaps", src: "/img/scrape-advantage/google-maps.png" },
  facebook: { key: "facebook", src: "/img/scrape-advantage/facebook.svg" },
  apollo: { key: "apollo", src: "/img/scrape-advantage/apollo.svg" },
  yelp: { key: "yelp", src: "/img/scrape-advantage/yelp.webp" },
  capterra: { key: "capterra", src: "/img/scrape-advantage/capterra.webp" },
  bazarClub: { key: "bazarClub", src: "/img/scrape-advantage/bazar-club.svg" },
};

export default function PlatformsLogos() {
  const locale = useLocale();
  const translations = locale === 'uk' ? uk : en;
  
  // Custom translation function for this component
  const t = (path: string): string => {
    const keys = path.split('.');
    let result: any = translations.platformsLogos; // platformsLogos is the root section
    
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        return '';
      }
    }
    return typeof result === 'string' ? result : '';
  };
  
  const logoEntries = Object.entries(logos);
  
  // Duplicate logos array to ensure continuous scrolling effect
  const extendedLogos = [...logoEntries, ...logoEntries];

  return (
    <section
      className="relative py-16 md:py-24 w-full overflow-hidden font-geologica"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#23213b] to-[#23213b] z-0" />
      
      <div 
        className="absolute inset-0 opacity-20 z-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236B46C1' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          animation: 'meshMove 120s linear infinite'
        }}
      />
      
      {/* Enhanced floating blurred accent elements with improved animation */}
      <div className="absolute -top-24 left-1/4 w-72 h-72 bg-[#6B46C1]/60 rounded-full blur-3xl opacity-70 animate-float pointer-events-none z-0" />
      <div className="absolute -bottom-24 left-0 w-40 h-40 bg-[#6B46C1]/40 rounded-full blur-2xl opacity-50 animate-float-slow pointer-events-none z-0" />
      
      {/* Additional dynamic elements */}
      <div className="absolute top-1/3 left-1/6 w-32 h-32 bg-[#F6C744]/30 rounded-full blur-xl opacity-40 animate-pulse-slow pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/5 w-48 h-48 bg-[#6B46C1]/25 rounded-full blur-2xl opacity-30 animate-float-reverse pointer-events-none z-0" />
      <div className="absolute top-[90%] left-[90%] w-32 h-32 bg-[#F6C744]/30 rounded-full blur-xl opacity-40 animate-pulse-slow pointer-events-none z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12 md:mb-14 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg tracking-tight text-center" style={{letterSpacing: '-0.01em'}}>
            {t('title')}
          </h2>
          <p className="text-base md:text-lg text-gray-300 font-medium text-center max-w-2xl">
            {t('subtitle')}
          </p>
        </div>
      </div>

      <div className="relative w-full z-10 overflow-hidden">
        <div
          className="flex gap-10 md:gap-16 animate-marquee items-center w-max px-8 md:px-16 relative py-6"
        >
          {extendedLogos.map(([key, logo], idx) => (
            <div
              key={`${key}-${idx}`}
              className="h-16 w-32 md:h-20 md:w-40 flex items-center justify-center group relative transform transition-transform duration-500 hover:scale-110"
            >
              <Image
                src={logo.src}
                alt={t(`logos.${logo.key}`)}
                width={120}
                height={64}
                className="object-contain w-auto h-14 sm:h-16 md:h-20 z-10 drop-shadow-lg transition-all duration-300"
              />
              
            </div>
          ))}
        </div>
      </div>

      {/* CSS for improved animations with better performance */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          will-change: transform;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-24px) rotate(2deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-2deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
          will-change: transform;
        }
        .animate-float-slow {
          animation: float-slow 16s ease-in-out infinite;
          will-change: transform;
        }
        .animate-float-reverse {
          animation: float-reverse 14s ease-in-out infinite;
          will-change: transform;
        }
        .animate-pulse-slow {
          animation: pulse 8s ease-in-out infinite;
          will-change: opacity, transform;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        @keyframes meshMove {
          0% { background-position: 0 0; }
          100% { background-position: 1000px 1000px; }
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
        /* Add subtle parallax effect on hover */
        .group:hover img {
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
}
