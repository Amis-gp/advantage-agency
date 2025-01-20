'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

const BriefPage = () => {
  const locale = useLocale()
  const router = useRouter()
  
  const [formData, setFormData] = useState({
    companyInfo: {
      overview: '',
      marketingGoals: '',
      budgetDistribution: {
        googleAds: 0,
        facebookAds: 0,
        tiktokAds: 0,
        emailMarketing: 0
      }
    },
    targetAudience: {
      idealCustomer: '',
      locations: '',
      brandSafety: ''
    },
    currentMarketing: {
      channels: '',
      previousResults: '',
      analytics: ''
    },
    competitors: {
      analysis: '',
      research: '',
      strategies: ''
    },
    usp: {
      features: '',
      messages: '',
      brandGuidelines: ''
    },
    website: {
      otherAssets: '',
      tracking: '',
      restrictions: ''
    },
    content: {
      existingCreatives: '',
      designPreferences: '',
      rights: ''
    },
    legal: {
      requirements: '',
      restrictions: ''
    },
    communication: {
      frequency: '',
      reporting: '',
      contact: ''
    },
    expectations: {
      success: '',
      kpi: '',
      measurement: ''
    }
  })

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (section: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section as keyof typeof prev]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }))
  }

  const sendToTelegram = async (message: string) => {
    const BOT_TOKEN = process.env.NEXT_PUBLIC_BOT_TOKEN;
    const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('Telegram credentials are not configured');
      return;
    }

    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        }),
      });
    } catch (error) {
      console.error('Error sending to Telegram:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const message = `
      🎯 <b>Новий бриф отримано!</b>

      1️⃣ <b>Інформація про компанію</b>
      📝 Огляд: ${formData.companyInfo.overview}
      🎯 Маркетингові цілі: ${formData.companyInfo.marketingGoals}
      💰 Розподіл бюджету:
      - Google Ads: ${formData.companyInfo.budgetDistribution.googleAds}%
      - Facebook Ads: ${formData.companyInfo.budgetDistribution.facebookAds}%
      - TikTok Ads: ${formData.companyInfo.budgetDistribution.tiktokAds}%
      - Email Marketing: ${formData.companyInfo.budgetDistribution.emailMarketing}%

      2️⃣ <b>Цільова аудиторія</b>
      👥 Ідеальний клієнт: ${formData.targetAudience.idealCustomer}
      📍 Локації: ${formData.targetAudience.locations}
      ⚠️ Безпека бренду: ${formData.targetAudience.brandSafety}

      3️⃣ <b>Поточний маркетинг</b>
      📊 Канали: ${formData.currentMarketing.channels}
      📈 Попередні результати: ${formData.currentMarketing.previousResults}
      📊 Аналітика: ${formData.currentMarketing.analytics}

      4️⃣ <b>Конкуренти</b>
      🔍 Дослідження: ${formData.competitors.research}
      📋 Стратегії: ${formData.competitors.strategies}

      5️⃣ <b>УТП та повідомлення</b>
      ✨ Особливості: ${formData.usp.features}
      💬 Повідомлення: ${formData.usp.messages}
      🎨 Брендинг: ${formData.usp.brandGuidelines}

      6️⃣ <b>Веб-сайт</b>
      🌐 Інші ресурси: ${formData.website.otherAssets}
      📊 Відстеження: ${formData.website.tracking}
      ⚠️ Обмеження: ${formData.website.restrictions}

      7️⃣ <b>Контент</b>
      🎨 Креативи: ${formData.content.existingCreatives}
      🎯 Дизайн: ${formData.content.designPreferences}
      📜 Права: ${formData.content.rights}

      8️⃣ <b>Юридичні питання</b>
      📋 Вимоги: ${formData.legal.requirements}
      ⚠️ Обмеження: ${formData.legal.restrictions}

      9️⃣ <b>Комунікація</b>
      📅 Частота: ${formData.communication.frequency}
      📊 Звітність: ${formData.communication.reporting}
      👤 Контакт: ${formData.communication.contact}

      🎯 <b>Очікування</b>
      ✨ Успіх: ${formData.expectations.success}
      📊 KPI: ${formData.expectations.kpi}
      📈 Вимірювання: ${formData.expectations.measurement}

      📅 Дата: ${new Date().toLocaleString('uk-UA')}
      `;

      await sendToTelegram(message);
      router.push('/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-4  bg-blue-500 text-transparent bg-clip-text">
          Маркетинговий бриф
        </h1>
        <p className="text-gray-400 text-center mb-12">
          Заповніть форму нижче, щоб ми могли краще зрозуміти ваші потреби
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="space-y-12">
            <section className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                  1
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">
                  Загальна інформація про компанію та цілі
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Надайте огляд вашої компанії:
                  </label>
                  <textarea 
                    value={formData.companyInfo.overview}
                    onChange={(e) => handleChange('companyInfo', 'overview', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder="Опишіть вашу компанію, продукти та послуги..."
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Ваші основні маркетингові цілі:
                  </label>
                  <select 
                    value={formData.companyInfo.marketingGoals}
                    onChange={(e) => handleChange('companyInfo', 'marketingGoals', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Оберіть ціль</option>
                    <option value="brandAwareness">Впізнаваність бренду</option>
                    <option value="leadGeneration">Генерація лідів</option>
                    <option value="sales">Продажі</option>
                    <option value="retention">Утримання клієнтів</option>
                    <option value="multiple">Декілька цілей</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-4 text-gray-300 font-medium">
                    Розподіл маркетингового бюджету:
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-400 mb-2">Google Ads (USD)</label>
                      <div className="relative rounded-lg shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">$</span>
                        </div>
                        <input 
                          type="number"
                          min="0"
                          value={formData.companyInfo.budgetDistribution.googleAds}
                          onChange={(e) => handleChange('companyInfo', 'budgetDistribution', JSON.stringify({
                            ...formData.companyInfo.budgetDistribution,
                            googleAds: Number(e.target.value)
                          }))}
                          className="w-full pl-8 p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="0"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-400 mb-2">Facebook Ads (USD)</label>
                      <div className="relative rounded-lg shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">$</span>
                        </div>
                        <input 
                          type="number"
                          min="0"
                          value={formData.companyInfo.budgetDistribution.facebookAds}
                          onChange={(e) => handleChange('companyInfo', 'budgetDistribution', JSON.stringify({
                            ...formData.companyInfo.budgetDistribution,
                            facebookAds: Number(e.target.value)
                          }))}
                          className="w-full pl-8 p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                  2
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">
                  Цільова аудиторія
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Опишіть вашого ідеального клієнта (демографія, інтереси, поведінка):
                  </label>
                  <textarea 
                    value={formData.targetAudience.idealCustomer}
                    onChange={(e) => handleChange('targetAudience', 'idealCustomer', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder="Опишіть вашого ідеального клієнта..."
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Цільові локації (міста, регіони, країни):
                  </label>
                  <input 
                    type="text"
                    value={formData.targetAudience.locations}
                    onChange={(e) => handleChange('targetAudience', 'locations', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Введіть локації"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Обмеження щодо безпеки бренду:
                  </label>
                  <textarea 
                    value={formData.targetAudience.brandSafety}
                    onChange={(e) => handleChange('targetAudience', 'brandSafety', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={3}
                    placeholder="Опишіть обмеження щодо безпеки бренду..."
                  />
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                  3
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">
                  Поточні та минулі маркетингові зусилля
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Які маркетингові канали або платформи ви зараз використовуєте або використовували в минулому?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.currentMarketing.channels.includes('google')}
                        onChange={(e) => {
                          const value = e.target.checked ? 
                            [...formData.currentMarketing.channels.split(','), 'google'].filter(Boolean).join(',') :
                            formData.currentMarketing.channels.split(',').filter(c => c !== 'google').join(',')
                          handleChange('currentMarketing', 'channels', value)
                        }}
                        className="rounded border-gray-300"
                      />
                      <span>Google Ads</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.currentMarketing.channels.includes('facebook')}
                        onChange={(e) => {
                          const value = e.target.checked ?
                            [...formData.currentMarketing.channels.split(','), 'facebook'].filter(Boolean).join(',') :
                            formData.currentMarketing.channels.split(',').filter(c => c !== 'facebook').join(',')
                          handleChange('currentMarketing', 'channels', value)
                        }}
                        className="rounded border-gray-300"
                      />
                      <span>Facebook Ads</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.currentMarketing.channels.includes('instagram')}
                        onChange={(e) => {
                          const value = e.target.checked ?
                            [...formData.currentMarketing.channels.split(','), 'instagram'].filter(Boolean).join(',') :
                            formData.currentMarketing.channels.split(',').filter(c => c !== 'instagram').join(',')
                          handleChange('currentMarketing', 'channels', value)
                        }}
                        className="rounded border-gray-300"
                      />
                      <span>Instagram</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.currentMarketing.channels.includes('tiktok')}
                        onChange={(e) => {
                          const value = e.target.checked ?
                            [...formData.currentMarketing.channels.split(','), 'tiktok'].filter(Boolean).join(',') :
                            formData.currentMarketing.channels.split(',').filter(c => c !== 'tiktok').join(',')
                          handleChange('currentMarketing', 'channels', value)
                        }}
                        className="rounded border-gray-300"
                      />
                      <span>TikTok</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.currentMarketing.channels.includes('email')}
                        onChange={(e) => {
                          const value = e.target.checked ?
                            [...formData.currentMarketing.channels.split(','), 'email'].filter(Boolean).join(',') :
                            formData.currentMarketing.channels.split(',').filter(c => c !== 'email').join(',')
                          handleChange('currentMarketing', 'channels', value)
                        }}
                        className="rounded border-gray-300"
                      />
                      <span>Email Marketing</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.currentMarketing.channels.includes('other')}
                        onChange={(e) => {
                          const value = e.target.checked ?
                            [...formData.currentMarketing.channels.split(','), 'other'].filter(Boolean).join(',') :
                            formData.currentMarketing.channels.split(',').filter(c => c !== 'other').join(',')
                          handleChange('currentMarketing', 'channels', value)
                        }}
                        className="rounded border-gray-300"
                      />
                      <span>Інше</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Поділіться даними, інсайтами або звітами про ваші попередні маркетингові зусилля, включаючи успіхи та виклики:
                  </label>
                  <textarea 
                    value={formData.currentMarketing.previousResults}
                    onChange={(e) => handleChange('currentMarketing', 'previousResults', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder="Опишіть ваші попередні маркетингові результати..."
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Які інструменти аналітики у вас встановлені?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.currentMarketing.analytics.includes('ga4')}
                        onChange={(e) => {
                          const value = e.target.checked ?
                            [...formData.currentMarketing.analytics.split(','), 'ga4'].filter(Boolean).join(',') :
                            formData.currentMarketing.analytics.split(',').filter(c => c !== 'ga4').join(',')
                          handleChange('currentMarketing', 'analytics', value)
                        }}
                        className="rounded border-gray-300"
                      />
                      <span>Google Analytics 4</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.currentMarketing.analytics.includes('pixel')}
                        onChange={(e) => {
                          const value = e.target.checked ?
                            [...formData.currentMarketing.analytics.split(','), 'pixel'].filter(Boolean).join(',') :
                            formData.currentMarketing.analytics.split(',').filter(c => c !== 'pixel').join(',')
                          handleChange('currentMarketing', 'analytics', value)
                        }}
                        className="rounded border-gray-300"
                      />
                      <span>Facebook Pixel</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.currentMarketing.analytics.includes('gtm')}
                        onChange={(e) => {
                          const value = e.target.checked ?
                            [...formData.currentMarketing.analytics.split(','), 'gtm'].filter(Boolean).join(',') :
                            formData.currentMarketing.analytics.split(',').filter(c => c !== 'gtm').join(',')
                          handleChange('currentMarketing', 'analytics', value)
                        }}
                        className="rounded border-gray-300"
                      />
                      <span>Google Tag Manager</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.currentMarketing.analytics.includes('crm')}
                        onChange={(e) => {
                          const value = e.target.checked ?
                            [...formData.currentMarketing.analytics.split(','), 'crm'].filter(Boolean).join(',') :
                            formData.currentMarketing.analytics.split(',').filter(c => c !== 'crm').join(',')
                          handleChange('currentMarketing', 'analytics', value)
                        }}
                        className="rounded border-gray-300"
                      />
                      <span>CRM System</span>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                  4
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">
                  Конкурентний аналіз
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Опишіть ваших основних конкурентів та їхні сильні/слабкі сторони:
                  </label>
                  <div className="space-y-4">
                    <textarea 
                      value={formData.competitors.analysis}
                      onChange={(e) => handleChange('competitors', 'analysis', e.target.value)}
                      className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      rows={4}
                      placeholder="Назвіть конкурентів та опишіть їхні особливості..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Чи проводили ви будь-які ринкові дослідження або аналіз конкурентів? Якщо так, чи можете ви поділитися висновками?:
                  </label>
                  <div className="space-y-4">
                    <textarea 
                      value={formData.competitors.research}
                      onChange={(e) => handleChange('competitors', 'research', e.target.value)}
                      className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      rows={4}
                      placeholder="Поділіться результатами ваших досліджень..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Стратегії конкурентів, які ви хотіли б наслідувати або від яких хотіли б відрізнятися:
                  </label>
                  <div className="space-y-4">
                    <textarea 
                      value={formData.competitors.strategies}
                      onChange={(e) => handleChange('competitors', 'strategies', e.target.value)}
                      className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      rows={4}
                      placeholder="Опишіть стратегії конкурентів..."
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                  5
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">
                  Унікальна торгова пропозиція (УТП) та ключові повідомлення
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Які унікальні особливості, переваги або ціннісні пропозиції відрізняють ваш продукт або послугу від конкурентів?
                  </label>
                  <textarea 
                    value={formData.usp.features}
                    onChange={(e) => handleChange('usp', 'features', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder="Опишіть унікальні особливості та переваги вашого продукту чи послуги..."
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Які конкретні повідомлення або акції ви хочете підкреслити у своїй рекламі?
                  </label>
                  <textarea 
                    value={formData.usp.messages}
                    onChange={(e) => handleChange('usp', 'messages', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder="Опишіть ключові рекламні повідомлення та спеціальні пропозиції..."
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Чи є у вас документ з брендовими рекомендаціями? Опишіть вашу візуальну ідентичність, тон голосу та творчі уподобання:
                  </label>
                  <textarea 
                    value={formData.usp.brandGuidelines}
                    onChange={(e) => handleChange('usp', 'brandGuidelines', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder="Опишіть ваші брендові рекомендації, тон комунікації та візуальні вимоги..."
                  />
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                  6
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">
                  Веб-сайт та онлайн присутність
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Крім вашого основного веб-сайту, чи є у вас інші цифрові ресурси (наприклад, блоги, додатки, цільові сторінки), які ви хочете просувати або інтегрувати в кампанію?
                  </label>
                  <textarea 
                    value={formData.website.otherAssets}
                    onChange={(e) => handleChange('website', 'otherAssets', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder="Опишіть ваші додаткові цифрові ресурси..."
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Чи готові ви впроваджувати на своєму веб-сайті відстеження посилань і тегів для вимірювання ефективності кампанії?
                  </label>
                  <textarea 
                    value={formData.website.tracking}
                    onChange={(e) => handleChange('website', 'tracking', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder="Опишіть ваші можливості щодо впровадження відстеження..."
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Чи маєте ви будь-які особливі вимоги або обмеження щодо змін на веб-сайті або впровадження відстеження?
                  </label>
                  <textarea 
                    value={formData.website.restrictions}
                    onChange={(e) => handleChange('website', 'restrictions', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder="Опишіть будь-які обмеження або вимоги..."
                  />
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                  7
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">
                  Контент і креативи
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Чи є у вас існуючі рекламні креативи (наприклад, зображення, відео, текст) або вам потрібна допомога з розробкою креативів?
                  </label>
                  <textarea 
                    value={formData.content.existingCreatives}
                    onChange={(e) => handleChange('content', 'existingCreatives', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder="Опишіть наявні креативи або потреби в їх розробці..."
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Чи є якісь конкретні елементи дизайну, кольори або стилі, яким ви надаєте перевагу?
                  </label>
                  <textarea 
                    value={formData.content.designPreferences}
                    onChange={(e) => handleChange('content', 'designPreferences', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder="Опишіть ваші преференції щодо дизайну..."
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Чи маєте ви необхідні права та дозволи на контент, який використовується у вашій рекламі?
                  </label>
                  <textarea 
                    value={formData.content.rights}
                    onChange={(e) => handleChange('content', 'rights', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder="Опишіть статус прав на використання контенту..."
                  />
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                  8
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">
                  Юридичні питання та відповідність
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Чи є якісь юридичні, галузеві або нормативні вимоги, про які нам потрібно знати при створенні та розміщенні реклами?
                  </label>
                  <textarea 
                    value={formData.legal.requirements}
                    onChange={(e) => handleChange('legal', 'requirements', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder="Опишіть юридичні та нормативні вимоги..."
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Чи є у вас будь-які особливі рекомендації або обмеження щодо типу контенту або повідомлень, що використовуються у вашій рекламі?
                  </label>
                  <textarea 
                    value={formData.legal.restrictions}
                    onChange={(e) => handleChange('legal', 'restrictions', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder="Опишіть обмеження щодо контенту..."
                  />
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                  9
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">
                  Комунікація та звітність
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Який ваш бажаний режим і частота спілкування з нашою командою?
                  </label>
                  <textarea 
                    value={formData.communication.frequency}
                    onChange={(e) => handleChange('communication', 'frequency', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder="Опишіть бажану частоту та формат комунікації..."
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Як часто ви очікуєте отримувати звіти та яку ключову інформацію ви хотіли б бачити в цих звітах?
                  </label>
                  <textarea 
                    value={formData.communication.reporting}
                    onChange={(e) => handleChange('communication', 'reporting', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder="Опишіть ваші вимоги до звітності..."
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Хто буде нашою основною контактною особою у вашій організації для цього проекту?
                  </label>
                  <textarea 
                    value={formData.communication.contact}
                    onChange={(e) => handleChange('communication', 'contact', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder="Вкажіть контактну особу та її дані..."
                  />
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                  10
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">
                  Очікування та показники успіху
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Які ваші очікування від маркетингового агентства і що ви вважатимете успішною співпрацею?
                  </label>
                  <textarea 
                    value={formData.expectations.success}
                    onChange={(e) => handleChange('expectations', 'success', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder="Опишіть ваші очікування від співпраці..."
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Чи є якісь конкретні показники або ключові показники ефективності (KPI), на яких ви хочете, щоб ми зосередилися та регулярно звітували?
                  </label>
                  <textarea 
                    value={formData.expectations.kpi}
                    onChange={(e) => handleChange('expectations', 'kpi', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder="Вкажіть важливі для вас KPI..."
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Як ви плануєте вимірювати успіх маркетингової кампанії та які ваші довгострокові цілі?
                  </label>
                  <textarea 
                    value={formData.expectations.measurement}
                    onChange={(e) => handleChange('expectations', 'measurement', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder="Опишіть методи вимірювання успіху та довгострокові цілі..."
                  />
                </div>
              </div>
            </section>
          </div>

          <div className="flex justify-center pt-4">
            <button 
              type="submit" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Відправляємо...' : 'Відправити бриф'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BriefPage