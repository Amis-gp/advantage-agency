"use client"

import React from 'react';
import { NextPage } from 'next';

import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';       

import '@/app/styles.css'
import MessengerButton from '@/components/MessengerButton';
import Formspree from '@/components/Formspree';

const v4ruPage: NextPage = () => {
  useEffect(() => {
    document.title = "История успеха Real Estate";
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
        <span className='highlight'>$31К</span> чистой прибыли в нише Real Estate
        </h1>
        {/* <h2 className="text-2xl font-semibold mb-8 text-center text-red-600">
        Find Out About Unique Strategies That We Used to Save Their Business
        </h2> */}
        <div className="mb-12">
          <p className="mb-4">
          Познакомьтесь с Давидом - <strong className='text-red-500'>риэлтором из Чикаго,</strong> который обратился к нам с желанием построить свой личный бренд, избавиться от необходимости обзванивать холодных клиентов и настроить <strong>стабильную генерацию клиентов</strong> из рекламы на услуги покупки и продажи недвижимости.
          </p>
          <p className="mb-4">
          Нам было очень интересно поработать в нише Real Estate, особенно в округе Чикаго, поскольку здесь <strong>очень широкий демографический диапазон</strong>: покупатели, которые впервые покупают жилье, новостройки, люди, которые ищут жилье большего размера, люди, которые ищут жилье меньшего размера, а также военные, которые переезжают, и это лишь некоторые из них.
          </p>
          <p className="mb-4">
          Несмотря на то, что мы сами не были знакомы с местностью, первое, что мы сделали, это сели с Давидом, чтобы обсудить его рынок и получить общее представление о том, где по его мнению, могут быть <strong>лучшие возможности.</strong>
          </p>
          <p className="mb-4">
          Получив понимание рынка и ключевую информацию от Давида, мы провели некоторые исследования конкурентов, ключевых слов, чтобы увидеть, что делают другие агенты в этом регионе, которые действительно были заняты онлайн-маркетингом.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Проблемы:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              <li><strong>Отсутствие медийности</strong> в интернете Давида как специалиста</li>
              <li>Давид не <strong>хотел обзванивать холодные лиды</strong> и не знал как самостоятельно запустить маркетинг на свои услуги</li>
              <li><strong>Потратил много денег</strong> на Zillow и не получил удовлетворительных результатов</li>
              <li>Динамичный рынок и <strong>большая конкуренция</strong>, нужно все время искать новые способы привлечения клиентов</li>
            </ul>
            
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v4/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Наш подход:</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-red-500 to-red-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Шаг</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Действие</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1</td>
                <td className="px-4 py-2">
                Проанализировали целевую аудиторию, конкуренцию, локацию и специфику ниши.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                Сформировали комплексный план маркетинга для Meta и Гугл Ads.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                Разработали SMM стратегию для ведения социальных сетей.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                Написали интригующие сценарии для видео креативов.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">5</td>
                <td className="px-4 py-2">
                Провели A/B тесты различных гипотез.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">6</td>
                <td className="px-4 py-2">
                Разработали логотип и фирменный стиль.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">7</td>
                <td className="px-4 py-2">
                Разработали продающий лендинг.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-red-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
            Закажите бесплатную консультацию сейчас
            </a>
          </div>
      </section>

      {/* <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4 text-center">
          <span className='highlight highlight-red-300 highlight-variant-5'>Our unique strategy</span> for Sten Engineering advertising campaigns
        </h2>
        <p className="mb-4">
          Advantage Agency specializes in creating viral advertising campaigns on Meta (Facebook and Instagram) and Google Ads platforms. Our team of experts with experience and deep understanding of the advertising industry <strong>created a new strategy</strong> that improved brand awareness and generated new clients for Sten Engineering.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-4 mx-auto">
          <img src="/img/v1/meta.jpg" alt="Meta Ads" className="rounded-lg border-2 md:w-full w-1/2 max-w-none" />
        </div>
        <p className="mb-4">
         Through a detailed campaign audit and consultation with Sten Engineering, we gained valuable insights into the campaign's unique strengths, target audience and development goals. This knowledge informed our strategic approach, allowing us to design campaigns that would <strong>resonate with potential clients</strong> and drive tangible results.
        </p>
        <p>
          We employed a number of proven tactics, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Created promotional video creatives by telling stories and building funnels with the goal of getting leads</li>
          <li>Emphasized brand awareness in advertising</li>
          <li>Precise targeting to <strong>attract ideal clients</strong> for residential engineering services based on demographics, interests and behaviors</li>
          <li>Offers and promotions that prompt immediate action - signups as soon as possible</li>
          <li>Ongoing optimization and A/B testing to improve ad effectiveness and maximize ROI</li>
        </ul>
        <p>
          By utilizing these strategies in Meta Ads and Google Ads, we were confident in our ability to provide a steady flow of new customers and increased brand awareness
        </p>
      </section> */}

      

      <section className="mb-8 mt-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4"><span className='highlight highlight-blue-200 highlight-variant-5'>Meta Ads:</span> facebook/instagram</h2>
          <p className="mb-8">
          Нашей задачей было создать качественную рекламу для Facebook и Instagram, которая бы <strong>заинтересовывала людей</strong> среднего-старшего возраста <strong>к покупке недвижимости</strong>. Протестировав различные размещения рекламы и подходы к созданию объявлений, мы нашли эффективный способ продвигать риэлторские услуги.
          </p>
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300 max-w-[400px] mx-auto">
              <h4 className="text-2xl font-bold mb-4 text-gray-600">Общие показатели по Meta:</h4>
              <ul className="space-y-2">
                <li><strong>Показов:</strong> 65 767</li>
                <li><strong>Клики:</strong> 1357</li>
                <li><strong>Количество записей:</strong> 69</li>
                <li><strong>Ціна за лід:</strong> $44.43</li>
                <li><strong>Расходы на рекламу:</strong> $3 065</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <div className="grid grid-cols-1 gap-8 border-2 border-red-600 rounded-lg p-6">
              <div>
                <h4 className="text-xl font-bold mb-4 text-center bg-red-600 text-white py-2 rounded-t-lg">Результаты</h4>
                <img src="/img/v4/meta.jpg" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                        Результаты
                        </Dialog.Title>
                        <div className="mt-2">
                          <img src="/img/v4/meta.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                        </div>

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
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
          <h2 className="text-3xl font-bold mb-8"><span className='highlight highlight-green-200 highlight-variant-5'>Google Ads</span></h2>
          <p className="mb-4">
          Для исследования ключевых слов мы <strong>использовали - SEMRush.</strong> Он помог нам получить информацию о PPC, и об органическом трафике и помог определить ключевые слова как с коротким, так и с длинным хвостом.
          </p>
          <p className="mb-4">
          Мы <strong>разработали с нуля структуру рекламных кампаний,</strong> выбрали лучшие ключевые слова и отсортировали весь мусор. Выполнили оптимизацию ставок и конверсий путем изменения стратегий на "максимум конверсий" и сбора данных, после чего изменили на стратегию “Target CPA”.
          </p>

          <div className="mb-8 mt-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300 max-w-[400px] mx-auto">
              <h4 className="text-2xl font-bold mb-4 text-gray-600">Показатели по Google:</h4>
              <ul className="space-y-2">
                <li><strong>CTR:</strong>  6%</li>
                <li><strong>Клики:</strong> 142</li>
                <li><strong>Количество записей:</strong> 26</li>
                <li><strong>Ціна за лід:</strong> $49</li>
                <li><strong>Расходы на рекламу:</strong> $1 283 </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-red-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
            Забронировать бесплатную консультацию сейчас
            </a>
          </div>

          <div className="mb-8">
            <div className="grid grid-cols-1 gap-8 border-2 border-red-600 rounded-lg p-6">
              <div>
                <h4 className="text-xl font-bold mb-4 text-center bg-red-600 text-white py-2 rounded-t-lg">Результаты</h4>
                <img src="/img/v4/google.jpg" alt="After Results Screenshot" onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                        Результаты
                        </Dialog.Title>
                        <div className="mt-2">
                          <img src="/img/v4/google.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                        </div>

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
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
          Благодаря грамотному анализу ниши, конкуренции, проблем потенциальных клиентов, <strong>нам удалось выстроить</strong> работающую систему по <strong>генерации клиентов</strong> на продажу и покупку домов.
          </p>
          <div className="flex justify-center mt-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-red-600">
              <ul className="space-y-2">
                <li><strong>Количество записей:</strong> 95</li>
                <li><strong>Цена за лид:</strong> $45,76</li>
                <li><strong>Расходы на рекламу:</strong> $4 348</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Что говорит Давид о сотрудничестве:</h2>
        <div className="mb-4 text-center">
          <img src="/img/v4/facephoto.jpg" alt="" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-red-600" />
          <p className="font-bold">Давид </p> 
          <p className="font-bold text-red-600">Риэлтором из Чикаго</p>
        </div>
        <div className="md:px-8">
          <blockquote className="italic mb-4">
            "Буду рад оставить отзыв о вашей работе. Качество лидов, которые удалось сгенерировать из рекламы поражает. Это не просто холодные клиенты которые не знают чего хотят, а заинтересованные в покупке люди!
          </blockquote>
          <p className="mt-4">
            Сделки, которые мы уже закрыли, и те, что находятся на стадии подписания, свидетельствуют о том, что ваш комплексный подход к маркетингу работает очень хорошо.
          </p>
          <p className="mt-4">
            Сейчас я прекрасно понимаю, почему предпринимателю и бизнесмену нужно маркетинговое агентство, самостоятельно такой большой объем работы выполнить просто не реально. Наверное, если бы не решился на шаг сотрудничества, до сих пор искал бы лидов на мои услуги в ручную и тратил бы очень много времени.
          </p>
          <p className="mt-4">
            Спасибо команде за поддержку, думаю это сотрудничество было действительно интересным и плодотворным!"
          </p>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
        <a href="#form" className="bg-red-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
          Забронировать бесплатную консультацию сейчас
        </a>
      </div>
      

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Прокачайте свой бизнес с помощью <span className='highlight highlight-red-300 highlight-variant-5'>проверенных стратегий</span></h2>
        <p className="text-center">
        Готовы ли вы получить стабильный поток клиентов? Наше агентство специализируется на разработке мощных маркетинговых стратегий. Мы будем тесно сотрудничать с вами, чтобы понять ваши уникальные цели и <strong>разработать индивидуальный план</strong> для стремительного роста вашего вашего личного бренда.
        </p>
        <div className="flex justify-center">
        
        <Formspree />

        </div>

        <p className="mt-8 text-center">
        Не упустите возможность вывести свой бизнес на новый уровень. <strong>Свяжитесь с нами уже сегодня, чтобы получить бесплатную консультацию</strong> и узнать, как мы можем помочь вам достичь значительного роста.
        </p>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Свяжитесь с нами</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Позвоните нам</p>
              <p className="text-red-600 text-xl">+1 (929) 205-26-10</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Напишите нам</p>
              <a className="text-red-600 text-xl" href='mailto:stepan@advantage-agency.co'>stepan@advantage-agency.co</a>
            </div>
            {/* <div className="text-center">
              <p className="text-lg font-bold mb-2">Посетите наш сайт</p>
              <a href="https://advantage-agency.co/" target="_blank" rel="noopener noreferrer" className="text-red-600 text-xl hover:underline">
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

export default v4ruPage;