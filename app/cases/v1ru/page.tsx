"use client"

import React from 'react';
import { NextPage } from 'next';

import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';       

import '@/app/styles.css'
import MessengerButton from '@/components/MessengerButton';
import Formspree from '@/components/Formspree';

const V1ruPage: NextPage = () => {
  useEffect(() => {
    document.title = "История успеха Swan Beauty";
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
        Узнайте секрет увеличения записей в Luna M&A на <span className='highlight'>228%</span>
        </h1>
        <h2 className="text-2xl font-semibold mb-8 text-center text-orange-600">
        Откройте для себя уникальные стратегии, которые мы использовали для спасения их бизнеса
        </h2>
        <div className="mb-12">
          <p className="mb-4">
          Знакомьтесь, это Наталья - владелица салона красоты Luna M&A в солнечном Майами. Её салон предлагает широкий спектр медицинских и эстетических услуг, направленных на уход за кожей и косметические процедуры. Несмотря на безупречное качество сервиса, 
          Наталья столкнулась с серьёзной проблемой: <u>привлечения новых клиентов</u> и поддержание стабильного потока записей стало настоящим испытанием. Рост салона застопорился, а привычные маркетинговые методы больше не давали результатов.
          </p>
          <p className="mb-4">
          Наталья была в отчаянии. Она понимала, что если не предпринять решительных мер, салону грозит закрытие. И тут она увидела наше объявление. Недолго думая, Наталья решила довериться нам, ведь <strong>мы специализируемся именно на лидогенерации в beauty индустрии. </strong>
          Наша проверенная система сочетает в себе стратегии, основанные на глубоком анализе данных, и безупречном <strong>понимание индустрии красоты.</strong>  Это позволяет нам добиваться по-настоящему впечатляющих результатов.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Трудности:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              <li>Привлечение новых клиентов на конкурентном рынке</li>
              <li>Снижение спроса на основные услуги</li>
              <li>Низкая эффективность существующих рекламных усилий</li>
              <li>Отсутствие возможности отслеживать лиды и бронирования через "Booksy"</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v1/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Наш подход:</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Шаг</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1</td>
                <td className="px-4 py-2">
                Провели тщательный анализ онлайн-присутствия салона Luna Medical & Aesthetics, целевой аудитории и конкурентов.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                Разработали комплексную стратегию онлайн-маркетинга, учитывающую уникальные потребности и цели салона.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                Реализовали рекламные кампании в Facebook и Google с целью генерации записей в Booksy.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                Оптимизировали сайт салона для поисковых систем. Редизайн сфокусирован на увеличение конверсий.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">5</td>
                <td className="px-4 py-2">
                Запустили email-маркетинг кампании для привлечения базы клиентов и поощрения повторных записей.
                </td>
              </tr>
            </tbody>
          </table>
          
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
            Закажите бесплатную консультацию сейчас
            </a>
          </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Раскрываем секретную формулу: Наша уникальная стратегия для рекламных кампаний салона красоты Luna M&A
        </h2>
        <p className="mb-4">
          Advantage Agency специализируется на создании вирусных рекламных кампаний на платформах Meta (Facebook и Instagram) и Google Ads. Наша команда экспертов, вооруженная многолетним опытом и глубоким пониманием индустрии красоты, создала новую стратегию, которая не только предотвратила закрытие салона Luna Medical & Aesthetics, но и побила рекорды по количеству записей! Читай далее чтобы узнать что именно мы сделали.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-4 mx-auto">
          <img src="/img/v1/meta.jpg" alt="Meta Ads" className="rounded-lg border-2 md:w-full w-1/2 max-w-none" />
        </div>
        <p className="mb-4">
          В процессе подробных консультаций мы получили ценные сведения об уникальных преимуществах салона, его целевой аудитории и целях развития. Эти знания легли в основу нашего стратегического подхода, что позволило нам разработать рекламные кампании, которые нашли бы отклик у потенциальных клиентов и привели бы к ощутимым результатам.
        </p>
        <p>
          Итак, в чем же заключалась наша секретная формула? Мы применили ряд проверенных тактик, включая:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Интригующие рекламные видео-креативы, подходы путем рассказа историй и построению воронок и магнитов</li>
          <li>Привлекательные визуальные эффекты и видео, которые заставляли людей остановиться на какое-то время прежде чем свайпнуть вверх</li>
          <li>Точный таргетинг для привлечения идеальных клиентов салона на основе демографических данных, интересов и поведения</li>
          <li>Предложения и акции, побуждающие к немедленному действию - записи как можно быстрее</li>
          <li>Постоянная оптимизация и A/B-тестирование для повышения эффективности рекламы и максимизации ROI</li>
        </ul>
        <p>
          Используя эти стратегии в Meta Ads и Google Ads, мы были уверены в своей способности обеспечить постоянный приток новых клиентов в салон красоты Luna M&A. Результаты удивили даже нас! Продолжайте читать, чтобы узнать почему.
        </p>
      </section>

      <div className="flex justify-center mt-12">
        <svg className="animate-bounce w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">Наука успеха: <span className='highlight highlight-orange-300 highlight-variant-5'>Глубокое погружение в наши техники</span></h2>
        <p className="mb-8">
        С четкой стратегией пришло время воплотить наш план в жизнь. Наша команда специалистов засучила рукава и приступила к работе, внедрив ряд проверенных методов в Meta Ads, Google Ads и наши консультационные услуги. Давайте рассмотрим подробнее, как мы воплотили в жизнь нашу стратегию маркетинга для салона красоты Luna M&A.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8"><span className='highlight highlight-blue-200 highlight-variant-5'>Meta Ads:</span> Привлечение аудитории на Facebook и Instagram</h3>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">До</h4>
                <ul className="space-y-2">
                  <li><strong>Дата:</strong> 4 ноября - 4 декабря</li>
                  <li><strong>Затраты на рекламу:</strong> $2,464.7</li>
                  <li><strong>Клики по ссылкам:</strong> 1,768</li>
                  <li><strong>CTR:</strong> 0,73%</li>
                  <li><strong>Новые бронирования:</strong> ≈ 39</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-orange-600">
                <h4 className="text-2xl font-bold mb-4 text-orange-600">После</h4>
                <ul className="space-y-2">
                  <li><strong>Дата:</strong> 4 января - 4 февраля</li>
                  <li><strong>Затраты на рекламу:</strong> $2,068.81</li>
                  <li><strong>Клики по ссылкам:</strong> 5,539</li>
                  <li><strong>CTR:</strong> 2.70%</li>
                  <li><strong>Новые бронирования:</strong> 128</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
            Вместо того чтобы просто продвигать пост через Instagram, как это делалось раньше, мы перешли на панель Ads Manager, что позволило нам более точно настраивать объявления и отслеживать их.
          </p>
          <p className="mb-4">
            Наши кампании Meta Ads были разработаны таким образом, чтобы привлечь внимание потенциальных клиентов, пролистывающих свои ленты Facebook и Instagram. Мы разработали убедительные рекламные тексты и привлекающие внимание визуальные образы, которые демонстрировали уникальные предложения и акции салона.
          </p>
          <div className="p-4 flex flex-col md:flex-row items-center mb-8 border-4 border-gray-300 border-dashed rounded-lg">
            <div className="md:w-1/3 md:pr-8 mb-4 md:mb-0 text-center">
              <p><b>CTR наших новых рекламных креативов: </b></p>
              <img src="/img/v1/ctr.jpg" alt="CTR Comparison" className="mx-auto border border-gray-300 rounded-lg shadow-md" />
            </div>
            <div className="md:w-2/3">
              <p className="text-2xl font-bold">
              Благодаря  кампаниям Meta Ads мы успешно увеличили коэффициент кликов (CTR) на 450 % (с 0,9 % до 5,09 %), что привело к значительному росту посещаемости сайта и бронированию мест в салоне
              </p>
            </div>           
          </div>
          <p className="mb-4"><b>Действия, которые мы предприняли:</b></p>
          <ul className="list-disc pl-6 mb-4">
            <li>Разработка новых рекламных кампаний в Facebook Ads Manager для более эффективного управления и анализа</li>
            <li>Создали предварительную лендинг-страницу с увлекательной историей, чтобы оптимизировать пиксель Facebook и стимулировать записи</li>
            <li>Настроили кампании для сообщений в Messenger и Instagram Direct со специально подготовленными текстами</li>
            <li>Собрали около 10 000 пользователей Instagram, заинтересованных в аккаунтах конкурентов, чтобы сформировать целевую аудиторию</li>
          </ul>  

          <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              Закажите бесплатную консультацию сейчас
            </a>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результаты:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-orange-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">До начала нашей работы</h4>
                    <img src="/img/v1/stata_fb_en_before_case1.jpg" alt="Before Results Screenshot" onClick={openModalBeforeMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">После нашей работы</h4>
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
                            До начала нашей работы
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
                            После нашей работы
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
          <h3 className="text-2xl font-bold mb-8"><span className='highlight highlight-green-200 highlight-variant-5'>Google Ads:</span> Привлечение клиентов через поиск</h3>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">До</h4>
                <ul className="space-y-2">
                  <li><strong>Дата:</strong> 4 ноября - 4 декабря</li>
                  <li><strong>Стоимость одного результата:</strong> $24.38</li>
                  <li><strong>Клики по ссылкам:</strong> 600</li>
                  <li><strong>CTR:</strong> 0.73%</li>
                  <li><strong>Конверсии сайта:</strong> 4</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-orange-600">
                <h4 className="text-2xl font-bold mb-4 text-orange-600">После</h4>
                <ul className="space-y-2">
                  <li><strong>Дата:</strong> 4 января - 4 февраля</li>
                  <li><strong>Стоимость одного результата:</strong> $2.95</li>
                  <li><strong>Клики по ссылкам:</strong> 1,030</li>
                  <li><strong>CTR:</strong> 19.67%</li>
                  <li><strong>Конверсия сайта:</strong> 98</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
          Наши рекламные кампании в Google Ads были направлены на привлечение потенциальных клиентов, активно ищущих услуги красоты в Майами. Мы применили ряд методов оптимизации, чтобы салон красоты Luna M&A оказался в верхней строке результатов поиска.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Реструктуризация кампаний путем создания отдельных кампаний для каждой услуги с целевыми ключевыми словами</li>
            <li>Анализ и отсеивание нежелательных ключевых слов для повышения релевантности объявлений</li>
            <li>Интегрировали Calendly для онлайн-планирования встреч и синхронизировали с календарем Booksy</li>
            <li>Оптимизация ставок и конверсий путем изменения стратегий для "максимизации конверсий" и сбора данных</li>
            <li>Создавал кампании Performance Max для достижения максимальных результатов в рекламных каналах Google</li>
          </ul>

          <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              Закажите бесплатную консультацию сейчас
            </a>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результаты:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-orange-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">До начала нашей работы</h4>
                    <img src="/img/v1/stata_google_en_before_case1.jpg" alt="Before Results Screenshot" onClick={openModalBeforeGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">После нашей работы</h4>
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
                            До начала нашей работы
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
                            После нашей работы
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

        <p className="mb-8">
        Цифры всегда говорят громче слов. Мы использовали информацию и тщательно разработанные стратегии маркетинга по нашему методу, чтобы улучшить видимость салона красоты Luna M&A в Интернете, что привело к притоку новых клиентов и значительному росту доходов. Но не верьте нам на слово - продолжайте читать, чтобы узнать о результатах нашей работы непосредственно от владельца салона.
          </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4"><span className='highlight highlight-violet-200 highlight-variant-5'>Консультационные услуги:</span> Индивидуальные стратегии успеха</h3>
          <p className="mb-4">
            Наши консультационные услуги сыграли решающую роль в успехе онлайн маркетинга салона красоты Luna M&A. Мы тесно сотрудничали с владельцем салона, чтобы понять ее уникальные потребности, цели и целевую аудиторию.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Провели детальный анализ сайта салона, выявив технические проблемы и возможности для улучшения</li>
            <li>Разработали новый лендинг-страницу с четкой информацией, новыми предложениями и визуально привлекательным дизайном</li>
            <li>Предоставили рекомендации по созданию интересного видеоконтента и оптимизации размещения рекламы</li>
            <li>Предоставили постоянную поддержку и стратегические рекомендации для обеспечения долгосрочного успеха</li>
          </ul>
        </div>

        <p>Благодаря стратегическому сочетанию этих тактик с использованием Meta Ads, Google Ads и консультационных услуг мы создали мощный план онлайн-маркетинга, который помог салону красоты Luna M&A добиться небывалого успеха. Результаты говорят сами за себя: <strong>увеличение числа новых записей на 228,21%</strong> </p> 

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              Закажите бесплатную консультацию сейчас
            </a>
          </div>
        
        <p className="mt-4">Но это только начало этого преображающего путешествия. Продолжайте читать, чтобы раскрыть весь масштаб нашего воздействия и узнать, как мы можем помочь вашему салону красоты достичь таких же впечатляющих результатов. Поверьте, вы не захотите пропустить то, что будет дальше!</p>
      </section>

      <div className="flex justify-center mt-12">
        <svg className="animate-bounce w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">От борьбы к процветанию: <span className='highlight highlight-orange-300 highlight-variant-5'>Отзыв владельца салона</span></h2>
        <div className="mb-4 text-center">
          <img src="/img/v1/facephoto.png" alt="Natalia" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-orange-600" />
          <p className="font-bold">Наталья, владелица </p> 
          <p className="font-bold"><a href="https://lunamedicalandaesthetics.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600"><u>Luna Medical & Aesthetics Salon</u></a></p>
        </div>
        <div className="md:px-8">
          <blockquote className="italic mb-4">
            "До сотрудничества с агентством Advantage я находилась в действительно отчаянном положении. За последние 4 месяца количество записей в моем салоне значительно сократилось. Я подсчитала, что с моими сокращающимися сбережениями я смогу поддерживать работу салона еще только 2 месяца, если продажи не улучшатся. <strong>Бизнес</strong> моей мечты <strong>был на грани</strong> полного закрытия.
          </blockquote>
          <p className="mt-4">
            Обращаясь к девушкам с Advantage, я возлагала на них столь большие надежды, ведь на карту был поставлен весь мой бизнес. Сейчас, оглядываясь назад, я понимаю, насколько важным было это решение. Если бы я выбрала другое агентство, которое не смогло бы обеспечить результат, это могло бы стать концом.
          </p>
          <p className="mt-4">
            Должна сказать что команда Advantage Agency обладает невероятным пониманием индустрии beauty. То, что они смогли сделать для Luna Medical, - не что иное, как чудо. Они <strong>увеличили количество новых заказов</strong> более чем на 228 %!
          </p>
          <p className="mt-4">
            Я не могу выразить им свою благодарность. Жаль только, что я не нашла их раньше - это избавило бы меня от стольких стрессов и переживаний по поводу потери салона.
          </p>
          <p className="mt-4">
            Теперь поток новых клиентов стабилен, и я могу сосредоточиться на расширении салона, а не думать о том, как удержать его. Девушки из Advantage действительно <strong>спасли мой бизнес</strong> и позволили моей мечте осуществиться"
          </p>
        </div>
      </section>

      <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              Закажите бесплатную консультацию сейчас
            </a>
          </div>

      <section className="bg-white py-2 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl lg:tracking-tight text-center mb-12">
          Почему стоит доверить агентству Advantage успех вашего салона красоты?
          </h2>
          <div className="mt-10 flex justify-center overflow-x-auto">
            <table className="table-auto border-collapse w-full min-w-full sm:min-w-0">
              <thead>
                <tr>
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2 bg-gray-600 text-white font-bold uppercase tracking-wider">Другие агентства</th>
                  <th className="px-4 py-2 bg-orange-600 text-white font-bold uppercase tracking-wider">Advantage Agency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Отраслевая экспертиза</td>
                  <td className="border px-4 py-2">Общий маркетинговый подход</td>
                  <td className="border px-4 py-2 bg-orange-100">Специализируется на маркетинге салонов красоты</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Проверенные результаты</td>
                  <td className="border px-4 py-2">Непоследовательные результаты</td>
                  <td className="border px-4 py-2 bg-orange-100">Проверенные практические примеры с измеряемым ROI</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Прозрачная отчетность</td>
                  <td className="border px-4 py-2">Нечеткая отчетность и метрики</td>
                  <td className="border px-4 py-2 bg-orange-100">Подробные отчеты в режиме реального времени</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Стратегическое партнерство</td>
                  <td className="border px-4 py-2">Решения на основе готовых рецептов</td>
                  <td className="border px-4 py-2 bg-orange-100">Индивидуальные стратегии для ваших уникальных целей</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Комплексные услуги</td>
                  <td className="border px-4 py-2">Ограниченные предложения услуг</td>
                  <td className="border px-4 py-2 bg-orange-100">Онлайн-маркетинговые решения полного цикла</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Проактивная оптимизация</td>
                  <td className="border px-4 py-2">Подход "установил и забыл</td>
                  <td className="border px-4 py-2 bg-orange-100">Непрерывное тестирование и оптимизация</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Выделенная поддержка</td>
                  <td className="border px-4 py-2">Не реагирует или действует медленно</td>
                  <td className="border px-4 py-2 bg-orange-100">Выделенный менеджер по работе с клиентами, оперативное обслуживание</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Отраслевые исследования</td>
                  <td className="border px-4 py-2">Устаревшая тактика</td>
                  <td className="border px-4 py-2 bg-orange-100">Инновационные решения и последние новинки салонной индустрии</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      


        <div className="flex justify-center mt-12">
        <svg className="animate-bounce w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Готовы ли вы <span className='highlight highlight-orange-300 highlight-variant-5'>преобразить свой салон красоты?</span></h2>
        <p className="text-center">
          Узнайте, как наши эффективные методы онлайн-маркетинга помогут вашему салону красоты расти и преуспевать как никогда раньше. Запланируйте бесплатную консультацию сегодня и узнайте, как мы можем помочь вам достичь желаемого роста.
        </p>
        <div className="flex justify-center">
        <Formspree />
        {/* <CalendlyEmbed url="https://calendly.com/d/cky5-6v3-7jq?primary_color=ea580c" /> */}

        </div>
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Забронируйте бесплатный аудит вашего бизнеса</h2>
        
        <p className="mt-8 text-center">
          Не упустите эту возможность раскрыть истинный потенциал вашего салона. На данный момент <strong>мы можем принять не более 3 новых клиентов,</strong> поэтому позаботьтесь о том, чтобы ваша история успеха стала следующей, и сделайте первый шаг к преображению вашего бизнеса, связавшись с нами через мессенджер или запись на звонок.
        </p>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Свяжитесь с нами</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Позвоните нам</p>
              <p className="text-orange-600 text-xl">+1 (929) 205-26-10</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Напишите нам</p>
              <a className="text-orange-600 text-xl" href='mailto:stepan@advantage-agency.co'>stepan@advantage-agency.co</a>
            </div>
            {/* <div className="text-center">
              <p className="text-lg font-bold mb-2">Посетите наш сайт</p>
              <a href="https://advantage-agency.co/" target="_blank" rel="noopener noreferrer" className="text-orange-600 text-xl hover:underline">
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

export default V1ruPage;