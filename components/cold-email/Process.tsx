'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Process() {
    const t = useTranslations('cold-email.process');
    
    const steps = Array.from({ length: 6 }, (_, i) => ({
        number: t(`steps.${i}.number`),
        title: t(`steps.${i}.title`),
        description: t(`steps.${i}.description`),
        duration: t(`steps.${i}.duration`)
    }));

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {t('title.part1')} <span className="text-[#4F46E5]">{t('title.part2')}</span> {t('title.part3')}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="bg-black/80 p-8 rounded-xl border border-zinc-800 hover:border-[#4F46E5] transition-all duration-300 h-full">
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                                    <div className="relative">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="text-4xl font-bold text-[#4F46E5] opacity-50">
                                                {step.number}
                                            </span>
                                            <span className="text-sm text-gray-400 bg-black/50 px-3 py-1 rounded-full">
                                                {step.duration}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-400">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {index < steps.length - 1 && (
                                    <>
                                        <div className="hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2 z-10">
                                            <svg 
                                                className="w-16 h-16 text-[#06B6D4]" 
                                                fill="none" 
                                                viewBox="0 0 24 24" 
                                                stroke="currentColor"
                                                style={{ opacity: 0.5 }}
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth={2} 
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                                                />
                                            </svg>
                                        </div>
                                        <div className="md:hidden absolute left-1/2 -bottom-8 transform -translate-x-1/2 z-10">
                                            <svg 
                                                className="w-16 h-16 text-[#06B6D4] rotate-90" 
                                                fill="none" 
                                                viewBox="0 0 24 24" 
                                                stroke="currentColor"
                                                style={{ opacity: 0.5 }}
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth={2} 
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                                                />
                                            </svg>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center bg-black/30 rounded-full p-1 border border-zinc-800">
                        <span className="text-gray-400 px-4">
                            {t('cta.question')}
                        </span>
                        <a 
                            href="#calendly"
                            className="inline-flex items-center px-6 py-2 bg-[#4F46E5] text-white rounded-full font-medium hover:bg-[#4338CA] transition-all duration-300"
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