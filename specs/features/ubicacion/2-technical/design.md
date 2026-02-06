# Technical Design: Ubicación

## Approach

Crear sección independiente con mapa de Google Maps embebido y dirección completa. Componente Astro simple que integra con config existente y se agrega a la página principal.

---

## Architecture

- **Component:** `src/components/Ubicacion.astro`
- **Integration:** Agregar `<Ubicacion />` en `src/pages/index.astro` (después de Marcas, antes de Footer)
- **Config:** Agregar dirección a `src/lib/config.ts` bajo `CONTACT_INFO.address`

---

## Implementation Details

### 1. Config Update

Actualizar `src/lib/config.ts`:

```typescript
export const CONTACT_INFO = {
  // ... existing fields
  address: {
    street: 'Yerbal 547',
    city: 'Ciudad Autónoma de Buenos Aires',
    province: 'CABA',
    fullAddress: 'Yerbal 547, Ciudad Autónoma de Buenos Aires, CABA',
  },
  // ...
}
```

### 2. Component Structure

**Ubicacion.astro:**
- Grid responsive (2 cols desktop, stack mobile)
- Columna izquierda: Título + dirección + CTA button
- Columna derecha: iframe de Google Maps
- Lazy loading del iframe (`loading="lazy"`)
- Links externos seguros (`rel="noopener noreferrer"`)

### 3. Google Maps Integration

**Opciones:**

**Opción A: Google Maps Embed API** (requiere API key - para producción)
- Registrar proyecto en Google Cloud Console
- Habilitar Maps Embed API
- Obtener API key y restringir a dominio

**Opción B: Simple iframe embed** (sin API key - MVP)
- Usar URL de Google Maps directamente
- Formato: `https://www.google.com/maps/embed?pb=...`
- Obtener desde Google Maps > Compartir > Insertar mapa

**Para MVP: usar Opción B** (sin API key). Migrar a Opción A cuando se lance a producción.

### 4. Styles

**Tailwind classes:**
- `section-title` - Ya existe en global.css
- `btn-primary` - Verificar si existe, agregar si no
- Responsive grid: `grid-cols-1 lg:grid-cols-2`
- Aspect ratios: `aspect-video` o fixed height

**Global CSS additions (si no existe btn-primary):**

```css
.btn-primary {
  @apply inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg;
  @apply hover:bg-primary-dark transition-colors duration-200;
  @apply focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2;
}
```

### 5. Header Update

Agregar a `NAV_ITEMS` en `src/lib/config.ts`:

```typescript
{ label: 'Ubicación', href: '#ubicacion' }
```

---

## Key Decisions

**Decision 1: Google Maps Embed Strategy**
- Chosen: Simple iframe embed (sin API key) para MVP
- Rationale:
  - Más rápido de implementar
  - Suficiente para landing page
  - Evita complejidad de API key management en MVP
  - Fácil migrar a Embed API luego si se necesita

**Decision 2: Layout**
- Chosen: Grid 2 columnas desktop, stack mobile
- Rationale:
  - Consistente con diseño de otras secciones
  - Mapa grande más usable en desktop
  - Stack en mobile evita mapa muy pequeño

---

## Dependencies

- Google Maps iframe (no npm packages needed)
- Existing Tailwind setup
- Existing config structure (`CONTACT_INFO`)

---

## Performance

- **Lazy loading:** `loading="lazy"` en iframe
- **Aspect ratio:** Usar utilities de Tailwind para evitar layout shift
- **No blocking:** Iframe no bloquea renderizado de página

---

## Security

- `rel="noopener noreferrer"` en todos los links externos
- API key restrictions cuando se migre a Embed API

---

## Testing Strategy

- **Visual:** Desktop, tablet, mobile responsive
- **Functionality:** CTA abre Google Maps, navegación desde header funciona
- **Accessibility:** Semantic HTML, atributos ARIA, title en iframe
- **Performance:** Lazy loading funciona, no layout shift
