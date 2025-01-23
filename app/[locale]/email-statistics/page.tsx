import { setRequestLocale } from 'next-intl/server'
import Statistics from '@/components/stata-email/Statistics'
import Sidebar from '@/components/stata-email/Sidebar'
import Nav from '@/components/stata-email/Nav'

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
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Nav />
        <Statistics campaignId={searchParams.campaignId} />
      </div>
    </div>
  )
}
