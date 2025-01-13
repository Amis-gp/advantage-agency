import { setRequestLocale } from 'next-intl/server';
import ClientV13 from './ClientV13';

export default function V12uaPage({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV13 />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ua' }];
}