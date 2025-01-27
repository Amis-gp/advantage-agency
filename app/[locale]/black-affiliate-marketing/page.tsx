import { setRequestLocale } from 'next-intl/server'
import BlackAffiliateMarketing from '@/components/black-affiliate-marketing/Page'
import Footer from '@/components/black-affiliate-marketing/Footer'

interface Props {
  params: { locale: string }
}

export default function BriefPage({ params: { locale } }: Props) {
  setRequestLocale(locale)
  
  return (
    <>
      <BlackAffiliateMarketing />
      <Footer />
    </>
  )
}
