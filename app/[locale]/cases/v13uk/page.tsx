import { setRequestLocale } from 'next-intl/server';
import ClientV13uk from './ClientV13uk';

export default function V12ukPage({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV13uk />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'uk' }];
}