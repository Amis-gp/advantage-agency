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

const V7uaPage: NextPage = () => {
  useEffect(() => {
    document.title = "30+ Sales per day thanks to our e‑commerce strategies!";
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
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
        <span className='highlight'>30+</span>  продажів на день завдяки нашим  <u> стратегіям електронної комерції!</u>
        </h1>
        <div className="mb-12">
          <p className="mb-4">
          <span className='text-emerald-600'><strong>Pawty Dog Toys</strong></span> -це креативний інтернет-магазин, який спеціалізується на товарах для домашніх тварин.
          </p>
          <p className="mb-4">Компанія спеціалізується на екологічно чистих товарах для тварин, демонструючи відповідальне ставлення до навколишнього середовища. Їхнім першим продуктом став інноваційний лежак, що запобігає розгризанню собаками. Всі товари мають <strong>екологічні</strong> характеристики - вони виготовляються з перероблених пластикових пляшок та подрібнених залишків піни, що забезпечує безвідходне виробництво.</p>
          <p className="mb-4">В електронній комерції основною метою реклами є онлайн-продажі без прямого контакту з клієнтом, тому ми повинні будувати нашу стратегію таким чином, <strong>щоб спростити шлях клієнта</strong> до покупки та відповісти на всі можливі запитання та заперечення, які можуть виникнути, щоб клієнт оплачував товар відразу на сайті. Ми експерти в цьому, тому читайте далі, щоб дізнатися, як ми досягли таких потужних результатів.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Виклики:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2 mr-8">
              <li>Збиткові рекламні кампанії у Facebook</li>
              <li>Висока вартість продажу</li>
              <li><strong>Складнощі з розширенням через</strong> збільшення високої вартості продажу</li>
              <li>Класичний підхід до реклами не спрацював</li>
              <li>Антирекорд продажів за останні 60 днів</li>
              <li>Відстеження конверсій FB не працювало</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v7/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Наш підхід:</h2>
          <p className="mb-4">
            Після консультацій із власниками Pawty Dog Toys ми запропонували покроковий план дій, який би переломив ситуацію та врахував усі індивідуальні потреби бренду.
          </p>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Крок</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Дія</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1.</td>
                <td className="px-4 py-2">
                Ми проаналізували цільову аудиторію, конкуренцію та унікальні пропозиції Pawty Dog Toys.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2.</td>
                <td className="px-4 py-2">
                Знайдено 20 тисяч контактів (власників собак)
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3.</td>
                <td className="px-4 py-2">
                Разом з власником ми розробили унікальні пропозиції, акції та пакети знижок.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4.</td>
                <td className="px-4 py-2">
                Допомогли із соціальними мережами та онлайн-присутністю
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">5.</td>
                <td className="px-4 py-2">
                Створили комплексний маркетинговий план для Facebook і TikTok.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">6.</td>
                <td className="px-4 py-2">
                Придумали привабливі відеореклами
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">7.</td>
                <td className="px-4 py-2">
                Створили 2 pre-landing (рекламні) сторінки для залучення покупців
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">8.</td>
                <td className="px-4 py-2">
                Провели A/B тестування різних рекламних гіпотез.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">9.</td>
                <td className="px-4 py-2">
                Використовували email розсилку, щоб повідомляти про нові акції та продукти
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-emerald-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-emerald-700 transition duration-300 ease-in-out animate-bounce">
            Замовте безкоштовну консультацію зараз
            </a>
          </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">Meta Ads <span className='highlight highlight-emerald-300 highlight-variant-5'>( facebook/instagram )</span></h2>
        <p className="mb-4">
          Проаналізувавши поточні <strong>рекламні кампанії Facebook ,</strong> які проводилися до того, як ми почали з ними працювати, ми виявили численні недоліки, які негативно вплинули на результати. Використання лише <strong>статичних зображень</strong> не принесло бажаного результату, тому ми вирішили створити <strong>динамічні відеокреативи,</strong> які дарують користувачам нові емоції, спонукають їх купувати товари та підкреслюють якість Pawty Dog Toys через позитивні відгуки клієнтів.
        </p>
        <p className="mb-4">
          Щоб досягти наших цілей і збільшити продажі, нам довелося збільшити наш <strong>рекламний бюджет,</strong> що збільшило охоплення аудиторії, і реклама може показуватися деякій частині менш цільової аудиторії, тому буде складніше знизити високу вартість продажу, але ми вирішили цю проблему вдалим підходом до креативів.<br/>
          Щоб підвищити <strong>рентабельність інвестицій,</strong> ми зосередилися на <strong>середній вартості продукту (AOV)</strong> і <strong>довгостроковій цінності (LTV)</strong>, Це означає, що ми намагалися продати більше одного продукту користувачеві, тому ми зібрали дані про користувачів, які зробили покупку, і пропонували їм пов’язані продукти для своїх собак через різні канали.
        </p>
        <p className="mb-8">
          Ми завантажили готову аудиторію <strong>власників домашніх тварин,</strong> створили схожу аудиторію та аудиторію для <strong> ретаргетингу</strong>. Загальна продуктивність у Facebook:
        </p>  

        <div className="mb-8">
          
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Раніше</h4>
                <ul className="space-y-2">
                  <li><strong>Переглядів:</strong> 102 197</li>
                  <li><strong>Переходів:</strong> 1 169</li>
                  <li><strong>Кількість покупок:</strong> 365</li>
                  <li><strong>Ціна покупки:</strong>  $11.50</li>
                  <li><strong>Витрати на рекламу:</strong> $4 196</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-emerald-600">
                <h4 className="text-2xl font-bold mb-4 text-emerald-600">Після</h4>
                <ul className="space-y-2">
                  <li><strong>Переглядів:</strong> 140 414</li>
                  <li><strong>Переходів:</strong> 3 454</li>
                  <li><strong>Кількість покупок:</strong> 851</li>
                  <li><strong>Ціна покупки:</strong>  $7.30</li>
                  <li><strong>Витрати на рекламу:</strong> $6 213</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результати:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-emerald-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-emerald-600 text-white py-2 rounded-t-lg">До початку нашої співпраці</h4>
                    <img src="/img/v7/fb-before-case-7.webp" alt="Before Results Screenshot" onClick={openModalBeforeMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-emerald-600 text-white py-2 rounded-t-lg">Після нашої співпраці</h4>
                    <img src="/img/v7/fb-after-case-7.webp" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                            Before we started our cooperation
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img//v7/fb-before-case-7.webp" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
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
                            After our cooperation
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v7/fb-after-case-7.webp" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
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
          <a href="#form" className="bg-emerald-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-emerald-700 transition duration-300 ease-in-out animate-bounce">
            Замовте безкоштовну консультацію зараз
          </a>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8"><span className='highlight highlight-green-200 highlight-variant-5'>TikTok</span></h3>
          <p className="mb-8">
          Рекламні кампанії в <strong>TikTok</strong> були нашою ініціативою для Pawty Dog Toys. Ми зосередилися на залученні аудиторії власників домашніх тварин. Ми спланували послідовність рекламних заходів, створюючи окремі кампанії для кожної товарної категорії, використовуючи ефективні <strong> хештеги та креативи</strong>.  Ми оптимізували стратегії для збільшення кількості покупок і <strong>зібрали дані для покращення націлювання</strong>.
          </p>
          
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-emerald-600 mx-auto sm:w-1/2">
              <h4 className="text-2xl font-bold mb-4 text-emerald-600">Після</h4>
              <ul className="space-y-2">
                <li><strong>Перегляди:</strong> 87 202</li>
                <li><strong>Кліки:</strong> 2 473 </li>
                <li><strong>кількість покупок:</strong> 503</li>
                <li><strong>ціна покупки:</strong>  $6.67</li>
                <li><strong>Витрати на рекламу:</strong> $3 356</li>
              </ul>
            </div>
          </div>
        
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результати:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-emerald-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-emerald-600 text-white py-2 rounded-t-lg">Після нашої співпраці</h4>
                    <img src="/img/v7/tiktok-after-case7.jpg" alt="After Results Screenshot" onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                            Після нашої співпраці
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v7/tiktok-after-case7.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
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
          Зміщення фокусу з вартості продажу <strong>на довгострокову цінність клієнта</strong> допомогло утримати покупців на 4-5 покупок, значно збільшивши дохід. Ефективні рекламні кампанії та <strong>TikTok</strong> залучили велику аудиторію власників собак. Ми зосередились на демонстрації унікальних особливостей продуктів через <strong>якісний відеоконтент</strong>.
          </p>
          <p className='mb-8'>
          Співпраця з нами допомогла Pawty Dog Toys зміцнити позиції на ринку та підвищити впізнаваність бренду. <strong>Сертифікація B Corp</strong> підкреслила соціальну відповідальність компанії, що стало важливою перевагою для клієнтів.
          </p>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-emerald-600">
              <ul className="space-y-2">
                <li><strong>Загальна сума покупок:</strong> 1 354</li>
                <li><strong>Вартість однієї покупки:</strong> $7.06 </li>
                <li><strong>Витрати на рекламу:</strong> $9 569</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center"><span className='highlight highlight-emerald-300 highlight-variant-5'>Що говорить про співпрацю Derrick,</span> <span className='text-2xl'>генеральний директор Pawty Dog Toys</span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src="/img/v7/facephoto.jpg" alt="Derrick" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-emerald-600" />
            <p className="font-bold text-center">Derrick</p> 
            <p className="text-center">CEO of <a href="https://pawtydogtoys.com/collections/new-arrivals" target="_blank" rel="noopener noreferrer" className="text-emerald-600"><strong><u>Pawty Dog Toys</u></strong></a></p>
          </div>
          <div className="md:w-2/3 md:px-8">
            <blockquote className="text-xl italic mb-4">
            "Я дуже боявся закрити магазин, тому що це забрало багато ресурсів, часу та зусиль у мене та моєї команди. За останні кілька місяців результати були дуже поганими, ми змінили трьох спеціалістів, і нічого не покращувалось. Звичайно, я скептично ставився до нових маркетологів, але зараз розумію, що без ризику і довіри нічого не можна досягти. 
            <br/><br/>
            Я радий, що команда Advantage допомогла мені вийти з цієї ситуації, вказала на проблемні місця і надала підтримку, якої дуже бракувало раніше. Вдячний за виконану роботу та сподіваюся на подальшу плідну співпрацю!"
            </blockquote>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-emerald-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-emerald-700 transition duration-300 ease-in-out animate-bounce">
              Замовляй безкоштовну консультацію зараз
            </a>
          </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Виведіть свій бізнес на новий рівень за допомогою <span className='highlight highlight-emerald-300 highlight-variant-5'>перевірених стратегій</span></h2>
        <p className="text-center">
        Готові до такої трансформації, як Pawty Dog Toys? Наше агентство спеціалізується на розробці ефективних маркетингових стратегій електронної комерції. Ми тісно співпрацюватимемо з вами, щоб зрозуміти ваші унікальні цілі та розробити індивідуальний план для <strong>стрімкого зростання</strong> Вашого магазину.
        </p>
        <div className="flex justify-center">
        
        <Formspree />
        
        </div>
        <p className="mt-8 text-center">
        Не пропустіть цю можливість вивести свій бізнес на новий рівень. Зв’яжіться з нами сьогодні, <strong>щоб отримати безкоштовну консультацію</strong> та дізнатися, як ми можемо допомогти вам досягти значного зростання
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

export default V7uaPage;