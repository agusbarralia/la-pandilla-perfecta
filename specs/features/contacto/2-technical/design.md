# Technical Design: Contacto

## Approach

Crear dos componentes separados:
1. **Contacto.astro** - Sección de contacto tradicional en el flujo de la página
2. **WhatsAppButton.astro** - Botón flotante global que aparece en todas las páginas

---

## Architecture

### Components
- **Contacto.astro** (`src/components/Contacto.astro`)
  - Sección de contacto con toda la información
  - Integrado en index.astro como sección

- **WhatsAppButton.astro** (`src/components/WhatsAppButton.astro`)
  - Botón flotante fixed position
  - Integrado en BaseLayout.astro (global)

### Config
- Actualizar `CONTACT_INFO` en `src/lib/config.ts`:
  - Agregar `phone` real: '+54 11 5693-6377'
  - Agregar `whatsapp`: '541156936377' (formato internacional sin +)
  - Agregar `whatsappMessage`: mensaje predeterminado

---

## Implementation Details

### 1. Config Update

```typescript
// src/lib/config.ts
export const CONTACT_INFO = {
  phone: '+54 11 5693-6377',
  phoneRaw: '541156936377', // For WhatsApp links
  email: 'info@lapandillaperfecta.com',
  whatsapp: '541156936377',
  whatsappMessage: 'Hola! Me gustaría consultar sobre...',
  // ... rest
}
```

### 2. WhatsAppButton Component

**WhatsAppButton.astro:**
- Fixed position: `bottom: 20px; right: 20px`
- z-index: 1000 (alto para estar sobre todo)
- Circular button: 60px x 60px
- Background: #25D366 (WhatsApp green)
- WhatsApp icon: usar SVG o emoji 💬
- Hover: scale(1.1), aumentar sombra
- Link: `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`

**Styles:**
```css
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 1000;
  transition: all 0.3s ease;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0,0,0,0.2);
}

@media (max-width: 768px) {
  .whatsapp-float {
    width: 56px;
    height: 56px;
    bottom: 16px;
    right: 16px;
  }
}
```

### 3. Contacto Component

**Contacto.astro:**
- Similar estructura a Ubicacion
- Grid/flexbox centrado
- Cards o secciones para cada método de contacto
- Iconos para cada método (📞 ☎️ 📧 📱 📷)
- CTAs destacados para teléfono y WhatsApp
- Horarios mostrados claramente

### 4. Integration

- **WhatsAppButton**: Agregar a `BaseLayout.astro` (después del `<slot />`, antes del `</body>`)
  - Así aparece en todas las páginas
- **Contacto**: Agregar a `index.astro` (después de Ubicacion, antes de Footer)
- **Header**: Agregar link "Contacto" a NAV_ITEMS

---

## Key Decisions

**Decision 1: Botón Flotante Global vs. Solo en Home**
- Chosen: Global (en BaseLayout)
- Rationale:
  - Acceso rápido desde cualquier parte
  - Mejor UX para conversión
  - Patrón común en sitios de negocios

**Decision 2: SVG vs. Emoji para WhatsApp Icon**
- Chosen: SVG del logo oficial de WhatsApp
- Rationale:
  - Más profesional
  - Mejor control de tamaño/color
  - Reconocible universalmente

**Decision 3: Animación de Pulso**
- Chosen: Animación sutil opcional (puede agregarse después)
- Rationale:
  - No intrusivo
  - Llama la atención sin ser molesto
  - Mejora visibilidad del botón

---

## Styles & Design

**WhatsApp Brand Colors:**
- Primary: #25D366 (verde WhatsApp)
- Hover: #128C7E (verde más oscuro)

**Layout Contacto:**
- Centrado, max-width-4xl
- Cards o grid para cada método
- Spacing generoso entre elementos

---

## Dependencies

- No external packages needed
- WhatsApp SVG icon (incluir inline o como asset)
- Existing Tailwind setup
- Existing config structure

---

## Performance

- WhatsApp button: CSS-only animations (no JS)
- Fixed position: no reflow/repaint on scroll
- SVG icon: inline para evitar request extra

---

## Accessibility

- WhatsApp button: `aria-label`, `role="button"`
- All links: descriptive text
- Phone links: `tel:` protocol
- Email links: `mailto:` protocol
- Contraste adecuado en todos los elementos

---

## Testing Strategy

- **Visual**: Desktop, tablet, mobile
- **Functionality**:
  - WhatsApp link abre correctamente
  - Phone links funcionan en mobile
  - Email links abren cliente
- **Responsive**: Botón flotante no tapa contenido importante
- **z-index**: Botón siempre visible sobre todo el contenido
