"use client"

import React from 'react';
import { NextPage } from 'next';

import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';       

import '@/app/styles.css'
import MessengerButton from '@/components/MessengerButton';
import Formspree from '@/components/Formspree';

const V2ruPage: NextPage = () => {
  useEffect(() => {
    document.title = "История успеха Queen of Beauty";
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
        <u>Queen of Beauty</u> увеличила ежемесячный доход на <span className='highlight'>194%</span>
        </h1>
        <h2 className="text-2xl font-semibold mb-8 text-center text-rose-600">
        Благодаря таргетированной рекламе на YouTube и TikTok
        </h2>
        <div className="mb-12">
          <p className="mb-4">
            Представляем Вам Queen of Beauty, роскошный салон красоты в Лондоне, предлагающий высококлассные услуги, такие как ботокс, лифтинг, уход за лицом и отбеливание зубов. Несмотря на качественное обслуживание и выстроенную структуру труда в салоне, владелица Аполинария пыталась <strong>вывести свой салон на более высокий уровень</strong> и в будущем масштабировать количество заведений. Queen of Beauty генерировал записи с помощью платформы fresha, youtube рекламы и органического трафика с сайта.
          </p>
          <p className="mb-4"> Аполинария обратилась в наше агентство, ища способ <strong>увеличить количество записей,</strong> чтобы масштабировать свой бизнес. Как <strong>эксперты в индустрии красоты,</strong>  мы хорошо понимали запрос Queen of Beauty, нужно было разработать персональную стратегию маркетинга и настроить новые каналы трафика, чтобы привлечь больше людей.

          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Трудности:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              <li>Сложность привлечения новых клиентов для премиум-сервисов</li>
              <li>Отсутствие узнаваемости и доверия к бренду на конкурентном рынке</li>
              <li>не достаточное количество заинтересованных пользователей из используемых источников трафика</li>
              <li>Высокая цена за показы на Ютуб</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v2/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Наш подход:</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-rose-500 to-rose-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Шаг</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1</td>
                <td className="px-4 py-2">
                Проанализировали целевую аудиторию, конкуренцию и уникальные предложения Queen of Beauty.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                Разработали комплексный план маркетинга с фокусом на YouTube и TikTok.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                Создали креативную видеорекламу, привлекающую внимание на выбранных платформах.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                Провели новые A/B тесты, выполняли постоянную оптимизацию
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-rose-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-rose-700 transition duration-300 ease-in-out animate-bounce">
            Закажите бесплатную консультацию сейчас
            </a>
          </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">YouTube: <span className='highlight highlight-rose-300 highlight-variant-5'>От узкого таргетинга к широкому вовлечению</span></h2>
        <p className="mb-8">
          Изначально реклама YouTube Shorts от Queen of Beauty была нацелена на узкую аудиторию, показывая рекламу на каналах авторов, которые обсуждали бьюти-услуги. Такой подход <strong>оказался дорогостоящим,</strong> с высокой ценой за клик и ограниченным охватом.
        </p>
        <p className="mb-8">
          Наше решение? Мы переключились на более широкую аудиторию, ориентированную на женщин в возрасте 20-50 лет, изменили подход к таргетингу. Это стратегическое изменение дало впечатляющие результаты:
        </p>

        <div className="mb-8">
          
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">До</h4>
                <ul className="space-y-2">
                  <li><strong>Показов:</strong> ~8 628</li>
                  <li><strong>Клики:</strong> 649</li>
                  <li><strong>Количество записей:</strong> 5</li>
                  <li><strong>Доход:</strong>  £239</li>
                  <li><strong>Расходы на рекламу:</strong> £837</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-rose-600">
                <h4 className="text-2xl font-bold mb-4 text-rose-600">После</h4>
                <ul className="space-y-2">
                  <li><strong>Показов:</strong> ~24 540</li>
                  <li><strong>Клики:</strong> 2 387 </li>
                  <li><strong>Количество записей:</strong> 59</li>
                  <li><strong>Доход:</strong>  £11 800</li>
                  <li><strong>Расходы на рекламу:</strong> £1 567</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
          Расширив охват Queen of Beauty, мы значительно снизили цену за клик, одновременно увеличив количество записей и доход за 2-месячный период.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результаты:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-rose-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-rose-600 text-white py-2 rounded-t-lg">До начала нашей работы</h4>
                    <img src="/img/v2/stata_google_before_case2.jpg" alt="Before Results Screenshot" onClick={openModalBeforeMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-rose-600 text-white py-2 rounded-t-lg">После нашей работы</h4>
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
                            До начала нашей работы
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
                              <img src="/img/v2/stata_google_after_case2.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
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
          <a href="#form" className="bg-rose-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-rose-700 transition duration-300 ease-in-out animate-bounce">
            Закажите бесплатную консультацию сейчас
          </a>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8"><span className='highlight highlight-green-200 highlight-variant-5'>TikTok:</span> Построение доверия и экспертиза</h3>
          <p className="mb-4">
          Queen of Beauty практически не вели профиль TikTok из-за нехватки контента, за все время было доступно только 4 видео. Этот ограниченный контент не смог сформировать доверие и экспертизу, что привело к низкому уровню вовлечения и отсутствию взаимодействия.
          </p>
          <p className="mb-4">
          Чтобы преодолеть эту проблему, мы <strong>внедрили стратегию,</strong> ориентированную на контент:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Постоянно добавляли высококачественные, информативные видео, демонстрирующие услуги и опыт Queen of Beauty</li>
            <li>Освещали трансформации клиентов и их отзывы для укрепления доверия</li>
            <li>Взаимодействовали с сообществом TikTok с помощью комментариев, лайков и распространений</li>
          </ul>
          <p className="mb-4">
          По мере роста профиля Queen of Beauty в TikTok, потенциальные клиенты, которые нажимали на рекламу, получали множество контента, демонстрирующего доверие к салону.
          </p>
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">До</h4>
                <ul className="space-y-2">
                  <li><strong>Показов:</strong> 0</li>
                  <li><strong>Клики:</strong> 0</li>
                  <li><strong>Количество записей:</strong> 0</li>
                  <li><strong>Доход:</strong>  0</li>
                  <li><strong>Расходы на рекламу:</strong> 0</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-rose-600">
                <h4 className="text-2xl font-bold mb-4 text-rose-600">После</h4>
                <ul className="space-y-2">
                  <li><strong>Показов:</strong> 72 570</li>
                  <li><strong>Клики:</strong> 1 930 </li>
                  <li><strong>Количество записей:</strong> 89</li>
                  <li><strong>Доход:</strong>  £17 800</li>
                  <li><strong>Расходы на рекламу:</strong> £2 269</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mb-4">
          Используя силу контента, мы превратили присутствие Queen of Beauty в TikTok в машину, приносящую доход.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результаты:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-rose-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-rose-600 text-white py-2 rounded-t-lg">После нашей работы</h4>
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
                            После нашей работы
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
          Рекламные кампании на YouTube и TikTok увеличили присутствие Queen of Beauty на рынке и получили хорошие результаты за время нашей работы.
          </p>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-rose-600">
              <ul className="space-y-2">
                <li><strong>ROI:</strong> 740%</li>
                <li><strong>Общее количество записей:</strong> 142 </li>
                <li><strong>Затрат на рекламу:</strong> £3 836</li>
                <li><strong>Доход:</strong> £28 400</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-rose-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-rose-700 transition duration-300 ease-in-out animate-bounce">
              Закажите бесплатную консультацию сейчас
            </a>
          </div>
        <p className="mb-8">
        Цифры всегда говорят громче слов. Мы использовали информацию и тщательно разработанные стратегии маркетинга по нашему методу, чтобы улучшить видимость салона красоты Queen of Beauty в Интернете, что привело к притоку <strong>новых клиентов</strong> и значительному росту доходов. Но не верьте нам на слово - продолжайте читать, чтобы узнать о результатах нашей работы непосредственно от владельца салона.
          </p>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">От борьбы к процветанию: <span className='highlight highlight-rose-300 highlight-variant-5'>Отзыв владельца салона</span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src="/img/v2/facephoto.jpg" alt="Natalia Kowalska" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-rose-600" />
            <p className="font-bold text-center">Аполинария</p> 
            <p className="text-center">владелица <a href="https://queenofbeautyuk.com/" target="_blank" rel="noopener noreferrer" className="text-rose-600"><strong><u>Queen of Beauty</u></strong></a></p>
          </div>
          <div className="md:w-2/3 md:px-8">
            <blockquote className="text-xl italic mb-4">"Я, как владелица бизнеса, прекрасно понимаю на сколько важно правильно подобрать партенеров, особенно если дело касается маркетинга. Пожалуй, как и большинство владельцев я имела негативный опыт с различными таргетологами и маркетинговыми агентствами, но это меня не останавливало на пути к моей цели. Я не люблю нахваливать кого-то, но Advantage Agency действительно смогли меня приятно удивить, наше сотрудничество было не только приятным, но и весьма продуктивным."</blockquote>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-rose-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-rose-700 transition duration-300 ease-in-out animate-bounce">
              Закажите бесплатную консультацию сейчас
            </a>
          </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Прокачайте свой beauty salon с помощью<span className='highlight highlight-rose-300 highlight-variant-5'> проверенных стратегий</span></h2>
        <p className="text-center">
          Готовы к трансформации, как в Queen of Beauty? Наше агентство специализируется на разработке мощных цифровых маркетинговых стратегий для beauty салонов. Мы будем тесно сотрудничать с вами, чтобы понять ваши уникальные цели и разработать индивидуальный план для стремительного роста вашего салона.
        </p>
        <div className="flex justify-center">
        
        <Formspree />
        
        </div>
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Забронируйте бесплатный аудит вашего бизнеса</h2>
        
        <p className="mt-8 text-center">
          Не упустите <strong>возможность</strong> вывести свой салон красоты на новый уровень. Свяжитесь с нами уже сегодня, чтобы получить бесплатную консультацию и узнать, как мы можем помочь вам достичь значительного роста.
        </p>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Свяжитесь с нами</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Позвоните нам</p>
              <p className="text-rose-600 text-xl">+1 (929) 205-26-10</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Напишите нам</p>
              <a className="text-rose-600 text-xl" href='mailto:stepan@advantage-agency.co'>stepan@advantage-agency.co</a>
            </div>
            {/* <div className="text-center">
              <p className="text-lg font-bold mb-2">Посетите наш сайт</p>
              <a href="https://advantage-agency.co/" target="_blank" rel="noopener noreferrer" className="text-rose-600 text-xl hover:underline">
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

export default V2ruPage;