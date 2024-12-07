"use client"

import React from 'react';
import { NextPage } from 'next';

import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';     

import '@/app/styles.css'
import MessengerButton from '@/components/MessengerButton';
import Formspree from '@/components/Formspree';

const v5uaPage: NextPage = () => {
  useEffect(() => {
    document.title = "Success story in the interior design niche";
  }, []);

  const [isOpenBeforeMeta, setIsOpenBeforeMeta] = useState(false);
  const [isOpenAfterMeta, setIsOpenAfterMeta] = useState(false);
  const [isOpenBeforeGoogle, setIsOpenBeforeGoogle] = useState(false);
  const [isOpenAfterGoogle, setIsOpenAfterGoogle] = useState(false);

  function closeModalBeforeMeta() {
    setIsOpenBeforeMeta(false);
  }

  function openModalBeforeMeta() {
    setIsOpenBeforeMeta(true);
  }

  function closeModalAfterMeta() {
    setIsOpenAfterMeta(false);
  }

  function openModalAfterMeta() {
    setIsOpenAfterMeta(true);
  }

  function closeModalBeforeGoogle() {
    setIsOpenBeforeGoogle(false);
  }

  function openModalBeforeGoogle() {
    setIsOpenBeforeGoogle(true);
  }

  function closeModalAfterGoogle() {
    setIsOpenAfterGoogle(false);
  }

  function openModalAfterGoogle() {
    setIsOpenAfterGoogle(true);
  }

  return (
    <div className="text-black bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

      <section className="pt-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
        Ми розробили особистий бренд для дизайнера інтер’єру та допомогли їй заробити перші <span className='highlight'>25 тисяч доларів</span>
        </h1>
        {/* <h2 className="text-2xl font-semibold mb-8 text-center text-sky-600">
        Find Out About Unique Strategies That We Used to Save Their Business
        </h2> */}
        <div className="mb-12">
          <p className="mb-4">
          Знайомтесь, Мері, <strong className='text-sky-500'>дизайнер інтер’єрів із Нью-Йорка.</strong> Пропонує планування та розробку концепції, підбір освітлення та декору, авторський супровід, розробку текстильного дизайну та багато іншого.
          Мері поставила за мету розширити свій бізнес, <strong>залучити більше клієнтів,</strong> та найняти додаткових співробітників, але щоб реалізувати це, їй потрібно було запровадити вхідний маркетинг і запустити ефективну рекламу. 
          </p>
          <p className="mb-4">
          Нашій команді було цікаво взятися за такий проект, оскільки ми вже маємо хороший досвід у будівництві та сфері нерухомості, що допомогло б нам охопити більшу частину галузі. <strong>Роботи було багато,</strong> тому ми не зволікали і почали детальний аналіз.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Виклики:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              <li>Ринок дизайну інтер'єру дуже насичений</li>
              <li>Потрібно мати колекцію якісних дизайнерських робіт</li>
              <li>Потрібно витратити багато часу і ресурсів на залучення нових клієнтів</li>
              <li>Відсутність чіткого плану побудови особистого бренду та медіаприсутності</li>
            </ul>
            
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v5/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm pl-6" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Наш підхід:</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-sky-500 to-sky-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Крок</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Дія</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1</td>
                <td className="px-4 py-2">
                Ми провели ретельний аналіз ринку та послуг та зрозуміли больові точки клієнтів
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                Розробили комплексну стратегію онлайн-маркетингу, адаптовану до унікальних потреб і цілей Мері.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                Розробили привабливу цільову сторінку з альбомом робіт, яка заохочувала спілкуватися з Мері.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                Створили чіткий медіа-план для Мері та розробили логотип.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                Запустили рекламу на Google ads і Meta ads
                </td>
              </tr>
            </tbody>
          </table>
         
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-sky-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-sky-700 transition duration-300 ease-in-out animate-bounce">
             Замовте безкоштовну консультацію зараз
            </a>
          </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4 text-center">
          <span className='highlight highlight-sky-300 highlight-variant-5'>Наша унікальна стратегія</span> для рекламних кампаній Mary
        </h2>
        <p className="mb-4">
        Агентство Advantage спеціалізується на створенні вірусних рекламних кампаній на платформах Meta (Facebook та Instagram) та Google Ads. Наша команда експертів з досвідом і глибоким розумінням рекламної індустрії <strong>створила нову стратегію</strong> для особистого бренду Мері.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-4 mx-auto">
          <img src="/img/v1/meta.jpg" alt="Meta Ads" className="rounded-lg border-2 md:w-full w-1/2 max-w-none" />
        </div>
        <p className="mb-4">
        Завдяки детальному аудиту кампанії та консультаціям з Мері ми отримали цінну інформацію про її унікальний стиль і ринкові переваги, цільову аудиторію та цілі розвитку. Ці знання сформулювали наш стратегічний підхід, що дозволило нам розробити кампанію, яка викликала відгук у <strong>потенційних клієнтів</strong> і досягла відчутних результатів.
        </p>
        <p>
        Ми використали низку перевірених тактик, зокрема:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Створили рекламні відеоролики, розповідаючи історії та будуючи воронки для залучення потенційних клієнтів</li>
          <li>Розробили і просунули особистий бренд в Інтернеті.</li>
          <li>Налаштували детальне націлювання, щоб залучити <strong>ідеальних клієнтів</strong> для послуг дизайну інтер’єру на основі демографічних показників, інтересів та поведінки.</li>
          <li>Пропозиції та акції, що спонукають до негайної дії - реєстрації в найкоротші терміни</li>
          <li>Постійна оптимізація та A/B-тестування для покращення ефективності реклами та збільшення рентабельності інвестицій</li>
        </ul>
        <p>
        Використовуючи ці стратегії в Meta Ads і Google Ads, ми були впевнені в своїй спроможності забезпечити постійний потік нових клієнтів і підвищити впізнаваність бренду.
        </p>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">Глибоке занурення в наші методи</h2>
        <p className="mb-8">
        Маючи чітку стратегію, настав час реалізувати наш план. Наша команда експертів,підкотивши рукава, взялася до роботи, застосовуючи ряд перевірених методів у Meta Ads, Google Ads і наших консультаційних службах.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8"><span className='highlight highlight-blue-200 highlight-variant-5'>Meta Ads:</span> залучення аудиторії у Facebook та Instagram</h3>

          <div className="mb-8">
            <div className="">
              <div className="bg-white rounded-lg shadow-lg w-1/2 mx-auto p-6 border-4 border-sky-600">
                <h4 className="text-2xl font-bold mb-4 text-sky-600">Після</h4>
                <ul className="space-y-2">
                  <li><strong>Дата:</strong> 1 травня - 31 травня</li>
                  <li><strong>Витрати на рекламу:</strong> $1,515</li>
                  <li><strong>Переходів за посиланням:</strong> 706</li>
                  <li><strong>CTR:</strong> 2.11%</li>
                  <li><strong>Виводів:</strong> 13</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
          Ми запустили рекламу через панель Ads Manager і використали розміщення Facebook та Instagram.
          </p>
          <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-sky-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-sky-700 transition duration-300 ease-in-out animate-bounce">
             Замовте безкоштовну консультацію зараз
            </a>
          </div>
          <p className="mb-4">
          Наші медійні кампанії були розроблені, щоб привернути увагу потенційних клієнтів, які переглядають їхні стрічки у Facebook та Instagram. Ми розробили переконливі рекламні тексти та привабливі візуальні оголошення, які демонстрували унікальні пропозиції Мері та вражаючі зображення,які могли <strong>будь-якого користувача</strong> який цікавиться дизайном інтер’єру.
           </p> 
         

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результати:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-sky-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-sky-600 text-white py-2 rounded-t-lg">Після нашої роботи</h4>
                    <img src="/img/v5/facebol-high_ctr.jpg" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                </div>

                <Transition appear show={isOpenAfterMeta} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModalAfterMeta}>
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Dialog.Panel className="w-full max-w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                             Після нашої роботи
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v5/facebol-high_ctr.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                                onClick={closeModalAfterMeta}
                              >
                                Close
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
          </div>         
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8"><span className='highlight highlight-green-200 highlight-variant-5'>Google Ads:</span> залучення клієнтів за допомогою пошуку</h3>

          <div className="mb-8">
            <div className="mx-auto">
              <div className="bg-white rounded-lg shadow-lg w-1/2 mx-auto p-6 border-4 border-sky-600">
                <h4 className="text-2xl font-bold mb-4 text-sky-600">Після</h4>
                <ul className="space-y-2">
                  <li><strong>Дата:</strong> 1 травня - 31 травня</li>
                  <li><strong>Ціна за результат:</strong> $301.34</li>
                  <li><strong>Переходів за посиланням:</strong> 93</li>
                  <li><strong>CTR:</strong> 5.36%</li>
                  <li><strong>Конверсії веб-сайту:</strong> 6</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
          Наші кампанії Google Ads були спрямовані на залучення потенційних клієнтів, які активно шукають послуги дизайну інтер’єру в Нью-Йорку. Ми використали низку методів оптимізації, щоб вивести <strong>бренд Mary на перше місце в результатах пошуку.</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Для кожної послуги ми розробили рекламні кампанії з таргетованими ключовими словами.</li>
            <li>Проаналізовано та видалено мінус-слова, щоб підвищити релевантність оголошень</li>
            <li>Оптимізували ставки та конверсії шляхом зміни стратегій для «максимізації конверсій» і збору даних..</li>
            <li>Створили кампанії з максимальною ефективністю, щоб отримати максимальні результати в рекламних каналах Google</li>
          </ul>

          <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-sky-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-sky-700 transition duration-300 ease-in-out animate-bounce">
             Замовте безкоштовну консультацію зараз
            </a>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результати:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-sky-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-sky-600 text-white py-2 rounded-t-lg">Після нашої роботи</h4>
                    <img src="/img/v5/stata-google.jpg" alt="After Results Screenshot" onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                </div>

               
                <Transition appear show={isOpenAfterGoogle} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModalAfterGoogle}>
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Dialog.Panel className="w-full max-w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                             Після нашої роботи
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v5/stata-google.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                                onClick={closeModalAfterGoogle}
                              >
                                Close
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Індивідуальні стратегії <span className='highlight highlight-violet-200 highlight-variant-5'>успіху</span></h3>
          <p className="mb-4">
           Наша повна підтримка зіграла важливу роль у розбудові бренду Mary та виведенні його на вершину. <strong>Ми тісно співпрацювали</strong> з нею, щоб зрозуміти її унікальні потреби, цілі та цільову аудиторію.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Ми з нуля розробили нову посадкову сторінку з каталогом робіт</li>
            <li>Ми допомогли створити пропозицію</li>
            <li>Надали рекомендації щодо створення цікавого відеоконтенту та оптимізації розміщення реклами </li>
            <li>Надали постійну підтримку та стратегічне керівництво для забезпечення <strong>довгострокового успіху</strong></li>
          </ul>
        </div>

        <p>
        Стратегічно поєднавши ці тактики з Meta Ads, Google Ads і консультаційними послугами, <strong>ми створили потужний онлайн-маркетинговий план</strong> який допоміг Мері.
        </p>
      </section>

      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center"><span className='highlight highlight-sky-300 highlight-variant-5'>Відгук власниці компанії</span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src="/img/v5/facephoto.jpg" alt="Owner" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-sky-600" />
            <p className="font-bold text-center">Мері</p> 
            <p className="text-center"><a href="" target="_blank" rel="noopener noreferrer" className="text-sky-600">дизайнер інтер'єру</a></p>
          </div>
          <div className="md:w-2/3 md:px-8">
            <blockquote className="text-xl italic mb-4">
              "Можу сказати, що я задоволена, це був важкий крок для мене, я дуже вагалась, але ризик виправдав себе. Зараз я планую продовжувати працювати з хлопцями, тепер я планую набрати ще більшу команду!»
            </blockquote>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
        <a href="#form" className="bg-sky-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-sky-700 transition duration-300 ease-in-out animate-bounce">
         Замовте безкоштовну консультацію зараз
        </a>
      </div>
      
      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Готові <span className='highlight highlight-sky-300 highlight-variant-5'>Трансформувати свою компанію?</span></h2>
        <p className="text-center">
        Подивіться, як наші ефективні методи цифрового маркетингу можуть допомогти вашій компанії розвиватися та досягати успіху як ніколи раніше. Заплануйте безкоштовну консультацію сьогодні та дізнайтеся, як ми можемо допомогти вам досягти зростання, якого ви завжди мріяли.
        </p>
        <div className="flex justify-center">
        
        <Formspree />
        {/* <CalendlyEmbed url="https://calendly.com/d/cn6d-c6t-vy7?primary_color=ea580c" /> */}

        </div>

        <p className="mt-8 text-center">
        Не пропустіть цю можливість розкрити справжній потенціал вашої компанії. На даний момент <strong>ми можемо прийняти не більше 3 нових клієнтів,</strong> тому переконайтеся, що ваша історія буде наступною, і зробіть перший крок до трансформації свого бізнесу, зв’язавшись з нами через Messenger або замовивши дзвінок.
        </p>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Зв'яжіться з Нами</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Телефонуйте Нам</p>
              <p className="text-sky-600 text-xl">+1 (929) 205-26-10</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Напишіть Нам</p>
              <a className="text-sky-600 text-xl" href='mailto:stepan@advantage-agency.co'>stepan@advantage-agency.co</a>
            </div>
            {/* <div className="text-center">
              <p className="text-lg font-bold mb-2">Visit Our Website</p>
              <a href="https://advantage-agency.co/" target="_blank" rel="noopener noreferrer" className="text-sky-600 text-xl hover:underline">
                advantage-agency.co
              </a>
            </div> */}
          </div>
        </div>
      </section>

      <MessengerButton
        link="https://m.me/100006500822716"
        text="Chat with us on Messenger"
      />
    </div>
  );
};

export default v5uaPage;