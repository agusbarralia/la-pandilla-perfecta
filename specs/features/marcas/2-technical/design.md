# Marcas - Technical Design

## Architecture

### Component Structure
```
src/
├── components/
│   └── Brands.astro            # Main brands section
├── pages/
│   └── index.astro             # Import Brands into homepage
├── assets/
│   └── images/
│       └── brands/
│           ├── eukanuba.svg    # Brand logos (or placeholders)
│           ├── royal-canin.svg
│           ├── golocan.svg
│           ├── unik.svg
│           ├── vitalcan.svg
│           └── pro-plan.svg
└── lib/
    └── config.ts               # Add BRANDS constant
```

### Component API

**Brands.astro**
```typescript
interface Props {
  title?: string;
  subtitle?: string;
}
```

---

## Implementation Details

### 1. Brands Data (config.ts)

Add to `src/lib/config.ts`:

```typescript
export const BRANDS = [
  {
    id: 'eukanuba',
    name: 'Eukanuba',
    logo: '/images/brands/eukanuba.svg', // or import from assets
  },
  {
    id: 'royal-canin',
    name: 'Royal Canin',
    logo: '/images/brands/royal-canin.svg',
  },
  {
    id: 'golocan',
    name: 'Golocan',
    logo: '/images/brands/golocan.svg',
  },
  {
    id: 'unik',
    name: 'Unik',
    logo: '/images/brands/unik.svg',
  },
  {
    id: 'vitalcan',
    name: 'Vitalcan',
    logo: '/images/brands/vitalcan.svg',
  },
  {
    id: 'pro-plan',
    name: 'Pro Plan',
    logo: '/images/brands/pro-plan.svg',
  },
];
```

---

### 2. Logo Strategy

**Option A: Real SVG logos (Preferred)**
- Download official logos from brand websites or logo databases
- Store in `src/assets/images/brands/`
- Use Astro's Image component for optimization

**Option B: Placeholder badges (Fallback)**
- Text-based placeholders with brand names
- Styled with typography and borders
- Convert to real logos later

**Decision:** Try Option A first. If logos not easily available, use Option B temporarily.

---

### 3. Brands.astro Component

**Structure:**
- Section with pink background
- Container with max-width
- Heading + subtitle
- Grid of brand logos
- Grayscale filter with hover effect

**Example:**
```astro
---
import { BRANDS } from '../lib/config';

interface Props {
  title?: string;
  subtitle?: string;
}

const {
  title = 'Trabajamos con las mejores marcas',
  subtitle = 'Alimento premium para el bienestar de tu mascota',
} = Astro.props;
---

<section class="py-16 md:py-24 bg-pink-100" id="marcas">
  <div class="max-w-7xl mx-auto px-4 md:px-8">
    <!-- Heading -->
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      {subtitle && <p class="text-lg text-gray-600">{subtitle}</p>}
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 items-center">
      {BRANDS.map((brand) => (
        <div class="flex items-center justify-center">
          <!-- Real logo or placeholder -->
          <img
            src={brand.logo}
            alt={`Logo de ${brand.name}`}
            class="h-12 md:h-16 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  </div>
</section>
```

---

### 4. Styling Decisions

### Background Color
Based on reference image (pink):
- Tailwind: `bg-pink-100` or custom color
- Custom pink: `#F0C9D9`, `#E8B4CD`, `#F5D5E5`
- **Decision:** Use Tailwind `bg-pink-50` (lightest) or `bg-pink-100`

Add to `global.css` if custom:
```css
@theme {
  --color-brand-pink: #F0C9D9;
}
```

### Logo Styling
```css
/* Grayscale + opacity by default */
.brand-logo {
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 300ms ease;
}

/* Color + full opacity on hover */
.brand-logo:hover {
  filter: grayscale(0%);
  opacity: 1;
}
```

**Tailwind classes:**
```html
class="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
```

### Grid Layout
- Mobile: `grid-cols-2` (2 columnas, 3 filas)
- Tablet/Desktop: `grid-cols-3` (3 columnas, 2 filas)
- Gap: `gap-8 md:gap-12` (responsive spacing)
- Alignment: `items-center justify-center` (centrado vertical y horizontal)

---

### 5. Logo Implementation

**If using real logos (Option A):**

Download logos and store in `src/assets/images/brands/`:

```astro
---
import eukanuba from '../assets/images/brands/eukanuba.svg';
import royalCanin from '../assets/images/brands/royal-canin.svg';
// ... etc

const BRANDS = [
  { id: 'eukanuba', name: 'Eukanuba', logo: eukanuba },
  { id: 'royal-canin', name: 'Royal Canin', logo: royalCanin },
  // ...
];
---

{BRANDS.map((brand) => (
  <img src={brand.logo} alt={`Logo de ${brand.name}`} />
))}
```

**If using placeholders (Option B):**

```astro
<div class="bg-white rounded-lg border-2 border-gray-300 px-6 py-4 hover:border-primary transition-colors">
  <p class="text-xl font-bold text-gray-800 text-center">{brand.name}</p>
</div>
```

---

## Performance Considerations

1. **Logo optimization:**
   - Prefer SVG (vector, scales perfectly, small size)
   - If PNG: optimize and use WebP
   - Lazy load if below fold (but brands usually above fold after hero+services)

2. **CSS-only effects:**
   - Grayscale filter is CSS, no JS
   - Hover transition is CSS, no JS

---

## Responsive Breakpoints

- **Mobile:** < 768px → 2 columnas
- **Tablet/Desktop:** ≥ 768px → 3 columnas

---

## Testing

### Manual Testing Checklist
- [ ] Brands section renders below services
- [ ] All 6 brand logos visible
- [ ] Grid responsive (2→3 cols)
- [ ] Grayscale effect applied
- [ ] Hover reveals color
- [ ] Pink background matches design
- [ ] Build succeeds

### Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari
- [ ] Chrome Mobile

---

## Logo Sources (Research)

**Where to find logos:**
1. Official brand websites (footer, press kit, about page)
2. Wikimedia Commons (many brand logos)
3. Logo databases: Brandsoftheworld.com, Seeklogo.com
4. Direct image search: "[Brand name] logo svg"

**Licenses:**
- Brand logos typically trademarked but OK to use for showing partnerships
- Not for resale or modification
- Fair use: showing we carry these brands

---

## Future Enhancements (Out of Scope)

- Link logos to product category pages
- Carousel if >10 brands
- Scroll animations (fade-in)
- Hover tooltip with brand description
