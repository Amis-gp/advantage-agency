'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "How do you guarantee results?",
        answer: "We work on a performance basis, meaning we only get paid when we deliver results. Our proven system has consistently delivered qualified leads to agencies like yours."
    },
    {
        question: "What do you need from me?",
        answer: "The majority of the service is done-for-you, however the 15-30 days we'll need your support with understanding who you want to target, case studies and basically becoming your fractional sales team."
    },
    {
        question: "What makes you different from lead gen agencies?",
        answer: "Unlike traditional lead gen agencies, we focus on quality over quantity. We use trigger-based targeting to reach companies actively looking for your services, resulting in higher conversion rates and better ROI."
    },
    {
        question: "How long until we start to see results?",
        answer: "Most clients start seeing qualified leads within the first week of launching. Our setup takes only 7 days, and we prioritize speed to ensure you start getting results as quickly as possible."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="relative bg-black py-20 overflow-hidden">

            <div className="relative container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Frequently Asked <span className="text-[#D12923]">Questions</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Get answers to common questions about our cold email marketing service
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="mb-4"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full text-left p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-[#D12923] transition-all duration-300"
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-semibold text-white">
                                        {faq.question}
                                    </h3>
                                    <div className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                        <svg 
                                            className="w-6 h-6 text-[#D12923]" 
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            stroke="currentColor"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M19 9l-7 7-7-7" 
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="mt-4 text-gray-400 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Ready to grow?
                        </h3>
                        <a 
                            href="/form"
                            className="group relative inline-flex items-center px-8 py-3 bg-[#D12923] text-white rounded-full font-medium overflow-hidden transition-all duration-300"
                        >
                            {/* Неоновий ефект при наведенні */}
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative">
                                Book a growth call
                                <span className="ml-2">→</span>
                            </span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
