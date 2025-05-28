"use client"

import React, { useState } from 'react';
import HeroSection from './HeroSection';
import CourseTargetSection from './CourseTargetSection';
import MentorSection from './MentorSection';
import StorySection from './StorySection';
import ProvidingSection from './ProvidingSection';
import PhaseSystemSection from './PhaseSystemSection';
import TestimonialsSection from './TestimonialsSection';
import PricingSection from './PricingSection';
import FAQSection from './FAQSection';
import TwoOptionsSection from './TwoOptionsSection';

const ClientPage = () => {
  const testimonialImages = [
    '/img/black-affiliate-marketing/testimonial-1.webp',
    '/img/black-affiliate-marketing/testimonial-2.webp',
    '/img/black-affiliate-marketing/testimonial-3.webp',
    '/img/black-affiliate-marketing/testimonial-4.webp',
    '/img/black-affiliate-marketing/testimonial-5.webp',
    '/img/black-affiliate-marketing/testimonial-6.webp',
    '/img/black-affiliate-marketing/testimonial-7.webp',
    '/img/black-affiliate-marketing/testimonial-8.webp',
    '/img/black-affiliate-marketing/testimonial-9.webp'
  ];

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

  return (
    <div className="min-h-screen bg-black text-white text-center px-4 pt-10 pb-14 overflow-hidden font-sans relative">
      <div 
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-red-600/30 blur-[150px] -z-10"
        style={{ filter: 'blur(150px)' }}
      />
      
      <main className="max-w-6xl mx-auto relative z-10">
        <HeroSection />
        <CourseTargetSection />
        <MentorSection />
        <StorySection />
        <ProvidingSection />
        <PhaseSystemSection />
        <TestimonialsSection testimonialImages={testimonialImages} />
        <PricingSection />
        <FAQSection faqList={faqList} />
        <TwoOptionsSection />
      </main>
    </div>
  );
};

export default ClientPage;
