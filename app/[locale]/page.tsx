import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import { type Locale } from '@/i18n/request';

type Props = {
  params: { locale: Locale };
};

export default async function Home({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <LocaleSwitcher />
      
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          {t('title')}
        </h1>
        <p className="text-xl">
          {t('description')}
        </p>
      </main>
    </div>
  );
}