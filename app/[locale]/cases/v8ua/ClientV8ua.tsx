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

const V8uaPage: NextPage = () => {
  useEffect(() => {
    document.title = "$116 тис. доходу від покрівельних послуг";}, []);
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
        <span className='highlight'>$116k</span> доходу від <u>покрівельних</u> послуг
        </h1>
        <div className="mb-12">
          <p className="mb-4">
          Зустрічайте Гаррі, <strong className='text-rose-600'>засновника Champion Roofing у Чикаго.</strong>  Наша команда зустрілася з ним на Reddit, де він шукав відповіді на різноманітні запитання щодо позиціонування бренду, каналів онлайн-реклами для своєї ніші та інших маркетингових рішень.
          </p>
          <p className="mb-4">Ми були раді висловити наше бажання допомогти Гаррі з маркетингом для його компанії. Проект був цікавий тим, що в США покрівельна індустрія має <strong>дуже великий</strong> попит і широкий спектр послуг: від ремонту протікань, заміни окремих елементів, монтажу класичної черепиці, монтажу сучасних енергоефективних покрівельних систем, до повної покрівлі, або реконструкції.  Наші клієнти – від власників приватних будинків, які потребують термінового ремонту, <strong>до великих забудовників,</strong> яким потрібні комплексні рішення для цілих житлових комплексів.
          </p>
          <p className="mb-4"> Нам було дуже приємно дізнатися про специфіку місцевого ринку покрівлі, тому перше, що ми зробили, це сіли з Гаррі й почали ставити йому купу запитань, щоб краще зрозуміти тонкощі його бізнесу, його <strong>ідеальних клієнтів</strong>, їхній біль та бажання, його унікальну торгову пропозицію, аналіз його конкурентів тощо. Ми отримали загальне уявлення про те, де, на його думку, можуть бути найкращі можливості для розвитку бізнесу.<br/>
          Отримавши аналіз ринку та ключову інформацію від Гаррі, ми провели деякі дослідження конкурентів і <strong>ключових слів,</strong>  щоб дізнатися, що роблять інші покрівельні компанії в регіоні, які дійсно активно займаються онлайн-маркетингом і успішно залучають клієнтів онлайн.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Виклики:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2 mr-6">
              <li>Погана медіа-помітність компанії Champion Roofing як експерта в галузі покрівлі</li>
              <li>Відсутність ефективної маркетингової стратегії залучення клієнтів</li>
              <li>Неправильне позиціонування своїх послуг на ринку</li>
              <li>Відсутність чіткої пропозиції</li>
              <li>Втрата коштів на неефективних рекламних платформах</li>
              <li>Висока конкуренція та монополія на ринку покрівлі США (Tecta America, Lindholm Roofing та ін.)</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v8/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Наш підхід:</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-rose-500 to-rose-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Крок</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Дія</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1</td>
                <td className="px-4 py-2">
                Був проведений детальний аналіз цільової аудиторії, конкурентів, географічних особливостей і специфіки ринку покрівлі США.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                Розробили комплексний план цифрового маркетингу, зосередивши увагу на кампаніях Google Ads і пошукової оптимізації (SEO).
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                Створили SMM-стратегію для активної присутності Champion Roofing в соціальних мережах.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                Допомогли у написанні сценаріїв для соціальних мереж, які демонстрували переваги та якість роботи Champion Roofing.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">5</td>
                <td className="px-4 py-2">
                Розробили сучасну цільову сторінку, оптимізовану для пошукових систем, розроблену як воронку продажів із портфоліо виконаних проектів і відгуками клієнтів, спрямованих на максимізацію конверсій.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-rose-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-rose-700 transition duration-300 ease-in-out animate-bounce">
            Замовляй безкоштовну консультацію зараз
            </a>
          </div>
      </section>

      <section className="mb-8 mt-8">
        

        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-8"><span className='highlight highlight-green-200 highlight-variant-5'>Google Ads</span></h3>
          <p className="mb-4">
          Ми провели детальне дослідження ключових слів, проаналізували платний та органічний трафік і <strong>визначили ефективні ключові слова</strong> в ніші покрівельних послуг.
          </p>
          <p className="mb-4">
          Ми з нуля розробили структуру рекламної кампанії, ретельно відібрали найбільш релевантні ключові слова та застосували рішення, характерні для покрівельної галузі.
          </p>
          <p className="mb-4">
          Ми оптимізували ставки та конверсії, змінюючи стратегії на «максимізацію конверсій» та збираючи дані, <strong>враховуючи сезонність попиту</strong> на покрівельні послуги та географічні особливості цільового ринку.
          </p>
          <div className="mb-8 mt-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-rose-600 w-2/5 mx-auto">
              <h4 className="text-2xl font-bold mb-4 text-rose-600">Після</h4>
              <ul className="space-y-2">
                <li><strong>Показів:</strong> 2 574</li>
                <li><strong>Кліків:</strong> 189</li>
                <li><strong>Вартість:</strong> $4 313</li>
                <li><strong>Ліди:</strong> 18</li>
                <li><strong>Вартість одного клієнта:</strong> $227</li>
                <li className='text-rose-600'><strong>Гарячі клієнти:</strong> 7</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результат:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-rose-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-rose-600 text-white py-2 rounded-t-lg">Після нашої співпраці</h4>
                    <img src="/img/v8/stata-google-roofing.jpg" alt="After Results Screenshot" onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                              <img src="/img/v8/stata-google-roofing.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
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
          Ми розробили комплексну стратегію цифрового маркетингу, яка включала створення висококонверсійної воронки продажів, контент-план SMM, налаштування ефективних кампаній Google Search Ads і впровадження стратегії SEO. Це дозволило нам голосніше заявити про <strong>експертизу</strong>, продемонструвати досвід і забезпечити зростання потоку нових клієнтів.
          </p>
        </div>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Що Гаррі каже про <span className='highlight highlight-rose-300 highlight-variant-5'>співпрацю</span></h2>
        <div className="mb-4 text-center">
          <img src="/img/v8/facephoto.jpg" alt="" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-red-600" />
          <p className="font-bold">Гаррі</p> 
          <p className="text-red-600">Засновник компанії <a href="https://championroofing.com/" target="_blank" rel="noopener noreferrer" className="text-red-600"><strong><u>Champion Roofing</u></strong></a></p>
        </div>
        <div className="md:px-8">
          <blockquote className="text-xl italic mb-4">
            «Якість потенційних клієнтів, які нам вдалося створити за допомогою реклами, набагато краща, ніж я отримував з різних платформ, де я розміщував оголошення про наші послуги. Це не просто холодні клієнти, які не знають, чого хочуть, і запитують мільйон дурниць, а зацікавлені люди, яким потрібна допомога з покрівлею, які вірять у наш досвід.<br/><br/>
            Зараз я зрозумів, що потрібно збільшити кількість маркетингових каналів, пропрацювати різні деталі, а систему, яка набирає обертів, починає генерувати клієнтів потрібно постійно вдосконалювати, я без вагань скористаюся вами, тому що попереду ще багато роботи».
          </blockquote>
        </div>
      </section>
 
      <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-rose-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-rose-700 transition duration-300 ease-in-out animate-bounce">
              Замовляй безкоштовну консультацію зараз
            </a>
          </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Розвивайте свій бізнес за допомогою <span className='highlight highlight-rose-300 highlight-variant-5'>перевірених стратегій</span></h2>
        <p className="text-center">
        Ви готові отримати постійний <strong>потік</strong> клієнтів? Наше агентство спеціалізується на розробці потужних маркетингових стратегій. Ми будемо тісно співпрацювати з вами, щоб зрозуміти ваші унікальні цілі та розробити індивідуальний план для швидкого розвитку вашого особистого бренду.
        </p>
        <div className="flex justify-center">
        
        <Formspree />
        
        </div>
        <p className="mt-8 text-center">
        Не пропустіть можливість вивести свій бізнес на новий рівень. Зв'яжіться з нами сьогодні, щоб отримати безкоштовну консультацію, щоб дізнатися, як ми можемо допомогти вам досягти значного <strong>Зростання</strong>.
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

export default V8uaPage;