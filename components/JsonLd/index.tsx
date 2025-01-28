import JsonLdEn from './en'
import JsonLdUk from './uk'

export default function JsonLd({ locale }: { locale: string }) {
  if (locale === 'uk') {
    return <JsonLdUk />
  }
  return <JsonLdEn />
}