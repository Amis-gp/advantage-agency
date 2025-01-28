export type Locale = 'en' | 'uk';

export const locales: Locale[] = ['en', 'uk'];
export const defaultLocale: Locale = 'en';

export default async function getRequestConfig({ locale }: { locale: Locale }) {
    const messages = (await import(`@/messages/${locale}.json`)).default;
    
    return {
        messages,
        locales,
        defaultLocale
    };
}