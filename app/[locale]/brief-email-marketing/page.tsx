import { setRequestLocale } from 'next-intl/server'
import Brief from '@/components/brief/BriefEmailMarketing'

interface Props {
  params: { locale: string }
}

export default function BriefPage({ params: { locale } }: Props) {
  setRequestLocale(locale)
  
  return <Brief />
}