'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface FormData {
    name: string;
    email: string;
    phone: string;
    contactMethod: string;
    purpose: string;
}

const contactOptions = [
    'Telegram',
    'WhatsApp',
    'Phone call',
    'Email',
    'Viber'
];

export default function V22Form() {
    const t = useTranslations('contact');
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        contactMethod: contactOptions[0],
        purpose: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [phoneValue, setPhoneValue] = useState<string>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
            const message = `<b>New request from Slovakia Case Study (v22)!</b>

<b>Name:</b> ${formData.name}
<b>Email:</b> ${formData.email}
<b>Phone:</b> ${formData.phone}
<b>Preferred contact:</b> ${formData.contactMethod}
<b>Project Description:</b> ${formData.purpose || 'Not specified'}

<b>Date:</b> ${new Date().toLocaleString('en-US')}`;

            await sendToTelegram(message);
            
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
                } catch (backupError) {
                    console.error('Backup send error:', backupError);
                }
            }
            
            router.push('/thank-you');
            setFormData({
                name: '',
                email: '',
                phone: '',
                contactMethod: contactOptions[0],
                purpose: ''
            });
            setPhoneValue('');
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 relative" id="form">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 relative">
                    <div className="lg:w-1/2 relative">
                        <span className="text-red-500 uppercase tracking-wider text-sm">{t('headline')}</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 leading-tight">{t('title')}</h2>
                    </div>

                    <motion.form 
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 space-y-6"
                    >
                        <div>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={t('form.name')}
                                required
                                className="w-full bg-transparent border border-white/40 rounded-xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
                            />
                        </div>
                        <div>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={t('form.email')}
                                required
                                className="w-full bg-transparent border border-white/40 rounded-xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
                            />
                        </div>
                        <div>
                            <PhoneInput
                                international
                                
                                value={phoneValue}
                                onChange={(value) => {
                                    setPhoneValue(value);
                                    setFormData(prev => ({
                                        ...prev,
                                        phone: value || ''
                                    }));
                                }}
                                placeholder={t('form.phone')}
                                className="pl-6 w-full border border-white/40 rounded-xl focus-within:border-white/60"
                                inputclassname="bg-transparent px-6 py-4 w-full text-white placeholder-white/60 focus:outline-none h-[56px]"
                                countryselectclassname="bg-black text-white px-4 py-4 border-r border-white/40 h-[56px]"
                                buttonclassname="!bg-transparent !border-0"
                                required
                            />
                            <style jsx global>{`
                                .PhoneInput {
                                    height: 56px;
                                    display: flex;
                                    align-items: center;
                                }
                                .PhoneInputCountrySelect {
                                    background-color: transparent !important;
                                    color: white !important;
                                    height: 56px;
                                }
                                .PhoneInputCountrySelect option {
                                    background-color: black;
                                    color: white;
                                }
                                .PhoneInputCountrySelectArrow {
                                    color: white !important;
                                    opacity: 0.6;
                                }
                                .PhoneInputInput {
                                    height: 56px !important;
                                    background-color: transparent !important;
                                }
                                .PhoneInputCountry {
                                    background-color: transparent !important;
                                }
                            `}</style>
                        </div>
                        <div>
                            <label className="block text-white/80 text-sm font-medium mb-2">
                                {t('form.contactMethod')}
                            </label>
                            <select
                                name="contactMethod"
                                value={formData.contactMethod}
                                onChange={handleChange}
                                className="w-full bg-transparent border border-white/40 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-white/60 transition-colors"
                                required
                            >
                                {contactOptions.map((option) => (
                                    <option key={option} value={option} className="text-black">
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <textarea 
                                name="purpose"
                                value={formData.purpose}
                                onChange={handleChange}
                                placeholder={t('form.purpose')}
                                rows={4}
                                className="w-full bg-transparent border border-white/40 rounded-xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors resize-none"
                            />
                        </div>
                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full bg-white text-black font-medium py-4 rounded-xl transition-all duration-300 ${
                                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-white/90'
                            }`}
                        >
                            {isSubmitting ? 'Sending...' : t('form.submit')}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

