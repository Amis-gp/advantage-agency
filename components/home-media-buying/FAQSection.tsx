'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { playSound } from '@/app/constant/sound';

const ChevronIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M6 9l6 6 6-6"/>
    </svg>
);

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        if (activeIndex !== index) {
            playSound('click');
        }
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "Which geos do you work with?",
            answer: "Our team works on the World Wide market"
        },
        {
            question: "What model do you work with?",
            answer: "We work with CPA, Revenue Share or hybrid model"
        },
        {
            question: "Which traffic channels do you work with?",
            answer: "We work with Meta, TikTok and Moloco"
        }
    ];

    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center">
                    <span className="text-red-500 uppercase tracking-wider">FAQ</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-12">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqData.map((item, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="border border-black/10 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 ">
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    className={`w-full p-8 flex justify-between items-center text-left transition-all duration-500 ${
                                        activeIndex === index 
                                            ? 'bg-yellow' 
                                            : 'bg-gradient-to-br from-black/50 via-black/45 to-transparent text-white'
                                    }`}
                                >
                                    <span className="text-xl font-medium">{item.question}</span>
                                    <span className={`transition-all duration-500 transform ${
                                        activeIndex === index ? 'rotate-180 ' : 'text-white'
                                    }`}>
                                        <ChevronIcon />
                                    </span>
                                </button>
                                
                                <motion.div 
                                    initial={false}
                                    animate={{ 
                                        height: activeIndex === index ? 'auto' : 0,
                                        opacity: activeIndex === index ? 1 : 0
                                    }}
                                    transition={{ 
                                        duration: 0.5,
                                        ease: [0.04, 0.62, 0.23, 0.98]
                                    }}
                                    className="overflow-hidden"
                                >
                                    <div className={`px-8 pb-8 transition-all duration-500 ${
                                        activeIndex === index 
                                            ? 'bg-yellow/20' 
                                            : ''
                                    }`}>
                                        <p className="text-gray-300 text-lg leading-relaxed">{item.answer}</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;