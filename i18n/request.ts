export type Locale = 'en' | 'uk';

export const locales: Locale[] = ['en', 'uk'];
export const defaultLocale: Locale = 'en';

export default async function getRequestConfig({ requestLocale }: { requestLocale: Locale | Promise<Locale> }) {
    const locale = await requestLocale || defaultLocale;
    
    let messages;
    if (locale === 'en') {
        messages = (await import('../messages/en.json')).default;
    } else {
        messages = (await import('../messages/uk.json')).default;
    }
    
    return {
        locale,
        messages,
        locales,
        defaultLocale
    };
}