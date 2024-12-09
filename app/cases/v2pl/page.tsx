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
    document.title = "Historia sukcesu Queen of Beauty";
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
        <u>Queen of Beauty</u> Queen of Beauty zwiększył miesięczne przychody o <span className='highlight'>194%</span>
        </h1>
        <h2 className="text-2xl font-semibold mb-8 text-center text-rose-600">
        Dzięki zastosowaniu reklam w serwisach YouTube i TikTok.
        </h2>
        <div className="mb-12">
          <p className="mb-4">
          Przedstawiamy Queen of Beauty, luksusowy salon urody w Londynie oferujący wysokiej klasy usługi, takie jak botoks, lifting, zabiegi na twarz i wybielanie zębów. Pomimo wysokiej jakości usług, właścicielka Apolinariya <strong>chciała przenieść swój salon na wyższy poziom</strong> i skalować liczbę salonów w przyszłości.  Queen of Beauty generowała leady poprzez platformę “fresha” ( analog booksy ), reklamy na Youtube oraz ruch organiczny ze strony internetowej.
          </p>
          <p className="mb-4">
          Apolinariya zwróciła się do naszej agencji szukając sposobu na zwiększenie liczby zapisów, aby skalować swój biznes. Jako <strong>eksperci w branży urody</strong>, dobrze zrozumieliśmy potrzeby Queen of Beauty, musieliśmy opracować spersonalizowaną strategię marketingową i skonfigurować nowe kanały ruchu, aby przyciągnąć więcej osób.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-3/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Wyzwania:</h2>
            <ul className="list-disc inline-block text-left pl-6 space-y-2">
              <li>Trudności w pozyskiwaniu nowych klientów na usługi premium</li>
              <li>Brak rozpoznawalności marki i zaufania na konkurencyjnym rynku</li>
              <li>Niewystarczająca liczba zainteresowanych użytkowników z wykorzystywanych źródeł ruchu</li>
              <li>Wysoka cena za pokazy na YouTube</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img src="/img/v2/hero.jpg" alt="Challenges Image" className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Nasze podejście:</h2>
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-rose-500 to-rose-600 text-white">
              <tr>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Etap</th>
                <th className="px-4 py-2 font-semibold uppercase tracking-wider">Działania</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">1</td>
                <td className="px-4 py-2">
                Przeprowadziliśmy analizę grupy docelowej, konkurencji i unikalnej oferty Queen of Beauty.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">2</td>
                <td className="px-4 py-2">
                Opracowaliśmy kompleksowy plan marketingowy skupiający się na YouTube i TikTok.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">3</td>
                <td className="px-4 py-2">
                Stworzyliśmy wideo kreacje, które przyciągały uwagę na wybranych platformach.
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-2 whitespace-nowrap font-medium">4</td>
                <td className="px-4 py-2">
                Przeprowadziliśmy nowe testy A/B, prowadziliśmy ciągłą optymalizację kampanii
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center w-full mt-14 mb-8 text-center">
          <a href="#form" className="bg-rose-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-rose-700 transition duration-300 ease-in-out animate-bounce">
          Zarezerwuj bezpłatną konsultację teraz
          </a>
        </div>
      </section>

      <section className="mb-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">YouTube: <span className='highlight highlight-rose-300 highlight-variant-5'>od wąskiego targetowania do szerokiego zaangażowania</span></h2>
        <p className="mb-8">
        Reklama YouTube Shorts Queen of Beauty początkowo była skierowana do wąskiej grupy odbiorców, wyświetlając reklamy na kanałach autorów, którzy rozmawiali o usługach kosmetycznych. Podejście to <strong>okazało się drogie,</strong> z wysokim kosztem kliknięcia i ograniczonym zasięgiem.
        </p>
        <p className="mb-8">
        Nasze rozwiązanie? Przełączyliśmy się na szerszą grupę odbiorców, kierując reklamy do kobiet w wieku 20-50 lat i zmieniliśmy nasze podejście do targetowania. Ta strategiczna zmiana przyniosła zaskakujące rezultaty:</p>

        <div className="mb-8">
          
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Przed</h4>
                <ul className="space-y-2">
                  <li><strong>Wyświetlenia:</strong> ~8 628</li>
                  <li><strong>Kliknięcia:</strong> 649</li>
                  <li><strong>Liczba zapisów:</strong> 5</li>
                  <li><strong>Przychód:</strong>  239 GBP</li>
                  <li><strong>Koszty reklamy:</strong> 837 GBP</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-rose-600">
                <h4 className="text-2xl font-bold mb-4 text-rose-600">Po</h4>
                <ul className="space-y-2">
                  <li><strong>Wyświetlenia:</strong> ~24 540</li>
                  <li><strong>Kliknięcia:</strong> 2 387 </li>
                  <li><strong>Liczba zapisów:</strong> 59</li>
                  <li><strong>Przychód:</strong>  11 800 GBP</li>
                  <li><strong>Koszty reklamy:</strong> 1 567 GBP</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mb-4">
          Zwiększając zasięg Queen of Beauty, znacznie obniżyliśmy cenę za kliknięcie, jednocześnie zwiększając liczbę zapisów i przychody w ciągu 2 miesięcy.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Wyniki:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-rose-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-rose-600 text-white py-2 rounded-t-lg">Przed początkiem naszej współpracy</h4>
                    <img src="/img/v2/stata_google_before_case2.jpg" alt="Before Results Screenshot" onClick={openModalBeforeMeta} className="mx-auto border border-gray-300 rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out cursor-pointer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-rose-600 text-white py-2 rounded-t-lg">Po 2 miesiącach naszej współpracy</h4>
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
                            Przed początkiem naszej współpracy
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
                              <img src="/img/v2/stata_google_after_case2.jpg" alt="After Results Screenshot" style={{ width: 'auto', height: 'auto' }} />
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
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
          <a href="#form" className="bg-rose-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-rose-700 transition duration-300 ease-in-out animate-bounce">
            Zarezerwuj bezpłatną konsultację teraz
          </a>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8"><span className='highlight highlight-green-200 highlight-variant-5'>TikTok:</span> Budowanie zaufania</h3>
          <p className="mb-4">
          Queen of Beauty z ledwością utrzymywała profil TikTok z powodu braku treści, z zaledwie 4 filmami dostępnymi przez cały czas. Ten ograniczony kontent nie budował zaufania i ekspertyzy, co powodowało niskie zaangażowanie i brak interakcji.
          </p>
          <p className="mb-4">
          Aby rozwiązać ten problem, <strong>wdrożyliśmy strategię</strong> skoncentrowaną na kontencie:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Ciągłe dodawanie wysokiej jakości filmików informacyjnych prezentujących usługi i doświadczenie Queen of Beauty.</li>
            <li>ОPodkreślone transformacje klientów i opinie, aby budować zaufanie</li>
            <li>Zaangażowanie społeczności TikTok poprzez komentarze, lajkowanie i udostępnianie.</li>
          </ul>
          <p className="mb-4">
          Z biegiem czasu, gdy profil Queen of Beauty na TikTok rozrastał się, potencjalni klienci, którzy kliknęli w reklamę, otrzymywali mnóstwo treści świadczących o profesjonalizmie salonu.
          </p>
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
                <h4 className="text-2xl font-bold mb-4 text-gray-600">Przed</h4>
                <ul className="space-y-2">
                  <li><strong>Wyświetlenia:</strong> 0</li>
                  <li><strong>Kliknięcia:</strong> 0</li>
                  <li><strong>Liczba zapisów:</strong> 0</li>
                  <li><strong>Przychody:</strong>  0 GBP</li>
                  <li><strong>Wydatki na reklamę:</strong> 0 GBP</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-rose-600">
                <h4 className="text-2xl font-bold mb-4 text-rose-600">Po</h4>
                <ul className="space-y-2">
                  <li><strong>Wyświetlenia:</strong> 72 570</li>
                  <li><strong>Kliknięcia:</strong> 1 930 </li>
                  <li><strong>Liczba zapisów:</strong> 89</li>
                  <li><strong>Przychody:</strong>  17 800 GBP</li>
                  <li><strong>Wydatki na reklamę:</strong> 2 269 GBP</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mb-4">
          Wykorzystując siłę kontentu, przeobraziliśmy obecność Queen of Beauty na TikTok w maszynę do generowania przychodów.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Wyniki:</h3>
                <div className="grid grid-cols-1 gap-8 border-2 border-rose-600 rounded-lg p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-center bg-rose-600 text-white py-2 rounded-t-lg">Po 2 miesiącach naszej współpracy</h4>
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
                            Po 2 miesiącach naszej współpracy
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
          Kampanie reklamowe na YouTube i TikTok zwiększyły obecność Queen of Beauty na rynku i przyniosły dobre wyniki w czasie naszej pracy.
          </p>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-rose-600">
              <ul className="space-y-2">
                <li><strong>ROI:</strong> 740%</li>
                <li><strong>Całkowita liczba zapisów:</strong> 142 </li>
                <li><strong>Koszty na reklamę:</strong> 3 836 GBP</li>
                <li><strong>Przychody:</strong> 28 400 GBP</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-14 mb-8 text-center">
            <a href="#form" className="bg-rose-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-rose-700 transition duration-300 ease-in-out animate-bounce">
              Zarezerwuj bezpłatną konsultację teraz
            </a>
          </div>
        <p className="mb-8">
        Liczby zawsze przemawiają głośniej niż słowa. Wykorzystaliśmy informacje i starannie opracowane strategie marketingowe w naszej metodzie, aby poprawić widoczność salonu Queen of Beauty w Internecie, co zaowocowało napływem <strong>nowych klientów</strong> i znacznym wzrostem przychodów. Ale nie wierz nam na słowo - czytaj dalej, aby usłyszeć nasze wyniki bezpośrednio od właściciela salonu.
        </p>
      </section>

      <div className="flex justify-center mt-8">
        <svg className="animate-bounce w-12 h-12 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <section className="mb-12 mt-8 px-4 py-8  bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Od zmagań do rozkwitu: <span className='highlight highlight-rose-300 highlight-variant-5'>Wypowiedź właścicielki salonu</span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src="/img/v2/facephoto.jpg" alt="Natalia Kowalska" className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-rose-600" />
            <p className="font-bold text-center">Apolinaria</p> 
            <p className="text-center">właścicielką <a href="https://queenofbeautyuk.com/" target="_blank" rel="noopener noreferrer" className="text-rose-600"><strong><u>Queen of Beauty</u></strong></a></p>
          </div>
          <div className="md:w-2/3 md:px-8">
            <blockquote className="text-xl italic mb-4">"Jako właścicielku firmy zdaję sobie sprawę, jak ważny jest wybór odpowiednich partnerów, zwłaszcza jeśli chodzi o marketing. Być może jak większość właścicieli firm miałam negatywne doświadczenia z różnymi agencjami marketingowymi, ale to nie powstrzymało mnie przed osiągnięciem mojego celu. Nie lubię nikogo chwalić, ale agencji Advantage naprawdę udało się mnie pozytywnie zaskoczyć, nasza współpraca była nie tylko przyjemna, ale i bardzo owocna."
            </blockquote>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-8 mb-8 text-center">
            <a href="#form" className="bg-rose-600 text-white px-8 py-4 text-2xl font-bold rounded hover:bg-rose-700 transition duration-300 ease-in-out animate-bounce">
              Zarezerwuj bezpłatną konsultację teraz
            </a>
          </div>

      <section className="mb-12 mt-8">
        <h2 id="form" className="text-3xl font-bold mb-8 text-center">Rozwiń swój salon urody <span className='highlight highlight-rose-300 highlight-variant-5'>dzięki sprawdzonym strategiom</span></h2>
        <p className="text-center">
        Gotowi na transformację jak Queen of Beauty? Uwolnij pełny potencjał swojego salonu urody, korzystając z naszych unikalnych technik budowania lejka i tworzenia historii, przyciągając ponad 50 wizyt tygodniowo, dzięki czemu możesz skupić się na świadczeniu najwyższej jakości usług i spędzaniu czasu z rodziną
        </p>
        <div className="flex justify-center">
        
        <Formspree />
        {/* <CalendlyEmbed url="https://calendly.com/d/cpch-hhc-8tx?primary_color=ea580c"/> */}

        </div>
        <p className="mt-8 text-center">
        Obecnie możemy przyjąć <strong>maksymalnie 3 nowych klientów,</strong> więc upewnij się, że Twoja historia sukcesu będzie następna i zrób pierwszy krok w kierunku przekształcenia swojej firmy, kontaktując się z nami za pośrednictwem Messengera lub umawiając się na rozmowę z nami.
        </p>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Skontaktuj się z nami</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Zadzwoń do nas</p>
              <p className="text-rose-600 text-xl">+48 64 465 4741</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-2">Napisz do nas</p>
              <a className="text-rose-600 text-xl" href='mailto:stepan@advantage-agency.co'>stepan@advantage-agency.co</a>
            </div>
            {/* <div className="text-center">
              <p className="text-lg font-bold mb-2">Odwiedź naszą stronę internetową</p>
              <a href="https://advantage-agency.co/" target="_blank" rel="noopener noreferrer" className="text-rose-600 text-xl hover:underline">
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

export default V2ruPage;