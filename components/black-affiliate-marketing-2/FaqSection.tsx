"use client"

import { useState } from 'react';

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const sectionHeaderClass = `
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
  `;

  const faqList = [
    {
      question: "How much is possible to earn per month?",
      answer: "There is no limit as such, the more you spend on ads - the more you earn, all comes down to your ROI. I'm offering basically a hand holding until you get your first payouts. Consistency is the key."
    },
    {
      question: "How quickly will I get my first payout?",
      answer: "Depends on the offer type, there are offers that pay daily, that are offers that pay monthly, you see your sales every day, then you can withdraw your money from affiliate network and invest in ads more or buy yourself nice things. But for your first 5 payouts I would hold off shopping and invest in ads."
    },
    {
      question: "The course seems to be quite expensive, why?",
      answer: "I've done thousands of tests in order to get to what really works and build the whole system around it, the pricing is reasonable, considering I've spent more than €100k and teaching you for €1k, and higher plans cost more because I invest a lot of my time to help you."
    },
    {
      question: "How much I should work per day?",
      answer: "It is quite individual, depending how much stuff you can get done and how fast you learn. I would recommend to consider it as a part-time or full-time job, the more time you invest in this, the better you become and less you need to work. It is possible to automate many processes and work a few hours per day."
    },
    {
      question: "What if I don't like the course?",
      answer: "I guess what matters is a result, if you are making decent money working remotely from any country - it was worth it being consistent and not giving up. That's why we have a community, and teams to make sure you won't abandon it. I also offer a full refund, if you did what was required but never earned nothing."
    },
    {
      question: "Why is it called \"black affiliate marketing\"?",
      answer: "I was thinking about the name, and concerned if it wouldn't make an impression as something bad. Not at all, it is just a different side of the affiliate marketing with specific technical aspects and techniques that will give you a huge advantage over competition, bringing you more conversions and profit."
    },
    {
      question: "Will it work in my country?",
      answer: "Yes! If you are from the US, UK, CA, AU, - you should quickly get your first results. If you are from Europe - also pretty quick. If you are from other countries, it might take a bit more time, but it will work as well, as it is based on the internet."
    },
    {
      question: "How long will I have access to the course?",
      answer: "You will have access to the course for a lifetime, you can always get back to it when needed."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="mt-20 max-w-7xl mx-auto">
      <h2 className={sectionHeaderClass}>
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

export default FaqSection;
