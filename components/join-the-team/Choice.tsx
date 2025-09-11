'use client'

import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const Choice = () => {
  const t = useTranslations('join-the-team.choice')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const positions = [
    {
      title: t('positions.0.title'),
      path: '/join-the-team/lead-gen',
      isActive: true
    },
    {
      title: t('positions.1.title'),
      path: '/join-the-team/media-buyer',
      isActive: true
    },
    {
      title: t('positions.2.title'),
      path: '/join-the-team/cold-email',
      isActive: false
    },
  ]

  return (
    <section className="bg-gradient-to-b from-black via-black/95 to-black relative py-20 md:py-32">

      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,0,0,0.15)_0,rgba(0,0,0,0)_50%)] opacity-70"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0)_0,rgba(120,0,0,0.1)_50%,rgba(0,0,0,0)_100%)] opacity-70"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute top-0 right-0 w-[60rem] h-[60rem] bg-gradient-radial from-red-500/20 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[70rem] h-[70rem] bg-gradient-radial from-red-900/20 to-transparent rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(120,0,0,0.15)_0,rgba(0,0,0,0)_70%)] opacity-70"></div>
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden opacity-40">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              {t('title')}
            </span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-500 to-red-700"></div>
          </h2>
          <p className="text-xl text-white/80 mb-12 md:mb-16 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div 
          ref={ref}
          className="flex flex-col gap-6 max-w-2xl mx-auto"
        >
          {positions.map((position, index) => (
            position.isActive ? (
              <Link
                key={position.title}
                href={position.path}
                className={`transform transition-all duration-700 delay-${index * 150} ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] hover:from-white/10 hover:to-white/5 rounded-2xl p-6 md:p-8 border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden shadow-lg">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-20 rounded-2xl transition-all duration-500 z-0"></div>
                  
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="text-xl md:text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                      {position.title}
                    </span>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-white/60 group-hover:text-white/90 transition-colors">
                        {t('qualification')}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500/50 to-red-700/50 group-hover:from-red-500 group-hover:to-red-700 flex items-center justify-center transition-all duration-300">
                        <span className="text-white transform group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-[2px]">
                    <div className="h-full bg-gradient-to-r from-red-500 to-red-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>
              </Link>
            ) : (
              <div
                key={position.title}
                className={`transform transition-all duration-700 delay-${index * 150} ${
                  inView ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-10'
                } cursor-not-allowed`}
              >
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-6 md:p-8 border border-white/5 overflow-hidden shadow-lg">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="text-xl md:text-2xl font-bold text-white/60">
                      {position.title}
                    </span>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-white/40">
                        {t('qualification')}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500/20 to-red-700/20 flex items-center justify-center">
                        <span className="text-white/60">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}

export default Choice
