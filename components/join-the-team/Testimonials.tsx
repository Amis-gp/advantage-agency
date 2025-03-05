'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Testimonials = () => {
  const t = useTranslations('join-the-team.testimonials')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Get testimonials data from translations
  const testimonials = [
    {
      text: t('items.0.text'),
      author: t('items.0.author'),
      position: t('items.0.position'),
      avatar: "/img/join-the-team/testimonial-1.jpg"
    },
    {
      text: t('items.1.text'),
      author: t('items.1.author'),
      position: t('items.1.position'),
      avatar: "/img/join-the-team/testimonial-2.jpg"
    },
    {
      text: t('items.2.text'),
      author: t('items.2.author'),
      position: t('items.2.position'),
      avatar: "/img/join-the-team/testimonial-3.jpg"
    }
  ]

  return (
    <section className="bg-gradient-to-b from-gray-950 to-black py-16 md:py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-red-600/5 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-red-800/5 blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-red-500/5 blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 mb-6 relative inline-block">
            {t('title')}
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`transform transition-all duration-700 delay-${index * 100} ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative bg-white/5 hover:bg-white/10 rounded-2xl p-8 h-full">
                {/* Quote mark */}
                <div className="absolute top-6 right-6">
                  <span className="text-4xl text-red-500 opacity-50">"</span>
                </div>

                {/* Testimonial content */}
                <div className="space-y-6">
                  <p className="text-lg text-white/80 leading-relaxed">
                    {testimonial.text}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-white/60">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 w-full h-[2px]">
                  <div className="h-full bg-gradient-to-r from-red-500/50 via-red-500 to-red-500/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
