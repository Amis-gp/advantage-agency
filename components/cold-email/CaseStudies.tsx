'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function CaseStudies() {
    const t = useTranslations('cold-email.case-studies');

    const cases = Array.from({ length: 3 }, (_, i) => ({
        title: t(`cases.${i}.title`),
        description: t(`cases.${i}.description`),
        image: `/img/cold-email/case-${i + 1}.webp`,
        link: t(`cases.${i}.link`),
        stats: {
            leads: t(`cases.${i}.stats.leads`),
            conversion: t(`cases.${i}.stats.conversion`),
            revenue: t(`cases.${i}.stats.revenue`)
        }
    }));

    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
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

                <div className="grid md:grid-cols-3 gap-8">
                    {cases.map((caseItem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative"
                        >
                            <Link href={caseItem.link} className="block">
                                <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-xl">
                                    <Image
                                        src={caseItem.image}
                                        alt={caseItem.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                                
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#4F46E5] transition-colors">
                                    {caseItem.title}
                                </h3>
                                
                                <p className="text-gray-400 mb-4">
                                    {caseItem.description}
                                </p>

                                <div className="grid grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-[#4F46E5]">{caseItem.stats.leads}</div>
                                        <div className="text-sm text-gray-400">Leads</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-[#06B6D4]">{caseItem.stats.conversion}</div>
                                        <div className="text-sm text-gray-400">Conversion</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-[#7C3AED]">{caseItem.stats.revenue}</div>
                                        <div className="text-sm text-gray-400">Revenue</div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
