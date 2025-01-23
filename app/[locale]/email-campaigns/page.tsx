import { setRequestLocale } from 'next-intl/server'
import Campaigns from '@/components/stata-email/Campaigns'
import Sidebar from '@/components/stata-email/Sidebar'
import Nav from '@/components/stata-email/Nav'
import FloatingChatButton from '@/components/stata-email/Button'

interface Props {
  params: { locale: string }
}

export default function EmailCampaignsPage({ params: { locale } }: Props) {
  setRequestLocale(locale)

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Nav />
        <Campaigns />
        <FloatingChatButton />
      </div>
    </div>
  )
}
