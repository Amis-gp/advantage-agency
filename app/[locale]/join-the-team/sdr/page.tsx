import { setRequestLocale } from 'next-intl/server'
import QualificationForm from '@/components/join-the-team/QualificationForm'
import Header from '@/components/join-the-team/Header'
import Footer from '@/components/join-the-team/Footer'

interface Props {
  params: {
    locale: string;
  };
  searchParams: { 
    campaignId: string 
  };
}

export default function StatisticsPage({
  params: { locale },
  searchParams,
}: Props) {
  setRequestLocale(locale);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-black">
      <Header />
      <QualificationForm />
      <Footer />
    </div>
  )
}
