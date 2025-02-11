'use client';
import { motion } from 'framer-motion';

const features = [
    "Trigger-based lead lists",
    "Personalized email sequences",
    "A/B testing",
    "Sales assets & templates",
    "Weekly reporting",
    "Dedicated account manager",
    "Email warmup included",
    "CRM integration"
];

export default function Pricing() {
    return (
        <section className=" py-20">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Simple, <span className="text-[#D12923]">Performance-Based</span> Pricing
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We only succeed when you succeed. No long-term contracts, just results.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-zinc-900 rounded-2xl p-8 md:p-12"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Performance Package
                                </h3>
                                <p className="text-gray-400">
                                    Perfect for agencies looking to scale
                                </p>
                            </div>
                            <div className="text-center md:text-right">
                                <div className="text-3xl font-bold text-white mb-2">
                                    $2,000
                                    <span className="text-lg text-gray-400 font-normal">/month</span>
                                </div>
                                <p className="text-[#D12923] font-medium">
                                    + 10% of closed revenue
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {features.map((feature, index) => (
                                <div 
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <svg 
                                        className="w-5 h-5 text-[#D12923] flex-shrink-0" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M5 13l4 4L19 7" 
                                        />
                                    </svg>
                                    <span className="text-white">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-3 text-lg">
                                <svg 
                                    className="w-6 h-6 text-[#D12923] flex-shrink-0" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M5 13l4 4L19 7" 
                                    />
                                </svg>
                                <span className="text-white font-medium">
                                    Guaranteed minimum 20 qualified calls per month
                                </span>
                            </div>

                            <div className="flex items-center gap-3 text-lg">
                                <svg 
                                    className="w-6 h-6 text-[#D12923] flex-shrink-0" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M5 13l4 4L19 7" 
                                    />
                                </svg>
                                <span className="text-white font-medium">
                                    Money back if we don't deliver the minimum
                                </span>
                            </div>
                        </div>

                        <div className="mt-10 text-center">
                            <a 
                                href="/form"
                                className="inline-flex items-center px-8 py-3 bg-[#D12923] text-white rounded-full font-medium hover:bg-[#B22320] transition-all duration-300"
                            >
                                Book Your Growth Call
                                <span className="ml-2">→</span>
                            </a>
                            <p className="mt-4 text-gray-400">
                                Limited spots available. Book your call now.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}