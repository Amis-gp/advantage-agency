'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        title: "Trigger-based lead lists",
        description: "We scrape relevant data to target companies that need your services asap. Whether it's hiring triggers if they're looking for a CMO, or a sudden decline in organic traffic - we build lists so when they jump on the call, they have a marketing problem that needs fixing.",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="#D12923" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    {
        title: "Building a relevant offer",
        description: "You don't need a crazy offer with money back guarantees. With your help and AI market research, we'll build a relevant, hyper-specific offer that resonates only with them and cut through the noise.",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#D12923" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#D12923" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#D12923" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    {
        title: "Attention generation",
        description: "Regardless of how good your offer/service is, you need more eyeballs on it. Outbound is literally ads, but way cheaper and you can directly choose who you want to target. Each month to hit KPI's we're sending 5-10,000 new contacts each month.",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="#D12923" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 17L15 12L10 7" stroke="#D12923" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 12H3" stroke="#D12923" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    {
        title: "Sales/Conversions System",
        description: "It's easy to book calls. The hard part is actually converting, especially in this broken economy where your prospects have been burnt. We'll build you systems with sales assets & automated follow ups to make sure you close 20%+ of these calls.",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#D12923" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }
];

export default function HowItWorks() {
    return (
        <section className="relative  py-20 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute w-[1px] h-full left-1/4 top-0 bg-gradient-to-b from-transparent via-[#D12923] to-transparent opacity-20" />
                <div className="absolute w-[1px] h-full left-2/4 top-0 bg-gradient-to-b from-transparent via-[#D12923] to-transparent opacity-20" />
                <div className="absolute w-[1px] h-full left-3/4 top-0 bg-gradient-to-b from-transparent via-[#D12923] to-transparent opacity-20" />
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
                        How it <span className="text-[#D12923]">works</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Our proven process to generate qualified leads and convert them into paying clients
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
                            className="relative group"
                        >
                            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800 hover:border-[#D12923] transition-all duration-300">
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D12923] to-[#D12923] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                                
                                <div className="relative">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">
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
                    className="text-center mt-16"
                >
                    <a 
                        href="/form"
                        className="inline-flex items-center px-8 py-3 bg-[#D12923] text-white rounded-full font-medium hover:bg-[#B22320] transition-all duration-300"
                    >
                        Book Your Growth Call
                        <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}