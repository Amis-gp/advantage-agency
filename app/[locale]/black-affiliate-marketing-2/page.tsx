import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import dynamic from 'next/dynamic'

// Імпортуємо клієнтський компонент
const BlackAffiliateMarketing = dynamic(() => import('@/components/black-affiliate-marketing-2/ClientPage'), { ssr: true })

const Footer = dynamic(
  () => import('@/components/black-affiliate-marketing/Footer'),
  { ssr: true }
)

interface Props {
  params: { locale: string }
}

// Метадані сторінки
export { metadata } from './metadata'

export default function BlackAffiliatePage({ params: { locale } }: Props) {
  setRequestLocale(locale)
  
  return (
    <>
      <BlackAffiliateMarketing />
      <Footer />
    </>
  )
}
