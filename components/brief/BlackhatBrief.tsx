'use client';

import React, { useState } from 'react';

interface FormData {
  email: string;
  company: string;
  audienceType: string;
  advantagePlus: string;
  sparkConcept: string;
  campaignStructure: string;
  parallelCampaigns: string;
  adAccounts: string;
  optimizationTime: string;
  cutoffPoint: string;
  thresholds: string;
  conversionRate: string;
  scalingStep: string;
  creativesType: string;
  creativesCount: string;
  creativesExamples: string;
  commentsWork: string;
  casinoTypes: string;
  geos: string;
  testingBudgets: string;
  dailySpend: string;
  biggestChallenge: string;
  timeManagement: string;
}

const BlackhatBrief = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    company: '',
    audienceType: '',
    advantagePlus: '',
    sparkConcept: '',
    campaignStructure: '',
    parallelCampaigns: '',
    adAccounts: '',
    optimizationTime: '',
    cutoffPoint: '',
    thresholds: '',
    conversionRate: '',
    scalingStep: '',
    creativesType: '',
    creativesCount: '',
    creativesExamples: '',
    commentsWork: '',
    casinoTypes: '',
    geos: '',
    testingBudgets: '',
    dailySpend: '',
    biggestChallenge: '',
    timeManagement: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendToTelegram = async (data: FormData) => {
    const botToken = process.env.NEXT_PUBLIC_BOT_TOKEN;
    const chatIds = [process.env.NEXT_PUBLIC_CHAT_ID, process.env.NEXT_PUBLIC_CHAT_ID_TEST].filter(Boolean);
    
    const message = `
🔥 *Blackhat Brief Submission*

👤 *Contact Info:*
• Company: ${data.company}
• Email: ${data.email}

🎯 *1. Audience & Targeting:*
• Audience Type: ${data.audienceType}
• Advantage+ Expansion: ${data.advantagePlus}

⚙️ *2. Campaign Setup:*
• Spark Concept: ${data.sparkConcept}
• Campaign Structure: ${data.campaignStructure}
• Parallel Campaigns: ${data.parallelCampaigns}
• Ad Accounts: ${data.adAccounts}

📈 *3. Optimization & Scaling:*
• Optimization Time: ${data.optimizationTime}
• Cut-off Point: ${data.cutoffPoint}
• Thresholds: ${data.thresholds}
• Conversion Rate: ${data.conversionRate}
• Scaling Step: ${data.scalingStep}

🎨 *4. Creatives:*
• Creatives Type: ${data.creativesType}
• Creatives Count: ${data.creativesCount}
• Examples: ${data.creativesExamples}
• Comments Work: ${data.commentsWork}

🎰 *5. Offers & GEOs:*
• Casino Types: ${data.casinoTypes}
• GEOs: ${data.geos}

💰 *6. Financial Aspects:*
• Testing Budgets: ${data.testingBudgets}
• Daily Spend: ${data.dailySpend}

⚡ *7. Workflow Challenges:*
• Biggest Challenge: ${data.biggestChallenge}
• Time Management: ${data.timeManagement}
    `;

    try {
      const results = await Promise.all(
        chatIds.map(chatId =>
          fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chat_id: chatId,
              text: message,
              parse_mode: 'Markdown',
            }),
          })
        )
      );

      results.forEach(async (res, index) => {
        if (!res.ok) {
          console.error(`Failed to send to ${chatIds[index]}:`, await res.json().catch(() => 'could not parse error response'));
        }
      });

      return results.some(res => res.ok);
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await sendToTelegram(formData);
      
      if (success) {
        setSubmitStatus('success');
        setFormData({
          email: '',
          company: '',
          audienceType: '',
          advantagePlus: '',
          sparkConcept: '',
          campaignStructure: '',
          parallelCampaigns: '',
          adAccounts: '',
          optimizationTime: '',
          cutoffPoint: '',
          thresholds: '',
          conversionRate: '',
          scalingStep: '',
          creativesType: '',
          creativesCount: '',
          creativesExamples: '',
          commentsWork: '',
          casinoTypes: '',
          geos: '',
          testingBudgets: '',
          dailySpend: '',
          biggestChallenge: '',
          timeManagement: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full p-4 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400";
  const textareaClass = "w-full p-4 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 min-h-[100px] resize-vertical";
  const selectClass = "appearance-none w-full p-4 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-white";

  return (
    <section className="py-8 md:py-12 lg:py-16 min-h-screen">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent leading-tight">
              Blackhat Brief
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              Goal: understand your level of expertise in BlackHat FB traffic and optimization approaches
            </p>
          </div>

          {submitStatus === 'success' && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 max-w-sm w-full text-center shadow-xl">
                <div className="flex justify-center mb-4">
                  <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Success!</h2>
                <p className="text-gray-300 mb-6">Your brief has been submitted successfully. We'll get back to you soon.</p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 md:mb-8 p-3 md:p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300 text-center text-sm md:text-base">
              ❌ Error submitting form. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 lg:space-y-12">
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 md:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-red-500 flex items-center">
                <span className="bg-red-500 text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-sm sm:text-base md:text-lg mr-3 md:mr-4 flex-shrink-0">1</span>
                <span className="leading-tight">Audience & Targeting</span>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-gray-200 leading-tight">
                    What type of audience do you usually work with?
                  </label>
                  <textarea
                    name="audienceType"
                    value={formData.audienceType}
                    onChange={handleInputChange}
                    placeholder="Describe the type of audience you work with (broad, narrow, custom, etc.)..."
                    className={textareaClass}
                    required
                  />
                </div>
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-gray-200 leading-tight">
                    Do you use Advantage+ expansion on audiences and placements?
                  </label>
                  <div className="relative">
                    <select
                      name="advantagePlus"
                      value={formData.advantagePlus}
                      onChange={handleInputChange}
                      className={selectClass}
                      required
                    >
                      <option value="">Select option</option>
                      <option value="yes">Yes, always</option>
                      <option value="sometimes">Sometimes</option>
                      <option value="no">No, never</option>
                      <option value="testing">Currently testing</option>
                    </select>
                    <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 md:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-red-500 flex items-center">
                <span className="bg-red-500 text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-sm sm:text-base md:text-lg mr-3 md:mr-4 flex-shrink-0">2</span>
                <span className="leading-tight">Campaign Setup</span>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-gray-200 leading-tight">
                    Do you know the concept of "Spark up (Catch the spark)" in Facebook ad sets?
                  </label>
                  <p className="text-xs sm:text-sm text-gray-400 mb-2 md:mb-3 leading-relaxed">
                    (If not: it means when Facebook successfully finds the right audience for your ad set and a steady flow of leads starts coming in. In CIS arbitrage, this is the main optimization principle — we cut ad sets that didn't catch the spark to avoid burning budget.)
                  </p>
                  <textarea
                    name="sparkConcept"
                    value={formData.sparkConcept}
                    onChange={handleInputChange}
                    placeholder="Explain your understanding or experience with this concept..."
                    className={textareaClass}
                    required
                  />
                </div>
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-gray-200 leading-tight">
                    What campaign structure do you usually use? (e.g., 1:5:2 - 1 Campaign : 5 Ad sets : 2 Ads, ABO/CBO)
                  </label>
                  <input
                    type="text"
                    name="campaignStructure"
                    value={formData.campaignStructure}
                    onChange={handleInputChange}
                    placeholder="e.g., 1:3:2, CBO with 5 ad sets..."
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-gray-200 leading-tight">
                    How many campaigns do you usually run in parallel?
                  </label>
                  <input
                    type="text"
                    name="parallelCampaigns"
                    value={formData.parallelCampaigns}
                    onChange={handleInputChange}
                    placeholder="e.g., 3-5 campaigns, depends on budget..."
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-gray-200 leading-tight">
                    How many ad accounts are you typically working with at the same time?
                  </label>
                  <input
                    type="text"
                    name="adAccounts"
                    value={formData.adAccounts}
                    onChange={handleInputChange}
                    placeholder="e.g., 2-3 accounts, 1 main account..."
                    className={inputClass}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 md:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-red-500 flex items-center">
                <span className="bg-red-500 text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-sm sm:text-base md:text-lg mr-3 md:mr-4 flex-shrink-0">3</span>
                <span className="leading-tight">Optimization & Scaling</span>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-gray-200 leading-tight">
                    How much time do you usually give campaigns/ad sets for optimization?
                  </label>
                  <input
                    type="text"
                    name="optimizationTime"
                    value={formData.optimizationTime}
                    onChange={handleInputChange}
                    placeholder="e.g., 24-48 hours, 3 days..."
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-gray-200 leading-tight">
                    What is your cut-off point — the signal for you to turn off an ad set or campaign?
                  </label>
                  <textarea
                    name="cutoffPoint"
                    value={formData.cutoffPoint}
                    onChange={handleInputChange}
                    placeholder="Describe your criteria for stopping campaigns..."
                    className={textareaClass}
                    required
                  />
                </div>
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-gray-200 leading-tight">
                    Do you track specific thresholds for CPC, CPL, registration, or deposit?
                  </label>
                  <textarea
                    name="thresholds"
                    value={formData.thresholds}
                    onChange={handleInputChange}
                    placeholder="List your KPI thresholds..."
                    className={textareaClass}
                    required
                  />
                </div>
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-gray-200 leading-tight">
                    At what conversion rate (CR) do you usually decide to start scaling a campaign?
                  </label>
                  <input
                    type="text"
                    name="conversionRate"
                    value={formData.conversionRate}
                    onChange={handleInputChange}
                    placeholder="e.g., 15%, depends on GEO..."
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-gray-200 leading-tight">
                    When an ad set starts bringing conversions, what's your next step?
                  </label>
                  <textarea
                    name="scalingStep"
                    value={formData.scalingStep}
                    onChange={handleInputChange}
                    placeholder="Describe your scaling strategy (budget increase %, duplication, etc.)..."
                    className={textareaClass}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 md:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-red-500 flex items-center">
                <span className="bg-red-500 text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-sm sm:text-base md:text-lg mr-3 md:mr-4 flex-shrink-0">4</span>
                <span className="leading-tight">Creatives</span>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-gray-200 leading-tight">
                    What kind of creatives do you use?
                  </label>
                  <div className="relative">
                    <select
                      name="creativesType"
                      value={formData.creativesType}
                      onChange={handleInputChange}
                      className={selectClass}
                      required
                    >
                      <option value="">Select creative type</option>
                      <option value="own">Own production</option>
                      <option value="spy">Taken from spy tools</option>
                      <option value="studios">Ordered from creative studios</option>
                      <option value="mix">A mix of all</option>
                    </select>
                    <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-gray-200 leading-tight">
                    How many creatives (marketing approaches) do you test for a single offer?
                  </label>
                  <input
                    type="text"
                    name="creativesCount"
                    value={formData.creativesCount}
                    onChange={handleInputChange}
                    placeholder="e.g., 5-10 creatives, 3-4 angles..."
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                   <label className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-gray-200 leading-tight">
                     If possible, please share examples of your advertising creatives or describe your approach *
                   </label>
                   <textarea
                     name="creativesExamples"
                     value={formData.creativesExamples}
                     onChange={handleInputChange}
                     placeholder="Describe your creative approach or share links/examples..."
                     className={textareaClass}
                     required
                   />
                 </div>
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-gray-200 leading-tight">
                    Do you work with comments under ads (e.g., deleting negative ones)?
                  </label>
                  <div className="relative">
                    <select
                      name="commentsWork"
                      value={formData.commentsWork}
                      onChange={handleInputChange}
                      className={selectClass}
                      required
                    >
                      <option value="">Select option</option>
                      <option value="yes">Yes, actively manage comments</option>
                      <option value="sometimes">Sometimes</option>
                      <option value="no">No, don't manage comments</option>
                      <option value="automated">Use automated tools</option>
                    </select>
                    <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 md:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-red-500 flex items-center">
                <span className="bg-red-500 text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-sm sm:text-base md:text-lg mr-3 md:mr-4 flex-shrink-0">5</span>
                <span className="leading-tight">Offers & GEOs</span>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-gray-200 leading-tight">
                    On which casino game types have you already tried running traffic?
                  </label>
                  <textarea
                    name="casinoTypes"
                    value={formData.casinoTypes}
                    onChange={handleInputChange}
                    placeholder="e.g., Slots, live casino, crash games, sports betting..."
                    className={textareaClass}
                    required
                  />
                </div>
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-gray-200 leading-tight">
                    Which GEOs have you worked with so far?
                  </label>
                  <textarea
                    name="geos"
                    value={formData.geos}
                    onChange={handleInputChange}
                    placeholder="List countries/regions you've worked with..."
                    className={textareaClass}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 md:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-red-500 flex items-center">
                <span className="bg-red-500 text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-sm sm:text-base md:text-lg mr-3 md:mr-4 flex-shrink-0">6</span>
                <span className="leading-tight">Financial Aspects</span>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-gray-200 leading-tight">
                    What testing budgets do you usually allocate per ad set?
                  </label>
                  <input
                    type="text"
                    name="testingBudgets"
                    value={formData.testingBudgets}
                    onChange={handleInputChange}
                    placeholder="e.g., $50-100 per ad set, depends on GEO..."
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-gray-200 leading-tight">
                    What's your average daily spend across all campaigns?
                  </label>
                  <input
                    type="text"
                    name="dailySpend"
                    value={formData.dailySpend}
                    onChange={handleInputChange}
                    placeholder="e.g., $500-1000, $2000+..."
                    className={inputClass}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 md:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-red-500 flex items-center">
                <span className="bg-red-500 text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-sm sm:text-base md:text-lg mr-3 md:mr-4 flex-shrink-0">7</span>
                <span className="leading-tight">Workflow Challenges</span>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-gray-200 leading-tight">
                    What's your biggest challenge in BlackHat traffic right now?
                  </label>
                  <textarea
                    name="biggestChallenge"
                    value={formData.biggestChallenge}
                    onChange={handleInputChange}
                    placeholder="Describe your main challenges (account bans, scaling, creatives, etc.)..."
                    className={textareaClass}
                    required
                  />
                </div>
                <div>
                  <label className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-gray-200 leading-tight">
                    How do you manage your time between campaign optimization and other tasks?
                  </label>
                  <textarea
                    name="timeManagement"
                    value={formData.timeManagement}
                    onChange={handleInputChange}
                    placeholder="Describe your daily routine and time allocation..."
                    className={textareaClass}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 md:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-red-500">
                Contact Information
              </h2>
              <div className="space-y-4 md:space-y-6 ">
                <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Name *"
                    className={inputClass}
                    required
                  />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address *"
                  className={inputClass}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-auto mx-auto bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-4 px-8 md:px-12 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-base md:text-lg min-h-[56px] flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Brief'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlackhatBrief;