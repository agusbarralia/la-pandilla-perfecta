# Feature: Ubicación

Status: ✅ Completed
Priority: P0 (Critical - MVP)
Started: 2026-02-05
Completed: 2026-02-05
Dependencies: Header/Nav (completed - para agregar link)
Blockers: none

---

## Description

Sección mostrando la ubicación física del local con dirección completa y mapa embebido de Google Maps. Facilita que los clientes encuentren el pet shop.

---

## Success Criteria

- [x] Sección visible en la página principal
- [x] Dirección completa visible: Yerbal 547, CABA
- [x] Mapa de Google Maps embebido mostrando la ubicación exacta
- [x] Link "Cómo llegar" que abre Google Maps en nueva pestaña
- [x] Responsive design (mapa se adapta a diferentes tamaños de pantalla)
- [x] Diseño coherente con brand palette
- [x] Link en Header/Nav apunta a esta sección

---

## Notes

- Dirección real: **Yerbal 547, Ciudad Autónoma de Buenos Aires (CABA)**
- Usar Google Maps Embed API o iframe embed
- Considerar agregar indicaciones de transporte público cercano (opcional)
- Background: neutral (white/beige) para que mapa sea protagonista
- Sección debe tener id="ubicacion" para navegación desde header
