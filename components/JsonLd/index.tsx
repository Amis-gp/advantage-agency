import JsonLdEn from './en'
import JsonLdUk from './ua'

export default function JsonLd({ locale }: { locale: string }) {
  if (locale === 'ua') {
    return <JsonLdUk />
  }
  return <JsonLdEn />
}