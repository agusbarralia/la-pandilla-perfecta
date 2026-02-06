# Functional Spec: Footer

## User Story

As a **visitor** to La Pandilla Perfecta's website, I want to **find essential contact information and navigation links at the bottom of the page** so that I can **easily reach out or navigate to other sections without scrolling back up**.

## Acceptance Criteria

### Contact Information

**GIVEN** I scroll to the bottom of the page
**WHEN** I view the footer
**THEN** I see:
- Business name (La Pandilla Perfecta)
- Phone number
- Email address
- Physical address
- Business hours

### Navigation Links

**GIVEN** I'm viewing the footer
**WHEN** I look for navigation options
**THEN** I see links to all main sections (Inicio, Servicios, Marcas, etc.)

**GIVEN** I click on a footer navigation link
**WHEN** the link is clicked
**THEN** the page smoothly scrolls to that section (same as header nav)

### Social Media Links

**GIVEN** I'm viewing the footer
**WHEN** I look for social media
**THEN** I see clickable icons/links for:
- Instagram
- Facebook
- (Future: WhatsApp Business)

**GIVEN** I click on a social media link
**WHEN** the link is clicked
**THEN** it opens in a new tab

### Copyright

**GIVEN** I view the footer
**WHEN** I scroll to the very bottom
**THEN** I see a copyright notice with the current year (e.g., "© 2026 La Pandilla Perfecta. Todos los derechos reservados.")

### Responsive Behavior

**GIVEN** I'm on mobile (<768px)
**WHEN** I view the footer
**THEN** content is stacked vertically with proper spacing

**GIVEN** I'm on desktop (≥768px)
**WHEN** I view the footer
**THEN** content is organized in columns (3-4 columns)

## Inputs

- **Contact info:** From CONTACT_INFO in config.ts
- **Nav links:** From NAV_ITEMS in config.ts
- **Social media:** From CONTACT_INFO.social in config.ts
- **Current year:** Dynamically generated with JavaScript

## Expected Output

### Desktop View (≥768px)
```
┌─────────────────────────────────────────────────────────────┐
│  La Pandilla Perfecta                                       │
│                                                               │
│  🐾 La Pandilla   │  Navegación      │  Contacto            │
│  Perfecta         │  • Inicio        │  📞 Teléfono         │
│                   │  • Servicios     │  📧 Email            │
│  Slogan o breve   │  • Marcas        │  📍 Dirección        │
│  descripción      │  • Ubicación     │  🕐 Horarios         │
│                   │  • Contacto      │                      │
│                   │                  │  🔗 Instagram        │
│                   │                  │  🔗 Facebook         │
│                                                               │
│  © 2026 La Pandilla Perfecta. Todos los derechos reservados. │
└─────────────────────────────────────────────────────────────┘
```

### Mobile View (<768px)
```
┌────────────────────────────┐
│  🐾 La Pandilla Perfecta  │
│                            │
│  Slogan breve              │
│                            │
│  Navegación                │
│  • Inicio                  │
│  • Servicios               │
│  • Marcas                  │
│                            │
│  Contacto                  │
│  📞 Teléfono               │
│  📧 Email                  │
│  📍 Dirección              │
│  🕐 Horarios               │
│                            │
│  Síguenos                  │
│  🔗 Instagram              │
│  🔗 Facebook               │
│                            │
│  © 2026 La Pandilla        │
│  Perfecta. Todos los       │
│  derechos reservados.      │
└────────────────────────────┘
```

## Edge Cases

- **Case 1: Missing social media links**
  - Behavior: If Instagram or Facebook URLs are empty/missing in config, don't show those links

- **Case 2: Long address**
  - Behavior: Address should wrap properly on multiple lines if needed

- **Case 3: Year update**
  - Behavior: Year in copyright should update automatically on January 1st (client-side JS)

## Success Metrics

- ✅ Footer is visible at the bottom of all pages
- ✅ All contact information is accurate and formatted
- ✅ All navigation links work correctly
- ✅ Social media links open in new tabs
- ✅ Copyright year is current and dynamic
- ✅ Layout is responsive (stacked mobile, columns desktop)
- ✅ Design matches brand palette and overall site aesthetic
- ✅ All text is readable with sufficient contrast
