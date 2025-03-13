"use client"

import React from 'react';
import { NextPage } from 'next';
import Formspree from "@/components/cases/Formspree";

import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';       

import '@/app/styles.css'
import MessengerButton from '@/components/cases/MessengerButton';
import CasesFooter from '@/components/cases/Footer';
import LanguageSwitcher from '@/components/cases/LanguageSwitcher';

const V2ukPage: NextPage = () => {
  useEffect(() => {
    document.title = "Історія успіху Queen of Beauty";
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
      <LanguageSwitcher />
      <section className="pt-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
        <u>Queen of Beauty</u> збільшила місячний дохід на <span className='highlight'>194%</span>
        </h1>
        <h2 className="text-2xl font-semibold mb-8 text-center text-rose-600">
        Через таргетовану рекламу на YouTube і TikTok
        </h2>
        <div className="mb-12">
          <p className="mb-4">
          Представляємо Queen of Beauty, розкішний салон краси в Манчестері, який пропонує висококласні послуги, такі як ботокс, підтяжка, догляд за обличчям. Незважаючи на якісне обслуговування салону та злагоджену структуру працівників, власниця Аполінарія <strong>намагалася вивести свій салон на вищий рівень</strong> та збільшити кількість закладів у майбутньому. Queen of Beauty генерувала ліди через платформу «Fresha», рекламу на youtube та органічний трафік із сайту.
          </p>
          <p className="mb-4">Аполінарія звернулася до нашого агентства, шукаючи спосіб збільшити кількість нових бронювань для розширення свого бізнесу. Як <strong>експерти в індустрії краси,</strong> ми зрозуміли, dobrze zrozumieliśmy potrzeby Queen of Beauty, запит добре, нам потрібно було розробити персоналізовану маркетингову стратегію та створити нові канали трафіку, щоб залучити більше людей.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Виклики:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              <li>Складнощі із залученням нових клієнтів для послуг преміум-класу</li>
              <li>Відсутність впізнаваності бренду та довіри на конкурентному ринку</li>
              <li>Недостатня кількість зацікавлених користувачів з поточних джерел трафіку</li>
              <li>Висока вартість показів YouTube</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v2/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Наш підхід:</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-rose-500 to-rose-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Крок</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Дія</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1</td>
                <td className="px-4 py-2"> 
                  Проаналізували цільову аудиторію Queen of Beauty, конкуренцію та унікальні пропозиції.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                Розробили комплексний маркетинговий план, зосереджений на YouTube і TikTok.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                Створили динамічну відеорекламу, яка привернула увагу на вибраних платформах.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                Провели нові тести A/B та постійну оптимізацію для покращення ефективності кампанії.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-rose-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-rose-700 transition duration-300 ease-in-out animate-bounce">
            Замовте безкоштовну консультацію зараз
            </a>
          </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">YouTube: <span className='highlight highlight-rose-300 highlight-variant-5'>від вузького націлювання до широкого залучення</span></h2>
        <p className="mb-8">
        Спочатку реклама YouTube Shorts від Queen of Beauty була націлена на вузьку аудиторію, показуючи рекламу на каналах творців, які розповідають про послуги краси. Цей підхід <strong>був дуже дорогим</strong>, з високою ціною за клік і обмеженим охопленням.
        </p>
        <p className="mb-8">
        Наше рішення? Ми перейшли до ширшої аудиторії, націленої на жінок віком 20-50 років, і змінили підхід до націлювання. Ця стратегічна зміна дала вражаючі результати:
        </p>

        <div className="mb-8">
          
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Раніше</h4>
                <ul className="space-y-2">
                  <li><strong>Вражень:</strong> ~8 628</li>
                  <li><strong>Переходів:</strong> 649</li>
                  <li><strong>Нові бронювання:</strong> 5</li>
                  <li><strong>Дохід:</strong>  £239</li>
                  <li><strong>Витрати на рекламу:</strong> £837</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-rose-600">
                <h4 className="text-2xl font-bold mb-4 text-rose-600">After</h4>
                <ul className="space-y-2">
                  <li><strong>Вражень:</strong> ~24 540</li>
                  <li><strong>Переходів:</strong> 2 387 </li>
                  <li><strong>Нові бронювання:</strong> 59</li>
                  <li><strong>Дохід:</strong>  £11 800</li>
                  <li><strong>Витрати на рекламу:</strong> £1 567</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
          Розширивши охоплення Queen of Beauty, ми значно знизили ціну за клік, одночасно збільшивши кількість бронювань і дохід за 2 місяці.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результати:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-rose-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-rose-600 text-white py-2 rounded-t-lg">До нашої співпраці</h4>
                    <img src="/img/v2/stata_google_before_case2.jpg" alt="Before Results Screenshot" onClick={openModalBeforeMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-rose-600 text-white py-2 rounded-t-lg">Через 2 місяці нашої співпраці</h4>
                    <img src="/img/v2/stata_google_after_case2.jpg" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                </div>

                <Transition appear show={isOpenBeforeMeta} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModalBeforeMeta}>
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
                            До нашої співпраці
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v2/stata_google_before_case2.jpg" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                                onClick={closeModalBeforeMeta}
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
                            Через 2 місяці нашої співпраці
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v2/stata_google_after_case2.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
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

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
          <a href="#form" className="bg-rose-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-rose-700 transition duration-300 ease-in-out animate-bounce">
           Замовте безкоштовну консультацію зараз
          </a>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8"><span className='highlight highlight-green-200 highlight-variant-5'>TikTok:</span> Зміцнення довіри та досвіду</h3>
          <p className="mb-4">
          Королева краси майже не вела профіль TikTok через брак контенту, в обліковому записі було лише 4 відео. Цей обмежений вміст не зміг створити довіру та досвід, що призвело до низького рівня залучення та відсутності взаємодії.
          </p>
          <p className="mb-4">
          Щоб подолати цю проблему, ми запровадили <strong>стратегію, орієнтовану на вміст</strong>:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Постійно додаємо високоякісні інформативні відео, які демонструють послуги та досвід Queen of Beauty</li>
            <li>Виділені зміни клієнтів і відгуки для зміцнення довіри</li>
            <li>Взаємодія з спільнотою TikTok через коментарі, лайки та поширення</li>
          </ul>
          <p className="mb-4">
          Оскільки профіль Queen of Beauty у TikTok зростав, потенційні клієнти, які натискали рекламу, отримували доступ до купи вмісту, який демонстрував довіру до салону
          </p>
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Раніше</h4>
                <ul className="space-y-2">
                  <li><strong>Показів:</strong> 0</li>
                  <li><strong>Кліків:</strong> 0</li>
                  <li><strong>Нових бронювань:</strong> 0</li>
                  <li><strong>Дохід:</strong>  0</li>
                  <li><strong>Витрати на рекламу:</strong> 0</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-rose-600">
                <h4 className="text-2xl font-bold mb-4 text-rose-600">Після</h4>
                <ul className="space-y-2">
                  <li><strong>Показів:</strong> 72 570</li>
                  <li><strong>Кліків:</strong> 1 930 </li>
                  <li><strong>Нових бронювань:</strong> 89</li>
                  <li><strong>Дохід:</strong>  £17 800</li>
                  <li><strong>Витрати на рекламу:</strong> £2 269</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mb-4">
          Використовуючи потужність контенту, ми перетворили присутність Queen of Beauty на TikTok на машину для отримання прибутку.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результати:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-rose-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-rose-600 text-white py-2 rounded-t-lg">Через 2 місяці нашої співпраці</h4>
                    <img src="/img/v2/stata_tiktok_after_case2.jpg" alt="After Results Screenshot" onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                            Через 2 місяці нашої співпраці
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v2/stata_tiktok_after_case2.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
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
          <h3 className="text-2xl font-bold mb-8">Висновки:</h3>
          <p className="mb-4">
          Рекламні кампанії на YouTube і TikTok збільшили присутність Queen of Beauty на ринку та дали хороші результати за час, який ми працюємо.
          </p>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-rose-600">
              <ul className="space-y-2">
                <li><strong>ROI:</strong> 740%</li>
                <li><strong>Всього нових бронювань:</strong> 142 </li>
                <li><strong>Витрати на рекламу:</strong> £3 836</li>
                <li><strong>Дохід:</strong> £28 400</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-rose-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-rose-700 transition duration-300 ease-in-out animate-bounce">
            Замовте безкоштовну консультацію зараз
            </a>
          </div>
        <p className="mb-8">
        Але це лише початок цієї трансформаційної подорожі. Продовжуйте читати, щоб розкрити весь масштаб нашого впливу та дізнатися, як ми можемо допомогти вашому салону краси досягти подібних<strong>приголомшливих результатів.</strong> Повірте нам, ви не захочете пропустити те, що буде далі!
        </p>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Від боротьби до процвітання: <span className='highlight highlight-rose-300 highlight-variant-5'>Відгук власника салону</span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src="/img/v2/facephoto.jpg" alt="Natalia Kowalska" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-rose-600" />
            <p className="font-bold text-center">Аполінарія</p> 
            <p className="text-center">Власниця <a href="https://queenofbeautyuk.com/" target="_blank" rel="noopener noreferrer" className="text-rose-600"><strong><u>Queen of Beauty</u></strong></a></p>
          </div>
          <div className="md:w-2/3 md:px-8">
            <blockquote className="text-xl italic mb-4">
            «Як власниця бізнесу, я добре знаю, наскільки важливо вибирати правильних партнерів, особливо коли йдеться про маркетинг. Можливо, як і більшість власників бізнесу, у мене був негативний досвід роботи з різними маркетинговими агентствами, але це мене не зупинило. Я не люблю нікого хвалити, але Advantage Agency дійсно зуміла мене приємно здивувати, наша співпраця була не тільки приємною, але й дуже продуктивною».
            </blockquote>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-rose-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-rose-700 transition duration-300 ease-in-out animate-bounce">
             Замовте безкоштовну консультацію зараз
            </a>
          </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Прокачайте свій салон краси за допомогою<span className='highlight highlight-rose-300 highlight-variant-5'>перевірених стратегій</span></h2>
        <p className="text-center">
        Готові до трансформації, як королева краси? Припиніть напружуватися через клієнтів і неефективну рекламу! Ми допомагаємо салонам краси бронювати понад 50 зустрічей за один тиждень за допомогою наших перевірених методів послідовності й оповідання. Зосередьтеся на тому, що ви робите найкраще (надання першокласних послуг) і залиште нам залучення нових клієнтів. Насолоджуйтесь свободою процвітаючого бізнесу з передбачуваним грошовим потоком (більше немає прогалин у клієнтах).
        </p>
        <div className="flex justify-center">
        
        <Formspree />
        
        </div>
        <p className="mt-8 text-center">
        На даний момент ми можемо прийняти <strong>максимум 3 нових клієнтів, тому переконайтеся,</strong>  що ваша історія успіху наступна, і зробіть перший крок до трансформації свого бізнесу, зв’язавшись з нами через месенджер або замовивши дзвінок.
        </p>
      </section>

      <CasesFooter />

      <MessengerButton
        link="https://m.me/100006500822716"
        text="Chat with us on Messenger"
      />
    </div>
  );
};

export default V2ukPage;