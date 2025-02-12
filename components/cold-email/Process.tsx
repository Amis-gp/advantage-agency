'use client';
import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Warming up the system for mailing",
        description: "We prepare and optimize the email infrastructure to ensure maximum deliverability.",
        duration: "4 weeks"
    },
    {
        number: "02",
        title: "Set up campaigns, add texts",
        description: "We create compelling email templates and set up your campaign structure.",
        duration: "2-3 days"
    },
    {
        number: "03",
        title: "Scraping 3,000 contacts",
        description: "We gather and verify your target audience contact information.",
        duration: "5-7 days"
    },
    {
        number: "04",
        title: "Upload contacts & launch",
        description: "We import the contacts and initiate your campaign with careful monitoring.",
        duration: "1 day"
    },
    {
        number: "05",
        title: "Track performance",
        description: "We monitor 4-8% response rate (approximately 120 responses).",
        duration: "Ongoing"
    },
    {
        number: "06",
        title: "Generate leads",
        description: "We convert responses into approximately 50 interested leads and 30 demo calls.",
        duration: "Ongoing"
    }
];

export default function Process() {
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
                        Simple <span className="text-[#4F46E5]">4-Step</span> Process
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        From strategy to execution in just 7 days
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
                            Ready to start?
                        </span>
                        <a 
                            href="#calendly"
                            className="inline-flex items-center px-6 py-2 bg-[#4F46E5] text-white rounded-full font-medium hover:bg-[#4338CA] transition-all duration-300"
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