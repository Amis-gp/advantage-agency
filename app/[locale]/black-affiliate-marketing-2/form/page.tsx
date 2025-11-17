import Footer from '@/components/black-affiliate-marketing/Footer'
import FormSection from '@/components/black-affiliate-marketing/Form'
import { setRequestLocale } from 'next-intl/server'
import { Suspense } from 'react'


interface Props {
  params: { locale: string }
}

export default function BriefPage({ params: { locale } }: Props) {
  setRequestLocale(locale)
  
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <FormSection />
      </Suspense>
      <Footer />
    </>
  )
}
