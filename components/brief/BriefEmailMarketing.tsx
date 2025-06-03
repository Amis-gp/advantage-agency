'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import LanguageSwitcher from '../LanguageSwitcher'
import { logFormSubmission, updateFormStatus } from '@/utils/formLogger'

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
  resources: {
    links: string
    uploadedFiles: string[]
  }
  leadMagnets: {
    links: string
    uploadedFiles: string[]
  }
}

const BriefEmailMarketing = () => {
  const locale = useLocale()
  const router = useRouter()
  const t = useTranslations('brief-email')

  // Primary info state
  const [primaryInfo, setPrimaryInfo] = useState({
    businessName: '',
    niche: '',
    email: '',
    phone: ''
  })
  const [primaryError, setPrimaryError] = useState('')

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
    },
    resources: {
      links: '',
      uploadedFiles: []
    },
    leadMagnets: {
      links: '',
      uploadedFiles: []
    }
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [uploadedLeadMagnetFiles, setUploadedLeadMagnetFiles] = useState<File[]>([])

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
    const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID_BRIEF_COLD_EMAIL;
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

  const sendFilesToTelegram = async (files: File[]) => {
    const BOT_TOKEN = process.env.NEXT_PUBLIC_BOT_TOKEN;
    const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID_BRIEF_COLD_EMAIL;
    
    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('Telegram credentials are not configured');
      return;
    }
    
    for (const file of files) {
      if (file.size > 50 * 1024 * 1024) {
        console.error(`File ${file.name} is too large for Telegram API`);
        continue;
      }
      
      const formData = new FormData();
      formData.append('chat_id', CHAT_ID);
      formData.append('document', file);
      
      try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, {
          method: 'POST',
          body: formData,
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error sending file to Telegram:', errorData);
        }
      } catch (error) {
        console.error('Error sending file to Telegram:', error);
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, section: 'resources' | 'leadMagnets') => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      
      const validFiles = newFiles.filter(file => file.size <= 20 * 1024 * 1024)
      
      if (validFiles.length !== newFiles.length) {
        alert(t('sections.7.files.sizeError'))
      }
      
      if (section === 'resources') {
        setUploadedFiles(prev => [...prev, ...validFiles])
        
        setFormData(prev => ({
          ...prev,
          resources: {
            ...prev.resources,
            uploadedFiles: [...prev.resources.uploadedFiles, ...validFiles.map(file => file.name)]
          }
        }))
      } else {
        setUploadedLeadMagnetFiles(prev => [...prev, ...validFiles])
        
        setFormData(prev => ({
          ...prev,
          leadMagnets: {
            ...prev.leadMagnets,
            uploadedFiles: [...prev.leadMagnets.uploadedFiles, ...validFiles.map(file => file.name)]
          }
        }))
      }
    }
  }

  const removeFile = (index: number, section: 'resources' | 'leadMagnets') => {
    if (section === 'resources') {
      setUploadedFiles(prev => prev.filter((_, i) => i !== index))
      setFormData(prev => ({
        ...prev,
        resources: {
          ...prev.resources,
          uploadedFiles: prev.resources.uploadedFiles.filter((_, i) => i !== index)
        }
      }))
    } else {
      setUploadedLeadMagnetFiles(prev => prev.filter((_, i) => i !== index))
      setFormData(prev => ({
        ...prev,
        leadMagnets: {
          ...prev.leadMagnets,
          uploadedFiles: prev.leadMagnets.uploadedFiles.filter((_, i) => i !== index)
        }
      }))
    }
  }

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validatePrimary()) {
      setIsSubmitting(false);
      return;
    }

    // Формуємо дані форми з джерелом для логування
    const completeFormData = {
      primary: primaryInfo,
      ...formData,
      formSource: 'brief-email-marketing'
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

🎯 <b>Новий бриф Email Marketing отримано!</b>

1️⃣ <b>Про бізнес</b>
Опис: ${formData.businessInfo.description}
Проблема: ${formData.businessInfo.problemSolution}
Продукти: ${formData.businessInfo.products}

2️⃣ <b>Цільова аудиторія</b>
Ідеальний клієнт: ${formData.targetAudience.idealClient}
Болі: ${formData.targetAudience.painPoints}
Критерії вибору: ${formData.targetAudience.selectionCriteria}

3️⃣ <b>УТП</b>
Переваги: ${formData.uniqueValue.competitive}
Результати: ${formData.uniqueValue.results}

4️⃣ <b>Цілі розсилки</b>
Бажана дія: ${formData.emailGoals.callToAction}

5️⃣ <b>Приклади успіху</b>
Кейси: ${formData.successStories.cases}

6️⃣ <b>Додаткова інформація</b>
Інфо: ${formData.additional.extraInfo}

7️⃣ <b>Ресурси та матеріали</b>
Посилання: ${formData.resources.links}
Файли: ${formData.resources.uploadedFiles.join(', ')}

8️⃣ <b>Лід-магніти</b>
Посилання: ${formData.leadMagnets.links}
Файли: ${formData.leadMagnets.uploadedFiles.join(', ')}

📅 Дата: ${new Date().toLocaleString('uk-UA')}
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
      
      // Відправляємо файли окремо
      if (uploadedFiles.length > 0) {
        await sendFilesToTelegram(uploadedFiles);
        
        // Відправляємо файли в резервний чат
        if (CHAT_ID_TEST) {
          try {
            const BOT_TOKEN = process.env.NEXT_PUBLIC_BOT_TOKEN;
            
            // Відправляємо кожен файл окремо
            for (const file of uploadedFiles) {
              const formData = new FormData();
              formData.append('chat_id', CHAT_ID_TEST);
              formData.append('document', file);
              formData.append('caption', `Файл: ${file.name}`);
              
              await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, {
                method: 'POST',
                body: formData
              });
            }
            console.log('Файли успішно відправлено в резервний чат');
          } catch (backupFileError) {
            console.error('Помилка відправки файлів в резервний чат:', backupFileError);
          }
        }
      }
      
      // Оновлюємо статус в MongoDB, якщо логування вдалося
      if (formLogId) {
        await updateFormStatus(formLogId, 'sent');
      }
      
      // Redirect to the localized thank you page
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
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto px-4 pb-12 pt-4 sm:pt-12 relative">
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

          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                7
              </div>
              <h2 className="ml-4 text-2xl font-bold text-gray-100">
                {t('sections.7.title')}
              </h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t('sections.7.links.label')}
                </label>
                <textarea
                  value={formData.resources.links}
                  onChange={(e) => handleChange('resources', 'links', e.target.value)}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  rows={4}
                  placeholder={t('sections.7.links.placeholder')}
                  onKeyDown={handleKeyDown}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t('sections.7.files.label')}
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer border-gray-600 hover:border-gray-500 bg-gray-900/50">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p className="mb-2 text-sm text-gray-400">
                        <span className="font-semibold">{t('sections.7.files.dropzone')}</span>
                      </p>
                      <p className="text-xs text-gray-400">{t('sections.7.files.formats')}</p>
                    </div>
                    <input 
                      type="file" 
                      className="hidden" 
                      multiple 
                      onChange={(e) => handleFileUpload(e, 'resources')}
                      accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.xlsx,.zip,.rar,.7z"
                    />
                  </label>
                </div>
                
                {uploadedFiles.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">{t('sections.7.files.uploaded')}</h4>
                    <ul className="space-y-2">
                      {uploadedFiles.map((file, index) => (
                        <li key={index} className="flex items-center justify-between p-2 bg-gray-800 rounded-lg">
                          <span className="text-sm text-gray-300 truncate max-w-xs">{file.name}</span>
                          <button 
                            type="button" 
                            onClick={() => removeFile(index, 'resources')}
                            className="text-red-400 hover:text-red-500"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* New section 8 for lead magnets */}
          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                8
              </div>
              <h2 className="ml-4 text-2xl font-bold text-gray-100">
                {t('sections.8.title')}
              </h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t('sections.8.links.label')}
                </label>
                <textarea
                  value={formData.leadMagnets.links}
                  onChange={(e) => handleChange('leadMagnets', 'links', e.target.value)}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  rows={4}
                  placeholder={t('sections.8.links.placeholder')}
                  onKeyDown={handleKeyDown}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t('sections.8.files.label')}
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer border-gray-600 hover:border-gray-500 bg-gray-900/50">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p className="mb-2 text-sm text-gray-400">
                        <span className="font-semibold">{t('sections.8.files.dropzone')}</span>
                      </p>
                      <p className="text-xs text-gray-400">{t('sections.8.files.formats')}</p>
                    </div>
                    <input 
                      type="file" 
                      className="hidden" 
                      multiple 
                      onChange={(e) => handleFileUpload(e, 'leadMagnets')}
                      accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.xlsx,.zip,.rar,.7z"
                    />
                  </label>
                </div>
                
                {uploadedLeadMagnetFiles.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">{t('sections.8.files.uploaded')}</h4>
                    <ul className="space-y-2">
                      {uploadedLeadMagnetFiles.map((file, index) => (
                        <li key={index} className="flex items-center justify-between p-2 bg-gray-800 rounded-lg">
                          <span className="text-sm text-gray-300 truncate max-w-xs">{file.name}</span>
                          <button 
                            type="button" 
                            onClick={() => removeFile(index, 'leadMagnets')}
                            className="text-red-400 hover:text-red-500"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
