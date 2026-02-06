# Functional Spec: Ubicación

## Overview

Sección dedicada a mostrar la ubicación física del pet shop con mapa interactivo y dirección completa, facilitando que los clientes encuentren el local.

---

## User-Facing Behavior

### Información Mostrada

1. **Título de Sección**
   - Texto: "Dónde Estamos" o "Nuestra Ubicación" o "Visitanos"
   - Estilo: Heading principal, coherente con otras secciones

2. **Dirección Completa**
   - Calle y número: Yerbal 547
   - Ciudad: Ciudad Autónoma de Buenos Aires (CABA)
   - Formato claro y legible

3. **Mapa Interactivo**
   - Mapa de Google Maps embebido
   - Muestra pin exacto en Yerbal 547, CABA
   - Usuario puede hacer zoom, mover el mapa
   - Interacción completa del mapa habilitada

4. **CTA (Call to Action)**
   - Botón/Link: "Cómo llegar" o "Ver en Google Maps"
   - Acción: Abre Google Maps en nueva pestaña con la dirección
   - Formato del link: `https://www.google.com/maps/search/?api=1&query=Yerbal+547+CABA`

---

## Layout & Presentation

### Desktop
- Contenedor máximo width (max-w-7xl)
- Grid de 2 columnas:
  - Columna izquierda: Texto (título, dirección, CTA)
  - Columna derecha: Mapa embebido
- Padding generoso

### Mobile/Tablet
- Stack vertical:
  1. Título
  2. Dirección
  3. Mapa (full width)
  4. CTA button

---

## Interaction Details

1. **Mapa**
   - Usuario puede interactuar directamente con el mapa embebido
   - Zoom in/out, pan, etc.

2. **CTA Button**
   - Hover: Efecto visual (cambio de color/sombra)
   - Click: Abre Google Maps en nueva pestaña (`target="_blank"`)
   - Debe incluir `rel="noopener noreferrer"` por seguridad

3. **Navegación desde Header**
   - Link en el Header debe scrollear suavemente a esta sección
   - Sección debe tener `id="ubicacion"`

---

## Accessibility

- Mapa embebido debe tener título descriptivo (`title` attribute)
- CTA link debe tener texto descriptivo ("Abrir en Google Maps")
- Sección debe tener semántica HTML correcta (`<section>`, `<address>`)
- Contraste de texto adecuado sobre el background

---

## Edge Cases

- Si el mapa no carga: Mostrar al menos la dirección en texto
- En conexiones lentas: El texto/CTA deben estar disponibles inmediatamente
- Mapa debe respetar la política de privacidad (considerar lazy loading)
