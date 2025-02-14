  "use client"

  import { NextPage } from 'next';
  import Image from 'next/image';
  import '@/app/styles.css'
  import MessengerButton from '@/components/MessengerButton';
  import Formspree from '@/components/Formspree';
  import CasesFooter from '@/components/CasesFooter'


  const V14ukPage: NextPage = () => {
  return (    
    <div className="text-black bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
      <section className="mt-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
            Кейс-стаді: Як ми отримали <span className='highlight highlight-red-300 highlight-variant-5'>5% Reply Rate</span> 🎯 
            у крипто-нішах для Джастіна через Cold Email ✨
        </h1>

        <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Передісторія 🚀
            </h2>
            <p className="mb-4 text-xl leading-relaxed text-gray-800">
                Джастін прийшов до нас із запитом протестувати різні оффери в крипто-ніші через Cold Email. Криптовалютний ринок складний, тут високий рівень конкуренції, скептицизму і значний відсоток листів, що осідають у спамі. Тому наше завдання було не просто зробити масову розсилку, а знайти ефективний підхід, який принесе відгуки та ліди.
            </p>
            
          <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold mb-4 mt-8">💡 Мета:</h3>
              <ul className="space-y-2 text-xl leading-relaxed text-gray-800">
                <li>✔️ Протестувати 10 000 листів</li>
                <li>✔️ Знайти ідеальні оффери для крипто-аудиторії</li>
                <li>✔️ Відпрацювати різні методики копірайтингу</li>
                <li>✔️ Дослідити ефективність різних Subject line</li>
                <li>✔️ Підняти reply rate до 5%</li>
              </ul>
            </div>
            <div className="relative h-[300px]">
              <Image 
                src="/img/v14/hero.webp"
                alt="Email Marketing Challenges"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
    </section>

    <div className="flex justify-center w-full mt-14 mb-8 text-center">
        <a href="#form" className="bg-[#ff6315] text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
            Замовте безкоштовну консультацію зараз
        </a>
    </div>

    <section className="mb-16">
      <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-10 text-center">
            Чому це був виклик? 🤔
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎯</span>
                <h3 className="text-xl font-bold">Складно потрапити в inbox</h3>
              </div>
              <p className="text-gray-700">
                Крипто-ніша під особливим контролем email-сервісів.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💡</span>
                <h3 className="text-xl font-bold">Правильний оффер</h3>
              </div>
              <p className="text-gray-700">
                Більшість пропозицій ігноруються або сприймаються як спам.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🤝</span>
                <h3 className="text-xl font-bold">Довіра</h3>
              </div>
              <p className="text-gray-700">
                На ринку мало офферів, які викликають довіру в користувачів
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">⚔️</span>
                    <h3 className="text-xl font-bold">Конкуренція</h3>
                </div>
                <p className="text-gray-700">
                    Компанії борються за увагу кожного потенційного клієнта.
                </p>
            </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center">
          Як ми вирішили проблему? 🎯
        </h2>

        <p className="text-xl text-gray-700 mb-8">
          Замість стандартного підходу ми розробили стратегічний план, що включав:
        </p>

        <h3 className="text-2xl font-bold mb-4">
          1. Створення унікальної бази лідів
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Замість купівлі готових списків ми спарсили базу самостійно через наш внутрішній інструмент. 
          Це дозволило нам отримати релевантних лідів із перевірених джерел, 
          а не випадкових людей, які не мають жодного інтересу до наших офферів.
        </p>
        <div className="flex gap-3">
          <span className="text-green-600 text-xl">✓</span>
          <p className="text-lg text-gray-700">Перевірили валідність пошт – видалили невалідні адреси, зменшивши bounce rate.</p>
        </div>
      </div>
    </section>

    <div className="flex justify-center w-full mt-14 mb-8 text-center">
        <a href="#form" className="bg-[#ff6315] text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
            Замовте безкоштовну консультацію зараз
        </a>
    </div>

    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8">
        2. Запуск 10 000 email із різними секвенціями
      </h2>

      <p className="text-xl mb-8">
        Щоб знайти найефективніший підхід, ми створили кілька секвенцій (ланцюжків листів), у яких тестували:
      </p>

      <div className="space-y-6 mb-10">
        <div className="flex items-start gap-4 p-6 border-l-4 border-blue-400 bg-blue-50">
          <span className="text-blue-600 text-2xl">🔹</span>
          <div>
            <p className="text-lg font-medium">
              Різні стилі копірайтингу
            </p>
            <p className="text-gray-600 mt-2">
              прямий, інтригуючий, емоційний, кейс-орієнтований
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-6 border-l-4 border-blue-400 bg-blue-50">
          <span className="text-blue-600 text-2xl">🔹</span>
          <div>
            <p className="text-lg font-medium">
              Різні CTA
            </p>
            <p className="text-gray-600 mt-2">
              запросити на дзвінок, отримати додаткову інформацію, запропонувати тестовий варіант
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-6 border-l-4 border-blue-400 bg-blue-50">
          <span className="text-blue-600 text-2xl">🔹</span>
          <div>
            <p className="text-lg font-medium">
              Різні теми листів (Subject line)
            </p>
            <p className="text-gray-600 mt-2">
              протестували 30 варіантів
            </p>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-gray-100 pt-6">
        <p className="text-lg font-medium mb-2">
          Ми виявили, що найкраще працювали інтригуючі заголовки, які викликали цікавість:
        </p>
        <ul className="space-y-2 text-gray-600 pl-4">
          <li>• "Will you catch the cryptocurrency market downturn?."</li>
          <li>• "Grab 4x profit from the listing"</li>
          <li>• "Is this your investment?"</li>
        </ul>
        
      </div>
    </section>

    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8">
        3. Оптимізація кампанії після перших 2000 листів
      </h2>

      <p className="text-xl mb-8">
        Для відповідних результатів ми не просто робимо розсилку, ми постійно проводимо детальний аналіз і планування
      </p>

      <div className="space-y-8">
        <div className="flex items-start gap-4 border-b border-gray-100 pb-8">
          <span className="text-red-500 text-2xl shrink-0">📌</span>
          <div>
            <p className="text-lg">
              Видаляли нерелевантні оффери та покращували тексти
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 border-b border-gray-100 pb-8">
          <span className="text-red-500 text-2xl shrink-0">📌</span>
          <div>
            <p className="text-lg">
              Підбирали актуальні Subject line, які зачіпали увагу нашої ЦА
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="text-red-500 text-2xl shrink-0">📌</span>
          <div>
            <p className="text-lg">
              Тестували різні варіації фоллоу-апів, підключили додаткові змінні для персоналізації
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className="flex justify-center w-full mt-14 mb-8 text-center">
        <a href="#form" className="bg-[#ff6315] text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
            Замовте безкоштовну консультацію зараз
        </a>
    </div>

    <section className="my-16">
      <h2 className="text-3xl font-bold mb-12">
        Результати, які ми отримали
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div className="border-l-4 border-blue-400 pl-6 py-4">
          <div className="text-4xl font-bold text-gray-800 mb-2">10 000</div>
          <div className="text-gray-600">email розіслано</div>
        </div>

        <div className="border-l-4 border-orange-400 pl-6 py-4">
          <div className="text-4xl font-bold text-gray-800 mb-2">5%</div>
          <div className="text-gray-600">Reply Rate у крипто-ніші</div>
        </div>

        <div className="border-l-4 border-purple-400 pl-6 py-4">
          <div className="text-4xl font-bold text-gray-800 mb-2">62%</div>
          <div className="text-gray-600">Open Rate</div>
        </div>

        <div className="border-l-4 border-cyan-400 pl-6 py-4">
          <div className="text-4xl font-bold text-gray-800 mb-2">+1.5%</div>
          <div className="text-gray-600">Додатковий Reply Rate від фоллоу-апів</div>
        </div>

        <div className="border-l-4 border-pink-400 pl-6 py-4">
          <div className="text-4xl font-bold text-gray-800 mb-2">300%</div>
          <div className="text-gray-600">ROI найкращих офферів</div>
        </div>
      </div>

      <div className="space-y-12 my-16">
        <div>
          <div className="relative w-full h-full">
            <Image 
              src="/img/cold-email/results.webp"
              alt="Email Campaign Statistics"
              className="object-cover"
              priority
              width={1400}
              height={773}
            />
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Скріншот статистики з нашої системи відстеження
          </p>
        </div>
        
        <div className="max-w-[300px] mx-auto">
          <div className="relative">
            <div className="relative aspect-[9/16] bg-gray-900">
              <video 
                id="testimonial-video"
                className="w-full h-full object-cover"
                poster="/img/cold-email/video-testimonial-poster.webp"
                playsInline
                onClick={(e) => {
                  const video = e.currentTarget;
                  const button = document.getElementById('play-button');
                  if (video.paused) {
                    video.play();
                    button?.classList.add('hidden');
                  } else {
                    video.pause();
                    button?.classList.remove('hidden');
                  }
                }}
                onPause={() => {
                  const button = document.getElementById('play-button');
                  button?.classList.remove('hidden');
                }}
                onPlay={() => {
                  const button = document.getElementById('play-button');
                  button?.classList.add('hidden');
                }}
              >
                <source src="/img/cold-email/video-testimonial.mp4" type="video/mp4" />
              </video>
              
              <button 
                id="play-button"
                className="absolute inset-0 w-full h-full flex items-center justify-center group"
                onClick={() => {
                  const video = document.getElementById('testimonial-video') as HTMLVideoElement;
                  if (video.paused) {
                    video.play();
                  }
                }}
              >
                <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center transition-transform group-hover:scale-110">
                  <div className="play-icon w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-gray-900 ml-1"></div>
                </div>
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-600 text-center">
              Відгук від Джастіна про результати
            </p>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-gray-100 pt-12">
        <h2 className="text-3xl font-bold mb-8">Що далі?</h2>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-blue-500 text-2xl">→</span>
            <p className="text-lg">
              Масштабування – збільшення обсягу email-розсилок із перевіреними офферами
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-blue-500 text-2xl">→</span>
            <p className="text-lg">
              Нові підходи до персоналізації – щоб робити листи ще ефективнішими
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-blue-500 text-2xl">→</span>
            <p className="text-lg">
              Тестування інших форматів фоллоу-апів
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="my-16">
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

    <CasesFooter />

    <MessengerButton
      link="https://m.me/100006500822716"
      text="Chat with us on Messenger"
    />

    </div>
    );
  };

  export default V14ukPage;