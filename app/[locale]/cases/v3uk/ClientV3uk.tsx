'use client'

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

const V3ukPage: NextPage = () => {
  useEffect(() => {
    document.title = "History of success VCentrum";
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
        Як ми знайшли <span className='highlight'>76 високоякісних</span> потенційних клієнтів для однієї з найкращих студій автомобілебудування
        </h1>
        <h2 className="text-2xl font-semibold mb-8 text-center text-blue-600">
        За допомогою ефективних рекламних кампаній на Meta та Google
        </h2>
        <div className="mb-12">
          <p className="mb-4">
          VCentrum — варшавський сервіс преміум-деталізації, що спеціалізується на високоякісних послугах з ремонту, тюнінгу та чищення автомобілів.</p>
          <p className="mb-4">
          Наша <strong>команда Advantage</strong> проаналізувала ринок автомобільних послуг і помітила рекламу автодеталізації в Google, яка розміщувалася внизу в результатах пошуку та була націлена на низькоякісні ключові слова. Ми вирішили зв’язатися з власниками бізнесу та поговорити про проблеми та можливі рішення. Власник детайлінгового бізнесу Андрій дуже скептично ставився до співпраці з рекламними агентствами через негативний досвід минулого. Однак, <strong>ми розробили персоналізовану маркетингову стратегію</strong> яка не лише вирішила існуючі проблеми, але й запровадила нові рішення та потенційно збільшила прибуток детайлінгового бізнесу, що переконало Андрія дати нам шанс покращити його бізнес.
          </p>.
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4"> Виклики:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              <li>Складнощі із залученням нових клієнтів для послуг преміум-класу</li>
              <li>Ринкова конкуренція</li>
              <li>Отримання менше цільового трафіку</li>
              <li>Втрата проводів</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v3/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Наш підхід:</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Крок</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Дія</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1</td>
                <td className="px-4 py-2">
                Проаналізували цільову аудиторію, конкуренцію та унікальні пропозиції VCentrum.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                Разом з менеджером ми розробили унікальні пропозиції.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                Сформували комплексний маркетинговий план для Meta та Google Ads.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                Створили цікаві відеокреативи, які підсилюють інтерес до VCentrum.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">5</td>
                <td className="px-4 py-2">
                Провели A/B тестування різних гіпотез.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">6</td>
                <td className="px-4 py-2">
                Створили цільові сторінки з позитивними відгуками клієнтів.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-blue-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-blue-700 transition duration-300 ease-in-out animate-bounce">
            Замовте безкоштовну консультацію зараз
            </a>
          </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">Meta ADS: <span className='highlight highlight-blue-300 highlight-variant-5'>( facebook/instagram )</span></h2>
        <p className="mb-8">
        Проаналізувавши активні рекламні кампанії, які були запущені до нашої співпраці, ми знайшли достатньо моментів, які варто виправити. Формат фотокреативів не приніс достатнього результату, тому ми вирішили розробити динамічні відеокреативи, спрямовані на те, щоб подарувати користувачев <strong>свіжі емоції, бажання змін і підтвердження досвіду,</strong> VCentrum через позитивні відгуки клієнтів. Крім того, залучення трафіку до ігрового набору Instagram виявилося успішним рішенням
        </p>
        <p className="text-2xl mb-4 font-semibold">Загальна продуктивність на Meta:</p>
        <div className="mb-8">
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Раніше</h4>
                <ul className="space-y-2">
                  <li><strong>Покази:</strong> 266,457</li>
                  <li><strong>Кліки:</strong> 3 028</li>
                  <li><strong>Кількість лідів:</strong> 9</li>
                  <li><strong>Ціна за ліда:</strong>  676,96 PLN</li>
                  <li><strong>Витрати на рекламу:</strong> 6 092,61 PLN</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-blue-600">
                <h4 className="text-2xl font-bold mb-4 text-blue-600">After</h4>
                <ul className="space-y-2">
                  <li><strong>Покази:</strong> 310 130</li>
                  <li><strong>Кліки:</strong> 9 390</li>
                  <li><strong>Кількість лідів:</strong> 40</li>
                  <li><strong>Ціна за ліда:</strong>  204,16 PLN</li>
                  <li><strong>Витрати на рекламу:</strong> 7 433,72 PLN</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
          Після внесення змін в кампанії кількість кліків і входів зросла, а ціна за лід значно знизилася.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результати:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-blue-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-blue-600 text-white py-2 rounded-t-lg">Раніше</h4>
                    <img src="/img/v3/facebol-detailing-low_ctr.jpg" alt="Before Results Screenshot" onClick={openModalBeforeMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-blue-600 text-white py-2 rounded-t-lg">Після</h4>
                    <img src="/img/v3/facebol-detailing-high_ctr.jpg" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                            Prior to our collaboration
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v3/facebol-detailing-low_ctr.jpg" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>
                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
                            After our cooperation.
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v3/facebol-detailing-high_ctr.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
          <a href="#form" className="bg-blue-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-blue-700 transition duration-300 ease-in-out animate-bounce">
            Замовте безкоштовну консультацію зараз
          </a>
        </div>

        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-4"><span className='highlight highlight-green-200 highlight-variant-5'>Google Ads:</span></h3>
          <p className="mb-4">
          Наші кампанії Google Ads були спрямовані на залучення якісних клієнтів, які активно шукають послуги деталізації у Варшаві.  Ми провели повну <strong>реструктуризацію кампаній,</strong>, створивши окремі кампанії для кожної послуги з використанням цільових ключових слів. За допомогою бази мінус-слів нам вдалося уникнути показу в невідповідних місцях. Виконував оптимізацію ставок і конверсій, змінюючи стратегії для «максимізації конверсій» і збираючи дані.
          </p>
          <p className="text-2xl mb-4 font-semibold">
          Google metrics:
          </p>
          {/* <ul className="list-disc pl-6 mb-4">
            <li>Постоянно добавляли высококачественные, информативные видео, демонстрирующие услуги и опыт Queen of Beauty</li>
            <li>Освещали трансформации клиентов и их отзывы для укрепления доверия</li>
            <li>Взаимодействовали с сообществом TikTok с помощью комментариев, лайков и распространений</li>
          </ul> */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Раніше</h4>
                <ul className="space-y-2">
                  <li><strong>Покази:</strong> 477 191</li>
                  <li><strong>Кліки:</strong> 5 837</li>
                  <li><strong>Кількість лідів:</strong> 7</li>
                  <li><strong>Ціна за ліда:</strong>  847,42 PLN</li>
                  <li><strong>Витрати на рекламу:</strong> 5 932 PLN</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-blue-600">
                <h4 className="text-2xl font-bold mb-4 text-blue-600">After</h4>
                <ul className="space-y-2">
                  <li><strong>Покази:</strong> 588 570</li>
                  <li><strong>Кліки:</strong> 8 463</li>
                  <li><strong>Кількість лідів:</strong> 40</li>
                  <li><strong>Ціна за ліда:</strong>  161,84 PLN</li>
                  <li><strong>Витрати на рекламу:</strong> 6474,28 PLN</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mb-4">
          Після реструктуризації та оптимізації кампаній Google Ads ми збільшили кількість показів і кліків, значно знизили вартість входу та, відповідно, збільшили кількість входів, зберігаючи той самий рівень витрат на рекламу.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результати:</h3>
            <div className="grid grid-cols-1 gap-8 border-2 border-blue-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-blue-600 text-white py-2 rounded-t-lg">Раніше</h4>
                    <img src="/img/v3/stata_google_en_before_case3.jpg" alt="Before Results Screenshot" onClick={openModalBeforeGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-blue-600 text-white py-2 rounded-t-lg">Після</h4>
                    <img src="/img/v3/stata_google_en_after_case3.jpg" alt="After Results Screenshot" onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                </div>

                <Transition appear show={isOpenBeforeGoogle} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModalBeforeGoogle}>
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
                            Prior to our collaboration
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v3/stata_google_en_before_case3.jpg" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>
                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModalBeforeGoogle}
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
                            After our cooperation.
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v3/stata_google_en_after_case3.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
          Завдяки детальному аналізу, формуванню нової структури, <strong>нашій команді вдалося виправити всі проблемні моменти </strong> та застосувати нові рішення, які допомогли залучити нову аудиторію.

          </p>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-blue-600">
              <ul className="space-y-2">
                <li><strong>Кількість лідів:</strong> 76</li>
                <li><strong>Ціна за лід:</strong> 183 PLN</li>
                <li><strong>Витрати на рекламу:</strong> 13 908 PLN</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-blue-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-blue-700 transition duration-300 ease-in-out animate-bounce">
              Замовте безкоштовну консультацію зараз 
            </a>
          </div>
        <p className="mb-8">
        Числа завжди говорять голосніше за слова. Ми використали інформацію та ретельно розроблені маркетингові стратегії в нашому методі, щоб покращити видимість VCentrum Detailing Service онлайн, що призвело до припливу <strong>нових клієнтів</strong>  і значного збільшення доходу. Але не вірте нам на слово – продовжуйте читати, щоб почути наші результати безпосередньо від власника салону.
        </p>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Від боротьби до процвітання: <span className='highlight highlight-blue-300 highlight-variant-5'>відгук власника</span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src="/img/v3/facephoto.jpg" alt="Andrey" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-blue-600" />
            <p className="font-bold text-center">Andrzej</p> 
            <p className="text-center">власник <a href="https://www.vcentrum.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600"><strong><u>VCentrum</u></strong></a></p>
          </div>
          <div className="md:w-2/3 md:px-8">
            <blockquote className="text-xl italic mb-4">"Як власник компанії з автотехніки, я боровся зі стагнацією продажів і низьким попитом на наші послуги. Ці хлопці підійшли з дуже відповідальним підходом, невпинно працюючи над різними стратегіями день у день. Вони не заспокоїлися, доки Ми знайшли те, що дійсно спрацювало. Як тільки ми визначили правильну стратегію, ми навіть не змогли впоратися з притоком нових клієнтів на наступний місяць! Їхня відданість і досвід дійсно змінили мій бізнес."</blockquote>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-blue-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-blue-700 transition duration-300 ease-in-out animate-bounce">
              Замовте безкоштовну консультацію зараз
            </a>
          </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Розвивайте свій бізнес за допомогою<span className='highlight highlight-blue-300 highlight-variant-5'> перевірених стратегій</span></h2>
        <p className="text-center">
        Готові до такої трансформації, як VCentrum? Наше агентство спеціалізується на розробці потужних маркетингових стратегій. Ми будемо тісно співпрацювати з вами, щоб зрозуміти ваші унікальні цілі та розробити індивідуальний план швидкого розвитку вашого салону.
        </p>
        <div className="flex justify-center">
        
        <Formspree />

        </div>
        
        <p className="mt-8 text-center">
        Не пропустіть можливість вивести свій бізнес на новий рівень. <strong>Зв’яжіться з нами сьогодні, щоб отримати безкоштовну консультацію</strong>,щоб дізнатися, як ми можемо допомогти вам досягти значного зростання.
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

export default V3ukPage;