"use client"

import React from 'react';
import { NextPage } from 'next';

import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';       

import MessengerButton from '@/components/MessengerButton';
import Formspree from '@/components/Formspree';

const v4uaPage: NextPage = () => {
  useEffect(() => {
    document.title = "Historia sukcesu Real Estate";
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
        <span className='highlight'>$31K</span> чистого прибутку в ніші нерухомості 
        </h1>
        {/* <h2 className="text-2xl font-semibold mb-8 text-center text-red-600">
        Find Out About Unique Strategies That We Used to Save Their Business
        </h2> */}
        <div className="mb-12">
          <p className="mb-4">
          Зустрічайте Девіда - <strong className='text-red-500'>агента з нерухомості з Чикаго,</strong> який звернувся до нас із бажанням побудувати свій особистий бренд, щоб усунути потребу в холодних дзвінках потенційним клієнтам та <strong>налаштувати постійний потік клієнтів</strong> від реклами купівлі та продажу нерухомості.
          </p>
          <p className="mb-4">
          Нам було дуже цікаво працювати в ніші нерухомості, особливо в районі Чикаго, оскільки там  <strong>дуже широкий демографічний діапазон:</strong> ті, хто вперше купує житло, будується багато нових будівель, люди, які шукають великі будинки з великими сім’ями, людей, які шукають невеликі будинки, квартири чи кондомініуми.
          </p>
          <p className="mb-4">
          Незважаючи на те, що ми самі не були знайомі з територією, перше, що ми зробили, це сіли з Девідом, щоб обговорити його ринок і отримати загальне уявлення про те, де, на його думку,<strong>можуть бути найкращі можливості.</strong>
          </p>
          <p className="mb-4">
          Отримавши розуміння ринку та ключову інформацію від Девіда, ми провели деякі дослідження конкурентів, дослідження ключових слів, щоб побачити, що роблять інші агенти в цьому регіоні.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Виклики:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              <li>Відсутність Девіда як спеціаліста в онлайн-медіа</li>
              <li>Девід <strong>не хотів обговорювати потенційних  </strong> і не знав, як самостійно запустити маркетинг своїх послуг</li>
              <li><strong>Витратив багато грошей</strong> на Zillow та не отримав жодних відчутних результатів</li>
              <li><strong>Динамічний ринок і велика конкуренція,</strong> вам потрібно постійно знаходити нові способи залучення клієнтів</li>
            </ul>
            
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v4/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Наш підхід:</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-red-500 to-red-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Крок</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Дія</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1</td>
                <td className="px-4 py-2">
                Проаналізували цільову аудиторію, конкуренцію, місце розташування та специфіку ніші.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                Сформували комплексний маркетинговий план для Meta та Google Ads.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                Розробили SMM-стратегію для управління соцмережами.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                Написали інтригуючі сценарії для відеокреативів.
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
                Розробили логотип та фірмовий стиль
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">7</td>
                <td className="px-4 py-2">
                Розвинули сейлз-лендінг.
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
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4"><span className='highlight highlight-blue-200 highlight-variant-5'>Meta Ads:</span> facebook/instagram</h2>
          <p className="mb-8">
          Наше завдання полягало в тому, щоб створити якісну рекламу для Facebook та Instagram, яка <strong>зацікавила б людей</strong> середнього та старшого віку купівлею нерухомості. Тестуючи різні місця розміщення реклами та підходи до її створення, ми знайшли ефективний спосіб просування послуг нерухомості.
          </p>
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300 max-w-[400px] mx-auto">
              <h4 className="text-2xl font-bold mb-4 text-gray-600">Загальні мета результати:</h4>
              <ul className="space-y-2">
                <li><strong>Покази:</strong> 65 767</li>
                <li><strong>Кліки:</strong> 1357</li>
                <li><strong>Кількість заповнених форм:</strong> 69</li>
                <li><strong>Ціна за лід:</strong> $44.43</li>
                <li><strong>Бюджет витрат на рекламу:</strong> $3 065</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <div className="grid grid-cols-1 gap-8 border-2 border-red-600 rounded-lg p-6">
              <div>
                <h4 className="text-xl font-bold mb-4 text-center bg-red-600 text-white py-2 rounded-t-lg">Результати</h4>
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
                        Результати
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
          <h2 className="text-3xl font-bold mb-8"><span className='highlight highlight-green-200 highlight-variant-5'>Google Ads</span></h2>
          <p className="mb-4">
          Для дослідження ключових слів, <strong>ми використовували - SEMRush.</strong> Це допомогло нам отримати інформацію про PPC та органічний трафік, а також допомогло нам визначити короткі та довгі ключові слова.
          </p>
          <p className="mb-4">
            Ми <strong>з нуля розробили структуру рекламної кампанії,</strong> підібрали найкращі ключові слова та відсортували все сміття. Здійснив оптимізацію ставок і конверсій, змінивши стратегію на «максимум конверсій» і зібравши дані, а потім змінив стратегію на «Цільову CPA».
          </p>
          <div className="mb-8 mt-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300 max-w-[400px] mx-auto">
              <h4 className="text-2xl font-bold mb-4 text-gray-600">Результати в Google:</h4>
              <ul className="space-y-2">
                <li><strong>CTR:</strong>  6%</li>
                <li><strong>Кліки:</strong> 142</li>
                <li><strong>Кількість заповнених  форм:</strong> 26</li>
                <li><strong>Вартість одного ліда:</strong> $49</li>
                <li><strong>Бюджет витрат на рекламу:</strong> $1 283 </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-red-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
            Замовте безкоштовну консультацію зараз
            </a>
          </div>

          <div className="mb-8">
            <div className="grid grid-cols-1 gap-8 border-2 border-red-600 rounded-lg p-6">
              <div>
                <h4 className="text-xl font-bold mb-4 text-center bg-red-600 text-white py-2 rounded-t-lg">Результати</h4>
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
                        Результати
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
          <h3 className="text-2xl font-bold mb-8">Висновок:</h3>
          <p className="mb-4">
          Завдяки грамотному аналізу ніші, конкуренції та проблем потенційних клієнтів, <strong>нам вдалося побудувати працюючу систему формування клієнтів</strong> для купівлі-продажу будинків.
          </p>
          <div className="flex justify-center mt-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-red-600">
              <ul className="space-y-2">
                <li><strong>Кількість лідів:</strong> 95</li>
                <li><strong>Вартість одного ліда:</strong> $45,76</li>
                <li><strong>Загальні витрати на рекламу:</strong> $4 348</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Що Девід каже про співпрацю:</h2>
        <div className="mb-4 text-center">
          <img src="/img/v4/facephoto.jpg" alt="" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-red-600" />
          <p className="font-bold">Девід </p> 
          <p className="font-bold text-red-600">Агент з нерухомості в Чикаго</p>
        </div>
        <div className="md:px-8">
          <blockquote className="italic mb-4">
          «Я був би радий залишити відгук про те, що ви зробили. Мушу сказати, що якість потенційних клієнтів, яких нам вдалося створити за допомогою реклами, досить хороша. Це не просто холодні клієнти, які не знають, чого хочуть, а люди, які хочуть купити чи продати нерухомість зараз!
          </blockquote>
          <p className="mt-4">
          Угоди, які ми вже завершили, і ті, що знаходяться в процесі підписання, свідчать про те, що ваш комплексний підхід до маркетингу працює дуже добре.
          </p>
          <p className="mt-4">
          Тепер я чудово розумію, навіщо підприємцю і бізнесмену маркетингове агентство, самостійно виконати такий величезний обсяг роботи просто нереально. Напевно, якби я не зважився на крок до співпраці, я б досі шукав ліди для своїх послуг вручну та витрачав купу часу та нервів на обдзвони.
          </p>
          <p className="mt-4">
          Дякую команді за підтримку, я вважаю, що ця співпраця була дійсно цікавою та плідною!"
          </p>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
        <a href="#form" className="bg-red-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
          Замовте безкоштовну консультацію зараз
        </a>
      </div>
      

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Розвивайте свій бізнес за допомогою <span className='highlight highlight-red-300 highlight-variant-5'>перевірених стратегій</span></h2>
        <p className="text-center">
        Ви готові отримати постійний потік клієнтів? Наше агентство спеціалізується на розробці потужних маркетингових стратегій. Ми будемо тісно співпрацювати з вами, щоб зрозуміти ваші унікальні цілі та <strong>розробимо індивідуальний план</strong> для швидкого розвитку вашого особистого бренду.
        </p>
        <div className="flex justify-center">
        
        <Formspree />

        </div>

        <p className="mt-8 text-center">
        Не пропустіть можливість вивести свій бізнес на новий рівень. <strong>Зв’яжіться з нами сьогодні, щоб отримати безкоштовну консультацію,</strong> та дізнайтись, як ми можемо допомогти вам досягти значного зростання.
        </p>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Зв'яжіться з Нами</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Телефонуйте Нам</p>
              <p className="text-red-600 text-xl">+1 (929) 205-26-10</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Напишіть Нам</p>
              <a className="text-red-600 text-xl" href='mailto:stepan@advantage-agency.co'>stepan@advantage-agency.co</a>
            </div>
            {/* <div className="text-center">
              <p className="text-lg font-bold mb-2">Visit Our Website</p>
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

export default v4uaPage;