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

interface ChartDataPoint {
  date: string;
  sent: number;
  replied: number;
  bounced: number;
}

export const CAMPAIGNS: Campaign[] = [
  {
    id: '1',
    name: 'Advantage #1 - copy',
    list: 'Advantage USA 926',
    senderAccounts: {
      main: 'yulia@advantageadver.c...',
      additional: 3
    },
    status: 'Archived',
    totalRecipients: 3005,
    stats: {
      sent: { count: 6450, percentage: 94 },
      opens: { count: '-', percentage: '-' },
      clicks: { count: '-', percentage: '-' },
      replies: { count: 56, percentage: 2 },
      bounces: { count: 10, percentage: 1 },
      interested: { count: 21, percentage: 1 },
      contacted: { count: 2921, percentage: 94 },
      unsubscribed: { count: 14, percentage: 1 },
      notReached: { count: 1, percentage: 0 }
    },
    date: '8 Nov 2024, 09:38 AM'
  },
  {
    id: '2',
    name: 'Advantage #1',
    list: 'Advantage USA 926',
    senderAccounts: {
      main: 'oliver@advantageinbox...',
      additional: 3
    },
    status: 'Archived',
    totalRecipients: 2310,
    stats: {
      sent: { count: 5293, percentage: 93 },
      opens: { count: '-', percentage: '-' },
      clicks: { count: '-', percentage: '-' },
      replies: { count: 115, percentage: 5 },
      bounces: { count: 12, percentage: 1 },
      interested: { count: 15, percentage: 1 },
      contacted: { count: 2194, percentage: 95 },
      unsubscribed: { count: 44, percentage: 2 },
      notReached: { count: 3, percentage: 0 }
    },
    date: '5 Nov 2024, 10:13 AM'
  },
  {
    id: '3',
    name: 'Advantage #2',
    list: 'Advantage USA 927',
    senderAccounts: {
      main: 'mark@advantageinbox...',
      additional: 2
    },
    status: 'Archived',
    totalRecipients: 450,
    stats: {
      sent: { count: 892, percentage: 82 },
      opens: { count: '-', percentage: '-' },
      clicks: { count: '-', percentage: '-' },
      replies: { count: 25, percentage: 3 },
      bounces: { count: 12, percentage: 1 },
      interested: { count: 8, percentage: 1 },
      contacted: { count: 399, percentage: 89 },
      unsubscribed: { count: 15, percentage: 2 },
      notReached: { count: 36, percentage: 8 }
    },
    date: '1 Nov 2024, 11:45 AM'
  },
  {
    id: '4',
    name: 'Advantage #3 - test',
    list: 'Advantage USA 928',
    senderAccounts: {
      main: 'sarah@advantageinbox...',
      additional: 1
    },
    status: 'Archived',
    totalRecipients: 250,
    stats: {
      sent: { count: 472, percentage: 76 },
      opens: { count: '-', percentage: '-' },
      clicks: { count: '-', percentage: '-' },
      replies: { count: 18, percentage: 4 },
      bounces: { count: 5, percentage: 1 },
      interested: { count: 6, percentage: 1 },
      contacted: { count: 199, percentage: 80 },
      unsubscribed: { count: 8, percentage: 3 },
      notReached: { count: 43, percentage: 17 }
    },
    date: '29 Oct 2024, 09:20 AM'
  },
  {
    id: '5',
    name: 'Advantage Fb',
    list: 'Advantage Commercial Leads 100',
    senderAccounts: {
      main: 'peter@advantageinbox...',
      additional: 4
    },
    status: 'Archived',
    totalRecipients: 850,
    stats: {
      sent: { count: 1862, percentage: 88 },
      opens: { count: '-', percentage: '-' },
      clicks: { count: '-', percentage: '-' },
      replies: { count: 42, percentage: 5 },
      bounces: { count: 15, percentage: 2 },
      interested: { count: 12, percentage: 1 },
      contacted: { count: 699, percentage: 82 },
      unsubscribed: { count: 25, percentage: 3 },
      notReached: { count: 99, percentage: 12 }
    },
    date: '25 Oct 2024, 14:30 PM'
  },
  {
    id: '6',
    name: 'Advantage Google',
    list: 'Advantage Industrial Network 50',
    senderAccounts: {
      main: 'alex@advantageinbox...',
      additional: 2
    },
    status: 'Archived',
    totalRecipients: 350,
    stats: {
      sent: { count: 699, percentage: 85 },
      opens: { count: '-', percentage: '-' },
      clicks: { count: '-', percentage: '-' },
      replies: { count: 28, percentage: 4 },
      bounces: { count: 8, percentage: 1 },
      interested: { count: 9, percentage: 1 },
      contacted: { count: 289, percentage: 83 },
      unsubscribed: { count: 12, percentage: 3 },
      notReached: { count: 49, percentage: 14 }
    },
    date: '22 Oct 2024, 16:15 PM'
  },
];




