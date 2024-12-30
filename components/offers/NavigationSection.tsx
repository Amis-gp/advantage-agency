'use client';

import { useState } from 'react';
import { Link } from '@/navigation';
import { playSound } from '@/app/constant/sound';

const AudienceSection = () => {
    const hexagons = [
        {
            id: 1,
            x: "0",
            y: "10",
            services: [
                { name: 'PPS Ads', link: '/services/pps-ads' },
                { name: 'TikTok Ads', link: '/services/tiktok-ads' },
                { name: 'Landing Page Creation', link: '/services/landing-page' },
                { name: 'Reviews', link: '/services/reviews' }
            ]
        },
        {
            id: 2,
            x: "512",
            y: "10",
            services: [
                { name: 'LinkedIn Outreach', link: '/services/linkedin' },
                { name: 'Email Marketing', link: '/services/email' },
                { name: 'Manual Email Marketing', link: '/services/manual-email' },
                { name: 'Sales Audit', link: '/services/sales-audit' },
                { name: 'Lead Databases', link: '/services/leads' }
            ]
        },
        {
            id: 3,
            x: "256",
            y: "441",
            services: [
                { name: 'PPS Ads', link: '/services/pps-ads' },
                { name: 'TikTok Ads', link: '/services/tiktok-ads' },
                { name: 'Landing Page Creation', link: '/services/landing-page' },
                { name: 'Reviews', link: '/services/reviews' }
            ]
        }
    ];

    const [selectedServices, setSelectedServices] = useState<Array<{ name: string; link: string }>>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleShowMore = (services: Array<{ name: string; link: string }>) => {
        setSelectedServices(services);
        setIsModalOpen(true);
        playSound('hover_1');
    };

    const renderServices = (services: Array<{ name: string; link: string }>, sectionIndex: number, isMobile: boolean) => {
        if (isMobile) {
            if (sectionIndex === 0) {
                return (
                    <div className="space-y-1">
                        <div className="grid grid-cols-2 gap-1">
                            {services.slice(0, 2).map((service, index) => (
                                <Link
                                    key={index}
                                    href={service.link}
                                    onMouseEnter={() => playSound('hover_1')}
                                    className="w-full block py-1.5 px-3 rounded-lg border border-black text-center m-auto transition-all duration-200 hover:bg-black/5 hover:scale-105 hover:border-black hover:shadow-lg"
                                >
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                        {services.slice(2).map((service, index) => (
                            <Link
                                key={index + 2}
                                href={service.link}
                                onMouseEnter={() => playSound('hover_1')}
                                className="block max-w-[300px] py-1.5 px-3 rounded-lg border border-black text-center m-auto transition-all duration-200 hover:bg-black/5 hover:scale-105 hover:border-black hover:shadow-lg"
                            >
                                {service.name}
                            </Link>
                        ))}
                    </div>
                );
            }

            if (services.length > 3) {
                return (
                    <>
                        {services.slice(0, 2).map((service, index) => (
                            <Link
                                key={index}
                                href={service.link}
                                onMouseEnter={() => playSound('hover_1')}
                                className="block max-w-[300px] py-1.5 px-3 rounded-lg border border-black text-center m-auto transition-all duration-200 hover:bg-black/5 hover:scale-105 hover:border-black hover:shadow-lg"
                            >
                                {service.name}
                            </Link>
                        ))}
                        <button
                            onClick={() => handleShowMore(services)}
                            className="block w-full max-w-[300px] py-1.5 px-3 rounded-lg border border-black text-center m-auto transition-all duration-200 hover:bg-black/5 hover:scale-105 hover:border-black hover:shadow-lg flex items-center justify-center gap-2"
                        >
                            <span>More Services</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-1" >
                                <path d="M8 3L14 8L8 13M2 8H14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </>
                );
            }
        }

        return services.map((service, index) => (
            <Link
                key={index}
                href={service.link}
                onMouseEnter={() => playSound('hover_1')}
                className="block max-w-[300px] py-1.5 px-3 rounded-lg border border-black text-center m-auto transition-all duration-200 hover:bg-black/5 hover:scale-105 hover:border-black hover:shadow-lg"
            >
                {service.name}
            </Link>
        ));
    };

    return (
        <section className="relative py-14 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-16">
                    <p className="text-red-600 uppercase tracking-wider mb-2">TARGET AUDIENCE</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Who Is Your Audience?</h2>
                    <p className="text-gray-400">Choose The Right Approach To Reach Your Ideal Customers</p>
                </div>

                <div className="hidden sm:block mx-auto w-full" style={{ maxWidth: '974px' }}>
                    <div className="w-full aspect-[974/972]">
                        <svg 
                            className="w-full h-full" 
                            viewBox="0 0 974 972" 
                            preserveAspectRatio="xMidYMid meet" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g filter="url(#filter0_i_8008_1024)">
                                <path d="M444.079 125.193L246.779 10.6135C235.496 4.06071 221.55 4.12652 210.328 10.7855L17.628 125.139C6.69968 131.624 0 143.391 0 156.098V381.562C0 394.345 6.77844 406.169 17.8093 412.628L210.508 525.463C221.638 531.98 235.406 532.045 246.597 525.632L443.899 412.573C455.094 406.157 462 394.241 462 381.337V156.324C462 143.495 455.173 131.635 444.079 125.193Z" fill="#FFCD2B"/>
                            </g>
                            <foreignObject x="0" y="10" width="462" height="528">
                                <div className="pt-16 text-black">
                                    <h3 className="text-[70px] font-semibold text-center">B2C</h3>
                                    <div className="space-y-2 mt-4">
                                        {renderServices(hexagons[0].services, 0, false)}
                                    </div>
                                </div>
                            </foreignObject>

                            <g filter="url(#filter1_i_8008_1024)">
                                <path d="M956.079 125.193L758.779 10.6135C747.496 4.06071 733.55 4.12652 722.328 10.7855L529.628 125.139C518.7 131.624 512 143.391 512 156.098V381.562C512 394.345 518.778 406.169 529.809 412.628L722.508 525.463C733.638 531.98 747.406 532.045 758.597 525.632L955.899 412.573C967.094 406.157 974 394.241 974 381.337V156.324C974 143.495 967.173 131.635 956.079 125.193Z" fill="#FFCD2B"/>
                            </g>
                            <foreignObject x="512" y="10" width="462" height="528">
                                <div className="pt-16 text-black">
                                    <h3 className="text-[70px] font-semibold text-center">B2B</h3>
                                    <div className="space-y-2 mt-4">
                                        {renderServices(hexagons[1].services, 1, false)}
                                    </div>
                                </div>
                            </foreignObject>

                            <g filter="url(#filter2_i_8008_1024)">
                                <path d="M700.079 561.193L502.779 446.614C491.496 440.061 477.55 440.127 466.328 446.786L273.628 561.139C262.7 567.624 256 579.391 256 592.098V817.562C256 830.345 262.778 842.169 273.809 848.628L466.508 961.463C477.638 967.98 491.406 968.045 502.597 961.632L699.899 848.573C711.094 842.157 718 830.241 718 817.337V592.324C718 579.495 711.173 567.635 700.079 561.193Z" fill="#FFCD2B"/>
                            </g>
                            <foreignObject x="256" y="441" width="462" height="528">
                                <div className="pt-16 text-black">
                                    <h3 className="text-[70px] font-semibold text-center">Custom</h3>
                                    <div className="space-y-2 mt-4">
                                        {renderServices(hexagons[2].services, 2, false)}
                                    </div>
                                </div>
                            </foreignObject>

                            <circle cx="131" cy="434" r="16" fill="black"/>
                            <circle cx="432" cy="263" r="10" fill="black"/>
                            <path d="M348 444C348 449.523 343.523 454 338 454C332.477 454 328 449.523 328 444C328 438.477 332.477 434 338 434C343.523 434 348 438.477 348 444Z" fill="black"/>
                            <circle cx="321" cy="86" r="16" fill="black"/>
                            <circle cx="542" cy="265" r="10" fill="black"/>
                            <circle cx="636" cy="446" r="10" fill="black"/>
                            <circle cx="682" cy="80" r="16" fill="black"/>
                            <circle cx="848" cy="440" r="16" fill="black"/>

                            <circle cx="387" cy="519" r="10" fill="black"/>
                            <circle cx="589" cy="529" r="10" fill="black"/>
                            <circle cx="687" cy="710" r="16" fill="black"/>
                            <circle cx="291" cy="710.5" r="16" fill="black"/>
                            <path d="M298.691 714.191C224.912 705.704 85.1808 644.038 131 430" stroke="#D12923" strokeWidth="14" strokeLinecap="round"/>
                            <path d="M319 91C367.512 26.6315 523.614 -43.142 685 84.1208" stroke="#D12923" strokeWidth="14" strokeLinecap="round"/>
                            <path d="M428 268C446.88 248.603 508.669 239.875 546 267.806" stroke="#D12923" strokeWidth="8" strokeLinecap="round"/>
                            <path d="M337.102 441C330.462 463.934 351.625 510.06 390.424 520.382" stroke="#D12923" strokeWidth="8" strokeLinecap="round"/>
                            <path d="M635.825 446C644.789 468.638 627.674 516.976 589.165 530.566" stroke="#D12923" strokeWidth="8" strokeLinecap="round"/>
                            <path d="M682.625 711.501C802.121 704.551 899.563 593.77 848 440" stroke="#D12923" strokeWidth="14" strokeLinecap="round"/>
                            <defs>
                                <filter id="filter0_i_8008_1024" x="0" y="5.74463" width="462" height="528.652" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="22"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.896696 0 0 0 0 0.36683 0 0 0 0 0 0 0 0 1 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8008_1024"/>
                                </filter>
                                <filter id="filter1_i_8008_1024" x="512" y="5.74463" width="462" height="528.652" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="22"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.896696 0 0 0 0 0.36683 0 0 0 0 0 0 0 0 1 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8008_1024"/>
                                </filter>
                                <filter id="filter2_i_8008_1024" x="256" y="441.745" width="462" height="528.652" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="22"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.896696 0 0 0 0 0.36683 0 0 0 0 0 0 0 0 1 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8008_1024"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>

                <div className="sm:hidden mx-auto w-full" style={{ maxWidth: '351px' }}>
                    <div className="w-full aspect-[351/760]">
                        <svg 
                            className="w-full h-full" 
                            viewBox="0 0 351 760" 
                            preserveAspectRatio="xMidYMid meet" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g filter="url(#filter0_i_8011_1025)">
                                <path d="M252.071 63.6412L154.905 7.1005C147.374 2.71785 138.058 2.76185 130.568 7.21546L35.7338 63.6057C28.4586 67.9317 24 75.7701 24 84.2343V195.609C24 204.124 28.5111 212.001 35.8548 216.31L130.688 271.951C138.118 276.31 147.313 276.353 154.784 272.064L251.95 216.273C259.404 211.993 264 204.054 264 195.46V84.3848C264 75.8396 259.456 67.9389 252.071 63.6412Z" fill="#FFCD2B"/>
                            </g>
                            <foreignObject x="24" y="3" width="240" height="275">
                                <div className="pt-8 text-black">
                                    <h3 className="text-[40px] font-semibold text-center">B2C</h3>
                                    <div className="text-sm px-4">
                                        {renderServices(hexagons[0].services, 0, true)}
                                    </div>
                                </div>
                            </foreignObject>

                            <g filter="url(#filter2_i_8011_1025)">
                                <path d="M339.071 304.641L241.905 248.101C234.374 243.718 225.058 243.762 217.568 248.215L122.734 304.606C115.459 308.932 111 316.77 111 325.234V436.609C111 445.124 115.511 453.001 122.855 457.31L217.688 512.951C225.118 517.31 234.313 517.353 241.784 513.064L338.95 457.273C346.404 452.993 351 445.054 351 436.46V325.385C351 316.84 346.456 308.939 339.071 304.641Z" fill="#FFCD2B"/>
                            </g>
                            <foreignObject x="111" y="244" width="240" height="275">
                                <div className="pt-8 text-black">
                                    <h3 className="text-[40px] font-semibold text-center">B2B</h3>
                                    <div className="space-y-1 px-4 text-sm">
                                        {renderServices(hexagons[1].services, 1, true)}
                                    </div>
                                </div>
                            </foreignObject>

                                        
                            <g filter="url(#filter1_i_8011_1025)">
                                <path d="M252.071 544.139L154.905 487.599C147.374 483.216 138.058 483.26 130.568 487.714L35.7338 544.104C28.4586 548.43 24 556.268 24 564.732V676.108C24 684.622 28.5111 692.499 35.8548 696.808L130.688 752.449C138.118 756.808 147.313 756.851 154.784 752.562L251.95 696.771C259.404 692.491 264 684.552 264 675.958V564.883C264 556.338 259.456 548.437 252.071 544.139Z" fill="#FFCD2B"/>
                            </g>
                            <foreignObject x="24" y="484" width="240" height="275">
                                <div className="pt-8 text-black">
                                    <h3 className="text-[40px] font-semibold text-center mt-3">Custom</h3>
                                    <div className="space-y-1 px-4 text-sm">
                                        {renderServices(hexagons[2].services, 2, true)}
                                    </div>
                                </div>
                            </foreignObject>

                            <circle cx="189" cy="226" r="10" fill="black"/>
                            <circle cx="94" cy="226" r="10" fill="black"/>
                            <circle cx="210" cy="273" r="10" fill="black"/>
                            <circle cx="218" cy="489" r="10" fill="black"/>
                            <circle cx="201" cy="530" r="10" fill="black"/>
                            <circle cx="87" cy="530" r="10" fill="black"/>

                            <path d="M187 222.611C207.075 243.159 208.897 266.397 209.944 272.896" stroke="#D12923" strokeWidth="8" strokeLinecap="round"/>
                            <path d="M96.5 221.5C49.3112 253.433 22.5305 464.13 90.7457 530.936" stroke="#D12923" strokeWidth="8" strokeLinecap="round"/>
                            <path d="M217.501 486.5C218.5 506 208.867 526.754 199 532.5" stroke="#D12923" strokeWidth="8" strokeLinecap="round"/>
                            
                            <defs>
                                <filter id="filter0_i_8011_1025" x="24" y="3" width="240" height="275" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="22"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.896696 0 0 0 0 0.36683 0 0 0 0 0 0 0 0 1 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8011_1025"/>
                                </filter>
                                <filter id="filter2_i_8011_1025" x="111" y="244" width="240" height="275" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="22"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.896696 0 0 0 0 0.36683 0 0 0 0 0 0 0 0 1 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8011_1025"/>
                                </filter>
                                <filter id="filter1_i_8011_1025" x="24" y="484" width="240" height="275" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="22"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.896696 0 0 0 0 0.36683 0 0 0 0 0 0 0 0 1 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8011_1025"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div 
                        className="bg-[#ffcd2a] rounded-lg p-6 max-w-md w-full mx-4" 
                        style={{
                            boxShadow: 'inset 0 4px 44px rgba(229, 93, 0, 1)'
                        }}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-black">All Services</h3>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="text-black/70 hover:text-black transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path 
                                        d="M18 6L6 18M6 6L18 18" 
                                        stroke="currentColor" 
                                        strokeWidth="1.5" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="space-y-2">
                            {selectedServices.map((service, index) => (
                                <Link
                                    key={index}
                                    href={service.link}
                                    onMouseEnter={() => playSound('hover_1')}
                                    className="block text-black w-full py-2 px-4 rounded-lg border border-black text-center transition-all duration-200 hover:bg-black/5 hover:shadow-lg hover:scale-[1.02]"
                                >
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AudienceSection;
