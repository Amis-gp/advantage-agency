'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { trackFaqClick } from '../../utils/fbConversion';

export default function FAQ() {
    const t = useTranslations('cold-email.faq');
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    
    const faqs = t.raw('items') as Array<{ question: string; answer: string }>;

    const handleFaqClick = async (question: string) => {
        await trackFaqClick(question);
    };

    return (
        <section className="relative py-20 overflow-hidden">
            <div className="relative container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {t('title_part1')} <span className="text-[#4F46E5]">{t('title_emphasis')}</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {t('subtitle')}
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
                                onClick={() => {
                                    setActiveIndex(activeIndex === index ? null : index);
                                    handleFaqClick(faq.question);
                                }}
                                className="w-full text-left p-6 rounded-xl bg-[#111019] border border-zinc-800 hover:border-[#4F46E5] transition-all duration-300 group relative"
                            >
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-semibold text-white">
                                        {faq.question}
                                    </h3>
                                    <div className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                        <svg 
                                            className="w-6 h-6 text-[#06B6D4]" 
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
                            {t('cta.title')}
                        </h3>
                        <a 
                            href="#calendly"
                            className="btn-primary"
                        >
                            {t('cta.button')}
                            <span className="ml-2">→</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
