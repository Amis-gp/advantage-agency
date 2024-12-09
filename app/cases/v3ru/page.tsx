"use client"

import React from 'react';
import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';       

import '@/app/styles.css'
import MessengerButton from '@/components/MessengerButton';
import Formspree from '@/components/Formspree';

const V3ruPage: NextPage = () => {
  useEffect(() => {
    document.title = "История успеха VCentrum";
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
        <span className='highlight'>76</span> записей на услуги авто детейлинга! 
        </h1>
        <h2 className="text-2xl font-semibold mb-8 text-center text-blue-600">
        Благодаря таргетированной рекламе в Meta и Google
        </h2>
        <div className="mb-12">
          <p className="mb-4">
          VCentrum - это премиальный сервис детейлинга из Варшавы, специализирующийся на высококачественных услугах ремонта, тюнинга и чистки автомобилей.</p>
          <p className="mb-4">
            Наша команда <strong>Advantage</strong> провела анализ рынка автомобильных услуг и обратила внимание на рекламу авто детейлинга в Google, которая была размещена низко в поисковой выдаче и их объявления были почти совсем без расширений. Мы решили связаться с владельцами бизнеса и рассказать о проблемах и возможных путях решения. Владелец детейлинга, Андрей, был очень скептически настроен к сотрудничеству с рекламными агентствами из-за негативного опыта с предыдущим агентством. Однако <strong>мы разработали персонализированную маркетинговую стратегию,</strong> которая не только исправляла существующие проблемы, но и внедряла новые решения и потенциально увеличивала прибыль детейлинга, что убедило Андрея дать нам шанс улучшить его бизнес.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Трудности:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2 pr-4">
              <li>Сложность привлечения новых клиентов для премиум-сервисов</li>
              <li>Конкуренция на рынке</li>
              <li>Получение менее целевого трафика</li>
              <li>Потеря части лидов</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v3/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Наш подход:</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Шаг</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1</td>
                <td className="px-4 py-2">
                Проанализировали целевую аудиторию, конкуренцию и услуги VCentrum.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                Вместе с менеджером разработали уникальные офферы
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                Сформировали комплексный план маркетинга для Meta и Google Ads.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                Создали интерактивные видео креативы, которые усиливают интерес к VCentrum.
                </td>
              </tr><tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">5</td>
                <td className="px-4 py-2">
                Провели A/B тесты различных гипотез.
                </td>
              </tr><tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">6</td>
                <td className="px-4 py-2">
                Создали пре-лендинги с положительными отзывами клиентов.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-blue-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-blue-700 transition duration-300 ease-in-out animate-bounce">
            Закажите бесплатную консультацию сейчас
            </a>
          </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">Meta Ads: <span className='highlight highlight-blue-300 highlight-variant-5'>( facebook/instagram )</span></h2>
        <p className="mb-8">
        После анализа активных рекламных кампаний, которые были запущены до нашего сотрудничества, мы обнаружили достаточно моментов, которые стоило исправить. Формат фотокреативов не принес достаточного результата, поэтому мы приняли решение разработать динамические видеокреативы, <strong>направленные на предоставление пользователю свежих эмоций,</strong> желание к изменениям и подтверждение экспертизы VCentrum с помощью положительных отзывов клиентов. Также, запуск трафика на плейсмент Instagram оказался успешным решением.
        </p>
        <p className="text-2xl mb-4 font-semibold">Общие показатели по Meta:</p>
        <div className="mb-8">
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">До</h4>
                <ul className="space-y-2">
                  <li><strong>Показов:</strong> 266 457</li>
                  <li><strong>Клики:</strong> 3 028</li>
                  <li><strong>Количество записей:</strong> 9</li>
                  <li><strong>Цена за лид:</strong>  676,96 PLN</li>
                  <li><strong>Расходы на рекламу:</strong> 6 092,61 PLN</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-blue-600">
                <h4 className="text-2xl font-bold mb-4 text-blue-600">После</h4>
                <ul className="space-y-2">
                  <li><strong>Показов:</strong> 310 130</li>
                  <li><strong>Клики:</strong> 9 390</li>
                  <li><strong>Количество записей:</strong> 40</li>
                  <li><strong>Цена за лид:</strong>  204,16 PLN</li>
                  <li><strong>Расходы на рекламу:</strong> 7 433,72 PLN</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
          После внесения изменений в рекламные кампании, количество кликов и записей увеличилось, а цена за лид значительно снизилась.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результаты:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-blue-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-blue-600 text-white py-2 rounded-t-lg">До начала нашей работы</h4>
                    <img src="/img/v3/facebol-detailing-low_ctr.jpg" alt="Before Results Screenshot" onClick={openModalBeforeMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-blue-600 text-white py-2 rounded-t-lg">Спустя 2 месяца нашей работы</h4>
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
                            До начала нашей работы
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
                                Закрыть
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
                            Спустя 2 месяца нашей работы
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
                                Закрыть
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
            Закажите бесплатную консультацию сейчас
          </a>
        </div>

        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-4"><span className='highlight highlight-green-200 highlight-variant-5'>Google Ads:</span></h3>
          <p className="mb-4">
          Наши рекламные кампании в Google Ads были направлены на привлечение качественных клиентов, которые активно ищут услуги детейлинга в Варшаве. Мы <strong>провели полную реструктуризацию кампаний,</strong> создав отдельные кампании для каждой услуги с использованием целевых ключевых слов. С помощью базы минус-слов нам удалось избежать показов по неподходящих запросах. Выполнили оптимизацию ставок и конверсий путем изменения стратегий для "максимизации конверсий" и сбора данных.
          </p>
          <p className="text-2xl mb-4 font-semibold">
          Показатели по Google:
          </p>
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">До</h4>
                <ul className="space-y-2">
                  <li><strong>Показов:</strong> 477 191</li>
                  <li><strong>Клики:</strong> 5 837</li>
                  <li><strong>Количество записей:</strong> 7</li>
                  <li><strong>Цена за лид:</strong>  847,42 PLN</li>
                  <li><strong>Расходы на рекламу:</strong> 5 932 PLN</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-blue-600">
                <h4 className="text-2xl font-bold mb-4 text-blue-600">После</h4>
                <ul className="space-y-2">
                  <li><strong>Показов:</strong> 588 570</li>
                  <li><strong>Клики:</strong> 8 463</li>
                  <li><strong>Количество записей:</strong> 40</li>
                  <li><strong>Цена за лид:</strong>  161,84 PLN</li>
                  <li><strong>Расходы на рекламу:</strong> 6474,28 PLN</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mb-4">
          После реструктуризации и оптимизации кампаний Google Ads, мы увеличили количество показов и кликов, значительно снизили стоимость записи, и, как следствие, увеличили количество записей при сохранении такого же уровня затрат на рекламу.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результаты:</h3>
            <div className="grid grid-cols-1 gap-8 border-2 border-blue-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-blue-600 text-white py-2 rounded-t-lg">До начала нашей работы</h4>
                    <img src="/img/v3/stata_google_en_before_case3.jpg" alt="Before Results Screenshot" onClick={openModalBeforeGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-blue-600 text-white py-2 rounded-t-lg">Спустя 2 месяца нашей работы</h4>
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
                            До начала нашей работы
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
                                Закрыть
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
                            Спустя 2 месяца нашей работы
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
                                Закрыть
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
          <h3 className="text-2xl font-bold mb-8">Выводы:</h3>
          <p className="mb-4">
          Благодаря детальному анализу и формированию новой структуры, <strong>нашей команде удалось исправить все проблемные места</strong> и применить наши методы и стратегии, которые помогли привлечь новую аудиторию.
          </p>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-blue-600">
              <ul className="space-y-2">
                <li><strong>Количество записей:</strong> 76</li>
                <li><strong>Цена за лид:</strong> 183 PLN</li>
                <li><strong>Расходы на рекламу:</strong> 13 908 PLN</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-blue-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-blue-700 transition duration-300 ease-in-out animate-bounce">
              Закажите бесплатную консультацию сейчас
            </a>
          </div>
        <p className="mb-8">
        Цифры всегда говорят громче слов. Мы использовали информацию и тщательно разработанные стратегии маркетинга по нашему методу, чтобы улучшить видимость сервис детейлинга VCentrum в Интернете, что привело к притоку <strong>новых клиентов</strong> и значительному росту доходов. Но не верьте нам на слово - продолжайте читать, чтобы узнать о результатах нашей работы непосредственно от владельца салона.
          </p>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">От борьбы к процветанию: <span className='highlight highlight-blue-300 highlight-variant-5'>Отзыв владельца</span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src="/img/v3/facephoto.jpg" alt="Andrey" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-blue-600" />
            <p className="font-bold text-center">Андрей</p> 
            <p className="text-center">владелиц <a href="https://www.vcentrum.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600"><strong><u>VCentrum</u></strong></a></p>
          </div>
          <div className="md:w-2/3 md:px-8">
            <blockquote className="text-xl italic mb-4">"Как владелец детейлинга автомобилей, я испытывал трудности с застоем продаж и низким спросом на наши услуги. Эти ребята подошли к делу с большой ответственностью, неустанно работая над различными стратегиями день за днём. Они не останавливались, пока мы не нашли то, что действительно работает. Когда мы нашли правильную стратегию, мы масштабировали её настолько эффективно, что не могли справиться с наплывом новых клиентов. Мы были полностью забронированы на месяц вперёд! Их преданность делу и профессионализм действительно преобразили мой бизнес."</blockquote>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-blue-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-blue-700 transition duration-300 ease-in-out animate-bounce">
              Закажите бесплатную консультацию сейчас
            </a>
          </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Прокачайте свой бизнес с помощью<span className='highlight highlight-blue-300 highlight-variant-5'> проверенных стратегий</span></h2>
        <p className="text-center">
        Готовы к трансформации, как в VCentrum? Раскройте весь потенциал вашего детейлинга, используя наши уникальные методы построения воронки и подачи, привлекая <strong>20+  новых клиентов в неделю,</strong> чтобы вы могли забыть о стрессе из за нехватки клиентов и  сосредоточиться на предоставлении качественных услуг и расширении вашего бизнеса.
        </p>
        <div className="flex justify-center">
        
        <Formspree />

        </div>
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Забронируйте бесплатный аудит вашего бизнеса</h2>
        
        <p className="mt-8 text-center">
        На данный момент <strong>мы можем принять не более 3 новых клиентов,</strong> поэтому позаботьтесь о том, чтобы ваша история успеха стала следующей, и сделайте первый шаг к преображению вашего бизнеса, связавшись с нами через мессенджер или запись на звонок.
        </p>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Свяжитесь с нами</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Позвоните нам</p>
              <p className="text-blue-600 text-xl">+1 (929) 205-26-10</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Напишите нам</p>
              <a className="text-blue-600 text-xl" href='mailto:stepan@advantage-agency.co'>stepan@advantage-agency.co</a>
            </div>
            {/* <div className="text-center">
              <p className="text-lg font-bold mb-2">Посетите наш сайт</p>
              <a href="https://advantage-agency.co/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xl hover:underline">
                advantage-agency.co
              </a>
            </div> */}
          </div>
        </div>
      </section>
      <MessengerButton
        link="https://m.me/100006500822716"
        text="Общайтесь с нами в Messenger"
      />
    </div>
  );
};

export default V3ruPage;