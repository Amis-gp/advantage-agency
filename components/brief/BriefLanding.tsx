'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import LanguageSwitcher from '@/components/LanguageSwitcher'

interface FormData {
  primary: {
    businessName: string;
    niche: string;
    email: string;
    phone: string;
  };
  companyInfo: {
    name: string;
    industry: string;
    description: string;
    website: string;
    contact: string;
  };
  goals: {
    mainGoal: string;
    expectedActions: string;
    successMetrics: string;
    kpi: string;
  };
  audience: {
    description: string;
    problems: string;
    objections: string;
    solutions: string;
  };
  usp: {
    differences: string;
    benefits: string;
    whyChooseYou: string;
    guarantees: string;
  };
  competitors: {
    mainCompetitors: string;
    competitorLinks: string;
    whatYouLike: string;
    whatYouDislike: string;
    howToStandOut: string;
  };
  design: {
    brandbook: string;
    colors: string;
    fonts: string;
    inspirationLinks: string;
    existingImages: string;
    needIllustrations: string;
  };
  structure: {
    sections: string;
    readyContent: string;
    needCopywriting: string;
    socialProof: string;
    needVideo: string;
  };
  technical: {
    mobileAdaptation: string;
    leadCaptureForms: string;
    leadsDestination: string;
    analytics: string;
    integrations: string;
    multilingual: string;
  };
  timeline: {
    launchDate: string;
    milestones: string;
    budget: string;
    maintenanceBudget: string;
  };
  additional: {
    specialRequests: string;
    constraints: string;
    questions: string;
  };
}

