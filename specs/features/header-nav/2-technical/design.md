# Technical Design: Header/Nav

## Approach

**Strategy:** Create a fixed header component with responsive navigation. Use Astro for static HTML generation, minimal JavaScript for mobile menu toggle, and CSS for smooth scroll behavior.

**Key principles:**
- Mobile-first responsive design
- Semantic HTML (`<header>`, `<nav>`, `<ul>`, `<li>`)
- Minimal JavaScript (only for mobile menu toggle)
- Smooth scroll with CSS `scroll-behavior: smooth`
- Accessibility (ARIA labels, keyboard navigation)

## Components

### 1. Header.astro (`src/components/Header.astro`)
- **Purpose:** Main navigation header component
- **Props:**
  - `navItems?`: Array of navigation items (optional, defaults to config)
- **Structure:**
  - Fixed position at top (`fixed top-0 z-50`)
  - Contains logo/brand name (left)
  - Contains nav menu (right)
  - Desktop: horizontal list
  - Mobile: hamburger button + slide-in menu

### 2. Navigation config (`src/lib/config.ts`)
- **Purpose:** Centralized navigation data
- **Data:**
  ```typescript
  export const NAV_ITEMS = [
    { id: 'hero', label: 'Inicio', href: '#' },
    { id: 'servicios', label: 'Servicios', href: '#servicios' },
    { id: 'marcas', label: 'Marcas', href: '#marcas' },
    // Future: Ubicación, Contacto
  ];
  ```

### 3. Mobile menu script (inline in Header.astro)
- **Purpose:** Toggle mobile menu open/close
- **Behavior:**
  - Click hamburger → add class `menu-open` to nav
  - Click close or nav link → remove class `menu-open`
  - Resize to desktop → auto-close menu

## Data Flow

```
config.ts (NAV_ITEMS)
    ↓
Header.astro (imports NAV_ITEMS)
    ↓
Renders:
  - Logo (clickable → scrolls to top)
  - Desktop: horizontal nav links
  - Mobile: hamburger → slide-in menu
    ↓
User clicks link → smooth scroll to section
```

## Key Decisions

### Decision 1: Fixed vs Sticky Header
- **Chosen:** Fixed (`position: fixed`)
- **Rationale:**
  - Always accessible regardless of scroll position
  - Simpler implementation than sticky
  - Consistent behavior across browsers

### Decision 2: Mobile Menu Implementation
- **Chosen:** Slide-in overlay menu with minimal JS
- **Rationale:**
  - Better UX than dropdown
  - Minimal JavaScript (just toggle class)
  - No external dependencies
  - Easy to style with Tailwind

### Decision 3: Smooth Scroll
- **Chosen:** CSS `scroll-behavior: smooth` in global.css
- **Rationale:**
  - Zero JavaScript required
  - Works natively in modern browsers
  - Fallback: instant scroll (acceptable)

### Decision 4: Logo Format
- **Chosen:** Text with emoji (🐾 La Pandilla Perfecta)
- **Rationale:**
  - No logo image provided yet
  - Consistent with Hero section
  - Easy to replace later with `<Image>` component

### Decision 5: Nav Items Source
- **Chosen:** Centralized in config.ts
- **Rationale:**
  - Single source of truth
  - Easy to add/remove sections
  - Consistent with SERVICES and BRANDS pattern

## Implementation Details

### HTML Structure
```html
<header class="fixed top-0 w-full z-50 bg-white shadow-md">
  <div class="container">
    <!-- Logo -->
    <a href="#" class="logo">🐾 La Pandilla Perfecta</a>

    <!-- Desktop Nav -->
    <nav class="hidden md:flex">
      <ul>
        <li><a href="#servicios">Servicios</a></li>
        ...
      </ul>
    </nav>

    <!-- Mobile Hamburger -->
    <button class="md:hidden" id="menu-toggle">☰</button>

    <!-- Mobile Menu -->
    <nav class="mobile-menu">
      <button id="menu-close">✕</button>
      <ul>
        <li><a href="#servicios">Servicios</a></li>
        ...
      </ul>
    </nav>
  </div>
</header>
```

### Styling
- **Colors:** White background, primary green for hover/active states
- **Height:** ~64px desktop, ~56px mobile
- **Shadow:** Subtle shadow for depth (`shadow-md`)
- **Typography:** Font from global styles
- **Spacing:** Consistent padding/margin using Tailwind

### Mobile Menu Animation
- **Approach:** CSS transition on transform
- **Closed:** `translate-x-full` (off-screen right)
- **Open:** `translate-x-0` (slide in)
- **Duration:** 300ms ease-in-out

## Constraints Respected

- ✅ **Astro-first:** Component built with Astro, minimal JS
- ✅ **Tailwind CSS:** All styling via Tailwind utilities
- ✅ **TypeScript:** Types for props and nav items
- ✅ **Brand colors:** Primary green (#27917B) for interactive elements
- ✅ **Responsive:** Mobile-first design (sm → md → lg breakpoints)
- ✅ **Performance:** Minimal JS, no external libraries
- ✅ **Accessibility:** Semantic HTML, ARIA labels, keyboard nav

## Testing Strategy

### Manual Testing
- ✅ Desktop: Links scroll to correct sections
- ✅ Desktop: Hover states work
- ✅ Mobile: Hamburger opens/closes menu
- ✅ Mobile: Links close menu and scroll to section
- ✅ Logo click scrolls to top
- ✅ Resize behavior (menu auto-closes on desktop)
- ✅ Keyboard navigation works (Tab, Enter)

### Build Testing
- ✅ `npm run build` succeeds
- ✅ No TypeScript errors
- ✅ No hydration errors
- ✅ Header renders on page

### Browser Testing
- ✅ Chrome/Safari/Firefox (latest)
- ✅ Mobile Safari/Chrome (iOS/Android)

## Future Enhancements (Post-MVP)

- Active section indicator (highlight current section in nav)
- Transparent header on Hero, solid on scroll
- Logo image instead of text+emoji
- Animation on scroll (hide/show header)
- Search functionality
