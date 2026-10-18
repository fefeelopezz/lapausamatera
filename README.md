# La Pausa Matera

Tienda online de mates artesanales, termos y bombillas. Los clientes arman su pedido en un carrito y lo envían por WhatsApp; se confirma con una seña del 50% y el resto se abona al recibir.

## Secciones

| Ruta        | Contenido                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------ |
| `/`         | Presentación de la marca, categorías, productos destacados.                                            |
| `/catalogo` | Productos con filtros (Todos / Mates / Termos / Bombillas). Clic en un producto abre su detalle.       |
| `/pedidos`  | Paso a paso para comprar, aviso de la seña del 50% y carrito con envío del pedido por WhatsApp.        |
| `/contacto` | WhatsApp e Instagram, guías de curado (calabaza y algarrobo), preguntas frecuentes y tip del cebador. |

El carrito se guarda en el navegador (`localStorage`), así que no se pierde al recargar.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, `cacheComponents`) + React 19 + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com) con la paleta del logo (`app/globals.css`)
- [shadcn/ui](https://ui.shadcn.com) sobre Base UI (`components/ui/`)
- Íconos SVG de [All SVG Icons](https://allsvgicons.com) (Tabler, Fluent Emoji, Iconoven) en `components/icons.tsx`

## Desarrollo

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de producción
npm run start   # sirve el build
npm run lint
```

## Cómo editar el contenido

| Qué                                     | Dónde                                                  |
| --------------------------------------- | ------------------------------------------------------ |
| Productos, precios y descripciones      | `lib/products.ts`                                      |
| Fotos de productos                      | `public/mates/`, `public/termos/`, `public/bombillas/` |
| Número de WhatsApp y mensaje del pedido | `lib/whatsapp.ts`                                      |
| Redes sociales, curados y FAQ           | `app/contacto/page.tsx`                                |
| Pasos para pedir                        | `app/pedidos/page.tsx`                                 |
| Textos del inicio                       | `app/page.tsx`                                         |
| Colores                                 | variables de `:root` en `app/globals.css`              |
| Descripción SEO y nombre del sitio      | `lib/site.ts`                                          |

### Agregar un producto

1. Subí la foto en formato `.webp` a la carpeta de su categoría (ideal: lado mayor ≤ 1200 px, para que cargue rápido).
2. Agregá una entrada en `PRODUCTS` dentro de `lib/products.ts`:

```ts
{ id: "mate-nuevo", name: "Mate Nuevo", category: "mates", image: "/mates/mateNuevo.webp", price: 30000,
  description: "Descripción breve del producto." },
```

El `id` tiene que ser único: es lo que se guarda en el carrito.

## SEO

- Título, descripción, palabras clave, Open Graph y Twitter por página (`lib/site.ts` → `pageMetadata`).
- Banner para compartir en redes generado en `app/opengraph-image.tsx` (1200×630).
- `robots.txt` y `sitemap.xml` en `app/robots.ts` y `app/sitemap.ts`.

## Deploy

Pensado para [Vercel](https://vercel.com): importá el repo y listo. En otro hosting, definí la URL pública para que los links de SEO y la vista previa al compartir funcionen:

```bash
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

En Vercel se toma automáticamente del dominio de producción.

## Estructura

```
app/
  page.tsx               Inicio
  catalogo/              Catálogo + detalle de producto
  pedidos/               Pasos + carrito
  contacto/              Contacto, curados, FAQ
  opengraph-image.tsx    Banner para redes
  layout.tsx             Header, fondo, metadatos globales
components/
  cart-provider.tsx      Estado del carrito
  site-header.tsx        Navegación
  icons.tsx              Íconos SVG
  ui/                    Componentes shadcn
lib/
  products.ts            Catálogo
  whatsapp.ts            Link y mensaje de WhatsApp
  site.ts                URL, nombre y metadatos
public/                  Logo y fotos
```
