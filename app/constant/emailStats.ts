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
  date: string;
}

export const CAMPAIGNS: Campaign[] = [
  {
    id: '1',
    name: 'Roofing #1 - copy',
    list: 'Roofing USA 926',
    senderAccounts: {
      main: 'yulia@advantageadver.c...',
      additional: 3
    },
    status: 'Archived',
    totalRecipients: 767,
    stats: {
      sent: { count: 1970, percentage: 94 },
      opens: { count: '-', percentage: '-' },
      clicks: { count: '-', percentage: '-' },
      replies: { count: 6, percentage: 1 },
      bounces: { count: 0, percentage: 0 },
      interested: { count: 0, percentage: 0 },
      contacted: { count: 721, percentage: 94 },
      unsubscribed: { count: 0, percentage: 0 },
      notReached: { count: 46, percentage: 6 }
    },
    date: '8 Nov 2024, 09:38 AM'
  },
  {
    id: '2',
    name: 'Roofing #1',
    list: 'Roofing USA 926',
    senderAccounts: {
      main: 'oliver@advantageinbox...',
      additional: 3
    },
    status: 'Archived',
    totalRecipients: 150,
    stats: {
      sent: { count: 299, percentage: 39 },
      opens: { count: '-', percentage: '-' },
      clicks: { count: '-', percentage: '-' },
      replies: { count: 0, percentage: 0 },
      bounces: { count: 0, percentage: 0 },
      interested: { count: 0, percentage: 0 },
      contacted: { count: 299, percentage: 39 },
      unsubscribed: { count: 0, percentage: 0 },
      notReached: { count: 468, percentage: 61 }
    },
    date: '5 Nov 2024, 10:13 AM'
  }
];

interface ChartDataPoint {
  date: string;
  sent: number;
  replied: number;
  bounced: number;
}

export const CAMPAIGN_CHART_DATA: Record<string, ChartDataPoint[]> = {
  '1': [
    { date: '1 Mar 2024', sent: 65, replied: 1, bounced: 0 },
    { date: '2 Mar 2024', sent: 65, replied: 0, bounced: 0 },
    { date: '3 Mar 2024', sent: 65, replied: 0, bounced: 0 },
    { date: '4 Mar 2024', sent: 65, replied: 1, bounced: 0 },
    { date: '5 Mar 2024', sent: 65, replied: 0, bounced: 0 },
    { date: '6 Mar 2024', sent: 65, replied: 0, bounced: 0 },
    { date: '7 Mar 2024', sent: 65, replied: 1, bounced: 0 },
    { date: '8 Mar 2024', sent: 65, replied: 0, bounced: 0 },
    { date: '9 Mar 2024', sent: 65, replied: 0, bounced: 0 },
    { date: '10 Mar 2024', sent: 65, replied: 1, bounced: 0 },
    { date: '11 Mar 2024', sent: 60, replied: 0, bounced: 0 },
    { date: '12 Mar 2024', sent: 60, replied: 0, bounced: 0 },
    { date: '13 Mar 2024', sent: 60, replied: 0, bounced: 0 },
    { date: '14 Mar 2024', sent: 60, replied: 1, bounced: 0 },
    { date: '15 Mar 2024', sent: 60, replied: 0, bounced: 0 },
    { date: '16 Mar 2024', sent: 60, replied: 0, bounced: 0 },
    { date: '17 Mar 2024', sent: 60, replied: 0, bounced: 0 },
    { date: '18 Mar 2024', sent: 60, replied: 1, bounced: 0 },
    { date: '19 Mar 2024', sent: 60, replied: 0, bounced: 0 },
    { date: '20 Mar 2024', sent: 60, replied: 0, bounced: 0 },
    { date: '21 Mar 2024', sent: 65, replied: 0, bounced: 0 },
    { date: '22 Mar 2024', sent: 65, replied: 0, bounced: 0 },
    { date: '23 Mar 2024', sent: 65, replied: 0, bounced: 0 },
    { date: '24 Mar 2024', sent: 65, replied: 1, bounced: 0 },
    { date: '25 Mar 2024', sent: 65, replied: 0, bounced: 0 },
    { date: '26 Mar 2024', sent: 65, replied: 0, bounced: 0 },
    { date: '27 Mar 2024', sent: 65, replied: 0, bounced: 0 },
    { date: '28 Mar 2024', sent: 65, replied: 0, bounced: 0 },
    { date: '29 Mar 2024', sent: 65, replied: 0, bounced: 0 },
    { date: '30 Mar 2024', sent: 65, replied: 0, bounced: 0 },
    { date: '31 Mar 2024', sent: 65, replied: 0, bounced: 0 }
  ],
  '2': [
    { date: '1 Mar 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '2 Mar 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '3 Mar 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '4 Mar 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '5 Mar 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '6 Mar 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '7 Mar 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '8 Mar 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '9 Mar 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '10 Mar 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '11 Mar 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '12 Mar 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '13 Mar 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '14 Mar 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '15 Mar 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '16 Mar 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '17 Mar 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '18 Mar 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '19 Mar 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '20 Mar 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '21 Mar 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '22 Mar 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '23 Mar 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '24 Mar 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '25 Mar 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '26 Mar 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '27 Mar 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '28 Mar 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '29 Mar 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '30 Mar 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '31 Mar 2024', sent: 9, replied: 0, bounced: 0 }
  ]
};
