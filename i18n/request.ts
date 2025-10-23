export type Locale = 'en' | 'uk';

export const locales: Locale[] = ['en', 'uk'];
export const defaultLocale: Locale = 'en';

export default async function getRequestConfig({ requestLocale }: { requestLocale: Locale | Promise<Locale> }) {
    const locale = await requestLocale || defaultLocale;
    const messages = (await import(`@/messages/${locale}.json`)).default;
    
    return {
        locale,
        messages,
        locales,
        defaultLocale
    };
}