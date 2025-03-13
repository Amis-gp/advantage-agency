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

const V10ukPage: NextPage = () => {
  useEffect(() => {
    document.title = "93 Leads for Tax Course in Canada";
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
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
        <span className='highlight'>93 Ліди</span> для курсу по оподаткуванню в Канаді
        </h1>
        <div className="mb-12">
          <p className="mb-4">
          Всім привіт, з вами <strong>Марко</strong> - Team Lead по таргетованій рекламі в <strong>ADvantage Agency</strong>. На початку кейса розкажу трішки про клієнта: <span className='text-red-600'><strong>Tax Canada Accounting</strong></span>  це бухгалтерська фірма, яка спеціалізується на податковій допомозі, фінансових консультаціях, вебінарах і навчальних програмах для професіоналів-початківців у Канаді.
          </p>
          <p className="mb-4">Наша подорож почалася з комплексного аналізу та стратегічного підходу до унікальних потреб клієнта.
          </p>
          <p className="mb-4">У конкурентній сфері бухгалтерських і фінансових послуг основною метою реклами є отримання якісних лідів і перетворення їх на покупців. Нам потрібно було розробити стратегію, яка б  <strong>пропонувала вирішення проблем ЦА</strong>(цільової аудиторії), продемонструвала унікальність оффера та досвід Tax Canada. Також, важливо правильно налаштувати таргет на потрібну аудиторію в Ads Manager і в самих рекламних оголошеннях.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Виклики:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2 mr-8">
              <li>Обмежена ефективність органічної діяльності в соціальних мережах</li>
              <li>Не реалістичне масштабування бізнесу</li>
              <li>Необхідність глибокого аналізу цільової аудиторії та ринку</li>
              <li>Необхідність налаштування таргетованої реклами</li>
              <li>Створення ефективної маркетингової воронки</li>
              <li>Розробка стратегії онлайн-курсу</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v10/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="flex justify-center w-full mt-14 mb-8 text-center">
          <a href="#form" className="bg-red-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
           Замовте безкоштовну консультацію зараз
          </a>
        </div>
        <div className="mb-12">
          <p className="mb-4">
            Наша команда використовує в роботі <strong>Facebook Ads Manager</strong>, що дозволяє нам показувати рекламу одночасно на трьох основних платформах: Facebook, Instagram і Messenger. Ми маємо можливість створювати різні комбінації аудиторій, враховуючи етапи воронки продажів, вік, стать, взаємодія, географічне розташування, інтереси та теплі аудиторії користувачів.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Наш підхід:</h2>
          <p className="mb-4">
          На початку нашої співпраці ми вирішили зупинитися на одній із пропозицій: клієнт вирішив просувати онлайн-курс, оскільки навчання мало розпочатися незабаром, але учасників було дуже мало.
          </p>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-red-500 to-red-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Крок</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Дія</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1.</td>
                <td className="px-4 py-2">
                Налаштовували рекламні кампанії та відстеження покупки за допомогою пікселя Facebook.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2.</td>
                <td className="px-4 py-2">
                Написали кілька версій рекламних текстів, які резонували з цільовою аудиторією.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3.</td>
                <td className="px-4 py-2">
                Ми знайшли цільову аудиторію (5 тисяч контактів) за допомогою скриптів, які допомагають витягувати контакти з Instagram, LinkedIn, Facebook Groups та інших джерел. Це дозволило нам показувати рекламу лише зацікавленим користувачам.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4.</td>
                <td className="px-4 py-2">
                Оптимізували рекламні кампанії протягом 2-4 тижнів. Аналізували оголошення конкурентів, звіти про вік, стать, місця розташування, пристрої та ефективність груп оголошень.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
          <a href="#form" className="bg-red-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
          Замовте безкоштовну консультацію зараз
          </a>
        </div>
      </section>

      <section className="mb-8 mt-8">
      <h2 className="text-3xl font-bold mb-4">Залучення цільової аудиторії <span className='highlight highlight-red-300 highlight-variant-5'>( підхід, керований даними )</span></h2>
        <p className="mb-4">
          Наша команда має спеціально розроблені скрипти які допомагають отримувати контактну інформацію з різних джерел, таких як <strong> Instagram, LinkedIn, Facebook</strong>, та інших сайтів. Ми почали пошук нашої цільової аудиторії
        </p>
        <p className="mb-4">
        У цьому кейсі це були люди які: 
          <br/>- бажають отримати базові знання для подання фінансової звітності, 
          <br/>- прагнуть опанувати цю професю для працевлаштування,
          <br/>- розглядають варіант відкрити власну бухгалтерську фірму.
        </p>
        <p className="mb-12">
          Ми витягнули цільову контактну базу <strong>з 5000 осіб</strong>, відформатували її відповідним чином і підготували для завантаження у Facebook. Що ми цим змогли досягнути? Тепер ми можемо показувати наші оголошення виключно користувачам, які виявили певний рівень інтересу до бухгалтерського обліку, це значно  <strong>звужує націлювання</strong> та відфільтровує більшість користувачів. Крім того, це дозволяє нам створювати <strong>схожі аудиторії</strong> ,подібні до нашої цільової аудиторії.
        </p>

        <div className="mb-8">
          
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-red-600 mx-auto md:w-1/2">
              <h4 className="text-2xl font-bold mb-4 text-red-600">Результати нашої роботи</h4>
              <ul className="space-y-2">
                <li><strong>Переглядів:</strong> 238 544</li>
                <li><strong>Кліки:</strong> 1 728 </li>
                <li><strong>Кількість лідів:</strong> 93</li>
                <li><strong>Ціна за лід:</strong>  $37.69</li>
                <li><strong>Витрати на рекламу:</strong> $3 108</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результати:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-red-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-red-600 text-white py-2 rounded-t-lg">Після нашої співпраці</h4>
                    <img src="/img/v10/fb-after-case-10.webp" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                            After our cooperation
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v10/fb-after-case-10.webp" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
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
          <a href="#form" className="bg-red-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
            Замовте безкоштовну консультацію зараз
          </a>
        </div>
      </section>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8">Виведіть свій бізнес на новий рівень за допомогою <span className='highlight highlight-red-300 highlight-variant-5'>перевірених стратегій</span></h2>
        <p className="mb-4">
        Якщо ви дочитали до цього місця, це означає, що ви шукаєте надійного партнера, який буде щодня допомагати з вашими маркетинговими потребами. Це дозволить вам зосередитися на вашому:
        </p>
        <ul className="list-disc mb-6 ml-6">
          <li><strong>Бренду</strong></li>
          <li><strong>Масштабуванні</strong></li>
          <li><strong>Збільшенню прибутку</strong></li>
        </ul>
        <p className="">
        Заповніть форму нижче, і ми зв'яжемося з вами найближчим часом, щоб спільно розробити стратегію та бачення просування вашого бізнесу в Інтернеті.

        </p>
        <div className="flex justify-center">
        
        <Formspree />
        
        </div>
        <p className="mt-8 text-center">
        Не пропустіть можливість вивести свій бізнес на новий рівень. Зв'яжіться з нами сьогодні, <strong>щоб отримати безкоштовну консультацію</strong> та дізнатися, як ми можемо допомогти вам досягти значного зростання
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

export default V10ukPage;