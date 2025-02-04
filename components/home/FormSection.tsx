'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface FormData {
    name: string;
    email: string;
    phone: string;
    purpose: string;
}

const FormSection = () => {
    const t = useTranslations('contact');
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        purpose: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            const message = `<b>Нова заявка з сайту advantage-agency.co!</b>

<b>Ім'я:</b> ${formData.name}
<b>Email:</b> ${formData.email}
<b>Телефон:</b> ${formData.phone}
<b>Опис проєкту:</b> ${formData.purpose || 'Не вказано'}

<b>Дата:</b> ${new Date().toLocaleString('uk-UA')}`;

            await sendToTelegram(message);
            router.push('/thank-you');
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-0 md:py-16 relative" id="form">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 relative md:px-16 overflow-hidden p-6">
                    <div className="lg:w-1/2 relative md:mt-20">
                        <span className="text-red-500 uppercase tracking-wider">{t('headline')}</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 leading-tight">{t('title')}</h2>
                    </div>

                    <motion.form 
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 space-y-6 relative z-30"
                    >
                        <div className="absolute -top-10 left-28 md:top-10 md:-left-[40%] md:right-0 -z-10">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 0L18 12L30 15L18 18L15 30L12 18L0 15L12 12L15 0Z" fill="rgba(255,255,255,0.1)"/>
                            </svg>
                        </div>
                        <div className="absolute -bottom-10 right-10 md:bottom-10 md:-left-[30%] md:right-0">
                            <svg width="50" height="50" viewBox="0 0 30 30" fill="none">
                                <path d="M15 0L18 12L30 15L18 18L15 30L12 18L0 15L12 12L15 0Z" fill="rgba(255,255,255,0.1)"/>
                            </svg>
                        </div>

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
                            <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder={t('form.phone')}
                                pattern="[0-9+\s\-\(\)]*"
                                required
                                className="w-full bg-transparent border border-white/40 rounded-xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
                            />
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

                    {/* Decorative */}
                    <div className="absolute -rotate-12 sm:rotate-0 -top-20 -right-52 sm:-top-80 sm:-right-80 w-[426px] h-[426px] sm:w-[726px] sm:h-[726px] opacity-40">
                        <Image src="/img/home/lines.svg" alt="Decorative lines" width={726} height={726} loading="lazy" priority={false} />
                    </div>
                    <div className="absolute -rotate-12 sm:rotate-0 -bottom-20 -left-52 sm:-bottom-[31rem] sm:-left-80 w-[426px] h-[426px] sm:w-[726px] sm:h-[726px] opacity-40">
                        <Image src="/img/home/lines.svg" alt="Decorative lines" width={726} height={726} loading="lazy" priority={false} />
                    </div>
                    <div className="absolute -bottom-10 -right-56 sm:-right-10 opacity-40 animate-float">
                        <Image src="/img/home/gradient-ball-1.svg" alt="Decorative lines" width={426} height={426} loading="lazy" priority={false} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormSection;