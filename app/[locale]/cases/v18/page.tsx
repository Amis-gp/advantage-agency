import { setRequestLocale } from 'next-intl/server';
import ClientV18 from './ClientV18';

export default function V18Page({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV18 />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'uk' }];
}