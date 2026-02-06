# Hero Section - Functional Spec

## Overview

Sección hero de la landing page. Primera impresión del sitio, comunica identidad de marca y valor del negocio.

---

## User Stories

### US-001: Ver información principal del negocio
**Como** visitante del sitio
**Quiero** ver el nombre del negocio y su propuesta de valor inmediatamente al entrar
**Para** entender de qué se trata y si es relevante para mí

**Acceptance Criteria:**
- Nombre "La Pandilla Perfecta" visible claramente
- Slogan "El espacio para tu peludo" visible debajo del nombre
- Jerarquía visual clara (nombre > slogan > CTA)
- Colores de marca aplicados

---

### US-002: Ver imagen representativa
**Como** visitante
**Quiero** ver una imagen del local o mascotas
**Para** generar conexión emocional y visualizar el espacio

**Acceptance Criteria:**
- Imagen de fondo o destacada en hero
- Imagen optimizada (WebP, responsive)
- Alt text descriptivo para accesibilidad
- Contraste suficiente entre texto e imagen (overlay si es necesario)

---

### US-003: Acceder rápidamente a contacto
**Como** visitante interesado
**Quiero** un botón de acción visible
**Para** contactarme rápidamente sin buscar

**Acceptance Criteria:**
- CTA button prominente ("Contactanos" o "Ver Servicios")
- Click redirige a sección de contacto o WhatsApp
- Hover effect visible
- Accesible por teclado (tab navigation)

---

## Visual Design

### Layout Options

**Opción A: Centrado simple**
```
┌─────────────────────────────────┐
│                                 │
│     🐾 La Pandilla Perfecta     │
│   "El espacio para tu peludo"   │
│                                 │
│        [Contactanos]            │
│                                 │
└─────────────────────────────────┘
```

**Opción B: Imagen de fondo con overlay**
```
┌─────────────────────────────────┐
│  [Imagen perros/local fondo]    │
│       [Overlay gradient]        │
│                                 │
│     🐾 La Pandilla Perfecta     │
│   "El espacio para tu peludo"   │
│        [Contactanos]            │
│                                 │
└─────────────────────────────────┘
```

**Opción C: Split (texto izq, imagen der)**
```
┌──────────────┬──────────────────┐
│              │                  │
│ La Pandilla  │   [Imagen]       │
│ Perfecta     │                  │
│              │                  │
│ "El espacio  │                  │
│ para tu      │                  │
│ peludo"      │                  │
│              │                  │
│ [Contactanos]│                  │
│              │                  │
└──────────────┴──────────────────┘
```

**Recomendación:** Opción B (imagen de fondo con overlay) - visualmente atractivo, emocional, moderno.

---

## Content

### Texto
- **Nombre:** "La Pandilla Perfecta"
- **Slogan:** "El espacio para tu peludo"
- **CTA:** "Contactanos" (link a sección contacto o WhatsApp)

### Imagen
- Foto del local, o perros/gatos felices
- Placeholder: `https://images.unsplash.com/photo-1548199973-03cce0bbc87b` (perros felices)
- Alt text: "Perros felices en La Pandilla Perfecta"

---

## Responsive Behavior

### Mobile (< 768px)
- Stack vertical
- Imagen de fondo con overlay
- Texto centrado
- Padding reducido
- CTA full-width o centrado

### Tablet (768px - 1024px)
- Similar a mobile pero con más padding
- CTA no full-width

### Desktop (> 1024px)
- Opción B o C según diseño
- Más espacio vertical (altura hero: 80-90vh)
- CTA inline

---

## Interactions

### CTA Button
- **Default:** Color primario (#27917B) con texto blanco
- **Hover:** Oscurecer (#1e735f) o scale(1.05)
- **Active:** Presionar efecto
- **Focus:** Outline visible para teclado

### Scroll Behavior
- Opcional: Animación fade-in al cargar
- Opcional: Parallax en imagen de fondo (sutil)

---

## Accessibility

- Heading hierarchy: `<h1>` para nombre, `<p>` para slogan
- CTA con texto descriptivo (no solo iconos)
- Contraste WCAG AA mínimo (4.5:1 para texto normal, 3:1 para texto grande)
- Alt text en imagen
- Keyboard navigable

---

## Out of Scope

- Carousel/slider de múltiples imágenes (single hero por ahora)
- Video background (static image solamente)
- Animaciones complejas
- Formulario en hero (solo CTA button)
