'use client'

import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

const Vacancies = () => {
  const t = useTranslations('join-the-team.vacancies')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  // Get vacancy data from translations
  const vacancyData = [
    {
      title: t('positions.0.title'),
      salary: t('positions.0.salary'),
      experience: t('positions.0.experience'),
      description: t('positions.0.description'),
      icon: t('positions.0.icon'),
      gradient: t('positions.0.gradient'),
      path: 'sdr',
      isActive: true
    },
    {
      title: t('positions.1.title'),
      salary: t('positions.1.salary'),
      experience: t('positions.1.experience'),
      description: t('positions.1.description'),
      icon: t('positions.1.icon'),
      gradient: t('positions.1.gradient'),
      path: 'media-buyer',
      isActive: false
    },
    {
      title: t('positions.2.title'),
      salary: t('positions.2.salary'),
      experience: t('positions.2.experience'),
      description: t('positions.2.description'),
      icon: t('positions.2.icon'),
      gradient: t('positions.2.gradient'),
      path: 'cold-email',
      isActive: false
    }
  ]

  const handleVacancyClick = (vacancyPath: string) => {
    const isUkrainian = pathname.includes('/uk')
    const basePath = isUkrainian ? '/uk/join-the-team/' : '/join-the-team/'
    
    router.push(`${basePath}${vacancyPath}`)
  }

  return (
    <section id="vacancies" className="bg-gradient-to-b from-black to-gray-950 py-16 md:py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-red-600/5"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-red-800/5"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-red-500/5"></div>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {vacancyData.map((vacancy, index) => (
            <div 
              key={vacancy.title}
              className={`transform transition-all duration-1000 delay-${index * 150} ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              onMouseEnter={() => vacancy.isActive ? setHoveredIndex(index) : null}
              onMouseLeave={() => vacancy.isActive ? setHoveredIndex(null) : null}
            >
              <div className={`group relative h-full bg-gradient-to-br from-black/80 to-gray-900/80 rounded-2xl p-8 border border-red-900/20 shadow-xl overflow-hidden transition-all duration-500 flex flex-col ${
                vacancy.isActive 
                  ? 'hover:border-red-500/30 hover:shadow-red-900/20 hover:-translate-y-1' 
                  : 'opacity-60 cursor-not-allowed'
              }`}>
                {/* Background gradient that appears on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${vacancy.gradient} opacity-0 ${
                  vacancy.isActive ? 'group-hover:opacity-5' : ''
                } transition-opacity duration-500`}></div>
                
                <div className="flex-grow">
                  {/* Position icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                    vacancy.isActive ? 'from-red-700 to-red-500' : 'from-red-700/50 to-red-500/50'
                  } flex items-center justify-center text-3xl mb-6 transform transition-all duration-500 ${
                    vacancy.isActive ? 'group-hover:scale-110 group-hover:rotate-3' : ''
                  } shadow-lg`}>
                    {vacancy.icon}
                  </div>
                  
                  <h3 className={`text-2xl font-bold ${
                    vacancy.isActive ? 'text-white group-hover:text-red-400' : 'text-white/70'
                  } mb-3 transition-colors duration-300`}>
                    {vacancy.title}
                  </h3>
                  
                  <div className="mb-4">
                    <p className={`text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r ${
                      vacancy.isActive ? 'from-red-500 to-red-300 group-hover:from-red-400 group-hover:to-red-200' : 'from-red-500/70 to-red-300/70'
                    } transition-colors duration-300`}>
                      {vacancy.salary}
                    </p>
                    <p className="text-white/60 text-sm mt-1">
                      {vacancy.experience}
                    </p>
                  </div>
                  
                  <p className={`${
                    vacancy.isActive ? 'text-white/70 group-hover:text-white/90' : 'text-white/50'
                  } mb-6 transition-colors duration-300`}>
                    {vacancy.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-4">
                  {vacancy.isActive ? (
                    <button 
                      onClick={() => handleVacancyClick(vacancy.path)}
                      className="relative w-full py-4 overflow-hidden rounded-lg group-hover:shadow-lg transition-all duration-300"
                    >
                      {/* Button background with animated gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 transition-transform duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      
                      <span className="relative z-10 text-white font-medium flex items-center justify-center">
                        {t('applyButton')}
                        <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </button>
                  ) : (
                    <div className="relative w-full py-4 overflow-hidden rounded-lg bg-gradient-to-r from-red-700/40 to-red-500/40 cursor-not-allowed">
                      <span className="text-white/70 font-medium flex items-center justify-center">
                        {pathname.includes('/uk') ? "Скоро відкриється" : "Coming Soon"}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Particle effect on hover */}
                {vacancy.isActive && hoveredIndex === index && (
                  <div className="absolute top-0 right-0">
                    <div className="w-3 h-3 rounded-full bg-red-500 absolute animate-ping opacity-75"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Vacancies
