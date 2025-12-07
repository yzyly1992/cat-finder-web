export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "Cat Finder",
    "description": "Lost your cat? Cat Finder app plays special sounds that cats love to help guide them back home. Features include cat-approved sounds, voice recording, search area tracking, and loop functionality.",
    "applicationCategory": "Lifestyle",
    "operatingSystem": ["iOS", "Android"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "15000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "creator": {
      "@type": "Organization",
      "name": "Cat Finder Team"
    },
    "downloadUrl": [
      "https://apps.apple.com/app/id6747648400"
    ],
    "screenshot": "/cute-cat-with-owner.webp",
    "featureList": [
      "Special cat-approved sounds",
      "Voice recording functionality",
      "Search area tracking",
      "Loop playback",
      "Easy-to-use interface",
      "No ads or subscriptions"
    ]
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cat Finder",
    "url": "https://catfinder.qzz.io",
    "logo": "https://catfinder.qzz.io/icon.png",
    "sameAs": [
      "https://apps.apple.com/app/id6747648400"
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Cat Finder",
    "url": "https://catfinder.qzz.io",
    "description": "Find your lost cat with special sounds that cats love",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://catfinder.qzz.io/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
    </>
  );
}
