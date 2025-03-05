'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { playSound } from '@/app/constant/sound'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('join-the-team.footer')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToChoice = () => {
    const choiceSection = document.getElementById('choice')
    choiceSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-black text-white py-10 md:py-16">
      {/* Background pattern */}
      <div className="absolute inset-0 w-full h-full opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div 
          ref={ref}
          className={`transform transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10">
            {/* Logo and social */}
            <div className="space-y-8 flex flex-col items-center md:items-start">
              <Image 
                src="/img/logo.svg" 
                alt="Advantage Agency" 
                width={150} 
                height={50}
                className="h-8 w-auto hover:opacity-80 transition-opacity" 
              />
              <div className="flex gap-4">
                {[
                  { href: "https://www.linkedin.com/company/advantage-agencyuk/posts/?feedView=all", icon: "/img/linkedin.svg", alt: "LinkedIn" },
                  { href: "https://www.instagram.com/_advantage_agency_/", icon: "/img/instagram.svg", alt: "Instagram" },
                  { href: "https://t.me/stepan_potichnyi", icon: "/img/telegram.svg", alt: "Telegram" }
                ].map((social) => (
                  <Link 
                    key={social.alt}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full flex items-center justify-center group transition-all duration-300"
                    onMouseEnter={() => playSound('hover_2')}
                  >
                    <Image 
                      src={social.icon} 
                      alt={social.alt} 
                      width={32} 
                      height={32}
                      className="group-hover:opacity-60 opacity-100 transition-opacity" 
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-white font-semibold mb-6">{t('navigation')}</h3>
              <ul className="space-y-4 text-center md:text-left">
                <li>
                  <Link 
                    href="#about" 
                    className="text-white/60 hover:text-red-500 transition-colors"
                    onMouseEnter={() => playSound('hover_1')}
                  >
                    {t('about')}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#portfolio" 
                    className="text-white/60 hover:text-red-500 transition-colors"
                    onMouseEnter={() => playSound('hover_1')}
                  >
                    {t('portfolio')}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#choice" 
                    className="text-white/60 hover:text-red-500 transition-colors"
                    onMouseEnter={() => playSound('hover_1')}
                  >
                    {t('vacancies')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-white font-semibold mb-6">{t('contacts')}</h3>
              <div className="space-y-4 flex flex-col items-center md:items-start">
                <Link 
                  href="mailto:stepan@advantage-agency.co"
                  className="flex items-center gap-2 text-white/60 hover:text-red-500 transition-colors group text-sm sm:text-base"
                  onMouseEnter={() => playSound('hover_1')}
                >
                  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform">
                    <path d="M14.9395 0.632812C16.2805 0.632812 17.5705 1.16281 18.5195 2.11381C19.4695 3.06281 20.0005 4.34281 20.0005 5.68281V13.5828C20.0005 16.3728 17.7305 18.6328 14.9395 18.6328H5.06049C2.26949 18.6328 0.000488281 16.3728 0.000488281 13.5828V5.68281C0.000488281 2.89281 2.25949 0.632812 5.06049 0.632812H14.9395ZM16.0705 5.83281C15.8605 5.82181 15.6605 5.89281 15.5095 6.03281L11.0005 9.63281C10.4205 10.1138 9.58949 10.1138 9.00049 9.63281L4.50049 6.03281C4.18949 5.80281 3.75949 5.83281 3.50049 6.10281C3.23049 6.37281 3.20049 6.80281 3.42949 7.10281L3.56049 7.23281L8.11049 10.7828C8.67049 11.2228 9.34949 11.4628 10.0605 11.4628C10.7695 11.4628 11.4605 11.2228 12.0195 10.7828L16.5305 7.17281L16.6105 7.09281C16.8495 6.80281 16.8495 6.38281 16.5995 6.09281C16.4605 5.94381 16.2695 5.85281 16.0705 5.83281Z" fill="currentColor"/>
                  </svg>
                  stepan@advantage-agency.co
                </Link>
                <Link 
                  href="tel:+13393688255"
                  className="flex items-center gap-2 text-white/60 hover:text-red-500 transition-colors group text-sm sm:text-base" 
                  onMouseEnter={() => playSound('hover_1')}
                >
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.5317 13.1052C15.5208 17.0932 16.4258 12.4795 18.9656 15.0176C21.4143 17.4656 22.8216 17.956 19.7192 21.0575C19.3306 21.3698 16.8616 25.1271 8.1846 16.4525C-0.493478 7.77681 3.26158 5.30526 3.57397 4.91676C6.68387 1.80666 7.16586 3.2222 9.61449 5.67014C12.1544 8.20931 7.54266 9.11723 11.5317 13.1052Z" fill="currentColor"/>
                  </svg>
                  +1 (339) 368-82-55
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center lg:justify-end">
              <button
                onClick={scrollToChoice}
                className="inline-flex items-center gap-2 px-8 p-3 h-fit bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors group"
                onMouseEnter={() => playSound('hover_1')}
              >
                <span>{t('applyButton')}</span>
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 text-center">
            <p className="text-white/40 text-sm">
              {t('copyright', { year: new Date().getFullYear() })}<br />
              {t('madeBy')} <span className="text-red-500 font-bold hover:text-red-500/80 transition-colors cursor-pointer">
                Advantage Agency
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
