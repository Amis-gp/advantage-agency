'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Hero = () => {
  const t = useTranslations('join-the-team.hero')

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full min-h-screen bg-black">
      {/* Background GIF for mobile */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/img/join-the-team/job.gif"
          alt="Team animation"
          fill
          className="object-cover object-center opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b" />
      </div>

      <div className="relative min-h-screen flex">
        {/* Left content side */}
        <div className="flex-1 flex items-center max-w-7xl mx-auto">
          <div className="max-w-2xl px-6 space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="text-4xl md:text-6xl lg:text-7xl ">{t('title')}</span> <br/>
              <span className="text-red-500">{t('titleHighlight')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              {t('subtitle')}
            </p>
            <div className="pt-4">
              <button 
                onClick={scrollToAbout}
                className="group relative px-8 py-4 bg-red-500 text-white rounded-lg overflow-hidden transition-all duration-300 hover:bg-red-600"
              >
                <span className="relative z-10 text-lg font-medium">
                  {t('button')}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Right gif side - desktop only */}
        <div className="hidden lg:block lg:w-1/2 lg:left-1/2 h-full absolute">
          <div className="relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
            <Image
              src="/img/join-the-team/job.gif"
              alt="Team animation"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
