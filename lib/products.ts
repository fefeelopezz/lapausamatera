export type Category = "mates" | "termos" | "bombillas"

export type Product = {
  id: string
  name: string
  category: Category
  image: string
  price: number // ARS
}

export const CATEGORIES: { value: Category; label: string }[] = [
  { value: "mates", label: "Mates" },
  { value: "termos", label: "Termos" },
  { value: "bombillas", label: "Bombillas" },
]

export const PRODUCTS: Product[] = [
  { id: "camionero", name: "Camionero", category: "mates", image: "/mates/camioneroClasico.webp", price: 32000 },
  { id: "camionero-algarrobo", name: "Camionero Algarrobo", category: "mates", image: "/mates/camioneroAlgarrobo.webp", price: 38000 },
  { id: "camionero-base-alpaca", name: "Camionero Base Alpaca", category: "mates", image: "/mates/camioneroAlpaca.webp", price: 42000 },
  { id: "camionero-croco", name: "Camionero Croco", category: "mates", image: "/mates/camioneroCroco.webp", price: 40000 },
  { id: "camionero-deluxe", name: "Camionero Deluxe", category: "mates", image: "/mates/camioneroDeluxe.webp", price: 48000 },
  { id: "imperial", name: "Imperial", category: "mates", image: "/mates/imperialClasico.webp", price: 45000 },
  { id: "imperial-algarrobo", name: "Imperial Algarrobo", category: "mates", image: "/mates/imperialAlgarrobo.webp", price: 50000 },
  { id: "imperial-base-alpaca", name: "Imperial Base Alpaca", category: "mates", image: "/mates/imperialAlpaca.webp", price: 55000 },
  { id: "imperial-croco", name: "Imperial Croco", category: "mates", image: "/mates/imperialCroco.webp", price: 52000 },
  { id: "imperial-deluxe", name: "Imperial Deluxe", category: "mates", image: "/mates/imperialDeluxe.webp", price: 60000 },
  { id: "torpedo", name: "Torpedo", category: "mates", image: "/mates/torpedoClasico.webp", price: 30000 },
  { id: "torpedo-base-alpaca", name: "Torpedo Base Alpaca", category: "mates", image: "/mates/torpedoAlpaca.webp", price: 38000 },
  { id: "torpedo-croco", name: "Torpedo Croco", category: "mates", image: "/mates/torpedoCroco.webp", price: 36000 },
  { id: "termo-media-negro", name: "Termo Media Manija Negro", category: "termos", image: "/termos/termoMediaNegro.webp", price: 55000 },
  { id: "termo-media-plateado", name: "Termo Media Manija Plateado", category: "termos", image: "/termos/termoMediaPlateado.webp", price: 55000 },
  { id: "termo-system-1l", name: "Termo System 1L", category: "termos", image: "/termos/termoSystem1L.webp", price: 48000 },
  { id: "bombilla-clasica", name: "Bombilla Clásica", category: "bombillas", image: "/bombillas/bombillaClasica.webp", price: 9000 },
  { id: "bombillon-pico-loro", name: "Bombillón Premium Pico de Loro", category: "bombillas", image: "/bombillas/bombillonPremiumPicoLoro.webp", price: 18000 },
  { id: "bombillon-pico-rey", name: "Bombillón Premium Pico de Rey", category: "bombillas", image: "/bombillas/bombillonPremiumPicoRey.webp", price: 18000 },
]

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(n)
