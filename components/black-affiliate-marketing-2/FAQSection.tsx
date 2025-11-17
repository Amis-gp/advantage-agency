"use client"

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqList?: FAQItem[];
}

const defaultFaqList: FAQItem[] = [
  {
    question: "How much can you earn per month in iGaming?",
    answer: "There are no real limits: the better your skills in building funnels, analyzing key metrics for optimization, and the larger your advertising budget, the more you can earn. It could be $2K or even $20K+, it all depends on these factors."
  },
  {
    question: "How quickly can I receive my first payout?",
    answer: "This depends on the type of offer. Some offers pay out daily, others pay monthly. You'll see your sales in dashboards, then you can withdraw funds from the affiliate network for personal use or reinvestment."
  },
  {
    question: "How much time do I need to spend per day?",
    answer: "It's very individual and depends on how many tasks you can handle and how quickly you learn. We recommend treating it as a full-time job: the more time you invest, the better you become and ultimately, you'll need to work less. Workflows can be well optimized when working in a team and delegating."
  },
  {
    question: "How long will I have access to the training?",
    answer: "We provide access for 4 months. That's enough time to master all the material, work steadily with the established workflow, and generate profit."
  }
];

const FAQSection = ({ faqList }: FAQSectionProps) => {
  const listToUse = faqList || defaultFaqList;
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
        {listToUse.map((faq, index) => (
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
