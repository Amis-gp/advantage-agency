'use client';

import { motion } from 'framer-motion';

const HowWeWorkSection = () => {
    const workSteps = [
        {
            title: "QUALITY CONTROL",
            description: "We analyze your deal stages and provide feedback to improve your sales performance",
            number: "01"
        },
        {
            title: "FRAUD PROTECTION",
            description: "We use new mechanics that allow protection from spam applications up to 90%",
            number: "02"
        },
        {
            title: "MONTHLY REPORTING & PLANNING",
            description: "You receive clear profitability reports and recommendations for improvements",
            number: "03"
        }
    ];

    return (
        <section className="py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="text-red-500 uppercase tracking-wider">PROCESS</span>
                        <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">How We Work</h2>
                    
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {workSteps.map((step, index) => (
                         <div key={index} className="flex justify-center">
                             <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-colors duration-300 w-full max-w-xs">
                                <div className="text-center">
                                     <div className="flex items-center justify-center mb-4">
                                         <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                             {step.number}
                                         </div>
                                     </div>
                                     
                                     <h3 className="text-white text-lg font-bold uppercase tracking-wide mb-3">
                                         {step.title}
                                     </h3>
                                     <p className="text-gray-400 text-sm leading-relaxed">
                                         {step.description}
                                     </p>
                                 </div>
                             </div>
                         </div>
                     ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeWorkSection;