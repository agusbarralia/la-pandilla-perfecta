# Functional Spec: SEO Básico

## Overview
Agregar meta tags esenciales para SEO y compartir en redes sociales.

## User-Facing Impact

### 1. Google Search Results
**Antes:**
```
La Pandilla Perfecta
Pet shop - Productos, servicios y atención para tu mascota
```

**Después:**
```
La Pandilla Perfecta - Pet Shop en CABA
🐾 Alimento premium, peluquería y lavado canino. Yerbal 547, CABA.
⭐⭐⭐⭐⭐ Visítanos | WhatsApp: +54 11 5693-6377
```

### 2. Compartir en Redes Sociales
Cuando alguien comparte el link en Facebook/WhatsApp/Twitter:
- **Imagen**: Hero image del sitio
- **Título**: "La Pandilla Perfecta - Pet Shop en CABA"
- **Descripción**: Descripción completa con servicios
- **URL**: Visible y limpia

### 3. Google Business (Structured Data)
Google podrá mostrar:
- 🏪 Tipo de negocio: Pet Store
- 📍 Dirección exacta
- 📞 Teléfono clickeable
- 🕐 Horarios de atención
- ⭐ Posibilidad de mostrar ratings (futuro)

## What Gets Added

### Meta Tags
- Title (ya existe, mejorar)
- Description (ya existe, mejorar)
- Open Graph (og:*) - 6 tags
- Twitter Card - 4 tags
- Canonical URL
- Robots

### Structured Data
- JSON-LD type: LocalBusiness > PetStore
- Con: name, address, phone, hours, geo coordinates

### Favicon
- ✅ Ya existe (favicon.svg, favicon.ico)

## Expected Behavior
- Validación con Facebook Debugger: ✅ Pass
- Validación con Schema.org validator: ✅ Pass
- Google Search Console: Sin errores de structured data
