import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@/components/LocaleSwitcher';

export default function Home() {
  const t = useTranslations();

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