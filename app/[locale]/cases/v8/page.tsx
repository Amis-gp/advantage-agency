import { setRequestLocale } from 'next-intl/server';
import ClientV8 from './ClientV8';

export default function V1Page({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);   
    return <ClientV8 />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ua' }];
}