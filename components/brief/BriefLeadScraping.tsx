"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import LanguageSwitcher from '../LanguageSwitcher'
import { logFormSubmission, updateFormStatus } from '@/utils/formLogger'

interface FormData {
  topic: string
  region: string
  positions: string
  linksOrKeywords: string
  quantity: string
  additional: string
}

const BriefLeadScraping = () => {
  const locale = useLocale()
  const router = useRouter()
  const t = useTranslations('brief-lead-scraping')

  // Primary info state
  const [primaryInfo, setPrimaryInfo] = useState({
    businessName: '',
    niche: '',
    email: '',
    phone: ''
  })
  const [primaryError, setPrimaryError] = useState('')
  const [privacyChecked, setPrivacyChecked] = useState(false)
  const [privacyError, setPrivacyError] = useState('')

  const [formData, setFormData] = useState<FormData>({
    topic: '',
    region: '',
    positions: '',
    linksOrKeywords: '',
    quantity: '',
    additional: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.target instanceof HTMLTextAreaElement) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
      }
    } else if (e.target instanceof HTMLInputElement) {
      if (e.key === 'Enter') {
        e.preventDefault()
      }
    }
  }

  const sendToTelegram = async (message: string) => {
    const BOT_TOKEN = process.env.NEXT_PUBLIC_BOT_TOKEN;
    const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_SCRAPING;
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

  const validatePrimary = () => {
    if (!primaryInfo.businessName || !primaryInfo.niche || !primaryInfo.email) {
      setPrimaryError(t('primary.validation'));
      return false;
    }
    setPrimaryError('');
    return true;
  };

  const handlePrimaryChange = (field: string, value: string) => {
    setPrimaryInfo(prev => ({ ...prev, [field]: value }));
  };

  const handlePrivacyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrivacyChecked(e.target.checked);
    if (e.target.checked) {
      setPrivacyError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!validatePrimary()) {
      setIsSubmitting(false);
      return;
    }
    if (!privacyChecked) {
      setPrivacyError(t('privacy.validation') || 'Ви повинні погодитись з політикою конфіденційності');
      setIsSubmitting(false);
      return;
    }

    // Формуємо дані форми з джерелом для логування
    const completeFormData = {
      primary: primaryInfo,
      ...formData,
      formSource: 'brief-lead-scraping'
    };

    // Зберігаємо дані форми в MongoDB
    let formLogId;
    try {
      const logResult = await logFormSubmission('contact', completeFormData);
      if (logResult.success) {
        formLogId = logResult.id;
      }
    } catch (logError) {
      console.error('Помилка при логуванні форми:', logError);
      // Продовжуємо навіть якщо логування не вдалося
    }

    try {
      const message = `
<b>Бізнес:</b> ${primaryInfo.businessName}
<b>Ніша:</b> ${primaryInfo.niche}
<b>Пошта:</b> ${primaryInfo.email}
<b>Телефон:</b> ${primaryInfo.phone || '-'}

\uD83D\uDCCB <b>New Lead Scraping Brief!</b>\n\n` +
        `<b>1. Topic/Niche:</b> ${formData.topic}\n` +
        `<b>2. Region:</b> ${formData.region}\n` +
        `<b>3. Positions/Profiles:</b> ${formData.positions}\n` +
        `<b>4. Links/Keywords:</b> ${formData.linksOrKeywords}\n` +
        `<b>5. Quantity:</b> ${formData.quantity}\n` +
        `<b>6. Additional info:</b> ${formData.additional}`;
      
      // Відправка в основний чат
      await sendToTelegram(message);
      
      // Відправка в резервний чат для підстраховки
      const CHAT_ID_TEST = process.env.NEXT_PUBLIC_CHAT_ID_TEST;
      if (CHAT_ID_TEST) {
        try {
          const BOT_TOKEN = process.env.NEXT_PUBLIC_BOT_TOKEN;
          const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
          
          await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chat_id: CHAT_ID_TEST,
              text: message,
              parse_mode: 'HTML'
            }),
          });
          console.log('Повідомлення успішно відправлено в резервний чат');
        } catch (backupError) {
          console.error('Помилка відправки в резервний чат:', backupError);
        }
      }
      
      // Оновлюємо статус в MongoDB, якщо логування вдалося
      if (formLogId) {
        await updateFormStatus(formLogId, 'sent');
      }
      
      router.push(`/${locale}/brief-thank-you`);
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Оновлюємо статус в MongoDB як помилку, якщо логування вдалося
      if (formLogId) {
        await updateFormStatus(formLogId, 'failed');
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-5xl mx-auto px-4 pb-12 pt-4 sm:pt-12 relative">
        <LanguageSwitcher />
        <h1 className="mt-4 sm:mt-0 text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          {t('title')}
        </h1>
        {/* Primary info section */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">{t('primary.title')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium text-gray-300 mb-2">{t('primary.businessName.label')}</label>
                <input
                  type="text"
                  value={primaryInfo.businessName}
                  onChange={e => handlePrimaryChange('businessName', e.target.value)}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg"
                  placeholder={t('primary.businessName.placeholder')}
                />
              </div>
              <div>
                <label className="block font-medium text-gray-300 mb-2">{t('primary.niche.label')}</label>
                <input
                  type="text"
                  value={primaryInfo.niche}
                  onChange={e => handlePrimaryChange('niche', e.target.value)}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg"
                  placeholder={t('primary.niche.placeholder')}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block font-medium text-gray-300 mb-2">{t('primary.email.label')}</label>
                <input
                  type="email"
                  value={primaryInfo.email}
                  onChange={e => handlePrimaryChange('email', e.target.value)}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg"
                  placeholder={t('primary.email.placeholder')}
                />
              </div>
              <div>
                <label className="block font-medium text-gray-300 mb-2">{t('primary.phone.label')}</label>
                <input
                  type="text"
                  value={primaryInfo.phone}
                  onChange={e => handlePrimaryChange('phone', e.target.value)}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg"
                  placeholder={t('primary.phone.placeholder')}
                />
              </div>
            </div>
            {primaryError && <div className="text-red-400 mt-4">{primaryError}</div>}
          </section>
          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">1</div>
              <h2 className="ml-4 text-2xl font-bold text-gray-100">{t('sections.1.title')}</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block font-medium text-gray-300 mb-2">{t('sections.1.topic.label')}</label>
                <input
                  type="text"
                  value={formData.topic}
                  onChange={(e) => handleChange('topic', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t('sections.1.topic.placeholder')}
                  required
                />
              </div>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">2</div>
              <h2 className="ml-4 text-2xl font-bold text-gray-100">{t('sections.2.title')}</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block font-medium text-gray-300 mb-2">{t('sections.2.region.label')}</label>
                <input
                  type="text"
                  value={formData.region}
                  onChange={(e) => handleChange('region', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t('sections.2.region.placeholder')}
                  required
                />
              </div>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">3</div>
              <h2 className="ml-4 text-2xl font-bold text-gray-100">{t('sections.3.title')}</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block font-medium text-gray-300 mb-2">{t('sections.3.positions.label')}</label>
                <input
                  type="text"
                  value={formData.positions}
                  onChange={(e) => handleChange('positions', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t('sections.3.positions.placeholder')}
                  required
                />
              </div>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">4</div>
              <h2 className="ml-4 text-2xl font-bold text-gray-100">{t('sections.4.title')}</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block font-medium text-gray-300 mb-2">{t('sections.4.linksOrKeywords.label')}</label>
                <input
                  type="text"
                  value={formData.linksOrKeywords}
                  onChange={(e) => handleChange('linksOrKeywords', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t('sections.4.linksOrKeywords.placeholder')}
                />
              </div>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">5</div>
              <h2 className="ml-4 text-2xl font-bold text-gray-100">{t('sections.5.title')}</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block font-medium text-gray-300 mb-2">{t('sections.5.quantity.label')}</label>
                <input
                  type="text"
                  value={formData.quantity}
                  onChange={(e) => handleChange('quantity', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t('sections.5.quantity.placeholder')}
                  required
                />
              </div>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">6</div>
              <h2 className="ml-4 text-2xl font-bold text-gray-100">{t('sections.6.title')}</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block font-medium text-gray-300 mb-2">{t('sections.6.additional.label')}</label>
                <textarea
                  value={formData.additional}
                  onChange={(e) => handleChange('additional', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t('sections.6.additional.placeholder')}
                  rows={3}
                />
              </div>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="privacy-policy"
                checked={privacyChecked}
                onChange={handlePrivacyChange}
                className="mt-1 mr-3"
              />
              <label htmlFor="privacy-policy" className="text-gray-300">
                {t('privacy.agreement') || 'Я ознайомився з'} <a href="http://advantagescrape.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  {t('privacy.policy') || 'політикою конфіденційності'}
                </a> {t('privacy.consent') || 'та не маю претензій'}
              </label>
            </div>
            {privacyError && <div className="text-red-400 mt-2">{privacyError}</div>}
          </section>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors text-white font-bold py-3 px-8 rounded-lg shadow-md disabled:opacity-60"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('submitting') : t('submit')}
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default BriefLeadScraping
