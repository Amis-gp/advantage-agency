'use client';

import Link from 'next/link';
import { useState } from 'react';

const PortfolioSection = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-start mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            Short Cases
                        </h2>
                    </div>

                </div>

                <div className="space-y-2">
                    <div className="hidden md:grid grid-cols-5 gap-8 text-white text-sm font-semibold border-b border-gray-700 pb-4">
                        <div>NUMBER</div>
                        <div>VERTICAL</div>
                        <div>GEOS & DATES</div>
                        <div>GOAL</div>
                        <div>TRAFFIC SOURCES & RESULT</div>
                    </div>

                    <Link href="/en/cases/v22" className="block">
                        <div className="md:grid md:grid-cols-5 md:gap-8 text-white py-6 border-b border-gray-800 hover:bg-black/30 hover:border-red-400/50 transition-all duration-300 cursor-pointer group">
                            <div className="text-white font-semibold group-hover:text-red-400 transition-colors mb-2 md:mb-0">
                                <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider">Number: </span>N°01
                            </div>
                            
                            <div className="text-white font-semibold group-hover:text-red-400 transition-colors mb-2 md:mb-0">
                                <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider">Vertical: </span>GAMBLING
                            </div>
                            
                            <div className="mb-2 md:mb-0">
                                <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider">Geos & Dates: </span>
                                <div className="text-white font-semibold group-hover:text-red-400 transition-colors inline md:block">🇸🇰 🇭🇺 🇨🇿 MULTI-GEO</div>
                                <div className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors inline md:block ml-2 md:ml-0">25.08.2025 - 11.09.2025</div>
                            </div>
                            
                            <div className="text-white text-sm leading-tight group-hover:text-red-400 transition-colors mb-2 md:mb-0">
                                <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider block mb-1">Goal: </span>
                                SCALE PWA<br />GAMBLING OFFERS
                            </div>
                            
                            <div>
                                <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider block mb-1">Traffic Sources & Result: </span>
                                <div className="text-white text-sm leading-tight mb-2 group-hover:text-red-400 transition-colors">
                                    FACEBOOK
                                </div>
                                <div className="text-red-400 font-semibold text-sm group-hover:text-red-300 transition-colors">
                                    47% ROI,<br />
                                    $120/FTD
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href="/en/cases/v19" className="block">
                        <div className="md:grid md:grid-cols-5 md:gap-8 text-white py-6 border-b border-gray-800 hover:bg-black/30 hover:border-red-400/50 transition-all duration-300 cursor-pointer group">
                            <div className="text-white font-semibold group-hover:text-red-400 transition-colors mb-2 md:mb-0">
                                <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider">Number: </span>N°01
                            </div>
                            
                            <div className="text-white font-semibold group-hover:text-red-400 transition-colors mb-2 md:mb-0">
                                <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider">Vertical: </span>GAMBLING
                            </div>
                            
                            <div className="mb-2 md:mb-0">
                                <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider">Geos & Dates: </span>
                                <div className="text-white font-semibold group-hover:text-red-400 transition-colors inline md:block">🇲🇽 MEXICO</div>
                                <div className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors inline md:block ml-2 md:ml-0">2025</div>
                            </div>
                            
                            <div className="text-white text-sm leading-tight group-hover:text-red-400 transition-colors mb-2 md:mb-0">
                                <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider block mb-1">Goal: </span>
                                SCALE PWA<br />GAMBLING OFFERS
                            </div>
                            
                            <div>
                                <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider block mb-1">Traffic Sources & Result: </span>
                                <div className="text-white text-sm leading-tight mb-2 group-hover:text-red-400 transition-colors">
                                    FACEBOOK
                                </div>
                                <div className="text-red-400 font-semibold text-sm group-hover:text-red-300 transition-colors">
                                    94.21% ROI,<br />
                                    $5,399 PROFIT
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href="/en/cases/v20" className="block">
                        <div className="md:grid md:grid-cols-5 md:gap-8 text-white py-6 border-b border-gray-800 hover:bg-black/30 hover:border-red-400/50 transition-all duration-300 cursor-pointer group">
                            <div className="text-white font-semibold group-hover:text-red-400 transition-colors mb-2 md:mb-0">
                                <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider">Number: </span>N°03
                            </div>
                            
                            <div className="text-white font-semibold group-hover:text-red-400 transition-colors mb-2 md:mb-0">
                                <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider">Vertical: </span>GAMBLING
                            </div>
                            
                            <div className="mb-2 md:mb-0">
                                <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider">Geos & Dates: </span>
                                <div className="text-white font-semibold group-hover:text-red-400 transition-colors inline md:block">🌍 GLOBAL</div>
                                <div className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors inline md:block ml-2 md:ml-0">2025</div>
                            </div>
                            
                            <div className="text-white text-sm leading-tight group-hover:text-red-400 transition-colors mb-2 md:mb-0">
                                <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider block mb-1">Goal: </span>
                                MAXIMIZE PROFIT<br />WITH PROVEN<br />FRAMEWORKS
                            </div>
                            
                            <div>
                                <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider block mb-1">Traffic Sources & Result: </span>
                                <div className="text-white text-sm leading-tight mb-2 group-hover:text-red-400 transition-colors">
                                    FACEBOOK
                                </div>
                                <div className="text-red-400 font-semibold text-sm group-hover:text-red-300 transition-colors">
                                    $11K+ PROFIT,<br />
                                    100%+ REDEP RATE
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/en/cases/v21" className="block">
                            <div className="md:grid md:grid-cols-5 md:gap-8 text-white py-6 border-b border-gray-800 hover:bg-black/30 hover:border-red-400/50 transition-all duration-300 cursor-pointer group">
                                <div className="text-white font-semibold group-hover:text-red-400 transition-colors mb-2 md:mb-0">
                                    <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider">Number: </span>N°04
                                </div>
                                
                                <div className="text-white font-semibold group-hover:text-red-400 transition-colors mb-2 md:mb-0">
                                    <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider">Vertical: </span>NUTRA
                                </div>
                                
                                <div className="mb-2 md:mb-0">
                                    <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider">Geos & Dates: </span>
                                    <div className="text-white font-semibold group-hover:text-red-400 transition-colors inline md:block">🇲🇽 MEXICO</div>
                                    <div className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors inline md:block ml-2 md:ml-0">2025</div>
                                </div>
                                
                                <div className="text-white text-sm leading-tight group-hover:text-red-400 transition-colors mb-2 md:mb-0">
                                    <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider block mb-1">Goal: </span>
                                    SCALE PROSTANORM<br />FORTE OFFER
                                </div>
                                
                                <div>
                                    <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider block mb-1">Traffic Sources & Result: </span>
                                    <div className="text-white text-sm leading-tight mb-2 group-hover:text-red-400 transition-colors">
                                        FACEBOOK
                                    </div>
                                    <div className="text-red-400 font-semibold text-sm group-hover:text-red-300 transition-colors">
                                        81.07% ROI,<br />
                                        $4,214 PROFIT
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showMore ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <Link href="/en/cases/v14" className="block">
                            <div className="md:grid md:grid-cols-5 md:gap-8 text-white py-6 border-b border-gray-800 hover:bg-black/30 hover:border-red-400/50 transition-all duration-300 cursor-pointer group">
                                <div className="text-white font-semibold group-hover:text-red-400 transition-colors mb-2 md:mb-0">
                                    <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider">Number: </span>N°05
                                </div>
                                
                                <div className="text-white font-semibold group-hover:text-red-400 transition-colors mb-2 md:mb-0">
                                    <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider">Vertical: </span>CRYPTO
                                </div>
                                
                                <div className="mb-2 md:mb-0">
                                    <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider">Geos & Dates: </span>
                                    <div className="text-white font-semibold group-hover:text-red-400 transition-colors inline md:block">🌍 GLOBAL</div>
                                    <div className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors inline md:block ml-2 md:ml-0">2024</div>
                                </div>
                                
                                <div className="text-white text-sm leading-tight group-hover:text-red-400 transition-colors mb-2 md:mb-0">
                                    <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider block mb-1">Goal: </span>
                                    TEST 10,000 EMAILS<br />IN CRYPTO NICHE
                                </div>
                                
                                <div>
                                    <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider block mb-1">Traffic Sources & Result: </span>
                                    <div className="text-white text-sm leading-tight mb-2 group-hover:text-red-400 transition-colors">
                                        COLD EMAIL
                                    </div>
                                    <div className="text-red-400 font-semibold text-sm group-hover:text-red-300 transition-colors">
                                        5% REPLY RATE,<br />
                                        300% ROI
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showMore ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <Link href="/en/cases/v18" className="block">
                            <div className="md:grid md:grid-cols-5 md:gap-8 text-white py-6 border-b border-gray-800 hover:bg-black/30 hover:border-red-400/50 transition-all duration-300 cursor-pointer group">
                                <div className="text-white font-semibold group-hover:text-red-400 transition-colors mb-2 md:mb-0">
                                    <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider">Number: </span>N°06
                                </div>
                                
                                <div className="text-white font-semibold group-hover:text-red-400 transition-colors mb-2 md:mb-0">
                                    <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider">Vertical: </span>iGAMING B2B
                                </div>
                                
                                <div className="mb-2 md:mb-0">
                                    <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider">Geos & Dates: </span>
                                    <div className="text-white font-semibold group-hover:text-red-400 transition-colors inline md:block">🌍 EUROPE, LATAM, ASIA</div>
                                    <div className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors inline md:block ml-2 md:ml-0">2025</div>
                                </div>
                                
                                <div className="text-white text-sm leading-tight group-hover:text-red-400 transition-colors mb-2 md:mb-0">
                                    <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider block mb-1">Goal: </span>
                                    FIND WARM LEADS<br />FOR SOFTWARE<br />PROVIDER
                                </div>
                                
                                <div>
                                    <span className="md:hidden text-gray-400 text-xs uppercase tracking-wider block mb-1">Traffic Sources & Result: </span>
                                    <div className="text-white text-sm leading-tight mb-2 group-hover:text-red-400 transition-colors">
                                        COLD EMAIL
                                    </div>
                                    <div className="text-red-400 font-semibold text-sm group-hover:text-red-300 transition-colors">
                                        94 RESPONSES,<br />
                                        35 WARM LEADS
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="flex justify-center mt-8">
                        <button 
                            onClick={() => setShowMore(!showMore)}
                            className="p-2 text-white hover:text-red-400 transition-colors duration-300"
                        >
                            <svg 
                                className={`w-6 h-6 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;