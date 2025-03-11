'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

// Динамічний імпорт для різних професій
const QualificationForm = () => {
  const pathname = usePathname()
  // Отримуємо profession з URL шляху
  const pathSegments = pathname.split('/')
  const profession = pathSegments[pathSegments.length - 1]
  
  const t = useTranslations('join-the-team.qualification')
  
  // Динамічно імпортуємо питання для вибраної професії
  const [questionsModule, setQuestionsModule] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [showContactForm, setShowContactForm] = useState(false)
  const [showRejectionMessage, setShowRejectionMessage] = useState(false)
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [allQuestions, setAllQuestions] = useState<any[]>([])
  const [isFirstAnswer, setIsFirstAnswer] = useState(true)
  const [totalSteps, setTotalSteps] = useState(0)
  const [currentProgress, setCurrentProgress] = useState(1)
  
  // Спочатку оголошуємо formState
  const [formState, setFormState] = useState<any>({
    answers: {},
    currentStep: 0,
    history: []
  })
  const [questions, setQuestions] = useState<any[]>([])

  // Додаємо функцію updateFiles тут, перед іншими хуками
  const updateFiles = (questionId: string, value: any) => {
    setFormState((prev: any) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: value
      }
    }));
  };
  
  // Потім використовуємо formState в useEffect
  useEffect(() => {
    setCurrentProgress(formState.currentStep + 1)
  }, [formState.currentStep])
  
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setLoading(true)
        let module
        
        // Вибираємо правильний модуль питань залежно від професії
        switch(profession) {
          case 'cold-email':
            module = await import('@/app/constant/qualificationQuestions/coldEmail')
            break
          case 'lead-gen':
            module = await import('@/app/constant/qualificationQuestions/leadGen')
            break
          case 'media-buyer':
            module = await import('@/app/constant/qualificationQuestions/mediaBuyer')
            break
          default:
            module = await import('@/app/constant/qualificationQuestions/coldEmail')
        }
        
        setQuestionsModule(module)
        
        // Завантажуємо всі питання одразу
        const initialQuestions = module.getCandidateQuestions('all')
        setAllQuestions(initialQuestions)
        setQuestions(initialQuestions)
        setTotalSteps(initialQuestions.length)
      } catch (error) {
        console.error('Помилка завантаження питань:', error)
      } finally {
        setLoading(false)
      }
    }
    
    loadQuestions()
  }, [profession])

  // Додайте цей хук після інших useEffect, але перед визначенням функцій
  useEffect(() => {
    // Отримуємо поточне питання з questions та currentStep
    const currentQuestion = questions[formState.currentStep];
    
    // Перевіряємо, чи це питання типу 'file'
    if (!currentQuestion || currentQuestion.type !== 'file') return;
    
    // Знаходимо елемент drop zone для поточного питання
    const input = document.getElementById(`file-input-${currentQuestion.id}`);
    if (!input) return;
    
    const dropArea = input.parentElement;
    if (!dropArea) return;
    
    // Запобігаємо стандартній поведінці drag-and-drop
    const preventDefault = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    };
    
    // Додаємо обробники подій
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      dropArea.addEventListener(eventName, preventDefault);
    });
    
    // Додаємо стилі при перетягуванні файлів
    const handleDragEnter = () => {
      dropArea.classList.add('border-red-500');
      dropArea.classList.add('bg-white/15');
    };
    
    // Видаляємо стилі при виході або відпусканні файлів
    const handleDragLeave = () => {
      dropArea.classList.remove('border-red-500');
      dropArea.classList.remove('bg-white/15');
    };
    
    // Обробляємо скинуті файли
    const handleDrop = (e: any) => {
      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        // Додаємо нові файли до існуючих
        const existingFiles = Array.isArray(formState.answers[currentQuestion.id]) 
          ? [...formState.answers[currentQuestion.id]] 
          : [];
        const newFiles = Array.from(files);
        updateFiles(currentQuestion.id, [...existingFiles, ...newFiles]);
      }
    };
    
    // Додаємо обробники подій
    ['dragenter', 'dragover'].forEach(eventName => {
      dropArea.addEventListener(eventName, handleDragEnter);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
      dropArea.addEventListener(eventName, handleDragLeave);
    });
    
    dropArea.addEventListener('drop', handleDrop);
    
    // Прибираємо обробники при розмонтуванні
    return () => {
      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.removeEventListener(eventName, preventDefault);
      });
      
      ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.removeEventListener(eventName, handleDragEnter);
      });
      
      ['dragleave', 'drop'].forEach(eventName => {
        dropArea.removeEventListener(eventName, handleDragLeave);
      });
      
      dropArea.removeEventListener('drop', handleDrop);
    };
  }, [questions, formState.currentStep, formState.answers]);

  // Оновлюємо питання при зміні відповідей або після завантаження модуля
  useEffect(() => {
    if (questionsModule && Object.keys(formState.answers).length > 0) {
      // Отримуємо питання на основі досвіду
      const candidateQuestions = questionsModule.getCandidateQuestions(formState.answers.experience)
      
      // Фільтруємо питання на основі умов
      const filteredQuestions = candidateQuestions.filter(question => {
        // Якщо у питання є умова
        if (question.condition) {
          const { dependsOn, value } = question.condition
          const answer = formState.answers[dependsOn]
          
          // Перевіряємо умову для english_level
          if (dependsOn === 'english') {
            return answer === value
          }
          
          // Для інших умов
          if (Array.isArray(value)) {
            return value.includes(answer)
          }
          return answer === value
        }
        return true
      })
      
      // Зберігаємо загальну кількість кроків
      if (filteredQuestions.length > 0 && totalSteps !== filteredQuestions.length) {
        setTotalSteps(filteredQuestions.length)
      }
      
      // Зберігаємо поточний крок
      const currentStep = formState.currentStep
      
      // Оновлюємо питання
      setQuestions(filteredQuestions)
      
      // Перевіряємо, чи це останній крок після фільтрації
      if (currentStep >= filteredQuestions.length && filteredQuestions.length > 0 && !isFirstAnswer) {
        setShowContactForm(true)
      }
      
      // Після першої відповіді скидаємо прапорець
      if (isFirstAnswer) {
        setIsFirstAnswer(false)
      }
    }
  }, [formState.answers, questionsModule, isFirstAnswer, totalSteps])

  // Перевіряємо, чи кандидат підходить (для медіабаєра)
  const checkCandidateEligibility = () => {
    if (profession === 'media-buyer' && formState.answers.experience === 'Менше 1 року') {
      return false
    }
    return true
  }

  const handleAnswer = (questionId: string, answer: any) => {
    setFormState(prev => {
      const newAnswers = { ...prev.answers, [questionId]: answer }
      const newHistory = [...prev.history, prev.currentStep]
      
      // Перевіряємо, чи це перше питання про досвід для медіабаєра
      if (profession === 'media-buyer' && questionId === 'experience' && 
          (answer === 'Менше 1 року' || answer === 'Less than 1 year' || answer === 'Немає досвіду' || answer === 'No experience')) {
        setShowRejectionMessage(true)
        return prev
      }
      
      // Перевіряємо, чи це останнє питання в поточному масиві питань
      const nextStep = prev.currentStep + 1
      
      // Якщо це перша відповідь, завжди переходимо до наступного кроку
      if (isFirstAnswer) {
        return {
          answers: newAnswers,
          currentStep: nextStep,
          history: newHistory
        }
      }
      
      // Перевіряємо, чи є ще питання після поточного
      if (nextStep >= questions.length) {
        // Якщо це останнє питання, показуємо форму контактів
        setShowContactForm(true)
        return {
          ...prev,
          answers: newAnswers,
          history: newHistory
        }
      }
      
      return {
        answers: newAnswers,
        currentStep: nextStep,
        history: newHistory
      }
    })
  }

  const handleBack = () => {
    if (showContactForm) {
      setShowContactForm(false)
      return
    }
    
    setFormState(prev => {
      const newHistory = [...prev.history]
      const lastStep = newHistory.pop()
      return {
        ...prev,
        currentStep: lastStep || 0,
        history: newHistory
      }
    })
  }

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setContactData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmitContact = async () => {
    try {
      setSubmitting(true)
      
      // Відправляємо текстове повідомлення
      const message = `
🔥 <b>Новий кандидат на позицію ${profession}!</b>

<b>👤 Ім'я:</b> ${contactData.name}
<b>📧 Email:</b> ${contactData.email}
<b>📱 Телефон:</b> ${contactData.phone}

<b>📋 Відповіді на питання:</b>
${Object.entries(formState.answers).map(([key, value]) => {
  // Пропускаємо файли у текстовому повідомленні
  if (Array.isArray(value) && value.length > 0 && value[0] instanceof File) return '';
  if (value instanceof File) return '';
  
  const question = allQuestions.find(q => q.id === key)
  const questionText = question?.textKey ? t(question.textKey) : (question?.text || key)
  return `<b>${questionText}:</b> ${value}`
}).filter(Boolean).join('\n')}
      `
      
      // Відправляємо дані в Telegram
      const botToken = process.env.NEXT_PUBLIC_BOT_TOKEN
      const chatId = process.env.NEXT_PUBLIC_CHAT_ID
      
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML'
        })
      })
      
      if (!response.ok) {
        throw new Error('Failed to send message')
      }
      
      // Показуємо успіх після відправки основного повідомлення
      setSubmitSuccess(true)
      
      // Збираємо всі файли з усіх полів
      let allFiles: { key: string, file: File }[] = [];
      
      Object.entries(formState.answers).forEach(([key, value]) => {
        if (Array.isArray(value) && value.length > 0 && value[0] instanceof File) {
          // Якщо значення є масивом файлів
          value.forEach(file => {
            allFiles.push({ key, file });
          });
        } else if (value instanceof File) {
          // Якщо значення є одиночним файлом
          allFiles.push({ key, file: value });
        }
      });
      
      if (allFiles.length > 0) {
        // Додаємо інформацію про файли до основного повідомлення
        const fileInfoMessage = `
<b>📎 Файли від кандидата ${contactData.name}:</b>
${allFiles.map(({ key, file }) => {
  const question = allQuestions.find(q => q.id === key)
  const questionText = question?.textKey ? t(question.textKey) : (question?.text || key)
  return `- ${questionText}: ${file.name} (${Math.round(file.size / 1024)} KB)`
}).join('\n')}

<i>Файли завантажуються і будуть відправлені окремо...</i>
        `
        
        // Відправляємо інформацію про файли
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: fileInfoMessage,
            parse_mode: 'HTML'
          })
        })
        
        // Відправляємо файли асинхронно (не чекаємо завершення)
        setTimeout(() => {
          allFiles.forEach(async ({ key, file }) => {
            try {
              const question = allQuestions.find(q => q.id === key)
              const questionText = question?.textKey ? t(question.textKey) : (question?.text || key)
              
              const formData = new FormData();
              formData.append('chat_id', chatId as string);
              formData.append('caption', `Файл від кандидата ${contactData.name} (${profession}) - ${questionText}`);
              formData.append('document', file);
              
              await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
                method: 'POST',
                body: formData
              });
            } catch (error) {
              console.error('Error sending file:', error);
              // Не показуємо помилку користувачу, оскільки основне повідомлення вже відправлено
            }
          });
        }, 100);
      }
    } catch (error) {
      console.error('Error sending data to Telegram:', error)
      alert('Сталася помилка при відправці даних. Спробуйте ще раз.')
      setSubmitting(false)
    }
  }

  const renderQuestion = (question: any) => {
    if (!question) return null

    const questionText = question.textKey ? t(question.textKey) : question.text
    
    // Отримуємо опції з перекладів
    let questionOptions = [];

    // Використовуємо значення за замовчуванням залежно від мови
    const isUkrainian = pathname.includes('/uk/');

    switch (question.id) {
      case 'experience':
        questionOptions = isUkrainian 
          ? ['Менше 1 року', '1-2 роки', '2-5 років', 'Більше 5 років'] 
          : ['Less than 1 year', '1-2 years', '2-5 years', 'More than 5 years'];
        break;
      case 'sources':
        questionOptions = isUkrainian 
          ? ['LinkedIn', 'Instagram', 'Telegram', 'Інше'] 
          : ['LinkedIn', 'Instagram', 'Telegram', 'Other'];
        break;
      case 'tools':
        questionOptions = isUkrainian 
          ? ['Hunter.io', 'Apollo.io', 'LinkedIn Sales Navigator', 'Phantombuster', 'Dux-Soup', 'Інше'] 
          : ['Hunter.io', 'Apollo.io', 'LinkedIn Sales Navigator', 'Phantombuster', 'Dux-Soup', 'Other'];
        break;
      case 'english_level':
        questionOptions = isUkrainian 
          ? ['Початковий', 'Середній', 'Високий'] 
          : ['Beginner', 'Intermediate', 'Advanced'];
        break;
      case 'age':
        questionOptions = ['18-25', '26-35', '36-45', '45+'];
        break;
      case 'platforms':
        questionOptions = isUkrainian 
          ? ['Facebook', 'TikTok', 'Google Ads', 'Інше'] 
          : ['Facebook', 'TikTok', 'Google Ads', 'Other'];
        break;
      case 'niches':
        questionOptions = isUkrainian 
          ? ['Gambling/Betting', 'Nutra', 'Dating', 'Інше'] 
          : ['Gambling/Betting', 'Nutra', 'Dating', 'Other'];
        break;
      default:
        // Для інших питань використовуємо опції з об'єкта, якщо вони є
        if (question.options) {
          questionOptions = question.options;
        }
    }
    
    const questionHint = question.hintKey ? t(question.hintKey) : question.hint

    switch (question.type) {
      case 'open':
        return (
          <div className="space-y-4">
            <textarea
              className="w-full p-4 bg-black/30 border border-white/10 rounded-xl text-white/80 focus:border-red-500/50 focus:outline-none"
              rows={5}
              placeholder={questionHint}
              onChange={(e) => {}}
            />
            <button
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 rounded-xl text-white font-medium shadow-lg"
              onClick={() => handleAnswer(question.id, document.querySelector('textarea')?.value || '')}
            >
              {t('common.buttons.next')}
            </button>
          </div>
        )
      case 'yesno':
        return (
          <div className="flex gap-4">
            {[
              { key: 'yes', value: true },
              { key: 'no', value: false }
            ].map((option) => (
              <button
                key={option.key}
                onClick={() => handleAnswer(question.id, option.value)}
                className="flex-1 p-4 bg-black/30 hover:bg-black/50 border border-white/10 hover:border-red-500/50 rounded-xl text-white/80 hover:text-white transition-all duration-300"
              >
                {t(`common.options.${option.key}`)}
              </button>
            ))}
          </div>
        )
      case 'choice':
        return (
          <div className="space-y-3">
            {Array.isArray(questionOptions) && questionOptions.length > 0 ? (
              questionOptions.map((option: string) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(question.id, option)}
                  className="w-full p-4 bg-black/30 hover:bg-black/50 border border-white/10 hover:border-red-500/50 rounded-xl text-white/80 hover:text-white transition-all duration-300 text-left"
                >
                  {option}
                </button>
              ))
            ) : (
              <p className="text-red-500">{t('common.options.noOptions')}</p>
            )}
          </div>
        )
      case 'scale':
        return (
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => handleAnswer(question.id, value)}
                className="flex-1 p-4 bg-black/30 hover:bg-black/50 border border-white/10 hover:border-red-500/50 rounded-xl text-white/80 hover:text-white transition-all duration-300"
              >
                {value}
              </button>
            ))}
          </div>
        )
      case 'multiple':
        return (
          <div className="space-y-6">
            <div className="space-y-3">
              {Array.isArray(questionOptions) && questionOptions.map((option: string) => (
                <div key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    id={option}
                    className="mr-3 h-5 w-5 accent-red-500"
                    onChange={(e) => {
                      const currentSelection = formState.answers[question.id] || [];
                      let newSelection;
                      if (e.target.checked) {
                        newSelection = [...currentSelection, option];
                      } else {
                        newSelection = currentSelection.filter((item: string) => item !== option);
                      }
                      setFormState(prev => ({
                        ...prev,
                        answers: {
                          ...prev.answers,
                          [question.id]: newSelection
                        }
                      }));
                    }}
                  />
                  <label htmlFor={option} className="text-white/80">
                    {option}
                  </label>
                </div>
              ))}
            </div>
            <button
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 rounded-xl text-white font-medium shadow-lg"
              onClick={() => {
                const selectedOptions = formState.answers[question.id] || [];
                handleAnswer(question.id, selectedOptions);
              }}
            >
              {t('common.buttons.next')}
            </button>
          </div>
        )
      case 'file':
        return (
          <div>
            {questionHint && <p className="text-white/60 mb-4">{questionHint}</p>}
            <div className="mt-4">
              {/* Основна кнопка завантаження */}
              <div 
                className="w-full px-6 py-8 bg-white/5 border-2 border-dashed border-white/20 rounded-xl cursor-pointer hover:bg-white/10 transition-colors flex flex-col items-center justify-center"
                onClick={() => document.getElementById(`file-input-${question.id}`)?.click()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white/60 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span className="text-white text-lg font-medium">
                  {t('common.buttons.upload')}
                </span>
                <p className="text-white/50 mt-2 text-center">
                  {formState.answers[question.id] && Array.isArray(formState.answers[question.id]) && formState.answers[question.id].length > 0
                    ? `${formState.answers[question.id].length} ${t('common.buttons.files_selected')}`
                    : t('common.buttons.drag_drop')}
                </p>
                <input 
                  id={`file-input-${question.id}`}
                  type="file" 
                  className="hidden" 
                  accept={question.acceptTypes || '*/*'}
                  multiple
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files && files.length > 0) {
                      // Додаємо нові файли до існуючих
                      const existingFiles = Array.isArray(formState.answers[question.id]) 
                        ? [...formState.answers[question.id]] 
                        : [];
                      const newFiles = Array.from(files);
                      updateFiles(question.id, [...existingFiles, ...newFiles]);
                    }
                  }} 
                />
              </div>
              
              {/* Список вибраних файлів */}
              {formState.answers[question.id] && Array.isArray(formState.answers[question.id]) && formState.answers[question.id].length > 0 && (
                <div className="mt-4 bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="text-white font-medium mb-3">{t('common.buttons.selected_files')}:</h4>
                  <div className="max-h-48 overflow-y-auto space-y-2">
                    {formState.answers[question.id].map((file: File, index: number) => (
                      <div key={index} className="flex items-center justify-between bg-white/5 p-2 rounded">
                        <div className="flex items-center overflow-hidden mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/60 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span className="text-white truncate">{file.name}</span>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            const newFiles = [...formState.answers[question.id]];
                            newFiles.splice(index, 1);
                            updateFiles(question.id, newFiles.length > 0 ? newFiles : null);
                          }}
                          className="text-red-400 hover:text-red-300 bg-white/10 p-1 rounded-full flex-shrink-0"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-6 flex justify-between">
              <button
                onClick={() => {
                  // Очистити всі файли
                  if (formState.answers[question.id] && Array.isArray(formState.answers[question.id]) && formState.answers[question.id].length > 0) {
                    updateFiles(question.id, null);
                  }
                }}
                className={`px-4 py-2 rounded-xl text-white/60 hover:text-white transition-colors ${!formState.answers[question.id] || !Array.isArray(formState.answers[question.id]) || formState.answers[question.id].length === 0 ? 'invisible' : ''}`}
              >
                {t('common.buttons.clear_all')}
              </button>
              
              <button
                onClick={() => handleAnswer(question.id, formState.answers[question.id] || null)}
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 rounded-xl text-white font-medium shadow-lg"
              >
                {t('common.buttons.next')}
              </button>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  const renderContactForm = () => {
    if (submitSuccess) {
      return (
        <div className="text-center">
          <div className="mb-6 mx-auto w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">{t('common.contact-form.success.title')}</h3>
          <p className="text-white/80 mb-6">{t('common.contact-form.success.message')}</p>
        </div>
      )
    }

    return (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white mb-6">{t('common.contact-form.title')}</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white/80 mb-2">{t('common.contact-form.firstName')}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactData.name}
              onChange={handleContactChange}
              className="w-full p-4 bg-black/30 border border-white/10 rounded-xl text-white/80 focus:border-red-500/50 focus:outline-none"
              placeholder={t('common.contact-form.name-placeholder')}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white/80 mb-2">{t('common.contact-form.email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactData.email}
              onChange={handleContactChange}
              className="w-full p-4 bg-black/30 border border-white/10 rounded-xl text-white/80 focus:border-red-500/50 focus:outline-none"
              placeholder={t('common.contact-form.email-placeholder')}
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-white/80 mb-2">{t('common.contact-form.phone')}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={contactData.phone}
              onChange={handleContactChange}
              className="w-full p-4 bg-black/30 border border-white/10 rounded-xl text-white/80 focus:border-red-500/50 focus:outline-none"
              placeholder={t('common.contact-form.phone-placeholder')}
              required
            />
          </div>
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleBack}
            className="px-4 py-2 text-white/60 hover:text-white flex items-center gap-2 transition-colors"
          >
            <span>←</span> {t('common.buttons.back')}
          </button>
          <button
            onClick={handleSubmitContact}
            disabled={submitting || !contactData.name || !contactData.email || !contactData.phone}
            className={`px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 rounded-xl text-white font-medium shadow-lg ${
              (submitting || !contactData.name || !contactData.email || !contactData.phone) ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {submitting ? t('common.contact-form.submitting') : t('common.contact-form.submit')}
          </button>
        </div>
      </div>
    )
  }

  const renderRejectionMessage = () => {
    return (
      <div className="text-center">
        <div className="mb-6 mx-auto w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{t('rejection.title')}</h3>
        <p className="text-white/80 mb-6">
          {t('rejection.message')}
        </p>
        <a 
          href="/join-the-team" 
          className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 rounded-xl text-white font-medium shadow-lg inline-block"
        >
          {t('rejection.button')}
        </a>
      </div>
    )
  }

  if (loading) {
    return (
      <section className="bg-gradient-to-b from-black via-black/95 to-black relative py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-700/30 rounded-full w-3/4 mx-auto mb-6"></div>
            <div className="h-40 bg-gray-700/20 rounded-xl mx-auto"></div>
          </div>
        </div>
      </section>
    )
  }

  const currentQuestion = questions[formState.currentStep]

  return (
    <section className="bg-gradient-to-b from-black via-black/95 to-black relative py-20 md:py-32">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,0,0,0.15)_0,rgba(0,0,0,0)_50%)] opacity-70"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0)_0,rgba(120,0,0,0.1)_50%,rgba(0,0,0,0)_100%)] opacity-70"></div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={showContactForm ? 'contact' : (showRejectionMessage ? 'rejection' : formState.currentStep)}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="max-w-3xl mx-auto px-6 relative z-10"
        >
          {!showContactForm && !showRejectionMessage && formState.currentStep > 0 && (
            <button
              onClick={handleBack}
              className="mb-6 px-4 py-2 text-white/60 hover:text-white flex items-center gap-2 transition-colors"
            >
              <span>←</span> {t('common.buttons.back')}
            </button>
          )}
          
          {!showContactForm && !showRejectionMessage && (
            <div className="mb-12">
              <div className="h-2 bg-gray-900 rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-red-500 to-red-700 rounded-full transition-all duration-500"
                  style={{
                    width: formState.currentStep === 0 ? '5%' : `${(currentProgress / totalSteps) * 100}%`
                  }}
                />
              </div>
            </div>
          )}
          
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10 shadow-xl">
            {showContactForm ? (
              renderContactForm()
            ) : showRejectionMessage ? (
              renderRejectionMessage()
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-6">
                  {currentQuestion?.textKey ? t(currentQuestion.textKey) : currentQuestion?.text}
                </h3>
                {renderQuestion(currentQuestion)}
              </>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default QualificationForm
