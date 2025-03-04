'use client'

import { useInView } from 'react-intersection-observer'
import { useTranslations } from 'next-intl'

const Benefits = () => {
  const t = useTranslations('join-the-team.benefits')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Отримуємо дані з перекладів
  const benefits = Array.from({ length: 6 }).map((_, index) => ({
    icon: t(`items.${index}.icon`),
    title: t(`items.${index}.title`),
    description: t(`items.${index}.description`),
  }))

  return (
    <section className="bg-black pt-20 md:pt-32 pb-20 md:pb-32 relative overflow-hidden">
      {/* Декоративні елементи */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 md:mb-16 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            {t('title')}
          </span>
          <div className="absolute -bottom-4 left-0 w-24 h-1 bg-gradient-to-r from-red-500 to-red-700"></div>
        </h2>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`transform transition-all duration-700 delay-${index * 100} ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] hover:from-white/10 hover:to-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 h-full border border-white/5 hover:border-white/10 transition-all duration-300 relative overflow-hidden shadow-lg">
                {/* Particles effect */}
                <div className="absolute top-6 right-6 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none">
                  <div className="absolute w-1 h-1 bg-red-500 rounded-full animate-particle-1"></div>
                  <div className="absolute w-1.5 h-1.5 bg-red-400 rounded-full animate-particle-2 delay-150"></div>
                  <div className="absolute w-1 h-1 bg-red-300 rounded-full animate-particle-3 delay-300"></div>
                  <div className="absolute w-2 h-2 bg-red-600 rounded-full animate-particle-4 delay-700"></div>
                </div>

                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 bg-gradient-to-br from-red-500/20 to-red-700/20 p-3 rounded-xl">
                      <span className="text-4xl">{benefit.icon}</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                        {benefit.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-white/70 group-hover:text-white/90 transition-colors mt-2 mb-4">
                    {benefit.description}
                  </p>
                  
                  <div className="mt-auto self-end">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500/20 to-red-700/20 flex items-center justify-center group-hover:from-red-500 group-hover:to-red-700 transition-all duration-300">
                      <span className="text-white transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
