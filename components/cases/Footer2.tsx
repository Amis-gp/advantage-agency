'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function V22Footer() {
    const locale = useLocale();

    const mainLinks = [
        { name: 'Cold Email', href: `/${locale}/cold-email` },
        { name: 'Scraping', href: 'https://www.advantagescrape.com/' },
        { name: 'Blog', href: `/${locale}/blog` },
        { name: 'Cases', href: `/${locale}/cases` }
    ];

    return (
        <footer className="bg-black text-white py-10 md:py-16 border-t border-zinc-800">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center lg:items-start">
                    <div className="flex flex-col items-center lg:items-start">
                        <Image 
                            src="/img/logo.svg" 
                            alt="Logo" 
                            width={150} 
                            height={50}
                            className="hover:opacity-80 transition-opacity" 
                        />
                        <p className="hidden sm:block mt-4 text-sm md:text-base text-center lg:text-left text-gray-400">
                            Copyright {new Date().getFullYear()}<br />
                            Made by <span className='text-red-600 font-bold hover:text-red-500 transition-colors cursor-pointer'>
                                Advantage
                            </span>
                        </p>
                    </div>

                    <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-8">
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                            <Link 
                                href="mailto:stepan@advantage-agency.co"
                                className="flex items-center gap-2 hover:text-red-500 transition-colors group"
                            >
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform">
                                    <path d="M14.9395 0.632812C16.2805 0.632812 17.5705 1.16281 18.5195 2.11381C19.4695 3.06281 20.0005 4.34281 20.0005 5.68281V13.5828C20.0005 16.3728 17.7305 18.6328 14.9395 18.6328H5.06049C2.26949 18.6328 0.000488281 16.3728 0.000488281 13.5828V5.68281C0.000488281 2.89281 2.25949 0.632812 5.06049 0.632812H14.9395ZM16.0705 5.83281C15.8605 5.82181 15.6605 5.89281 15.5095 6.03281L11.0005 9.63281C10.4205 10.1138 9.58949 10.1138 9.00049 9.63281L4.50049 6.03281C4.18949 5.80281 3.75949 5.83281 3.50049 6.10281C3.23049 6.37281 3.20049 6.80281 3.42949 7.10281L3.56049 7.23281L8.11049 10.7828C8.67049 11.2228 9.34949 11.4628 10.0605 11.4628C10.7695 11.4628 11.4605 11.2228 12.0195 10.7828L16.5305 7.17281L16.6105 7.09281C16.8495 6.80281 16.8495 6.38281 16.5995 6.09281C16.4605 5.94381 16.2695 5.85281 16.0705 5.83281Z" fill="currentColor"/>
                                </svg>
                                <span className="text-sm md:text-base">stepan@advantage-agency.co</span>
                            </Link>
                            <Link 
                                href="tel:+13393688255"
                                className="flex items-center gap-2 hover:text-red-500 transition-colors group"
                            >
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.5317 13.1052C15.5208 17.0932 16.4258 12.4795 18.9656 15.0176C21.4143 17.4656 22.8216 17.956 19.7192 21.0575C19.3306 21.3698 16.8616 25.1271 8.1846 16.4525C-0.493478 7.77681 3.26158 5.30526 3.57397 4.91676C6.68387 1.80666 7.16586 3.2222 9.61449 5.67014C12.1544 8.20931 7.54266 9.11723 11.5317 13.1052Z" fill="currentColor"/>
                                </svg>
                                <span className="text-sm md:text-base">+1 (339) 368-82-55</span>
                            </Link>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                            {mainLinks.map((item) => (
                                <Link 
                                    key={item.name} 
                                    href={item.href}
                                    className="text-sm md:text-base hover:text-red-500 transition-colors"
                                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start gap-6 sm:gap-7">
                        <div className="flex gap-4">
                            {[
                                { href: "https://www.linkedin.com/company/advantage-agencyuk/posts/?feedView=all", icon: "/img/linkedin.svg", alt: "LinkedIn" },
                                { href: "https://www.instagram.com/_advantage_agency_/", icon: "/img/instagram.svg", alt: "Instagram" },
                                { href: "https://t.me/nayborovskiy", icon: "/img/telegram.svg", alt: "Telegram" }
                            ].map((social) => (
                                <Link 
                                    key={social.alt}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:scale-110 transition-transform"
                                >
                                    <Image 
                                        src={social.icon} 
                                        alt={social.alt} 
                                        width={30} 
                                        height={30}
                                        className="hover:opacity-80 transition-opacity" 
                                    />
                                </Link>
                            ))}
                        </div>
                        <Link href="/privacy-policy" className="text-sm md:text-base hover:text-red-500 transition-colors text-center lg:text-left text-gray-300">
                            Privacy Policy
                        </Link>
                    </div>
                    
                    <p className="sm:hidden text-sm text-center text-gray-400">
                        Copyright {new Date().getFullYear()}<br />
                        Made by <span className='text-red-600 font-bold'>Advantage</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