export const CAMPAIGN_CHART_DATA: Record<string, ChartDataPoint[]> = {
  '1': [
    { date: '1 Mar 2024', sent: 220, replied: 2, bounced: 0 },
    { date: '2 Mar 2024', sent: 245, replied: 3, bounced: 0 },
    { date: '3 Mar 2024', sent: 180, replied: 1, bounced: 0 },
    { date: '4 Mar 2024', sent: 195, replied: 2, bounced: 0 },
    { date: '5 Mar 2024', sent: 230, replied: 2, bounced: 0 },
    { date: '6 Mar 2024', sent: 275, replied: 3, bounced: 0 },
    { date: '7 Mar 2024', sent: 290, replied: 2, bounced: 0 },
    { date: '8 Mar 2024', sent: 260, replied: 3, bounced: 0 },
    { date: '9 Mar 2024', sent: 240, replied: 2, bounced: 0 },
    { date: '10 Mar 2024', sent: 215, replied: 1, bounced: 0 },
    { date: '11 Mar 2024', sent: 235, replied: 2, bounced: 0 },
    { date: '12 Mar 2024', sent: 255, replied: 3, bounced: 0 },
    { date: '13 Mar 2024', sent: 270, replied: 2, bounced: 0 },
    { date: '14 Mar 2024', sent: 261, replied: 3, bounced: 0 },
    { date: '15 Mar 2024', sent: 250, replied: 2, bounced: 0 },
    { date: '16 Mar 2024', sent: 225, replied: 1, bounced: 0 },
    { date: '17 Mar 2024', sent: 210, replied: 2, bounced: 0 },
    { date: '18 Mar 2024', sent: 195, replied: 2, bounced: 0 },
    { date: '19 Mar 2024', sent: 205, replied: 1, bounced: 0 },
    { date: '20 Mar 2024', sent: 165, replied: 2, bounced: 0 },
    { date: '21 Mar 2024', sent: 179, replied: 1, bounced: 0 },
    { date: '22 Mar 2024', sent: 155, replied: 2, bounced: 0 },
    { date: '23 Mar 2024', sent: 170, replied: 1, bounced: 0 },
    { date: '24 Mar 2024', sent: 190, replied: 2, bounced: 0 },
    { date: '25 Mar 2024', sent: 195, replied: 2, bounced: 0 },
    { date: '26 Mar 2024', sent: 215, replied: 2, bounced: 0 },
    { date: '27 Mar 2024', sent: 203, replied: 2, bounced: 0 },
    { date: '28 Mar 2024', sent: 235, replied: 2, bounced: 0 },
    { date: '29 Mar 2024', sent: 215, replied: 2, bounced: 0 },
    { date: '30 Mar 2024', sent: 190, replied: 1, bounced: 0 },
    { date: '31 Mar 2024', sent: 167, replied: 1, bounced: 0 }
  ],
  '2': [
    { date: '1 Mar 2024', sent: 0, replied: 0, bounced: 0 },
    { date: '2 Mar 2024', sent: 0, replied: 0, bounced: 0 },
    { date: '3 Mar 2024', sent: 0, replied: 0, bounced: 0 },
    { date: '4 Mar 2024', sent: 185, replied: 4, bounced: 0 },
    { date: '5 Mar 2024', sent: 178, replied: 5, bounced: 0 },
    { date: '6 Mar 2024', sent: 182, replied: 4, bounced: 0 },
    { date: '7 Mar 2024', sent: 175, replied: 3, bounced: 0 },
    { date: '8 Mar 2024', sent: 180, replied: 4, bounced: 0 },
    { date: '9 Mar 2024', sent: 172, replied: 5, bounced: 0 },
    { date: '10 Mar 2024', sent: 168, replied: 3, bounced: 0 },
    { date: '11 Mar 2024', sent: 175, replied: 4, bounced: 0 },
    { date: '12 Mar 2024', sent: 165, replied: 3, bounced: 0 },
    { date: '13 Mar 2024', sent: 170, replied: 4, bounced: 0 },
    { date: '14 Mar 2024', sent: 173, replied: 5, bounced: 0 },
    { date: '15 Mar 2024', sent: 167, replied: 3, bounced: 0 },
    { date: '16 Mar 2024', sent: 171, replied: 4, bounced: 0 },
    { date: '17 Mar 2024', sent: 169, replied: 3, bounced: 0 },
    { date: '18 Mar 2024', sent: 174, replied: 4, bounced: 0 },
    { date: '19 Mar 2024', sent: 166, replied: 3, bounced: 0 },
    { date: '20 Mar 2024', sent: 170, replied: 4, bounced: 0 },
    { date: '21 Mar 2024', sent: 168, replied: 5, bounced: 0 },
    { date: '22 Mar 2024', sent: 172, replied: 3, bounced: 0 },
    { date: '23 Mar 2024', sent: 165, replied: 4, bounced: 0 },
    { date: '24 Mar 2024', sent: 169, replied: 3, bounced: 0 },
    { date: '25 Mar 2024', sent: 173, replied: 4, bounced: 0 },
    { date: '26 Mar 2024', sent: 167, replied: 5, bounced: 0 },
    { date: '27 Mar 2024', sent: 171, replied: 4, bounced: 0 },
    { date: '28 Mar 2024', sent: 164, replied: 3, bounced: 0 },
    { date: '29 Mar 2024', sent: 168, replied: 4, bounced: 0 },
    { date: '30 Mar 2024', sent: 163, replied: 3, bounced: 0 },
    { date: '31 Mar 2024', sent: 166, replied: 4, bounced: 0 }
  ],
  '3': [
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
  ],
  '4': [
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
  ],
  '5': [
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
  ],
  '6': [
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
