'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const testimonials = [
  {
    text: "Тут я зрозумів, що гнучкий графік — це не міф. Баланс між роботою і життям став реальністю.",
    author: "Олексій",
    position: "Email Marketing Automator",
    avatar: "/img/join-the-team/avatar1.webp"
  },
  {
    text: "ADvantage — це місце, де твої ідеї чують. Я навчилася лідогенерації з нуля і тепер веду круті проекти.",
    author: "Марія",
    position: "Lead Generation Specialist",
    avatar: "/img/join-the-team/avatar2.webp"
  },
  {
    text: "Працюю з топ-клієнтами, бачу результати своїх кампаній. Команда — як другий дім.",
    author: "Дмитро",
    position: "Facebook Media Buyer",
    avatar: "/img/join-the-team/avatar3.webp"
  }
]

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="bg-black py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 md:mb-16">
          Що каже команда?
        </h2>

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
