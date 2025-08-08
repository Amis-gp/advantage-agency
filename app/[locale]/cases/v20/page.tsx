import { setRequestLocale } from 'next-intl/server';
import ClientV20 from './ClientV20';

export default function V20Page({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV20 />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'uk' }];
}