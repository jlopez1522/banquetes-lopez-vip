# Eventos López VIP

Sitio de presentación para Eventos López VIP en Bogotá. Está construido con Next.js App Router, React, TypeScript, Three.js y CSS adaptable.

## Requisitos

- Node.js 22
- npm 11

## Desarrollo

```bash
npm ci
npm run dev
```

Abre `http://localhost:3000`.

## Comprobaciones

```bash
npm run lint
npm run typecheck
npm run build
npm test
```

La primera ejecución de las pruebas puede requerir:

```bash
npx playwright install chromium
```

## Configuración

Copia `.env.example` como `.env.local` y define `NEXT_PUBLIC_SITE_URL` con el dominio final para publicar la URL canónica correcta. En Vercel puedes omitir esta variable para usar automáticamente el dominio de producción; evita crearla con un valor vacío. No agregues secretos a variables con prefijo `NEXT_PUBLIC_`.

## Contenido

- Página principal: `app/page.tsx`
- Estilos: `app/globals.css`
- Escena Three.js: `app/HeroScene.tsx`
- Navegación: `app/SiteHeader.tsx`
- Imágenes públicas: `public/recursos/`
- Información de referencia: `BRIEF_BANQUETES_LOPEZ_VIP.md`

Las fotografías deben contar con autorización de publicación. La dirección, teléfonos, correo, horario y servicios vigentes están documentados en el brief. Antes de desplegar, confirma cualquier cambio comercial y no añadas precios, testimonios o capacidades no verificadas.

## Despliegue

El proyecto requiere un alojamiento compatible con Next.js para conservar la optimización automática de imágenes. Configura `NEXT_PUBLIC_SITE_URL` en el proveedor y ejecuta `npm run build` como control previo.
