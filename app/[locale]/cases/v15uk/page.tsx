import { setRequestLocale } from 'next-intl/server';
import ClientV15uk from './ClientV15uk';

export default function V12ukPage({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV15uk />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'uk' }];
}