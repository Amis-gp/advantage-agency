'use client';

import { useState } from 'react';
import { Link } from '@/navigation';
import { playSound } from '@/app/constant/sound';
import { useTranslations } from 'next-intl';

const AudienceSection = () => {
    const t = useTranslations();

    const hexagons = [
        {
            id: 1,
            x: "0",
            y: "10",
            services: [
                { name: t("offers.audience.segments.b2c.services.0"), link: '/services/pps-ads' },
                { name: t("offers.audience.segments.b2c.services.1"), link: '/services/meta-ads' },
                { name: t("offers.audience.segments.b2c.services.2"), link: '/services/landing-page' }
            ]
        },
        {
            id: 2,
            x: "512",
            y: "10",
            services: [
                { name: t("offers.audience.segments.b2b.services.0"), link: '/services/linkedin' },
                { name: t("offers.audience.segments.b2b.services.1"), link: '/services/email' },
                { name: t("offers.audience.segments.b2b.services.2"), link: '/services/manual-email' },
                { name: t("offers.audience.segments.b2b.services.3"), link: '/services/sales-audit' },
                { name: t("offers.audience.segments.b2b.services.4"), link: '/services/leads' }
            ]
        },
        {
            id: 3,
            x: "256",
            y: "441",
            services: [
                { name: t("offers.audience.segments.custom.services.0"), link: '/services/pps-ads' },
                { name: t("offers.audience.segments.custom.services.1"), link: '/services/tiktok-ads' },
                { name: t("offers.audience.segments.custom.services.2"), link: '/services/landing-page' },
                { name: t("offers.audience.segments.custom.services.3"), link: '/services/reviews' }
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
            // if (sectionIndex === 0) {
            //     return (
            //         <div className="space-y-1">
            //             <div className="grid grid-cols-2 gap-1">
            //                 {services.slice(0, 2).map((service, index) => (
            //                     <Link
            //                         key={index}
            //                         href={service.link}
            //                         onMouseEnter={() => playSound('hover_1')}
            //                         className="w-full block py-1.5 px-3 rounded-lg border border-black text-center m-auto transition-all duration-200 hover:bg-black/5 hover:scale-105 hover:border-black hover:shadow-lg"
            //                     >
            //                         {service.name}
            //                     </Link>
            //                 ))}
            //             </div>
            //             {services.slice(2).map((service, index) => (
            //                 <Link
            //                     key={index + 2}
            //                     href={service.link}
            //                     onMouseEnter={() => playSound('hover_1')}
            //                     className="block max-w-[300px] py-1.5 px-3 rounded-lg border border-black text-center m-auto transition-all duration-200 hover:bg-black/5 hover:scale-105 hover:border-black hover:shadow-lg"
            //                 >
            //                     {service.name}
            //                 </Link>
            //             ))}
            //         </div>
            //     );
            // }

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
            <div className="max-w-7xl mx-auto">
                <div className="px-6">
                    <p className="text-red-600 uppercase tracking-wider mb-2">TARGET AUDIENCE</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Who Is Your Audience?</h2>
                    <p className="text-gray-400">Choose The Right Approach To Reach Your Ideal Customers</p>
                </div>

                <div className="hidden sm:block w-full">
                    <div className="max-w-[1013px] pr-6 mx-auto">
                        <div className="w-full aspect-[1013/1121]">
                            <svg 
                                className="w-full h-full" 
                                viewBox="0 0 1013 1121" 
                                preserveAspectRatio="xMidYMid meet" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g opacity="0.8" filter="url(#filter0_f_8001_307)">
                                <ellipse cx="742.359" cy="665.193" rx="131.312" ry="114.04" transform="rotate(88.4906 742.359 665.193)" fill="#D12923"/>
                                </g>
                                <g filter="url(#filter1_f_8001_307)">
                                <ellipse cx="784.975" cy="632.658" rx="83.9113" ry="72.874" transform="rotate(88.4906 784.975 632.658)" fill="#FFCD2B"/>
                                </g>
                                <g opacity="0.8">
                                <g filter="url(#filter2_f_8001_307)">
                                <ellipse cx="270.5" cy="248.91" rx="166.995" ry="145.03" transform="rotate(-176.516 270.5 248.91)" fill="#D12923"/>
                                </g>
                                <g filter="url(#filter3_f_8001_307)">
                                <ellipse cx="307.003" cy="306.502" rx="106.713" ry="92.6768" transform="rotate(-176.516 307.003 306.502)" fill="#FFCD2B"/>
                                </g>
                                </g>
                                <g opacity="0.8">
                                <g filter="url(#filter4_f_8001_307)">
                                <ellipse cx="381.281" cy="870.813" rx="155.219" ry="134.803" transform="rotate(-49.6801 381.281 870.813)" fill="#D12923"/>
                                </g>
                                <g filter="url(#filter5_f_8001_307)">
                                <ellipse cx="318.096" cy="865.874" rx="99.1882" ry="86.1415" transform="rotate(-49.6801 318.096 865.874)" fill="#FFCD2B"/>
                                </g>
                                </g>
                                <g filter="url(#filter7_i_8001_307)">
                                <path d="M483.079 254.193L285.779 139.614C274.496 133.061 260.55 133.127 249.328 139.786L56.628 254.139C45.6997 260.624 39 272.391 39 285.098V510.562C39 523.345 45.7784 535.169 56.8093 541.628L249.508 654.463C260.638 660.98 274.406 661.045 285.597 654.632L482.899 541.573C494.094 535.157 501 523.241 501 510.337V285.324C501 272.495 494.173 260.635 483.079 254.193Z" fill="#FFCD2B"/>
                                </g>
                                <foreignObject x="39" y="150" width="462" height="528.652">
                                    <div className="pt-16 text-black">
                                        <h3 className="text-[70px] font-semibold text-center">B2C</h3>
                                        <div className="space-y-2">
                                            {renderServices(hexagons[0].services, 0, false)}
                                        </div>
                                    </div>
                                </foreignObject>
                                <g filter="url(#filter6_i_8001_307)">
                                <path d="M995.079 254.193L797.779 139.614C786.496 133.061 772.55 133.127 761.328 139.786L568.628 254.139C557.7 260.624 551 272.391 551 285.098V510.562C551 523.345 557.778 535.169 568.809 541.628L761.508 654.463C772.638 660.98 786.406 661.045 797.597 654.632L994.899 541.573C1006.09 535.157 1013 523.241 1013 510.337V285.324C1013 272.495 1006.17 260.635 995.079 254.193Z" fill="#FFCD2B"/>
                                </g>
                                <foreignObject x="551" y="150" width="462" height="528.652">
                                    <div className="pt-16 text-black">
                                        <h3 className="text-[70px] font-semibold text-center">B2B</h3>
                                        <div className="space-y-2">
                                            {renderServices(hexagons[1].services, 1, false)}
                                        </div>
                                    </div>
                                </foreignObject>
                                <g filter="url(#filter8_i_8001_307)">
                                <path d="M739.079 690.193L541.779 575.614C530.496 569.061 516.55 569.127 505.328 575.786L312.628 690.139C301.7 696.624 295 708.391 295 721.098V946.562C295 959.345 301.778 971.169 312.809 977.628L505.508 1090.46C516.638 1096.98 530.406 1097.04 541.597 1090.63L738.899 977.573C750.094 971.157 757 959.241 757 946.337V721.324C757 708.495 750.173 696.635 739.079 690.193Z" fill="#FFCD2B"/>
                                </g>
                                <foreignObject x="295" y="590" width="462" height="528.652">
                                    <div className="pt-16 text-black">
                                        <h3 className="text-[70px] font-semibold text-center">Custom</h3>
                                        <div className="space-y-2">
                                            {renderServices(hexagons[2].services, 2, false)}
                                        </div>
                                    </div>
                                </foreignObject>
                                <circle cx="170" cy="563" r="16" fill="black"/>
                                <circle cx="360" cy="215" r="16" fill="black"/>
                                <circle cx="471" cy="392" r="10" fill="black"/>
                                <circle cx="581" cy="394" r="10" fill="black"/>
                                <path d="M387 573C387 578.523 382.523 583 377 583C371.477 583 367 578.523 367 573C367 567.477 371.477 563 377 563C382.523 563 387 567.477 387 573Z" fill="black"/>
                                <circle cx="426" cy="648" r="10" fill="black"/>
                                <circle cx="628" cy="658" r="10" fill="black"/>
                                <circle cx="675" cy="575" r="10" fill="black"/>
                                <circle cx="721" cy="209" r="16" fill="black"/>
                                <circle cx="887" cy="569" r="16" fill="black"/>
                                <circle cx="726" cy="839" r="16" fill="black"/>
                                <circle cx="330" cy="839.5" r="16" fill="black"/>
                                <g filter="url(#filter9_i_8001_307)">
                                <path d="M331.001 840C257.222 831.513 124.182 776.538 170.002 562.5" stroke="#D12923" stroke-width="14" stroke-linecap="round"/>
                                </g>
                                <g filter="url(#filter10_i_8001_307)">
                                <path d="M360.5 215C409.012 150.632 560.114 81.7368 721.5 209" stroke="#D12923" stroke-width="14" stroke-linecap="round"/>
                                </g>
                                <g filter="url(#filter11_i_8001_307)">
                                <path d="M471 392C489.88 372.603 544.169 366.569 581.5 394.5" stroke="#D12923" stroke-width="8" stroke-linecap="round"/>
                                </g>
                                <g filter="url(#filter12_i_8001_307)">
                                <path d="M377 573.5C370.36 596.434 388.201 638.678 427 649" stroke="#D12923" stroke-width="8" stroke-linecap="round"/>
                                </g>
                                <g filter="url(#filter13_i_8001_307)">
                                <path d="M675.5 575.5C684.464 598.138 666.509 644.911 628 658.501" stroke="#D12923" stroke-width="8" stroke-linecap="round"/>
                                </g>
                                <g filter="url(#filter14_i_8001_307)">
                                <path d="M726.5 840C845.996 833.051 939.563 723.27 888 569.5" stroke="#D12923" stroke-width="14" stroke-linecap="round"/>
                                </g>
                                <defs>
                                <filter id="filter0_f_8001_307" x="525.15" y="430.737" width="434.417" height="468.913" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="51.5773" result="effect1_foregroundBlur_8001_307"/>
                                </filter>
                                <filter id="filter1_f_8001_307" x="608.937" y="445.599" width="352.075" height="374.119" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="51.5773" result="effect1_foregroundBlur_8001_307"/>
                                </filter>
                                <filter id="filter2_f_8001_307" x="0.421608" y="0.632057" width="540.157" height="496.555" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="51.5773" result="effect1_foregroundBlur_8001_307"/>
                                </filter>
                                <filter id="filter3_f_8001_307" x="97.1814" y="110.611" width="419.643" height="391.782" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="51.5773" result="effect1_foregroundBlur_8001_307"/>
                                </filter>
                                <filter id="filter4_f_8001_307" x="134.422" y="620.632" width="493.717" height="500.362" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="51.5773" result="effect1_foregroundBlur_8001_307"/>
                                </filter>
                                <filter id="filter5_f_8001_307" x="123.113" y="668.767" width="389.967" height="394.214" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="51.5773" result="effect1_foregroundBlur_8001_307"/>
                                </filter>
                                <filter id="filter6_i_8001_307" x="551" y="134.745" width="462" height="528.652" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="22"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.896696 0 0 0 0 0.36683 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8001_307"/>
                                </filter>
                                <filter id="filter7_i_8001_307" x="39" y="134.745" width="462" height="528.652" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="22"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.896696 0 0 0 0 0.36683 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8001_307"/>
                                </filter>
                                <filter id="filter8_i_8003_307" x="111" y="306.844" width="240" height="275.406" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="22"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.896696 0 0 0 0 0.36683 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8003_307"/>
                                </filter>
                                <filter id="filter9_i_8001_307" x="153.625" y="555.499" width="184.377" height="295.502" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8001_307"/>
                                </filter>
                                <filter id="filter10_i_8001_307" x="353.5" y="130.552" width="375" height="95.4482" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8001_307"/>
                                </filter>
                                <filter id="filter11_i_8001_307" x="467" y="371.478" width="118.5" height="30.0225" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="1.5"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8001_307"/>
                                </filter>
                                <filter id="filter12_i_8001_307" x="371.639" y="569.499" width="59.3633" height="86.5024" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="1.5"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8001_307"/>
                                </filter>
                                <filter id="filter13_i_8001_307" x="623.998" y="571.5" width="57.7734" height="94.0024" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="1.5"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8001_307"/>
                                </filter>
                                <filter id="filter14_i_8001_307" x="719.5" y="562.498" width="189.992" height="288.502" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="5"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8001_307"/>
                                </filter>
                                <filter id="filter8_i_8001_307" x="295" y="570.745" width="462" height="528.652" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="22"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.896696 0 0 0 0 0.36683 0 0 0 0 0 0 0 0 1 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8001_307"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="sm:hidden w-full">
                    <div className="w-full aspect-[375/836]">
                        <svg 
                            className="w-full h-full" 
                            viewBox="0 0 375 836" 
                            preserveAspectRatio="xMidYMid meet" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g filter="url(#filter0_f_8003_307)">
                                <ellipse cx="87.4117" cy="75.914" rx="87.4117" ry="75.914" transform="matrix(0.822288 -0.569072 -0.569072 -0.822288 315.906 474.113)" fill="#D12923"/>
                            </g>
                            <g filter="url(#filter1_f_8003_307)">
                                <ellipse cx="55.8578" cy="48.5105" rx="55.8578" ry="48.5105" transform="matrix(0.822288 -0.569072 -0.569072 -0.822288 365.859 451.803)" fill="#FFCD2B"/>
                            </g>
                            <g filter="url(#filter2_f_8003_307)">
                                <ellipse cx="90.5043" cy="78.5998" rx="90.5043" ry="78.5998" transform="matrix(0.822288 -0.569072 -0.569072 -0.822288 4.1582 302.219)" fill="#D12923"/>
                            </g>
                            <g filter="url(#filter3_f_8003_307)">
                                <ellipse cx="57.834" cy="50.2268" rx="57.834" ry="50.2268" transform="matrix(0.822288 -0.569072 -0.569072 -0.822288 55.8789 279.121)" fill="#FFCD2B"/>
                            </g>
                            <g filter="url(#filter4_f_8003_307)">
                                <ellipse cx="90.5043" cy="78.5998" rx="90.5043" ry="78.5998" transform="matrix(0.822288 -0.569072 -0.569072 -0.822288 26.1582 766.219)" fill="#D12923"/>
                            </g>
                            <g filter="url(#filter5_f_8003_307)">
                                <ellipse cx="57.834" cy="50.2268" rx="57.834" ry="50.2268" transform="matrix(0.822288 -0.569072 -0.569072 -0.822288 77.8789 743.121)" fill="#FFCD2B"/>
                            </g>
                            <g filter="url(#filter6_i_8003_307)">
                                <path d="M252.071 125.641L154.905 69.1005C147.374 64.7178 138.058 64.7619 130.568 69.2155L35.7338 125.606C28.4586 129.932 24 137.77 24 146.234V257.609C24 266.124 28.5111 274.001 35.8548 278.31L130.688 333.951C138.118 338.31 147.313 338.353 154.784 334.064L251.95 278.273C259.404 273.993 264 266.054 264 257.46V146.385C264 137.84 259.456 129.939 252.071 125.641Z" fill="#FFCD2B"/>
                            </g>
                            <foreignObject x="24" y="60" width="240" height="275.406">
                                <div className="pt-8 text-black">
                                    <h3 className="text-[35px] font-semibold text-center">B2C</h3>
                                    <div className="space-y-2 px-4 text-sm">
                                        {renderServices(hexagons[0].services, 0, true)}
                                    </div>
                                </div>
                            </foreignObject>

                            <g filter="url(#filter8_i_8003_307)">
                                <path d="M339.071 366.641L241.905 310.101C234.374 305.718 225.058 305.762 217.568 310.215L122.734 366.606C115.459 370.932 111 378.77 111 387.234V498.609C111 507.124 115.511 515.001 122.855 519.31L217.688 574.951C225.118 579.31 234.313 579.353 241.784 575.064L338.95 519.273C346.404 514.993 351 507.054 351 498.46V387.385C351 378.84 346.456 370.939 339.071 366.641Z" fill="#FFCD2B"/>
                            </g>
                            <foreignObject x="111" y="310" width="240" height="275.406">
                                <div className="pt-8 text-black">
                                    <h3 className="text-[35px] font-semibold text-center">B2B</h3>
                                    <div className="space-y-2 px-4 text-sm">
                                        {renderServices(hexagons[1].services, 1, true)}
                                    </div>
                                </div>
                            </foreignObject>

                            <g filter="url(#filter7_i_8003_307)">
                                <path d="M252.071 606.139L154.905 549.599C147.374 545.216 138.058 545.26 130.568 549.714L35.7338 606.104C28.4586 610.43 24 618.268 24 626.732V738.108C24 746.622 28.5111 754.499 35.8548 758.808L130.688 814.449C138.118 818.808 147.313 818.851 154.784 814.562L251.95 758.771C259.404 754.491 264 746.552 264 737.958V626.883C264 618.338 259.456 610.437 252.071 606.139Z" fill="#FFCD2B"/>
                            </g>
                            <foreignObject x="24" y="560" width="240" height="275.406">
                                <div className="pt-8 text-black">
                                    <h3 className="text-[30px] font-semibold text-center">Custom</h3>
                                    <div className="space-y-2 px-4 text-sm">
                                        {renderServices(hexagons[2].services, 2, true)}
                                    </div>
                                </div>
                            </foreignObject>
                            <circle cx="94" cy="288" r="10" fill="black"/>
                            <circle cx="200.5" cy="592.5" r="7.5" fill="black"/>
                            <circle cx="216.5" cy="550.5" r="7.5" fill="black"/>
                            <circle cx="87" cy="592" r="10" fill="black"/>
                            <g filter="url(#filter9_i_8003_307)">
                            <path d="M94 288C46.8112 319.933 19.2848 525.195 87.5 592" stroke="#D12923" stroke-width="8" stroke-linecap="round"/>
                            </g>
                            <g filter="url(#filter10_i_8003_307)">
                            <path d="M216.501 550.5C221.5 564 210.366 587.255 200.5 593" stroke="#D12923" stroke-width="5" stroke-linecap="round"/>
                            </g>
                            <circle cx="207.5" cy="332.5" r="7.5" fill="black"/>
                            <path d="M202 290C202 294.142 198.642 297.5 194.5 297.5C190.358 297.5 187 294.142 187 290C187 285.858 190.358 282.5 194.5 282.5C198.642 282.5 202 285.858 202 290Z" fill="black"/>
                            <g filter="url(#filter11_i_8003_307)">
                            <path d="M195.085 290.001C207.218 297.75 212.372 323.012 207.972 333.547" stroke="#D12923" stroke-width="5" stroke-linecap="round"/>
                            </g>
                            <defs>
                                <filter id="filter0_f_8003_307" x="157.554" y="178.97" width="374.057" height="365.953" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="51.5773" result="effect1_foregroundBlur_8003_307"/>
                                </filter>
                                <filter id="filter1_f_8003_307" x="227.433" y="225.964" width="313.502" height="308.325" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="51.5773" result="effect1_foregroundBlur_8003_307"/>
                                </filter>
                                <filter id="filter2_f_8003_307" x="-156.147" y="0.283424" width="379.993" height="371.601" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="51.5773" result="effect1_foregroundBlur_8003_307"/>
                                </filter>
                                <filter id="filter3_f_8003_307" x="-83.7952" y="48.9411" width="317.295" height="311.934" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="51.5773" result="effect1_foregroundBlur_8003_307"/>
                                </filter>
                                <filter id="filter4_f_8003_307" x="-134.147" y="464.283" width="379.993" height="371.601" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="51.5773" result="effect1_foregroundBlur_8003_307"/>
                                </filter>
                                <filter id="filter5_f_8003_307" x="-61.7952" y="512.941" width="317.295" height="311.934" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="51.5773" result="effect1_foregroundBlur_8003_307"/>
                                </filter>
                                <filter id="filter6_i_8003_307" x="24" y="65.8442" width="240" height="275.406" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="22"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.896696 0 0 0 0 0.36683 0 0 0 0 0 0 0 0 1 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8003_307"/>
                                </filter>
                                <filter id="filter7_i_8003_307" x="24" y="546.342" width="240" height="275.406" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="22"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.896696 0 0 0 0 0.36683 0 0 0 0 0 0 0 0 1 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8003_307"/>
                                </filter>
                                <filter id="filter8_i_8003_307" x="111" y="306.844" width="240" height="275.406" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="22"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.819608 0 0 0 0 0.160784 0 0 0 0 0.137255 0 0 0 1 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8003_307"/>
                                </filter>
                                <filter id="filter9_i_8003_307" x="42.5605" y="284" width="55.4395" height="316" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8003_307"/>
                                </filter>
                                <filter id="filter10_i_8003_307" x="198" y="547.999" width="22.2383" height="50.502" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="1.5"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8003_307"/>
                                </filter>
                                <filter id="filter11_i_8003_307" x="192.584" y="287.5" width="19.4414" height="51.5474" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="1.5"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8003_307"/>
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
