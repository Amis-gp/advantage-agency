import { setRequestLocale } from 'next-intl/server'
import ThankYou from '@/components/brief/ThankYou'

interface Props {
  params: { locale: string }
}

export default function BriefPage({ params: { locale } }: Props) {
  setRequestLocale(locale)
  
  return <ThankYou />
}