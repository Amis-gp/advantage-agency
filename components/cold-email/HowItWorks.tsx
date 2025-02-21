'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { trackButtonClick } from '@/utils/fbConversion';

const stepIcons = [
    {
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    {
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    {
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 17L15 12L10 7" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 12H3" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    {
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }
];

export default function HowItWorks() {
    const t = useTranslations('cold-email.how-it-works');
    
    const handleButtonClick = async () => {
        await trackButtonClick('Schedule Call', 'How It Works');
    };

    const steps = Array.from({ length: 4 }, (_, i) => ({
        title: t(`steps.${i}.title`),
        description: t(`steps.${i}.description`),
        icon: stepIcons[i].icon
    }));

    return (
        <section className="relative bg-[#111019] py-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Enhanced Grid Pattern */}
                <div className="absolute inset-0">
                    {/* Base grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f223130_1px,transparent_1px),linear-gradient(to_bottom,#1f223130_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
                    
                    {/* Overlay grid with different size */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f223110_1px,transparent_1px),linear-gradient(to_bottom,#1f223110_1px,transparent_1px)] bg-[size:8rem_8rem] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_70%)]" />
                </div>

                {/* Glowing orbs with enhanced blur */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#4F46E5] rounded-full opacity-[0.07] blur-[160px] animate-pulse-slow" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#7C3AED] rounded-full opacity-[0.01] blur-[160px] animate-pulse-slow" />
                
                {/* Subtle radial gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4F46E5]/5 to-transparent opacity-30" />
            </div>

            <div className="relative container mx-auto px-4">
                {/* Floating elements */}
                <div className="absolute -top-10 left-1/4 w-20 h-20 rounded-full border border-[#4F46E5]/20 animate-float" />
                <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full border-2 border-[#06B6D4]/20 animate-float-slow" />
                <div className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full border border-[#7C3AED]/20 animate-float-slower" />

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {t('title.part1')} <span className="text-[#4F46E5]">{t('title.part2')}</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative group h-full"
                        >
                            <div className="bg-black/30 rounded-2xl p-8 border border-zinc-800 hover:border-[#4F46E5] transition-all duration-300 h-full">
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                                
                                <div className="relative h-full flex flex-col">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed flex-grow">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16 z-10 relative"
                >
                    <a 
                        href="#calendly"
                        className="btn-primary inline-flex items-center gap-2"
                        onClick={handleButtonClick}
                    >
                        {t('cta')}
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}