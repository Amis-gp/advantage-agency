"use client"

import { useState } from 'react';
import { useLocale } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';
// Імпортуємо файли перекладів напряму
import enTranslations from '@/messages/en/cold-outreach-packages.json';
import ukTranslations from '@/messages/uk/cold-outreach-packages.json';

// Типи для перекладів
type Translations = {
  process: {
    title: string;
    firstMonth: {
      title: string;
      steps: string[];
    };
    secondMonth: {
      title: string;
      steps: string[];
    };
  };
  toggleLabel: {
    initialSetup: string;
    ongoingMaintenance: string;
  };
  steps: {
    choosePackage: string;
    addServices: string;
  };
  packages: {
    prefix: string;
    verifiedLeads: string;
  };
  addons: {
    campaignManagement: {
      name: string;
    };
    customSequences: {
      name: string;
      description: string;
    };
  };
  pricing: {
    totalInvestment: string;
    monthlyInvestment: string;
    allPricesUsd: string;
    getStarted: string;
  };
  faq: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
};

// Визначення типу пакета
type Package = {
  size: string;
  setupPrice: number;
  ongoingPrice: number;
  leadsPrice: number;
  campaigns: number;
};

export default function PricingPage() {
  const [isInitialSetup, setIsInitialSetup] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState(0);
  const locale = useLocale();
  
  // Замість useTranslations використовуємо імпортовані переклади
  const translations = locale === 'uk' ? ukTranslations : enTranslations;
  
  // Функція для отримання перекладів з об'єкта
  // Update the t function to handle variables
  const t = (path: string, options?: { fallback?: string; [key: string]: any }) => {
    const keys = path.split('.');
    let result: any = translations;
    
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        return options?.fallback || path;
      }
    }
    
    // Handle variable interpolation
    if (typeof result === 'string' && options) {
      return result.replace(/\{\{(\w+)\}\}/g, (match, key) => {
        return options[key]?.toString() || match;
      });
    }
    
    return result;
  };
  
  // Додаємо raw метод для отримання масивів
  t.raw = (path: string) => {
    return t(path);
  };
  
  const [abTestCount, setAbTestCount] = useState(0);
  
  // Опції для додаткових послуг
  const [options, setOptions] = useState({
    campaign: false,
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
    bonus: { 
      name: "One A/B text sequence - $50", 
      price: 50, 
      description: "1 additional marketing approach (includes 3 emails)"
    },
    campaign: { 
      name: "Campaign management", 
      price: 60, 
      description: isInitialSetup 
        ? "Professional campaign management and optimization (always included)" 
        : "Professional campaign management and optimization (recommended)" 
    },
    sequence: { 
      name: "Custom text sequences", 
      price: 50, 
      description: "Changes to text sequences in the second month ($50 per approach change)" 
    }
  };
  
  // Отримати поточний вибраний пакет
  const currentPackage = packages[selectedPackage];
  
  // Розрахунок ціни для A/B тестів на основі кількості тестів і пакету
  const calculateABTestPrice = () => {
    if (abTestCount === 0) {
      return 0; // Якщо 0 тестів, ціна 0
    }
    
    if (selectedPackage === 0) { // 1K пакет
      return abTestCount * addons.bonus.price;
    } else { // 2K+ пакети
      if (abTestCount <= 2) {
        return 50; // 1-2 тести коштують $50
      } else if (abTestCount === 3) {
        return 100; // 3 тести коштують $100
      } else if (abTestCount === 4) {
        return 150; // 4 тести коштують $150
      }
    }
    return 0;
  };

  // Розрахунок загальної суми
  const calculateTotal = () => {
    let total = isInitialSetup ? currentPackage.setupPrice : 0;
    
    // Додаємо вартість лідів, якщо це подальші місяці
    if (!isInitialSetup) {
      total += currentPackage.leadsPrice;
      
      // Додаємо ціну A/B тестів
      total += calculateABTestPrice();
      
      if (options.campaign) total += addons.campaign.price;  // Remove multiplication by campaigns
      if (options.sequence) total += addons.sequence.price;
    } else {
      // Для Initial Setup додаємо тільки A/B тестування
      total += calculateABTestPrice();
    }
    
    return total;
  };
  
  // Форматування ціни у доларах
  const formatPrice = (price: number) => {
    return `$${price.toLocaleString()}`;
  };
  
  // Перемикання опцій
  const toggleOption = (option: keyof typeof options) => {
    setOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  // Функція для розрахунку відображуваної ціни пакету
  const getPackageDisplayPrice = (packageItem: typeof packages[0]) => {
    if (isInitialSetup) {
      // В режимі Initial Setup показуємо повну ціну пакету
      return packageItem.setupPrice;
    } else {
      // В режимі Ongoing Maintenance показуємо ціну за ліди + campaign management
      return packageItem.leadsPrice;
    }
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <LanguageSwitcher />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-slate-800 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {t('pricing.title', { fallback: 'Cold Outreach Packages' })}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-600">
            {t('pricing.subtitle', { fallback: 'Get more leads with our professional cold email campaigns that actually convert.' })}
          </p>
        </div>
        
        {/* Процес - пояснення */}
        <div className="my-16 bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">{t('process.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {t('process.firstMonth.title')}
              </h3>
              <ul className="space-y-2">
                {Array.isArray(t.raw('process.firstMonth.steps')) 
                ? t.raw('process.firstMonth.steps').map((step: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span className="text-slate-700">{step}</span>
                    </li>
                  ))
                : null}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {t('process.secondMonth.title')}
              </h3>
              <ul className="space-y-2">
                {Array.isArray(t.raw('process.secondMonth.steps')) 
                ? t.raw('process.secondMonth.steps').map((step: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span className="text-slate-700">{step}</span>
                    </li>
                  ))
                : null}
              </ul>
            </div>
          </div>
        </div>
        
        <div className='rounded-xl shadow-xl overflow-hidden border border-gray-100'>
          {/* Перемикач "Initial Setup/Ongoing" */}
          <div className="mt-16 flex justify-center">
            <div className="relative bg-gray-100 rounded-full p-1 flex shadow-sm">
              <button
                className={`${isInitialSetup ? 'bg-blue-500 text-white' : 'bg-transparent text-slate-700'} relative py-2 px-6 rounded-full transition-all duration-300 focus:outline-none`}
                onClick={() => setIsInitialSetup(true)}
              >
                {t('toggleLabel.initialSetup')}
              </button>
              <button
                className={`${!isInitialSetup ? 'bg-blue-500 text-white' : 'bg-transparent text-slate-700'} relative py-2 px-6 rounded-full transition-all duration-300 focus:outline-none`}
                onClick={() => setIsInitialSetup(false)}
              >
                {t('toggleLabel.ongoingMaintenance')}
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-slate-700">
              {isInitialSetup 
                ? t('toggleLabel.initialDescription')
                : t('toggleLabel.ongoingDescription')
              }
            </p>
          </div>

          {/* Конструктор пакету */}
          <div className="mt-12 bg-white">
            <div className="p-6">
              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">1. {t('steps.choosePackage')}</h2>
                  
                  {/* Вибір пакету */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                    {packages.map((pkg, index) => (
                      <div 
                        key={index}
                        className={`border rounded-xl p-6 text-center cursor-pointer transition-all hover:shadow-md ${
                          selectedPackage === index ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                        } ${index === 2 ? 'ring-2 ring-blue-500 relative' : ''}`}
                        onClick={() => setSelectedPackage(index)}
                      >
                        {index === 2 && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs py-1 px-3 rounded-full">
                            Most Popular
                          </div>
                        )}
                        <h3 className="text-xl font-bold text-slate-800 mb-3">{t('packages.prefix', { fallback: 'Package' })} {pkg.size}</h3>
                        <div className="text-2xl font-bold text-blue-600 mb-2">${getPackageDisplayPrice(pkg)}</div>
                        <div className="text-slate-600">{pkg.size} {t('packages.verifiedLeads', { fallback: 'verified leads' })}</div>
                        {isInitialSetup && (
                          <div className="text-slate-600 mt-1">+ {pkg.campaigns} campaign{pkg.campaigns > 1 ? 's' : ''}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">2. {t('steps.addServices')}</h2>
                  
                  {/* Додаткові послуги */}
                  <div className="space-y-4">
                    {/* A/B Testing */}
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <div className="font-medium text-slate-800">{t('addons.abTesting.name')}</div>
                        <div className="text-sm text-slate-600">
                          {t('addons.abTesting.description')}
                          {selectedPackage >= 1 && (
                            <span className="block mt-1 text-green-600 font-medium">
                              {t('addons.abTesting.bonusMessage')}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="font-medium text-blue-600">
                          ${calculateABTestPrice()}
                        </div>
                        <div className="flex items-center bg-gray-100 rounded-md">
                          <button 
                            className="px-2 py-1 text-gray-700 disabled:text-gray-400"
                            onClick={() => setAbTestCount(Math.max(0, abTestCount - 1))}
                            disabled={abTestCount <= 0}
                          >
                            -
                          </button>
                          <span className="px-2 py-1">{abTestCount}</span>
                          <button 
                            className="px-2 py-1 text-gray-700 disabled:text-gray-400"
                            onClick={() => setAbTestCount(Math.min(currentPackage.campaigns, abTestCount + 1))}
                            disabled={abTestCount >= currentPackage.campaigns}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Campaign Management - показуємо тільки в режимі Ongoing */}
                    {!isInitialSetup && (
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <div className="font-medium text-slate-800">{t('addons.campaignManagement.name')}</div>
                          <div className="text-sm text-slate-600">
                            {t('addons.campaignManagement.description', { campaigns: currentPackage.campaigns })}
                            <span className="text-blue-600 font-medium"> {t('addons.campaignManagement.recommended')}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="font-medium text-blue-600">${addons.campaign.price}</div>
                          <div className="relative inline-block w-12 h-6">
                            <input 
                              type="checkbox" 
                              className="sr-only"
                              checked={options.campaign}
                              onChange={() => toggleOption('campaign')}
                              id="toggleCampaign"
                            />
                            <label 
                              htmlFor="toggleCampaign"
                              className={`block w-full h-full rounded-full cursor-pointer transition-colors ${options.campaign ? 'bg-blue-500' : 'bg-gray-300'}`}
                            >
                              <span 
                                className={`absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-200 ${options.campaign ? 'translate-x-6' : 'translate-x-0'}`}
                              ></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Custom Text Sequences - показуємо тільки в режимі Ongoing */}
                    {!isInitialSetup && (
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <div className="font-medium text-slate-800">{t('addons.customSequences.name')}</div>
                          <div className="text-sm text-slate-600">{t('addons.customSequences.description')}</div>
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
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Сумарна вартість */}
            <div className="mt-10 pt-8 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-white p-6 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <div className="text-xl font-semibold text-slate-800">
                    {isInitialSetup ? t('pricing.totalInvestment') : t('pricing.monthlyInvestment')}
                  </div>
                  <div className="text-sm text-slate-600 mt-1">{t('pricing.allPricesUsd')}</div>
                </div>
                <div className="text-2xl font-bold text-blue-600 mt-4 md:mt-0 bg-white px-8 py-3 rounded-full shadow-sm border border-blue-100">
                  ${calculateTotal()}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        

        <div className="mt-24">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">{t('faq.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.isArray(t.raw('faq.items')) 
              ? t.raw('faq.items').map((item: { question: string, answer: string }, index: number) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.question}</h3>
                  <p className="text-slate-700">{item.answer}</p>
                </div>
              ))
            : null}
          </div>
        </div>
      </div>
    </div>
  );
}
