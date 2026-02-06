# Servicios - Technical Design

## Architecture

### Component Structure
```
src/
├── components/
│   ├── Services.astro         # Main services section
│   └── ServiceCard.astro      # Individual service card
├── pages/
│   └── index.astro            # Import Services into homepage
└── lib/
    └── config.ts              # Add SERVICES constant
```

### Component API

**Services.astro**
```typescript
interface Props {
  title?: string;
  subtitle?: string;
}
```

**ServiceCard.astro**
```typescript
interface Props {
  icon: string;
  title: string;
  description: string;
}
```

---

## Implementation Details

### 1. Services Data (config.ts)

Add to `src/lib/config.ts`:

```typescript
export const SERVICES = [
  {
    id: 'alimentos',
    icon: '🍖',
    title: 'Venta de Alimentos',
    description: 'Alimento balanceado de las mejores marcas para perros y gatos de todas las edades',
  },
  {
    id: 'peluqueria',
    icon: '✂️',
    title: 'Peluquería Canina',
    description: 'Cortes de pelo, baños medicinales y estéticos para que tu mascota luzca espectacular',
  },
  {
    id: 'lavado',
    icon: '🛁',
    title: 'Lavado y Baño',
    description: 'Servicio de baño completo con productos de calidad y secado profesional',
  },
  {
    id: 'accesorios',
    icon: '🎾',
    title: 'Accesorios',
    description: 'Collares, correas, juguetes, camas y todo lo necesario para el bienestar de tu mascota',
  },
  {
    id: 'higiene',
    icon: '🧴',
    title: 'Productos de Higiene',
    description: 'Shampoos, antipulgas, desparasitarios y productos para el cuidado diario',
  },
  {
    id: 'asesoria',
    icon: '💬',
    title: 'Asesoramiento',
    description: 'Consultas sobre alimentación, cuidados y bienestar de tu mascota',
  },
];
```

---

### 2. ServiceCard.astro Component

**Structure:**
- Card wrapper con padding y border/shadow
- Ícono grande centrado
- Título del servicio
- Descripción

**Key styles:**
- Background: `bg-white`
- Border: `border border-gray-200` o shadow
- Hover: `hover:shadow-lg hover:scale-[1.02] transition-transform duration-200`
- Border-top accent: `border-t-4 border-primary` (opcional)

**Example:**
```astro
---
interface Props {
  icon: string;
  title: string;
  description: string;
}

const { icon, title, description } = Astro.props;
---

<div class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-200">
  <div class="text-5xl mb-4 text-center">{icon}</div>
  <h3 class="text-xl font-semibold text-gray-900 mb-2 text-center">{title}</h3>
  <p class="text-gray-600 text-center">{description}</p>
</div>
```

---

### 3. Services.astro Component

**Structure:**
- Section wrapper con padding
- Container con max-width
- Heading + subtitle
- Grid de ServiceCard components

**Grid classes:**
```
grid
grid-cols-1          // mobile
md:grid-cols-2       // tablet
lg:grid-cols-3       // desktop
gap-6 md:gap-8       // responsive gap
```

**Example:**
```astro
---
import ServiceCard from './ServiceCard.astro';
import { SERVICES } from '../lib/config';

interface Props {
  title?: string;
  subtitle?: string;
}

const {
  title = 'Nuestros Servicios',
  subtitle = 'Todo lo que tu peludo necesita en un solo lugar',
} = Astro.props;
---

<section class="py-16 md:py-24 bg-gray-50" id="servicios">
  <div class="max-w-7xl mx-auto px-4 md:px-8">
    <!-- Heading -->
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      <p class="text-lg text-gray-600">{subtitle}</p>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {SERVICES.map((service) => (
        <ServiceCard
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  </div>
</section>
```

---

### 4. Integration into index.astro

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Hero from '../components/Hero.astro';
import Services from '../components/Services.astro';
---

<BaseLayout>
  <Hero />
  <Services />
</BaseLayout>
```

---

## Styling Decisions

### Section Background
- `bg-gray-50` para diferenciar de hero (white/image)
- Alternativa: `bg-white` con border-top de color primario

### Card Design
- **Option A:** Border + shadow sutil
  - `border border-gray-200 shadow-sm hover:shadow-lg`
- **Option B:** Border-top accent
  - `border-t-4 border-primary shadow-md`
- **Recomendación:** Option A (más limpio, moderno)

### Typography
- Heading: `text-3xl md:text-4xl font-bold`
- Subtitle: `text-lg text-gray-600`
- Card title: `text-xl font-semibold`
- Card description: `text-base text-gray-600`

### Colors
- Primary: `#27917B` (ya definido en theme)
- Text: `text-gray-900` (headings), `text-gray-600` (body)
- Background: `bg-gray-50` (section), `bg-white` (cards)

---

## Performance Considerations

1. **No images:** Solo emojis (ultra lightweight)
2. **Static rendering:** Astro genera HTML estático
3. **Minimal CSS:** Tailwind utilities (purged en build)
4. **No JavaScript:** Hover effects CSS-only

---

## Responsive Breakpoints

- **Mobile:** < 768px → 1 columna
- **Tablet:** 768px - 1024px → 2 columnas
- **Desktop:** > 1024px → 3 columnas

**Grid auto-fit alternative:**
```css
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
```
(Más flexible, pero menos control sobre breakpoints exactos)

**Decision:** Use explicit breakpoints (md:grid-cols-2 lg:grid-cols-3) para control preciso.

---

## Testing

### Manual Testing Checklist
- [ ] Services section renders below hero
- [ ] All 6 service cards visible
- [ ] Grid responsive (1→2→3 cols)
- [ ] Hover effects work on desktop
- [ ] Text readable on all devices
- [ ] No horizontal scroll on mobile
- [ ] Build succeeds

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari
- [ ] Chrome Mobile

---

## Edge Cases

1. **Long service description:**
   - Cards have min-height or equal heights via grid
   - Text wraps naturally

2. **Odd number of services:**
   - Grid handles gracefully (last row partial fill)

3. **Future: more than 6 services:**
   - Grid extends naturally
   - Consider pagination or "Ver más" button if > 12

---

## Future Enhancements (Out of Scope)

- Icon library (lucide-astro, heroicons) en lugar de emojis
- Fotos reales de servicios
- Modal con más detalles al click
- Link a página de detalle de cada servicio
- Filtros o categorías
- Animaciones de scroll (fade-in on viewport)
