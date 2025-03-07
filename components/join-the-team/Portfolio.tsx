'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'

const Portfolio = () => {
  const t = useTranslations('join-the-team.portfolio')
  const locale = useLocale()
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Get cases data from translations
  const cases = [
    {
      title: t('cases.0.title'),
      description: t('cases.0.description'),
      image: '/img/portfolio/build-scraper.webp',
      gradient: "from-blue-600 to-purple-600",
      textGradient: "from-blue-300 to-purple-200",
      iconColor: "text-blue-400",
      slug: {
        en: 'cases/v14',
        uk: 'cases/v14uk'
      },
    },
    {
      title: t('cases.1.title'),
      description: t('cases.1.description'),
      image: '/img/portfolio/email-marketing.webp',
      gradient: "from-red-600 to-orange-600",
      textGradient: "from-red-300 to-orange-200",
      iconColor: "text-red-400",
      slug: {
        en: 'cases/v13',
        uk: 'cases/v13uk'
      },
    },
    {
      title: t('cases.2.title'),
      description: t('cases.2.description'),
      image: '/img/portfolio/wine-distributor.webp',
      gradient: "from-green-600 to-emerald-600",
      textGradient: "from-green-300 to-emerald-200",
      iconColor: "text-emerald-400",
      slug: {
        en: 'cases/v12',
        uk: 'cases/v12uk'
      }
    }
  ]

  return (
    <section id="portfolio" className="bg-gradient-to-b from-black to-gray-950 py-16 md:py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-red-600/5"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-red-800/5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto text-center mb-16 md:mb-24 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 mb-6 relative inline-block">
            {t('title')}
          </h2>
          <p className="text-xl text-white/80 mb-8">
            {t('subtitle')}
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {cases.map((item, index) => (
            <div 
              key={item.title}
              className={`transform transition-all duration-1000 delay-${index * 150} ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link href={`/${item.slug[locale as 'uk' | 'en']}`}>
                <div className="group relative h-[400px] rounded-2xl overflow-hidden border border-gray-800/50 shadow-xl transition-all duration-500 hover:border-gray-700/50 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-1">
                  {/* Background Image with enhanced overlay */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover brightness-[0.4] group-hover:brightness-[0.5] group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    
                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 opacity-60 group-hover:opacity-70 transition-opacity duration-500 rounded-2xl overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-30 mix-blend-overlay`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    </div>
                  </div>

                  {/* Content with enhanced animations */}
                  <div className="relative h-full p-8 flex flex-col justify-end z-10 rounded-2xl">
                    <div className="transform transition-all duration-500 group-hover:translate-y-[-8px]">
                      <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.textGradient} mb-4`}>
                        {item.title}
                      </h3>
                      <p className="text-lg text-white/90 mb-6">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center">
                        <span className="text-white/70 text-sm font-medium mr-2 group-hover:text-white transition-colors duration-300">
                          {t('cases.0.more')}
                        </span>
                        <svg className={`w-5 h-5 ${item.iconColor} transform group-hover:translate-x-1 transition-transform duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced hover indicator */}
                  <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-black/30 border border-white/10 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:bg-black/50 group-hover:border-white/20 z-20">
                    <span className={`${item.iconColor} transform group-hover:translate-x-1 transition-transform duration-300 text-lg font-bold`}>
                      →
                    </span>
                  </div>
                  
                  {/* Particle effect on hover */}
                  {hoveredIndex === index && (
                    <div className="absolute top-6 right-6 z-30">
                      <div className="w-3 h-3 rounded-full bg-red-500 absolute animate-ping opacity-75"></div>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
