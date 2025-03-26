import { setRequestLocale } from 'next-intl/server';
import ClientV16 from './ClientV16';

export default function V15Page({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV16 />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'uk' }];
}