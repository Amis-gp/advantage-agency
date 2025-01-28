import { setRequestLocale } from 'next-intl/server';
import ClientV11uk from './ClientV11uk';

export default function V11ukPage({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientV11uk />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'uk' }];
}