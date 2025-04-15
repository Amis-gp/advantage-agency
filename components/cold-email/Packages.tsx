'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useTranslations } from 'next-intl';


const DynamicCalendlyEmbed = dynamic(() => import('@/components/CalendlyEmbed'), {
    loading: () => (
        <div className="w-full h-[600px] flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-2 border-[#4F46E5] border-t-transparent rounded-full animate-spin" />
                <p className="text-gray-400">Loading calendar...</p>
            </div>
        </div>
    ),
    ssr: false
});

export default function Pricing() {
    const t = useTranslations('cold-email.pricing');
    
    const standardFeatures = t.raw('standard.features') as string[];
    const mediumFeatures = t.raw('medium.features') as string[];
    const performanceFeatures = t.raw('performance.features') as string[];
    const package5Features = t.raw('package5.features') as string[];
    const package7Features = t.raw('package7.features') as string[];
    const package10Features = t.raw('package10.features') as string[];
    
    return (
        <section id='Packages' className="relative bg-[#111019] pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Circular gradient mesh */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,#4F46E5_0%,transparent_50%)] opacity-[0.03] blur-[80px]" />
                    <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,#06B6D4_0%,transparent_50%)] opacity-[0.03] blur-[80px]" />
                </div>

                {/* Animated lines pattern */}
                <div className="absolute inset-0">
                    {/* Vertical lines */}
                    <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#4F46E5]/20 to-transparent animate-pulse-slow" />
                    <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#06B6D4]/20 to-transparent animate-pulse-slow" />
                    
                    {/* Diagonal lines */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div 
                            className="absolute w-full h-[1px] top-1/4 bg-gradient-to-r from-transparent via-[#4F46E5]/10 to-transparent transform -rotate-[30deg] origin-left"
                        />
                        <div 
                            className="absolute w-full h-[1px] bottom-1/4 bg-gradient-to-r from-transparent via-[#06B6D4]/10 to-transparent transform rotate-[30deg] origin-right"
                        />
                    </div>
                </div>

                {/* Subtle dot matrix */}
                <div 
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `
                            radial-gradient(#4F46E5 1px, transparent 1px),
                            radial-gradient(#06B6D4 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px, 30px 30px',
                        backgroundPosition: '0 0, 20px 20px'
                    }}
                />

                {/* Floating elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Price tag shapes */}
                    <div className="absolute top-20 left-10 w-16 h-8 border-2 border-[#4F46E5]/20 rounded-lg transform -rotate-12 animate-float" />
                    <div className="absolute top-40 right-20 w-12 h-6 border-2 border-[#06B6D4]/20 rounded-lg transform rotate-12 animate-float-slow" />
                    <div className="absolute bottom-32 left-1/4 w-14 h-7 border-2 border-[#4F46E5]/20 rounded-lg transform rotate-45 animate-float-slower" />
                </div>
            </div>

            <div className="relative container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {t('title_part1')} <span className="text-[#4F46E5]">{t('title_emphasis')}</span> {t('title_part2')}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </motion.div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        {/* Original 3 packages */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative group h-full"
                        >
                            <div className="absolute inset-0 bg-[#4F46E5]/10 rounded-3xl blur-2xl group-hover:bg-[#4F46E5]/20 transition-all duration-500" />
                            <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-[#4F46E5]/20 h-full flex flex-col">
                                <div className="flex flex-col gap-8 flex-grow">
                                    <div>
                                        <h3 className="text-3xl font-bold text-[#4F46E5] mb-4">
                                            {t('standard.title')}
                                        </h3>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xl font-medium text-white">{t('standard.description')}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 flex-grow">
                                        {standardFeatures.map((feature: string, index: number) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-[#4F46E5]/20 flex items-center justify-center">
                                                    <svg className="w-3 h-3 text-[#4F46E5]" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                                    </svg>
                                                </div>
                                                <span className="text-gray-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a 
                                        href="#calendly"
                                        className="block w-full py-4 px-6 bg-[#4F46E5] hover:bg-[#4F46E5]/90 rounded-2xl text-white text-center font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        {t('getStarted')}
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* ... existing medium package ... */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            className="relative group h-full"
                        >
                            <div className="absolute inset-0 bg-[#7E57C2]/10 rounded-3xl blur-2xl group-hover:bg-[#7E57C2]/20 transition-all duration-500" />
                            <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-[#7E57C2]/20 group-hover:border-[#7E57C2]/30 transition-all duration-300 h-full flex flex-col">
                                <div className="flex flex-col gap-8 flex-grow">
                                    <div>
                                        <h3 className="text-3xl font-bold text-[#7E57C2] mb-4">
                                            {t('medium.title')}
                                        </h3>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xl font-medium text-white">{t('medium.description')}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 flex-grow">
                                        {mediumFeatures.map((feature: string, index: number) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-[#7E57C2]/20 flex items-center justify-center">
                                                    <svg className="w-3 h-3 text-[#7E57C2]" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                                    </svg>
                                                </div>
                                                <span className="text-gray-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a 
                                        href="#calendly"
                                        className="block w-full py-4 px-6 bg-[#7E57C2] hover:bg-[#7E57C2]/90 rounded-2xl text-white text-center font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        {t('getStarted')}
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* ... existing performance package ... */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative group h-full"
                        >
                            <div className="absolute inset-0 bg-[#06B6D4]/5 rounded-3xl blur-2xl group-hover:bg-[#06B6D4]/10 transition-all duration-500" />
                            <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-[#06B6D4]/20 group-hover:border-[#06B6D4]/30 transition-all duration-300 h-full flex flex-col">
                                <div className="absolute -top-3 right-4">
                                    <div className="bg-[#06B6D4] px-4 py-1 rounded-full text-sm font-medium text-white">
                                        {t('popular')}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-8 flex-grow">
                                    <div>
                                        <h3 className="text-3xl font-bold text-[#06B6D4] mb-4">
                                            {t('performance.title')}
                                        </h3>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xl font-medium text-white">{t('performance.description')}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 flex-grow">
                                        {performanceFeatures.map((feature: string, index: number) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-[#06B6D4]/20 flex items-center justify-center">
                                                    <svg className="w-3 h-3 text-[#06B6D4]" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                                    </svg>
                                                </div>
                                                <span className="text-gray-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a 
                                        href="#calendly"
                                        className="block w-full py-4 px-6 bg-[#06B6D4] hover:bg-[#06B6D4]/90 rounded-2xl text-white text-center font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        {t('getStarted')}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* New packages section */}
                    <h3 className="text-2xl font-bold text-white text-center mb-8">{t('advancedPackages')}</h3>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Package 5 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative group h-full"
                        >
                            <div className="absolute inset-0 bg-[#FF6B6B]/10 rounded-3xl blur-2xl group-hover:bg-[#FF6B6B]/20 transition-all duration-500" />
                            <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-[#FF6B6B]/20 h-full flex flex-col">
                                <div className="flex flex-col gap-8 flex-grow">
                                    <div>
                                        <h3 className="text-3xl font-bold text-[#FF6B6B] mb-4">
                                            {t('package5.title')}
                                        </h3>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xl font-medium text-white">{t('package5.description')}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 flex-grow">
                                        {package5Features.map((feature: string, index: number) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-[#FF6B6B]/20 flex items-center justify-center">
                                                    <svg className="w-3 h-3 text-[#FF6B6B]" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                                    </svg>
                                                </div>
                                                <span className="text-gray-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a 
                                        href="#calendly"
                                        className="block w-full py-4 px-6 bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 rounded-2xl text-white text-center font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        {t('getStarted')}
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Package 7 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            className="relative group h-full"
                        >
                            <div className="absolute inset-0 bg-[#FFD166]/10 rounded-3xl blur-2xl group-hover:bg-[#FFD166]/20 transition-all duration-500" />
                            <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-[#FFD166]/20 group-hover:border-[#FFD166]/30 transition-all duration-300 h-full flex flex-col">
                                <div className="flex flex-col gap-8 flex-grow">
                                    <div>
                                        <h3 className="text-3xl font-bold text-[#FFD166] mb-4">
                                            {t('package7.title')}
                                        </h3>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xl font-medium text-white">{t('package7.description')}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 flex-grow">
                                        {package7Features.map((feature: string, index: number) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-[#FFD166]/20 flex items-center justify-center">
                                                    <svg className="w-3 h-3 text-[#FFD166]" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                                    </svg>
                                                </div>
                                                <span className="text-gray-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a 
                                        href="#calendly"
                                        className="block w-full py-4 px-6 bg-[#FFD166] hover:bg-[#FFD166]/90 rounded-2xl text-white text-center font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        {t('getStarted')}
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Package 10 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative group h-full"
                        >
                            <div className="absolute inset-0 bg-[#06D6A0]/5 rounded-3xl blur-2xl group-hover:bg-[#06D6A0]/10 transition-all duration-500" />
                            <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-[#06D6A0]/20 group-hover:border-[#06D6A0]/30 transition-all duration-300 h-full flex flex-col">
                                <div className="absolute -top-3 right-4">
                                    <div className="bg-[#06D6A0] px-4 py-1 rounded-full text-sm font-medium text-white">
                                        {t('enterprise')}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-8 flex-grow">
                                    <div>
                                        <h3 className="text-3xl font-bold text-[#06D6A0] mb-4">
                                            {t('package10.title')}
                                        </h3>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xl font-medium text-white">{t('package10.description')}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 flex-grow">
                                        {package10Features.map((feature: string, index: number) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-[#06D6A0]/20 flex items-center justify-center">
                                                    <svg className="w-3 h-3 text-[#06D6A0]" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                                    </svg>
                                                </div>
                                                <span className="text-gray-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a 
                                        href="#calendly"
                                        className="block w-full py-4 px-6 bg-[#06D6A0] hover:bg-[#06D6A0]/90 rounded-2xl text-white text-center font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        {t('getStarted')}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Suspense fallback={null}>
                <div id="calendly" className="mt-20">
                    <DynamicCalendlyEmbed url="https://calendly.com/advantage-agency-contact/30min" />
                </div>
            </Suspense>
        </section>
    );
}