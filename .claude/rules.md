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
| Tech stack | **Pendiente** | Definir antes de primera feature | - |
| Lenguaje contenido | Español (AR) | Negocio local argentino | 2026-02-05 |

---

## Content Sections (Landing Page)

Secciones planificadas para la landing:

1. **Hero** - Imagen principal, nombre del negocio, tagline
2. **Servicios** - Lista de servicios ofrecidos (venta, peluquería, lavado, etc.)
3. **Marcas** - Marcas de alimento/productos con las que trabajan
4. **Ubicación** - Dirección, mapa embebido (Google Maps)
5. **Contacto** - Teléfono, WhatsApp, redes sociales, horarios
6. **Sobre nosotros** - Historia o info del negocio (opcional)
7. **Galería** - Fotos del local/mascotas (opcional)

---

## Design Rules

- **Branding:** Pendiente (colores, tipografía, logo)
- **Responsive:** Mobile-first obligatorio
- **Performance:** Lighthouse score > 90 en todas las categorías
- **Accessibility:** Semantic HTML, alt text en imágenes, contraste adecuado
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

_(decisions will be logged here as they are made)_
