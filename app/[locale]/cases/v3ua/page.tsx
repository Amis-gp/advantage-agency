import { setRequestLocale } from 'next-intl/server';
import ClientV3ua from './ClientV3ua';

export default function V1Page({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV3ua />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ua' }];
}