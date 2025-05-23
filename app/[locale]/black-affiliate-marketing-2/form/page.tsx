import Footer from '@/components/black-affiliate-marketing-2/Footer'
import FormSection from '@/components/black-affiliate-marketing-2/Form'
import { setRequestLocale } from 'next-intl/server'


interface Props {
  params: { locale: string }
}

export default function BriefPage({ params: { locale } }: Props) {
  setRequestLocale(locale)
  
  return (
    <>
      <FormSection />
      <Footer />
    </>
  )
}
