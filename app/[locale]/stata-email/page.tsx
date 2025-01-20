import { setRequestLocale } from 'next-intl/server'
import StataEmail from '@/components/stata-email/StataEmail'

interface Props {
  params: { locale: string }
}

export default function BriefPage({ params: { locale } }: Props) {
  setRequestLocale(locale)
  
  return <StataEmail />
}