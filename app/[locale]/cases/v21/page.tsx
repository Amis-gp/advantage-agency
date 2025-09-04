import { setRequestLocale } from 'next-intl/server';
import ClientV21 from './ClientV21';

export default function V21Page({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV21 />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'uk' }];
}