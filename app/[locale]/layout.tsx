import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { locales, type Locale } from '@/i18n/request';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import '../globals.css';
import { clashGrotesk } from '@/fonts/ClashGrotesk';
import { Roboto } from 'next/font/google';
import GoogleTagManager from '@/components/GoogleTagManager';
import CookieConsent from '@/components/CookieConsent';
import JsonLd from '@/components/JsonLd';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
    variable: '--font-roboto',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.advantage-agency.co'),
  title: 'Advantage Agency',
  description: 'Digital marketing agency',
  icons: {
    icon: [
      {
        url: '/img/favicon.svg',
        sizes: 'any',
      },
    ]
  }
};

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  
  if (!locales.includes(locale)) {
    notFound();
  }
  
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className={`${clashGrotesk.variable} ${roboto.variable}`}>
      <head>
        <JsonLd locale={locale} />
      </head>
      <body className={`min-h-screen`}>
        <GoogleTagManager id="GTM-TVSP68XX" />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
