# Project Rules - La Pandilla Perfecta

## Project Context

- **Type:** Landing page / sitio informativo para pet shop
- **Business:** "La Pandilla Perfecta" - Pet shop
- **Target audience:** Dueños de mascotas buscando servicios, productos y info del negocio
- **Language:** Contenido en español (Argentina)
- **Scope actual:** Landing page informativa (single page o multi-page simple)
- **Scope futuro:** Sistema de reserva de turnos para lavado/peluquería canina

---

## Architectural Decisions

| Decision | Choice | Rationale | Date |
|----------|--------|-----------|------|
| Framework | **Astro** | Static landing, zero JS by default, excellent SEO, perfect for content-focused sites | 2026-02-05 |
| Styling | **Tailwind CSS** | Rapid development, utility-first, excellent DX, easy responsive design | 2026-02-05 |
| Language | **TypeScript** | Type safety, better DX, catches bugs early | 2026-02-05 |
| Hosting | **Netlify/Vercel** | Free tier, CDN, auto-deploy from git, perfect for static sites | 2026-02-05 |
| Package Manager | **npm** | Standard, comes with Node, simple | 2026-02-05 |
| Repo strategy | **Separate repos** | Landing (this repo) + Booking app (future Next.js repo). Separation of concerns, independent deploys | 2026-02-05 |
| Lenguaje contenido | **Español (AR)** | Negocio local argentino | 2026-02-05 |

---

## Content Sections (Landing Page)

Secciones planificadas para la landing:

1. **Hero** - Imagen principal, nombre del negocio ("La Pandilla Perfecta"), slogan ("El espacio para tu peludo")
2. **Servicios** - Lista de servicios ofrecidos (venta, peluquería, lavado, etc.)
3. **Marcas** - Marcas de alimento/productos con las que trabajan
4. **Ubicación** - Dirección, mapa embebido (Google Maps)
5. **Contacto** - Teléfono, WhatsApp, redes sociales, horarios
6. **Sobre nosotros** - Historia o info del negocio (opcional)
7. **Galería** - Fotos del local/mascotas (opcional)

---

## Design Rules

### Branding
- **Nombre:** La Pandilla Perfecta
- **Slogan:** "El espacio para tu peludo"
- **Paleta de colores:**
  - Primary (verde): `#27917B`
  - Secondary (beige): `#957659`
  - Neutral (blanco): `#FFFFFF`
- **Tipografía:** Por definir (usar system fonts por ahora)
- **Logo:** Por definir

### Technical
- **Responsive:** Mobile-first obligatorio
- **Performance:** Lighthouse score > 90 en todas las categorías
- **Accessibility:** Semantic HTML, alt text en imágenes, contraste adecuado (verificar con colores definidos)
- **SEO:** Meta tags, Open Graph, structured data para negocio local

---

## Development Rules

### Code
- Componentes reutilizables y modulares
- Nombres de archivos en kebab-case
- CSS/styles colocados junto al componente o en archivos dedicados
- No hardcodear contenido en componentes: usar datos estructurados (JSON/config)
- Imágenes optimizadas (WebP cuando sea posible)

### Content
- Todo el texto visible al usuario en **español**
- Código, comments, commits y specs en **inglés o español** (consistencia)
- Datos del negocio (dirección, teléfono, horarios) centralizados en un archivo de config

### Git
- Feature branches desde `develop`
- Naming: `feature/kebab-case-name`
- NUNCA commit directo a `main` o `develop`
- Commits descriptivos en inglés

---

## Constraints

- No backend por ahora (landing estática)
- No base de datos
- No autenticación
- Formulario de contacto: redirect a WhatsApp o mailto (sin server)
- Reserva de turnos: FUERA de scope del MVP

---

## Known Issues & Quirks

_(none yet)_

---

## Decisions Log

### 2026-02-05: Tech Stack & Architecture

**Decision:** Use Astro + Tailwind for static landing, separate repo for future booking app

**Context:**
- Current need: Simple informational landing page
- Future need: Booking system with backend/DB/auth
- Client wants easy maintenance

**Options considered:**
1. **Full Next.js now** - Overkill for static content, heavier bundle, more complex
2. **Plain HTML/CSS/JS** - Too basic, harder to scale, no framework benefits
3. **Astro (chosen)** - Perfect middle ground, static output, expandable

**Rationale:**
- Astro generates pure HTML (fast, SEO-friendly, no hydration overhead)
- Tailwind enables rapid UI development
- TypeScript catches errors early
- Free hosting on Netlify/Vercel with CDN
- When booking system is needed, create separate Next.js repo and link from CTA
- Two repos = separation of concerns, independent deploys, right tool for each job

**Consequences:**
- ✅ Blazing fast landing page
- ✅ Free hosting forever
- ✅ Easy for client to maintain
- ✅ Clear upgrade path (link to booking app when ready)
- ⚠️ Two repos to manage (but cleaner architecture)
