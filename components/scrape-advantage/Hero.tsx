'use client';
import React from "react";
import { useLocale } from 'next-intl';
import en from '@/messages/en/scrape-advantage.json';
import uk from '@/messages/uk/scrape-advantage.json';
import Link from "next/link";

const Hero = () => {
  const locale = useLocale();
  const translations = locale === 'uk' ? uk : en;

  // Функція для отримання перекладу за шляхом (через крапку)
  const t = (path: string): string => {
    const keys = path.split('.');
    let result: any = translations.hero; // hero — це корінь секції
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
    <section
      className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(90deg, rgba(107,70,193,0.8) 0%, rgba(35,33,59,0.9) 15%, rgba(26,26,26,1) 40%, rgba(26,26,26,1) 60%, rgba(35,33,59,0.9) 85%, rgba(246,199,68,0.8) 100%"
      }}
    >
      {/* Blurred overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, rgba(107,70,193,0.8) 0%, rgba(35,33,59,0.9) 15%, rgba(26,26,26,1) 40%, rgba(26,26,26,1) 60%, rgba(35,33,59,0.9) 85%, rgba(246,199,68,0.8) 100%)",
          filter: "blur(16px)",
          opacity: 0.9
        }}
      />
      <div className="pt-28 relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center px-4 py-12">
        <div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-8 aspect-video bg-gray-900/60 flex items-center justify-center">
          <video
            className="w-full h-full object-cover"
            src="/scrape-advantage-demo.mp4"
            poster="/scrape-advantage-video-placeholder.jpg"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            preload="auto"
            aria-label={t('videoAlt')}
          >
            Sorry, your browser does not support embedded videos.
          </video>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-xl">
          <span dangerouslySetInnerHTML={{ __html: t('title') }} />
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-6 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
        <Link href={"/brief-lead-scraping"} className="mt-2 px-8 py-4 bg-[#6B46C1] text-[#F6C744] font-bold text-lg rounded-xl shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl animate-bounce">
          {t('cta')}
        </Link>
        <div className="mt-8 flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-bold text-[#F6C744] animate-countup">{t('stats.count')}</span>
          <span className="text-gray-300 text-lg mt-1">{t('stats.description')}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;