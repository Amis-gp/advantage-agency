import { setRequestLocale } from 'next-intl/server';
import ClientV11 from './ClientV11';

export default function V11uaPage({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV11 />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ua' }];
}