'use client';
import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Discovery Call",
        description: "We'll discuss your goals, target market, and current challenges to create a customized strategy.",
        duration: "30 min"
    },
    {
        number: "02",
        title: "Strategy Session",
        description: "Our team develops your personalized outreach strategy and campaign structure.",
        duration: "2-3 days"
    },
    {
        number: "03",
        title: "Campaign Setup",
        description: "We set up your email infrastructure, create templates, and prepare lead lists.",
        duration: "3-4 days"
    },
    {
        number: "04",
        title: "Launch & Optimize",
        description: "We launch your campaigns and continuously optimize based on performance data.",
        duration: "Ongoing"
    }
];

export default function Process() {
    return (
        <section className="bg-black py-20">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Simple <span className="text-[#D12923]">4-Step</span> Process
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        From strategy to execution in just 7 days
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="bg-black p-8 rounded-xl border border-zinc-800 h-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-4xl font-bold text-[#D12923] opacity-50">
                                            {step.number}
                                        </span>
                                        <span className="text-sm text-gray-400 bg-zinc-800 px-3 py-1 rounded-full">
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

                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2 z-10">
                                        <svg 
                                            className="w-16 h-16 text-[#D12923]" 
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
                    <div className="inline-flex items-center bg-black rounded-full p-1 border border-zinc-800">
                        <span className="text-gray-400 px-4">
                            Ready to start?
                        </span>
                        <a 
                            href="/form"
                            className="inline-flex items-center px-6 py-2 bg-[#D12923] text-white rounded-full font-medium hover:bg-[#B22320] transition-all duration-300"
                        >
                            Book Your Call
                            <span className="ml-2">→</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}