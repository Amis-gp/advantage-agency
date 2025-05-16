import { setRequestLocale } from 'next-intl/server'
import LeadMagnets from '@/components/blog/LeadMagnets'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface Props {
  params: { locale: string }
}

export default function ColdEmailAutomationPage({ params }: Props) {
  setRequestLocale(params.locale)
  
  return (
    <div>
      <Header />
      <LeadMagnets />
      <Footer />
    </div>
  )
}