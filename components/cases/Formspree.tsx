"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import "@/app/globals.css";
import { logFormSubmission, updateFormStatus } from '@/utils/formLogger';

const Formspree = () => {
  const t = useTranslations('form');
  const [isSelectAnswer1, setIsSelectAnswer1] = useState(true);
  const [isSelectAnswer3, setIsSelectAnswer3] = useState(true);
  const [isSelectAnswer4, setIsSelectAnswer4] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleSelectAnswer1 = () => {
    setIsSelectAnswer1(false);
  };
  const handleSelectAnswer3 = () => {
    setIsSelectAnswer3(false);
  };
  const handleSelectAnswer4 = () => {
    setIsSelectAnswer4(false);
  };

  // Закрити модальне вікно при кліку поза ним
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  // Функція для закриття модального вікна
  const closeModal = () => {
    setShowModal(false);
  };
  
  // Функція для обробки відправки форми
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Отримуємо дані форми
    const formData = new FormData(e.currentTarget);
    const formValues: Record<string, string> = {};
    
    // Конвертуємо FormData в об'єкт
    formData.forEach((value, key) => {
      formValues[key] = value.toString();
    });
    
    // Додаємо інформацію про джерело форми
    const dataToLog = {
      ...formValues,
      formSource: 'cases'
    };
    
    // Зберігаємо дані в MongoDB
    let formLogId;
    try {
      const logResult = await logFormSubmission('formspree', dataToLog);
      if (logResult.success) {
        formLogId = logResult.id;
      }
    } catch (logError) {
      console.error('Помилка при логуванні форми:', logError);
      // Продовжуємо відправку навіть якщо логування не вдалося
    }
    
    try {
      // Відправляємо дані на Formspree
      const response = await fetch('https://formspree.io/f/mrgnzzpy', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Оновлюємо статус в MongoDB, якщо логування вдалося
        if (formLogId) {
          await updateFormStatus(formLogId, 'sent');
        }
        
        // Очищаємо форму або перенаправляємо користувача
        (e.target as HTMLFormElement).reset();
        setIsSuccess(true);
        setModalMessage(t('success') || 'Дякуємо! Ваша заявка прийнята.');
        setShowModal(true);
      } else {
        throw new Error('Помилка при відправці форми на Formspree');
      }
    } catch (error) {
      console.error('Помилка відправки форми:', error);
      
      // Оновлюємо статус в MongoDB як помилку, якщо логування вдалося
      if (formLogId) {
        await updateFormStatus(formLogId, 'failed');
      }
      
      setIsSuccess(false);
      setModalMessage(t('error') || 'Виникла помилка при відправці форми. Спробуйте ще раз.');
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div 
            ref={modalRef}
            className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-semibold ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
                {isSuccess ? t('successTitle') || 'Успіх!' : t('errorTitle') || 'Помилка!'}
              </h3>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">{modalMessage}</p>
            </div>
            <div className="text-center">
              <button
                onClick={closeModal}
                className={`px-4 py-2 rounded font-medium ${isSuccess ? 'bg-green-600' : 'bg-red-600'} text-white hover:opacity-90 transition-opacity duration-300`}
              >
                {t('modalClose') || 'OK'}
              </button>
            </div>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="border border-gray-200 rounded-md p-4 sm:p-6 mt-16 mb-8 shadow-[0_1px_8px_0px_rgba(0,0,0,0.08)] max-w-[600px] md:w-[600px] text-base">
      <div className="mb-6">
        <label htmlFor="name" className="block font-semibold">
          {t('name')}
        </label>
        <input
          name="Name"
          id="name"
          type="text"
          className="shadow appearance-none border border-gray-100 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder={t('namePlaceholder')}
          required/>
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block font-semibold">
          {t('email')}
        </label>
        <input
          name="Email"
          id="email"
          type="email"
          className="shadow appearance-none border border-gray-100 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder={t('emailPlaceholder')}
          required/>
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block font-semibold">
          {t('phone')}
        </label>
        <input
          name="Phone"
          id="phone"
          type="text"
          className="shadow appearance-none border border-gray-100 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder={t('phonePlaceholder')}
          required/>
      </div>

      <div className="mb-6">
        <label htmlFor="Have_you_ever_launched_ads_before?" className="block font-semibold">
          {t('adsExperience.question')}
        </label>
        <select
          name="Have_you_ever_launched_ads_before?"
          id="Have_you_ever_launched_ads_before?"
          className={`shadow appearance-none border border-gray-100 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline custom-select-arrow ${isSelectAnswer1 ? 'text-gray-500' : 'text-black'}`}
          onChange={handleSelectAnswer1}
          required
          defaultValue="">
          <option value="" disabled>{t('select')}</option>
          <option value="Yes_recently">{t('adsExperience.recently')}</option>
          <option value="No_never">{t('adsExperience.never')}</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="What_price_are_you_willing_to_pay_per_new_client?" className="block font-semibold">
          {t('pricePerClient.question')}
        </label>
        <select
          name="What_price_are_you_willing_to_pay_per_new_client?"
          id="What_price_are_you_willing_to_pay_per_new_client?"
          className={`shadow appearance-none border border-gray-100 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline custom-select-arrow ${isSelectAnswer3 ? 'text-gray-500' : 'text-black'}`}
          onChange={handleSelectAnswer3}
          required
          defaultValue="">
          <option value="" disabled>{t('select')}</option>
          <option value="$20">{t('pricePerClient.upto20')}</option>
          <option value="$20-$50">{t('pricePerClient.20to50')}</option>
          <option value="$50+">{t('pricePerClient.50plus')}</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="How_many_new_customers_can_you_process_per_day?" className="block font-semibold">
          {t('customersPerDay.question')}
        </label>
        <select
          name="How_many_new_customers_can_you_process_per_day?"
          id="How_many_new_customers_can_you_process_per_day?"
          className={`shadow appearance-none border border-gray-100 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline custom-select-arrow ${isSelectAnswer4 ? 'text-gray-500' : 'text-black'}`}
          onChange={handleSelectAnswer4}
          required
          defaultValue="">
          <option value="" disabled>{t('select')}</option>
          <option value="50">{t('customersPerDay.upto50')}</option>
          <option value="100">{t('customersPerDay.upto100')}</option>
          <option value="100+">{t('customersPerDay.100plus')}</option>
        </select>
      </div>

      <div className="text-center">
        <button
          className="bg-orange-600 text-white px-4 py-2 text-xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out mx-auto"
          type="submit"
          disabled={isSubmitting}>
          {isSubmitting ? (t('submitting') || 'Обробка...') : t('submit')}
        </button>
      </div>
    </form>
    </>
  );
};

export default Formspree;
