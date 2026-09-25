# Banquetes López V.I.P. — brief y guía para Visual Studio Code

**Fecha de investigación:** 25 de septiembre de 2026.  
**Proyecto:** página de presentación en Next.js (App Router), React, TypeScript y CSS adaptable.  
**Objetivo:** mostrar la marca y facilitar el contacto por su perfil oficial de Instagram.

## 1. Información de la marca

| Dato | Contenido disponible | Estado |
| --- | --- | --- |
| Nombre | Banquetes López V.I.P. | Aportado por la solicitante |
| Usuario | [@banquetes_lopez_vip](https://www.instagram.com/banquetes_lopez_vip/) | Enlace aportado |
| Categoría | Planificador de eventos | Aportado |
| Mensaje | «No realizamos eventos, cumplimos sueños ✨ Vive con nosotros una experiencia única en los momentos más especiales de tu vida 🥂 Realizamos tu evento.» | Adaptado del texto aportado; se corrigió «tú» por «tu» |
| Dirección | Av. Esperanza, calle 24 #82-05, Bogotá, Colombia | Aportada; verificar escritura exacta antes de publicidad impresa |
| Actividad de Instagram | 41 publicaciones, 223 seguidores, 72 seguidos | Captura textual aportada; cifras variables, no se muestran en la web |

## 2. Investigación de presencia pública

- **Instagram:** [perfil aportado](https://www.instagram.com/banquetes_lopez_vip/). La consulta automatizada no permitió revisar individualmente publicaciones, reels, comentarios o imágenes; el contenido de la biografía procede de la información suministrada.
- **Video potencialmente relacionado:** [«CASA DE BANQUETES V.I.P. LOPEZ» en YouTube](https://www.youtube.com/watch?v=xIRLcWvp45I), descrito en el resultado público como una casa de banquetes en Bogotá, Modelia y Salitre. No se pudo confirmar que pertenezca al mismo negocio ni reutilizar su material; se deja para comprobación manual.
- **Otro negocio con nombre similar:** [Casa de Banquetes López CBL](https://casadebanqueteslopez.com/) publica otra dirección, Carrera 103D #86-35, otro contacto y testimonios propios. **No se atribuyen sus reseñas, servicios, fotos ni trayectoria a Banquetes López V.I.P.**
- No se localizaron reseñas independientes verificables ni una galería de imágenes o videos reutilizables atribuibles con certeza al perfil indicado. No se deben inventar testimonios, valoraciones, precios, paquetes ni cifras de experiencia.

## 3. Recursos visuales

La carpeta `recursos/` se creó dentro del proyecto, pero no venía con archivos accesibles en este entorno. Coloca allí las fotos, videos, logotipo y autorizaciones originales. La portada actual utiliza `public/hero-event.png`, una **imagen ilustrativa creada con IA**; no representa un evento real de Banquetes López V.I.P.

Para sustituir la portada, exporta una foto propia horizontal (idealmente 1800 px de ancho o más), optimízala, guárdala como `public/hero-event.png` y revisa el contraste del título. Para una galería, selecciona imágenes autorizadas y añade pies de foto reales; para videos, utiliza archivos con permiso de publicación o enlaces oficiales confirmados. Conserva las fuentes y autorizaciones de cada imagen en `recursos/`.

## 4. Estructura implementada

1. Cabecera con nombre y navegación.
2. Portada con lema, imagen ilustrativa y llamada a contactar por Instagram.
3. Presentación de la marca, con lenguaje editorial sin afirmaciones comerciales no verificadas.
4. Tres tarjetas para iniciar una conversación sobre el tipo de celebración, sin ofrecer paquetes cerrados.
5. Enlace al perfil oficial para ver publicaciones y novedades.
6. Contacto, dirección y enlace al mapa.

El sitio es adaptable para móvil y escritorio, usa enlaces externos seguros, metadatos básicos y respeta la preferencia de movimiento reducido. No hay formulario que recoja datos personales ni integración de pagos.

## 5. Abrir y ejecutar en VS Code

Abre la carpeta `banquetes-lopez-vip` en Visual Studio Code. En una terminal del proyecto:

```bash
pnpm install
pnpm dev
```

Abre la dirección local que muestre la terminal. Para compilar:

```bash
pnpm build
```

El código principal está en `app/page.tsx`, el diseño en `app/globals.css`, los metadatos en `app/layout.tsx` y las imágenes públicas en `public/`. La configuración de publicación de este proyecto usa una capa compatible con la estructura de Next.js para el alojamiento; si se traslada a un proveedor Next.js convencional, revisa sus comandos y configuración de despliegue.

## 6. Paquetes para desarrollo web con IA

| Paquete | Uso previsto | Estado |
| --- | --- | --- |
| `next`, `react`, `react-dom`, `typescript` | Base de la web en Next.js | Instalados |
| `lucide-react` | Iconos accesibles y consistentes | Instalado |
| `ai` | SDK para futuras experiencias con IA (por ejemplo, un asistente de cotización) | Instalado, sin función activa |
| `@ai-sdk/openai` | Conector opcional para un modelo de OpenAI en una ruta de servidor | Instalado, sin clave configurada |
| `zod` | Validación de entradas si se agrega un formulario o asistente | Instalado |

**Antes de activar IA:** definir el caso de uso, las preguntas permitidas, los datos reales del negocio y el tratamiento de información personal. Mantener cualquier clave API solo en variables de entorno del servidor; nunca incluirla en componentes del navegador. La web actual funciona sin claves y no promete una función de IA que aún no existe.

## 7. Información pendiente para ampliar la web

- Logo oficial y manual de marca.
- Fotos y videos propios en `recursos/` con autorización de uso.
- Servicios exactos, cobertura geográfica, capacidad, menús y paquetes comerciales aprobados.
- Número de WhatsApp o correo oficial, horarios y confirmación de la dirección.
- Reseñas auténticas con autorización para publicarlas y enlace a la fuente.
- Confirmación de si el video antiguo de YouTube está vinculado a esta empresa.

## 8. Criterio editorial

Conservar la promesa de marca, revisar cada dato con la empresa antes de publicarlo y reemplazar la imagen ilustrativa por fotografías reales cuando estén disponibles. Los enlaces a Instagram permiten consultar el material original directamente; no copiar imágenes, comentarios o reels de terceros sin permiso.
