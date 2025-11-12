'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { logFormSubmission, updateFormStatus } from '@/utils/formLogger'

interface FormData {
  primary: {
    businessName: string;
    niche: string;
    email: string;
    phone: string;
    contactMethod: string;
  };
  business: {
    description: string;
    website: string;
  };
  goals: {
    mainGoal: string;
    targetAction: string;
  };
  audience: {
    description: string;
    painPoints: string;
  };
  usp: {
    uniqueValue: string;
  };
  design: {
    preferences: string;
    examples: string;
  };
  files: File[];
}

const contactOptions = [
  'Telegram',
  'WhatsApp',
  'Phone call',
  'Email',
  'Viber'
]

// Change the component name to match the file name or export it properly
const BriefLanding = () => {
  const locale = useLocale()
  const router = useRouter()
  const t = useTranslations('brief-landing')
  const s = useTranslations('brief-landing.simple')
  
  const [formData, setFormData] = useState<FormData>({
    primary: {
      businessName: '',
      niche: '',
      email: '',
      phone: '',
      contactMethod: contactOptions[0],
    },
    business: {
      description: '',
      website: ''
    },
    goals: {
      mainGoal: '',
      targetAction: ''
    },
    audience: {
      description: '',
      painPoints: ''
    },
    usp: {
      uniqueValue: ''
    },
    design: {
      preferences: '',
      examples: ''
    },
    files: []
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (section: keyof FormData, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFormData(prev => ({
        ...prev,
        files: [...prev.files, ...newFiles]
      }))
    }
  }

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
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

    // Validate required primary fields
    if (!formData.primary.businessName || !formData.primary.niche || !formData.primary.email) {
      alert(t('primary.validation'));
      return;
    }

    setIsSubmitting(true);

    // Зберігаємо дані форми в MongoDB
    let formLogId;
    try {
      // Додаємо інформацію про джерело форми
      const formDataWithSource = {
        ...formData,
        formSource: 'brief-landing'
      };
      
      // Спочатку зберігаємо дані в MongoDB
      const logResult = await logFormSubmission('contact', formDataWithSource);
      if (logResult.success) {
        formLogId = logResult.id;
      }
    } catch (logError) {
      console.error('Помилка при логуванні форми:', logError);
      // Продовжуємо навіть якщо логування не вдалося
    }

    try {
      const message = `
🎯 <b>New Landing Page Brief Received!</b>

📋 <b>Contact Information:</b>
Business: ${formData.primary.businessName}
Niche: ${formData.primary.niche}
Email: ${formData.primary.email}
Phone: ${formData.primary.phone || 'Not provided'}
Preferred contact: ${formData.primary.contactMethod}

1️⃣ <b>About Business:</b>
Description: ${formData.business.description}
Website: ${formData.business.website || 'Not provided'}

2️⃣ <b>Goals:</b>
Main Goal: ${formData.goals.mainGoal}
Target Action: ${formData.goals.targetAction}

3️⃣ <b>Target Audience:</b>
Description: ${formData.audience.description}
Pain Points: ${formData.audience.painPoints}

4️⃣ <b>Unique Value:</b>
${formData.usp.uniqueValue}

5️⃣ <b>Design Preferences:</b>
Preferences: ${formData.design.preferences}
Examples: ${formData.design.examples || 'Not provided'}

6️⃣ <b>Attached Files:</b>
${formData.files.length > 0 ? formData.files.map(f => f.name).join('\n') : 'No files uploaded'}

📅 Submitted: ${new Date().toLocaleString('en-US')}
      `;

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
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <div className="max-w-6xl mx-auto px-4 pb-12 pt-4 sm:pt-12 relative">
        <LanguageSwitcher />
        
        <h1 className="mt-4 sm:mt-0 text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {t('title')}
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Primary Info Section */}
          <section className="bg-gray-900/80 rounded-xl p-6 border border-gray-800 shadow-xl mb-8">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
                ★
              </div>
              <h2 className="ml-4 text-2xl font-bold text-gray-100">
                {s('primaryTitle')}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-gray-300 font-medium">{s('primary.businessName.label')}</label>
                <input
                  type="text"
                  value={formData.primary.businessName}
                  onChange={e => handleChange('primary', 'businessName', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full p-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  placeholder={s('primary.businessName.placeholder')}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300 font-medium">{s('primary.niche.label')}</label>
                <input
                  type="text"
                  value={formData.primary.niche}
                  onChange={e => handleChange('primary', 'niche', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full p-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  placeholder={s('primary.niche.placeholder')}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300 font-medium">{s('primary.email.label')}</label>
                <input
                  type="email"
                  value={formData.primary.email}
                  onChange={e => handleChange('primary', 'email', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full p-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  placeholder={s('primary.email.placeholder')}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300 font-medium">{s('primary.phone.label')}</label>
                <input
                  type="tel"
                  value={formData.primary.phone}
                  onChange={e => handleChange('primary', 'phone', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full p-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  placeholder={s('primary.phone.placeholder')}
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300 font-medium">{s('primary.contactMethod.label')}</label>
                <select
                  value={formData.primary.contactMethod}
                  onChange={(e) => handleChange('primary', 'contactMethod', e.target.value)}
                  className="w-full p-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  required
                >
                  {contactOptions.map((option) => (
                    <option key={option} value={option} className="text-black">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>
          <div className="space-y-8">
            {/* Section 1: About Business */}
            <section className="bg-gray-900/80 rounded-xl p-6 border border-gray-800 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
                  1
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">{s('sections.about.title')}</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">{s('sections.about.description.label')}</label>
                  <textarea 
                    value={formData.business.description}
                    onChange={(e) => handleChange('business', 'description', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                    rows={4}
                    placeholder={s('sections.about.description.placeholder')}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">{s('sections.about.website.label')}</label>
                  <input 
                    type="url"
                    value={formData.business.website}
                    onChange={(e) => handleChange('business', 'website', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                    placeholder={s('sections.about.website.placeholder')}
                  />
                </div>
              </div>
            </section>

            {/* Section 2: Goals */}
            <section className="bg-gray-900/80 rounded-xl p-6 border border-gray-800 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
                  2
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">{s('sections.goals.title')}</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">{s('sections.goals.mainGoal.label')}</label>
                  <select 
                    value={formData.goals.mainGoal}
                    onChange={(e) => handleChange('goals', 'mainGoal', e.target.value)}
                    className="w-full p-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                    required
                  >
                    <option value="">{s('sections.goals.mainGoal.options.empty')}</option>
                    <option value="sales">{s('sections.goals.mainGoal.options.sales')}</option>
                    <option value="leads">{s('sections.goals.mainGoal.options.leads')}</option>
                    <option value="event">{s('sections.goals.mainGoal.options.event')}</option>
                    <option value="subscription">{s('sections.goals.mainGoal.options.subscription')}</option>
                    <option value="download">{s('sections.goals.mainGoal.options.download')}</option>
                    <option value="other">{s('sections.goals.mainGoal.options.other')}</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">{s('sections.goals.targetAction.label')}</label>
                  <textarea 
                    value={formData.goals.targetAction}
                    onChange={(e) => handleChange('goals', 'targetAction', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                    rows={3}
                    placeholder={s('sections.goals.targetAction.placeholder')}
                    required
                  />
                </div>
              </div>
            </section>

            {/* Section 3: Target Audience */}
            <section className="bg-gray-900/80 rounded-xl p-6 border border-gray-800 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
                  3
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">{s('sections.audience.title')}</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">{s('sections.audience.description.label')}</label>
                  <textarea 
                    value={formData.audience.description}
                    onChange={(e) => handleChange('audience', 'description', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                    rows={3}
                    placeholder={s('sections.audience.description.placeholder')}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">{s('sections.audience.painPoints.label')}</label>
                  <textarea 
                    value={formData.audience.painPoints}
                    onChange={(e) => handleChange('audience', 'painPoints', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                    rows={3}
                    placeholder={s('sections.audience.painPoints.placeholder')}
                    required
                  />
                </div>
              </div>
            </section>

            {/* Section 4: Unique Value */}
            <section className="bg-gray-900/80 rounded-xl p-6 border border-gray-800 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
                  4
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">{s('sections.usp.title')}</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">{s('sections.usp.uniqueValue.label')}</label>
                  <textarea 
                    value={formData.usp.uniqueValue}
                    onChange={(e) => handleChange('usp', 'uniqueValue', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                    rows={4}
                    placeholder={s('sections.usp.uniqueValue.placeholder')}
                    required
                  />
                </div>
              </div>
            </section>

            {/* Section 5: Design */}
            <section className="bg-gray-900/80 rounded-xl p-6 border border-gray-800 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
                  5
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">{s('sections.design.title')}</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">{s('sections.design.preferences.label')}</label>
                  <textarea 
                    value={formData.design.preferences}
                    onChange={(e) => handleChange('design', 'preferences', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                    rows={3}
                    placeholder={s('sections.design.preferences.placeholder')}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">{s('sections.design.examples.label')}</label>
                  <textarea 
                    value={formData.design.examples}
                    onChange={(e) => handleChange('design', 'examples', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                    rows={3}
                    placeholder={s('sections.design.examples.placeholder')}
                  />
                </div>
              </div>
            </section>

            {/* Section 6: Files Upload */}
            <section className="bg-gray-900/80 rounded-xl p-6 border border-gray-800 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                  6
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-100">{s('sections.files.title')}</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">{s('sections.files.label')}</label>
                  <div className="mt-2">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-400"><span className="font-semibold">{s('sections.files.clickToUpload')}</span> {s('sections.files.orDragAndDrop')}</p>
                        <p className="text-xs text-gray-500">{s('sections.files.note')}</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        multiple
                        accept="image/*,.pdf,.ai,.psd"
                        onChange={handleFileChange}
                      />
                  </label>
                </div>

                  {formData.files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-gray-400 mb-2">{s('sections.files.uploaded')}</p>
                      {formData.files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-900/50 p-3 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="text-sm text-gray-300">{file.name}</span>
                            <span className="text-xs text-gray-500">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors text-white font-bold py-3 px-8 rounded-lg shadow-md text-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t('submitting') : t('submit')}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

// Export the component with the correct name
export default BriefLanding;