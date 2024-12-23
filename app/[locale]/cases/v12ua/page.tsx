import { setRequestLocale } from 'next-intl/server';
import ClientV12ua from './ClientV12ua';

export default function V12Page({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV12ua />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ua' }];
}