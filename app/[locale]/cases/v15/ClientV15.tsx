"use client"

import { NextPage } from 'next';
import { useEffect } from 'react';
import Image from 'next/image';
import '@/app/styles.css'
import MessengerButton from '@/components/MessengerButton';
import Formspree from '@/components/Formspree';
import CasesFooter from '@/components/CasesFooter'

const V15Page: NextPage = () => {
  useEffect(() => {
    document.title = "Case Study: Building Custom Scraper | 200k Leads";
  }, []);
  
  return (    
    <div className="text-black bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <section className="py-12 md:py-16">
          <div className="text-center">
            <div className="inline-block mb-4 px-6 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
              🚀 Case Study
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              How We Built Our Own Scraper and Collected 200k Leads
            </h1>

            <div className="text-left">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-yellow-100 p-3 rounded-2xl">
                  💡
                </div>
                <h2 className="text-2xl font-bold">
                  Background: Challenge and Solution Search
                </h2>
              </div>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Like any online business, we couldn't help but ask ourselves: 
                <span className="font-semibold bg-yellow-100 px-2 rounded-lg">
                  is there an effective way to extract contacts of our target audience and interact with them?
                </span>
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold">We tested several scraping services, but each had its limitations:</h3>
                </div>
                
                <ul className="space-y-4 text-base md:text-lg">
                  <li className="flex items-start gap-3">
                    <span className="my-auto text-sm">❌</span>
                    <p>Small number of obtained contacts, although we planned to get much more</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="my-auto text-sm">❌</span>
                    <p>High cost of some services that wasn't justified by real results</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="my-auto text-sm">❌</span>
                    <p>All services had volume limitations and constantly blocked accounts</p>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 my-6 md:my-10">
                <a 
                  href="#form" 
                  className="px-6 py-3 bg-blue-600 text-white text-center rounded-xl hover:bg-blue-700 transition-all inline-flex items-center justify-center gap-2 w-full sm:w-auto animate-bounce"
                >
                  🚀 Want the same scraper
                </a>
              </div>

              <div className="relative bg-gradient-to-r from-green-50 to-transparent p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">✨</span>
                  <h3 className="font-medium text-green-800">Our Solution</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We realized that to achieve results, we needed to develop{' '}
                  <span className="font-semibold text-green-600">our own solution</span>,{' '}
                  that would work on our terms. This became a challenge, as we didn't yet know that scrapers in the market quickly become outdated ⚡️, and we needed not just to extract data, but also quickly adapt the tool to new conditions
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="relative">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-blue-800 mb-4">
                Our Tools
              </span>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Here are examples of our scrapers that helped us collect leads
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="group">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="relative">
                    <div className="bg-white shadow-xl shadow-purple-100/50 rounded-[1.5rem] p-6 transition-transform duration-500 group-hover:-translate-y-2">
                      <div className="relative aspect-[909/924] rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-pink-50 to-purple-50">
                        <Image 
                          src="/img/v15/scraper-1.webp"
                          alt="Instagram Parser Interface"
                          width={909}
                          height={924}
                          className="object-contain mix-blend-multiply"
                          priority
                        />
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">📸</span>
                          <h3 className="text-xl font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                            Instagram Parser
                          </h3>
                        </div>
                        <p className="text-gray-600">
                          Intelligent tool for collecting and analyzing Instagram data
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="relative">
                    <div className="bg-white shadow-xl shadow-blue-100/50 rounded-[1.5rem] p-6 transition-transform duration-500 group-hover:-translate-y-2">
                      <div className="relative aspect-[909/924] rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-blue-50 to-cyan-50">
                        <Image 
                          src="/img/v15/scraper-2.webp"
                          alt="LinkedIn Parser Interface"
                          width={909}
                          height={924}
                          className="object-contain mix-blend-multiply"
                          priority
                        />
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">💼</span>
                          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            LinkedIn Parser
                          </h3>
                        </div>
                        <p className="text-gray-600">
                          Professional tool for working with LinkedIn data
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 md:mt-16">
          <a 
            href="#form" 
            className="px-6 py-3 bg-blue-600 text-white text-center rounded-xl hover:bg-blue-700 transition-all inline-flex items-center justify-center gap-2 w-full sm:w-auto animate-bounce"
          >
            💼 Get scraper for business
          </a>
        </div>

        <section className="py-16">
          <div className="">
            <div className="flex items-center gap-4 mb-12">
              <div className="bg-violet-100 p-3 rounded-2xl">
                🎯
              </div>
              <h2 className="text-3xl font-bold">
                Strategies and Solutions
              </h2>
            </div>

            <p className="text-xl text-gray-700 mb-12">
              After several months of testing, we decided to develop our own scraper. From this moment, the long journey 🚀 began
            </p>

            <div className="space-y-8">
              {/* Mobile version */}
              <div className="md:hidden space-y-8">
                {/* Item 1 */}
                <div className="relative">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-blue-600">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                        ⚙️
                      </div>
                      <h3 className="font-semibold">01 / Tool Development</h3>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-violet-50 p-6 rounded-2xl">
                      <p className="text-gray-700">
                        We spent over 5 months developing the first scraper to be able to extract data from various sources:
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">📧 emails</span>
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">🌐 social networks</span>
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">📝 text descriptions</span>
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">📞 phone numbers</span>
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">📍 addresses</span>
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">👔 positions</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="relative">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-green-600">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">
                        🧪
                      </div>
                      <h3 className="font-semibold">02 / Testing and Configuration</h3>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl">
                      <p className="text-gray-700">
                        This process was accompanied by numerous tests: from server configuration to checking data processing 📊
                      </p>
                      <div className="mt-4 space-y-3">
                        <div className="flex items-center gap-3 bg-white/80 backdrop-blur px-4 py-2 rounded-xl">
                          <span className="text-red-500">⚠️</span>
                          <span>Account Blocking</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/80 backdrop-blur px-4 py-2 rounded-xl">
                          <span className="text-red-500">⚠️</span>
                          <span>Data Processing Errors</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/80 backdrop-blur px-4 py-2 rounded-xl">
                          <span className="text-red-500">⚠️</span>
                          <span>Continuous Improvement of the Mechanism</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="relative">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-orange-600">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-xl">
                        🔧
                      </div>
                      <h3 className="font-semibold">03 / Solving Technical Problems</h3>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
                      <p className="text-gray-700">
                        The technical department worked on adapting the tool to rapidly changing conditions 🚀
                        <br/><br/>
                        Solving account blocking and technical glitches became a crucial step in the stability of the scraper ✅
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop version */}
              <div className="hidden md:space-y-12 md:block">
                {/* Item 1 */}
                <div className="relative pl-0">
                  <div className="grid grid-cols-[200px_1fr] gap-8">
                    <div className="text-right font-semibold text-blue-600">
                      01 / Tool Development
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-violet-50 p-6 rounded-2xl">
                      <p className="text-gray-700">
                        We spent over 5 months developing the first scraper to be able to extract data from various sources:
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">📧 emails</span>
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">🌐 social networks</span>
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">📝 text descriptions</span>
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">📞 phone numbers</span>
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">📍 addresses</span>
                        <span className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-sm">👔 positions</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="relative pl-0">
                  <div className="grid grid-cols-[200px_1fr] gap-8">
                    <div className="text-right font-semibold text-green-600">
                      02 / Testing and Configuration
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl">
                      <p className="text-gray-700">
                        This process was accompanied by numerous tests: from server configuration to checking data processing 📊
                      </p>
                      <div className="mt-4 space-y-3">
                        <div className="flex items-center gap-3 bg-white/80 backdrop-blur px-4 py-2 rounded-xl">
                          <span className="text-red-500">⚠️</span>
                          <span>Account Blocking</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/80 backdrop-blur px-4 py-2 rounded-xl">
                          <span className="text-red-500">⚠️</span>
                          <span>Data Processing Errors</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/80 backdrop-blur px-4 py-2 rounded-xl">
                          <span className="text-red-500">⚠️</span>
                          <span>Continuous Improvement of the Mechanism</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="relative pl-0">
                  <div className="grid grid-cols-[200px_1fr] gap-8">
                    <div className="text-right font-semibold text-orange-600">
                      03 / Solving Technical Problems
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
                      <p className="text-gray-700">
                        The technical department worked on adapting the tool to rapidly changing conditions 🚀
                        <br/><br/>
                        Solving account blocking and technical glitches became a crucial step in the stability of the scraper ✅
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col sm:flex-row justify-center gap-4 ">
          <a 
            href="#form" 
            className="px-6 py-3 bg-blue-600 text-white text-center rounded-xl hover:bg-blue-700 transition-all inline-flex items-center justify-center gap-2 w-full sm:w-auto animate-bounce"
          >
            Help Us Find Clients 🤝
          </a>
        </div>


        <section className="py-10">
          <div className="">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-indigo-100 p-3 rounded-2xl">
                📈
              </div>
              <h2 className="text-3xl font-bold">
                Results We Achieved
              </h2>
            </div>

            <div className="space-y-12">
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600">🔹</span>
                    <p className="text-lg">We created a comprehensive solution that allows extracting contacts from multiple sources.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600">🔹</span>
                    <div>
                      <p className="text-lg mb-2">Our tool can process and scrape large volumes of data from various platforms:</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-white px-3 py-1 rounded-full text-sm">📝 Text Descriptions</span>
                        <span className="bg-white px-3 py-1 rounded-full text-sm">📧 Emails</span>
                        <span className="bg-white px-3 py-1 rounded-full text-sm">📱 Phone Numbers</span>
                        <span className="bg-white px-3 py-1 rounded-full text-sm">👔 Positions</span>
                        <span className="bg-white px-3 py-1 rounded-full text-sm">📍 Addresses</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="bg-green-100 p-2 rounded-xl">💡</span>
                  How Can This Be Applied?
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">📨</span>
                      <h4 className="text-xl font-semibold">Email Newsletter</h4>
                    </div>
                    <p className="text-gray-700">
                      Send a hot offer to your B2B audience through cold emails. Do you have a contact list? Use our scrapers to get data and efficient mailing!
                    </p>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">📞</span>
                      <h4 className="text-xl font-semibold">Phone Calls</h4>
                    </div>
                    <p className="text-gray-700">
                      Call your target audience and make a quick, but effective cold offer using data from our scraper.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">💬</span>
                      <h4 className="text-xl font-semibold">Interaction Through Messengers</h4>
                    </div>
                    <p className="text-gray-700">
                      Lock in the person who will handle these leads through Whatsapp, Telegram, or other social networks. This will not only allow you to maintain contacts but also quickly communicate with potential clients.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">🎯</span>
                      <h4 className="text-xl font-semibold">Facebook Targeting</h4>
                    </div>
                    <p className="text-gray-700">
                      Upload your database to Facebook so that your ad appears only to your target audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="form" className="mb-16 mt-6">
          <div className="mx-auto space-y-8">
            <h2 className="text-3xl font-bold">
              Want the Same Results for Your Business? 🚀
            </h2>
            
            <p className="text-xl text-gray-700">
              Leave a request for a free consultation. We will analyze your niche and propose a strategy that will work exactly for you.
            </p>
          </div>

          <div className="w-fit mx-auto mt-8">
            <Formspree />
          </div>

          <div className="max-w-2xl mx-auto mt-8 text-center">
            <p className="text-sm text-gray-500">
              *Consultation is free and does not obligate to cooperation
            </p>
          </div>
        </section>

        <MessengerButton
          link="https://m.me/100006500822716"
          text="Chat with us on Messenger"
        />

      </div>
      <CasesFooter />
    </div>
  );
};

export default V15Page;