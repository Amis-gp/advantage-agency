import { setRequestLocale } from 'next-intl/server';
import ClientV17 from './ClientV17';

export default function V17Page({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV17 />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'uk' }];
}