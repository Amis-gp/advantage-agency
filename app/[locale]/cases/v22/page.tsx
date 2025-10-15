import { setRequestLocale } from 'next-intl/server';
import ClientV22 from './ClientV22';

export default function V22Page({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV22 />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'uk' }];
}