"use client"

import React from 'react';
import { NextPage } from 'next';
import Formspree from "@/components/Formspree";

import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';       

import '@/app/styles.css'
import MessengerButton from '@/components/MessengerButton';

const V1uaPage: NextPage = () => {
  useEffect(() => {
    document.title = "Swan Beauty's Success Story";
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
        Відкрийте для себе секрети  збільшення щомісячних бронювань Swan Beauty <span className='highlight'>на 228%</span>
        </h1>
        <h2 className="text-2xl font-semibold mb-8 text-center text-orange-600">
        Дізнайтеся про унікальні стратегії, які ми використали, щоб зберегти їхній бізнес
        </h2>
        <div className="mb-12">
          <p className="mb-4">
          Знайомтеся з Наталією, власницею салону краси Swan у Берліні, який пропонує лазерну епіляцію, нарощування вій, естетичну медицину, перманентний макіяж тощо. Незважаючи на надання виняткових послуг, Наталія відчувала труднощі залучати нових клієнтів і підтримувати постійний потік бронювань. Зростання салону зупинилося, а традиційні методи маркетингу не приносили результатів.
          </p>
          <p className="mb-4">
          Наталя була у відчаї, і їй довелося негайно вживати заходів, інакше її салон не витримав і виникла загроза закриття. Вона побачила наше оголошення й вирішила спробувати, оскільки ми спеціалізуємося на тому, щоб допомогти салонам краси процвітати на сучасному конкурентному ринку. Наша перевірена система поєднує в собі стратегії на основі даних із глибоким розумінням індустрії краси для досягнення чудових результатів.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Виклики:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              <li>Залучення нових клієнтів на конкурентному ринку</li>
              <li>Зниження попиту на основні послуги</li>
              <li>Низька ефективність існуючих рекламних заходів</li>
              <li>Відсутність відстеження потенційних клієнтів і бронювань через «Booksy”</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v1/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
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
                Провели ретельний аналіз цифрової присутності Swan Beauty, цільової аудиторії та конкуренції.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                  Розробили комплексну стратегію цифрового маркетингу, адаптовану до унікальних потреб і цілей салону.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                  Проводи таргетовані рекламні кампанії у Facebook та Google.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                  Оптимізували сайт салону для пошукових систем та взаємодії з користувачем.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">5</td>
                <td className="px-4 py-2">
                  Запустили маркетингові кампанії електронною поштою, щоб залучити потенційних клієнтів і заохотити повторне бронювання.
                </td>
              </tr>
            </tbody>
          </table>
         
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              Замовте мою безкоштовну консультацію зараз
            </a>
          </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Розкриття секретної формули: <span className='highlight highlight-orange-300 highlight-variant-5'>наша виграшна стратегія</span> для рекламних кампаній Swan Beauty Salon
        </h2>
        <p className="mb-4">
        Агентство Advantage спеціалізується на створенні потужних рекламних кампаній на платформах Meta (Facebook і Instagram) і Google Ads. Наша команда експертів, озброєна багаторічним досвідом і глибоким розумінням індустрії краси, взялася створити виграшну стратегію, яка б не тільки запобігла закриття Swan Beauty, але й побила рекорди бронювань!
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-4 mx-auto">
          <img src="/img/v1/meta.jpg" alt="Meta Ads" className="rounded-lg border-2 md:w-full w-1/2 max-w-none" />
        </div>
        <p className="mb-4">
          Завдяки процесу поглиблених консультацій ми отримали цінну інформацію про унікальні переваги продажу, цільову аудиторію та цілі розвитку салону. Ці знання лягли в основу нашого стратегічного підходу, дозволяючи нам розробляти рекламні кампанії, які резонували б із потенційними клієнтами та забезпечували відчутні результати.
        </p>
        <p>
          Отже, що передбачало нашу секретну формулу? Ми застосували серію перевірених тактик, зокрема:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Переконливий текст оголошення, який продемонстрував досвід та унікальні пропозиції салону</li>
          <li>Привабливі візуальні ефекти та відео, які зупиняють скролерів</li>
          <li>Точне націлювання для охоплення ідеальної клієнтури салону на основі демографічних показників, інтересів і поведінки</li>
          <li>Неймовірні пропозиції та акції, які заохочують до негайного бронювання</li>
          <li>Постійна оптимізація та A/B-тестування для вдосконалення ефективності реклами та максимізації рентабельності інвестицій</li>
        </ul>
        <p>
          Використовуючи ці стратегії в Meta Ads і Google Ads, ми були впевнені, що зможемо залучати постійний потік нових клієнтів до Swan Beauty Salon. Результати здивували навіть нас! Продовжуйте читати, щоб дізнатися чому.
        </p>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">Наука успіху: <span className='highlight highlight-orange-300 highlight-variant-5'>глибоке занурення в наші методи</span></h2>
        <p className="mb-8">
         Маючи чітку стратегію, настав час реалізувати наш план. Наша команда експертів, закотивши рукави,  взялася до роботи, застосовуючи низку перевірених методів у Meta Ads, Google Ads і наших консультаційних служб. Давайте детальніше розглянемо, як ми втілили в життя цифровий маркетинг Swan Beauty Salon.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8"><span className='highlight highlight-blue-200 highlight-variant-5'>Meta Ads:</span> залучення аудиторії у Facebook та Instagram</h3>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">До</h4>
                <ul className="space-y-2">
                  <li><strong>Дата:</strong> 4 листопада - 4 грудня</li>
                  <li><strong>Витрати на рекламу:</strong> $2,464.74</li>
                  <li><strong>Переходи за посиланням:</strong> 1,768</li>
                  <li><strong>CTR:</strong> 0.73%</li>
                  <li><strong>Нові бронювання:</strong> ≈ 39</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-orange-600">
                <h4 className="text-2xl font-bold mb-4 text-orange-600">Після</h4>
                <ul className="space-y-2">
                  <li><strong>Дата:</strong> 4 січня - 4 лютого</li>
                  <li><strong>Витрати на рекламу:</strong> $2,068.81</li>
                  <li><strong>Переходи за посиланням:</strong> 5,539</li>
                  <li><strong>CTR:</strong> 2.70%</li>
                  <li><strong>Нові бронювання:</strong> 128</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
          Замість того, щоб просто розширювати дописи через Instagram, як вони робили раніше, ми перейшли на інформаційну панель Ads Manager, яка що дозволило нам цілитися більш точно і з належним відстеженням.
Наші метарекламні кампанії були розроблені, щоб привернути увагу потенційних клієнтів, які прокручують їхні стрічки у Facebook та Instagram. Ми створили переконливу рекламну копію та привабливі візуальні матеріали, які демонстрували унікальні пропозиції та акції салону.
          </p>
          <div className="p-4 flex flex-col md:flex-row items-center mb-8 border-4 border-gray-300 border-dashed rounded-lg">
            <div className="md:w-1/3 md:pr-8 mb-4 md:mb-0 text-center">
              <p><b>CTRs наших нових оголошень:</b></p>
              <img src="/img/v1/ctr.jpg" alt="CTR Comparison" className="mx-auto border border-gray-300 rounded-lg shadow-md" />
            </div>
            <div className="md:w-2/3">
              <p className="text-2xl font-bold">
              Завдяки нашим цільовим кампаніям Meta Ads ми успішно підвищили рейтинг кліків (CTR) на вражаючі 450% (з 0,9% до 5,09%), що призвело до значного зростання відвідуваності веб-сайту та бронювань салонів.
              </p>
            </div>           
          </div>
          <p className="mb-4"><b>Дії, які ми вжили:</b></p>
          <ul className="list-disc pl-6 mb-4">
            <li>Розробили нові рекламні кампанії в Facebook Ads Manager для кращого керування й аналізу</li>
            <li>Створили попередню цільову сторінку з цікавою історією, щоб оптимізувати піксель Facebook і заохотити бронювання</li>
            <li>Налаштували кампанії для повідомлень у Messenger та Instagram Direct зі спеціально підготовленими текстами</li>
            <li>Зібрали близько 10 000 користувачів Instagram, зацікавлених в акаунтах конкурентів, щоб сформувати цільову аудиторію</li>
          </ul>  

          <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
             Замовте безкоштовну консультацію зараз
            </a>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результати:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-orange-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">Перед нашою роботою</h4>
                    <img src="/img/v1/stata_fb_en_before_case1.jpg" alt="Before Results Screenshot" onClick={openModalBeforeMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">Після нашої роботи</h4>
                    <img src="/img/v1/stata_fb_en_after_case1.jpg" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                             Перед нашою роботою
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v1/stata_fb_en_before_case1.jpg" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
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
                             Після нашої роботи
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v1/stata_fb_en_after_case1.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
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
                <h4 className="text-2xl font-bold mb-4 text-gray-600">До</h4>
                <ul className="space-y-2">
                  <li><strong>Дата:</strong> 4 листопада - 4 грудня</li>
                  <li><strong>Ціна за результат:</strong> $24.38</li>
                  <li><strong>Переходи за посиланням:</strong> 600</li>
                  <li><strong>CTR:</strong> 0.73%</li>
                  <li><strong>Конверсії веб-сайту:</strong> 4</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-orange-600">
                <h4 className="text-2xl font-bold mb-4 text-orange-600">Після</h4>
                <ul className="space-y-2">
                  <li><strong>Дата:</strong> 4 січня - 4 лютого</li>
                  <li><strong>Ціна за результат:</strong> $2.95</li>
                  <li><strong>Переходи за посиланням:</strong> 1,030</li>
                  <li><strong>CTR:</strong> 19.67%</li>
                  <li><strong>Конверсії веб-сайту:</strong> 98</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
           Наші кампанії Google Ads були зосереджені на охопленні потенційних клієнтів, які активно шукають послуги краси в Берліні. Ми запровадили низку методів оптимізації, щоб Swan Beauty Salon з’являвся у верхній частині результатів пошуку.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Реструктуризували кампанії, створивши окремі кампанії для кожної служби з націленими ключовими словами</li>
            <li>Проаналізували та відфільтрували небажані ключові слова, щоб підвищити релевантність оголошення</li>
            <li>Інтегрували Calendly для онлайн-планування зустрічей і синхронізація з календарем Booksy</li>
            <li>Оптимізували ставки та конверсії шляхом зміни стратегій для «максимізації конверсій» і збору даних</li>
            <li>Створили кампанії з максимальною ефективністю, щоб отримати максимальні результати в рекламних каналах Google</li>
          </ul>

          <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
             Замовте мою безкоштовну консультацію зараз
            </a>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результати:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-orange-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">Перед нашою роботою</h4>
                    <img src="/img/v1/stata_google_en_before_case1.jpg" alt="Before Results Screenshot" onClick={openModalBeforeGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">Після нашої роботи</h4>
                    <img src="/img/v1/stata_google_en_after_case1.jpg" alt="After Results Screenshot" onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                             Перед нашою роботою
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v1/stata_google_en_before_case1.jpg" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
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
                              Після нашої роботи
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v1/stata_google_en_after_case1.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
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

        <p className="mb-8">
        Цифри завжди говорять більше, ніж слова. Ми використали інформацію та ретельно розроблені плани цифрового маркетингу, щоб покращити видимість Swan Beauty Salon в Інтернеті, що призвело до різкого збільшення кількості нових клієнтів та значного зростання їхніх прибутків.
          </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4"><span className='highlight highlight-violet-200 highlight-variant-5'>Консультаційні послуги:</span> персоналізовані стратегії успіху</h3>
          <p className="mb-4">
           Наші консультаційні послуги відіграли вирішальну роль в успіху цифрового маркетингу Swan Beauty Salon. Ми тісно співпрацювали з власником салону, щоб зрозуміти його унікальні потреби, цілі та цільову аудиторію.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Провели  детальний аналіз сайту салону, виявивши технічні проблеми та можливості для вдосконалення</li>
            <li>Розробили нову цільову сторінку з чіткою інформацією, новими пропозиціями та візуально привабливим дизайном.</li>
            <li>Надали вказівки щодо створення привабливого відеовмісту та оптимізації розміщення оголошень.</li>
            <li>Запропонували постійну підтримку та стратегічні поради для забезпечення довгострокового успіху.</li>
          </ul>
        </div>

        <p>Стратегічно поєднавши ці тактики в Meta Ads, Google Ads і наших експертних консультаційних послугах, ми створили ефективний план цифрового маркетингу, який допоміг Swan Beauty Salon досягти великих успіхів, як ніколи раніше. Результати говорять самі за себе: приголомшливе <strong>збільшення нових бронювань на 228,21%!</strong> </p> 

        <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
            Замовте мою безкоштовну консультацію зараз
            </a>
          </div>
        
        <p className="mt-4">
        Але це лише початок цієї трансформаційної подорожі. Продовжуйте читати, щоб розкрити весь масштаб нашого впливу та дізнатися, як ми можемо допомогти вашому салону краси досягти подібних приголомшливих результатів. Повірте нам, ви не захочете пропустити те, що буде далі!
        </p>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-4 pb-4 pt-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Від боротьби до процвітання: <span className='highlight highlight-orange-300 highlight-variant-5'>Відгук власнийці салону</span></h2>
        <div className="text-xl mb-8 ">
          <div className="mb-4 text-center">
            <img src="/img/v1/facephoto.png" alt="Natalia" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-orange-600" />
            <p className="font-bold ">Наталія</p>
            <p>Власниця <a href="https://www.swan-beauty.de/en/home/" target="_blank" rel="noopener noreferrer" className="text-orange-600"><strong><u>Swan Beauty Salon</u></strong></a></p>
          </div>
          <div className="md:px-8">
            <blockquote className="text-xl italic">
            «До роботи з Advantage Agency я перебувала у справді безвихідній ситуації. За останні 4 місяці кількість бронювань у моєму салоні значно зменшилася. Я підрахувала, що з моїми заощадженнями, які зменшуються, я зможу підтримувати роботу салону ще 2 місяці, якщо продажі не вдасться покращити. Бізнес моєї мрії <strong>був на межі повного закриття.</strong>
            </blockquote>
            <p className="mt-4">
            Коли я звернулась до Advantage Agency, у мене були великі очікування, тому що на кону стояв увесь мій бізнес. Зараз, озираючись назад, я розумію, наскільки важливим було це рішення. Якби я вибрала інше агентство, яке не могло б дати результатів, це міг би бути кінець.
            </p>
            <p className="mt-4">
             Команда Advantage Agency має неймовірне розуміння індустрії краси. 
             Те, що вони змогли зробити для Swan Beauty, було не чим іншим, як дивом. Вони <strong>збільшили кількість наших нових бронювань</strong> більш ніж на 228%!
            </p>
            <p className="mt-4">
            Я не можу їм віддячити. Мені тільки шкода, що я не знайшла Вас раніше - це врятувало б мене від стільки стресу та хвилювань про втрату мого салону.
            </p>
            <p className="mt-4">
            Тепер мій потік нових клієнтів стабільний, і я можу зосередитися на розширенні салону, а не думати, як його зберегти. Дівчата з Advantage Agency справді врятували мій бізнес і дозволили моїй мрії продовжитися».
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
            Замовте безкоштовну консультацію зараз
            </a>
          </div>

      <section className="bg-white py-2 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl lg:tracking-tight text-center mb-12">
           Навіщо довіряти успіх свого салону краси агентству Advantage?
          </h2>
          <div className="mt-10 flex justify-center overflow-x-auto">
            <table className="table-auto border-collapse w-full min-w-full sm:min-w-0">
              <thead>
                <tr>
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2 bg-gray-600 text-white font-bold uppercase tracking-wider">Інші агентства</th>
                  <th className="px-4 py-2 bg-orange-600 text-white font-bold uppercase tracking-wider">Advantage Agency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Галузева експертиза</td>
                  <td className="border px-4 py-2">Загальний маркетинговий підхід</td>
                  <td className="border px-4 py-2 bg-orange-100">Спеціалізується на маркетингу салонів краси</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Перевірені результати</td>
                  <td className="border px-4 py-2">Непослідовні результати</td>
                  <td className="border px-4 py-2 bg-orange-100">Перевірені тематичні дослідження з вимірною рентабельністю інвестицій</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Прозора звітність</td>
                  <td className="border px-4 py-2">Нечіткі звіти та показники</td>
                  <td className="border px-4 py-2 bg-orange-100">Детальна панель звітів у реальному часі</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Стратегічне партнерство</td>
                  <td className="border px-4 py-2">Oднакові рішення</td>
                  <td className="border px-4 py-2 bg-orange-100">Спеціальні стратегії для ваших унікальних цілей</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Комплексні послуги</td>
                  <td className="border px-4 py-2">Обмежені пропозиції послуг</td>
                  <td className="border px-4 py-2 bg-orange-100">Повний спектр цифрових маркетингових рішень</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Проактивна оптимізація</td>
                  <td className="border px-4 py-2">Підхід «встанови й забудь»</td>
                  <td className="border px-4 py-2 bg-orange-100">Постійне тестування та оптимізація</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Спеціальна підтримка</td>
                  <td className="border px-4 py-2">Не реагують або діють повільно</td>
                  <td className="border px-4 py-2 bg-orange-100">Спеціальний менеджер, оперативне обслуговування</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Статистика галузі</td>
                  <td className="border px-4 py-2">Застаріла тактика</td>
                  <td className="border px-4 py-2 bg-orange-100">Інноваційні рішення та останні модні тенденції салонної індустрії</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      


        <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Готові <span className='highlight highlight-orange-300 highlight-variant-5'>змінити свій салон краси?</span></h2>
        <p className="text-center">
        Подивіться, як наші ефективні методи цифрового маркетингу можуть допомогти вашому салону краси розвиватися та досягати успіху, ніж будь-коли. Заплануйте безкоштовну консультацію сьогодні та дізнайтеся, як ми можемо допомогти вам досягти зростання, якого ви завжди мріяли.
        </p>
        <div className="flex justify-center">
        
        <Formspree />
        {/* <CalendlyEmbed url="https://calendly.com/d/cn6d-c6t-vy7?primary_color=ea580c" /> */}

        </div>

        <p className="mt-8 text-center">
        Не пропустіть цю можливість розкрити справжній потенціал свого салону. На даний момент <strong>ми можемо прийняти не більше 3 нових клієнтів,</strong> тому переконайтеся, що ваша історія буде наступною, і зробіть перший крок до трансформації свого бізнесу, зв’язавшись з нами через Messenger або замовивши дзвінок.
        </p>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Зв'яжіться з Нами</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Телефонуйте Нам</p>
              <p className="text-orange-600 text-xl">+1 (929) 205-26-10</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Напишіть Нам</p>
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

      <MessengerButton
        link="https://m.me/100006500822716"
        text="Chat with us on Messenger"
      />
    </div>
  );
};

export default V1uaPage;