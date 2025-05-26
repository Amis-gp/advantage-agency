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

export default function AdminFormLogs() {
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
    { value: '', label: 'Всі типи' },
    { value: 'contact', label: 'Контактна форма' },
    { value: 'qualification', label: 'Форма кваліфікації' },
    { value: 'affiliate', label: 'Форма партнерства 1' },
    { value: 'affiliate2', label: 'Форма партнерства 2' },
    { value: 'formspree', label: 'Formspree' }
  ];
  
  // Статуси для фільтрації
  const statuses = [
    { value: '', label: 'Всі статуси' },
    { value: 'pending', label: 'В очікуванні' },
    { value: 'sent', label: 'Відправлено' },
    { value: 'failed', label: 'Помилка' }
  ];
  
  // Функція для аутентифікації
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await fetchData();
      setIsAuthenticated(true);
    } catch (error) {
      setError('Помилка аутентифікації. Перевірте логін та пароль.');
    }
  };
  
  // Функція для застосування фільтрів
  const applyFilters = (e: FormEvent) => {
    e.preventDefault();
    fetchData();
  };
  
  // Функція для зміни сторінки
  const changePage = (newPage: number) => {
    setFilters({ ...filters, page: newPage });
    fetchData({ ...filters, page: newPage });
  };
  
  // Функція для форматування дати
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('uk-UA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };
  
  // Функція для отримання даних з API
  const fetchData = async (customFilters?: FilterParams) => {
    setIsLoading(true);
    setError(null);
    
    const currentFilters = customFilters || filters;
    
    // Формуємо параметри запиту
    const queryParams = new URLSearchParams();
    if (currentFilters.formType) queryParams.append('formType', currentFilters.formType);
    if (currentFilters.status) queryParams.append('status', currentFilters.status);
    if (currentFilters.startDate) queryParams.append('startDate', currentFilters.startDate);
    if (currentFilters.endDate) queryParams.append('endDate', currentFilters.endDate);
    if (currentFilters.page) queryParams.append('page', currentFilters.page.toString());
    if (currentFilters.limit) queryParams.append('limit', currentFilters.limit.toString());
    
    try {
      const response = await fetch(`/api/form-logs?${queryParams.toString()}`, {
        headers: {
          'Authorization': `Basic ${btoa(`${username}:${password}`)}`
        }
      });
      
      if (response.status === 401) {
        setIsAuthenticated(false);
        throw new Error('Необхідна аутентифікація');
      }
      
      if (!response.ok) {
        throw new Error('Помилка при отриманні даних');
      }
      
      const data = await response.json();
      if (data.success) {
        setSubmissions(data.data.formSubmissions);
        setPagination(data.data.pagination);
      } else {
        throw new Error(data.message || 'Помилка при отриманні даних');
      }
    } catch (error: any) {
      setError(error.message || 'Помилка при отриманні даних');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Відображення детальної інформації про запис
  const renderDataDetails = (data: any) => {
    return (
      <div className="bg-gray-100 p-4 rounded-lg text-sm">
        {Object.entries(data).map(([key, value]: [string, any]) => (
          <div key={key} className="mb-1">
            <span className="font-semibold">{key}: </span>
            <span>{typeof value === 'object' ? JSON.stringify(value) : String(value)}</span>
          </div>
        ))}
      </div>
    );
  };
  
  // Відображення сторінки аутентифікації
  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Адмін-панель</h1>
            <p className="mt-2 text-gray-600">Введіть логін та пароль для доступу</p>
          </div>
          
          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
              <p>{error}</p>
            </div>
          )}
          
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">Логін</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Логін"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Пароль</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Увійти
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  // Відображення головної сторінки адмін-панелі
  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Логи форм</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
            Повернутися на сайт
          </Link>
        </div>
        
        {/* Фільтри */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-lg font-medium mb-4">Фільтри</h2>
          <form onSubmit={applyFilters} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="formType" className="block text-sm font-medium text-gray-700 mb-1">Тип форми</label>
              <select
                id="formType"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={filters.formType}
                onChange={(e) => setFilters({ ...filters, formType: e.target.value })}
              >
                {formTypes.map((type) => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Статус</label>
              <select
                id="status"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
              >
                {statuses.map((status) => (
                  <option key={status.value} value={status.value}>{status.label}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">Дата початку</label>
              <input
                type="date"
                id="startDate"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={filters.startDate}
                onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
              />
            </div>
            
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">Дата кінця</label>
              <input
                type="date"
                id="endDate"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={filters.endDate}
                onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
              />
            </div>
            
            <div className="md:col-span-2 lg:col-span-4 flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={isLoading}
              >
                {isLoading ? 'Завантаження...' : 'Застосувати фільтри'}
              </button>
            </div>
          </form>
        </div>
        
        {/* Повідомлення про помилку */}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
            <p>{error}</p>
          </div>
        )}
        
        {/* Таблиця з даними */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center">
              <p className="text-gray-500">Завантаження даних...</p>
            </div>
          ) : submissions.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-500">Записів не знайдено</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Тип форми</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Статус</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Дата створення</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Дані</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {submissions.map((submission) => (
                    <tr key={submission._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission._id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formTypes.find(t => t.value === submission.formType)?.label || submission.formType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${submission.status === 'sent' ? 'bg-green-100 text-green-800' : submission.status === 'failed' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {statuses.find(s => s.value === submission.status)?.label || submission.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(submission.createdAt)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {renderDataDetails(submission.data)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {/* Пагінація */}
          {pagination.pages > 1 && (
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Показано <span className="font-medium">{(pagination.page - 1) * pagination.limit + 1}</span> по <span className="font-medium">{Math.min(pagination.page * pagination.limit, pagination.total)}</span> з <span className="font-medium">{pagination.total}</span> результатів
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <button
                      onClick={() => changePage(pagination.page - 1)}
                      disabled={pagination.page === 1}
                      className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${pagination.page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <span className="sr-only">Попередня</span>
                      &larr;
                    </button>
                    
                    {[...Array(pagination.pages)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => changePage(i + 1)}
                        className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${pagination.page === i + 1 ? 'bg-blue-50 text-blue-600 z-10' : 'text-gray-500 hover:bg-gray-50'}`}
                      >
                        {i + 1}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => changePage(pagination.page + 1)}
                      disabled={pagination.page === pagination.pages}
                      className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${pagination.page === pagination.pages ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <span className="sr-only">Наступна</span>
                      &rarr;
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}