"use client"

import React from 'react';
import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';       

import '@/app/styles.css'
import MessengerButton from '@/components/MessengerButton';
import Formspree from '@/components/Formspree';
import CasesFooter from '@/components/CasesFooter';

const V9ukPage: NextPage = () => {
  useEffect(() => {
    document.title = "Sten Engineering Success Story";
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
        Як ми збільшили кількість потенційних клієнтів і дзвінків на <span className='highlight'>264%</span> для Sten Engineering
        </h1>
        {/* <h2 className="text-2xl font-semibold mb-8 text-center text-orange-600">
        Дізнайтеся про унікальні стратегії, які ми використали, щоб зберегти їхній бізнес
        </h2> */}
        <div className="mb-12">
          <p className="mb-4">
         Знайомтесь, Євген - <strong className='text-orange-500'>власник компанії з будівництва житлових будинків у Лос-Анджелесі,</strong> більше 5 років на ринку. Його компанія пропонує широкий спектр послуг з будівництва, таких як: фундамент та підпірні конструкції, реконструкція та добудова житлових будинків, дизайн інтер’єру, дизайн патіо та інше. Незважаючи на бездоганну якість обслуговування, Євген зіткнувся з проблемою <u>залучення нових клієнтів</u> та медіа-поширеності компанії в Інтернеті. Зростання компанії зупинилося, а маркетинг був слабкою ланкою в бізнесі.
          </p>
          <p className="mb-4">
          Євген багато чого пробував і був у відчаї. Він розумів, що якщо не вжити рішучих заходів, компанія опинилася під загрозою закриття. І тут він побачив нашу рекламу. <strong>Через наш досвід у житловому будівництві Євген невдовзі вирішив довіритися нам.</strong> Наша перевірена система поєднує в собі стратегії, засновані на глибокому аналізі даних, із бездоганним розумінням галузі. Це дозволяє нам досягати вражаючих результатів.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Виклики:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              <li>Залучення нових клієнтів на конкурентному ринку</li>
              <li><u>Зменшення попиту</u> на послуги з виликими чеками</li>
              <li>Низька ефективність існуючих рекламних зусиль</li>
              <li>Дуже висока вартість на одного клієнта</li>
            </ul>
            
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v9/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Наш підхід:</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Крок</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Дія</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1</td>
                <td className="px-4 py-2">
                  Провели ретельний аналіз онлайн-присутності Sten Engineering, цільової аудиторії та конкурентів.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                  Була розроблена комплексна маркетингова онлайн-стратегія, адаптовану до унікальних потреб і цілей компанії.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                  Оптимізували сайт для пошукових систем. Редизайн, спрямований на збільшення конверсій.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                  Запустили маркетингові кампанії електронною поштою, щоб залучити клієнтську базу.
                </td>
              </tr>
            </tbody>
          </table>
         
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              Замовте безкоштовну консультацію зараз
            </a>
          </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4 text-center">
          <span className='highlight highlight-orange-300 highlight-variant-5'>Наша унікальна стратегія</span> рекламних кампаній Sten Engineering
        </h2>
        <p className="mb-4">
          Агентство Advantage спеціалізується на створенні вірусних рекламних кампаній на платформах Meta (Facebook та Instagram) та Google Ads. Наша команда експертів із досвідом і глибоким розумінням рекламної індустрії<strong> створила нову стратегію,</strong> яка покращила впізнаваність бренду та залучила нових клієнтів для Sten Engineering
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-4 mx-auto">
          <img src="/img/v1/meta.jpg" alt="Meta Ads" className="rounded-lg border-2 md:w-full w-1/2 max-w-none" />
        </div>
        <p className="mb-4">
         Завдяки детальному аудиту кампанії та консультаціям із Sten Engineering ми отримали цінну інформацію про унікальні сильні сторони кампанії, цільову аудиторію та цілі розвитку.  Ці знання стали основою нашого стратегічного підходу, дозволяючи нам розробляти кампанії,<strong>які резонували б із потенційними клієнтами</strong> та сприяли відчутним результатам.
        </p>
        <p>
          Ми застосували низку перевірених тактик, зокрема:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Створили рекламні відеореклами, розповідаючи історії та будуючи воронки з метою залучення потенційних клієнтів</li>
          <li>Підкреслили впізнаваність бренду в рекламі</li>
          <li>Точне націлювання для <strong>залучення ідеальних клієнтів</strong> для житлових інженерних послуг на основі демографічних показників, інтересів і поведінки</li>
          <li>Пропозиції та рекламні акції, які спонукають до негайних дій - "реєструйся якомога швидше"</li>
          <li>Постійна оптимізація та A/B тестування для підвищення ефективності реклами та максимізації рентабельності інвестицій</li>
        </ul>
        <p>
          Використовуючи ці стратегії в Meta Ads і Google Ads, ми були впевнені в нашій спроможності забезпечити постійний потік нових клієнтів і підвищити впізнаваність бренду
        </p>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">Глибоке занурення в наші методи</h2>
        <p className="mb-8">
          Маючи чітку стратегію, настав час реалізувати наш план. Наша команда експертів закотила рукави та взялася до роботи, застосовуючи низку перевірених методів у Meta Ads та Google Ads.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8"><span className='highlight highlight-blue-200 highlight-variant-5'>Meta Ads:</span> залучення аудиторії у Facebook та Instagram</h3>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Раніше</h4>
                <ul className="space-y-2">
                  <li><strong>Дата:</strong> 2 лютого – 2 березня</li>
                  <li><strong>Витрати на рекламу:</strong> $2,567.79</li>
                  <li><strong>Переходів за посиланням:</strong> 381</li>
                  <li><strong>CTR:</strong> 0.66%</li>
                  <li><strong>Ліди:</strong> 3</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-orange-600">
                <h4 className="text-2xl font-bold mb-4 text-orange-600">Після</h4>
                <ul className="space-y-2">
                  <li><strong>Дата:</strong> 2 березня – 2 квітня</li>
                  <li><strong>Витрати на рекламу:</strong> $3,085.31</li>
                  <li><strong>Переходів за посиланням:</strong> 1,573</li>
                  <li><strong>CTR:</strong> 1.96%</li>
                  <li><strong>Ліди:</strong> 11</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
            Замість того, щоб просто просувати публікацію через Instagram, як це робили раніше, ми перейшли на інформаційну панель Ads Manager, яка дозволила нам точніше налаштовувати рекламу та відстежувати її.
          </p>
          <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              Замовте безкоштовну консультацію зараз
            </a>
          </div>
          <p className="mb-4">
            Наші рекламні кампанії в Meta були розроблені, щоб привернути увагу потенційних клієнтів, які прокручують стрічку в Facebook та Instagram. Ми розробили привабливий рекламний текст та візуальну рекламу, <strong>яка демонструвала унікальні пропозиції кампанії та вражаючі кадри, які могли зачіпити будь-якого користувача,</strong>  який цікавиться послугами будівництва
          </p> 
         

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результат:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-orange-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">Перед нашою роботою</h4>
                    <img src="/img/v9/stata_fb_en_before_case1.jpg" alt="Before Results Screenshot" onClick={openModalBeforeMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">Після нашої роботи</h4>
                    <img src="/img/v9/stata_fb_en_after_case1.jpg" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                              Before Our Work
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v9/stata_fb_en_before_case1.jpg" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
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
                              After Our Work
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v9/stata_fb_en_after_case1.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Раніше</h4>
                <ul className="space-y-2">
                  <li><strong>Дата:</strong>  2 лютого – 2 березня</li>
                  <li><strong>Ціна за результат:</strong> $497.22</li>
                  <li><strong>Переходів за посиланням:</strong> 107</li>
                  <li><strong>CTR:</strong> 2.53%</li>
                  <li><strong>Конверсії з веб-сайту:</strong> 6</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-orange-600">
                <h4 className="text-2xl font-bold mb-4 text-orange-600">Після</h4>
                <ul className="space-y-2">
                  <li><strong>Дата:</strong> 2 березня – 2 квітня</li>
                  <li><strong>Ціна за результат:</strong> $214.94</li>
                  <li><strong>Переходів за посиланням:</strong> 182</li>
                  <li><strong>CTR:</strong> 5.15%</li>
                  <li><strong>Конверсії з веб-сайту:</strong> 15</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
          Наші кампанії Google Ads були спрямовані на залучення потенційних клієнтів, які активно шукають послуги з будівництва житлових будинків у Лос-Анджелесі. Ми застосували ряд методів оптимізації, щоб вивести <strong>Sten Engineering на перше місце в результатах пошуку</strong>.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Реструктуризація кампаній шляхом створення окремих кампаній для кожної послуги з цільовими ключовими словами</li>
            <li>Проаналізували та виключили слова, щоб підвищити релевантність оголошення</li>
            <li>Оптимізували ставки та конверсії шляхом зміни стратегій для «максимізації конверсій» і збору даних</li>
            <li>Створили кампанії з максимальною ефективністю, щоб отримати максимальні результати в рекламних каналах Google</li>
          </ul>

          <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              Замовте безкоштовну консультацію зараз
            </a>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результат:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-orange-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">Перед нашою роботою</h4>
                    <img src="/img/v9/stata_google_en_before_case1.jpg" alt="Before Results Screenshot" onClick={openModalBeforeGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">Після нашої роботи</h4>
                    <img src="/img/v9/stata_google_en_after_case1.jpg" alt="After Results Screenshot" onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                              Before Our Work
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v9/stata_google_en_before_case1.jpg" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
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
                              After Our Work
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v9/stata_google_en_after_case1.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
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
            Наші консультаційні послуги зіграли велику роль в успіху онлайн-маркетингу Sten Engineering. <strong>Ми тісно співпрацювали</strong> власником компанії, щоб зрозуміти унікальні потреби, цілі та цільову аудиторію...
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Був проведений детальний аналіз веб-сайту, виявивши технічні проблеми та можливості для вдосконалення</li>
            <li><u>Розробили нову цільову сторінку</u> з чіткою інформацією, новими пропозиціями та візуально привабливим дизайном</li>
            <li>Надали рекомендації щодо створення привабливого відеоконтенту та оптимізації розміщення реклами</li>
            <li>Надали постійну підтримку та стратегічне керівництво для забезпечення довгострокового успіху</li>
          </ul>
        </div>

        <p>
          Завдяки комбінації цих тактик із використанням Meta Ads, Google Ads і консалтингових послуг, <strong>ми створили потужний онлайн-маркетинговий план</strong> який допоміг Sten Engineering досягти успіху.
        </p>
      </section>

      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center"><span className='highlight highlight-orange-300 highlight-variant-5'>Відгук власника компанії</span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src="/img/v9/facephoto.webp" alt="Owner" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-orange-600" />
            <p className="font-bold text-center">Євген Наговіцин</p> 
            <p className="text-center">Власник компанії <a href="https://lastructuralengineer.com" target="_blank" rel="noopener noreferrer" className="text-orange-600"><strong><u>Sten Engineering</u></strong></a></p>
          </div>
          <div className="md:w-2/3 md:px-8">
            <blockquote className="text-xl italic mb-4">
              «До роботи з Advantage Agency нашим маркетингом займалися два маркетологи. Ми добре співпрацювали з хлопцями, і вони приносили певні результати. Але для наших амбітних планів і швидкого зростання їхньої майстерності було недостатньо. Дякуємо команді Advantage за ініціативу, допомогу в багатьох питаннях і виведення нашого маркетингу на новий рівень. Тепер ми маємо чітке бачення того, як розвивати наш маркетинг далі».
            </blockquote>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
        <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
          Замовте безкоштовну консультацію зараз
        </a>
      </div>
      
      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Готові  <span className='highlight highlight-orange-300 highlight-variant-5'>трансформувати свою компанію?</span></h2>
        <p className="text-center">
        Подивіться, як наші ефективні методи цифрового маркетингу можуть допомогти вашій компанії розвиватися та досягати успіху як ніколи раніше. Заплануйте безкоштовну консультацію сьогодні та дізнайтеся, як ми можемо допомогти вам досягти зростання, якого ви завжди мріяли.
        </p>
        <div className="flex justify-center">

        <Formspree/>
        {/* <CalendlyEmbed url="https://calendly.com/d/cn6d-c6t-vy7?primary_color=ea580c" /> */}

        </div>

        <p className="mt-8 text-center">
        Не пропустіть цю можливість розкрити справжній потенціал вашої компанії. На даний момент <strong>ми можемо прийняти не більше 3 нових клієнтів,</strong>тому переконайтеся, що ваша історія буде наступною, і зробіть перший крок до трансформації свого бізнесу, зв’язавшись з нами через Messenger або замовивши дзвінок.
        </p>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Зв'яжіться з нами</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Телефонуйте нам</p>
              <p className="text-orange-600 text-xl">+1 (929) 205-26-10</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Напишіть нам</p>
              <a className="text-orange-600 text-xl" href='mailto:stepan@advantage-agency.co'>stepan@advantage-agency.co</a>
            </div>
            {/* <div className="text-center">
              <p className="text-lg font-bold mb-2">Visit Our Website</p>
              <a href="https://advantage-agency.co/" target="_blank" rel="noopener noreferrer" className="text-orange-600 text-xl hover:underline">
                advantage-agency.co
              </a>
            </div> */}
          </div>
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

export default V9ukPage;
