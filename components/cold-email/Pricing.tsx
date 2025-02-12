'use client';
import { motion } from 'framer-motion';
import CalendlyEmbed from '@/components/CalendlyEmbed';

const features = [
    "3,000 contacts",
    "18 Senders",
    "6 Campaigns",
    "Spintax",
    "Analytics",
    "Email warmup included",
];

export default function Pricing() {
    return (
        <section className="bg-[#111019] pt-20">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Choose a Plan <span className="text-[#4F46E5]">That's Right</span> For You
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Flexible pricing options to match your needs
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative group h-full"
                        >
                            <div className="absolute inset-0 bg-[#4F46E5]/10 rounded-3xl blur-2xl group-hover:bg-[#4F46E5]/20 transition-all duration-500" />
                            <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-[#4F46E5]/20 h-full flex flex-col">
                                <div className="absolute -top-3 right-4">
                                    <div className="bg-[#4F46E5] px-4 py-1 rounded-full text-sm font-medium text-white">
                                        Popular
                                    </div>
                                </div>
                                <div className="flex flex-col gap-8 flex-grow">
                                    <div>
                                        <h3 className="text-3xl font-bold text-[#4F46E5] mb-4">
                                            Standard Package
                                        </h3>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl font-bold text-white">$2,990</span>
                                            <span className="text-gray-400">one-time</span>
                                        </div>
                                        <p className="mt-4 text-gray-400">
                                            One-time payment for setting up and launching the system
                                        </p>
                                    </div>

                                    <div className="space-y-4 flex-grow">
                                        {features.map((feature, index) => (
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
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative h-full"
                        >
                            <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/5 h-full flex flex-col">
                                <div className="flex flex-col gap-8 flex-grow">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-4">
                                            Pay-on-Performance
                                        </h3>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl font-bold text-white">$1,500</span>
                                            <span className="text-gray-400">one-time</span>
                                        </div>
                                        <p className="mt-2 text-[#06B6D4] font-medium">+ $40 per qualified lead</p>
                                        <p className="mt-4 text-gray-400">
                                            One-time payment for setting up and launching the system + $40 per lead
                                        </p>
                                    </div>

                                    <div className="space-y-4 flex-grow">
                                        {features.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-black/50 flex items-center justify-center">
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
                                        className="block w-full py-4 px-6 bg-black/50 hover:bg-black/70 border border-white/10 rounded-2xl text-white text-center font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <CalendlyEmbed url="https://calendly.com/advantage-agency-contact/30min?month=2025-01" />
        </section>
    );
}