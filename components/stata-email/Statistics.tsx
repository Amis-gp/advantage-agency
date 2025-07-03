'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';
import { CAMPAIGNS, CAMPAIGN_CHART_DATA, CAMPAIGN_EMAIL_SUBJECTS } from '@/app/constant/emailStats';
import Link from 'next/link';

interface EmailStats {
  totalRecipients: number;
  contacted: {
    percentage: number;
    count: number;
  };
  replies: {
    percentage: number;
    count: number;
  };
  unsubscribed: {
    percentage: number;
    count: number;
  };
  notReached: {
    percentage: number;
    count: number;
  };
}

interface ChartDataPoint {
  date: string;
  openRate: number;
  replied: number;
  bounced: number;
}

interface StatisticsProps {
  campaignId: string
}

const StataEmail: React.FC<StatisticsProps> = ({ campaignId }) => {
  const campaign = CAMPAIGNS.find(c => c.id === campaignId);
  const stats = campaign?.stats || {
    openRate: { count: 0, percentage: 0 },
    deliverability: { count: 0, percentage: 0 },
    clicks: { count: 0, percentage: 0 },
    replies: { count: 0, percentage: 0 },
    bounces: { count: 0, percentage: 0 },
    contacted: { count: 0, percentage: 0 },
    unsubscribed: { count: 0, percentage: 0 },
    notReached: { count: 0, percentage: 0 }
  };

  const chartData = CAMPAIGN_CHART_DATA[campaignId] || [];

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).replace(',', '');
  };

  // Отримуємо першу і останню дату з масиву даних
  const dates = chartData.map(item => new Date(item.date));
  const startDate = dates[0];
  const endDate = dates[dates.length - 1];

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] overflow-y-auto">
      <div className="space-y-6 px-6 py-6 bg-gray-200">
        <div className="grid grid-cols-5 gap-4 rounded-3xl">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span>Sent emails</span>
            </div>
            <div className="text-2xl font-bold">{campaign?.totalRecipients}</div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg ">
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Open rate</span>
            </div>
            <div className="text-2xl font-bold">{stats.openRate.percentage}%</div>
            <div className="text-sm text-gray-500">({stats.openRate.count} recipients)</div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              <span>Replied</span>
            </div>
            <div className="text-2xl font-bold">{stats.replies.percentage}%</div>
            <div className="text-sm text-gray-500">({stats.replies.count} recipients)</div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
              </svg>
              <span>Unsubscribed</span>
            </div>
            <div className="text-2xl font-bold">{stats.unsubscribed.percentage}%</div>
            <div className="text-sm text-gray-500">({stats.unsubscribed.count} recipients)</div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>Not reached</span>
            </div>
            <div className="text-2xl font-bold">{stats.notReached.percentage}%</div>
            <div className="text-sm text-gray-500">({stats.notReached.count} recipients)</div>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="font-semibold">Emails</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <select className="border rounded-md px-3 py-1.5 text-sm">
                <option>All sender accounts</option>
              </select>
              
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1.5 text-sm rounded-md hover:bg-gray-100">Week</button>
                <button className="px-3 py-1.5 text-sm rounded-md hover:bg-gray-100">Month</button>
                <button className="px-3 py-1.5 text-sm rounded-md hover:bg-gray-100">All time</button>
                <button className="px-3 py-1.5 text-sm border rounded-md">
                  {`${formatDate(startDate)} - ${formatDate(endDate)}`}
                </button>
              </div>
            </div>
          </div>

          <div style={{ width: '100%', height: '400px' }}>
            <ResponsiveContainer>
              <BarChart
                data={chartData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 30,
                }}
              >
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  vertical={false}
                  stroke="#E5E7EB"
                />
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                  tickLine={false}
                  axisLine={{ stroke: '#E5E7EB' }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff',
                    border: '1px solid #E5E7EB',
                    borderRadius: '6px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
                <Legend 
                  verticalAlign="top" 
                  height={36}
                  iconType="circle"
                />
                <Bar 
                  name="Sent"
                  dataKey="sent" 
                  fill="#60A5FA" 
                  radius={[4, 4, 0, 0]}
                  maxBarSize={50}
                />
                <Bar 
                  name="Replied"
                  dataKey="replied" 
                  fill="#EF4444" 
                  radius={[4, 4, 0, 0]}
                  maxBarSize={50}
                />
                <Bar 
                  name="Bounced"
                  dataKey="bounced" 
                  fill="#F59E0B" 
                  radius={[4, 4, 0, 0]}
                  maxBarSize={50}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-4">
              <svg className="w-5 h-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
              </svg>
              <div>
                <div className="text-sm text-gray-500">Sent emails</div>
                <div className="font-semibold">{campaign?.totalRecipients}</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <svg className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              <div>
                <div className="text-sm text-gray-500">Replies</div>
                <div className="font-semibold">{stats.replies.percentage}% <span className="text-sm text-gray-500">({stats.replies.count} recipients)</span></div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <div className="text-sm text-gray-500">Bounces</div>
                <div className="font-semibold">{stats.bounces.percentage}% <span className="text-sm text-gray-500">({stats.bounces.count} recipients)</span></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-2 bg-gray-50 rounded-lg p-4 pr-20">
          <Link 
            href={`/email-answer?campaignId=${campaignId}`} 
            className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div className="w-1/2">
              {campaignId === '1' ? (
                <div>Email: In case this helps you</div>
              ) : (
                <div>Email: Get a clients for $130!</div>
              )}
            </div>
            <div className="text-gray-500 flex-1">721</div>
            <div className="text-gray-400 flex-1">Disabled</div>
            <div className="text-gray-400 flex-1">Disabled</div>
            <div className="text-blue-500 flex-1">5% (36)</div>
          </Link>
            <div className="mx-4 border-b border-gray-100"></div>

          <Link 
            href={`/email-answer?campaignId=${campaignId}`}
            className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div className="w-1/2">
              {campaignId === '1' ? (
                <div>Email: Did you see our idea for {'{{company_name}}'}?</div>
              ) : (
                <div>Email: Is it possible to get cheap leads from advertising?</div>
              )}
            </div>
            <div className="text-gray-500 flex-1">641</div>
            <div className="text-gray-400 flex-1">Disabled</div>
            <div className="text-gray-400 flex-1">Disabled</div>
            <div className="text-blue-500 flex-1">4% (23)</div>
          </Link>
          <div className="mx-4 border-b border-gray-100"></div>

          <Link 
            href={`/email-answer?campaignId=${campaignId}`}
            className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div className="w-1/2">
              {campaignId === '1' ? (
                <div>Email: Is there a chance we could connect?</div>
              ) : (
                <div>Email: Partnership</div>
              )}
            </div>
            <div className="text-gray-500 flex-1">608</div>
            <div className="text-gray-400 flex-1">Disabled</div>
            <div className="text-gray-400 flex-1">Disabled</div>
            <div className="text-blue-500 flex-1">2% (14)</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StataEmail;
