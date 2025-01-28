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

const V12ukPage: NextPage = () => {
    useEffect(() => {
        document.title = "Зниження ціни за покупку з $72 до $48";
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
    <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Зниження ціни за покупку з <span className='highlight highlight-red-300 highlight-variant-5'>$72 до $48</span>
        </h1>
        <div className="mb-12">
            <p className="mb-4 text-lg leading-relaxed">
                <strong>🍷 Про клієнта:</strong> <a href='https://winest.store/' className="font-semibold text-[#ff6315] underline">Winest</a> - Винний інтернет дистрибютор <span > ексклюзивних вин</span> в Ізраїлі, більше <strong>3 років</strong> на ринку, в наявності є інтернет магазин з послугою <em>діджитал сомельє</em> 🥂, для актуального підбору вин та <strong> швидка доставка</strong> 🚚.
            </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-3/5 text-center">
                <h2 className="text-2xl font-bold mb-4">Виклики:</h2>
                <ul className="list-disc inline-block text-left pl-6 space-y-2 mr-8">
                <li>Потрібно знизити ціну за покупку</li>
                <li>Розібратись з атрибуцією в трекері і трафік сорсі</li>
                <li>Покращити наявні кампанії</li>
                <li>Підготувати рекламу до Black Friday</li>
                </ul>
            </div>
            <div className="w-full lg:w-2/5 flex justify-center items-center">
                <img src="/img/v12/hero.jpeg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
            </div>
        </div>
        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-[#ff6315] text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
                Замовте безкоштовну консультацію зараз
            </a>
        </div>
    </section>

    <section className="mb-12">
        <div className="">
            <div className="mb-12">
                <p className="text-lg leading-relaxed mb-4">
                    <strong>📊 Після детального аналізу</strong> всіх даних з рекламних кампаній в <span className="text-blue-600"> Google</span> і <span className="text-[#4267B2]"> Facebook</span>. Ми почали ознайомлюватись з <em>шляхом який проходить користувач</em> від реклами до <strong>додавання в корзину</strong> 🛒 на сайті і <strong> процесом самої покупки</strong> 💳.
                </p>
            </div>

            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Наш підхід:</h2>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gradient-to-r from-red-500 to-[#ff6315] text-white">
                            <tr>
                                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Етап</th>
                                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Дія</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">1.</td>
                                <td className="px-6 py-4 text-gray-700">Провели дзвінок з клієнтом, обговорили актуальні проблеми</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">2.</td>
                                <td className="px-6 py-4 text-gray-700">Провели детальний аналіз цільової аудиторії та специфіки ринку</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">3.</td>
                                <td className="px-6 py-4 text-gray-700">Створили рекламну стратегію</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">4.</td>
                                <td className="px-6 py-4 text-gray-700">Налаштували коректну передачу конверсій</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>

    <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">Meta ADS: <span className='highlight highlight-red-300 highlight-variant-5'>( facebook/instagram )</span></h2>
        <p className="mb-8 leading-relaxed">
            <strong>🎯 Після узгодження всіх питань з клієнтом</strong>, ми розпочали керування активною рекламою і запускати нову. <em>Першим нашим завданням</em>, було привести масову оптимізацію, для цього ми <strong>відключили частина не ефективної реклами</strong>, відібрали референси рекламних оголошень які працювали найкраще.
        </p>
        <p className="mb-8 leading-relaxed">
            <strong>⚙️ Поправили UTM мітки</strong> в рекламних кампаніях, тим самим <em>виправили помилку з передачею даних</em> із рекламних кампаній в трекер <strong>Triplewhale</strong>, інтегрували промокод в посилання для додаткової аналітики.
        </p>
        <p className="mb-8 leading-relaxed">
            <strong>🚀 Провели успішний тест</strong> з переведенням частини рекламних кампаній на ціль <em>"ініціація чекаута"</em>, що допомогло нам швидше оптимізувати Facebook під цільову дію, і потім додатково дожати теплих користувачів. <strong>Змінили трішки підхід до аватарів</strong>, на яких ми таргетуємось в рекламі, <em>особливий акцент зробили на Black Friday</em> 🛍️ та новорічній рекламі 🎄.
        </p>

        
        <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Раніше</h4>
                <ul className="space-y-2">
                    <li><strong>Чекаутів:</strong> 633</li>
                    <li><strong>Покупок:</strong> 259</li>
                    <li><strong>Ціна за покупку:</strong> $63.3</li>
                    <li><strong>Середній чек:</strong> $90</li>
                    <li><strong>Рекламний бюджет:</strong> $15,383</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-[#ff6315]">
                <h4 className="text-2xl font-bold mb-4 text-[#ff6315]">Після</h4>
                <ul className="space-y-2">
                    <li><strong>Чекаутів:</strong> 785</li>
                    <li><strong>Покупок:</strong> 309</li>
                    <li><strong>Ціна за покупку:</strong> $48.6</li>
                    <li><strong>Середній чек:</strong> $100</li>
                    <li><strong>Рекламний бюджет:</strong> $15,031</li>
                </ul>
              </div>
            </div>
        </div>
        

        <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результати:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-[#ff6315] rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-[#ff6315] text-white py-2 rounded-t-lg">Раніше</h4>
                    <img src="/img/v12/facebook-before-v12.webp" alt="Before Results Screenshot" onClick={openModalBeforeMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-[#ff6315] text-white py-2 rounded-t-lg">Після</h4>
                    <img src="/img/v12/facebook-after-v12.webp" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                            Prior to our collaboration
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v12/facebook-before-v12.webp" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>
                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-[#ff6315] px-4 py-2 text-sm font-medium text-white hover:bg-[#cb4d0f] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
                            After our cooperation.
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v12/facebook-after-v12.webp" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-[#ff6315] px-4 py-2 text-sm font-medium text-white hover:bg-[#cb4d0f] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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

        <div className="mb-8 mt-8">
            <h3 className="text-3xl font-bold mb-4">Google Ads:</h3>
            <p className="mb-8 text-lg leading-relaxed">
                <strong>🎯 Для Google Ads</strong> ми налаштували структуру рекламних кампаній, провели <em> детальний пошук ключових слів</em> та <em>мінус слів</em> 🔍. <strong>✨ Розробили спеціальні рекламні креативи</strong> для пошукової мережі. <span className="text-blue-600">Особливу увагу приділили оптимізації рекламних кампаній</span> - <strong>відключили неефективну рекламу</strong> 🚫 та <em> зосередились на найбільш результативних оголошеннях</em> ⭐.
            </p>
            <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Раніше</h4>
                <ul className="space-y-2">
                    <li><strong>Чекаутів:</strong> 207</li>
                    <li><strong>Покупок:</strong> 52</li>
                    <li><strong>Ціна за покупку:</strong> $67.2</li>
                    <li><strong>Рекламний бюджет:</strong> $3529</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-[#ff6315]">
                <h4 className="text-2xl font-bold mb-4 text-[#ff6315]">Після</h4>
                <ul className="space-y-2">
                    <li><strong>Чекаутів:</strong> 294</li>
                    <li><strong>Покупок:</strong> 82</li>
                    <li><strong>Ціна за покупку:</strong> $51.6</li>
                    <li><strong>Рекламний бюджет:</strong> $4238</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результати:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-[#ff6315] rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-[#ff6315] text-white py-2 rounded-t-lg">Раніше</h4>
                    <img src="/img/v12/google-before-v12.webp" alt="Before Results Screenshot" onClick={openModalBeforeGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-[#ff6315] text-white py-2 rounded-t-lg">Після</h4>
                    <img src="/img/v12/google-after-v12.webp" alt="After Results Screenshot" onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                            Prior to our collaboration
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v12/google-before-v12.webp" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>
                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-[#ff6315] px-4 py-2 text-sm font-medium text-white hover:bg-[#cb4d0f] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
                            After our cooperation.
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v12/google-after-v12.webp" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-[#ff6315] px-4 py-2 text-sm font-medium text-white hover:bg-[#cb4d0f] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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

        <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8">Загальні результати</h3>
            <p className="mt-6 text-lg font-semibol">
                В результаті нашої роботи вдалося не тільки <strong>знизити ціну за покупку на 23%</strong>, але й суттєво збільшити об'єм продажів через обидва рекламні канали.
            </p>
            <div className="flex justify-center mt-8">
                <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-[#ff6315]">
                    <ul className="space-y-2">
                        <li><strong>Загальна кількість покупок:</strong> 391</li>
                        <li><strong>Середня ціна за покупку:</strong> $49.28</li>
                        <li><strong>Рекламний бюджет</strong> $19,269</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center"><span className='highlight highlight-red-300 highlight-variant-5'>Що Марина каже про співпрацю:</span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/3 mb-4 md:mb-0 text-center">
                <img src="/img/v12/facephoto.webp" alt="" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-[#ff6315]" />
                <p className="font-bold">Катерина</p> 
                <a href="https://winest.store/" className="font-bold text-[#ff6315]">Власниця бізнесу</a>
            </div>
            <div className="md:w-2/3 md:px-8">
                <blockquote className="italic mb-4 text-lg leading-relaxed">
                    "✨ Загалом, я дуже задоволена нашою співпрацею. Команда <span className="text-[#ff6315]">Advantage</span> швидко допомогла вирішити наші проблеми з відслідковуванням покупок. <strong>Результати говорять самі за себе</strong> - ми значно знизили вартість за покупку. 📈"
                </blockquote>
                <p className="mt-4 text-lg leading-relaxed">
                    <strong>Особливо важливо</strong>, що всі процеси тепер працюють як годинник, і ми можемо чітко бачити результати нашої рекламної активності.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                    Зараз ми вже поставили нові цілі на наступний рік. <span className="text-[#ff6315]">Дякую команді за професійний підхід!</span> 🚀
                </p>
            </div>
        </div>
    </section>

    <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">
            Отримайте професійну digital-стратегію для вашого бізнесу
            <span className="block mt-2 text-2xl text-[#ff6315]">Безкоштовна консультація</span>
        </h2>
    
        <div className="max-w-3xl mx-auto text-lg">
            <p className="mb-6 text-center leading-relaxed">
                Наша команда допоможе вам створити ефективну систему залучення клієнтів через інтернет-маркетинг. Ми фокусуємось на трьох ключових напрямках:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#ff6315]">
                    <h3 className="font-bold text-xl mb-2 text-center">Аналітика</h3>
                    <p className="text-gray-600 text-center">Детальний аналіз вашої ніші та конкурентів</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#ff6315]">
                    <h3 className="font-bold text-xl mb-2 text-center">Стратегія</h3>
                    <p className="text-gray-600 text-center">Розробка комплексного плану просування</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#ff6315]">
                    <h3 className="font-bold text-xl mb-2 text-center">Результат</h3>
                    <p className="text-gray-600 text-center">Збільшення продажів та масштабування</p>
                </div>
            </div>

            <p className="text-center mb-8">
                Заповніть форму нижче, щоб отримати персональний план розвитку вашого бізнесу в digital-середовищі
            </p>

            <div className="w-fit mx-auto">
                <Formspree />
            </div>

            <p className="mt-8 text-center text-gray-600">
                Залиште заявку зараз та отримайте <strong>безкоштовний аудит</strong> вашої поточної маркетингової стратегії
            </p>
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

export default V12ukPage;