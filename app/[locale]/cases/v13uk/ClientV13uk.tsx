"use client"

import React, { Fragment, useRef } from 'react';
import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import '@/app/styles.css'
import MessengerButton from '@/components/cases/MessengerButton';
import Formspree from '@/components/cases/Formspree';
import CasesFooter from '@/components/cases/Footer';
import LanguageSwitcher from '@/components/cases/LanguageSwitcher';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonialImages = [
    '/img/v13/foto-1.webp',
    '/img/v13/foto-2.webp',
    '/img/v13/foto-3.webp',
    '/img/v13/foto-4.webp',
    '/img/v13/foto-5.webp',
    '/img/v13/foto-6.webp',
    '/img/v13/foto-7.webp',
    '/img/v13/foto-8.webp',
    '/img/v13/foto-9.webp',
    '/img/v13/foto-10.webp',
    '/img/v13/foto-11.webp',
    '/img/v13/foto-12.webp',
    '/img/v13/foto-13.webp',
    '/img/v13/foto-14.webp'
];

const V13ukPage: NextPage = () => {
    useEffect(() => {
        document.title = "31 демо-дзвінків за 4 тижні через Cold Email";
    }, []);
    const [isImageOpen, setIsImageOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const thumbnailsRef = useRef<SwiperType | null>(null);
    const galleryRef = useRef<SwiperType | null>(null);

    const syncing = useRef(false);

    function openImage(image: string) {
        console.log('Opening image:', image);
        setSelectedImage(image);
        setIsImageOpen(true);
    }

    function closeImage() {
        setIsImageOpen(false);
    }
    
return (    
    <div className="text-black bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <LanguageSwitcher />
    <section className="mt-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
            Як ми отримали <span className='highlight highlight-red-300 highlight-variant-5'>31 демо-дзвінків</span> 🎯 
            для High Ticket послуг 💎
            за допомогою системи холодних email за 4 тижні! ✨
        </h1>

        <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Cold Email Marketing: чому це складно, але надзвичайно ефективно? 🚀
            </h2>
            <p className="mb-4 text-xl leading-relaxed text-gray-800">
                Якщо ви думаєте, що холодна email-розсилка — це просто написати лист і натиснути "Надіслати", ми готові вас здивувати! ✨
            </p>
            <p className="mb-4 text-xl leading-relaxed text-gray-800">
                Cold Email Marketing — це справжнє мистецтво 🎨, яке вимагає поєднання технічного сетапу 🛠️, точності в роботі з поштою 📧 та копірайтингу, що дійсно продає ✍️. Це той інструмент, який може змінити ваш бізнес, але зробити це правильно — дуже складно.
            </p>
        </div>
    </section>

    <div className="flex justify-center w-full mt-14 mb-8 text-center">
        <a href="#form" className="bg-[#ff6315] text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
            Замовте безкоштовну консультацію зараз
        </a>
    </div>
    <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Ось чому більшість бізнесів зіштовхуються з труднощами:</h2>
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
                <ul className="list-disc pl-6 space-y-2">
                    <li>📩 Листи потрапляють у спам</li>
                    <li>🔒 Відсутність контролю над репутацією поштових скриньок</li>
                    <li>⚙️ Немає системності в процесі розсилки</li>
                    <li>🧑‍💻 Непідходящі або неякісні ліди</li>
                    <li>🖋️ Слабкий копірайтинг, який не захоплює увагу</li>
                </ul>
            </div>
            <div className="relative h-[300px]">
                <Image 
                    src="/img/v13/hero.jpg"
                    alt="Email Marketing Challenges"
                    fill
                    className="object-cover rounded-lg"
                />
            </div>
        </div>
    </section>

    <section className="mb-16 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-sm">
      <p className="text-3xl font-bold mb-8 text-center bg-clip-text">
          Наш виклик: як побудувати стабільну систему холодної розсилки? 🎯
      </p>

      <div className="space-y-6 text-gray-800">
          <p className="text-xl leading-relaxed">
              Наше агентство поставило перед собою мету — масштабувати кількість проєктів та генерувати більше лідів для послуг маркетингу. Ми вирішили заглибитися у Cold Email Marketing, і, чесно кажучи, це був непростий шлях. 😅
          </p>

          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#ff6315]">
              <p className="text-xl font-semibold mb-4">
                  За кілька місяців ми пройшли через десятки технічних і стратегічних випробувань: 🔍
              </p>
              <p className="text-lg mb-3">
                  Тестували <span className="font-bold text-[#ff6315]">30+</span> різних сервісів для автоматизації розсилки.
                  Багато з них були:
              </p>
              <ul className="space-y-3 pl-4">
                  <li className="flex items-center gap-2 text-lg">
                      <span className="text-red-500">❌</span> Надто дорогими
                  </li>
                  <li className="flex items-center gap-2 text-lg">
                      <span className="text-red-500">❌</span> Нестабільними (глюки, помилки)
                  </li>
                  <li className="flex items-center gap-2 text-lg">
                      <span className="text-red-500">❌</span> Без потрібного функціоналу
                  </li>
              </ul>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-yellow-400">
              <p className="text-lg leading-relaxed">
                  <span className="font-semibold">⚠️ Критичний момент:</span> Вибір правильного email-провайдера та налаштування серверів забрав у нас тижні.
                  У якийсь момент <span className="font-bold text-red-500">45 поштових скриньок</span> потрапили в чорний список, і нам довелося повністю змінювати підхід.
              </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-green-500">
              <p className="text-lg leading-relaxed">
                  <span className="font-semibold">🎉 Результат:</span> Щоб побудувати систему, яка гарантовано доставляє листи у вхідні скриньки, ми витратили понад <span className="font-bold text-[#ff6315]">4 місяці</span> тестувань, аналізу та оптимізації. Але ми створили сетап, який працює стабільно, і тепер можемо з упевненістю заявити: <span className="font-bold">ми знаємо, як працює Cold Email Marketing</span>.
              </p>
          </div>
      </div>
    </section>

    <div className="flex justify-center w-full mt-14 mb-8 text-center">
        <a href="#form" className="bg-[#ff6315] text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
            Замовте безкоштовну консультацію зараз
        </a>
    </div>

    <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Наш підхід до генерації лідів
        </h2>
        <p className="mb-8 text-xl text-center text-gray-700">
            Ось що ми зробили, щоб отримати <span className="font-bold text-blue-600">31 демо-дзвінків</span> за 4 тижні:
        </p>
        
        <div className="">
            <ul className="space-y-6">
                <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                    <span className="text-2xl">🎯</span>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Чітко визначили свою цільову аудиторію</h3>
                        <div className="text-gray-600 pl-4 border-l-2 border-gray-200">
                            <p>Які ніші? Які посади людей приймають рішення?</p>
                        </div>
                    </div>
                </li>

                <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                    <span className="text-2xl">🔥</span>
                    <div>
                        <h3 className="font-semibold text-lg">Налаштували поштові скриньки та прогрівали їх для підвищення репутації</h3>
                    </div>
                </li>

                <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                    <span className="text-2xl">⚙️</span>
                    <div>
                        <h3 className="font-semibold text-lg">Підготували поштовий сервер та всі необхідні інструменти</h3>
                    </div>
                </li>

                <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                    <span className="text-2xl">📋</span>
                    <div>
                        <h3 className="font-semibold text-lg">Зібрали контакти осіб, які приймають рішення</h3>
                    </div>
                </li>

                <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                    <span className="text-2xl">✉️</span>
                    <div>
                        <h3 className="font-semibold text-lg">Створили 50+ шаблонів листів з унікальними офферами та меседжами</h3>
                    </div>
                </li>

                <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                    <span className="text-2xl">📈</span>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Розробили стратегію послідовності із 3-4 листів</h3>
                        <ul className="pl-4 text-gray-600 space-y-2 border-l-2 border-gray-200">
                            <li>• Різні маркетингові підходи</li>
                            <li>• Чіткий call-to-action (CTA)</li>
                        </ul>
                    </div>
                </li>

                <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                    <span className="text-2xl">🚀</span>
                    <div>
                        <h3 className="font-semibold text-lg">Запустили кампанії та провели детальний аналіз ефективності</h3>
                    </div>
                </li>

                <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                    <span className="text-2xl">🛠️</span>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Моніторили систему</h3>
                        <ul className="pl-4 text-gray-600 space-y-2 border-l-2 border-gray-200">
                            <li>• Репутація доменів</li>
                            <li>• Якість сендерів</li>
                            <li>• Конверсії з листів</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </section>

    

    <section className="mb-16">
    <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
        Наш підхід до генерації лідів
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="mb-6 border-b-2 border-blue-500 pb-4">
                <h4 className="text-2xl font-bold text-gray-800">Що ми зробили:</h4>
            </div>
            <ul className="space-y-4">
                <li className="flex items-center gap-3 text-lg text-gray-700 hover:text-gray-900 transition-colors">
                    <span className="text-2xl">🎯</span>
                    <span>Чітко визначили цільову аудиторію</span>
                </li>
                <li className="flex items-center gap-3 text-lg text-gray-700 hover:text-gray-900 transition-colors">
                    <span className="text-2xl">🔥</span>
                    <span>Налаштували та прогріли поштові скриньки</span>
                </li>
                <li className="flex items-center gap-3 text-lg text-gray-700 hover:text-gray-900 transition-colors">
                    <span className="text-2xl">⚙️</span>
                    <span>Підготували поштовий сервер</span>
                </li>
                <li className="flex items-center gap-3 text-lg text-gray-700 hover:text-gray-900 transition-colors">
                    <span className="text-2xl">📋</span>
                    <span>Зібрали контакти ОПР</span>
                </li>
                <li className="flex items-center gap-3 text-lg text-gray-700 hover:text-gray-900 transition-colors">
                    <span className="text-2xl">✉️</span>
                    <span>Створили 50+ шаблонів листів</span>
                </li>
                <li className="flex items-center gap-3 text-lg text-gray-700 hover:text-gray-900 transition-colors">
                    <span className="text-2xl">📈</span>
                    <span>Розробили стратегію послідовності</span>
                </li>
                <li className="flex items-center gap-3 text-lg text-gray-700 hover:text-gray-900 transition-colors">
                    <span className="text-2xl">🚀</span>
                    <span>Запустили кампанії</span>
                </li>
                <li className="flex items-center gap-3 text-lg text-gray-700 hover:text-gray-900 transition-colors">
                    <span className="text-2xl">🛠️</span>
                    <span>Налаштували моніторинг системи</span>
                </li>
            </ul>
        </div>
        
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="mb-6 border-b-2 border-green-500 pb-4">
                <h4 className="text-2xl font-bold text-gray-800">Результати за 4 тижні:</h4>
            </div>
            <ul className="space-y-6">
                <li className="flex items-center gap-4 text-lg">
                    <span className="text-3xl font-bold text-blue-600">2921</span>
                    <span className="text-gray-700">Відправлено листів</span>
                </li>
                <li className="flex items-center gap-4 text-lg">
                    <span className="text-3xl font-bold text-blue-600">56</span>
                    <span className="text-gray-700">Відповідей</span>
                </li>
                <li className="flex items-center gap-4 text-lg">
                    <span className="text-3xl font-bold text-blue-600">31</span>
                    <span className="text-gray-700">демо-дзвінків</span>
                </li>
            </ul>
        </div>
    </div>
</section>

    <div className="flex justify-center w-full mt-14 mb-8 text-center">
        <a href="#form" className="bg-[#ff6315] text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
            Замовте безкоштовну консультацію зараз
        </a>
    </div>


    <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Відповіді від потенційних клієнтів:</h2>
        <div className="mb-12 relative">
            <button 
                className="swiper-button-prev absolute !left-4 top-1/2 -translate-y-1/2 z-20 !w-[60px] !h-[60px] rounded-full bg-white shadow-md border border-gray-100 md:!flex !hidden items-center justify-center text-[#ff6315] hover:bg-gray-300 transition-all duration-100"
            >
                ←
            </button>
            <button 
                className="swiper-button-next absolute !right-4 top-1/2 -translate-y-1/2 z-20 !w-[60px] !h-[60px] rounded-full bg-white shadow-md border border-gray-100 md:!flex !hidden items-center justify-center text-[#ff6315] hover:bg-gray-300 transition-all duration-100"
            >
                →
            </button>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                pagination={{ 
                    el: '.swiper-pagination',
                    clickable: true
                }}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="h-[400px] w-full"
                onSwiper={(swiper) => {
                    thumbnailsRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                    if (!syncing.current) {
                        syncing.current = true;
                        galleryRef.current?.slideTo(swiper.activeIndex);
                        syncing.current = false;
                    }
                }}
            >
                {testimonialImages.map((image, index) => (
                    <SwiperSlide key={index} className="sm:pt-4 pb-12 sm:pb-8 px-2">
                        <div 
                            className="relative h-[370px] w-full cursor-pointer"
                            onClick={() => {
                                console.log('Click on image:', image);
                                openImage(image);
                            }}
                            role="button"
                            tabIndex={0}
                        >
                            <Image
                                src={image}
                                alt={`Email Response ${index + 1}`}
                                width={590}
                                height={735}
                                className="!w-fit mx-auto object-cover rounded-lg shadow-lg sm:hover:scale-105 transition-all duration-300 cursor-pointer"
                                priority={index < 4}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    console.log('Click on Image component:', image);
                                    openImage(image);
                                }}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination md:mt-4"></div>
        </div>
        
        
        <h2 className="text-2xl font-bold mb-6">Результати:</h2>
        <div className="relative h-full w-full mb-12">
            <Image 
                src="/img/v13/stats.webp"
                alt="Campaign Results"
                width={1280}
                height={620}
                className="h-full w-full object-contain rounded-lg border border-gray-200"
            />
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-[#ff6315]">
                    <h3 className="font-bold text-xl mb-2 text-center">Аналітика</h3>
                    <p className="text-gray-600 text-center">Детальний аналіз вашої ніші та конкурентів</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-[#ff6315]">
                    <h3 className="font-bold text-xl mb-2 text-center">Стратегія</h3>
                    <p className="text-gray-600 text-center">Розробка комплексного плану просування</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-[#ff6315]">
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

        <Transition.Root show={isImageOpen} as={Fragment}>
            <Dialog 
                as="div" 
                className="relative z-50" 
                onClose={closeImage}
                open={isImageOpen}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/80" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Dialog.Panel className="relative max-w-4xl w-full">
                            <button
                                onClick={closeImage}
                                className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors z-50"
                            >
                                ×
                            </button>
                            <div className="relative h-[80vh]">
                                <Swiper
                                    modules={[Pagination]}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    pagination={{ 
                                        el: '.swiper-pagination',
                                        clickable: true
                                    }}
                                    loop={true}
                                    initialSlide={testimonialImages.indexOf(selectedImage)}
                                    className="h-full w-full"
                                    onSwiper={(swiper) => {
                                        galleryRef.current = swiper;
                                    }}
                                    onSlideChange={(swiper) => {
                                        if (!syncing.current) {
                                            syncing.current = true;
                                            thumbnailsRef.current?.slideTo(swiper.activeIndex);
                                            syncing.current = false;
                                        }
                                    }}
                                >
                                    {testimonialImages.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <Image
                                                src={image}
                                                alt={`Email Response ${index + 1}`}
                                                fill
                                                className="object-contain"
                                                priority
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="swiper-pagination absolute bottom-4 w-full"></div>
                            </div>
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    </div>
    );
};

export default V13ukPage;