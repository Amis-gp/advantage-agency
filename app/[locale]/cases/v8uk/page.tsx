import { setRequestLocale } from 'next-intl/server';
import ClientV8uk from './ClientV8uk';

export default function V1Page({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV8uk />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'uk' }];
}