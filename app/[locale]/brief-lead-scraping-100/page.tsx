import { setRequestLocale } from 'next-intl/server'
import BriefLeadScraping from '@/components/brief/BriefLeadScraping-100'

interface Props {
  params: { locale: string }
}

export default function BriefPage({ params: { locale } }: Props) {
  setRequestLocale(locale)
  
  return <BriefLeadScraping />
}