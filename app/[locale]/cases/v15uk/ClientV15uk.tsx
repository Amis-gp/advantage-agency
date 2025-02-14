"use client"

import { NextPage } from 'next';
import { useEffect } from 'react';
import Image from 'next/image';
import '@/app/styles.css'
import MessengerButton from '@/components/MessengerButton';
import Formspree from '@/components/Formspree';
import CasesFooter from '@/components/CasesFooter'

const V15ukPage: NextPage = () => {
  useEffect(() => {
    document.title = "Кейс: Створення власного парсера | 200k лідів";
  }, []);
  
  return (    
    <div className="text-black bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <section className="py-12 md:py-16">
          <div className="text-center">
            <div className="inline-block mb-4 px-6 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
              🚀 Кейс-стаді
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Як ми створили власний парсер та зібрали 200k лідів
            </h1>

            <div className="text-left">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-yellow-100 p-3 rounded-2xl">
                  💡
                </div>
                <h2 className="text-2xl font-bold">
                  Передісторія: Виклик та спроби пошуку рішення
                </h2>
              </div>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Як і в будь-якому онлайн бізнесі, ми не могли не поставити собі питання: 
                <span className="font-semibold bg-yellow-100 px-2 rounded-lg">
                  чи можна ефективно витягувати контакти нашої цільової аудиторії та взаємодіяти з ними?
                </span>
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold">Ми протестували кілька сервісів для парсингу, однак кожен із них мав свої обмеження:</h3>
                </div>
                
                <ul className="space-y-4 text-base md:text-lg">
                  <li className="flex items-start gap-3">
                    <span className="my-auto text-sm">❌</span>
                    <p>Невелика кількість отриманих контактів, хоча ми планували отримати набагато більше</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="my-auto text-sm">❌</span>
                    <p>Висока ціна деяких сервісів, яка не виправдовувалася реальними результатами</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="my-auto text-sm">❌</span>
                    <p>Всі сервіси мали обмеження на обсяг та постійно блокували акаунти</p>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 my-6 md:my-10">
                <a 
                  href="#form" 
                  className="px-6 py-3 bg-blue-600 text-white text-center rounded-xl hover:bg-blue-700 transition-all inline-flex items-center justify-center gap-2 w-full sm:w-auto animate-bounce"
                >
                  🚀 Хочу такий же парсер
                </a>
              </div>

              <div className="relative bg-gradient-to-r from-green-50 to-transparent p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">✨</span>
                  <h3 className="font-medium text-green-800">Наше рішення</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ми зрозуміли, що для досягнення результату нам потрібно розробити{' '}
                  <span className="font-semibold text-green-600">власне рішення</span>,{' '}
                  яке буде працювати на наші умови. Це стало викликом, адже ми ще не знали, що парсери на ринку швидко застарівають ⚡️, і потрібно не просто витягувати дані, а й швидко адаптувати інструмент до нових умов
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="relative">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-blue-800 mb-4">
                Наші інструменти
              </span>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ось приклади наших парсерів, які допомогли нам збирати ліди
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="group">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="relative">
                    <div className="bg-white shadow-xl shadow-purple-100/50 rounded-[1.5rem] p-6 transition-transform duration-500 group-hover:-translate-y-2">
                      <div className="relative aspect-[909/924] rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-pink-50 to-purple-50">
                        <Image 
                          src="/img/v15/scraper-1.webp"
                          alt="Instagram Parser Interface"
                          width={909}
                          height={924}
                          className="object-contain mix-blend-multiply"
                          priority
                        />
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">📸</span>
                          <h3 className="text-xl font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                            Instagram Parser
                          </h3>
                        </div>
                        <p className="text-gray-600">
                          Інтелектуальний інструмент для збору та аналізу даних Instagram
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="relative">
                    <div className="bg-white shadow-xl shadow-blue-100/50 rounded-[1.5rem] p-6 transition-transform duration-500 group-hover:-translate-y-2">
                      <div className="relative aspect-[909/924] rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-blue-50 to-cyan-50">
                        <Image 
                          src="/img/v15/scraper-2.webp"
                          alt="LinkedIn Parser Interface"
                          width={909}
                          height={924}
                          className="object-contain mix-blend-multiply"
                          priority
                        />
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">💼</span>
                          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            LinkedIn Parser
                          </h3>
                        </div>
                        <p className="text-gray-600">
                          Професійний інструмент для роботи з даними LinkedIn
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 md:mt-16">
          <a 
            href="#form" 
            className="px-6 py-3 bg-blue-600 text-white text-center rounded-xl hover:bg-blue-700 transition-all inline-flex items-center justify-center gap-2 w-full sm:w-auto animate-bounce"
          >
            💼 Отримати парсер для бізнесу
          </a>
        </div>

        <section className="py-16">
          <div className="">
            <div className="flex items-center gap-4 mb-12">
              <div className="bg-violet-100 p-3 rounded-2xl">
                🎯
              </div>
              <h2 className="text-3xl font-bold">
                Стратегії та рішення
              </h2>
            </div>

            <p className="text-xl text-gray-700 mb-12">
              Після кількох місяців тестувань ми вирішили розробити свій власний парсер. З цього моменту почався довгий шлях 🚀
            </p>

            <div className="space-y-8">
              {/* Мобільна версія */}
              <div className="md:hidden space-y-8">
                {/* Пункт 1 */}
                <div className="relative">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-blue-600">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                        ⚙️
                      </div>
                      <h3 className="font-semibold">01 / Розробка інструменту</h3>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-violet-50 p-6 rounded-2xl">
                      <p className="text-gray-700">
                        Ми витратили понад 5 місяців на створення першого парсера, щоб забезпечити можливість витягувати різні типи даних з джерел:
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">📧 пошти</span>
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">🌐 соцмережі</span>
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">📝 текстові описи</span>
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">📞 номера телефонів</span>
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">📍 адреси</span>
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">👔 посади</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Пункт 2 */}
                <div className="relative">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-green-600">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">
                        🧪
                      </div>
                      <h3 className="font-semibold">02 / Тестування та налаштування</h3>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl">
                      <p className="text-gray-700">
                        Цей процес супроводжувався безліччю тестів: від налаштування серверів до перевірки обробки великих обсягів даних 📊
                      </p>
                      <div className="mt-4 space-y-3">
                        <div className="flex items-center gap-3 bg-white/80 backdrop-blur px-4 py-2 rounded-xl">
                          <span className="text-red-500">⚠️</span>
                          <span>Блокування акаунтів</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/80 backdrop-blur px-4 py-2 rounded-xl">
                          <span className="text-red-500">⚠️</span>
                          <span>Помилки в обробці даних</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/80 backdrop-blur px-4 py-2 rounded-xl">
                          <span className="text-red-500">⚠️</span>
                          <span>Постійне вдосконалення механізму</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Пункт 3 */}
                <div className="relative">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-orange-600">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-xl">
                        🔧
                      </div>
                      <h3 className="font-semibold">03 / Рішення технічних проблем</h3>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
                      <p className="text-gray-700">
                        Команда технічного відділу працювала над адаптацією інструменту до швидко змінюваних умов 🚀
                        <br/><br/>
                        Рішення проблеми блокувань акаунтів і технічних глюків стало важливим кроком у стабільності роботи парсера ✅
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Десктопна версія */}
              <div className="hidden md:space-y-12 md:block">
                {/* Пункт 1 */}
                <div className="relative pl-0">
                  <div className="grid grid-cols-[200px_1fr] gap-8">
                    <div className="text-right font-semibold text-blue-600">
                      01 / Розробка інструменту
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-violet-50 p-6 rounded-2xl">
                      <p className="text-gray-700">
                        Ми витратили понад 5 місяців на створення першого парсера, щоб забезпечити можливість витягувати різні типи даних з джерел:
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">📧 пошти</span>
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">🌐 соцмережі</span>
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">📝 текстові описи</span>
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">📞 номера телефонів</span>
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">📍 адреси</span>
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">👔 посади</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Пункт 2 */}
                <div className="relative pl-0">
                  <div className="grid grid-cols-[200px_1fr] gap-8">
                    <div className="text-right font-semibold text-green-600">
                      02 / Тестування та налаштування
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl">
                      <p className="text-gray-700">
                        Цей процес супроводжувався безліччю тестів: від налаштування серверів до перевірки обробки великих обсягів даних 📊
                      </p>
                      <div className="mt-4 space-y-3">
                        <div className="flex items-center gap-3 bg-white/80 backdrop-blur px-4 py-2 rounded-xl">
                          <span className="text-red-500">⚠️</span>
                          <span>Блокування акаунтів</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/80 backdrop-blur px-4 py-2 rounded-xl">
                          <span className="text-red-500">⚠️</span>
                          <span>Помилки в обробці даних</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/80 backdrop-blur px-4 py-2 rounded-xl">
                          <span className="text-red-500">⚠️</span>
                          <span>Постійне вдосконалення механізму</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Пункт 3 */}
                <div className="relative pl-0">
                  <div className="grid grid-cols-[200px_1fr] gap-8">
                    <div className="text-right font-semibold text-orange-600">
                      03 / Рішення технічних проблем
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
                      <p className="text-gray-700">
                        Команда технічного відділу працювала над адаптацією інструменту до швидко змінюваних умов 🚀
                        <br/><br/>
                        Рішення проблеми блокувань акаунтів і технічних глюків стало важливим кроком у стабільності роботи парсера ✅
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col sm:flex-row justify-center gap-4 ">
          <a 
            href="#form" 
            className="px-6 py-3 bg-blue-600 text-white text-center rounded-xl hover:bg-blue-700 transition-all inline-flex items-center justify-center gap-2 w-full sm:w-auto animate-bounce"
          >
            Допоможіть нам знайти клієнтів 🤝
          </a>
        </div>


        <section className="py-10">
          <div className="">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-indigo-100 p-3 rounded-2xl">
                📈
              </div>
              <h2 className="text-3xl font-bold">
                Результати, які ми досягли
              </h2>
            </div>

            <div className="space-y-12">
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600">🔹</span>
                    <p className="text-lg">Ми створили комплекс рішень, який дозволяє витягувати контакти з багатьох джерел.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600">🔹</span>
                    <div>
                      <p className="text-lg mb-2">Наш інструмент може обробляти та парсити великі обсяги даних з різних платформ:</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-white px-3 py-1 rounded-full text-sm">📝 Текстові описи</span>
                        <span className="bg-white px-3 py-1 rounded-full text-sm">📧 Пошта</span>
                        <span className="bg-white px-3 py-1 rounded-full text-sm">📱 Телефонні номери</span>
                        <span className="bg-white px-3 py-1 rounded-full text-sm">👔 Посади</span>
                        <span className="bg-white px-3 py-1 rounded-full text-sm">📍 Адреси</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="bg-green-100 p-2 rounded-xl">💡</span>
                  Як це можна застосувати?
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">📨</span>
                      <h4 className="text-xl font-semibold">Email розсилка</h4>
                    </div>
                    <p className="text-gray-700">
                      Вислати гарячу пропозицію своїй B2B аудиторії через холодні email. У вас є список контактів? Використовуйте наші парсери для отримання даних та ефективної розсилки!
                    </p>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">📞</span>
                      <h4 className="text-xl font-semibold">Телефонні дзвінки</h4>
                    </div>
                    <p className="text-gray-700">
                      Зателефонуйте своїй цільовій аудиторії та зробіть швидку, але ефективну холодну пропозицію, використовуючи дані з нашого парсера.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">💬</span>
                      <h4 className="text-xl font-semibold">Взаємодія через месенджери</h4>
                    </div>
                    <p className="text-gray-700">
                      Закріпіть людину, яка буде обробляти ці ліди через Whatsapp, Telegram або інші соцмережі. Це дозволить не тільки зберігати контакти, а й швидко зв'язуватись з потенційними клієнтами.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">🎯</span>
                      <h4 className="text-xl font-semibold">Facebook таргетинг</h4>
                    </div>
                    <p className="text-gray-700">
                      Завантажте базу до Facebook, щоб ваша реклама показувалась саме цільовій аудиторії.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="form" className="mb-16 mt-6">
          <div className="mx-auto space-y-8">
            <h2 className="text-3xl font-bold">
              Хочете такі ж результати для свого бізнесу? 🚀
            </h2>
            
            <p className="text-xl text-gray-700">
              Залиште заявку на безкоштовну консультацію. Ми проаналізуємо вашу нішу та запропонуємо стратегію, яка працюватиме саме для вас.
            </p>
          </div>

          <div className="w-fit mx-auto mt-8">
            <Formspree />
          </div>

          <div className="max-w-2xl mx-auto mt-8 text-center">
            <p className="text-sm text-gray-500">
              *Консультація безкоштовна та не зобов'язує до співпраці
            </p>
          </div>
        </section>

        <MessengerButton
          link="https://m.me/100006500822716"
          text="Chat with us on Messenger"
        />

      </div>
      <CasesFooter />
    </div>
  );
};

export default V15ukPage;