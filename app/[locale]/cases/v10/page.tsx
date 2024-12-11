import { setRequestLocale } from 'next-intl/server';
import ClientV10 from './ClientV10';

export default function V1Page({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV10 />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ua' }];
}