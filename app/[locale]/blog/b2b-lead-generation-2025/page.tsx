import { setRequestLocale } from 'next-intl/server'
import B2bLeadGeneration2025 from '@/components/blog/B2bLeadGeneration2025'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
interface Props {
  params: { locale: string }
}

export default function B2bLeadGeneration2025Page({ params: { locale } }: Props) {
  setRequestLocale(locale)
  
  return (
    <div>
      <Header />
      <B2bLeadGeneration2025 />
      <Footer />
    </div>
  )
}