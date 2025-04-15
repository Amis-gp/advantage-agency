import { setRequestLocale } from 'next-intl/server'
import ColdEmailAutomationComponent from '@/components/blog/ColdEmailAutomation'
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
      <ColdEmailAutomationComponent />
      <Footer />
    </div>
  )
}