import { setRequestLocale } from 'next-intl/server';
import ClientV19 from './ClientV19';

export default function V19Page({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV19 />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'uk' }];
}