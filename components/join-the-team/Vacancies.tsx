'use client'

import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const vacancyData = [
  {
    title: "Lead Generation Specialist",
    salary: "$300–$1200",
    experience: "Без досвіду (стажування) | З досвідом",
    description: "Хочеш увірватися в маркетинг? Тут ти станеш профі в генерації лідів із нуля.",
    icon: "📊",
    gradient: "from-red-600 to-red-400"
  },
  {
    title: "Facebook Media Buyer",
    salary: "$450–$1250",
    experience: "З досвідом від 1,5 років",
    description: "Facebook — твій майданчик? Запускай кампанії для топ-клієнтів і рви KPI.",
    icon: "📱",
    gradient: "from-red-700 to-red-500"
  },
  {
    title: "Email Marketing Automator",
    salary: "$150–$1000",
    experience: "Без досвіду (стажування) | З досвідом",
    description: "Любиш порядок у всьому? Автоматизуй email-потоки, які приносять гроші.",
    icon: "✉️",
    gradient: "from-red-800 to-red-600"
  }
]

const Vacancies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const scrollToForm = () => {
    const formSection = document.getElementById('choice')
    formSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-gradient-to-b from-black to-gray-950 py-16 md:py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-red-600/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-red-800/5 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-red-500/5 blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto text-center mb-16 md:mb-24 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 mb-6 relative inline-block">
            Вибери свою роль
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Знайди позицію, яка найкраще відповідає твоїм навичкам та амбіціям
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
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="group relative h-full bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-red-900/20 shadow-xl overflow-hidden transition-all duration-500 hover:border-red-500/30 hover:shadow-red-900/20 hover:-translate-y-1 flex flex-col">
                {/* Background gradient that appears on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${vacancy.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="flex-grow">
                  {/* Position icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${vacancy.gradient} flex items-center justify-center text-3xl mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                    {vacancy.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                    {vacancy.title}
                  </h3>
                  
                  <div className="mb-4">
                    <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300 group-hover:from-red-400 group-hover:to-red-200 transition-colors duration-300">
                      {vacancy.salary}
                    </p>
                    <p className="text-white/60 text-sm mt-1">
                      {vacancy.experience}
                    </p>
                  </div>
                  
                  <p className="text-white/70 mb-6 group-hover:text-white/90 transition-colors duration-300">
                    {vacancy.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-4">
                  <button 
                    onClick={scrollToForm}
                    className="relative w-full py-4 overflow-hidden rounded-lg group-hover:shadow-lg transition-all duration-300"
                  >
                    {/* Button background with animated gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    
                    <span className="relative z-10 text-white font-medium flex items-center justify-center">
                      Подати заявку
                      <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </button>
                </div>
                
                {/* Particle effect on hover */}
                {hoveredIndex === index && (
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
