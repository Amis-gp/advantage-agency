"use client"

import { useState } from 'react';
import { useLocale } from 'next-intl';
import enTranslations from '@/messages/en/cold-outreach-packages.json';
import ukTranslations from '@/messages/uk/cold-outreach-packages.json';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function PricingPage() {
  const [isInitialSetup, setIsInitialSetup] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState(0);
  const locale = useLocale();
  
  // Вибираємо переклади залежно від поточної локалі
  const t = locale === 'uk' ? ukTranslations.pricing : enTranslations.pricing;
  
  // Опції для додаткових послуг
  const [options, setOptions] = useState({
    bonus: false,
    campaign: true, // Завжди включено
    sequence: false
  });
  
  // Базові пакети (з включеним управлінням кампанією)
  const packages = [
    { size: "1K", setupPrice: 850, ongoingPrice: 0, leadsPrice: 85, campaigns: 1 },
    { size: "2K", setupPrice: 1350, ongoingPrice: 0, leadsPrice: 170, campaigns: 2 },
    { size: "3K", setupPrice: 1850, ongoingPrice: 0, leadsPrice: 255, campaigns: 3 },
    { size: "4K", setupPrice: 2250, ongoingPrice: 0, leadsPrice: 340, campaigns: 4 }
  ];
  
  // Додаткові послуги
  const addons = {
    bonus: { name: "A/B testing", price: 50, description: "Testing different subject lines and content variations" },
    campaign: { name: "Campaign management", price: 60, description: "Professional campaign management and optimization (always included)" },
    sequence: { name: "Custom text sequences", price: 50, description: "Development of personalized follow-up sequences" }
  };
  
  // Отримати поточний вибраний пакет
  const currentPackage = packages[selectedPackage];
  
  // Розрахунок загальної суми
  const calculateTotal = () => {
    let total = isInitialSetup ? currentPackage.setupPrice : 0;
    
    // Додаємо вартість лідів, якщо це подальші місяці
    if (!isInitialSetup) {
      total += currentPackage.leadsPrice;
      
      // Для подальших місяців додаємо опції окремо
      if (options.bonus) total += addons.bonus.price;
      if (options.campaign) total += addons.campaign.price * currentPackage.campaigns;
      if (options.sequence) total += addons.sequence.price;
    }
    
    return total;
  };
  
  // Форматування ціни у доларах
  const formatPrice = (price) => {
    return `$${price.toLocaleString()}`;
  };
  
  // Перемикання опцій
  const toggleOption = (option) => {
    setOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  // Функція для розрахунку відображуваної ціни пакету
  const getPackageDisplayPrice = (packageItem) => {
    if (isInitialSetup) {
      // В режимі Initial Setup показуємо повну ціну пакету
      return packageItem.setupPrice;
    } else {
      // В режимі Ongoing Maintenance показуємо ціну за ліди + campaign management
      return packageItem.leadsPrice + (addons.campaign.price * packageItem.campaigns);
    }
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-slate-800 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Cold Outreach Packages
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-600">
            Get more leads with our professional cold email campaigns that actually convert.
          </p>
        </div>
        
        {/* Процес - пояснення */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">{t.process.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{t.process.firstMonth.title}</h3>
              <ul className="space-y-2">
                {t.process.firstMonth.steps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-slate-700">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{t.process.secondMonth.title}</h3>
              <ul className="space-y-2">
                {t.process.secondMonth.steps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-slate-700">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Перемикач "Initial Setup/Ongoing" */}
        <div className="mt-16 flex justify-center">
          <div className="relative bg-gray-100 rounded-full p-1 flex shadow-sm">
            <button
              className={`${isInitialSetup ? 'bg-blue-500 text-white' : 'bg-transparent text-slate-700'} relative py-2 px-6 rounded-full transition-all duration-300 focus:outline-none`}
              onClick={() => setIsInitialSetup(true)}
            >
              {t.toggleLabel.initialSetup}
            </button>
            <button
              className={`${!isInitialSetup ? 'bg-blue-500 text-white' : 'bg-transparent text-slate-700'} relative py-2 px-6 rounded-full transition-all duration-300 focus:outline-none`}
              onClick={() => setIsInitialSetup(false)}
            >
              {t.toggleLabel.ongoingMaintenance}
            </button>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-lg text-slate-700">
            {isInitialSetup 
              ? "Initial 2-month package includes complete setup, strategy development, lead verification, and campaign launch" 
              : "After initial setup, choose only the services you need for ongoing campaign maintenance"}
          </p>
        </div>

        {/* Конструктор пакету */}
        <div className="mt-12 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-800">
              {isInitialSetup ? "Choose your initial package" : "Continue with monthly services"}
            </h2>
            <p className="text-slate-600 mt-2">
              {isInitialSetup ? "Select your package size and optional services" : "Select only the services you need"}
            </p>
          </div>
          
          <div className="p-6">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">1. {t.steps.choosePackage}</h2>
                
                {/* Вибір пакету */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                  {packages.map((pkg, index) => (
                    <div 
                      key={index}
                      className={`border rounded-xl p-6 text-center cursor-pointer transition-all hover:shadow-md ${selectedPackage === index ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                      onClick={() => setSelectedPackage(index)}
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-3">{t.packages.prefix} {pkg.size}</h3>
                      <div className="text-2xl font-bold text-blue-600 mb-2">${getPackageDisplayPrice(pkg)}</div>
                      <div className="text-slate-600">{pkg.size} {t.packages.verifiedLeads}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">2. {t.steps.addServices}</h2>
                
                {/* Додаткові послуги */}
                <div className="space-y-4">
                  {/* A/B Testing */}
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium text-slate-800">{t.addons.abTesting.name}</div>
                      <div className="text-sm text-slate-600">{t.addons.abTesting.description}</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="font-medium text-blue-600">${addons.bonus.price}</div>
                      <div className="relative inline-block w-12 h-6">
                        <input 
                          type="checkbox" 
                          className="sr-only"
                          checked={options.bonus}
                          onChange={() => toggleOption('bonus')}
                          id="toggleBonus"
                        />
                        <label 
                          htmlFor="toggleBonus"
                          className={`block w-full h-full rounded-full cursor-pointer transition-colors ${options.bonus ? 'bg-blue-500' : 'bg-gray-300'}`}
                        >
                          <span 
                            className={`absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-200 ${options.bonus ? 'translate-x-6' : 'translate-x-0'}`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Campaign Management (завжди включено) */}
                  <div className="flex items-center justify-between p-4 border border-gray-200 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-slate-800">{t.addons.campaignManagement.name}</div>
                      <div className="text-sm text-slate-600">{t.addons.campaignManagement.description}</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="font-medium text-blue-600">${addons.campaign.price * currentPackage.campaigns}</div>
                      <div className="relative inline-block w-12 h-6">
                        <div className="block w-full h-full rounded-full bg-blue-500">
                          <span className="absolute top-0.5 right-0.5 bg-white w-5 h-5 rounded-full"></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Custom Text Sequences */}
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium text-slate-800">{t.addons.customSequences.name}</div>
                      <div className="text-sm text-slate-600">{t.addons.customSequences.description}</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="font-medium text-blue-600">${addons.sequence.price}</div>
                      <div className="relative inline-block w-12 h-6">
                        <input 
                          type="checkbox" 
                          className="sr-only"
                          checked={options.sequence}
                          onChange={() => toggleOption('sequence')}
                          id="toggleSequence"
                        />
                        <label 
                          htmlFor="toggleSequence"
                          className={`block w-full h-full rounded-full cursor-pointer transition-colors ${options.sequence ? 'bg-blue-500' : 'bg-gray-300'}`}
                        >
                          <span 
                            className={`absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-200 ${options.sequence ? 'translate-x-6' : 'translate-x-0'}`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Сумарна вартість */}
            <div className="mt-8 pt-6 border-t border-gray-200 md:mt-0 md:pt-0 md:border-t-0">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-lg font-medium text-slate-800">
                    {isInitialSetup ? t.pricing.totalInvestment : t.pricing.monthlyInvestment}
                  </div>
                  <div className="text-sm text-slate-600">{t.pricing.allPricesUsd}</div>
                </div>
                <div className="text-3xl font-bold text-blue-600">${calculateTotal()}</div>
              </div>
              
              <div className="mt-6">
                <button className="w-full py-3 px-6 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  {t.pricing.getStarted}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Додаткові послуги - окремо для наочності */}
        <div className="mt-16 bg-slate-900 text-white rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6">Optional services breakdown</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-800 p-5 rounded-xl">
              <div className="text-xl font-bold mb-2">A/B Testing</div>
              <div className="text-3xl font-bold text-blue-300 mb-3">${addons.bonus.price}</div>
              <div className="text-slate-300 text-sm">Testing different subject lines and content variations</div>
            </div>
            
            <div className="bg-slate-800 p-5 rounded-xl">
              <div className="text-xl font-bold mb-2">Lead Verification</div>
              <div className="text-3xl font-bold text-blue-300 mb-3">${packages[0].leadsPrice}/1K</div>
              <div className="text-slate-300 text-sm">Scraping and verification of quality leads</div>
            </div>
            
            <div className="bg-slate-800 p-5 rounded-xl">
              <div className="text-xl font-bold mb-2">Campaign Management</div>
              <div className="text-3xl font-bold text-blue-300 mb-3">${addons.campaign.price}/campaign</div>
              <div className="text-slate-300 text-sm">Expert handling of campaign performance</div>
            </div>
            
            <div className="bg-slate-800 p-5 rounded-xl">
              <div className="text-xl font-bold mb-2">Custom Sequences</div>
              <div className="text-3xl font-bold text-blue-300 mb-3">${addons.sequence.price}</div>
              <div className="text-slate-300 text-sm">Personalized follow-up sequences</div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">{t.faq.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.faq.items.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-slate-800">{item.question}</h3>
                <p className="mt-2 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
