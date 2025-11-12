'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { trackContact } from '@/utils/fbConversion';

export default function Footer() {
    const t = useTranslations('cold-email.footer');
    
    const handleSocialClick = async (platform: string) => {
        await trackContact(
            platform,
            'social_media'
        );
    };

    const handleEmailClick = async () => {
        await trackContact(
            'email',
            'contact_method'
        );
    };

    const handlePhoneClick = async () => {
        await trackContact(
            'phone',
            'contact_method'
        );
    };

    return (
        <footer className="bg-[#111019] pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
                        <Image
                            src="/img/logo.svg"
                            alt="Logo"
                            width={150}
                            height={50}
                            className="mb-6 hover:opacity-80 transition-opacity"
                        />
                        <p className="text-gray-400 mb-6 max-w-md">
                            {t('description')}
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            {[
                                { href: "https://www.linkedin.com/company/advantage-agencyuk/posts/?feedView=all", icon: "/img/cold-email/linkedin.svg", alt: "LinkedIn" },
                                { href: "https://www.instagram.com/_advantage_agency_/", icon: "/img/cold-email/instagram.svg", alt: "Instagram" },
                                { href: "https://t.me/nayborovskiy", icon: "/img/cold-email/telegram.svg", alt: "Telegram" }
                            ].map((social) => (
                                <Link 
                                    key={social.alt}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:scale-110 transition-transform"
                                    onClick={() => handleSocialClick(social.alt)}
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
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="text-white font-semibold mb-4">{t('quick_links.title')}</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/" className="text-gray-400 hover:text-[#645cef] transition-colors">
                                    {t('quick_links.home')}
                                </a>
                            </li>
                            <li>
                                <a href="/cases" className="text-gray-400 hover:text-[#645cef] transition-colors">
                                    {t('quick_links.cases')}
                                </a>
                            </li>
                            <li>
                                <a href="/blog" className="text-gray-400 hover:text-[#645cef] transition-colors">
                                    {t('quick_links.blog')}
                                </a>
                            </li>
                            <li>
                                <a href="/join-the-team" className="text-gray-400 hover:text-[#645cef] transition-colors">
                                    {t('quick_links.join_the_team')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="text-white font-semibold mb-4">{t('contact.title')}</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link 
                                    href={`mailto:${t('contact.email')}`}
                                    onClick={handleEmailClick}
                                    className="text-gray-400 hover:text-[#645cef] transition-colors flex items-center gap-2 justify-center md:justify-start group"
                                >
                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform">
                                        <path d="M14.9395 0.632812C16.2805 0.632812 17.5705 1.16281 18.5195 2.11381C19.4695 3.06281 20.0005 4.34281 20.0005 5.68281V13.5828C20.0005 16.3728 17.7305 18.6328 14.9395 18.6328H5.06049C2.26949 18.6328 0.000488281 16.3728 0.000488281 13.5828V5.68281C0.000488281 2.89281 2.25949 0.632812 5.06049 0.632812H14.9395ZM16.0705 5.83281C15.8605 5.82181 15.6605 5.89281 15.5095 6.03281L11.0005 9.63281C10.4205 10.1138 9.58949 10.1138 9.00049 9.63281L4.50049 6.03281C4.18949 5.80281 3.75949 5.83281 3.50049 6.10281C3.23049 6.37281 3.20049 6.80281 3.42949 7.10281L3.56049 7.23281L8.11049 10.7828C8.67049 11.2228 9.34949 11.4628 10.0605 11.4628C10.7695 11.4628 11.4605 11.2228 12.0195 10.7828L16.5305 7.17281L16.6105 7.09281C16.8495 6.80281 16.8495 6.38281 16.5995 6.09281C16.4605 5.94381 16.2695 5.85281 16.0705 5.83281Z" fill="currentColor"/>
                                    </svg>
                                    {t('contact.email')}
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href={`tel:${t('contact.phone')}`}
                                    onClick={handlePhoneClick}
                                    className="text-gray-400 hover:text-[#645cef] transition-colors flex items-center gap-2 justify-center md:justify-start group"
                                >
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.5317 13.1052C15.5208 17.0932 16.4258 12.4795 18.9656 15.0176C21.4143 17.4656 22.8216 17.956 19.7192 21.0575C19.3306 21.3698 16.8616 25.1271 8.1846 16.4525C-0.493478 7.77681 3.26158 5.30526 3.57397 4.91676C6.68387 1.80666 7.16586 3.2222 9.61449 5.67014C12.1544 8.20931 7.54266 9.11723 11.5317 13.1052Z" fill="currentColor"/>
                                    </svg>
                                    {t('contact.phone')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-800 pt-8">
                    <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-4 text-center md:text-left">
                        <p className="text-gray-400 text-sm">
                            {t('copyright.text')} {new Date().getFullYear()}. {t('copyright.made_by')} <Link 
                                href="https://advantage-agency.co" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[#645cef] font-bold hover:text-[#645cef] hover:underline transition-colors"
                            >
                                ADvantage
                            </Link>
                        </p>
                        <Link href="/privacy-policy" className="text-gray-400 hover:text-[#645cef] transition-colors text-sm">
                            {t('privacy_policy')}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}