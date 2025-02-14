import { setRequestLocale } from 'next-intl/server';
import ClientV14 from './ClientV14';

export default function V12ukPage({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV14 />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'uk' }];
}