import { setRequestLocale } from 'next-intl/server';
import ClientV12 from './ClientV12';

export default function V12Page({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV12 />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ua' }];
}