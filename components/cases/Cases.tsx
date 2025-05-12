"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { portfolioSlides } from '../../app/constant/portfolioSlides.js';

export default function CasesIndexPage({ params }: { params: { locale: string } }) {
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const locale = params.locale;

  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const caseTranslations = await import(`/messages/${locale}/cases/main.json`);
        setTranslations(caseTranslations.default);
      } catch (error) {
        console.error('Error loading case translations:', error);
        setTranslations({});
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [locale]);

  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-400 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
          <p className="mt-4 text-lg text-blue-300">Loading content...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            {translations.title || 'Our Cases'}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {translations.description || 'Explore our latest successful projects and case studies'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioSlides.map((caseItem) => {
            const caseSlug = caseItem.slug[locale as keyof typeof caseItem.slug] || caseItem.slug.en;
            
            return (
              <Link 
                href={`/${params.locale}/${caseSlug}`}
                key={caseItem.slug.en} 
                className="bg-gray-800/50 rounded-lg overflow-hidden shadow-md hover:shadow-blue-500/20 transition-all duration-300 hover:translate-y-[-3px] flex flex-col h-full group"
              >
                <div className="relative w-full pt-[100%]">
                  <Image
                    src={caseItem.image}
                    alt={caseItem.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
                </div>
                <div className="p-4 flex flex-col flex-grow bg-gradient-to-b from-gray-800/90 to-gray-900/90 backdrop-blur-sm">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-0.5 rounded-full">
                      {caseItem.date}
                    </span>
                    <span className="bg-indigo-500/20 text-indigo-300 text-xs px-2 py-0.5 rounded-full">
                      {caseItem.location}
                    </span>
                  </div>
                  <h2 className="text-base font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">{caseItem.title}</h2>
                  
                  <div className="mt-1 mb-3 grid grid-cols-2 gap-1">
                    {Object.entries(caseItem.stats).map(([key, value]) => (
                      <div key={key} className="bg-gray-700/30 rounded p-1.5">
                        <p className="text-xs text-gray-400">
                          <span className="font-semibold text-gray-300 block text-[10px]">{(translations.stats?.[key] || key.replace(/([A-Z])/g, ' $1')).toLowerCase()}</span> 
                          <span className="text-blue-300 text-xs font-medium">{String(value)}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                      {translations.viewCase || 'View Case'} 
                    </span>
                    <span className="text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}