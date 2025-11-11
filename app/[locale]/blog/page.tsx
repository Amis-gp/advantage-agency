import { setRequestLocale } from 'next-intl/server'
import BlogComponent from '@/components/blog/Blog'
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
      <BlogComponent params={params} />
      <Footer />
    </div>
  )
}