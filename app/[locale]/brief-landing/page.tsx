import { setRequestLocale } from 'next-intl/server'
import BriefLandingPage from '@/components/brief/BriefLanding'

interface Props {
  params: { locale: string }
}

export default function BriefPage({ params: { locale } }: Props) {
  setRequestLocale(locale)
  
  return <BriefLandingPage />
}