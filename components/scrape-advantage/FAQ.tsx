'use client';
import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import en from '@/messages/en/scrape-advantage.json';
import uk from '@/messages/uk/scrape-advantage.json';

const FAQ_ITEMS = [
  { key: 'q1' },
  { key: 'q2' },
  { key: 'q3' },
  { key: 'q4' }
];

const FAQ = () => {
  const locale = useLocale();
  const translations = locale === 'uk' ? uk : en;
  
  // Function to get translation by path
  const t = (path: string): string => {
    const keys = path.split('.');
    let result: any = translations.faq;
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        return '';
      }
    }
    return typeof result === 'string' ? result : '';
  };
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0F1022, #131328)' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234B3694' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      ></div>
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Section header with decorative element */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            {t('title')}
          </h2>
          <div className="relative h-1 w-24 mx-auto">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-[#F6C744]/80 to-[#4B3694]/80"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F6C744]/15 to-[#4B3694]/15 rounded-full opacity-40"></div>
          </div>
        </div>
        
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div 
              key={item.key} 
              className={`border border-[#4B3694]/40 rounded-lg transition-all duration-300 ${openIndex === idx ? 'bg-[#131328]/90 shadow-lg shadow-[#4B3694]/10' : 'bg-[#131328]/60'}`}
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left text-lg text-white font-medium focus:outline-none focus-visible:ring-0"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <span className="pr-4">{t(`${item.key}.question`)}</span>
                <div className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === idx ? 'bg-[#F6C744] text-[#131328]' : 'bg-[#4B3694]/30 text-white'}`}>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === idx && (
                <div
                  id={`faq-panel-${idx}`}
                  className="px-6 pb-6 text-[#F6C744] text-base animate-fade-in border-t border-[#4B3694]/20"
                >
                  <div className="pt-4">{t(`${item.key}.answer`)}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
