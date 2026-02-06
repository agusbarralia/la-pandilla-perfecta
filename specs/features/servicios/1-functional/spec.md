# Servicios - Functional Spec

## Overview

Sección que presenta los servicios ofrecidos por La Pandilla Perfecta. Grid de cards visualmente atractivo que comunica el valor del negocio.

---

## User Stories

### US-001: Conocer servicios disponibles
**Como** visitante del sitio
**Quiero** ver una lista clara de los servicios ofrecidos
**Para** saber si el negocio cubre mis necesidades

**Acceptance Criteria:**
- Lista de servicios visible y legible
- Cada servicio tiene nombre descriptivo
- Descripción breve de cada servicio
- Ícono visual para identificación rápida
- Agrupación lógica (si aplica)

---

### US-002: Entender alcance de cada servicio
**Como** visitante
**Quiero** leer una descripción breve de cada servicio
**Para** entender qué incluye y si me sirve

**Acceptance Criteria:**
- Descripción de 1-2 oraciones por servicio
- Lenguaje claro y directo
- Enfoque en beneficios para el cliente

---

### US-003: Navegar servicios en mobile
**Como** usuario mobile
**Quiero** ver los servicios en una lista vertical fácil de scrollear
**Para** revisar todas las opciones cómodamente

**Acceptance Criteria:**
- Layout de 1 columna en mobile
- Cards con padding suficiente para touch
- Sin horizontal scroll

---

## Content

### Título de Sección
- **Opción A:** "Nuestros Servicios"
- **Opción B:** "¿Qué ofrecemos?"
- **Opción C:** "Servicios para tu mascota"
- **Recomendación:** Opción A (claro y directo)

### Subtítulo (opcional)
"Todo lo que tu peludo necesita en un solo lugar"

### Lista de Servicios

1. **Venta de Alimentos**
   - Descripción: "Alimento balanceado de las mejores marcas para perros y gatos de todas las edades"
   - Ícono: 🍖

2. **Peluquería Canina**
   - Descripción: "Cortes de pelo, baños medicinales y estéticos para que tu mascota luzca espectacular"
   - Ícono: ✂️

3. **Lavado y Baño**
   - Descripción: "Servicio de baño completo con productos de calidad y secado profesional"
   - Ícono: 🛁

4. **Accesorios**
   - Descripción: "Collares, correas, juguetes, camas y todo lo necesario para el bienestar de tu mascota"
   - Ícono: 🎾

5. **Productos de Higiene**
   - Descripción: "Shampoos, antipulgas, desparasitarios y productos para el cuidado diario"
   - Ícono: 🧴

6. **Asesoramiento**
   - Descripción: "Consultas sobre alimentación, cuidados y bienestar de tu mascota"
   - Ícono: 💬

_(Nota: lista sujeta a confirmación del cliente - usar como placeholder)_

---

## Visual Design

### Layout

**Mobile (< 768px)**
```
┌─────────────────────┐
│  Nuestros Servicios │
│   [Subtítulo]       │
├─────────────────────┤
│  🍖                 │
│  Venta de Alimentos │
│  [Descripción]      │
├─────────────────────┤
│  ✂️                 │
│  Peluquería Canina  │
│  [Descripción]      │
├─────────────────────┤
│  [... más cards]    │
└─────────────────────┘
```

**Tablet (768px - 1024px)**
```
┌──────────────────────────────────┐
│      Nuestros Servicios          │
│        [Subtítulo]               │
├─────────────────┬────────────────┤
│  🍖             │  ✂️            │
│  Alimentos      │  Peluquería    │
│  [Desc]         │  [Desc]        │
├─────────────────┼────────────────┤
│  🛁             │  🎾            │
│  Lavado         │  Accesorios    │
│  [Desc]         │  [Desc]        │
└─────────────────┴────────────────┘
```

**Desktop (> 1024px)**
```
┌──────────────────────────────────────────┐
│         Nuestros Servicios               │
│           [Subtítulo]                    │
├─────────────┬─────────────┬──────────────┤
│  🍖         │  ✂️         │  🛁          │
│  Alimentos  │  Peluquería │  Lavado      │
│  [Desc]     │  [Desc]     │  [Desc]      │
├─────────────┼─────────────┼──────────────┤
│  🎾         │  🧴         │  💬          │
│  Accesorios │  Higiene    │  Asesor.     │
│  [Desc]     │  [Desc]     │  [Desc]      │
└─────────────┴─────────────┴──────────────┘
```

### Card Design

Cada card incluye:
- **Ícono grande** (emoji o icon, centrado)
- **Título del servicio** (font-semibold, text-lg)
- **Descripción** (text-sm o text-base, text-gray-600)
- **Background:** blanco con border sutil o con shadow
- **Hover effect:** shadow más pronunciado o scale(1.02)

**Color accents:**
- Border top de card con color primario o secundario
- Ícono con color de marca (opcional)

---

## Responsive Behavior

### Mobile (< 768px)
- 1 columna
- Cards full-width con padding horizontal
- Gap vertical entre cards: 1rem

### Tablet (768px - 1024px)
- 2 columnas
- Gap: 1.5rem
- Cards igual altura en cada fila

### Desktop (> 1024px)
- 3 columnas
- Gap: 2rem
- Max-width del container: 1200px
- Cards igual altura en cada fila

---

## Interactions

### Card Hover (Desktop)
- Shadow: `hover:shadow-lg`
- Transform: `hover:scale-[1.02]`
- Transition: smooth (200ms)

### Card Focus (Keyboard)
- Si cards son clickables (futuro): outline visible

---

## Accessibility

- Heading hierarchy: `<h2>` para "Nuestros Servicios"
- Cada card en un `<article>` o `<div>` semántico
- Iconos decorativos (no requieren alt text)
- Contraste de texto sobre fondo: WCAG AA (4.5:1)

---

## Future Enhancements (Out of Scope)

- Links en cada card a página de detalle del servicio
- Modal con más info al hacer click en card
- Formulario de consulta por servicio
- Precios (si aplicable)
- Fotos reales de servicios en lugar de iconos
