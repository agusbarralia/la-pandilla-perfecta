# Technical Design: SEO Básico

## Implementation Strategy

### 1. Enhance BaseLayout.astro `<head>`

Add meta tags in this order:
```html
<head>
  <!-- Existing -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Enhanced Basic SEO -->
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={canonicalURL} />

  <!-- Open Graph (Facebook, WhatsApp, LinkedIn) -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonicalURL} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:locale" content="es_AR" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={canonicalURL} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />

  <!-- Favicon (already exists) -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</head>
```

### 2. Add Structured Data Component

Create: `src/components/StructuredData.astro`

```typescript
// JSON-LD Schema: LocalBusiness > PetStore
{
  "@context": "https://schema.org",
  "@type": "PetStore",
  "name": "La Pandilla Perfecta",
  "image": [canonicalURL + "/og-image.jpg"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Yerbal 547",
    "addressLocality": "Ciudad Autónoma de Buenos Aires",
    "addressRegion": "CABA",
    "postalCode": "",
    "addressCountry": "AR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -34.xxxx,  // Get from Google Maps
    "longitude": -58.xxxx
  },
  "url": canonicalURL,
  "telephone": "+541156936377",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "13:00"
    }
  ]
}
```

### 3. Update config.ts

Add SEO-specific config:
```typescript
export const SEO_CONFIG = {
  siteName: 'La Pandilla Perfecta',
  siteUrl: 'https://lapandillaperfecta.com.ar', // Update with real domain
  defaultTitle: 'La Pandilla Perfecta - Pet Shop en CABA',
  defaultDescription: '🐾 Pet shop en Buenos Aires. Alimento premium, peluquería y lavado canino. Yerbal 547, CABA. ¡Visitanos!',
  ogImage: '/og-image.jpg', // Need to create this
  twitterHandle: '', // If available
};
```

### 4. OG Image

**Option 1 (Quick)**: Use hero image
- Copy hero-placeholder.jpg to public/og-image.jpg
- Resize to 1200x630px (OG standard)

**Option 2 (Better)**: Create branded OG image
- 1200x630px
- Logo + tagline + address
- Background: brand colors

## File Changes

### Modified Files
- `src/layouts/BaseLayout.astro` - Add all meta tags
- `src/lib/config.ts` - Add SEO_CONFIG

### New Files
- `src/components/StructuredData.astro` - JSON-LD component
- `public/og-image.jpg` - OG image (1200x630)

## Testing

### Tools
1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **Schema Markup Validator**: https://validator.schema.org/
4. **Google Rich Results Test**: https://search.google.com/test/rich-results

### Checklist
- [ ] OG tags appear in Facebook debugger
- [ ] Twitter card preview works
- [ ] JSON-LD validates without errors
- [ ] No console errors
- [ ] Title and description appropriate length
