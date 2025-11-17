'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  contactMethod: string;
  quizAnswers: string[];
}

const contactOptions = [
  'Telegram',
  'WhatsApp',
  
  'Viber'
];

const questions = [
  {
    question: "Do you have any prior experience in affiliate marketing?",
    options: [
      "No experience",
      "Limited experience, seeking guidance",
      "Some experience with moderate success",
      "Experienced, looking to scale earnings"
    ]
  },
  {
    question: "What is your primary goal with affiliate marketing?",
    options: [
      "Earning extra income, while keeping my job",
      "Replacing my current job income",
      "Creating a source of a passive income",
      "Building a full-time online business"
    ]
  },
  {
    question: "How much time can you dedicate to your affiliate marketing business each day?",
    options: [
      "Less than 2 hours",
      "2-4 hours",
      "4-6 hours",
      "More than 8 hours"
    ]
  },
  {
    question: "What is your targeted earnings per month from affiliate marketing within the next 3 months?",
    options: [
      "$0 - $1000",
      "$1000 - $4,000",
      "$4,000 - $7,000",
      "Over $10,000"
    ]
  },
  {
    question: "How much are you able to invest monthly in ads to promote exclusive offers?",
    options: [
      "Nothing at the moment",
      "Up to $500",
      "$1000 - $2000",
      "More than $5000"
    ]
  }
];

export default function FormPage() {
  const searchParams = useSearchParams();
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [selectedPage, setSelectedPage] = useState<string>('');
  
  useEffect(() => {
    const packageParam = searchParams.get('package');
    const pageParam = searchParams.get('page');
    if (packageParam) {
      setSelectedPackage(decodeURIComponent(packageParam));
    }
    if (pageParam) {
      setSelectedPage(decodeURIComponent(pageParam));
    }
  }, [searchParams]);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    contactMethod: contactOptions[0],
    quizAnswers: new Array(5).fill(''),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneValue, setPhoneValue] = useState<string | undefined>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleQuizAnswer = (questionIndex: number, answer: string) => {
    const newAnswers = [...formData.quizAnswers];
    newAnswers[questionIndex] = answer;
    setFormData({
      ...formData,
      quizAnswers: newAnswers
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.phone) {
      alert('Please enter your phone number.');
      return;
    }

    setIsSubmitting(true);

    const BOT_TOKEN = process.env.NEXT_PUBLIC_BOT_TOKEN;
    const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const message = `
    New Lead black-affiliate-marketing:
          
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred contact: ${formData.contactMethod}
${selectedPage ? `Page: ${selectedPage}` : ''}
${selectedPackage ? `Selected Package: ${selectedPackage}` : ''}

Quiz Answers:
${questions.map((q, i) => `
${i + 1}. ${q.question}
Answer: ${formData.quizAnswers[i]}`).join('\n')}
    `;

    try {
      // Відправка в основний чат
      const response = await fetch(url, {
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

      // Відправка в резервний чат для підстраховки
      const CHAT_ID_TEST = process.env.NEXT_PUBLIC_CHAT_ID_TEST;
      if (CHAT_ID_TEST) {
        try {
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

      if (response.ok) {
        alert('Thank you for your submission!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          contactMethod: contactOptions[0],
          quizAnswers: new Array(5).fill(''),
        });
        setPhoneValue('');
      } else {
          // Помилка відправки
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white py-20 relative overflow-hidden font-sans">
      <div
        className="absolute -right-[30%] top-[70%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-red-600/30 blur-[150px]"
        style={{ filter: 'blur(150px)' }}
      />

      <div
        className="absolute -left-[30%] top-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-red-600/30 blur-[150px]"
        style={{ filter: 'blur(150px)' }}
      />

      <div className="container mx-auto px-4 z-10 relative">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Black Affiliate Marketing Quiz
        </h1>
        
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-12 p-6 bg-black/80 backdrop-blur-sm rounded-xl border border-red-600/30">
          {/* Quiz Section */}
          <div className="space-y-12">
            {questions.map((q, questionIndex) => (
              <div key={questionIndex} className="space-y-4">
                <div className="">
                  
                  <h3 className="text-xl font-semibold">
                    <span className="text-red-600/80">{questionIndex + 1}. </span>{q.question}
                  </h3>
                </div>

                <div className="space-y-3 md:ml-12">
                  {q.options.map((option, optionIndex) => (
                    <label 
                      key={optionIndex} 
                      className={`flex items-center space-x-3 p-4 border rounded-lg transition-all duration-300 cursor-pointer ${
                        formData.quizAnswers[questionIndex] === option 
                          ? 'border-red-600/50 bg-red-600/10 ring-1 ring-red-600' 
                          : 'border-white/10 hover:border-red-600/50 hover:bg-red-600/10'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${questionIndex}`}
                        value={option}
                        checked={formData.quizAnswers[questionIndex] === option}
                        onChange={() => handleQuizAnswer(questionIndex, option)}
                        className="form-radio text-red-600 focus:ring-red-600 focus:ring-offset-0 border-white/10"
                        required
                      />
                      <span className="text-lg">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/40"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-black px-4 text-lg text-white/80">Contact Information</span>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 bg-black/20 border border-white/80 placeholder:text-white/90 rounded-lg focus:border-red-600/50 focus:outline-none"
              required
            />
            
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 bg-black/20 border border-white/80 placeholder:text-white/90 rounded-lg focus:border-red-600/50 focus:outline-none"
              required
            />
            
            <div>
              <PhoneInput
                international
                value={phoneValue}
                onChange={(value) => {
                  setPhoneValue(value);
                  setFormData((prev) => ({
                    ...prev,
                    phone: value || '',
                  }));
                }}
                placeholder="Your Phone"
                className="w-full border border-white/80 rounded-lg focus-within:border-red-600/50 pl-2 pr-2"
                inputclassname="bg-black/20 text-white placeholder-white/90 px-4 py-3 w-full focus:outline-none"
                countryselectclassname="bg-black text-white border-r border-white/40 px-3"
                buttonclassname="!bg-transparent !border-0"
                required
              />
              <style jsx global>{`
                .PhoneInput {
                  display: flex;
                  align-items: center;
                  height: 48px;
                  background-color: transparent;
                  padding-left: 4px;
                  padding-right: 4px;
                }
                .PhoneInputCountry {
                  background-color: transparent !important;
                  padding-left: 4px;
                  padding-right: 8px;
                }
                .PhoneInputCountrySelect {
                  background-color: transparent !important;
                  color: white !important;
                  padding-left: 8px;
                  padding-right: 8px;
                }
                .PhoneInputCountrySelect option {
                  background-color: black;
                  color: white;
                }
                .PhoneInputCountrySelectArrow {
                  color: white !important;
                  opacity: 0.6;
                  margin-right: 6px;
                }
                .PhoneInputInput {
                  background-color: transparent !important;
                  color: white !important;
                  height: 48px !important;
                  padding-left: 12px !important;
                }
              `}</style>
            </div>
            <div>
              <select
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleInputChange}
                className="w-full p-3 bg-black/20 border border-white/80 text-white rounded-lg focus:border-red-600/50 focus:outline-none"
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

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 text-white rounded-lg bg-red-700 hover:bg-red-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </main>
  );
}
