import { setRequestLocale } from 'next-intl/server';
import ClientV14uk from './ClientV14uk';

export default function V12ukPage({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV14uk />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'uk' }];
}