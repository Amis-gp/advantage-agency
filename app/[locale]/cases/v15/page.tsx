import { setRequestLocale } from 'next-intl/server';
import ClientV15 from './ClientV15';

export default function V15Page({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV15 />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'uk' }];
}