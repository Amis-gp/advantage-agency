'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function CaseStudies() {
    const t = useTranslations('cold-email.case-studies');

    const cases = [
        {
            title: t('cases.0.title'),
            description: t('cases.0.description'),
            image: '/img/portfolio/build-scraper.webp',
            link: "/cases/v15",
            stats: {
                instagram: t('cases.0.stats.instagram'),
                facebook: t('cases.0.stats.facebook'),
                linkedin: t('cases.0.stats.linkedin')
            }
        },
        {
            title: t('cases.1.title'),
            description: t('cases.1.description'),
            image: '/img/portfolio/3d-rendering.webp',
            link: "/cases/v6",
            stats: {
                emailResponses: t('cases.1.stats.emailResponses'),
                leadCalls: t('cases.1.stats.leadCalls'),
                closedDeals: t('cases.1.stats.closedDeals')
            }
        },
        {
            title: t('cases.2.title'),
            description: t('cases.2.description'),
            image: '/img/portfolio/email-marketing.webp',
            link: "/cases/v13",
            stats: {
                emailsSent: t('cases.2.stats.emailsSent'),
                responses: t('cases.2.stats.responses'),
                demoCalls: t('cases.2.stats.demoCalls')
            }
        },
        {
            title: t('cases.3.title'),
            description: t('cases.3.description'),
            image: '/img/portfolio/zeno-crm.webp',
            link: "/cases/v16",
            stats: {
                emailsSent: t('cases.3.stats.emailsSent'),
                openRate: t('cases.3.stats.openRate'),
                replyRate: t('cases.3.stats.replyRate')
            }
        }
    ];

    return (
        <section id='CaseStudies' className="pt-28 pb-8 relative max-w-7xl mx-auto">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        {t('title.part1')} <span className="text-[#4F46E5]">{t('title.part2')}</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
                        {t('subtitle')}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {cases.map((caseItem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className=" max-w-[500px] mx-auto group relative bg-[#0A0A0A]/90 border border-zinc-800 rounded-2xl overflow-hidden hover:bg-[#151515] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#4F46E5]/10"
                        >
                            <Link href={caseItem.link} target="_blank" className="block p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#4F46E5]"></div>
                                        <span className="text-sm text-gray-400">Case Study</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#4F46E5] transition-opacity duration-300">
                                        <span className="text-sm">{t('viewCase')}</span>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="relative aspect-[1.5] mb-8 overflow-hidden rounded-xl">
                                    <Image
                                        src={caseItem.image}
                                        alt={caseItem.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {caseItem.title}
                                </h3>
                                
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    {caseItem.description}
                                </p>

                                <div className="grid grid-cols-3 gap-8">
                                    {Object.entries(caseItem.stats).map(([key, value]) => (
                                        <div key={key} className="text-center">
                                            <div className="text-2xl font-bold text-[#4F46E5] mb-2">{value}</div>
                                            <div className="text-sm text-gray-300">{t(`stats.${key}`)}</div>
                                        </div>
                                    ))}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-[#4F46E5]/20 to-[#7C3AED]/20 border border-[#4F46E5]/30 rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            {t('cta.title')}
                        </h3>
                        <p className="text-gray-400 mb-6">
                            {t('cta.subtitle')}
                        </p>
                        <Link 
                            href="/blog" 
                            className="inline-flex items-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                        >
                            {t('cta.button')}
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
