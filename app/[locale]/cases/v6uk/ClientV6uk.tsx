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

const v6ukPage: NextPage = () => {
  useEffect(() => {
    document.title = "History of success 3D rendering company";
  }, []);

  const [isOpenCom1, setIsOpenCom1] = useState(false);
  const [isOpenCom2, setIsOpenCom2] = useState(false);
  const [isOpenCom3, setIsOpenCom3] = useState(false);
  const [isOpenStata, setIsOpenStata] = useState(false);
  const [isOpenStories, setIsOpenStories] = useState(false);

  function closeModalCom1() {
    setIsOpenCom1(false);
  }

  function openModalCom1() {
    setIsOpenCom1(true);
  }

  function closeModalCom2() {
    setIsOpenCom2(false);
  }

  function openModalCom2() {
    setIsOpenCom2(true);
  }

  function closeModalCom3() {
    setIsOpenCom3(false);
  }

  function openModalCom3() {
    setIsOpenCom3(true);
  }

  function closeModalstata() {
    setIsOpenStata(false);
  }

  function openModalstata() {
    setIsOpenStata(true);
  }

  function closeModalStories() {
    setIsOpenStories(false);
  }

  function openModalStories() {
    setIsOpenStories(true);
  }

  return (
    <div className="text-black bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
        <span className='highlight'>Залучення потенційних клієнтів B2B</span> через маркетинг електронною поштою для компанії, що займається 3D-рендерінгом

        </h1>
       
        <div className="mb-12">
          <p className="mb-4">
          Зустрічайте Констянтина, власника Studio Render Market — <strong className='text-amber-600 font'>агентства 3D-візуалізації та моделювання, розташованого в Лос-Анджелесі.</strong> Його команда пропонує розробку 3D-моделей меблів, візуалізацію продукту тощо, допомагаючи дизайнерам інтер’єру та власникам підприємств з виробництва меблів краще продавати свою продукцію за допомогою точної візуалізації.

          </p>
          <p className="mb-4">
          Для Констянтина найбільшою проблемою була стабільна генерація потенційних клієнтів для їхніх послуг, а також прямі контакти для створення списку охоплення, тому він звернувся до нас за допомогою у створенні системи електронного маркетингу для їх генерації потенційних клієнтів.

          </p>
          <p className="mb-4">
          Для нашої команди email-маркетинг – це щось звичайне, тому що ми робимо це для своїх і інших сервісів давно і з хорошими результатами, тому ми із задоволенням взялися за роботу.

          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Виклики:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              <li>Вузька цільова аудиторія</li>
              <li>Важко отримати електронні листи осіб, які приймають рішення</li>
              <li>Надсилання листів вручну з одного домену з неправильним підходом</li>
              <li>Відсутність автоматизованої системи генерації потенційних клієнтів</li>
              <li>86% електронних листів потрапляють у СПАМ</li>
              <li>недостатньо надісланих листів на тиждень/місяць</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v6/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Наш підхід:</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Крок</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Дія</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1</td>
                <td className="px-4 py-2">
                Ми провели детальне дослідження ринку і розібралися в больових точках аудиторії
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                Підготували поштовий сервер та інші інструменти
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                Витягнули контакти осіб, які приймають рішення в галузі меблевого бізнесу, завдяки нашому власному інструменту
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                Налаштували 10 відправників, написання електронних листів
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">5</td>
                <td className="px-4 py-2">
                Ми створили 10 послідовностей із 4-5 електронних листів із різними маркетинговими підходами
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">6</td>
                <td className="px-4 py-2">
                Налаштували інструменти розігріву електронної пошти
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">7</td>
                <td className="px-4 py-2">
                Постійна оптимізація літер, сюжетів і ракурсів.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
        Завдяки детальному аналізу та консультаціям з Костею ми отримали цінну інформацію про позиціонування послуг, тонкощі та унікальні потреби Studio Render Market.
        </p>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-amber-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-amber-700 transition duration-300 ease-in-out animate-bounce">
            Замовте мою безкоштовну консультацію зараз
            </a>
          </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">Відповіді від <span className='highlight highlight-amber-300 highlight-variant-5'>потенційних клієнтів:</span></h2>
        <div className="mb-8">

          <div className="mb-8">

                <div  className="border-2 border-amber-600 rounded-lg p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                    <div>
                      <img src="/img/v6/com-1.jpg" alt="com-1" onClick={openModalCom1} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                    </div>
                    <div>
                      <img src="/img/v6/com2.jpg" alt="com2" onClick={openModalCom2} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                    </div>
                  </div>
                  <div>
                    <img src="/img/v6/com3.jpg" alt="com3" onClick={openModalCom3} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                </div>

                <Transition appear show={isOpenCom1} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModalCom1}>
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
                            <div className="mt-2 w-4/5 mx-auto p-0">
                              <img className="mx-auto w-1/2" src="/img/v6/com-1.jpg" alt="com-1" />
                            </div>
                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                                onClick={closeModalCom1}
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

                <Transition appear show={isOpenCom2} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModalCom2}>
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
                            <div className="mt-2">
                              <img className="mx-auto w-2/5" src="/img/v6/com2.jpg" alt="com2" />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                                onClick={closeModalCom2}
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
                
                <Transition appear show={isOpenCom3} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModalCom3}>
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
                            <div className="mt-2 w-4/5 mx-auto">
                              <img src="/img/v6/com3.jpg" alt="com3" style={{ width: 'auto', height: 'auto' }} />
                            </div>
                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                                onClick={closeModalCom3}
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

        <p className="mb-4">
          Завдяки якісному збору контактів виробників меблів, нам вдалося досягти чудового показника кількості <span className='highlight highlight-amber-300 highlight-variant-5'>"відкриття листів"</span>, ось приклад статистики від одного з відправників:
        </p>

        <div className="grid grid-cols-1 gap-8 border-2 border-amber-600 rounded-lg p-6 sm:w-3/5 mx-auto mb-8">
          <div>
            <img src="/img/v6/stata.jpg" alt="stata" onClick={openModalstata} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
          </div>
        </div>

                <Transition appear show={isOpenStata} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModalstata}>
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
                            <div className="mt-2 sm:w-4/5 mx-auto">
                              <img src="/img/v6/stata.jpg" alt="stata" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                                onClick={closeModalstata}
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

        <div className="mb-8">
          
         

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результати:</h3>
            <div className="grid grid-cols-1 gap-8 border-2 border-amber-600 rounded-lg p-6 sm:w-2/5 mx-auto">
              <div>
                <video 
                  src="/img/v6/stories@1x.mp4"
                  autoPlay 
                  loop
                  muted
                  onClick={openModalStories} 
                  className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" 
                />
              </div>
            </div>

                <Transition appear show={isOpenStories} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModalStories}>
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
                            <div className="mt-2 mx-auto">
                              <video 
                              className="mx-auto sm:w-2/6"
                              src="/img/v6/stories@2x.mp4" 
                              autoPlay
                              muted
                              loop/>
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                                onClick={closeModalStories}
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
          <h3 className="text-2xl font-bold mb-8">Загалом нам вдалося витягти 5000 контактів:</h3>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-amber-600">
              <ul className="space-y-2">
                <li><strong>Відповіді на наші листи:</strong> 174</li>
                <li><strong>Дзвінки з лідами: </strong> 116</li>
                <li><strong>Кількість укладених угод:</strong> 29</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Від боротьби до процвітання: <span className='highlight highlight-amber-300 highlight-variant-5'>відгук власника</span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src="/img/v6/facephoto.jpg" alt="Костянтин" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-amber-600" />
            <p className="font-bold text-center">Костянтин</p>
            <p className="text-center">власник <a href="https://render-market.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-amber-600"><strong><u>Studio Render Market</u></strong></a></p>
          </div>
          <div className="md:w-2/3 md:px-8">
            <blockquote className="text-xl italic mb-4">"Чесно кажучи, у мене не було великих очікувань щодо маркетингу електронною поштою, тому що мій фахівець з продажу намагався надсилати електронні листи вручну, але це не працювало належним чином, не було жодної відповіді на 1000 надісланих листів. Я не сподівався знайти інший але, на щастя, ви переконали мене, що це досить хороше джерело потенційних клієнтів для мого бізнесу. Тепер я планую розширити його до значно більшого обсягу, а також нових ніш, що потенційно відкриє нові можливості."</blockquote>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-amber-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-amber-700 transition duration-300 ease-in-out animate-bounce">
              Замовте мою безкоштовну консультацію зараз
            </a>
          </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center"> Готові трансформувати свою компанію?</h2>
        <p className="text-center">
          Подивіться, як наші ефективні методи цифрового маркетингу можуть допомогти вашій компанії розвиватися та досягати успіху як ніколи раніше. Заплануйте безкоштовну консультацію сьогодні та дізнайтеся, як ми можемо допомогти вам досягти зростання, якого ви завжди мріяли.
        </p>
        <div className="flex justify-center">
        
        <Formspree />

        </div>
        
        <p className="mt-8 text-center">
        Не пропустіть можливість вивести свій бізнес на новий рівень. <strong>Зв’яжіться з нами сьогодні, щоб отримати безкоштовну консультацію</strong> щоб дізнатися, як ми можемо допомогти вам досягти значного зростання.

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

export default v6ukPage;