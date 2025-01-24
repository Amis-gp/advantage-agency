import { setRequestLocale } from 'next-intl/server'
import Sidebar from '@/components/stata-email/Sidebar'
import Nav from '@/components/stata-email/Nav'
import FloatingChatButton from '@/components/stata-email/Button';
import Answer from '@/components/stata-email/Answer';

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
        <Answer />
        <FloatingChatButton />
      </div>
    </div>
  )
}
