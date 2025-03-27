import { setRequestLocale } from 'next-intl/server';
import ClientColdOutreachPackages from '@/components/cold-outreach-packages/ClientColdOutreachPackages';

export default function ThankYouPage({ 
    params: { locale } 
}: { 
    params: { locale: string } 
}) {
    setRequestLocale(locale);
    return <ClientColdOutreachPackages />;
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ua' }];
}