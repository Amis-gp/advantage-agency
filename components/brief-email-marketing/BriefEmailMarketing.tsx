'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

interface FormData {
  businessInfo: {
    description: string
    problemSolution: string
    products: string
  }
  targetAudience: {
    idealClient: string
    painPoints: string
    selectionCriteria: string
  }
  uniqueValue: {
    competitive: string
    results: string
  }
  emailStrategy: {
    goals: string
    targetAudience: string
    competitors: string
  }
  content: {
    tone: string
    topics: string
    callToAction: string
  }
  technical: {
    integration: string
    automation: string
    tracking: string
  }
  budget: {
    monthly: number | null
    additional: string
  }
  emailGoals: {
    callToAction: string
  }
  successStories: {
    cases: string
  }
  additional: {
    extraInfo: string
  }
}

const BriefEmailMarketing = () => {
  const locale = useLocale()
  const router = useRouter()
  const t = useTranslations('brief-email')

  const [formData, setFormData] = useState<FormData>({
    businessInfo: {
      description: '',
      problemSolution: '',
      products: ''
    },
    targetAudience: {
      idealClient: '',
      painPoints: '',
      selectionCriteria: ''
    },
    uniqueValue: {
      competitive: '',
      results: ''
    },
    emailStrategy: {
      goals: '',
      targetAudience: '',
      competitors: ''
    },
    content: {
      tone: '',
      topics: '',
      callToAction: ''
    },
    technical: {
      integration: '',
      automation: '',
      tracking: ''
    },
    budget: {
      monthly: null,
      additional: ''
    },
    emailGoals: {
      callToAction: ''
    },
    successStories: {
      cases: ''
    },
    additional: {
      extraInfo: ''
    }
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleChange = (section: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }))
  }

  const handleBudgetChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      budget: {
        ...prev.budget,
        monthly: value ? Number(value) : null
      }
    }))
  }

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
        🎯 <b>Новий бриф Email Marketing отримано!</b>

        1️⃣ <b>Про бізнес</b>
        📝 Опис: ${formData.businessInfo.description}
        🎯 Проблема: ${formData.businessInfo.problemSolution}
        🛍️ Продукти: ${formData.businessInfo.products}

        2️⃣ <b>Цільова аудиторія</b>
        👥 Ідеальний клієнт: ${formData.targetAudience.idealClient}
        😰 Болі: ${formData.targetAudience.painPoints}
        ✅ Критерії вибору: ${formData.targetAudience.selectionCriteria}

        3️⃣ <b>УТП</b>
        💪 Переваги: ${formData.uniqueValue.competitive}
        🎯 Результати: ${formData.uniqueValue.results}

        4️⃣ <b>Цілі розсилки</b>
        🎯 Бажана дія: ${formData.emailGoals.callToAction}

        5️⃣ <b>Приклади успіху</b>
        📈 Кейси: ${formData.successStories.cases}

        6️⃣ <b>Додаткова інформація</b>
        ℹ️ Інфо: ${formData.additional.extraInfo}

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
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          {t('title')}
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                1
              </div>
              <h2 className="ml-4 text-2xl font-bold text-gray-100">
                {t('sections.1.title')}
              </h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block font-medium text-gray-300 mb-2">
                  {t('sections.1.description.label')}
                </label>
                <textarea
                  value={formData.businessInfo.description}
                  onChange={(e) => handleChange('businessInfo', 'description', e.target.value)}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg"
                  rows={4}
                  placeholder={t('sections.1.description.placeholder')}
                  onKeyDown={handleKeyDown}
                />
              </div>

              <div>
                <label className="block font-medium text-gray-300 mb-2">
                  {t('sections.1.problemSolution.label')}
                </label>
                <textarea
                  value={formData.businessInfo.problemSolution}
                  onChange={(e) => handleChange('businessInfo', 'problemSolution', e.target.value)}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg"
                  rows={4}
                  placeholder={t('sections.1.problemSolution.placeholder')}
                  onKeyDown={handleKeyDown}
                />
              </div>

              <div>
                <label className="block font-medium text-gray-300 mb-2">
                  {t('sections.1.products.label')}
                </label>
                <textarea
                  value={formData.businessInfo.products}
                  onChange={(e) => handleChange('businessInfo', 'products', e.target.value)}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg"
                  rows={4}
                  placeholder={t('sections.1.products.placeholder')}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                2
              </div>
              <h2 className="ml-4 text-2xl font-bold text-gray-100">
                {t('sections.2.title')}
              </h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block font-medium text-gray-300 mb-2">
                  {t('sections.2.idealClient.label')}
                </label>
                <textarea
                  value={formData.targetAudience.idealClient}
                  onChange={(e) => handleChange('targetAudience', 'idealClient', e.target.value)}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg"
                  rows={4}
                  placeholder={t('sections.2.idealClient.placeholder')}
                  onKeyDown={handleKeyDown}
                />
              </div>

              <div>
                <label className="block font-medium text-gray-300 mb-2">
                  {t('sections.2.painPoints.label')}
                </label>
                <textarea
                  value={formData.targetAudience.painPoints}
                  onChange={(e) => handleChange('targetAudience', 'painPoints', e.target.value)}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg"
                  rows={4}
                  placeholder={t('sections.2.painPoints.placeholder')}
                  onKeyDown={handleKeyDown}
                />
              </div>

              <div>
                <label className="block font-medium text-gray-300 mb-2">
                  {t('sections.2.selectionCriteria.label')}
                </label>
                <textarea
                  value={formData.targetAudience.selectionCriteria}
                  onChange={(e) => handleChange('targetAudience', 'selectionCriteria', e.target.value)}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg"
                  rows={4}
                  placeholder={t('sections.2.selectionCriteria.placeholder')}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                3
              </div>
              <h2 className="ml-4 text-2xl font-bold text-gray-100">
                {t('sections.3.title')}
              </h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block font-medium text-gray-300 mb-2">
                  {t('sections.3.competitive.label')}
                </label>
                <textarea
                  value={formData.uniqueValue.competitive}
                  onChange={(e) => handleChange('uniqueValue', 'competitive', e.target.value)}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg"
                  rows={4}
                  placeholder={t('sections.3.competitive.placeholder')}
                  onKeyDown={handleKeyDown}
                />
              </div>

              <div>
                <label className="block font-medium text-gray-300 mb-2">
                  {t('sections.3.results.label')}
                </label>
                <textarea
                  value={formData.uniqueValue.results}
                  onChange={(e) => handleChange('uniqueValue', 'results', e.target.value)}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg"
                  rows={4}
                  placeholder={t('sections.3.results.placeholder')}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                4
              </div>
              <h2 className="ml-4 text-2xl font-bold text-gray-100">
                {t('sections.4.title')}
              </h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t('sections.4.callToAction.label')}
                </label>
                <textarea
                  value={formData.emailGoals.callToAction}
                  onChange={(e) => handleChange('emailGoals', 'callToAction', e.target.value)}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  rows={4}
                  placeholder={t('sections.4.callToAction.placeholder')}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                5
              </div>
              <h2 className="ml-4 text-2xl font-bold text-gray-100">
                {t('sections.5.title')}
              </h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t('sections.5.cases.label')}
                </label>
                <textarea
                  value={formData.successStories.cases}
                  onChange={(e) => handleChange('successStories', 'cases', e.target.value)}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  rows={4}
                  placeholder={t('sections.5.cases.placeholder')}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                6
              </div>
              <h2 className="ml-4 text-2xl font-bold text-gray-100">
                {t('sections.6.title')}
              </h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t('sections.6.extraInfo.label')}
                </label>
                <textarea
                  value={formData.additional.extraInfo}
                  onChange={(e) => handleChange('additional', 'extraInfo', e.target.value)}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  rows={4}
                  placeholder={t('sections.6.extraInfo.placeholder')}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
          </section>

          <div className="flex justify-center pt-4">
            <button 
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('submitButton.submitting') : t('submitButton.default')}
            </button>
          </div>
        </form>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl max-w-md w-full mx-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {t('modal.title')}
              </h3>
              <p className="text-gray-300 mb-6">
                {t('modal.description')}
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg"
              >
                {t('modal.closeButton')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BriefEmailMarketing
