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
    infrastructure?: {
      title: string;
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
  
  // Add the toggleOption function
  const toggleOption = (option: 'campaign' | 'sequence') => {
    setOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };
  
  // Базові пакети (з включеним управлінням кампанією)
  const packages = [
    { size: "1K", setupPrice: 850, ongoingPrice: 0, leadsPrice: 85, campaigns: 1 },
    { size: "2K", setupPrice: 1350, ongoingPrice: 0, leadsPrice: 170, campaigns: 2 },
    { size: "3K", setupPrice: 1850, ongoingPrice: 0, leadsPrice: 255, campaigns: 3 },
    { size: "5K", setupPrice: 2950, ongoingPrice: 0, leadsPrice: 425, campaigns: 5 },
    { size: "7K", setupPrice: 3950, ongoingPrice: 0, leadsPrice: 595, campaigns: 7 },
    { size: "10K", setupPrice: 5450, ongoingPrice: 0, leadsPrice: 850, campaigns: 10 }
  ];
  
  const addons = {
    campaign: { 
      name: "Campaign management", 
      price:selectedPackage === 0 ? 60 : 
            selectedPackage === 1 ? 80 : 
            selectedPackage === 2 ? 99 : 
            selectedPackage === 3 ? 180 : 
            selectedPackage === 4 ? 240 : 
            299, 
      description: isInitialSetup 
        ? "Professional campaign management and optimization (always included)" 
        : "Professional campaign management and optimization (recommended)" 
    },
    sequence: { 
      name: "Custom text sequences", 
      price: 50, 
      description: "Changes to text sequences in the second month (€50 per approach change)" 
    },
    // Додаємо інфраструктурні платежі
    infrastructure: {
      esp: {
        name: "ESP (Email Service Provider)",
        price: 97,
        description: "Email service provider subscription (fixed price)"
      },
      domain: {
        name: "Domain",
        price: 8.88,
        description: "Domain registration per campaign"
      },
      workspace: {
        name: "Google Workspace (Starter)",
        price: 28,
        description: "Email sender accounts. 8 senders per 1K package"
      }
    }
  };
  
  const currentPackage = packages[selectedPackage];
  
  const calculateABTestPrice = () => {
    if (abTestCount === 0) {
      return 0;
    }
    
    if (selectedPackage === 0) { // 1K пакет
      return abTestCount;
    } else { // 2K+ пакети
      if (abTestCount <= 2) {
        return 50; // 1-2 тести коштують €50
      } else if (abTestCount === 3) {
        return 100; // 3 тести коштують €100
      } else if (abTestCount === 4) {
        return 150; // 4 тести коштують €150
      }
    }
    return 0;
  };

  // Розрахунок загальної суми
  const calculateTotal = () => {
    let total = 0;
    
    // Використовуємо стандартний розрахунок для всіх пакетів
    total = isInitialSetup ? currentPackage.setupPrice : 0;
    
    // Додаємо вартість контактів, якщо це подальші місяці
    if (!isInitialSetup) {
      total += currentPackage.leadsPrice;
      
      // Додаємо ціну A/B тестів
      total += calculateABTestPrice();
      
      if (options.campaign) total += addons.campaign.price;
      if (options.sequence) total += addons.sequence.price;
    } else {
      // Для Initial Setup додаємо тільки A/B тестування
      total += calculateABTestPrice();
    }
    
    // Add infrastructure costs for all packages
    // ESP - фіксована ціна
    total += addons.infrastructure.esp.price;
    
    // Домен і Workspace - залежать від розміру пакету (кількості кампаній)
    total += addons.infrastructure.domain.price * currentPackage.campaigns;
    total += addons.infrastructure.workspace.price * currentPackage.campaigns;
    
    return total;
  };

  // Оновлюємо функцію getPackageDisplayPrice для роботи з новими пакетами
  const getPackageDisplayPrice = (packageItem: typeof packages[0]) => {
    if (isInitialSetup) {
      return packageItem.setupPrice.toString();
    } else {
      return packageItem.leadsPrice.toString();
    }
  };

  // Get maximum allowed A/B tests based on package
  const getMaxAbTests = (packageIndex: number) => {
    switch (packageIndex) {
      case 0: // 1K package
        return 1;
      case 1: // 2K package
        return 2;
      case 2: // 3K package
        return 3;
      case 3: // 5K package
        return 4;
      case 4: // 7K package
        return 5;
      case 5: // 10K package
        return 6;
      default:
        return 1;
    }
  };

  // Handle package change and adjust A/B test count if needed
  const handlePackageChange = (index: number) => {
    const maxTests = getMaxAbTests(index);
    
    // If current abTestCount exceeds the max for the new package, adjust it
    if (abTestCount > maxTests) {
      setAbTestCount(maxTests);
    }
    
    setSelectedPackage(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] text-gray-200 pb-20 relative overflow-hidden">

      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>
      
      <LanguageSwitcher />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
            {t('pricing.title', { fallback: 'Cold Outreach Packages' })}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            {t('pricing.subtitle', { fallback: 'Get more leads with our professional cold email campaigns that actually convert.' })}
          </p>
        </div>
        
        <div className="my-16 bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-xl p-8 border border-gray-700 shadow-lg relative">
          
          <h2 className="text-2xl font-bold text-white mb-6">{t('process.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#0F172A] to-[#111827] p-6 rounded-xl shadow-md border border-gray-700 relative overflow-hidden">

              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500"></div>
              
              <h3 className="text-xl font-semibold text-white mb-4 pl-2">
                {t('process.firstMonth.title')}
              </h3>
              <ul className="space-y-2">
                {Array.isArray(t.raw('process.firstMonth.steps')) 
                ? t.raw('process.firstMonth.steps').map((step: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      <span className="text-gray-300">{step}</span>
                    </li>
                  ))
                : null}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-[#0F172A] to-[#111827] p-6 rounded-xl shadow-md border border-gray-700 relative overflow-hidden">
              {/* Додаємо декоративну лінію */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
              
              <h3 className="text-xl font-semibold text-white mb-4 pl-2">
                {t('process.secondMonth.title')}
              </h3>
              <ul className="space-y-2">
                {Array.isArray(t.raw('process.secondMonth.steps')) 
                ? t.raw('process.secondMonth.steps').map((step: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      <span className="text-gray-300">{step}</span>
                    </li>
                  ))
                : null}
              </ul>
            </div>
          </div>
        </div>
        
        <div className='rounded-xl shadow-2xl overflow-hidden border border-gray-700 bg-gradient-to-br from-[#1E293B] to-[#0F172A] relative'>
          {/* Додаємо декоративні елементи */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
          
          {/* Перемикач "Initial Setup/Ongoing" */}
          <div className="mt-12 flex justify-center">
            <div className="relative bg-[#0F172A] rounded-full p-1 flex shadow-md border border-gray-700">
              <button
                className={`${isInitialSetup ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white' : 'bg-transparent text-gray-300'} relative py-2 px-6 rounded-full transition-all duration-300 focus:outline-none`}
                onClick={() => setIsInitialSetup(true)}
              >
                {t('toggleLabel.initialSetup')}
              </button>
              <button
                className={`${!isInitialSetup ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white' : 'bg-transparent text-gray-300'} relative py-2 px-6 rounded-full transition-all duration-300 focus:outline-none`}
                onClick={() => setIsInitialSetup(false)}
              >
                {t('toggleLabel.ongoingMaintenance')}
              </button>
            </div>
          </div>
          
          {/* ... решта коду залишається без змін ... */}

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-300">
              {isInitialSetup 
                ? t('toggleLabel.initialDescription')
                : t('toggleLabel.ongoingDescription')
              }
            </p>
          </div>

          {/* Конструктор пакету */}
          <div className="mt-12 bg-[#0F172A]/50">
            <div className="p-6">
              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">1. {t('steps.choosePackage')}</h2>
                  
                  {/* Вибір пакету */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    {packages.map((pkg, index) => {
                      let popularLabel = "";
                      if (index === 2) popularLabel = "Most popular";
                      if (index === 5) popularLabel = t('packages.popularForBusiness');
                      
                      return (
                        <div 
                          key={index}
                          className={`border rounded-xl p-6 text-center cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-500/20 ${
                            selectedPackage === index ? 'border-blue-500 bg-gradient-to-br from-blue-900/20 to-indigo-900/20' : 'border-gray-700 bg-gradient-to-br from-[#0F172A] to-[#111827]'
                          } ${popularLabel ? 'ring-2 ring-blue-500 relative' : ''}`}
                          onClick={() => handlePackageChange(index)}
                        >
                          {popularLabel && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs py-1 px-3 rounded-full">
                              {popularLabel}
                            </div>
                          )}
                          
                          <div className="text-2xl font-bold text-blue-400 mb-2">€{getPackageDisplayPrice(pkg)}</div>
                          <div className="text-gray-300">{pkg.size} {t('packages.verifiedLeads', { fallback: 'verified leads' })}</div>
                          {isInitialSetup && (
                            <div className="text-gray-300 mt-1">+ {pkg.campaigns} campaign{pkg.campaigns > 1 ? 's' : ''}</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div>
                  
                  {/* Додаткові послуги */}
                  <div className="space-y-4">
                    {/* Campaign Management - показуємо тільки в режимі Ongoing */}
                    {!isInitialSetup && (
                      <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg bg-[#0F172A]/80 ">
                        <div>
                          <div className="font-medium text-white">{t('addons.campaignManagement.name')}</div>
                          <div className="text-sm text-gray-300">
                            {t('addons.campaignManagement.description', { campaigns: currentPackage.campaigns })}
                            <span className="text-blue-400 font-medium"> {t('addons.campaignManagement.recommended')}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="font-medium text-blue-400">€{addons.campaign.price}</div>
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
                              className={`block w-full h-full rounded-full cursor-pointer transition-colors ${options.campaign ? 'bg-blue-500' : 'bg-gray-700'}`}
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
                      <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg bg-[#0F172A]/80 ">
                        <div>
                          <div className="font-medium text-white">{t('addons.customSequences.name')}</div>
                          <div className="text-sm text-gray-300">{t('addons.customSequences.description')}</div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="font-medium text-blue-400">€{addons.sequence.price}</div>
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
                              className={`block w-full h-full rounded-full cursor-pointer transition-colors ${options.sequence ? 'bg-blue-500' : 'bg-gray-700'}`}
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
                
                <div>
                  <h2 className="text-2xl font-bold text-white">2. {t('addons.infrastructure.title', { fallback: 'Infrastructure Costs' })}</h2>
                  <div className="font-medium text-gray-300 mb-6">{t('addons.infrastructure.description', { fallback: 'Required technical infrastructure for your campaigns (separate payment)' })}</div>
                  <div className="space-y-4">
                    
                    <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg bg-[#0F172A]/80 ">
                      <div>
                        <div className="font-medium text-white">{t('addons.infrastructure.esp.name', { fallback: addons.infrastructure.esp.name })}</div>
                        <div className="text-sm text-gray-300">{t('addons.infrastructure.esp.description', { fallback: addons.infrastructure.esp.description })}</div>
                      </div>
                      <div className="font-medium text-blue-400">€{addons.infrastructure.esp.price}</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg bg-[#0F172A]/80 ">
                      <div>
                        <div className="font-medium text-white">{t('addons.infrastructure.domain.name', { fallback: addons.infrastructure.domain.name })}</div>
                        <div className="text-sm text-gray-300">
                          {t('addons.infrastructure.domain.description', { fallback: addons.infrastructure.domain.description })} 
                          <span className="font-medium text-gray-300"> (€{addons.infrastructure.domain.price} × {currentPackage.campaigns})</span>
                        </div>
                      </div>
                      <div className="font-medium text-blue-400">€{(addons.infrastructure.domain.price * currentPackage.campaigns).toFixed(2)}</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg bg-[#0F172A]/80 ">
                      <div>
                        <div className="font-medium text-white">{t('addons.infrastructure.workspace.name', { fallback: addons.infrastructure.workspace.name })}</div>
                        <div className="text-sm text-gray-300">
                          {t('addons.infrastructure.workspace.description', { fallback: addons.infrastructure.workspace.description })}
                          <span className="font-medium text-gray-300"> (€{addons.infrastructure.workspace.price} × {currentPackage.campaigns})</span>
                        </div>
                      </div>
                      <div className="font-medium text-blue-400">€{(addons.infrastructure.workspace.price * currentPackage.campaigns).toFixed(2)}</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Сумарна вартість */}
            <div className="mt-10 pt-8 border-t border-gray-700 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-6 shadow-lg ">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <div className="text-xl font-semibold text-white">
                    {isInitialSetup ? t('pricing.totalInvestment') : t('pricing.monthlyInvestment')}
                  </div>
                  {/* Додаємо розшифровку вартості для обох режимів */}
                  <div className="mt-3 text-left">
                    
                    {/* Підсумкові суми */}
                    <div className="mt-3 pt-2 border-t border-gray-700">
                      <div className="text-sm font-medium text-gray-300">
                        {t('pricing.agencyServices', { fallback: 'Agency services' })}: <span className="text-blue-400">€{(isInitialSetup 
                          ? (currentPackage.setupPrice + calculateABTestPrice())
                          : (currentPackage.leadsPrice + calculateABTestPrice() + 
                            (options.campaign ? addons.campaign.price : 0) + 
                            (options.sequence ? addons.sequence.price : 0))
                        ).toFixed(2)}</span>
                      </div>
                      <div className="text-sm font-medium text-gray-300">
                        {t('pricing.infrastructureCosts', { fallback: 'Infrastructure costs' })}: <span className="text-blue-400">€{(
                          addons.infrastructure.esp.price + 
                          (addons.infrastructure.domain.price * currentPackage.campaigns) + 
                          (addons.infrastructure.workspace.price * currentPackage.campaigns)
                        ).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 rounded-full shadow-lg border border-blue-400/30">
                  €{calculateTotal().toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-white mb-6">{t('faq.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.isArray(t.raw('faq.items')) 
              ? t.raw('faq.items').map((item: { question: string, answer: string }, index: number) => (
                <div key={index} className="bg-[#1E293B]/80 p-6 rounded-xl shadow-md border border-gray-700 ">
                  <h3 className="text-xl font-semibold text-white mb-3">{item.question}</h3>
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              ))
            : null}
          </div>
        </div>
      </div>
    </div>
  );
}
