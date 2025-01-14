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

const V11uaPage: NextPage = () => {
  useEffect(() => {
    document.title = "132 Leads for Notary Services in Berlin";
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
        <span className='highlight'>132 ліди</span> на нотаріальні послуги в Берліні
        </h1>
        <div className="mb-12">
          <p className="mb-4"><strong>Про клієнта:</strong> Марина - керівник нотаріальної фірми з 22-річним досвідом, надає послуги в Берліні та Цюріху для українських емігрантів.</p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Виклики:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2 mr-8">
              <li>Висока конкуренція серед нотаріальних послуг в Берліні</li>
              <li>Відсутність ефективної лендінг-сторінки для конверсії</li>
              <li>Необхідність таргетування на українських емігрантів</li>
              <li>Складність відстеження ефективності реклами</li>
              <li>Потреба в оптимізації рекламного бюджету</li>
              <li>Відсутність системної воронки продажів</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v11/hero.webp" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="flex justify-center w-full mt-14 mb-8 text-center">
          <a href="#form" className="bg-red-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
            Замовте безкоштовну консультацію зараз
          </a>
        </div>
      </section>

      <section className="mb-12">
        <div className="max-w-4xl mx-auto">
            <div className="mb-12">
                <p className="text-lg leading-relaxed mb-4">
                    Для успішного просування нотаріальних послуг в Берліні ми розробили комплексний підхід, що включає використання <strong>Meta Ads та Google Ads</strong>. Наша стратегія базується на глибокому аналізі ринку та створенні оптимізованої воронки продажів з використанням спеціально розробленої лендінг-сторінки.
                </p>
            </div>

            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Наш підхід:</h2>
                <p className="text-lg mb-6">
                    На початковому етапі співпраці ми провели детальний аналіз з клієнтом для визначення конкурентних переваг та розробки ефективної стратегії залучення клієнтів для нотаріальних послуг.
                </p>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gradient-to-r from-red-500 to-red-600 text-white">
                            <tr>
                                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Етап</th>
                                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Дія</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">1.</td>
                                <td className="px-6 py-4 text-gray-700">Визначення цілей та проведення початкового аналізу конкурентних переваг</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">2.</td>
                                <td className="px-6 py-4 text-gray-700">Детальний аналіз ринку та формування портрету ідеального клієнта</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">3.</td>
                                <td className="px-6 py-4 text-gray-700">Розробка рекламної стратегії для Meta Ads і Google Ads, створення оптимізованої лендінг-сторінки</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">4.</td>
                                <td className="px-6 py-4 text-gray-700">Налаштування реклами, створення креативів та оптимізація рекламних кампаній протягом 2-4 тижнів</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>

    <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">Meta ADS: <span className='highlight highlight-red-300 highlight-variant-5'>( facebook/instagram )</span></h2>
        <p className="mb-8">
            Після детального аналізу ринку нотаріальних послуг у Берліні, ми розробили стратегію таргетування на українську діаспору. Створили персоналізовані рекламні креативи, які підкреслювали <strong>досвід, надійність та професіоналізм</strong> нотаріальної фірми. Особливу увагу приділили розробці відео-контенту та візуалізації процесу роботи з клієнтами.
        </p>
        <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-red-600 w-fit mx-auto">
                <h4 className="text-2xl font-bold mb-4 text-red-600">Результати Meta Ads</h4>
                <ul className="space-y-2">
                    <li><strong>Кількість лідів:</strong> 74</li>
                    <li><strong>Записів:</strong> 26</li>
                    <li><strong>Середній чек:</strong> $200</li>
                    <li><strong>Витрати на рекламу:</strong> $992</li>
                    <li><strong>ROI:</strong> 520%</li>
                </ul>
            </div>
        </div>

        <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Результати:</h3>
            <div className="grid grid-cols-1 gap-8 border-2 border-red-600 rounded-lg p-6">
                <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-red-600 text-white py-2 rounded-t-lg">Після</h4>
                    <img src="/img/v11/facebook.webp" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                </div>
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
                    After our cooperation.
                    </Dialog.Title>
                    <div className="mt-2">
                        <img src="/img/v11/facebook.webp" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
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

        <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4"><span className='highlight highlight-green-200 highlight-variant-5'>Google Ads:</span></h3>
            <p className="mb-4">
                Для Google Ads ми розробили структуру кампаній з фокусом на різні типи нотаріальних послуг. Провели <strong>глибокий аналіз ключових слів</strong> та створили оптимізовані оголошення для кожної групи послуг. Особливу увагу приділили геотаргетингу та мовним налаштуванням для охоплення української аудиторії.
            </p>
            <div className="mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-red-600 w-fit mx-auto">
                    <h4 className="text-2xl font-bold mb-4 text-red-600">Результати Google Ads</h4>
                    <ul className="space-y-2">
                        <li><strong>Кількість лідів:</strong> 58</li>
                        <li><strong>Записів:</strong> 17</li>
                        <li><strong>Витрати на рекламу:</strong> $1084</li>
                        <li><strong>ROI:</strong> 340%</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div className="mb-8">
            <h3 className="text-2xl font-bold mb-8">Результати:</h3>    
            <div className="grid grid-cols-1 gap-8 border-2 border-red-600 rounded-lg p-6">
                <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-red-600 text-white py-2 rounded-t-lg">Після</h4>
                    <img src="/img/v11/google.webp" alt="After Results Screenshot" onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                </div>
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
                    After our cooperation.
                    </Dialog.Title>
                    <div className="mt-2">
                        <img src="/img/v11/google.webp" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
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

        <div className="mb-8">
            <h3 className="text-2xl font-bold mb-8">Загальні результати:</h3>
            <p className="mb-4">
                Завдяки комплексному підходу та оптимізації рекламних кампаній, <strong>нам вдалося досягти значного зростання</strong> кількості клієнтів та прибутку нотаріальної фірми.
            </p>
            <div className="flex justify-center">
                <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-red-600">
                    <ul className="space-y-2">
                        <li><strong>Загальна кількість лідів:</strong> 132</li>
                        <li><strong>Конверсія в клієнтів:</strong> 43</li>
                        <li><strong>Загальний прибуток:</strong> $8,600</li>
                        <li><strong>Загальні витрати:</strong> $2,076</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center"><span className='highlight highlight-red-300 highlight-variant-5'>Що Марина каже про співпрацю:</span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/3 mb-4 md:mb-0 text-center">
                <img src="/img/v11/facephoto.jpg" alt="" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-red-600" />
                <p className="font-bold">Марина</p> 
                <p className="font-bold text-red-600">Керівник нотаріальної фірми</p>
            </div>
            <div className="md:w-2/3 md:px-8">
                <blockquote className="italic mb-4">
                    "Я дуже задоволена результатами нашої співпраці. Якість лідів, які ми отримуємо через рекламу, значно вища, ніж від інших каналів залучення. Це люди, які дійсно потребують наших послуг прямо зараз.
                </blockquote>
                <p className="mt-4">
                    Особливо важливо, що ми змогли налагодити стабільний потік клієнтів серед української діаспори в Берліні. Тепер у нас є чітка система залучення клієнтів, яка працює 24/7.
                </p>
                <p className="mt-4">
                    Професійний підхід команди та постійна підтримка допомогли нам вийти на новий рівень розвитку бізнесу. Дякую за відмінну роботу!"
                </p>
            </div>
        </div>
    </section>

    <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">
            Отримайте професійну digital-стратегію для вашого бізнесу
            <span className="block mt-2 text-2xl text-red-600">Безкоштовна консультація</span>
        </h2>
    
        <div className="max-w-3xl mx-auto text-lg">
            <p className="mb-6 text-center leading-relaxed">
                Наша команда допоможе вам створити ефективну систему залучення клієнтів через інтернет-маркетинг. Ми фокусуємось на трьох ключових напрямках:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-600">
                    <h3 className="font-bold text-xl mb-2 text-center">Аналітика</h3>
                    <p className="text-gray-600 text-center">Детальний аналіз вашої ніші та конкурентів</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-600">
                    <h3 className="font-bold text-xl mb-2 text-center">Стратегія</h3>
                    <p className="text-gray-600 text-center">Розробка комплексного плану просування</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-600">
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

export default V11uaPage;