"use client";

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import "@/app/globals.css";

const Formspree = () => {
  const t = useTranslations('form');
  const [isSelectAnswer1, setIsSelectAnswer1] = useState(true);
  const [isSelectAnswer3, setIsSelectAnswer3] = useState(true);
  const [isSelectAnswer4, setIsSelectAnswer4] = useState(true);

  const handleSelectAnswer1 = () => {
    setIsSelectAnswer1(false);
  };
  const handleSelectAnswer3 = () => {
    setIsSelectAnswer3(false);
  };
  const handleSelectAnswer4 = () => {
    setIsSelectAnswer4(false);
  };

  return (
    <form action="https://formspree.io/f/mrgnzzpy" className="border border-gray-200 rounded-md p-4 sm:p-6 mt-16 mb-8 shadow-[0_1px_8px_0px_rgba(0,0,0,0.08)] max-w-[600px] md:w-[600px] text-base" method="post">
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
          type="submit">
          {t('submit')}
        </button>
      </div>
    </form>
  );
};

export default Formspree;
