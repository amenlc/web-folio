---
name: landing-page-architecture
description: Helps with a landing page architecture.
---

# Landing Page Architecture Skill

## 1. Document Setup (HTML5)
- [ ] Definir `<!DOCTYPE html>` y `<html lang="es">`.
- [ ] Meta tags: Charset, Viewport, Meta-description para SEO.
- [ ] Enlace a fuentes (Google Fonts) y hojas de estilo.

## 2. Componentes de Código
### Hero Section
- Contenedor: `section.hero`
- Elementos: `h1` (Main value prop), `p` (Sub-headline), `button.cta` (Primary action).
- Estilo: Flexbox/Grid para centrado perfecto.

### Features Grid
- Contenedor: `section.features`
- Estructura: `.grid` con 3 columnas (desktop) y 1 columna (mobile).
- Elementos: `.feature-card` (Icono, Título h3, Texto).

### Conversion Bar
- Contenedor: `section.cta-final`
- Elemento: Formulario simple de suscripción o botón destacado.

## 3. Guía de Estilos (CSS Variable Logic)
- `--primary-color`: #8b7869
- `--text-main`: #333 o similar para legibilidad.
- `--spacing-unit`: 1rem para márgenes consistentes.

## 4. Scripts Esenciales
- Intersección de observador (Intersection Observer) para animaciones al hacer scroll.
- Validación simple de formularios en JavaScript.

## 5. Estructura del Proyecto

mi-landing-page/
├── index.html          # Archivo principal (Punto de entrada)
├── css/                # Todos los estilos
│   ├── reset.css       # Limpieza de estilos por defecto del navegador
│   ├── variables.css   # Colores, fuentes y espaciados (CSS Variables)
│   └── style.css       # Estilos principales y layouts
├── js/                 # Lógica interactiva
│   └── main.js         # Scripts globales (animaciones, validación)
├── assets/             # Recursos estáticos
│   ├── img/            # Fotografías (jpg, webp)
│   ├── icons/          # Iconos (svg)
│   └── fonts/          # Tipografías locales (woff2)
└── README.md           # Documentación del proyecto