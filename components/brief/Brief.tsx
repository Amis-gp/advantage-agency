'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

interface BudgetDistribution {
  googleAds: number | null;
  facebookAds: number | null;
  tiktokAds: number | null;
  emailMarketing: number | null;
}

const BriefPage = () => {
  const locale = useLocale()
  const router = useRouter()
  const t = useTranslations('brief')
  
  const [formData, setFormData] = useState({
    companyInfo: {
      overview: '',
      marketingGoals: '',
      budgetDistribution: {
        googleAds: null,
        facebookAds: null,
        tiktokAds: null,
        emailMarketing: null
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

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleChange = (section: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section as keyof typeof prev]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }))
  }

  const handleBudgetChange = (field: keyof BudgetDistribution, value: string) => {
    setFormData(prev => ({
      ...prev,
      companyInfo: {
        ...prev.companyInfo,
        budgetDistribution: {
          ...prev.companyInfo.budgetDistribution,
          [field]: value ? Number(value) : null
        }
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

  const formatBudget = (value: number | null): string => {
    return value ? `$${value}` : 'Не вказано';
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Для textarea дозволяємо Shift+Enter
    if (e.target instanceof HTMLTextAreaElement) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
      }
    } 
    // Для input забороняємо будь-який Enter
    else if (e.target instanceof HTMLInputElement) {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
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
        - Google Ads: ${formatBudget(formData.companyInfo.budgetDistribution.googleAds)}
        - Facebook Ads: ${formatBudget(formData.companyInfo.budgetDistribution.facebookAds)}
        - TikTok Ads: ${formatBudget(formData.companyInfo.budgetDistribution.tiktokAds)}
        - Email Marketing: ${formatBudget(formData.companyInfo.budgetDistribution.emailMarketing)}

        2️⃣ <b>Цільова аудиторія</b>
        👥 Ідеальний клієнт: ${formData.targetAudience.idealCustomer}
        📍 Локації: ${formData.targetAudience.locations}
        ⚠️ Безпека бренду: ${formData.targetAudience.brandSafety}

        3️⃣ <b>Поточний маркетинг</b>
        📊 Канали: ${formData.currentMarketing.channels}
        📈 Попередні результати: ${formData.currentMarketing.previousResults}
        📊 Аналітика: ${formData.currentMarketing.analytics}

        4️⃣ <b>Конкуренти</b>
        🔍 Дослідження: ${formData.competitors.analysis}
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
      setShowModal(true);
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
          {t('title')}
        </h1>
        <p className="text-gray-400 text-center mb-12">
          {t('subtitle')}
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="space-y-12">
            <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                  1
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">
                  {t('sections.1.title')}
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.1.overview.label')}
                  </label>
                  <textarea 
                    value={formData.companyInfo.overview}
                    onChange={(e) => handleChange('companyInfo', 'overview', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.1.overview.placeholder')}
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.1.marketingGoals.label')}
                  </label>
                  <select 
                    value={formData.companyInfo.marketingGoals}
                    onChange={(e) => handleChange('companyInfo', 'marketingGoals', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">{t('sections.1.marketingGoals.options.empty')}</option>
                    <option value="brandAwareness">{t('sections.1.marketingGoals.options.brandAwareness')}</option>
                    <option value="leadGeneration">{t('sections.1.marketingGoals.options.leadGeneration')}</option>
                    <option value="sales">{t('sections.1.marketingGoals.options.sales')}</option>
                    <option value="retention">{t('sections.1.marketingGoals.options.retention')}</option>
                    <option value="multiple">{t('sections.1.marketingGoals.options.multiple')}</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-4 text-gray-300 font-medium">
                    {t('sections.1.budget.title')}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-400 mb-2">{t('sections.1.budget.googleAds')}</label>
                      <div className="relative rounded-lg shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">$</span>
                        </div>
                        <input 
                          type="number"
                          min="0"
                          value={formData.companyInfo.budgetDistribution.googleAds || ''}
                          onChange={(e) => handleBudgetChange('googleAds', e.target.value)}
                          onKeyDown={handleKeyDown}
                          className="w-full pl-8 p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder={t('sections.1.budget.placeholder')}
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-400 mb-2">{t('sections.1.budget.facebookAds')}</label>
                      <div className="relative rounded-lg shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">$</span>
                        </div>
                        <input 
                          type="number"
                          min="0"
                          value={formData.companyInfo.budgetDistribution.facebookAds || ''}
                          onChange={(e) => handleBudgetChange('facebookAds', e.target.value)}
                          onKeyDown={handleKeyDown}
                          className="w-full pl-8 p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder={t('sections.1.budget.placeholder')}
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-400 mb-2">{t('sections.1.budget.tiktokAds')}</label>
                      <div className="relative rounded-lg shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">$</span>
                        </div>
                        <input 
                          type="number"
                          min="0"
                          value={formData.companyInfo.budgetDistribution.tiktokAds || ''}
                          onChange={(e) => handleBudgetChange('tiktokAds', e.target.value)}
                          onKeyDown={handleKeyDown}
                          className="w-full pl-8 p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder={t('sections.1.budget.placeholder')}
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-400 mb-2">{t('sections.1.budget.emailMarketing')}</label>
                      <div className="relative rounded-lg shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">$</span>
                        </div>
                        <input 
                          type="number"
                          min="0"
                          value={formData.companyInfo.budgetDistribution.emailMarketing || ''}
                          onChange={(e) => handleBudgetChange('emailMarketing', e.target.value)}
                          onKeyDown={handleKeyDown}
                          className="w-full pl-8 p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder={t('sections.1.budget.placeholder')}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                  2
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">
                  {t('sections.2.title')}
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.2.idealCustomer.label')}
                  </label>
                  <textarea 
                    value={formData.targetAudience.idealCustomer}
                    onChange={(e) => handleChange('targetAudience', 'idealCustomer', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.2.idealCustomer.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.2.locations.label')}
                  </label>
                  <input 
                    type="text"
                    value={formData.targetAudience.locations}
                    onChange={(e) => handleChange('targetAudience', 'locations', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder={t('sections.2.locations.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.2.brandSafety.label')}
                  </label>
                  <textarea 
                    value={formData.targetAudience.brandSafety}
                    onChange={(e) => handleChange('targetAudience', 'brandSafety', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={3}
                    placeholder={t('sections.2.brandSafety.placeholder')}
                  />
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                  3
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">
                  {t('sections.3.title')}
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.3.channels.label')}
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(t.raw('sections.3.channels.options') as Record<string, string>).map(([key, value]) => (
                      <label key={key} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.currentMarketing.channels.includes(key)}
                          onChange={(e) => {
                            const value = e.target.checked ? 
                              [...formData.currentMarketing.channels.split(','), key].filter(Boolean).join(',') :
                              formData.currentMarketing.channels.split(',').filter(c => c !== key).join(',')
                            handleChange('currentMarketing', 'channels', value)
                          }}
                          className="rounded border-gray-300"
                        />
                        <span>{value}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.3.previousResults.label')}
                  </label>
                  <textarea 
                    value={formData.currentMarketing.previousResults}
                    onChange={(e) => handleChange('currentMarketing', 'previousResults', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.3.previousResults.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.3.analytics.label')}
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(t.raw('sections.3.analytics.options') as Record<string, string>).map(([key, value]) => (
                      <label key={key} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.currentMarketing.analytics.includes(key)}
                          onChange={(e) => {
                            const value = e.target.checked ?
                              [...formData.currentMarketing.analytics.split(','), key].filter(Boolean).join(',') :
                              formData.currentMarketing.analytics.split(',').filter(c => c !== key).join(',')
                            handleChange('currentMarketing', 'analytics', value)
                          }}
                          className="rounded border-gray-300"
                        />
                        <span>{value}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                  4
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">
                  {t('sections.4.title')}
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.4.analysis.label')}
                  </label>
                  <textarea 
                    value={formData.competitors.analysis}
                    onChange={(e) => handleChange('competitors', 'analysis', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.4.analysis.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.4.research.label')}
                  </label>
                  <textarea 
                    value={formData.competitors.research}
                    onChange={(e) => handleChange('competitors', 'research', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.4.research.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.4.strategies.label')}
                  </label>
                  <textarea 
                    value={formData.competitors.strategies}
                    onChange={(e) => handleChange('competitors', 'strategies', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.4.strategies.placeholder')}
                  />
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                  5
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">
                  {t('sections.5.title')}
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.5.features.label')}
                  </label>
                  <textarea 
                    value={formData.usp.features}
                    onChange={(e) => handleChange('usp', 'features', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.5.features.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.5.messages.label')}
                  </label>
                  <textarea 
                    value={formData.usp.messages}
                    onChange={(e) => handleChange('usp', 'messages', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.5.messages.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.5.brandGuidelines.label')}
                  </label>
                  <textarea 
                    value={formData.usp.brandGuidelines}
                    onChange={(e) => handleChange('usp', 'brandGuidelines', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.5.brandGuidelines.placeholder')}
                  />
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                  6
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">
                  {t('sections.6.title')}
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.6.otherAssets.label')}
                  </label>
                  <textarea 
                    value={formData.website.otherAssets}
                    onChange={(e) => handleChange('website', 'otherAssets', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.6.otherAssets.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.6.tracking.label')}
                  </label>
                  <textarea 
                    value={formData.website.tracking}
                    onChange={(e) => handleChange('website', 'tracking', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.6.tracking.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.6.restrictions.label')}
                  </label>
                  <textarea 
                    value={formData.website.restrictions}
                    onChange={(e) => handleChange('website', 'restrictions', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.6.restrictions.placeholder')}
                  />
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                  7
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">
                  {t('sections.7.title')}
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.7.designPreferences.label')}
                  </label>
                  <textarea 
                    value={formData.content.designPreferences}
                    onChange={(e) => handleChange('content', 'designPreferences', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.7.designPreferences.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.7.rights.label')}
                  </label>
                  <textarea 
                    value={formData.content.rights}
                    onChange={(e) => handleChange('content', 'rights', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.7.rights.placeholder')}
                  />
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                  8
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">
                  {t('sections.8.title')}
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.8.requirements.label')}
                  </label>
                  <textarea 
                    value={formData.legal.requirements}
                    onChange={(e) => handleChange('legal', 'requirements', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.8.requirements.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.8.restrictions.label')}
                  </label>
                  <textarea 
                    value={formData.legal.restrictions}
                    onChange={(e) => handleChange('legal', 'restrictions', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.8.restrictions.placeholder')}
                  />
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                  9
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">
                  {t('sections.9.title')}
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.9.frequency.label')}
                  </label>
                  <textarea 
                    value={formData.communication.frequency}
                    onChange={(e) => handleChange('communication', 'frequency', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.9.frequency.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.9.reporting.label')}
                  </label>
                  <textarea 
                    value={formData.communication.reporting}
                    onChange={(e) => handleChange('communication', 'reporting', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.9.reporting.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.9.contact.label')}
                  </label>
                  <textarea 
                    value={formData.communication.contact}
                    onChange={(e) => handleChange('communication', 'contact', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.9.contact.placeholder')}
                  />
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                  10
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">
                  {t('sections.10.title')}
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.10.measurement.label')}
                  </label>
                  <textarea 
                    value={formData.expectations.measurement}
                    onChange={(e) => handleChange('expectations', 'measurement', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.10.measurement.placeholder')}
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
              {isSubmitting ? t('submitButton.submitting') : t('submitButton.default')}
            </button>
          </div>
        </form>

        {/* modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl max-w-md w-full mx-4 relative">
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                ✕
              </button>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">
                  Thank you for submitting the brief!
                </h3>
                <p className="text-gray-300 mb-6">
                  We have received your information and will contact you soon.
                </p>
                
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BriefPage