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
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
    variable: '--font-roboto',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.advantage-agency.co'),
  verification: {
    google: '4lR1cZDBVKJEz9oki0kUTsJQmuUGSjK0VkP4FuZeRuE',
  },
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
        <meta
          httpEquiv="delegate-ch"
          content="sec-ch-ua https://lanterscusive.com; sec-ch-ua-mobile https://lanterscusive.com; sec-ch-ua-arch https://lanterscusive.com; sec-ch-ua-model https://lanterscusive.com; sec-ch-ua-platform https://lanterscusive.com; sec-ch-ua-platform-version https://lanterscusive.com; sec-ch-ua-bitness https://lanterscusive.com; sec-ch-ua-full-version-list https://lanterscusive.com; sec-ch-ua-full-version https://lanterscusive.com"
        />
        <style>{`.dtpcnt{opacity:0;}`}</style>
      </head>
      <body className={`min-h-screen`}>
        <GoogleTagManager id="GTM-KHS9QXFM" />
        <Script id="volume-tracker" strategy="afterInteractive">
          {`(function(c,d,f,h,t,b,n,u,k,l,m,e,p,v,q){function r(a){var c=d.cookie.match(new RegExp("(^| )"+a+"=([^;]+)"));return c?c.pop():f.getItem(a+"-expires")&&+f.getItem(a+"-expires")>(new Date).getTime()?f.getItem(a):null}q="https:"===c.location.protocol?"secure; ":"";c[b]||(c[b]=function(a){c[b].state.callbackQueue.push(a)},c[b].state={callbackQueue:[]},c[b].registerConversion=function(a){c[b].state.callbackQueue.push(a)},function(){(m=/[?&]cpid(=([^&#]*)|&|#|$)/.exec(c.location.href))&&m[2]&&(e=m[2], p=r("vl-"+e));var a=r("vl-cid"),b;"savedCid"!==u||!a||e&&"undefined"!==typeof e||(b=a);k=d.createElement("script");l=d.scripts[0];k.src=n+(-1===n.indexOf("?")?"?":"&")+"oref="+h(d.referrer)+"&ourl="+h(location[t])+"&opt="+h(d.title)+"&vtm="+(new Date).getTime()+(b?"&cid="+b:"")+(p?"&uw=no":"");l.parentNode.insertBefore(k,l);if(e){a="vl-"+e;b=q;var g=new Date;g.setTime(g.getTime()+864E5);d.cookie=a+"=1; "+b+"samesite=Strict; expires="+g.toGMTString()+"; path=/";f.setItem(a,"1");f.setItem(a+"-expires", g.getTime())}}())})(window,document,localStorage,encodeURIComponent,"href","dtpCallback","https://lanterscusive.com/d/e64153e8-c63b-4f50-8bfe-632e36b436a8.js","savedCid");`}
        </Script>
        <noscript>
          <link
            rel="stylesheet"
            href="https://lanterscusive.com/d/e64153e8-c63b-4f50-8bfe-632e36b436a8.js?noscript=true&ourl="
          />
        </noscript>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <CookieConsent />
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
