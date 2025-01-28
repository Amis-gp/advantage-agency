import { setRequestLocale } from 'next-intl/server';
import ClientV12uk from './ClientV12uk';

export default function V12ukPage({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV12uk />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'uk' }];
}