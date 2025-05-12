import { setRequestLocale } from 'next-intl/server'
import CasesComponent from '@/components/cases/Cases'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface Props {
  params: { locale: string }
}

export default function BlogPage({ params }: Props) {
  setRequestLocale(params.locale)
  
  return (
    <div>
      <Header />
      <CasesComponent params={params} />
      <Footer />
    </div>
  )
}