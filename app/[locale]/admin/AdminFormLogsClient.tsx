'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface FormSubmission {
  _id: string;
  formType: 'contact' | 'qualification' | 'affiliate' | 'affiliate2' | 'formspree';
  data: any;
  status: 'pending' | 'sent' | 'failed';
  createdAt: string;
}

interface Pagination {
  total: number;
  page: number;
  limit: number;
  pages: number;
}

interface FilterParams {
  formType?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
}

export default function AdminFormLogsClient() {
  const t = useTranslations('Admin');
  
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [pagination, setPagination] = useState<Pagination>({ total: 0, page: 1, limit: 10, pages: 0 });
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [filters, setFilters] = useState<FilterParams>({
    formType: '',
    status: '',
    startDate: '',
    endDate: '',
    page: 1,
    limit: 10
  });
  
  // Типи форм для фільтрації
  const formTypes = [
    { value: '', label: t('allForms') },
    { value: 'contact', label: t('contactForm') },
    { value: 'qualification', label: t('qualificationForm') },
    { value: 'affiliate', label: t('affiliateForm') },
    { value: 'affiliate2', label: t('affiliateForm2') },
    { value: 'formspree', label: t('formspreeForm') }
  ];
  
  // Статуси для фільтрації
  const statuses = [
    { value: '', label: t('allStatuses') },
    { value: 'pending', label: t('pending') },
    { value: 'sent', label: t('sent') },
    { value: 'failed', label: t('failed') }
  ];
  
  // Авторизація
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    
    if (username === process.env.NEXT_PUBLIC_ADMIN_USERNAME && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError(null);
    } else {
      setError(t('invalidCredentials'));
    }
  };
  
  // Застосування фільтрів
  const applyFilters = (e: FormEvent) => {
    e.preventDefault();
    
    // Скидання сторінки на першу при зміні фільтрів
    setFilters({
      ...filters,
      page: 1
    });
    
    fetchSubmissions();
  };
  
  // Зміна сторінки
  const changePage = (newPage: number) => {
    setFilters({
      ...filters,
      page: newPage
    });
  };
  
  // Отримання даних з сервера
  const fetchSubmissions = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Створення рядка запиту з фільтрами
      const queryParams = new URLSearchParams();
      if (filters.formType) queryParams.append('formType', filters.formType);
      if (filters.status) queryParams.append('status', filters.status);
      if (filters.startDate) queryParams.append('startDate', filters.startDate);
      if (filters.endDate) queryParams.append('endDate', filters.endDate);
      queryParams.append('page', filters.page?.toString() || '1');
      queryParams.append('limit', filters.limit?.toString() || '10');
      
      // Запит до API
      const response = await fetch(`/api/forms?${queryParams.toString()}`, {
        headers: {
          'Authorization': `Basic ${btoa(`${username}:${password}`)}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setIsAuthenticated(true);
        
        // Оновлення даних у стані
        setSubmissions(data.submissions);
        setPagination({
          total: data.total,
          page: data.page,
          limit: data.limit,
          pages: data.pages
        });
      } else {
        setError(`${t('fetchError')}: ${response.status}`);
      }
    } catch (err) {
      setError(`${t('fetchError')}: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Завантаження даних при монтуванні компонента або зміні фільтрів
  useEffect(() => {
    if (isAuthenticated) {
      fetchSubmissions();
    }
  }, [filters.page, isAuthenticated]);
  
  // Форма авторизації
  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">{t('adminLogin')}</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">{t('username')}</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">{t('password')}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
          >
            {t('login')}
          </button>
        </form>
      </div>
    );
  }
  
  // Основний інтерфейс адміністратора
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{t('formSubmissions')}</h1>
        <Link href="/"
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        >
          {t('backToSite')}
        </Link>
      </div>
      
      {/* Фільтри */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">{t('filters')}</h2>
        
        <form onSubmit={applyFilters} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Тип форми */}
          <div>
            <label className="block text-gray-700 mb-2">{t('formType')}</label>
            <select
              value={filters.formType}
              onChange={(e) => setFilters({...filters, formType: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              {formTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>
          
          {/* Статус */}
          <div>
            <label className="block text-gray-700 mb-2">{t('status')}</label>
            <select
              value={filters.status}
              onChange={(e) => setFilters({...filters, status: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              {statuses.map(status => (
                <option key={status.value} value={status.value}>{status.label}</option>
              ))}
            </select>
          </div>
          
          {/* Дата початку */}
          <div>
            <label className="block text-gray-700 mb-2">{t('startDate')}</label>
            <input
              type="date"
              value={filters.startDate}
              onChange={(e) => setFilters({...filters, startDate: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          
          {/* Дата закінчення */}
          <div>
            <label className="block text-gray-700 mb-2">{t('endDate')}</label>
            <input
              type="date"
              value={filters.endDate}
              onChange={(e) => setFilters({...filters, endDate: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <div className="md:col-span-2 lg:col-span-4 flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
            >
              {t('applyFilters')}
            </button>
          </div>
        </form>
      </div>
      
      {/* Повідомлення про помилку */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {/* Таблиця заявок */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {isLoading ? (
          <div className="p-4 text-center">{t('loading')}</div>
        ) : submissions.length === 0 ? (
          <div className="p-4 text-center">{t('noSubmissions')}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">{t('date')}</th>
                  <th className="px-4 py-2 text-left">{t('formType')}</th>
                  <th className="px-4 py-2 text-left">{t('status')}</th>
                  <th className="px-4 py-2 text-left">{t('data')}</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission) => (
                  <tr key={submission._id} className="border-t">
                    <td className="px-4 py-2">
                      {new Date(submission.createdAt).toLocaleString()}
                    </td>
                    <td className="px-4 py-2">
                      {formTypes.find(t => t.value === submission.formType)?.label || submission.formType}
                    </td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded text-xs ${
                        submission.status === 'sent' ? 'bg-green-100 text-green-800' :
                        submission.status === 'failed' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {statuses.find(s => s.value === submission.status)?.label || submission.status}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <pre className="whitespace-pre-wrap text-xs">
                        {JSON.stringify(submission.data, null, 2)}
                      </pre>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {/* Пагінація */}
        {pagination.pages > 1 && (
          <div className="px-4 py-3 flex items-center justify-between border-t">
            <div>
              <p className="text-sm text-gray-700">
                {t('showing')} <span className="font-medium">{(pagination.page - 1) * pagination.limit + 1}</span> {t('to')} <span className="font-medium">
                  {Math.min(pagination.page * pagination.limit, pagination.total)}
                </span> {t('of')} <span className="font-medium">{pagination.total}</span> {t('results')}
              </p>
            </div>
            
            <div className="flex space-x-2">
              {/* Кнопка "Назад" */}
              <button
                onClick={() => changePage(pagination.page - 1)}
                disabled={pagination.page === 1}
                className={`px-3 py-1 rounded ${
                  pagination.page === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {t('previous')}
              </button>
              
              {/* Номери сторінок */}
              {Array.from({ length: pagination.pages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => changePage(page)}
                  className={`px-3 py-1 rounded ${
                    pagination.page === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              {/* Кнопка "Вперед" */}
              <button
                onClick={() => changePage(pagination.page + 1)}
                disabled={pagination.page === pagination.pages}
                className={`px-3 py-1 rounded ${
                  pagination.page === pagination.pages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {t('next')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
