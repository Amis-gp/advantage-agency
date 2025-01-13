import { setRequestLocale } from 'next-intl/server';
import ClientV13ua from './ClientV13ua';

export default function V12uaPage({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV13ua />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ua' }];
}