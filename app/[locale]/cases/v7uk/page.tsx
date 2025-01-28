import { setRequestLocale } from 'next-intl/server';
import ClientV7uk from './ClientV7uk';

export default function V1Page({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV7uk />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'uk' }];
}