// Change the component name to match the file name or export it properly
const BriefLanding = () => {
  const locale = useLocale()
  const router = useRouter()
  const t = useTranslations('brief-landing')
  
  const [formData, setFormData] = useState<FormData>({
    primary: {
      businessName: '',
      niche: '',
      email: '',
      phone: '',
    },
    companyInfo: {
      name: '',
      industry: '',
      description: '',
      website: '',
      contact: ''
    },
    goals: {
      mainGoal: '',
      expectedActions: '',
      successMetrics: '',
      kpi: ''
    },
    audience: {
      description: '',
      problems: '',
      objections: '',
      solutions: ''
    },
    usp: {
      differences: '',
      benefits: '',
      whyChooseYou: '',
      guarantees: ''
    },
    competitors: {
      mainCompetitors: '',
      competitorLinks: '',
      whatYouLike: '',
      whatYouDislike: '',
      howToStandOut: ''
    },
    design: {
      brandbook: '',
      colors: '',
      fonts: '',
      inspirationLinks: '',
      existingImages: '',
      needIllustrations: ''
    },
    structure: {
      sections: '',
      readyContent: '',
      needCopywriting: '',
      socialProof: '',
      needVideo: ''
    },
    technical: {
      mobileAdaptation: '',
      leadCaptureForms: '',
      leadsDestination: '',
      analytics: '',
      integrations: '',
      multilingual: ''
    },
    timeline: {
      launchDate: '',
      milestones: '',
      budget: '',
      maintenanceBudget: ''
    },
    additional: {
      specialRequests: '',
      constraints: '',
      questions: ''
    }
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

    try {
      const message = `
        🎯 <b>Новий бриф для лендінгу отримано!</b>

<b>Назва бізнесу:</b> ${formData.primary.businessName}
<b>Ніша:</b> ${formData.primary.niche}
<b>Пошта:</b> ${formData.primary.email}
<b>Номер:</b> ${formData.primary.phone}

1️⃣ <b>Інформація про компанію</b>
Назва: ${formData.companyInfo.name}
Сфера діяльності: ${formData.companyInfo.industry}
Опис бізнесу: ${formData.companyInfo.description}
Існуючий сайт: ${formData.companyInfo.website}
Контактна особа: ${formData.companyInfo.contact}

2️⃣ <b>Цілі та завдання</b>
Головна мета: ${formData.goals.mainGoal}
Очікувані дії відвідувачів: ${formData.goals.expectedActions}
Метрики успішності: ${formData.goals.successMetrics}
KPI: ${formData.goals.kpi}

3️⃣ <b>Цільова аудиторія</b>
Опис аудиторії: ${formData.audience.description}
Проблеми/потреби: ${formData.audience.problems}
Можливі заперечення: ${formData.audience.objections}
Як продукт вирішує проблеми: ${formData.audience.solutions}

4️⃣ <b>УТП</b>
Відмінності від конкурентів: ${formData.usp.differences}
Основні переваги: ${formData.usp.benefits}
Чому клієнти мають обрати вас: ${formData.usp.whyChooseYou}
Гарантії: ${formData.usp.guarantees}

5️⃣ <b>Конкуренти</b>
Основні конкуренти: ${formData.competitors.mainCompetitors}
Посилання на конкурентів: ${formData.competitors.competitorLinks}
Що подобається у конкурентів: ${formData.competitors.whatYouLike}
Що не подобається у конкурентів: ${formData.competitors.whatYouDislike}
Як виділятися: ${formData.competitors.howToStandOut}

6️⃣ <b>Дизайн та стиль</b>
Фірмовий стиль/брендбук: ${formData.design.brandbook}
Кольори: ${formData.design.colors}
Шрифти: ${formData.design.fonts}
Приклади для натхнення: ${formData.design.inspirationLinks}
Готові зображення: ${formData.design.existingImages}
Потреба в ілюстраціях: ${formData.design.needIllustrations}

7️⃣ <b>Структура та контент</b>
Блоки/секції: ${formData.structure.sections}
Готовий контент: ${formData.structure.readyContent}
Потреба в копірайтингу: ${formData.structure.needCopywriting}
Соціальні докази: ${formData.structure.socialProof}
Потреба у відео: ${formData.structure.needVideo}

8️⃣ <b>Технічні вимоги</b>
Адаптація під мобільні: ${formData.technical.mobileAdaptation}
Форми захоплення лідів: ${formData.technical.leadCaptureForms}
Куди надходять заявки: ${formData.technical.leadsDestination}
Системи аналітики: ${formData.technical.analytics}
Інтеграції: ${formData.technical.integrations}
Багатомовність: ${formData.technical.multilingual}

9️⃣ <b>Терміни та бюджет</b>
Дата запуску: ${formData.timeline.launchDate}
Проміжні етапи: ${formData.timeline.milestones}
Бюджет: ${formData.timeline.budget}
Бюджет на підтримку: ${formData.timeline.maintenanceBudget}

1️⃣0️⃣ <b>Додаткова інформація</b>
Особливі побажання: ${formData.additional.specialRequests}
Обмеження/вимоги: ${formData.additional.constraints}
Питання: ${formData.additional.questions}

📅 Дата: ${new Date().toLocaleString('uk-UA')}
      `;

      await sendToTelegram(message);
      router.push(`/${locale}/brief-thank-you`);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 pb-12 pt-4 sm:pt-12 relative">
        <LanguageSwitcher />
        
        <h1 className="mt-4 sm:mt-0 text-4xl font-bold text-center mb-8">
          {t('title')}
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Primary Info Section */}
          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-xl mb-8">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                ★
              </div>
              <h2 className="ml-4 text-2xl font-bold text-gray-100">
                {t('primary.title')}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-gray-300 font-medium">
                  {t('primary.businessName.label')}
                </label>
                <input
                  type="text"
                  value={formData.primary.businessName}
                  onChange={e => handleChange('primary', 'businessName', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder={t('primary.businessName.placeholder')}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300 font-medium">
                  {t('primary.niche.label')}
                </label>
                <input
                  type="text"
                  value={formData.primary.niche}
                  onChange={e => handleChange('primary', 'niche', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder={t('primary.niche.placeholder')}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300 font-medium">
                  {t('primary.email.label')}
                </label>
                <input
                  type="email"
                  value={formData.primary.email}
                  onChange={e => handleChange('primary', 'email', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder={t('primary.email.placeholder')}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300 font-medium">
                  {t('primary.phone.label')}
                </label>
                <input
                  type="tel"
                  value={formData.primary.phone}
                  onChange={e => handleChange('primary', 'phone', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder={t('primary.phone.placeholder')}
                />
              </div>
            </div>
          </section>
          <div className="space-y-12">
            {/* Секція 1: Інформація про компанію */}
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
                    {t('sections.1.name.label')}
                  </label>
                  <input 
                    type="text"
                    value={formData.companyInfo.name}
                    onChange={(e) => handleChange('companyInfo', 'name', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder={t('sections.1.name.placeholder')}
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.1.industry.label')}
                  </label>
                  <input 
                    type="text"
                    value={formData.companyInfo.industry}
                    onChange={(e) => handleChange('companyInfo', 'industry', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder={t('sections.1.industry.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.1.description.label')}
                  </label>
                  <textarea 
                    value={formData.companyInfo.description}
                    onChange={(e) => handleChange('companyInfo', 'description', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.1.description.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.1.website.label')}
                  </label>
                  <input 
                    type="text"
                    value={formData.companyInfo.website}
                    onChange={(e) => handleChange('companyInfo', 'website', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder={t('sections.1.website.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.1.contact.label')}
                  </label>
                  <input 
                    type="text"
                    value={formData.companyInfo.contact}
                    onChange={(e) => handleChange('companyInfo', 'contact', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder={t('sections.1.contact.placeholder')}
                  />
                </div>
              </div>
            </section>

            {/* Секція 2: Цілі та завдання */}
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
                    {t('sections.2.mainGoal.label')}
                  </label>
                  <select 
                    value={formData.goals.mainGoal}
                    onChange={(e) => handleChange('goals', 'mainGoal', e.target.value)}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">{t('sections.2.mainGoal.options.empty')}</option>
                    <option value="sales">{t('sections.2.mainGoal.options.sales')}</option>
                    <option value="leads">{t('sections.2.mainGoal.options.leads')}</option>
                    <option value="event">{t('sections.2.mainGoal.options.event')}</option>
                    <option value="subscription">{t('sections.2.mainGoal.options.subscription')}</option>
                    <option value="download">{t('sections.2.mainGoal.options.download')}</option>
                    <option value="other">{t('sections.2.mainGoal.options.other')}</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.2.expectedActions.label')}
                  </label>
                  <textarea 
                    value={formData.goals.expectedActions}
                    onChange={(e) => handleChange('goals', 'expectedActions', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={3}
                    placeholder={t('sections.2.expectedActions.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.2.successMetrics.label')}
                  </label>
                  <textarea 
                    value={formData.goals.successMetrics}
                    onChange={(e) => handleChange('goals', 'successMetrics', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={3}
                    placeholder={t('sections.2.successMetrics.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.2.kpi.label')}
                  </label>
                  <textarea 
                    value={formData.goals.kpi}
                    onChange={(e) => handleChange('goals', 'kpi', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={3}
                    placeholder={t('sections.2.kpi.placeholder')}
                  />
                </div>
              </div>
            </section>

            {/* Секція 3: Цільова аудиторія */}
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
                    {t('sections.3.description.label')}
                  </label>
                  <textarea 
                    value={formData.audience.description}
                    onChange={(e) => handleChange('audience', 'description', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.3.description.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.3.problems.label')}
                  </label>
                  <textarea 
                    value={formData.audience.problems}
                    onChange={(e) => handleChange('audience', 'problems', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.3.problems.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.3.objections.label')}
                  </label>
                  <textarea 
                    value={formData.audience.objections}
                    onChange={(e) => handleChange('audience', 'objections', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.3.objections.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.3.solutions.label')}
                  </label>
                  <textarea 
                    value={formData.audience.solutions}
                    onChange={(e) => handleChange('audience', 'solutions', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.3.solutions.placeholder')}
                  />
                </div>
              </div>
            </section>

            {/* Секція 4: УТП */}
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
                    {t('sections.4.differences.label')}
                  </label>
                  <textarea 
                    value={formData.usp.differences}
                    onChange={(e) => handleChange('usp', 'differences', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.4.differences.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.4.benefits.label')}
                  </label>
                  <textarea 
                    value={formData.usp.benefits}
                    onChange={(e) => handleChange('usp', 'benefits', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.4.benefits.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.4.whyChooseYou.label')}
                  </label>
                  <textarea 
                    value={formData.usp.whyChooseYou}
                    onChange={(e) => handleChange('usp', 'whyChooseYou', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.4.whyChooseYou.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.4.guarantees.label')}
                  </label>
                  <textarea 
                    value={formData.usp.guarantees}
                    onChange={(e) => handleChange('usp', 'guarantees', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={4}
                    placeholder={t('sections.4.guarantees.placeholder')}
                  />
                </div>
              </div>
            </section>

            {/* Секція 5: Конкуренти */}
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
                    {t('sections.5.mainCompetitors.label')}
                  </label>
                  <textarea 
                    value={formData.competitors.mainCompetitors}
                    onChange={(e) => handleChange('competitors', 'mainCompetitors', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={3}
                    placeholder={t('sections.5.mainCompetitors.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.5.competitorLinks.label')}
                  </label>
                  <textarea 
                    value={formData.competitors.competitorLinks}
                    onChange={(e) => handleChange('competitors', 'competitorLinks', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={3}
                    placeholder={t('sections.5.competitorLinks.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.5.whatYouLike.label')}
                  </label>
                  <textarea 
                    value={formData.competitors.whatYouLike}
                    onChange={(e) => handleChange('competitors', 'whatYouLike', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={3}
                    placeholder={t('sections.5.whatYouLike.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.5.whatYouDislike.label')}
                  </label>
                  <textarea 
                    value={formData.competitors.whatYouDislike}
                    onChange={(e) => handleChange('competitors', 'whatYouDislike', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={3}
                    placeholder={t('sections.5.whatYouDislike.placeholder')}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">
                    {t('sections.5.howToStandOut.label')}
                  </label>
                  <textarea 
                    value={formData.competitors.howToStandOut}
                    onChange={(e) => handleChange('competitors', 'howToStandOut', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={3}
                    placeholder={t('sections.5.howToStandOut.placeholder')}
                  />
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