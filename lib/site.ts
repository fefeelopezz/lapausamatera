import type { Metadata } from "next"

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")

export const SITE_NAME = "La Pausa Matera"

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const full = `${title} | ${SITE_NAME}`
  const images = [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE_NAME }]
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", locale: "es_AR", siteName: SITE_NAME, url: path, title: full, description, images },
    twitter: { card: "summary_large_image", title: full, description, images },
  }
}

export const SITE_DESCRIPTION =
  "Tienda de mates artesanales, termos y bombillas en Argentina. Mates camioneros, imperiales y torpedos de calabaza y algarrobo, termos y bombillones premium. Armá tu pedido online y confirmalo por WhatsApp."
