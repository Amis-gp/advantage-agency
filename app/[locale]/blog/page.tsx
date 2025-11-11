import { setRequestLocale } from 'next-intl/server'
import BlogComponent from '@/components/blog/Blog'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface Props {
  params: { locale: string }
}

<<<<<<< HEAD
export default function BlogPage({ params }: Props) {
  setRequestLocale(params.locale)
  
=======
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: 'Blog | Advantage Agency',
    description: 'Explore our latest articles, insights, and case studies on media buying, digital marketing, and performance marketing.',
    openGraph: {
      title: 'Blog | Advantage Agency',
      description: 'Explore our latest articles, insights, and case studies',
      url: `https://www.advantage-agency.co/${locale}/blog`,
      siteName: 'Advantage Agency',
      locale: 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `https://www.advantage-agency.co/${locale}/blog`,
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

>>>>>>> 7bedae81c93aa6c955dd3633165e887bbb01c7a6
  return (
    <div>
      <Header />
      <BlogComponent params={params} />
      <Footer />
    </div>
  )
}