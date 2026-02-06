# Functional Spec: Contacto

## Overview

Sección de contacto y botón flotante de WhatsApp para facilitar la comunicación directa con el negocio desde cualquier parte del sitio.

---

## User-Facing Behavior

### Sección Contacto

1. **Título de Sección**
   - Texto: "Contacto" o "¡Comunicate con Nosotros!"
   - Estilo: Heading principal consistente con otras secciones

2. **Información de Contacto**
   - **Teléfono**: +54 11 5693 6377
     - Formato visible: +54 11 5693-6377
     - Clickeable: abre marcador de teléfono en mobile
   - **WhatsApp**: Mismo número
     - Link que abre WhatsApp directamente
     - Mensaje predeterminado incluido
   - **Email**: info@lapandillaperfecta.com (o el actual)
     - Clickeable: abre cliente de email
   - **Redes Sociales**: Links a Instagram y Facebook
     - Con iconos visuales
     - Abren en nueva pestaña

3. **Horarios de Atención**
   - Lunes a Viernes: 9:00 - 19:00
   - Sábado: 9:00 - 14:00
   - Domingo: Cerrado

4. **Layout**
   - Centrado, con espacio generoso
   - Iconos junto a cada método de contacto
   - CTAs destacados para WhatsApp y teléfono

---

### Botón Flotante WhatsApp

1. **Posición**
   - Fixed en bottom-right
   - Margen del borde: ~20px desktop, ~16px mobile
   - Siempre visible (scroll independiente)
   - z-index alto (sobre todo el contenido)

2. **Apariencia**
   - Icono de WhatsApp (🟢 ícono verde característico)
   - Forma circular
   - Tamaño: ~60px diameter (desktop), ~56px (mobile)
   - Color de fondo: WhatsApp green (#25D366)
   - Sombra pronunciada para destacar

3. **Interacción**
   - Hover: Escala ligeramente (1.1x) y aumenta sombra
   - Click: Abre WhatsApp en nueva pestaña
   - URL: `https://wa.me/541156936377?text=Hola!%20Me%20gustaría%20consultar%20sobre...`
   - Animación sutil de "pulso" cada 3-5 segundos (opcional)

4. **Accesibilidad**
   - aria-label: "Abrir chat de WhatsApp"
   - title: "¿Tenés alguna consulta? ¡Escribinos!"

---

## User Flows

### Flow 1: Usuario quiere contactar por teléfono
1. Usuario scrollea a sección Contacto
2. Ve número de teléfono con ícono
3. Click en número → abre marcador (mobile) o muestra número (desktop)

### Flow 2: Usuario quiere escribir por WhatsApp
**Opción A: Desde botón flotante**
1. Usuario está en cualquier parte del sitio
2. Ve botón verde flotante siempre visible
3. Click → abre WhatsApp con mensaje predeterminado

**Opción B: Desde sección Contacto**
1. Usuario scrollea a sección Contacto
2. Ve botón/link de WhatsApp
3. Click → abre WhatsApp con mensaje predeterminado

### Flow 3: Usuario quiere enviar email
1. Usuario scrollea a sección Contacto
2. Click en email → abre cliente de email con dirección pre-llenada

---

## Acceptance Criteria

**Sección Contacto:**
- GIVEN usuario visita la página
- WHEN scrollea a sección Contacto
- THEN ve toda la información de contacto claramente organizada

**Botón Flotante:**
- GIVEN usuario está en cualquier parte del sitio
- WHEN scrollea hacia arriba o abajo
- THEN el botón de WhatsApp permanece visible en bottom-right

- GIVEN usuario hace click en botón flotante WhatsApp
- WHEN el click se ejecuta
- THEN se abre WhatsApp Web/App con número correcto y mensaje predeterminado

---

## Edge Cases

- **WhatsApp no instalado (desktop)**: Abre WhatsApp Web
- **Mobile sin WhatsApp**: El link debería funcionar igual (abre tienda)
- **Botón flotante sobre contenido**: z-index debe ser suficientemente alto
- **Scroll hasta el footer**: Botón no debe tapar info importante del footer
