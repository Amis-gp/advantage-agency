export default function JsonLdEn() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Advantage Agency",
    "url": "https://www.advantage-agency.co/en",
    "logo": "https://www.advantage-agency.co/logo.svg",
    "description": "Digital Marketing Agency specializing in Google Ads, Facebook Ads, Black Affiliate Marketing, Pre-landing Development, Email Marketing, and Data Parsing",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Poland"
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
          "name": "Google Ads Management",
          "description": "Professional Google Ads campaign management"
        },
        {
          "@type": "Offer",
          "name": "Facebook Ads",
          "description": "Facebook advertising services"
        },
        {
          "@type": "Offer",
          "name": "Black Affiliate Marketing",
          "description": "Professional affiliate marketing services"
        },
        {
          "@type": "Offer",
          "name": "Pre-landing Development",
          "description": "Custom pre-landing page development"
        },
        {
          "@type": "Offer",
          "name": "Email Marketing",
          "description": "Professional email marketing services"
        },
        {
          "@type": "Offer",
          "name": "Data Parsing",
          "description": "Professional data parsing services"
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
