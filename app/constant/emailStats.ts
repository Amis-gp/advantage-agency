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
    openRate: {
      count: number;
      percentage: number;
    };
    deliverability: {
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
    totalRecipients: 6450,
    stats: {
      openRate: { count: 4128, percentage: 64 },
      deliverability: { count: '-', percentage: '-' },
      clicks: { count: '-', percentage: '-' },
      replies: { count: 56, percentage: 2 },
      bounces: { count: 10, percentage: 1 },
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
    totalRecipients: 5293,
    stats: {
      openRate: { count: 3282, percentage: 62 },
      deliverability: { count: '-', percentage: '-' },
      clicks: { count: '-', percentage: '-' },
      replies: { count: 115, percentage: 5 },
      bounces: { count: 12, percentage: 1 },
      contacted: { count: 2194, percentage: 95 },
      unsubscribed: { count: 44, percentage: 2 },
      notReached: { count: 3, percentage: 0 }
    },
    date: '5 Nov 2024, 10:13 AM'
  },
  {
    id: '3',
    name: 'Crypto offer - Justin',
    list: 'Advantage USA 927',
    senderAccounts: {
      main: 'mark@advantageinbox...',
      additional: 2
    },
    status: 'Archived',
    totalRecipients: 17478,
    stats: {
      openRate: { count: 10487, percentage: 60 },
      deliverability: { count: '-', percentage: '-' },
      clicks: { count: '-', percentage: '-' },
      replies: { count: 1073, percentage: 5 },
      bounces: { count: 82, percentage: 1 },
      contacted: { count: 16778, percentage: 96 },
      unsubscribed: { count: 241, percentage: 2 },
      notReached: { count: 368, percentage: 3 }
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
    totalRecipients: 472,
    stats: {
      openRate: { count: 270, percentage: 57 },
      deliverability: { count: '-', percentage: '-' },
      clicks: { count: '-', percentage: '-' },
      replies: { count: 18, percentage: 4 },
      bounces: { count: 5, percentage: 1 },
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
    totalRecipients: 1862,
    stats: {
      openRate: { count: 1093, percentage: 59 },
      deliverability: { count: '-', percentage: '-' },
      clicks: { count: '-', percentage: '-' },
      replies: { count: 42, percentage: 5 },
      bounces: { count: 15, percentage: 2 },
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
    totalRecipients: 699,
    stats: {
      openRate: { count: 400, percentage: 57 },
      deliverability: { count: '-', percentage: '-' },
      clicks: { count: '-', percentage: '-' },
      replies: { count: 28, percentage: 4 },
      bounces: { count: 8, percentage: 1 },
      contacted: { count: 289, percentage: 83 },
      unsubscribed: { count: 12, percentage: 3 },
      notReached: { count: 49, percentage: 14 }
    },
    date: '22 Oct 2024, 16:15 PM'
  },
];

export const CAMPAIGN_CHART_DATA: Record<string, ChartDataPoint[]> = {
  '1': [
    { date: '1 Dec 2024', sent: 220, replied: 2, bounced: 0 },
    { date: '2 Dec 2024', sent: 245, replied: 3, bounced: 0 },
    { date: '3 Dec 2024', sent: 180, replied: 1, bounced: 0 },
    { date: '4 Dec 2024', sent: 195, replied: 2, bounced: 0 },
    { date: '5 Dec 2024', sent: 230, replied: 2, bounced: 0 },
    { date: '6 Dec 2024', sent: 275, replied: 3, bounced: 0 },
    { date: '7 Dec 2024', sent: 290, replied: 2, bounced: 0 },
    { date: '8 Dec 2024', sent: 260, replied: 3, bounced: 0 },
    { date: '9 Dec 2024', sent: 240, replied: 2, bounced: 0 },
    { date: '10 Dec 2024', sent: 215, replied: 1, bounced: 0 },
    { date: '11 Dec 2024', sent: 235, replied: 2, bounced: 0 },
    { date: '12 Dec 2024', sent: 255, replied: 3, bounced: 0 },
    { date: '13 Dec 2024', sent: 270, replied: 2, bounced: 0 },
    { date: '14 Dec 2024', sent: 261, replied: 3, bounced: 0 },
    { date: '15 Dec 2024', sent: 250, replied: 2, bounced: 0 },
    { date: '16 Dec 2024', sent: 225, replied: 1, bounced: 0 },
    { date: '17 Dec 2024', sent: 210, replied: 2, bounced: 0 },
    { date: '18 Dec 2024', sent: 195, replied: 2, bounced: 0 },
    { date: '19 Dec 2024', sent: 205, replied: 1, bounced: 0 },
    { date: '20 Dec 2024', sent: 165, replied: 2, bounced: 0 },
    { date: '21 Dec 2024', sent: 179, replied: 1, bounced: 0 },
    { date: '22 Dec 2024', sent: 155, replied: 2, bounced: 0 },
    { date: '23 Dec 2024', sent: 170, replied: 1, bounced: 0 },
    { date: '24 Dec 2024', sent: 190, replied: 2, bounced: 0 },
    { date: '25 Dec 2024', sent: 195, replied: 2, bounced: 0 },
    { date: '26 Dec 2024', sent: 215, replied: 2, bounced: 0 },
    { date: '27 Dec 2024', sent: 203, replied: 2, bounced: 0 },
    { date: '28 Dec 2024', sent: 235, replied: 2, bounced: 0 },
    { date: '29 Dec 2024', sent: 215, replied: 2, bounced: 0 },
    { date: '30 Dec 2024', sent: 190, replied: 1, bounced: 0 },
    { date: '31 Dec 2024', sent: 167, replied: 1, bounced: 0 }
  ],
  '2': [
    { date: '1 Dec 2024', sent: 0, replied: 0, bounced: 0 },
    { date: '2 Dec 2024', sent: 0, replied: 0, bounced: 0 },
    { date: '3 Dec 2024', sent: 0, replied: 0, bounced: 0 },
    { date: '4 Dec 2024', sent: 185, replied: 4, bounced: 0 },
    { date: '5 Dec 2024', sent: 178, replied: 5, bounced: 0 },
    { date: '6 Dec 2024', sent: 182, replied: 4, bounced: 0 },
    { date: '7 Dec 2024', sent: 175, replied: 3, bounced: 0 },
    { date: '8 Dec 2024', sent: 180, replied: 4, bounced: 0 },
    { date: '9 Dec 2024', sent: 172, replied: 5, bounced: 0 },
    { date: '10 Dec 2024', sent: 168, replied: 3, bounced: 0 },
    { date: '11 Dec 2024', sent: 175, replied: 4, bounced: 0 },
    { date: '12 Dec 2024', sent: 165, replied: 3, bounced: 0 },
    { date: '13 Dec 2024', sent: 170, replied: 4, bounced: 0 },
    { date: '14 Dec 2024', sent: 173, replied: 5, bounced: 0 },
    { date: '15 Dec 2024', sent: 167, replied: 3, bounced: 0 },
    { date: '16 Dec 2024', sent: 171, replied: 4, bounced: 0 },
    { date: '17 Dec 2024', sent: 169, replied: 3, bounced: 0 },
    { date: '18 Dec 2024', sent: 174, replied: 4, bounced: 0 },
    { date: '19 Dec 2024', sent: 166, replied: 3, bounced: 0 },
    { date: '20 Dec 2024', sent: 170, replied: 4, bounced: 0 },
    { date: '21 Dec 2024', sent: 168, replied: 5, bounced: 0 },
    { date: '22 Dec 2024', sent: 172, replied: 3, bounced: 0 },
    { date: '23 Dec 2024', sent: 165, replied: 4, bounced: 0 },
    { date: '24 Dec 2024', sent: 169, replied: 3, bounced: 0 },
    { date: '25 Dec 2024', sent: 173, replied: 4, bounced: 0 },
    { date: '26 Dec 2024', sent: 167, replied: 5, bounced: 0 },
    { date: '27 Dec 2024', sent: 171, replied: 4, bounced: 0 },
    { date: '28 Dec 2024', sent: 164, replied: 3, bounced: 0 },
    { date: '29 Dec 2024', sent: 168, replied: 4, bounced: 0 },
    { date: '30 Dec 2024', sent: 163, replied: 3, bounced: 0 },
    { date: '31 Dec 2024', sent: 166, replied: 4, bounced: 0 }
  ],
  '3': [
    { date: '1 Nov 2024', sent: 84, replied: 4, bounced: 2 },
    { date: '2 Nov 2024', sent: 86, replied: 3, bounced: 1 },
    { date: '3 Nov 2024', sent: 170, replied: 8, bounced: 0 },
    { date: '4 Nov 2024', sent: 172, replied: 9, bounced: 2 },
    { date: '5 Nov 2024', sent: 170, replied: 7, bounced: 1 },
    { date: '6 Nov 2024', sent: 172, replied: 9, bounced: 0 },
    { date: '7 Nov 2024', sent: 170, replied: 9, bounced: 0 },
    { date: '8 Nov 2024', sent: 172, replied: 7, bounced: 1 },
    { date: '9 Nov 2024', sent: 170, replied: 9, bounced: 0 },
    { date: '10 Nov 2024', sent: 172, replied: 9, bounced: 2 },
    { date: '11 Nov 2024', sent: 170, replied: 7, bounced: 1 },
    { date: '12 Nov 2024', sent: 172, replied: 9, bounced: 0 },
    { date: '13 Nov 2024', sent: 170, replied: 7, bounced: 1 },
    { date: '14 Nov 2024', sent: 172, replied: 9, bounced: 0 },
    { date: '15 Nov 2024', sent: 170, replied: 7, bounced: 1 },
    { date: '16 Nov 2024', sent: 172, replied: 9, bounced: 0 },
    { date: '17 Nov 2024', sent: 170, replied: 7, bounced: 1 },
    { date: '18 Nov 2024', sent: 172, replied: 9, bounced: 0 },
    { date: '19 Nov 2024', sent: 170, replied: 7, bounced: 1 },
    { date: '20 Nov 2024', sent: 172, replied: 9, bounced: 0 },
    { date: '21 Nov 2024', sent: 170, replied: 7, bounced: 1 },
    { date: '22 Nov 2024', sent: 172, replied: 9, bounced: 0 },
    { date: '23 Nov 2024', sent: 170, replied: 7, bounced: 1 },
    { date: '24 Nov 2024', sent: 172, replied: 9, bounced: 0 },
    { date: '25 Nov 2024', sent: 170, replied: 7, bounced: 1 },
    { date: '26 Nov 2024', sent: 172, replied: 9, bounced: 0 },
    { date: '27 Nov 2024', sent: 170, replied: 7, bounced: 1 },
    { date: '28 Nov 2024', sent: 172, replied: 9, bounced: 0 },
    { date: '29 Nov 2024', sent: 170, replied: 7, bounced: 2 },
    { date: '30 Nov 2024', sent: 172, replied: 9, bounced: 0 },
    { date: '1 Dec 2024', sent: 190, replied: 9, bounced: 0 },
    { date: '2 Dec 2024', sent: 188, replied: 7, bounced: 1 },
    { date: '3 Dec 2024', sent: 190, replied: 9, bounced: 0 },
    { date: '4 Dec 2024', sent: 188, replied: 7, bounced: 0 },
    { date: '5 Dec 2024', sent: 190, replied: 9, bounced: 1 },
    { date: '6 Dec 2024', sent: 188, replied: 7, bounced: 0 },
    { date: '7 Dec 2024', sent: 190, replied: 9, bounced: 4 },
    { date: '8 Dec 2024', sent: 188, replied: 7, bounced: 1 },
    { date: '9 Dec 2024', sent: 190, replied: 9, bounced: 0 },
    { date: '10 Dec 2024', sent: 188, replied: 7, bounced: 0 },
    { date: '11 Dec 2024', sent: 190, replied: 9, bounced: 0 },
    { date: '12 Dec 2024', sent: 188, replied: 7, bounced: 1 },
    { date: '13 Dec 2024', sent: 190, replied: 9, bounced: 0 },
    { date: '14 Dec 2024', sent: 188, replied: 7, bounced: 2 },
    { date: '15 Dec 2024', sent: 190, replied: 9, bounced: 1 },
    { date: '16 Dec 2024', sent: 188, replied: 7, bounced: 0 },
    { date: '17 Dec 2024', sent: 190, replied: 9, bounced: 0 },
    { date: '18 Dec 2024', sent: 188, replied: 7, bounced: 1 },
    { date: '19 Dec 2024', sent: 190, replied: 9, bounced: 0 },
    { date: '20 Dec 2024', sent: 188, replied: 7, bounced: 0 },
    { date: '21 Dec 2024', sent: 190, replied: 9, bounced: 0 },
    { date: '22 Dec 2024', sent: 188, replied: 7, bounced: 1 },
    { date: '23 Dec 2024', sent: 190, replied: 9, bounced: 0 },
    { date: '24 Dec 2024', sent: 188, replied: 7, bounced: 0 },
    { date: '25 Dec 2024', sent: 190, replied: 9, bounced: 1 },
    { date: '26 Dec 2024', sent: 188, replied: 7, bounced: 1 },
    { date: '27 Dec 2024', sent: 190, replied: 9, bounced: 1 },
    { date: '28 Dec 2024', sent: 188, replied: 7, bounced: 1 },
    { date: '29 Dec 2024', sent: 188, replied: 7, bounced: 1 },
    { date: '30 Dec 2024', sent: 188, replied: 7, bounced: 1 },
    { date: '31 Dec 2024', sent: 188, replied: 7, bounced: 1 },
    { date: '1 Jan 2025', sent: 170, replied: 7, bounced: 0 },
    { date: '2 Jan 2025', sent: 172, replied: 7, bounced: 1 },
    { date: '3 Jan 2025', sent: 170, replied: 9, bounced: 0 },
    { date: '4 Jan 2025', sent: 172, replied: 9, bounced: 4 },
    { date: '5 Jan 2025', sent: 170, replied: 7, bounced: 1 },
    { date: '6 Jan 2025', sent: 172, replied: 9, bounced: 0 },
    { date: '7 Jan 2025', sent: 170, replied: 9, bounced: 0 },
    { date: '8 Jan 2025', sent: 172, replied: 7, bounced: 1 },
    { date: '9 Jan 2025', sent: 170, replied: 9, bounced: 0 },
    { date: '10 Jan 2025', sent: 172, replied: 9, bounced: 2 },
    { date: '11 Jan 2025', sent: 170, replied: 7, bounced: 1 },
    { date: '12 Jan 2025', sent: 172, replied: 9, bounced: 0 },
    { date: '13 Jan 2025', sent: 170, replied: 7, bounced: 1 },
    { date: '14 Jan 2025', sent: 172, replied: 9, bounced: 0 },
    { date: '15 Jan 2025', sent: 170, replied: 7, bounced: 1 },
    { date: '16 Jan 2025', sent: 172, replied: 9, bounced: 0 },
    { date: '17 Jan 2025', sent: 170, replied: 7, bounced: 1 },
    { date: '18 Jan 2025', sent: 172, replied: 9, bounced: 0 },
    { date: '19 Jan 2025', sent: 170, replied: 7, bounced: 1 },
    { date: '20 Jan 2025', sent: 172, replied: 9, bounced: 0 },
    { date: '21 Jan 2025', sent: 170, replied: 7, bounced: 1 },
    { date: '22 Jan 2025', sent: 172, replied: 9, bounced: 0 },
    { date: '23 Jan 2025', sent: 170, replied: 7, bounced: 1 },
    { date: '24 Jan 2025', sent: 172, replied: 9, bounced: 0 },
    { date: '25 Jan 2025', sent: 170, replied: 7, bounced: 1 },
    { date: '26 Jan 2025', sent: 172, replied: 9, bounced: 0 },
    { date: '27 Jan 2025', sent: 170, replied: 7, bounced: 1 },
    { date: '28 Jan 2025', sent: 172, replied: 9, bounced: 0 },
    { date: '29 Jan 2025', sent: 170, replied: 7, bounced: 2 },
    { date: '30 Jan 2025', sent: 172, replied: 9, bounced: 0 },
    { date: '31 Jan 2025', sent: 170, replied: 7, bounced: 1 }
  ],
  '4': [
    { date: '1 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '2 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '3 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '4 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '5 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '6 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '7 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '8 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '9 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '10 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '11 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '12 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '13 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '14 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '15 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '16 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '17 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '18 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '19 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '20 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '21 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '22 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '23 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '24 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '25 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '26 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '27 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '28 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '29 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '30 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '31 Dec 2024', sent: 9, replied: 0, bounced: 0 }
  ],
  '5': [
    { date: '1 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '2 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '3 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '4 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '5 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '6 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '7 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '8 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '9 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '10 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '11 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '12 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '13 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '14 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '15 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '16 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '17 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '18 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '19 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '20 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '21 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '22 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '23 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '24 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '25 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '26 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '27 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '28 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '29 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '30 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '31 Dec 2024', sent: 9, replied: 0, bounced: 0 }
  ],
  '6': [
    { date: '1 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '2 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '3 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '4 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '5 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '6 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '7 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '8 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '9 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '10 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '11 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '12 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '13 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '14 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '15 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '16 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '17 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '18 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '19 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '20 Dec 2024', sent: 9, replied: 0, bounced: 0 },
    { date: '21 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '22 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '23 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '24 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '25 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '26 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '27 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '28 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '29 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '30 Dec 2024', sent: 10, replied: 0, bounced: 0 },
    { date: '31 Dec 2024', sent: 9, replied: 0, bounced: 0 }
  ]
};
