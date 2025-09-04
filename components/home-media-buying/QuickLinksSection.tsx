'use client';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';

export default function QuickLinksSection() {
    const locale = useLocale();

    const links = [
        { href: `/${locale}/cold-email`, labelKey: 'coldEmailLabel', descriptionKey: 'coldEmailDescription' },
        { href: `https://www.advantagescrape.com/`, labelKey: 'scrapingLabel', descriptionKey: 'scrapingDescription' },
        { href: `/${locale}/blog`, labelKey: 'blogLabel', descriptionKey: 'blogDescription' }
    ];

    return (
        <section className="py-16 md:py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16"
                >
                    Quick Links
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {links.map((link, index) => (
                        <motion.div
                            key={link.labelKey}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                            className="h-full"
                        >
                            <Link href={link.href} legacyBehavior passHref>
                                <a 
                                   className="flex flex-col h-full p-6 bg-black/40 border border-zinc-700 rounded-xl shadow-lg hover:shadow-xl hover:shadow-red-500/25 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-1.5 group text-center"
                                   target={link.href.startsWith('http') ? '_blank' : '_self'}
                                   rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                    <div>
                                        <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                                            {link.labelKey === 'coldEmailLabel' ? 'Cold Email Campaigns' : 
                                             link.labelKey === 'scrapingLabel' ? 'Data Scraping' : 
                                             'Our Blog'}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300 min-h-[60px]">
                                            {link.descriptionKey === 'coldEmailDescription' ? 'Learn how our automated email campaigns can attract new clients for your business.' : 
                                             link.descriptionKey === 'scrapingDescription' ? 'Discover our powerful data collection tool that will help you gain a competitive advantage.' : 
                                             'Read our latest articles and insights about marketing, sales and technology.'}
                                        </p>
                                    </div>
                                    <p className="mt-auto text-red-500 group-hover:text-red-300 font-medium transition-colors duration-300">
                                        Learn More →
                                    </p>
                                </a>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}