"use client"

import React from 'react';
import { NextPage } from 'next';

import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';       

import '@/app/styles.css'
import MessengerButton from '@/components/MessengerButton';
import Formspree from '@/components/Formspree';

const V3plPage: NextPage = () => {
  useEffect(() => {
    document.title = "Historia sukcesu VCentrum";
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
        Jak wygenerowaliśmy  <span className='highlight'>76</span> wysokiej jakości leadów dla jednego z najlepszych studiów car detailingu w Warszawie.
        </h1>
        <h2 className="text-2xl font-semibold mb-8 text-center text-blue-600">
        Dzięki skutecznym kampaniom reklamowym w Meta i Google
        </h2>
        <div className="mb-12">
          <p className="mb-4">
          VCentrum to premium serwis car detailingu który znajduje się w Warszawie i specjalizuje się w wysokiej jakości usługach naprawy, tuningu i czyszczenia samochodów.
          </p>
          <p className="mb-4">
          Nasz zespół <strong>Advantage</strong> przeprowadził analizę rynku usług samochodowych i zwrócił uwagę na ogłoszenia dotyczące car detailingu w Google, które zajmowały niskie pozycje w wynikach wyszukiwania i były kierowane na słowa kluczowe niskiej jakości. Postanowiliśmy skontaktować się z właścicielem firmy i porozmawiać o problemach i możliwych rozwiązaniach. Andrzej, właściciel detailingu, był bardzo sceptycznie nastawiony do współpracy z agencjami reklamowymi ze względu na swoje negatywne doświadczenia z przeszłości. Opracowaliśmy jednak <strong>spersonalizowaną strategię marketingową,</strong> która nie tylko naprawiła istniejące problemy, ale także wprowadziła nowe rozwiązania i potencjalnie zwiększyła zyski detailingu, co przekonało Andrzeja, aby dał nam szansę na polepszenie jego biznesu.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Trudności:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              <li>Trudności w pozyskiwaniu nowych klientów na usługi premium</li>
              <li>Konkurencja na rynku</li>
              <li>Uzyskanie niższej jakości ruchu docelowego</li>
              <li>Utrata pewnej liczby leadów</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v3/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Nasze podejście:</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Etap</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Działania</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1</td>
                <td className="px-4 py-2">
                Przeanalizowaliśmy grupę docelową, konkurencję i unikalne oferty VCentrum.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                Wspólnie z managerem opracowaliśmy unikalne oferty
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                Stworzyliśmy kompleksowy plan marketingowy dla Meta i Google Ads.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                Stworzyliśmy ciekawe kreacje wideo zwiększające zainteresowanie do VCentrum.
                </td>
              </tr><tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">5</td>
                <td className="px-4 py-2">
                Przeprowadziliśmy testy A/B różnych hipotez.
                </td>
              </tr><tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">6</td>
                <td className="px-4 py-2">
                Stworzyliśmy strony docelowe z pozytywnymi opiniami klientów.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-blue-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-blue-700 transition duration-300 ease-in-out animate-bounce">
            Zarezerwuj bezpłatną konsultację teraz
            </a>
          </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">Meta Ads: <span className='highlight highlight-blue-300 highlight-variant-5'>( facebook/instagram )</span></h2>
        <p className="mb-8">
        Po przeanalizowaniu aktywnych kampanii reklamowych, które zostały uruchomione przed naszą współpracą, znaleźliśmy wystarczająco dużo rzeczy, które należało naprawić. Format kreacji zdjęciowych nie przynosił wystarczających rezultatów, dlatego zdecydowaliśmy się opracować dynamiczne kreacje wideo, których celem było <strong>dostarczenie użytkownikowi świeżych emocji,</strong> chęci zmiany i potwierdzenia ekspertyzy VCentrum poprzez pozytywne opinie klientów. Dobrym pomysłem okazało się również wprowadzenie ruchu na Instagram.
        </p>
        <p className="text-2xl mb-4 font-semibold">Ogólne wynik Meta:</p>
        <div className="mb-8">
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Przed</h4>
                <ul className="space-y-2">
                  <li><strong>Wyświetlenia:</strong> 266 457</li>
                  <li><strong>Kliknięcia:</strong> 3 028</li>
                  <li><strong>Liczba zapisów:</strong> 9</li>
                  <li><strong>Cena za lead:</strong>  676,96 PLN</li>
                  <li><strong>Koszty reklamy:</strong> 6 092,61 PLN</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-blue-600">
                <h4 className="text-2xl font-bold mb-4 text-blue-600">Po</h4>
                <ul className="space-y-2">
                  <li><strong>Wyświetlenia:</strong> 310 130</li>
                  <li><strong>Kliknięcia:</strong> 9 390</li>
                  <li><strong>Liczba zapisów:</strong> 40</li>
                  <li><strong>Cena za lead:</strong>  204,16 PLN</li>
                  <li><strong>Koszty reklamy:</strong> 7 433,72 PLN</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
          Po wprowadzeniu zmian w kampaniach reklamowych liczba kliknięć i wejść wzrosła, a cena za potencjalnego klienta znacznie spadła.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Wyniki:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-blue-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-blue-600 text-white py-2 rounded-t-lg">Przed początkiem naszej współpracy</h4>
                    <img src="/img/v3/facebol-detailing-low_ctr.jpg" alt="Before Results Screenshot" onClick={openModalBeforeMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-blue-600 text-white py-2 rounded-t-lg">Po 2 miesiącach naszej współpracy</h4>
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
                            Przed początkiem naszej współpracy
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
                                Zamknąć
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
                            Po 2 miesiącach naszej współpracy
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
                                Zamknąć
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
            Zarezerwuj bezpłatną konsultację teraz
          </a>
        </div>

        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-4"><span className='highlight highlight-green-200 highlight-variant-5'>Google Ads:</span></h3>
          <p className="mb-4">
          Nasze kampanie Google Ads miały na celu przyciągnięcie wysokiej jakości klientów, którzy aktywnie poszukują usług detailingu w Warszawie. <strong>Całkowicie zrestrukturyzowaliśmy kampanie,</strong> tworząc oddzielne kampanie dla każdej usługi przy użyciu docelowych słów kluczowych. Z pomocą bazy negatywnych słów kluczowych udało nam się uniknąć wyświetlania reklam w nieodpowiednich miejscach. Zoptymalizowaliśmy stawki i konwersje, zmieniając strategie w celu "maksymalizacji konwersji" i zbierając dane.
          </p>
          <p className="text-2xl mb-4 font-semibold">
          Wyniki Google:
          </p>
          {/* <ul className="list-disc pl-6 mb-4">
            <li>Постоянно добавляли высококачественные, информативные видео, демонстрирующие услуги и опыт Queen of Beauty</li>
            <li>Освещали трансформации клиентов и их отзывы для укрепления доверия</li>
            <li>Взаимодействовали с сообществом TikTok с помощью комментариев, лайков и распространений</li>
          </ul> */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Przed</h4>
                <ul className="space-y-2">
                  <li><strong>Wyświetlenia:</strong> 477 191</li>
                  <li><strong>Kliknięcia:</strong> 5 837</li>
                  <li><strong>Liczba zapisów:</strong> 7</li>
                  <li><strong>Cena za lead:</strong>  847,42 PLN</li>
                  <li><strong>Koszty reklamy:</strong> 5 932 PLN</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-blue-600">
                <h4 className="text-2xl font-bold mb-4 text-blue-600">Po</h4>
                <ul className="space-y-2">
                  <li><strong>Wyświetlenia:</strong> 588 570</li>
                  <li><strong>Kliknięcia:</strong> 8 463</li>
                  <li><strong>Liczba zapisów:</strong> 40</li>
                  <li><strong>Cena za lead:</strong>  161,84 PLN</li>
                  <li><strong>Koszty reklamy:</strong> 6474,28 PLN</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mb-4">
          Po zrestrukturyzowaniu i zoptymalizowaniu naszych kampanii Google Ads zwiększyliśmy liczbę wyświetleń i kliknięć, znacznie obniżyliśmy koszt jednego wpisu, a w konsekwencji zwiększyliśmy liczbę wpisów przy zachowaniu tego samego poziomu wydatków na reklamę.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Wyniki:</h3>
            <div className="grid grid-cols-1 gap-8 border-2 border-blue-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-blue-600 text-white py-2 rounded-t-lg">Przed początkiem naszej współpracy</h4>
                    <img src="/img/v3/stata_google_en_before_case3.jpg" alt="Before Results Screenshot" onClick={openModalBeforeGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-blue-600 text-white py-2 rounded-t-lg">Po 2 miesiącach naszej współpracy</h4>
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
                            Przed początkiem naszej współpracy
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
                                Zamknąć
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
                            Po 2 miesiącach naszej współpracy
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
                                Zamknąć
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
          <h3 className="text-2xl font-bold mb-8">Wnioski:</h3>
          <p className="mb-4">
          Dzięki szczegółowej analizie i stworzeniu nowej struktury, nasz zespół <strong>potrafił naprawić wszystkie problematyczne miejsca</strong> i zastosować nowe rozwiązania, które pomogły przyciągnąć nowych odbiorców.
          </p>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-blue-600">
              <ul className="space-y-2">
                <li><strong>Liczba zapisów:</strong> 76</li>
                <li><strong>Cena za lead:</strong> 183 PLN</li>
                <li><strong>Koszty reklamy:</strong> 13 908 PLN</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-blue-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-blue-700 transition duration-300 ease-in-out animate-bounce">
              Zarezerwuj bezpłatną konsultację teraz
            </a>
          </div>
        <p className="mb-8">
        Liczby zawsze przemawiają głośniej niż słowa. Wykorzystaliśmy informacje i starannie opracowane strategie marketingowe w naszej metodzie, aby poprawić widoczność VCentrum Detailing Service w Internecie, co zaowocowało napływem <strong>nowych klientów</strong> i znacznym wzrostem przychodów. Ale nie wierz nam na słowo - czytaj dalej, aby usłyszeć nasze wyniki bezpośrednio od właściciela salonu.
        </p>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-8 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Od zmagań do rozkwitu: <span className='highlight highlight-blue-300 highlight-variant-5'>Wypowiedź właściciela</span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src="/img/v3/facephoto.jpg" alt="Andrey" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-blue-600" />
            <p className="font-bold text-center">Andrzej</p> 
            <p className="text-center">właściciel <a href="https://www.vcentrum.pl/" target="_blank" rel="noopener noreferrer" className="text-blue-600"><strong><u>VCentrum</u></strong></a></p>
          </div>
          <div className="md:w-2/3 md:px-8">
            <blockquote className="text-xl italic mb-4">"Jako właściciel firmy zajmującej się detailingiem samochodowym, zmagałem się z zastojem sprzedaży i niskim popytem na nasze usługi. Ci faceci podeszli do sprawy bardzo odpowiedzialnie, pracując niestrudzenie nad różnymi strategiami dzień w dzień. Nie spoczęli, dopóki nie znaleźliśmy tego, co naprawdę działa. Kiedy trafiliśmy na właściwą strategię, skalowaliśmy ją tak skutecznie, że nie byliśmy w stanie poradzić sobie z napływem nowych klientów. Byliśmy w pełni zarezerwowani na miesiąc do przodu! Ich poświęcenie i wiedza naprawdę przekształciły mój biznes."</blockquote>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-blue-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-blue-700 transition duration-300 ease-in-out animate-bounce">
              Zarezerwuj bezpłatną konsultację teraz
            </a>
          </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Rozwijaj swój biznes dzięki<span className='highlight highlight-blue-300 highlight-variant-5'> sprawdzonym strategiom</span></h2>
        <p className="text-center">
        Gotowy na transformację jak VCentrum? Nasza agencja specjalizuje się w opracowywaniu <strong>skutecznych strategii marketingowych</strong> dla auto datailingu. Będziemy ściśle współpracować z Tobą, aby zrozumieć Twoje unikalne cele i opracować spersonalizowany plan szybkiego rozwoju Twojej firmy.
        </p>
        <div className="flex justify-center">
        
        <Formspree />
        {/* <CalendlyEmbed url="https://calendly.com/d/cpch-hhc-8tx?primary_color=ea580c" /> */}

        </div>
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Zarezerwuj bezpłatny audyt swojej firmy</h2>
        
        <p className="mt-8 text-center">
        <strong>Nie przegap okazji,</strong> aby podnieść swój biznes na wyższy poziom. Skontaktuj się z nami już dziś, aby uzyskać bezpłatną konsultację i dowiedzieć się, w jaki sposób możemy pomóc Ci osiągnąć znaczący wzrost.
        </p>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Skontaktuj się z nami</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Zadzwoń do nas</p>
              <p className="text-blue-600 text-xl">+1 (929) 205-26-10</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Napisz do nas</p>
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
        text="Czat z nami na Messengerze"
      />
    </div>
  );
};

export default V3plPage;