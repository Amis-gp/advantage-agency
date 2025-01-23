import { setRequestLocale } from 'next-intl/server'
import Statistics from '@/components/stata-email/Statistics'
import Sidebar from '@/components/stata-email/Sidebar'
import Nav from '@/components/stata-email/Nav'

export default function StatisticsPage({
  searchParams,
}: {
  searchParams: { campaignId: string }
}) {
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
