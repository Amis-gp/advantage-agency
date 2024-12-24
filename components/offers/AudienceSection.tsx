'use client';

import { useState } from 'react';

const AudienceSection = () => {
    const [activeHex, setActiveHex] = useState<number | null>(null);

    const hexagons = [
        {
            id: 1,
            title: 'B2B',
            services: [
                'PPS Ads',
                'TikTok Ads',
                'Landing Page Creation',
                'Reviews'
            ]
        },
        {
            id: 2,
            title: 'B2B',
            services: [
                'LinkedIn Outreach',
                'Email Marketing',
                'Manual Email Marketing',
                'Sales Audit',
                'Lead Databases'
            ]
        },
        {
            id: 3,
            title: 'B2B',
            services: [
                'PPS Ads',
                'TikTok Ads',
                'Landing Page Creation',
                'Reviews'
            ]
        }
    ];

    return (
        <section className="py-20 bg-black text-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="mb-16">
                    <p className="text-red-600 mb-2">TARGET AUDIENCE</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Who Is Your Audience?</h2>
                    <p className="text-gray-400">Choose The Right Approach To Reach Your Ideal Customers</p>
                </div>

                <div className="relative">
                    {/* Червоні лінії з'єднання */}
                    <div className="absolute inset-0 z-0">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M20,40 L80,40 L50,80 Z" 
                                fill="none" 
                                stroke="rgba(239, 68, 68, 0.5)" 
                                strokeWidth="0.5"
                                className="transition-all duration-300" />
                        </svg>
                    </div>

                    {/* Гексагони */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                        {hexagons.map((hex) => (
                            <div 
                                key={hex.id}
                                className={`
                                    hexagon bg-gradient-to-br from-yellow-500 to-yellow-400
                                    p-6 rounded-lg transform transition-all duration-300
                                    hover:scale-105 cursor-pointer
                                    ${activeHex === hex.id ? 'scale-105 shadow-2xl' : ''}
                                `}
                                onClick={() => setActiveHex(hex.id === activeHex ? null : hex.id)}
                            >
                                <h3 className="text-2xl font-bold text-black mb-4 text-center">
                                    {hex.title}
                                </h3>
                                <div className="space-y-2">
                                    {hex.services.map((service, index) => (
                                        <button
                                            key={index}
                                            className="w-full py-2 px-4 bg-black/10 hover:bg-black/20 
                                                     rounded transition-colors duration-200 text-black
                                                     text-sm font-medium"
                                        >
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hexagon {
                    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                }
            `}</style>
        </section>
    );
};

export default AudienceSection;
