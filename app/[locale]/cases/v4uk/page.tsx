import { setRequestLocale } from 'next-intl/server';
import ClientV4uk from './ClientV4uk';

export default function V1Page({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV4uk />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'uk' }];
}