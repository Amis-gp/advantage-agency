'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const stats = [
    {
        number: "35%",
        label: "Average Reply Rate",
        description: "On average 35 replies per 100 sent emails"
    },
    {
        number: "15-20",
        label: "Qualified Calls/Month",
        description: "Qualified sales calls monthly"
    },
    {
        number: "40%",
        label: "Close Rate",
        description: "Percentage of closed deals from qualified calls"
    },
    {
        number: "6-8",
        label: "New Clients/Month",
        description: "New clients every month"
    }
];

export default function Results() {
    return (
        <section className="bg-zinc-900 py-20">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Real <span className="text-[#D12923]">Numbers</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Our results in numbers
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-black rounded-2xl p-8"
                    >
                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <h3 className="text-3xl md:text-4xl font-bold text-[#D12923] mb-2">
                                        {stat.number}
                                    </h3>
                                    <p className="text-white font-medium mb-2">
                                        {stat.label}
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        {stat.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-full aspect-[16/9] overflow-hidden"
                    >
                        <video
                            className="h-full rounded-2xl mx-auto"
                            controls
                            poster="/img/cold-email/video-testimonial-poster.webp"
                        >
                            <source src="/img/cold-email/video-testimonial.mp4" type="video/mp4" />
                        </video>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto"
                >
                    <Image
                        src="/img/cold-email/results.webp"
                        alt="Case Study Results"
                        width={2000}
                        height={1105}
                        loading="lazy"
                        quality={75}
                        placeholder="blur"
                        blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P7DfwAJYwPNteQx0wAAAABJRU5ErkJggg=="
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                        className="rounded-2xl shadow-2xl"
                    />
                </motion.div>
            </div>
        </section>
    );
}
