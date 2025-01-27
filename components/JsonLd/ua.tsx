export default function JsonLdUk() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Advantage Agency",
    "url": "https://www.advantage-agency.co/uk",
    "logo": "https://www.advantage-agency.co/logo.svg",
    "description": "Агенція цифрового маркетингу, що спеціалізується на Google Ads, Facebook Ads, Black Affiliate Marketing, розробці прелендінгів, email маркетингу та парсингу даних",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Україна"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@advantage-agency.co",
      "availableLanguage": ["English", "Ukrainian"]
    },
    "offers": {
      "@type": "AggregateOffer",
      "offers": [
        {
          "@type": "Offer",
          "name": "Управління Google Ads",
          "description": "Професійне управління рекламними кампаніями Google Ads"
        },
        {
          "@type": "Offer",
          "name": "Facebook Ads",
          "description": "Послуги з реклами у Facebook"
        },
        {
          "@type": "Offer",
          "name": "Black Affiliate Marketing",
          "description": "Професійні послуги з афілійованого маркетингу"
        },
        {
          "@type": "Offer",
          "name": "Розробка прелендінгів",
          "description": "Розробка кастомних прелендінгів"
        },
        {
          "@type": "Offer",
          "name": "Email маркетинг",
          "description": "Професійні послуги з email маркетингу"
        },
        {
          "@type": "Offer",
          "name": "Парсинг даних",
          "description": "Професійні послуги з парсингу даних"
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
