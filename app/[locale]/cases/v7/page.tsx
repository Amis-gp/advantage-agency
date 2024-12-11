import { setRequestLocale } from 'next-intl/server';
import ClientV7 from './ClientV7';

export default function V1Page({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV7 />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ua' }];
}