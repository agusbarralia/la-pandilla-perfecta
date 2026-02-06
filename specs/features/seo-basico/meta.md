# Meta: SEO Básico

**Feature ID**: seo-basico
**Status**: ✅ Completed
**Priority**: P0 (MVP)
**Started**: 2026-02-06
**Completed**: 2026-02-06

## Purpose
Implementar SEO básico para mejorar la visibilidad en buscadores y la forma en que se comparte el sitio en redes sociales.

## Dependencies
- BaseLayout.astro (para agregar meta tags)
- config.ts (para centralizar datos SEO)

## Success Criteria
- [x] Favicon presente (ya existe)
- [x] Open Graph tags completos (redes sociales) - 7 tags
- [x] Twitter Card tags - 5 tags
- [x] Structured data JSON-LD (PetStore) - Complete schema
- [x] Canonical URL - Implemented
- [x] Meta robots - index, follow
- [ ] Validación con herramientas (pending user action after deployment)

## Outcome

**Result**: ✅ Complete SEO implementation

### What Was Added:

1. **SEO_CONFIG** in config.ts
   - Centralized SEO settings
   - Enhanced title and description

2. **StructuredData component**
   - JSON-LD with PetStore schema
   - Business info, address, hours, geo coordinates

3. **Enhanced BaseLayout**
   - 7 Open Graph tags
   - 5 Twitter Card tags
   - Canonical URL
   - Robots meta tag

4. **OG Image**
   - Copied to public/og-image.jpg
   - Ready for social sharing

### Testing:
- ✅ All meta tags present in HTML output
- ✅ JSON-LD validates correctly
- ⏳ Pending: External validation tools (requires deployment)

## Scope
- **In scope**: Meta tags, OG, Twitter Cards, JSON-LD, favicon ✅
- **Out of scope**: Sitemap XML (Astro auto-generates), robots.txt, analytics

## Timeline
- Specs: 5 min ✅
- Implementation: 15 min ✅
- Testing: 5 min ✅
