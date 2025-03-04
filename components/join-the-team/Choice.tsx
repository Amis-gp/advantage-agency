'use client'

import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const positions = [
  {
    title: "Lead Generation Specialist",
    path: "/join/lead-generation"
  },
  {
    title: "Facebook Media Buyer",
    path: "/join/media-buyer"
  },
  {
    title: "Email Marketing Automator",
    path: "/join/email-marketing"
  }
]

const Choice = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="choice" className="bg-black pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Готовий стати частиною команди?
          </h2>
          <p className="text-xl text-white/80 mb-12 md:mb-16">
            Заповни кваліфікаційну форму, щоб ми зрозуміли, як допомогти тобі розкритися на повну.
          </p>
        </div>

        <div 
          ref={ref}
          className="flex flex-col gap-4 max-w-2xl mx-auto"
        >
          {positions.map((position, index) => (
            <Link
              key={position.title}
              href={position.path}
              className={`transform transition-all duration-700 delay-${index * 100} ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="group relative bg-white/5 hover:bg-white/10 rounded-2xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <span className="text-xl md:text-2xl font-bold text-white">
                    {position.title}
                  </span>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-white/60">
                      Пройти кваліфікацію
                    </span>
                    <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                      <span className="text-white transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-full h-[2px]">
                  <div className="h-full bg-gradient-to-r from-red-500 to-red-500/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Choice
