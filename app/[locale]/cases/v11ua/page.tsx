import { setRequestLocale } from 'next-intl/server';
import ClientV11ua from './ClientV11ua';

export default function V11uaPage({ 
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