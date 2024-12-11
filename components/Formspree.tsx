import React, { useState } from 'react';
import "../app/globals.css";

const Formspree = () => {
  const [isSelectAnswer1, setIsSelectAnswer1] = useState(true);
  const [isSelectAnswer2, setIsSelectAnswer2] = useState(true);
  const [isSelectAnswer3, setIsSelectAnswer3] = useState(true);
  const [isSelectAnswer4, setIsSelectAnswer4] = useState(true);

  const handleSelectAnswer1 = () => {
    setIsSelectAnswer1(false);
  };
  const handleSelectAnswer2 = () => {
    setIsSelectAnswer2(false);
  };
  const handleSelectAnswer3 = () => {
    setIsSelectAnswer3(false);
  };
  const handleSelectAnswer4 = () => {
    setIsSelectAnswer4(false);
  };

  return (
    <form action="https://formspree.io/f/mrgnzzpy" className="border border-gray-200 rounded-md p-4 sm:p-6 mt-16 mb-8 shadow-[0_1px_8px_0px_rgba(0,0,0,0.08)] w-[600px] text-base" method="post">
      <div className="mb-6">
        <label htmlFor="name" className="block font-semibold">
          Name
        </label>
        <input
          name="Name"
          id="name"
          type="text"
          className="shadow appearance-none border border-gray-100 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your name"
          required/>
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block font-semibold">
          Email
        </label>
        <input
          name="Email"
          id="email"
          type="email"
          className="shadow appearance-none border border-gray-100 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your email"
          required/>
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block font-semibold">
          Phone
        </label>
        <input
          name="Phone"
          id="phone"
          type="text"
          className="shadow appearance-none border border-gray-100 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your phone"
          required/>
      </div>

      <div className="mb-6">
        <label htmlFor="Have_you_ever_launched_ads_before?" className="block font-semibold">
          Have you ever launched ads before?
        </label>
        <select
          name="Have_you_ever_launched_ads_before?"
          id="Have_you_ever_launched_ads_before?"
          className={`shadow appearance-none border border-gray-100 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline custom-select-arrow ${isSelectAnswer1 ? 'text-gray-500' : 'text-black'}`}
          onChange={handleSelectAnswer1}
          required
          defaultValue="">
          <option value="" disabled>Select...</option>
          <option value="Yes_recently">Yes, recently</option>
          <option value="No_never">No, never</option>
          <option value="No_for_a_long_time">No, for a long time</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="What_is_your_monthly_advertising_budget?" className="block font-semibold">
          What is your monthly advertising budget?
        </label>
        <select
          name="What_is_your_monthly_advertising_budget?"
          id="What_is_your_monthly_advertising_budget?"
          className={`shadow appearance-none border border-gray-100 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline custom-select-arrow ${isSelectAnswer2 ? 'text-gray-500' : 'text-black'}`}
          onChange={handleSelectAnswer2}
          required
          defaultValue="">
          <option value="" disabled>Select...</option>
          <option value="$500">$500</option>
          <option value="$500-$1200">from $500 to $1200</option>
          <option value="$1200-$2000">from $1200 to $2000</option>
          <option value="$2000-$5000">from $2000 to $5000</option>
          <option value="$10000+">from 10000$ and above</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="What_price_are_you_willing_to_pay_per_new_client?" className="block font-semibold">
          What price are you willing to pay per new client?
        </label>
        <select
          name="What_price_are_you_willing_to_pay_per_new_client?"
          id="What_price_are_you_willing_to_pay_per_new_client?"
          className={`shadow appearance-none border border-gray-100 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline custom-select-arrow ${isSelectAnswer3 ? 'text-gray-500' : 'text-black'}`}
          onChange={handleSelectAnswer3}
          required
          defaultValue="">
          <option value="" disabled>Select...</option>
          <option value="$20">up to $20</option>
          <option value="$20-$50">between $20 and $50</option>
          <option value="$150+">more than $150</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="How_many_new_customers_can_you_process_per_day?" className="block font-semibold">
          How many new customers can you process per day?
        </label>
        <select
          name="How_many_new_customers_can_you_process_per_day?"
          id="How_many_new_customers_can_you_process_per_day?"
          className={`shadow appearance-none border border-gray-100 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline custom-select-arrow ${isSelectAnswer4 ? 'text-gray-500' : 'text-black'}`}
          onChange={handleSelectAnswer4}
          required
          defaultValue="">
          <option value="" disabled>Select...</option>
          <option value="1-3">up to 3</option>
          <option value="3-8">up to 8</option>
          <option value="15+">more than 15</option>
        </select>
      </div>

      <div className="text-center">
        <button
          className="bg-orange-600 text-white px-4 py-2 text-xl font-bold rounded hover:bg-orange-700 transition duration-300 ease-in-out mx-auto"
          type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Formspree;
