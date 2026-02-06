# Technical Design: Footer

## Approach

**Strategy:** Create a responsive footer component with multiple sections (brand, navigation, contact, social). Use Astro for static generation, data from config.ts, and minimal JavaScript for dynamic year.

**Key principles:**
- Responsive grid layout (stack mobile → columns desktop)
- Data-driven from config.ts
- Semantic HTML (`<footer>`, `<nav>`, `<address>`)
- Brand color background for visual hierarchy
- Conditional rendering for optional social links

## Components

### 1. Footer.astro (`src/components/Footer.astro`)
- **Purpose:** Main footer component with brand, nav, contact info, social links, and copyright
- **Props:** None (uses data from config.ts)
- **Structure:**
  - Brand section (logo, name, slogan)
  - Navigation links section
  - Contact info section (phone, email, address, hours)
  - Social media links section
  - Copyright bar at bottom

### 2. Data sources (`src/lib/config.ts`)
- **SITE_CONFIG:** name, slogan
- **CONTACT_INFO:** phone, email, address, hours, social
- **NAV_ITEMS:** navigation links

### 3. Dynamic year script (inline in Footer.astro)
- **Purpose:** Set current year in copyright
- **Behavior:** Get current year with `new Date().getFullYear()`

## Data Flow

```
config.ts (SITE_CONFIG, CONTACT_INFO, NAV_ITEMS)
    ↓
Footer.astro (imports data)
    ↓
Renders:
  - Brand section (name + slogan)
  - Nav links (from NAV_ITEMS)
  - Contact info (from CONTACT_INFO)
  - Social links (conditional, from CONTACT_INFO.social)
  - Copyright (dynamic year via JS)
    ↓
Integrated in BaseLayout (after slot)
```

## Key Decisions

### Decision 1: Background Color
- **Chosen:** Primary green (#27917B) with white text
- **Rationale:**
  - Strong visual separation from main content
  - Reinforces brand identity
  - Good contrast for readability
  - Consistent with brand palette

### Decision 2: Layout Structure
- **Chosen:** 3-column grid on desktop, stacked on mobile
- **Rationale:**
  - Clean organization (brand | nav | contact)
  - Easy to scan on desktop
  - Natural stacking on mobile
  - Standard footer pattern

### Decision 3: Social Media Icons
- **Chosen:** Text links with emojis (📱 Instagram, 📘 Facebook)
- **Rationale:**
  - No external icon library needed
  - Consistent with emoji usage in Hero and Services
  - Easy to replace with SVG icons later
  - Zero dependencies

### Decision 4: Contact Info Format
- **Chosen:** Use semantic `<address>` tag with structured data
- **Rationale:**
  - Semantic HTML for accessibility
  - Prepares for structured data (SEO)
  - Screen reader friendly
  - Standard HTML5 practice

### Decision 5: Dynamic Year
- **Chosen:** Client-side JavaScript with `new Date().getFullYear()`
- **Rationale:**
  - Simple, no build-time logic needed
  - Automatically updates every year
  - Minimal JS (~5 lines)
  - Works even if page cached

## Implementation Details

### HTML Structure
```html
<footer class="bg-primary text-white">
  <div class="container py-12">
    <!-- Grid: 3 columns desktop, stack mobile -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Brand Section -->
      <div>
        <h3>🐾 La Pandilla Perfecta</h3>
        <p>Slogan</p>
      </div>

      <!-- Navigation -->
      <div>
        <h4>Navegación</h4>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          ...
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4>Contacto</h4>
        <address>
          <p>📞 Phone</p>
          <p>📧 Email</p>
          <p>📍 Address</p>
        </address>
        <div>Social links</div>
      </div>
    </div>
  </div>

  <!-- Copyright Bar -->
  <div class="border-t border-white/20 py-4">
    <p>© <span id="current-year"></span> La Pandilla Perfecta</p>
  </div>
</footer>
```

### Styling
- **Background:** Primary green (`bg-primary`)
- **Text:** White (`text-white`)
- **Grid:** 1 column mobile → 3 columns desktop (`grid-cols-1 md:grid-cols-3`)
- **Spacing:** py-12 for main content, py-4 for copyright
- **Links:** Underline on hover, subtle transition
- **Border:** Subtle white border above copyright (`border-white/20`)

### Dynamic Year Script
```javascript
<script>
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }
</script>
```

## Constraints Respected

- ✅ **Astro-first:** Component built with Astro, minimal JS
- ✅ **Tailwind CSS:** All styling via Tailwind utilities
- ✅ **TypeScript:** Types for props (even if none used)
- ✅ **Brand colors:** Primary green background, consistent with palette
- ✅ **Responsive:** Mobile-first design (sm → md → lg breakpoints)
- ✅ **Performance:** Minimal JS (~5 lines for year), no external libraries
- ✅ **Accessibility:** Semantic HTML (`<footer>`, `<address>`, `<nav>`)
- ✅ **Data-driven:** All content from config.ts

## Testing Strategy

### Manual Testing
- ✅ Desktop: 3-column layout displays correctly
- ✅ Mobile: Content stacks vertically with proper spacing
- ✅ All navigation links scroll to correct sections
- ✅ Social media links open in new tabs (when URLs provided)
- ✅ Copyright year displays current year
- ✅ Text is readable with sufficient contrast
- ✅ Address and contact info formatted correctly

### Build Testing
- ✅ `npm run build` succeeds
- ✅ No TypeScript errors
- ✅ Footer renders at bottom of page

### Browser Testing
- ✅ Chrome/Safari/Firefox (latest)
- ✅ Mobile Safari/Chrome (iOS/Android)

## Future Enhancements (Post-MVP)

- Replace emoji icons with SVG icons
- Add newsletter signup form
- Add quick links section
- Add back-to-top button
- Add business hours in structured format for Google
- Integrate WhatsApp Business link/button
