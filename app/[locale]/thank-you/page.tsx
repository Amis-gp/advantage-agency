import { setRequestLocale } from 'next-intl/server';
import ClientThankYou from './ClientThankYou';

export default function ThankYouPage({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientThankYou />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ua' }];
}