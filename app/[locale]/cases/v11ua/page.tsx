import { setRequestLocale } from 'next-intl/server';
import ClientV10ua from './ClientV10ua';

export default function V1Page({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV11ua />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ua' }];
}