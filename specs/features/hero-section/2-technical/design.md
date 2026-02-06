# Hero Section - Technical Design

## Architecture

### Component Structure
```
src/
├── components/
│   └── Hero.astro          # Hero section component
├── pages/
│   └── index.astro         # Import Hero into homepage
└── assets/
    └── images/
        └── hero-placeholder.jpg  # Temporary hero image
```

### Component API

**Hero.astro**
```typescript
interface Props {
  title?: string;
  slogan?: string;
  ctaText?: string;
  ctaLink?: string;
  imageUrl?: string;
  imageAlt?: string;
}
```

Props con defaults desde `src/lib/config.ts`.

---

## Implementation Details

### 1. Hero.astro Component

**Structure:**
- Section wrapper con clases Tailwind
- Background image (con overlay si es necesario)
- Text content (h1 + p + button)
- Responsive classes

**Key decisions:**
- Use `bg-[url()]` utility o `<img>` con `object-cover`?
  - **Decision:** `<img>` absoluto con overlay, mejor para optimización de imágenes de Astro
- Overlay gradient: `bg-gradient-to-b from-black/40 to-black/20` para contraste de texto
- Height: `min-h-screen` en mobile, `h-[80vh]` en desktop

**Color usage:**
- Background overlay: usa `bg-primary/80` (verde con opacidad)
- CTA button: `bg-primary hover:bg-primary/90`
- Text: `text-white` para contraste sobre imagen oscurecida

---

### 2. Image Optimization

**Astro Image Component:**
```astro
import { Image } from 'astro:assets';
import heroImage from '../assets/images/hero-placeholder.jpg';

<Image
  src={heroImage}
  alt={imageAlt}
  class="absolute inset-0 w-full h-full object-cover"
  widths={[320, 640, 1024, 1920]}
  sizes="100vw"
  format="webp"
  quality={80}
/>
```

**Placeholder image:**
- Download high-quality pet image (Unsplash)
- Store in `src/assets/images/`
- Let Astro handle optimization

---

### 3. Responsive Design

**Tailwind Breakpoints:**
```css
/* Mobile-first */
.hero-content {
  @apply px-4 py-16 text-center;
}

/* Tablet (md: 768px) */
@media (min-width: 768px) {
  .hero-content {
    @apply px-8 py-24;
  }
}

/* Desktop (lg: 1024px) */
@media (min-width: 1024px) {
  .hero-content {
    @apply px-12 py-32;
  }
}
```

**Using Tailwind utilities:**
- `min-h-screen md:h-[80vh]`
- `text-4xl md:text-5xl lg:text-6xl` (h1)
- `text-lg md:text-xl lg:text-2xl` (slogan)
- `px-4 md:px-8 lg:px-12`

---

### 4. CTA Button

**Styles:**
```astro
<a
  href={ctaLink}
  class="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
>
  {ctaText}
</a>
```

**Link behavior:**
- If `ctaLink` starts with `#` → scroll to section
- If `ctaLink` is WhatsApp → `https://wa.me/{phone}`
- Otherwise → normal link

---

### 5. Accessibility

**Semantic HTML:**
```html
<section aria-label="Hero section">
  <div>
    <h1>{title}</h1>
    <p>{slogan}</p>
    <a href={ctaLink}>{ctaText}</a>
  </div>
</section>
```

**Contrast:**
- Use overlay to ensure text contrast > 4.5:1
- Test with Chrome DevTools Lighthouse

**Keyboard navigation:**
- CTA button focusable with tab
- Focus ring visible

---

## Data Flow

1. **Config → Hero component:**
   ```astro
   ---
   import { SITE_CONFIG } from '../lib/config';

   const {
     title = SITE_CONFIG.name,
     slogan = SITE_CONFIG.slogan,
     ctaText = 'Contactanos',
     ctaLink = '#contacto',
   } = Astro.props;
   ---
   ```

2. **Hero → index.astro:**
   ```astro
   ---
   import Hero from '../components/Hero.astro';
   ---

   <BaseLayout>
     <Hero />
   </BaseLayout>
   ```

---

## Performance Considerations

1. **Image optimization:**
   - Astro Image component auto-generates WebP + srcset
   - Lazy loading for below-fold images (hero is above-fold, so `loading="eager"`)

2. **CSS:**
   - All styles inline via Tailwind (no extra CSS file)
   - Purged unused Tailwind classes in build

3. **No JavaScript:**
   - Pure HTML/CSS hero
   - CTA is simple `<a>` link (no JS needed for scroll or navigation)

---

## Testing

### Manual Testing Checklist
- [ ] Hero renders on homepage
- [ ] Text visible and readable on all devices
- [ ] Image loads and displays correctly
- [ ] CTA button works (click redirects)
- [ ] Hover effects work
- [ ] Keyboard navigation works (tab to CTA, enter to activate)
- [ ] Lighthouse score > 90 (all categories)

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## Edge Cases

1. **Image fails to load:**
   - Fallback: solid color background (primary color)
   - Alt text still visible

2. **Very long slogan:**
   - Text wraps naturally
   - Test with `max-w-2xl mx-auto` to constrain width

3. **No CTA link provided:**
   - Hide button if `ctaLink` is empty/null

---

## Future Enhancements (Out of Scope)

- Parallax scroll effect
- Animated text (fade-in, typing effect)
- Video background
- Multiple hero images (carousel)
- A/B testing different CTAs
