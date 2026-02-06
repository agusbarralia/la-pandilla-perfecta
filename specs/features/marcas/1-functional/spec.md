# Marcas - Functional Spec

## Overview

Sección que presenta las marcas de alimento para mascotas con las que trabaja el negocio. Genera confianza y credibilidad mostrando colaboración con marcas reconocidas del mercado.

---

## User Stories

### US-001: Ver marcas disponibles
**Como** visitante del sitio
**Quiero** ver las marcas de alimento que maneja el negocio
**Para** saber si venden mi marca preferida o marcas de confianza

**Acceptance Criteria:**
- Grid de logos de marcas visible
- 6 marcas mostradas claramente
- Logos reconocibles y legibles
- Layout ordenado y profesional

---

### US-002: Reconocer marcas de calidad
**Como** dueño de mascota
**Quiero** identificar rápidamente si hay marcas premium/conocidas
**Para** confiar en la calidad de los productos del negocio

**Acceptance Criteria:**
- Logos de marcas reconocidas (Eukanuba, Royal Canin, Pro Plan, etc.)
- Tamaño suficiente para reconocimiento
- Contraste adecuado sobre fondo

---

## Content

### Título de Sección
- **Opción A:** "Marcas que trabajamos"
- **Opción B:** "Nuestras Marcas"
- **Opción C:** "Trabajamos con las mejores marcas"
- **Recomendación:** Opción C (más persuasivo, comunica calidad)

### Subtítulo (opcional)
"Alimento premium para el bienestar de tu mascota"

### Marcas
1. **Eukanuba** - Marca premium de alimento científico
2. **Royal Canin** - Líder mundial en nutrición para mascotas
3. **Golocan** - Marca argentina de calidad
4. **Unik** - Alimento super premium argentino
5. **Vitalcan** - Marca tradicional argentina
6. **Pro Plan** - Nutrición avanzada de Purina

---

## Visual Design

### Layout Reference
Basado en imagen proporcionada:
- Fondo rosa claro
- Logos distribuidos en grid
- 2 filas en desktop (3 logos por fila)
- Logos en negro/grayscale para uniformidad
- Espaciado generoso
- Centrado

### Layout Options

**Desktop (> 1024px)**
```
┌────────────────────────────────────┐
│  Trabajamos con las mejores marcas │
│                                    │
│  [Logo1]  [Logo2]  [Logo3]        │
│                                    │
│  [Logo4]  [Logo5]  [Logo6]        │
└────────────────────────────────────┘
```

**Tablet (768px - 1024px)**
```
┌────────────────────────────┐
│  Trabajamos con las...     │
│                            │
│  [Logo1]  [Logo2]          │
│  [Logo3]  [Logo4]          │
│  [Logo5]  [Logo6]          │
└────────────────────────────┘
```

**Mobile (< 768px)**
```
┌──────────────┐
│  Trabajamos  │
│  con las...  │
│              │
│   [Logo1]    │
│   [Logo2]    │
│   [Logo3]    │
│   [Logo4]    │
│   [Logo5]    │
│   [Logo6]    │
└──────────────┘
```

---

## Responsive Behavior

### Mobile (< 768px)
- 1-2 columnas
- Stack vertical
- Logos más grandes para reconocimiento

### Tablet (768px - 1024px)
- 2-3 columnas
- Spacing reducido

### Desktop (> 1024px)
- 3 columnas (2 filas)
- Spacing generoso
- Logos más pequeños pero claramente visibles

---

## Styling

### Background
- Rosa claro (similar a imagen referencia)
- Color sugerido: `#F0C9D9` o `#E8B4CD` o usar variante de secondary
- Degradado sutil (opcional)

### Logos
- Grayscale filter para uniformidad: `filter: grayscale(100%)`
- Opacity reducida: `opacity: 0.7`
- Hover: `opacity: 1` + `grayscale(0%)` (muestra color original)
- Transition smooth

### Container
- Max-width: 1200px
- Padding horizontal: 4-8rem (responsive)
- Padding vertical: 16-24rem (responsive)

---

## Logo Sources

### Opción A: Real logos
Buscar SVG/PNG de alta calidad de:
- Eukanuba: sitio oficial o logo CDN
- Royal Canin: sitio oficial
- Golocan: sitio oficial argentino
- Unik: sitio oficial argentino
- Vitalcan: sitio oficial argentino
- Pro Plan: Purina sitio oficial

### Opción B: Placeholder
Si logos no disponibles fácilmente:
- Usar `<div>` con nombre de marca en tipografía bold
- Background white con border
- Simula "logo badge"

**Recomendación:** Intentar Opción A primero, fallback a Opción B si necesario.

---

## Accessibility

- Logos como `<img>` con `alt="Logo de [Marca]"`
- Si son links (futuro): navegables por teclado
- Contraste suficiente sobre fondo rosa

---

## Future Enhancements (Out of Scope)

- Links a páginas de productos por marca
- Hover con tooltip con info de la marca
- Carousel si hay muchas marcas (>10)
- Logos animados (fade-in on scroll)
