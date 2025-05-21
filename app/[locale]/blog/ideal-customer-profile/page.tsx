import { setRequestLocale } from 'next-intl/server'
import IdealCustomerProfile from '@/components/blog/IdealCustomerProfile'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
interface Props {
  params: { locale: string }
}

export default function IdealCustomerProfilePage({ params: { locale } }: Props) {
  setRequestLocale(locale)
  
  return (
    <div>
      <Header />
      <IdealCustomerProfile />
      <Footer />
    </div>
  )
}