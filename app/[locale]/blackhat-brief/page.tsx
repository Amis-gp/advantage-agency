import { setRequestLocale } from 'next-intl/server';
import Footer from '@/components/Footer';
import BlackhatBrief from '@/components/brief/BlackhatBrief';

export default function BlackhatBriefPage({
    params: { locale }
}: {
    params: { locale: string }
}) {
    setRequestLocale(locale);

    return (
      <div className="relative bg-black text-white overflow-hidden">
        <div className="relative">
          <main className="no-select h-full ">
            <BlackhatBrief />
          </main>
          <Footer />
        </div>
      </div>
    );
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ua' }];
}