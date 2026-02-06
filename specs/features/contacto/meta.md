# Feature: Contacto

Status: ✅ Completed
Priority: P0 (Critical - MVP)
Started: 2026-02-05
Completed: 2026-02-05
Dependencies: Ubicación (completed - para mostrar información coherente)
Blockers: none

---

## Description

Sección de contacto con toda la información relevante: teléfono, WhatsApp, email, redes sociales, horarios. Incluye botón flotante de WhatsApp que permanece visible en toda la página para contacto rápido.

---

## Success Criteria

- [x] Sección de contacto visible en la página principal
- [x] Teléfono de contacto visible y clickeable
- [x] Email visible y clickeable
- [x] Links a redes sociales (Instagram, Facebook)
- [x] Horarios de atención mostrados
- [x] Botón flotante de WhatsApp siempre visible (bottom-right)
- [x] Botón WhatsApp abre chat con mensaje predeterminado
- [x] Responsive design en mobile/tablet/desktop
- [x] Diseño coherente con brand palette

---

## Notes

- Número de WhatsApp real: **+54 11 5693 6377** (formato: 541156936377 para wa.me link)
- Botón flotante debe tener z-index alto para estar sobre todo el contenido
- Mensaje predeterminado: "Hola! Me gustaría consultar sobre..." (personalizable)
- Botón flotante debe ser accesible pero no intrusivo
- Considerar animación sutil en el botón flotante
- Sección debe tener id="contacto" para navegación desde header
