"use client"

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqList: FAQItem[];
}

const FAQSection = ({ faqList }: FAQSectionProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="mt-20 max-w-7xl mx-auto">
      <h2 className={`
        text-5xl 
        font-bold 
        text-center 
        mb-10
        bg-gradient-to-r 
        from-white 
        via-red-400 
        to-gray-100 
        bg-clip-text 
        text-transparent 
        animate-gradient 
        bg-[length:200%_auto]
      `}>
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqList.map((faq, index) => (
          <div key={index} className="border border-white/10 rounded-lg hover:border-red-600/50 hover:bg-red-600/10 transition-all duration-300">
            <button 
              className="w-full p-6 text-left text-2xl flex justify-between items-center"
              onClick={() => toggleFaq(index)}
            >
              <span className="ml-4">{faq.question}</span>
              <div className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-0' : '-rotate-90'}`}>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M12 4V20M4 12H20" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                    className={`transform origin-center transition-transform duration-300 ${openFaq === index ? 'scale-y-0' : 'scale-y-100'}`}
                  />
                  <path 
                    d="M4 12H20" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </button>
            {openFaq === index && (
              <div className="px-6 pb-6 text-left md:mr-4">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
