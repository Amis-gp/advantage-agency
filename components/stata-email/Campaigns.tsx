'use client';

import Link from 'next/link';
import React from 'react';
import { CAMPAIGNS } from '@/app/constant/emailStats';

interface Campaign {
  id: string;
  name: string;
  list: string;
  senderAccounts: {
    main: string;
    additional: number;
  };
  status: 'Archived' | 'Active';
  totalRecipients: number;
  sentEmails: number;
  emailOpens: number | '-';
  linkClicks: number | '-';
  emailReplies: {
    count: number;
    percentage: number;
  };
  bounces: {
    count: number;
    percentage: number;
  };
  interested: {
    count: number;
    percentage: number;
  };
  date: string;
  stats: {
    sent: {
      count: number;
      percentage: number;
    };
    opens: {
      count: number | '-';
      percentage: number | '-';
    };
    clicks: {
      count: number | '-';
      percentage: number | '-';
    };
    replies: {
      count: number;
      percentage: number;
    };
    bounces: {
      count: number;
      percentage: number;
    };
    interested: {
      count: number;
      percentage: number;
    };
    contacted: {
      count: number;
      percentage: number;
    };
    unsubscribed: {
      count: number;
      percentage: number;
    };
    notReached: {
      count: number;
      percentage: number;
    };
  };
}

const Campaigns = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between mb-6">
        <div className="flex gap-3">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Create campaign
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-lg flex items-center gap-2 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Export statistics
          </button>
        </div>
        <div className="flex gap-3">
          <button className="border border-gray-300 px-4 py-2 rounded-lg flex items-center gap-2 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 11-2 0V4H5v12h10v-2a1 1 0 112 0v3a1 1 0 01-1 1H4a1 1 0 01-1-1V3z" clipRule="evenodd" />
            </svg>
            Filters
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for campaign"
              className="border border-gray-300 px-4 py-2 rounded-lg pl-10 w-64"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="pb-4">CAMPAIGN</th>
            <th className="pb-4">STATUS</th>
            <th className="pb-4">SENT EMAILS</th>
            <th className="pb-4">EMAIL OPENS</th>
            <th className="pb-4">LINK CLICKS</th>
            <th className="pb-4">EMAIL REPLIES</th>
            <th className="pb-4">BOUNCES</th>
            <th className="pb-4">INTERESTED</th>
            <th className="pb-4"></th>
          </tr>
        </thead>
        <tbody>
          {CAMPAIGNS.map((campaign) => (
            <tr key={campaign.id} className="border-b">
              <td className="py-4">
                <div className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-yellow-400 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                  </svg>
                  <div>
                    <Link 
                      href={`/email-statistics?campaignId=${campaign.id}`} 
                      className="hover:text-purple-800 hover:underline"
                    >
                      <div className="font-medium">{campaign.name}</div>
                    </Link>
                    <div className="text-sm text-gray-500">List: {campaign.list}</div>
                    <div className="text-sm text-gray-500">
                      Sender accounts: {campaign.senderAccounts.main} +{campaign.senderAccounts.additional} accounts
                    </div>
                    <div className="text-sm text-gray-500">
                      Total recipients: {campaign.totalRecipients}
                      <div className="w-24 h-1 bg-green-500 rounded mt-1"></div>
                    </div>
                    <div className="text-sm text-gray-500">{campaign.date}</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {campaign.status}
                </span>
              </td>
              <td>{campaign.stats.sent.count}</td>
              <td>{campaign.stats.opens.count}</td>
              <td>{campaign.stats.clicks.count}</td>
              <td>
                {campaign.stats.replies.count} <span className="text-gray-500">{campaign.stats.replies.percentage}%</span>
              </td>
              <td>
                {campaign.stats.bounces.count} <span className="text-gray-500">{campaign.stats.bounces.percentage}%</span>
              </td>
              <td>
                {campaign.stats.interested.count} <span className="text-gray-500">{campaign.stats.interested.percentage}%</span>
              </td>
              <td>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Campaigns;
