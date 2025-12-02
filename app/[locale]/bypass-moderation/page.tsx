import { Metadata } from 'next';
import BypassModeration from '@/components/bypass-moderation/BypassModeration';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Stop Bans: Secret Ad Moderation Bypass Method | Advantage Agency',
  description: 'Discover a new 2025 strategy to bypass Facebook ad moderation and keep your best creatives running. Learn how to run aggressive campaigns without cloaking or farming.',
  keywords: 'facebook ad moderation bypass, facebook ad bans, rejected facebook ads, bypass facebook review, language targeting method, aggressive creatives, traffic arbitrage, media buying 2025, ad account protection, bypass moderation method',
  openGraph: {
    title: 'Stop Bans: Secret Ad Moderation Bypass Method',
    description: 'Run aggressive campaigns without bans. New 2025 strategy.',
    url: 'https://www.advantage-agency.co/bypass-moderation',
    siteName: 'Advantage Agency',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stop Bans: Secret Ad Moderation Bypass Method',
    description: 'Run aggressive campaigns without bans. New 2025 strategy.',
  },
  alternates: {
    canonical: 'https://www.advantage-agency.co/bypass-moderation',
  },
};

export default function BypassModerationPage() {
  return (
    <div>
      <Header />
      <BypassModeration />
      <Footer />
    </div>
  );
}
