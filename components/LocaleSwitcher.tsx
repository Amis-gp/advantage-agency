'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { locales, type Locale } from '@/i18n/request';

export default function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();

    const switchLocale = (newLocale: Locale) => {
        if (locale === newLocale) return;
        router.replace(`/${newLocale}`);
    };

    return (
        <div className="flex gap-4">
            {locales.map((loc) => (
                <button
                    key={loc}
                    className={`px-4 py-2 rounded-md ${
                        locale === loc 
                            ? 'bg-foreground text-background' 
                            : 'border border-foreground'
                    }`}
                    onClick={() => switchLocale(loc)}
                >
                    {loc === 'en' ? 'English' : 'Українська'}
                </button>
            ))}
        </div>
    );
}