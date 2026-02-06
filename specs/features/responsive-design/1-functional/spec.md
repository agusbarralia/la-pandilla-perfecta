# Functional Spec: Responsive Design

## Overview
Asegurar que toda la landing page funcione perfectamente en todos los dispositivos.

## Breakpoints (Tailwind)
- **Mobile**: < 768px (sm: 640px)
- **Tablet**: 768px - 1023px (md)
- **Desktop**: ≥ 1024px (lg, xl, 2xl)

## Components a Verificar

### 1. Header/Nav
- Mobile: Hamburger menu o stack vertical
- Desktop: Horizontal nav

### 2. Hero
- Mobile: Stack, texto legible
- Desktop: Grid/flex con imagen

### 3. Services
- Mobile: Cards stack (1 col)
- Tablet: 2 cols
- Desktop: 3 cols

### 4. Brands
- Mobile: Grid adaptable
- Desktop: Multiple columns

### 5. Ubicacion
- Mobile: Stack (mapa abajo)
- Desktop: 2 cols (info + mapa)

### 6. Contacto
- Mobile: Stack (1 col)
- Desktop: 2 cols grid

### 7. Footer
- Mobile: Stack
- Desktop: Multi-column

### 8. WhatsApp Button
- Debe estar visible pero no obstruir contenido
- Tamaño adecuado para touch

## Expected Behavior
- Sin scroll horizontal
- Padding/margins consistentes
- Texto siempre legible (min 16px base)
- Touch targets ≥ 44px en mobile
