# Functional Spec: Header/Nav

## User Story

As a **visitor** to La Pandilla Perfecta's website, I want to **easily navigate between different sections** so that I can **quickly find the information I need** (services, brands, location, contact).

## Acceptance Criteria

### Desktop Navigation

**GIVEN** I'm viewing the site on desktop (≥768px)
**WHEN** I scroll through the page
**THEN** the header remains fixed at the top with horizontal navigation links

**GIVEN** I click on a navigation link (e.g., "Servicios")
**WHEN** the link is clicked
**THEN** the page smoothly scrolls to that section

**GIVEN** I hover over a navigation link
**WHEN** my cursor is over the link
**THEN** the link shows a visual hover state (color change or underline)

### Mobile Navigation

**GIVEN** I'm viewing the site on mobile (<768px)
**WHEN** the page loads
**THEN** I see a hamburger menu icon instead of full navigation links

**GIVEN** I tap the hamburger menu icon
**WHEN** the icon is tapped
**THEN** a mobile menu slides in/appears with all navigation links

**GIVEN** the mobile menu is open and I tap a link
**WHEN** the link is tapped
**THEN** the menu closes and the page scrolls to the selected section

### Logo/Brand

**GIVEN** I'm on any part of the page
**WHEN** I view the header
**THEN** I see "La Pandilla Perfecta" logo/name prominently displayed

**GIVEN** I click on the logo/name
**WHEN** the logo is clicked
**THEN** the page scrolls back to the top (Hero section)

## Inputs

- **Navigation links:** Array of sections with id and display name
  - Inicio (Hero)
  - Servicios
  - Marcas
  - Ubicación (future)
  - Contacto (future)

## Expected Output

### Desktop View
```
┌──────────────────────────────────────────────────────────┐
│ 🐾 La Pandilla Perfecta    Inicio Servicios Marcas     │
└──────────────────────────────────────────────────────────┘
```

### Mobile View (Closed)
```
┌──────────────────────────────────┐
│ 🐾 La Pandilla Perfecta      ☰  │
└──────────────────────────────────┘
```

### Mobile View (Open)
```
┌──────────────────────────────────┐
│ 🐾 La Pandilla Perfecta      ✕  │
├──────────────────────────────────┤
│                                  │
│  Inicio                          │
│  Servicios                       │
│  Marcas                          │
│  Contacto                        │
│                                  │
└──────────────────────────────────┘
```

## Edge Cases

- **Case 1: Clicking link to already-visible section**
  - Behavior: Still scroll to section top, ensuring proper alignment

- **Case 2: Clicking logo when already at top**
  - Behavior: No scroll needed, no error

- **Case 3: Mobile menu open when resizing to desktop**
  - Behavior: Menu auto-closes on resize to desktop breakpoint

- **Case 4: Links to non-existent sections (Ubicación, Contacto not yet implemented)**
  - Behavior: Links visible but scroll to bottom or show gracefully (can add later)

## Success Metrics

- ✅ Header is visible and fixed at top on all screen sizes
- ✅ All navigation links work and scroll smoothly
- ✅ Mobile menu opens/closes correctly
- ✅ Logo/name is visible and clickable
- ✅ Design is consistent with brand palette
- ✅ Navigation is accessible (keyboard navigation, semantic HTML)
