'use client'

import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const cards = [
    {
      icon: '🚀',
      title: 'Експерти в маркетингу',
      description: 'Ми — команда експертів, об\'єднана пристрастю до маркетингу та лідогенерації. Наша мета — розвивати бізнеси через комплексні рішення, що приносять реальний прибуток.',
    },
    {
      icon: '💎',
      title: 'High-ticket експертиза',
      description: 'Спеціалізуємося на high-ticket продажах і знаємо, як витягувати ліди з різних каналів. Наш технічний відділ створив власний парсер, який вичавлює максимум із соцмереж.',
    },
    {
      icon: '🤖',
      title: 'AI-інновації',
      description: 'Ми в курсі AI-революції: впроваджуємо автоматизації, розробляємо AI-асистентів і тримаємо руку на пульсі трендів, щоб наші технології завжди були на крок попереду.',
    },
    {
      icon: '✨',
      title: 'Твій шанс',
      description: 'Тут ти не просто виконавець — ти частина великої гри. Приєднуйся до команди, де твої ідеї будуть почуті, а таланти — розвинуті.',
    },
  ]

  // Auto-rotate tabs on desktop
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % cards.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Create refs for each card
  const cardRefs = cards.map(() => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    })
    return { ref, inView }
  })

  return (
    <section id="about" className="bg-gradient-to-b from-black to-gray-950 py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`transform transition-all duration-1000 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 mb-4">
            Хто ми такі?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mb-16">
            Команда професіоналів, що об'єднує досвід, інновації та пристрасть до маркетингу
          </p>
        </div>
        
        {/* Mobile view - Cards */}
        <div className="md:hidden space-y-6">
          {cards.map((card, index) => (
            <div 
              key={index}
              ref={cardRefs[index].ref}
              className={`transform transition-all duration-700 delay-${index * 100} bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-red-900/30 shadow-xl ${
                cardRefs[index].inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-red-700 to-red-500 text-2xl mr-4">
                  <span>{card.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
              </div>
              <p className="text-lg text-white/80 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop view - Tabs and animated content */}
        <div className="hidden md:block">
          <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
            {cards.map((card, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-gradient-to-r from-red-700 to-red-500 text-white shadow-lg' 
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{card.icon}</span>
                {card.title}
              </button>
            ))}
          </div>

          <div className="relative h-[400px] bg-gradient-to-br from-black/70 to-gray-900/70 backdrop-blur-sm rounded-2xl p-8 border border-red-900/30 shadow-xl overflow-hidden">
            {cards.map((card, index) => (
              <div 
                key={index}
                className={`absolute inset-0 p-8 transition-all duration-500 flex flex-col justify-center ${
                  activeTab === index 
                    ? 'opacity-100 translate-x-0 z-10' 
                    : 'opacity-0 translate-x-20 -z-10'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-700 to-red-500 text-3xl mr-6">
                    <span>{card.icon}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white">{card.title}</h3>
                </div>
                <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
                  {card.description}
                </p>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-red-700/10 blur-3xl"></div>
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-red-500/10 blur-3xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '5+', label: 'років досвіду' },
            { value: '100+', label: 'успішних проєктів' },
            { value: '20+', label: 'експертів в команді' },
            { value: '300%', label: 'середній ROI клієнтів' },
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-black/40 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-700 hover:scale-105 hover:bg-red-900/20"
            >
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 mb-2">
                {stat.value}
              </div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs
