'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BypassModeration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
      const message = `<b>New Lead: https://www.advantage-agency.co/bypass-moderation</b>

<b>Name:</b> ${formData.name}
<b>Email:</b> ${formData.email}
<b>Telegram:</b> ${formData.telegram || 'Not provided'}

<b>Date:</b> ${new Date().toLocaleString('en-US')}`;

      await sendToTelegram(message);
      
      // Backup notification if configured
      const CHAT_ID_TEST = process.env.NEXT_PUBLIC_CHAT_ID_TEST;
      if (CHAT_ID_TEST) {
        try {
          const BOT_TOKEN = process.env.NEXT_PUBLIC_BOT_TOKEN;
          const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
          
          await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: CHAT_ID_TEST,
              text: message,
              parse_mode: 'HTML'
            }),
          });
        } catch (backupError) {
          console.error('Error sending to backup chat:', backupError);
        }
      }
      
      setShowSuccess(true);
      setFormData({ name: '', email: '', telegram: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('get-guide-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-black">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/20 blur-[120px] rounded-full -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-red-600/10 blur-[100px] rounded-full -z-10" />
        
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-red-900/30 border border-red-500/30 text-red-400 text-sm font-medium mb-6 animate-pulse">
              SECRET STRATEGY 2025
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Stop Getting Banned on <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-white drop-shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                Facebook
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Discover the new loophole that allows you to run aggressive campaigns without expensive cloaking or farming. 
            </p>
            <button 
              onClick={scrollToForm}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-red-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/50 transform hover:scale-105"
            >
              Get Access to the Lesson
              <svg className="w-5 h-5 ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>

      {/* The Problem / Solution Teaser */}
      <section className="relative py-24 px-4 bg-zinc-900/30 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-red-600/10 blur-[100px] rounded-full -z-10" />
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
              >
                Why Your Ads Get <span className="text-red-500">Rejected?</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-gray-300 mb-6 leading-relaxed"
              >
                Moderation algorithms are smarter than ever. Standard cloaking services leave footprints. Farming accounts takes weeks. 
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4"
              >
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center gap-4 p-4 bg-zinc-900 rounded-xl border border-red-900/30 hover:border-red-500/50 transition-all duration-300 hover:bg-zinc-800/50"
                >
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <p className="text-gray-300">Banned Ad Accounts</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center gap-4 p-4 bg-zinc-900 rounded-xl border border-red-900/30 hover:border-red-500/50 transition-all duration-300 hover:bg-zinc-800/50"
                >
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <p className="text-gray-300">Wasted Budget on Tests</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-center gap-4 p-4 bg-zinc-900 rounded-xl border border-red-900/30 hover:border-red-500/50 transition-all duration-300 hover:bg-zinc-800/50"
                >
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <p className="text-gray-300">Complex Tech Setup</p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-red-500/20 shadow-2xl shadow-red-900/20 hover:shadow-red-900/30 transition-all duration-300 hover:border-red-500/30">
                <Image 
                  src="/img/bypass-moderation/foto-1.webp" 
                  alt="Secret Method" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-24 px-4 relative bg-black overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/5 blur-[100px] rounded-full -z-10" />
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Why This <span className="text-red-500">Works</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-400"
            >
              Get access to an exclusive lesson from our course. Learn the exact method used by top media buyers in 2025.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
            >
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Works for Any Niche</h3>
              <p className="text-gray-400">Crypto, gambling, supplements, dating, finance—if you can create an ad for it, this method protects it from rejection.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
            >
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Setup in Under 10 Minutes</h3>
              <p className="text-gray-400">No coding, no complex integrations. Just follow the step-by-step instructions inside your ad account.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="group p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
            >
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">No External Tools Needed</h3>
              <p className="text-gray-400">Everything happens inside the native ad platform. No monthly subscriptions or third-party services required.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="group p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
            >
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven by 500+ Media Buyers</h3>
              <p className="text-gray-400">This isn't theory. Real media buyers are using this exact method right now to run profitable campaigns.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Before Form */}
      <section className="relative py-24 px-4 bg-zinc-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/5 to-transparent -z-10" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-red-600/10 blur-[100px] rounded-full -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block py-2 px-4 rounded-full bg-red-900/30 border border-red-500/30 text-red-400 text-sm font-medium mb-6 animate-pulse shadow-lg shadow-red-500/20">
              LIMITED TIME OFFER
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Stop Losing Money on <span className="text-red-500">Rejected Ads</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Every day you wait is another day of wasted ad spend, banned accounts, and lost opportunities. Get the method that's working right now.
            </p>
            <button 
              onClick={scrollToForm}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-red-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/50 transform hover:scale-105"
            >
              Get Access Now for $10
              <svg className="w-5 h-5 ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section id="get-guide-form" className="relative py-24 px-4 bg-black overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/5 blur-[100px] rounded-full -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Unlock the <span className="text-red-500">Secret method</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Don't let bans stop your profit. Get access to the lesson "New method of bypassing moderation" from our course platform.
            </p>
          </motion.div>

          {showSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/10 border border-green-500/50 rounded-2xl p-12 max-w-lg mx-auto"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
              <p className="text-green-400">
                We will contact you shortly with access details to the course platform.
              </p>
            </motion.div>
          ) : (
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit} 
              className="max-w-md mx-auto space-y-6 bg-black p-8 rounded-3xl border border-zinc-800 shadow-2xl shadow-red-900/20 hover:shadow-red-900/30 transition-shadow duration-300"
            >
              <div>
                <label htmlFor="name" className="block text-left text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 hover:border-zinc-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-left text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 hover:border-zinc-600"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="telegram" className="block text-left text-sm font-medium text-gray-400 mb-2">Telegram</label>
                <input
                  type="text"
                  id="telegram"
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 hover:border-zinc-600"
                  placeholder="@username"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-red-900/30 hover:shadow-red-900/50"
              >
                {isSubmitting ? 'Processing...' : 'Get the Lesson ($10)'}
              </button>
              
              <div className="text-center mt-4 space-y-2">
                <p className="text-sm text-gray-400">
                  📧 We'll contact you within 24 hours
                </p>
              </div>
            </motion.form>
          )}
        </div>
      </section>

       {/* FAQ Section */}
       <section className="relative py-24 px-4 bg-zinc-900/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/5 blur-[100px] rounded-full -z-10" />
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-red-500">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-900/50"
            >
              <h3 className="text-xl font-bold text-white mb-3">Is this method legal and safe?</h3>
              <p className="text-gray-400">
                Absolutely. Unlike cloaking, this method works within Facebook's terms of service. You're not hiding anything—you're using native platform features the right way.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-black rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-900/50"
            >
              <h3 className="text-xl font-bold text-white mb-3">Do I need technical skills?</h3>
              <p className="text-gray-400">
                No. If you can create a Facebook ad, you can use this method. It's all done inside your ads manager—no coding, no third-party tools.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-black rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-900/50"
            >
              <h3 className="text-xl font-bold text-white mb-3">Will this work for my niche?</h3>
              <p className="text-gray-400">
                Yes. This method works for any niche—crypto, gambling, nutra, dating, finance, and more. It's niche-agnostic because it targets how the algorithm reviews ads, not what you're selling.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-black rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-900/50"
            >
              <h3 className="text-xl font-bold text-white mb-3">How long does it take to see results?</h3>
              <p className="text-gray-400">
                Immediately. Once you implement the method (takes about 10 minutes), your next ad submission will benefit from it. Most users see approved ads within the same day.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-black rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-900/50"
            >
              <h3 className="text-xl font-bold text-white mb-3">What if I want to learn more?</h3>
              <p className="text-gray-400">
                This lesson is just the beginning. You can get full access to our course platform with 70+ lessons covering everything from ad account setup to scaling. In addition, you can get direct access to our team for personalized mentoring and support whenever you need it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
