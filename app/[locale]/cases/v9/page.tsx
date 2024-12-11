import { setRequestLocale } from 'next-intl/server';
import ClientV9 from './ClientV9';

export default function V1Page({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV9 />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ua' }];
}