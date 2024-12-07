"use client"

import React from 'react';
import { NextPage } from 'next';

import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';   

import '@/app/styles.css'
import MessengerButton from '@/components/MessengerButton';
import Formspree from '@/components/Formspree';

const V1plPage: NextPage = () => {
  useEffect(() => {
    document.title = "Historia sukcesu Swan Beauty";
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
        Odkryj sekrety stojące za <span className='highlight'>228%</span> wzrostem miesięcznych rezerwacji w <u>Swan Beauty</u>
        </h1>
        <h2 className="text-2xl font-semibold mb-8 text-center text-orange-600">
        Dowiedz się więcej o unikalnych strategiach, których użyliśmy, aby uratować ich firmę
        </h2>
        <div className="mb-12">
          <p className="mb-4">
          Przedstawiamy Natalię, właścicielkę salonu urody Swan Beauty w Berlinie, który oferuje depilację laserową, pielęgnacja rzęs, medycynę estetyczną, makijaż permanentny i inne. Pomimo świadczenia wyjątkowych usług, Natalia miała trudności z <u>przyciągnięciem nowych klientów</u> i utrzymaniem stałego napływu rezerwacji. Rozwój salonu stanął w miejscu, a tradycyjne metody marketingowe nie przynosiły rezultatów.
          </p>
          <p className="mb-4">
          Natalia była zdesperowana i musiała natychmiast podjąć działania, w przeciwnym razie jej salon nie wytrzymałby dłużej i groziło mu zamknięcie. Zobaczyła naszą reklamę i postanowiła spróbować, ponieważ <strong>specjalizujemy się w pomaganiu salonom urody </strong>
          w rozwoju na dzisiejszym konkurencyjnym rynku. Nasz sprawdzony system łączy strategie oparte na danych z dogłębnym zrozumieniem branży beauty, aby zapewnić niezwykłe wyniki.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Wyzwania:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              <li>Przyciąganie nowych klientów na konkurencyjnym rynku</li>
              <li>Spadek popytu na podstawowe usługi</li>
              <li>Słaba wydajność istniejących działań reklamowych</li>
              <li>Brak możliwości przekazania konwersji z "Booksy" w Meta i Google</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v1/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Nasze podejście:</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Etap</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Działania</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1</td>
                <td className="px-4 py-2">
                Przeprowadziliśmy szczegółową analizę internetowej obecności Swan Beauty, grupy odbiorców docelowych oraz konkurencji.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                Opracowaliśmy kompleksową strategię marketingu, dostosowaną do unikalnych potrzeb i celów salonu.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                Wdrożenie kampanii reklamowych w Meta (Facebook, Instagram) oraz Google ads.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                Optymalizowaliśmy stronę internetową salonu pod kątem wyszukiwarek i doświadczenia użytkownika.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">5</td>
                <td className="px-4 py-2">
                Uruchomiliśmy kampanię e-mail w celu pozyskania potencjalnych klientów i zachęcenia dotychczasowych do ponownych rezerwacji.
                </td>
              </tr>
            </tbody>
          </table>
          
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
            Zarezerwuj bezpłatną konsultację teraz
            </a>
          </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4 text-center">
        Ujawniamy sekretną formułę: Nasza strategia dla kampanii reklamowych salonu Swan Beauty
        </h2>
        <p className="mb-4">
        W agencji Advantage specjalizujemy się w tworzeniu skutecznych kampanii reklamowych na platformach Meta (Facebook i Instagram) oraz Google Ads. Nasz zespół ekspertów, uzbrojony w wieloletnie doświadczenie i doskonałe zrozumienie <strong>branży beauty,</strong>postanowił stworzyć skuteczną strategię, która nie tylko zapobiegnie zamknięciu Swan Beauty, ale także pobije rekordy rezerwacji!
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-4 mx-auto">
          <img src="/img/v1/meta.jpg" alt="Meta Ads" className="rounded-lg border-2 md:w-full w-1/2 max-w-none" />
        </div>
        <p className="mb-4">
        Dzięki naszemu pogłębionemu procesowi konsultacji uzyskaliśmy wgląd w unikalne punkty wyróżniające dla salonu, grupę docelową i cele rozwoju. Wiedza ta stanowiła podstawę naszego strategicznego podejścia, umożliwiając nam opracowanie kampanii reklamowych, które będą rezonować z potencjalnymi klientami i przyniosą wymierne rezultaty.
        </p>
        <p>
        Na czym polegała nasza sekretna formuła? Wdrożyliśmy szereg sprawdzonych taktyk, w tym:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Przyciągający uwagę tekst reklamowy, który prezentował profesjonalizm i unikalną ofertę salonu.</li>
          <li>Przyciągające wzrok materiały wizualne i wideo, które zatrzymywały przewijających na dłużej.</li>
          <li>Precyzyjne targetowanie w celu dotarcia do idealnych klientów salonu na podstawie danych demograficznych, zainteresowań i zachowań.</li>
          <li>Nieodparte oferty i promocje zachęcające do natychmiastowych rezerwacji.</li>
          <li>Ciągła optymalizacja i testy A/B w celu udoskonalenia wydajności reklam i maksymalizacji ROI.</li>
        </ul>
        <p>
        Wykorzystując te strategie w Meta Ads i Google Ads, byliśmy pewni naszej zdolności do kierowania stałego napływu nowych klientów do Swan Beauty Salonu. Wyniki zaskoczyły nawet nas! Czytaj dalej, aby dowiedzieć się dlaczego.
        </p>
      </section>

      <div className="flex justify-center mt-12">
        <svg className="animate-bounce w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">Nauka o sukcesie: <span className='highlight highlight-orange-300 highlight-variant-5'>Głębokie zanurzenie w nasze techniki</span></h2>
        <p className="mb-8">
        Mając jasną strategię, nadszedł czas, aby wprowadzić nasz plan w życie. Nasz zespół ekspertów zakasał rękawy i zabrał się do pracy, wdrażając szereg sprawdzonych metod w Meta Ads, Google Ads i naszych usługach konsultacyjnych. Przyjrzyjmy się bliżej, jak ożywiliśmy marketing dla salonu Swan Beauty.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8"><span className='highlight highlight-blue-200 highlight-variant-5'>Meta Ads:</span> Angażowanie odbiorców na Facebook and Instagram</h3>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Przed</h4>
                <ul className="space-y-2">
                  <li><strong>Data:</strong> 4 listopada - 4 grudnia</li>
                  <li><strong>Wydatki na reklamy:</strong> 4,494.87 zł</li>
                  <li><strong>Kliknięcia linków:</strong> 1,304</li>
                  <li><strong>CTR:</strong> 0,75%</li>
                  <li><strong>Nowe rezerwacje:</strong> ≈ 39</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-orange-600">
                <h4 className="text-2xl font-bold mb-4 text-orange-600">Po</h4>
                <ul className="space-y-2">
                  <li><strong>Data:</strong> 4 stycznia - 4 lutego</li>
                  <li><strong>Wydatki na reklamy:</strong> 3,983.80 zł</li>
                  <li><strong>Kliknięcia linków:</strong> 5,328</li>
                  <li><strong>CTR:</strong> 3.29%</li>
                  <li><strong>Nowe rezerwacje:</strong> 128</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
          Zamiast po prostu promować posty za pośrednictwem Instagrama, jak to robiono wcześniej, przełączyliśmy się do panelu Ads Manager, który pozwolił nam na bardziej precyzyjne targetowanie i poprawne śledzenie.
          </p>
          <p className="mb-4">
          Nasze kampanie Meta Ads zostały zaprojektowane tak, aby przyciągnąć uwagę potencjalnych klientów scrollujących swoje feedy na Facebooku i Instagramie. Stworzyliśmy atrakcyjny tekst reklamy i przyciągające wzrok wizualizacje, które prezentowały wyjątkową ofertę i promocje salonu.
          </p>
          <div className="p-4 flex flex-col md:flex-row items-center mb-8 border-4 border-gray-300 border-dashed rounded-lg">
            <div className="md:w-1/3 md:pr-8 mb-4 md:mb-0 text-center">
              <p><b>CTR naszych nowych kreacji reklamowych:</b></p>
              <img src="/img/v1/ctr.jpg" alt="CTR Comparison" className="mx-auto border border-gray-300 rounded-lg shadow-md" />
            </div>
            <div className="md:w-2/3">
              <p className="text-2xl font-bold">
              Dzięki naszym docelowym kampaniom Meta Ads z powodzeniem zwiększyliśmy współczynnik klikalności (CTR) o imponujące 450% (z 0,9% do 5,09%), powodując znaczny wzrost ruchu w witrynie i rezerwacji w salonie.
              </p>
            </div>           
          </div>
          <p className="mb-4"><b>Działania, które podjęliśmy: </b></p>
          <ul className="list-disc pl-6 mb-4">
            <li>Stworzyliśmy nowe kampanie reklamowe w Facebook Ads Manager dla lepszego zarządzania i analizy.</li>
            <li>Stworzyliśmy stronę pre-landingową z angażującą historią, aby zoptymalizować piksel Facebooka i zachęcić do rezerwacji.</li>
            <li>Skonfigurowaliśmy kampanie dla wiadomości w Messengerze i Instagram Direct ze specjalnie przygotowanymi tekstami.</li>
            <li>Zebranie około 10 000 użytkowników Instagrama zainteresowanych kontami konkurencji w celu utworzenia docelowych odbiorców.</li>
          </ul>  

          <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              Zarezerwuj bezpłatną konsultację teraz
            </a>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Wyniki:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-orange-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">Przed naszą pracą</h4>
                    <img src="/img/v1/stata_fb_pl_before_case1.jpg" alt="Before Results Screenshot" onClick={openModalBeforeMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">Po naszej pracy</h4>
                    <img src="/img/v1/stata_fb_pl_after_case1.jpg" alt="After Results Screenshot" onClick={openModalAfterMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                            Przed naszą pracą
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v1/stata_fb_pl_before_case1.jpg" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
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
                            Po naszej pracy
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v1/stata_fb_pl_after_case1.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
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

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8"><span className='highlight highlight-green-200 highlight-variant-5'>Reklamy Google:</span> Przyciąganie klientów poprzez wyszukiwanie</h3>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Przed:</h4>
                <ul className="space-y-2">
                  <li><strong>Data:</strong> 4 listopada - 4 grudnia</li>
                  <li><strong>Koszt za wynik:</strong> 96.33 zł</li>
                  <li><strong>Kliknięcia linków:</strong> 600</li>
                  <li><strong>CTR:</strong> 0.73%</li>
                  <li><strong>Konwersje w witrynie:</strong> 4</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-orange-600">
                <h4 className="text-2xl font-bold mb-4 text-orange-600">Po</h4>
                <ul className="space-y-2">
                  <li><strong>Data:</strong> 4 stycznia - 4 lutego</li>
                  <li><strong>Koszt za wynik:</strong> 11.64 zł</li>
                  <li><strong>Kliknięcia linków:</strong> 1,030</li>
                  <li><strong>CTR:</strong> 19.67%</li>
                  <li><strong>Konwersje na stronie:</strong> 98</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
          Nasze kampanie Google Ads skupiały się na dotarciu do potencjalnych klientów aktywnie poszukujących usług beauty w Berlinie. Wdrożyliśmy szereg technik optymalizacji, aby zapewnić, że Swan Beauty Salon pojawi się na samym początku wyników wyszukiwania.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Zrestrukturyzowaliśmy kampanie, tworząc oddzielne kampanie dla każdej usługi z ukierunkowanymi słowami kluczowymi.</li>
            <li>Przeanalizowano i odfiltrowano niepożądane słowa kluczowe, aby poprawić trafność reklam.</li>
            <li>Zintegrowano Calendly do planowania spotkań online i zsynchronizowano z kalendarzem Booksy.</li>
            <li>Optymalizacja stawek i konwersji poprzez zmianę strategii w celu "maksymalizacji konwersji" i gromadzenie danych.</li>
            <li>Tworzenie kampanii Performance Max w celu maksymalizacji wyników w kanałach reklamowych Google.</li>
          </ul>

          <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              Zarezerwuj bezpłatną konsultację teraz
            </a>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Wyniki:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-orange-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">Przed naszą pracą</h4>
                    <img src="/img/v1/stata_google_pl_before_case1.jpg" alt="Before Results Screenshot" onClick={openModalBeforeGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-orange-600 text-white py-2 rounded-t-lg">Po naszej pracy</h4>
                    <img src="/img/v1/stata_google_pl_after_case1.jpg" alt="After Results Screenshot" onClick={openModalAfterGoogle} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
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
                            Przed naszą pracą
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v1/stata_google_pl_before_case1.jpg" alt="Before Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
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
                            Po naszej pracy
                            </Dialog.Title>
                            <div className="mt-2">
                              <img src="/img/v1/stata_google_pl_after_case1.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
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

        <p className="mb-8">
        Liczby zawsze przemawiają głośniej niż słowa. Wykorzystaliśmy informacje i starannie opracowane plany marketingu, aby poprawić widoczność Swan Beauty Salon w Internecie, co zaowocowało napływem nowych klientów i dużym wzrostem ich zarobków. Ale nie wierz nam na słowo - czytaj dalej, aby usłyszeć bezpośrednio od właściciela salonu o wpływie naszej pracy.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4"><span className='highlight highlight-violet-200 highlight-variant-5'>Usługi konsultacyjne:</span> Spersonalizowane strategie sukcesu</h3>
          <p className="mb-4">
          Nasze usługi konsultacyjne odegrały kluczową rolę w sukcesie cyfrowych działań marketingowych Swan Beauty Salon. Współpracowaliśmy ściśle z właścicielką salonu, aby zrozumieć jej unikalne potrzeby, cele i grupę docelową.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Przeprowadziliśmy szczegółową analizę strony internetowej salonu, identyfikując problemy techniczne i możliwości ulepszeń.</li>
            <li>Opracowano nową stronę docelową z jasnymi informacjami, nowymi ofertami i atrakcyjnym wizualnie wyglądem.</li>
            <li>Udzielono wskazówek dotyczących tworzenia angażujących treści wideo i optymalizacji miejsc reklamowych.</li>
            <li>Zaoferowano stałe wsparcie i doradztwo strategiczne w celu zapewnienia długoterminowego sukcesu.</li>
          </ul>
        </div>

        <p>Strategicznie łącząc te taktyki z Meta Ads, Google Ads i naszymi specjalistycznymi usługami konsultacyjnymi, stworzyliśmy silny cyfrowy plan marketingowy, który pomógł Swan Beauty Salon osiągnąć wielki sukces, jak nigdy dotąd. Wyniki mówią same za siebie: oszałamiający <strong>wzrost liczby nowych rezerwacji o 228,21%!</strong> </p> 

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              Zarezerwuj bezpłatną konsultację teraz
            </a>
          </div>
        
        <p className="mt-4">
          Ale to dopiero początek tej transformacyjnej podróży. Czytaj dalej, aby odkryć pełny zakres naszego wpływu i dowiedzieć się, jak możemy pomóc Twojemu salonowi urody osiągnąć podobne oszałamiające wyniki. Zaufaj nam, nie będziesz chciał przegapić tego, co będzie dalej!
        </p>
      </section>

      <div className="flex justify-center mt-12">
        <svg className="animate-bounce w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-4 px-4 py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center md:px-8">Od borykania się do rozkwitu: <span className='highlight highlight-orange-300 highlight-variant-5'>Świadectwo właściciela salonu</span></h2>
        <div className="mb-4 text-center">
          <img src="/img/v1/facephoto.png" alt="Natalia" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-orange-600" />
          <p className="font-bold">Natalia, właścicielka </p> 
          <p className="font-bold"><a href="https://www.swan-beauty.de/en/home/" target="_blank" rel="noopener noreferrer" className="text-orange-600"><u>Swan Beauty Salon</u></a></p>
        </div>
        <div className="md:px-8">
          <blockquote className="text-xl italic">
            "Przed rozpoczęciem współpracy z agencją Advantage byłam w naprawdę beznadziejnej sytuacji. W ciągu ostatnich 4 miesięcy liczba wizyt w moim salonie znacznie spadła. Obliczyłam, że z moimi malejącymi oszczędnościami będę w stanie utrzymać salon tylko przez kolejne 2 miesiące, jeśli sprzedaż się nie poprawi. Mój wymarzony <strong>biznes był na skraju całkowitego zamknięcia.</strong>
          </blockquote>
          <p className="mt-4">
            Miałam tak wysokie oczekiwania, kiedy skontaktowałam się z Agencją Advantage, ponieważ stawką był cały mój biznes. Patrząc teraz wstecz, zdaję sobie sprawę, jak ważna była ta decyzja. Gdybym wybrała inną agencję, która nie byłaby w stanie dostarczyć wyników, mógł to już być koniec. 
          </p>
          <p className="mt-4">
            Zespół Advantage Agency ma niesamowite zrozumienie branży urodowej. To, co byli w stanie zrobić dla Swan Beauty, jest po prostu cudem. <strong>Zwiększyli liczbę nowych zamówień</strong> o ponad 228%!
          </p>
          <p className="mt-4">
            Nie potrafię wyrazić im wystarczającej wdzięczności. Żałuję tylko, że nie znalazłam ich wcześniej - zaoszczędziłoby mi to tyle stresu i zmartwień związanych z utratą salonu.
          </p>
          <p className="mt-4">
            Teraz napływ nowych klientów jest stały i mogę skupić się na rozwijaniu salonu, zamiast myśleć o tym, jak go utrzymać. Dziewczyny z Advantage naprawdę uratowały mój biznes i spełniły moje marzenie.”
          </p>
          
        </div>
      </section>

      <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-orange-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out animate-bounce">
              Zarezerwuj bezpłatną konsultację teraz
            </a>
          </div>

      <section className="bg-white py-2 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl lg:tracking-tight text-center mb-12">
          Dlaczego warto zaufać agencji Advantage w kwestii sukcesu salonu urody?
          </h2>
          <div className="mt-10 flex justify-center overflow-x-auto">
            <table className="table-auto border-collapse w-full min-w-full sm:min-w-0">
              <thead>
                <tr>
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2 bg-gray-600 text-white font-bold uppercase tracking-wider">Inne agencje</th>
                  <th className="px-4 py-2 bg-orange-600 text-white font-bold uppercase tracking-wider">Advantage Agency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Wiedza branżowa</td>
                  <td className="border px-4 py-2">Ogólne podejście marketingowe</td>
                  <td className="border px-4 py-2 bg-orange-100">Specjalizuje się w marketingu salonów urody</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Sprawdzone wyniki</td>
                  <td className="border px-4 py-2">Niespójne wyniki</td>
                  <td className="border px-4 py-2 bg-orange-100">Zweryfikowane studia przypadków z wymiernym ROI</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Przejrzyste raportowanie</td>
                  <td className="border px-4 py-2">Niejasne raporty i wskaźniki</td>
                  <td className="border px-4 py-2 bg-orange-100">Szczegółowy panel raportowania w czasie rzeczywistym</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Partnerstwo strategiczne</td>
                  <td className="border px-4 py-2">Gotowe rozwiązania</td>
                  <td className="border px-4 py-2 bg-orange-100">Strategie dostosowane do unikalnych celów</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Usługi kompleksowe</td>
                  <td className="border px-4 py-2">Ograniczona oferta usług</td>
                  <td className="border px-4 py-2 bg-orange-100">Kompleksowe rozwiązania marketingu cyfrowego</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Proaktywna optymalizacja</td>
                  <td className="border px-4 py-2">Podejście "ustaw i zapomnij"</td>
                  <td className="border px-4 py-2 bg-orange-100">Ciągłe testowanie i optymalizacja</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Dedykowane wsparcie</td>
                  <td className="border px-4 py-2">Brak reakcji lub powolne działanie</td>
                  <td className="border px-4 py-2 bg-orange-100">Dedykowany menedżer konta, szybka obsługa</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Informacje branżowe</td>
                  <td className="border px-4 py-2">Przestarzałe taktyki</td>
                  <td className="border px-4 py-2 bg-orange-100">Innowacyjne rozwiązania i najnowsze trendy w branży salonowej</td>
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
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Gotowa do przekształcenia <span className='highlight highlight-orange-300 highlight-variant-5'>swojego salonu urody?</span></h2>
        <p className="text-center">
        Zobacz, jak nasze skuteczne techniki marketingu mogą pomóc Twojemu salonowi urody rozwinąć się i odnieść sukces bardziej niż kiedykolwiek wcześniej.
        </p>
        <div className="flex justify-center">
        
        <Formspree />
        {/* <CalendlyEmbed url="https://calendly.com/d/cpch-hhc-8tx?primary_color=ea580c"/> */}

        </div>
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Zarezerwuj bezpłatną konsultację</h2>
        
        <p className="mt-8 text-center">
        Nie przegap okazji, aby odblokować prawdziwy potencjał swojego salonu. W tej chwili <strong>możemy przyjąć nie więcej niż 3 nowych klientów,</strong> więc upewnij się, że Twoja historia będzie kolejną i zrób pierwszy krok w kierunku przekształcenia swojego biznesu, kontaktując się z nami za pośrednictwem Messengera lub rezerwując rozmowę.
       </p>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Skontaktuj się z nami</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Zadzwoń do nas</p>
              <p className="text-orange-600 text-xl">+48 64 465 4741</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Napisz do nas</p>
              <a className="text-orange-600 text-xl" href='mailto:stepan@advantage-agency.co'>stepan@advantage-agency.co</a>
            </div>
            {/* <div className="text-center">
              <p className="text-lg font-bold mb-2">Odwiedź naszą stronę internetową</p>
              <a href="https://advantage-agency.co/" target="_blank" rel="noopener noreferrer" className="text-orange-600 text-xl hover:underline">
                advantage-agency.co
              </a>
            </div> */}
          </div>
        </div>
      </section>
      <MessengerButton
        link="https://m.me/100091750525681"
        text="Czat z nami na Messengerze"
      />
    </div>
  );
};

export default V1plPage;